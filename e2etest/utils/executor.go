package utils

import (
	"context"
	"cosmossdk.io/math"
	"fmt"
	pooltypes "github.com/KYVENetwork/chain/x/pool/types"
	querytypes "github.com/KYVENetwork/chain/x/query/types"
	stakerstypes "github.com/KYVENetwork/chain/x/stakers/types"
	sdkclient "github.com/cosmos/cosmos-sdk/client"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkquery "github.com/cosmos/cosmos-sdk/types/query"
	govmodule "github.com/cosmos/cosmos-sdk/x/gov/types"
	govtypes "github.com/cosmos/cosmos-sdk/x/gov/types/v1"
	stakingtypes "github.com/cosmos/cosmos-sdk/x/staking/types"
	. "github.com/onsi/ginkgo/v2"
	. "github.com/onsi/gomega"
	"github.com/strangelove-ventures/interchaintest/v7/chain/cosmos"
	"github.com/strangelove-ventures/interchaintest/v7/ibc"
	"time"
)

const (
	defaultQueryTimeout = 10 * time.Second
	defaultTxTimeout    = 20 * time.Second
)

type KyveQuerier struct {
	BundlesClient querytypes.QueryBundlesClient
	PoolClient    querytypes.QueryPoolClient
}

func NewKyveQuerier(clientContext sdkclient.Context) *KyveQuerier {
	return &KyveQuerier{
		BundlesClient: querytypes.NewQueryBundlesClient(clientContext),
		PoolClient:    querytypes.NewQueryPoolClient(clientContext),
	}
}

type Querier struct {
	StakingClient stakingtypes.QueryClient
	GovClient     govtypes.QueryClient
	Query         *KyveQuerier
}

func NewQuerier(kyveChain *cosmos.CosmosChain) Querier {
	clientContext := sdkclient.Context{Client: kyveChain.GetNode().Client}
	return Querier{
		StakingClient: stakingtypes.NewQueryClient(clientContext),
		GovClient:     govtypes.NewQueryClient(clientContext),
		Query:         NewKyveQuerier(clientContext),
	}
}

type Executor struct {
	KyveChain   *cosmos.CosmosChain
	Broadcaster *cosmos.Broadcaster
	Q           Querier
}

func NewExecutor(kyveChain *cosmos.CosmosChain, broadcaster *cosmos.Broadcaster) *Executor {
	return &Executor{
		KyveChain:   kyveChain,
		Broadcaster: broadcaster,
		Q:           NewQuerier(kyveChain),
	}
}

func (e *Executor) ExpectTxSuccess(tx sdk.TxResponse, err error) {
	ExpectWithOffset(1, err).To(BeNil())
	ExpectWithOffset(1, tx.Code).To(Equal(uint32(0)), fmt.Sprintf("tx failed with code %d: %s", tx.Code, tx.RawLog))

	if tx.Height == int64(0) {
		res, _, _ := e.KyveChain.GetNode().ExecQuery(context.Background(), "tx", tx.TxHash)
		Fail(fmt.Sprintf("tx was not successful for some reason: %s", res), 1)
	}
}

func (e *Executor) DelegateToValidator(ctx context.Context, wallet ibc.Wallet, amount int64) {
	ctx, cancel := context.WithTimeout(context.Background(), defaultTxTimeout)
	defer cancel()

	valResponse, err := e.Q.StakingClient.Validators(ctx, &stakingtypes.QueryValidatorsRequest{})
	Expect(err).To(BeNil())
	e.ExpectTxSuccess(cosmos.BroadcastTx(
		ctx,
		e.Broadcaster,
		wallet,
		&stakingtypes.MsgDelegate{
			DelegatorAddress: wallet.FormattedAddress(),
			ValidatorAddress: valResponse.Validators[0].OperatorAddress,
			Amount:           sdk.Coin{Denom: e.KyveChain.Config().Denom, Amount: math.NewInt(amount)},
		},
	))
}

