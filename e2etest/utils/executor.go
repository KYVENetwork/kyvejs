package utils

import (
	"context"
	"fmt"
	"time"

	"cosmossdk.io/math"

	pooltypes "github.com/KYVENetwork/chain/x/pool/types"
	querytypes "github.com/KYVENetwork/chain/x/query/types"
	stakerstypes "github.com/KYVENetwork/chain/x/stakers/types"
	sdkclient "github.com/cosmos/cosmos-sdk/client"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkquery "github.com/cosmos/cosmos-sdk/types/query"
	govmodule "github.com/cosmos/cosmos-sdk/x/gov/types"
	govtypes "github.com/cosmos/cosmos-sdk/x/gov/types/v1"
	stakingtypes "github.com/cosmos/cosmos-sdk/x/staking/types"
	. "github.com/onsi/gomega"
	"github.com/strangelove-ventures/interchaintest/v7/chain/cosmos"
	"github.com/strangelove-ventures/interchaintest/v7/ibc"
	"go.uber.org/zap"
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
	kyveChain   *cosmos.CosmosChain
	broadcaster *cosmos.Broadcaster
	q           Querier
	g           *WithT
	log         *zap.Logger
}

func NewExecutor(g *WithT, log *zap.Logger, kyveChain *cosmos.CosmosChain, broadcaster *cosmos.Broadcaster) *Executor {
	return &Executor{
		kyveChain:   kyveChain,
		broadcaster: broadcaster,
		q:           NewQuerier(kyveChain),
		g:           g,
		log:         log,
	}
}

func (e *Executor) ExpectTxSuccess(tx sdk.TxResponse, err error) {
	e.g.ExpectWithOffset(1, err).To(BeNil())
	e.g.ExpectWithOffset(1, tx.Code).To(Equal(uint32(0)), fmt.Sprintf("tx failed with code %d: %s", tx.Code, tx.RawLog))

	if tx.Height == int64(0) {
		res, _, _ := e.kyveChain.GetNode().ExecQuery(context.Background(), "tx", tx.TxHash)
		e.g.ExpectWithOffset(1, tx.Height).To(Equal(int64(0)), fmt.Sprintf("tx was not successful for some reason: %s", res))
	}
}

func (e *Executor) DelegateToValidator(wallet ibc.Wallet, amount int64) {
	ctx, cancel := context.WithTimeout(context.Background(), defaultTxTimeout)
	defer cancel()

	e.log.Debug(fmt.Sprintf("%s is delegating %d to validator", wallet.FormattedAddress(), amount))

	valResponse, err := e.q.StakingClient.Validators(ctx, &stakingtypes.QueryValidatorsRequest{})
	e.g.Expect(err).To(BeNil())
	e.ExpectTxSuccess(cosmos.BroadcastTx(
		ctx,
		e.broadcaster,
		wallet,
		&stakingtypes.MsgDelegate{
			DelegatorAddress: wallet.FormattedAddress(),
			ValidatorAddress: valResponse.Validators[0].OperatorAddress,
			Amount:           sdk.Coin{Denom: e.kyveChain.Config().Denom, Amount: math.NewInt(amount)},
		},
	))
}