func (e *Executor) CreatePool(name string, voter ibc.Wallet) {
	ctx, cancel := context.WithTimeout(context.Background(), 2*defaultQueryTimeout+defaultTxTimeout)
	defer cancel()

	govAuthority, err := e.KyveChain.GetModuleAddress(ctx, govmodule.ModuleName)
	Expect(err).To(BeNil())
	govPropMsg := pooltypes.MsgCreatePool{
		Authority:            govAuthority,
		Name:                 name,
		Runtime:              fmt.Sprintf("@kyvejs/%s", name),
		Logo:                 "ar://Tewyv2P5VEG8EJ6AUQORdqNTectY9hlOrWPK8wwo-aU",
		Config:               `{"network":"dydx-mainnet-1","rpc":"http://testapi-integration-tendermint:8080"}`,
		StartKey:             "1",
		UploadInterval:       20,
		InflationShareWeight: 2500000000,
		MinDelegation:        100,
		MaxBundleSize:        2,
		Version:              "1.0.0",
		Binaries:             "{}",
		StorageProviderId:    4,
		CompressionId:        1,
	}
	proposalMsg, err := govtypes.NewMsgSubmitProposal(
		[]sdk.Msg{&govPropMsg},
		sdk.Coins{sdk.Coin{Denom: e.KyveChain.Config().Denom, Amount: math.NewInt(1000)}},
		voter.FormattedAddress(),
		"",
		fmt.Sprintf("Create pool %s", name),
		fmt.Sprintf("Create pool %s", name),
	)
	Expect(err).To(BeNil())

	nextPropId := uint64(1)
	proposals, err := e.Q.GovClient.Proposals(ctx, &govtypes.QueryProposalsRequest{Pagination: &sdkquery.PageRequest{Reverse: true, Limit: 1}})
	Expect(err).To(BeNil())
	if len(proposals.Proposals) == 1 {
		nextPropId = proposals.Proposals[0].Id + 1
	}
	voteMsg := govtypes.NewMsgVote(voter.Address(), nextPropId, govtypes.OptionYes, "")
	e.ExpectTxSuccess(cosmos.BroadcastTx(
		ctx,
		e.Broadcaster,
		voter,
		proposalMsg,
		voteMsg,
	))
}

func (e *Executor) CreateProtocolNode(creator ibc.Wallet) {
	ctx, cancel := context.WithTimeout(context.Background(), defaultTxTimeout)
	defer cancel()

	createStakerMsg := &stakerstypes.MsgCreateStaker{
		Creator: creator.FormattedAddress(),
		Amount:  100_000_000,
	}
	e.ExpectTxSuccess(cosmos.BroadcastTx(
		ctx,
		e.Broadcaster,
		creator,
		createStakerMsg,
	))
}

func (e *Executor) JoinPool(creator ibc.Wallet, valAccount ibc.Wallet, poolId uint64) {
	joinPoolMsg := &stakerstypes.MsgJoinPool{
		Creator:    creator.FormattedAddress(),
		PoolId:     poolId,
		Valaddress: valAccount.FormattedAddress(),
		Amount:     1_000_000_000,
	}
	e.ExpectTxSuccess(cosmos.BroadcastTx(
		context.Background(),
		e.Broadcaster,
		creator,
		joinPoolMsg,
	))
}

func (e *Executor) GetFinalizedBundles(poolId uint64) *querytypes.QueryFinalizedBundlesResponse {
	ctx, cancel := context.WithTimeout(context.Background(), defaultQueryTimeout)
	defer cancel()

	params := &querytypes.QueryFinalizedBundlesRequest{PoolId: poolId}

	res, err := e.Q.Query.BundlesClient.FinalizedBundlesQuery(ctx, params)
	Expect(err).To(BeNil())

	return res
}

func (e *Executor) GetPools() *querytypes.QueryPoolsResponse {
	ctx, cancel := context.WithTimeout(context.Background(), defaultQueryTimeout)
	defer cancel()

	params := &querytypes.QueryPoolsRequest{}

	res, err := e.Q.Query.PoolClient.Pools(ctx, params)
	Expect(err).To(BeNil())

	return res
}

func (e *Executor) GetPool(poolId int) *querytypes.QueryPoolResponse {
	ctx, cancel := context.WithTimeout(context.Background(), defaultQueryTimeout)
	defer cancel()

	params := &querytypes.QueryPoolRequest{Id: uint64(poolId)}

	res, err := e.Q.Query.PoolClient.Pool(ctx, params)
	Expect(err).To(BeNil())

	return res
}