func (e *Executor) CreatePool(name string, pc PoolConfig, voter ibc.Wallet) {
	ctx, cancel := context.WithTimeout(context.Background(), 2*defaultQueryTimeout+defaultTxTimeout)
	defer cancel()

	e.log.Debug(fmt.Sprintf("%s is creating pool %s", voter.FormattedAddress(), name))

	govAuthority, err := e.kyveChain.GetModuleAddress(ctx, govmodule.ModuleName)
	e.g.Expect(err).To(BeNil())
	govPropMsg := pooltypes.MsgCreatePool{
		Authority:            govAuthority,
		Name:                 name,
		Runtime:              fmt.Sprintf("@kyvejs/%s", name),
		Logo:                 "ar://Tewyv2P5VEG8EJ6AUQORdqNTectY9hlOrWPK8wwo-aU",
		Config:               pc.Config,
		StartKey:             pc.StartKey,
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
		sdk.Coins{sdk.Coin{Denom: e.kyveChain.Config().Denom, Amount: math.NewInt(1000)}},
		voter.FormattedAddress(),
		"",
		fmt.Sprintf("Create pool %s", name),
		fmt.Sprintf("Create pool %s", name),
	)
	e.g.Expect(err).To(BeNil())

	nextPropId := uint64(1)
	proposals, err := e.q.GovClient.Proposals(ctx, &govtypes.QueryProposalsRequest{Pagination: &sdkquery.PageRequest{Reverse: true, Limit: 1}})
	e.g.Expect(err).To(BeNil())
	if len(proposals.Proposals) == 1 {
		nextPropId = proposals.Proposals[0].Id + 1
	}
	voteMsg := govtypes.NewMsgVote(voter.Address(), nextPropId, govtypes.OptionYes, "")
	e.ExpectTxSuccess(cosmos.BroadcastTx(
		ctx,
		e.broadcaster,
		voter,
		proposalMsg,
		voteMsg,
	))
}

func (e *Executor) CreateProtocolNode(creator ibc.Wallet) {
	ctx, cancel := context.WithTimeout(context.Background(), defaultTxTimeout)
	defer cancel()

	e.log.Debug(fmt.Sprintf("%s is creating protocol node", creator.FormattedAddress()))

	createStakerMsg := &stakerstypes.MsgCreateStaker{
		Creator: creator.FormattedAddress(),
		Amount:  100_000_000,
	}
	e.ExpectTxSuccess(cosmos.BroadcastTx(
		ctx,
		e.broadcaster,
		creator,
		createStakerMsg,
	))
}

func (e *Executor) JoinPool(creator ibc.Wallet, valAccount ibc.Wallet, poolId uint64) {
	ctx, cancel := context.WithTimeout(context.Background(), defaultTxTimeout)
	defer cancel()

	e.log.Debug(fmt.Sprintf("%s is joining pool %d with %s", creator.FormattedAddress(), poolId, valAccount.FormattedAddress()))

	joinPoolMsg := &stakerstypes.MsgJoinPool{
		Creator:    creator.FormattedAddress(),
		PoolId:     poolId,
		Valaddress: valAccount.FormattedAddress(),
		Amount:     1_000_000_000,
	}
	e.ExpectTxSuccess(cosmos.BroadcastTx(
		ctx,
		e.broadcaster,
		creator,
		joinPoolMsg,
	))
}

func (e *Executor) GetFinalizedBundles(poolId uint64) *querytypes.QueryFinalizedBundlesResponse {
	ctx, cancel := context.WithTimeout(context.Background(), defaultQueryTimeout)
	defer cancel()

	params := &querytypes.QueryFinalizedBundlesRequest{PoolId: poolId}

	res, err := e.q.Query.BundlesClient.FinalizedBundlesQuery(ctx, params)
	e.g.Expect(err).To(BeNil())

	return res
}

func (e *Executor) GetPools() *querytypes.QueryPoolsResponse {
	ctx, cancel := context.WithTimeout(context.Background(), defaultQueryTimeout)
	defer cancel()

	params := &querytypes.QueryPoolsRequest{}

	res, err := e.q.Query.PoolClient.Pools(ctx, params)
	e.g.Expect(err).To(BeNil())

	return res
}

func (e *Executor) GetPool(poolId int) *querytypes.QueryPoolResponse {
	ctx, cancel := context.WithTimeout(context.Background(), defaultQueryTimeout)
	defer cancel()

	params := &querytypes.QueryPoolRequest{Id: uint64(poolId)}

	res, err := e.q.Query.PoolClient.Pool(ctx, params)
	e.g.Expect(err).To(BeNil())

	return res
}
