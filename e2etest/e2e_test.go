package e2etest

import (
	"context"
	"cosmossdk.io/math"
	"fmt"
	pooltypes "github.com/KYVENetwork/chain/x/pool/types"
	querytypes "github.com/KYVENetwork/chain/x/query/types"
	stakerstypes "github.com/KYVENetwork/chain/x/stakers/types"
	"github.com/KYVENetwork/kyvejs/e2etest/utils"
	sdkclient "github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	sdk "github.com/cosmos/cosmos-sdk/types"
	//sdkquerytypes "github.com/cosmos/cosmos-sdk/types/query"
	govmodule "github.com/cosmos/cosmos-sdk/x/gov/types"
	govtypes "github.com/cosmos/cosmos-sdk/x/gov/types/v1"
	stakingtypes "github.com/cosmos/cosmos-sdk/x/staking/types"
	"github.com/docker/docker/client"
	. "github.com/onsi/ginkgo/v2"
	. "github.com/onsi/gomega"
	"github.com/strangelove-ventures/interchaintest/v7"
	"github.com/strangelove-ventures/interchaintest/v7/chain/cosmos"
	"github.com/strangelove-ventures/interchaintest/v7/ibc"
	"github.com/strangelove-ventures/interchaintest/v7/testutil"
	"go.uber.org/zap/zaptest"
	"testing"
	"time"
)

func TestIntegrations(t *testing.T) {
	RegisterFailHandler(Fail)
	RunSpecs(t, fmt.Sprint("Kyvejs integration tests"))
}

var _ = Describe(fmt.Sprintf("Protocol e2e Tests"), Ordered, func() {
	var kyveChain *cosmos.CosmosChain

	var client *client.Client
	var network string
	var interchain *interchaintest.Interchain
	var broadcaster *cosmos.Broadcaster
	var queryBundlesClient querytypes.QueryBundlesClient
	var queryStakingClient stakingtypes.QueryClient

	var ctx = context.Background()
	var genesisWrapper = utils.GenesisWrapper{}
	var protocolRunner = utils.NewProtocolRunner()
	var wallets = make(map[string]ibc.Wallet, len(utils.Accounts))

	BeforeAll(func() {
		numFullNodes := 0
		numValidators := 2
		factory := interchaintest.NewBuiltinChainFactory(
			zaptest.NewLogger(GinkgoT()),
			[]*interchaintest.ChainSpec{utils.KyveChainSpec(ctx, &genesisWrapper, numValidators, numFullNodes)},
		)

		chains, err := factory.Chains(GinkgoT().Name())
		Expect(err).To(BeNil())
		kyveChain = chains[0].(*cosmos.CosmosChain)
		genesisWrapper.Chain = kyveChain

		interchain = interchaintest.NewInterchain().AddChain(kyveChain)

		client, network = interchaintest.DockerSetup(GinkgoT())

		err = protocolRunner.Build()
		Expect(err).To(BeNil())

		err = interchain.Build(ctx, nil, interchaintest.InterchainBuildOptions{
			TestName:         GinkgoT().Name(),
			Client:           client,
			NetworkID:        network,
			SkipPathCreation: true,
		})
		Expect(err).To(BeNil())
		wallets = genesisWrapper.Wallets

		broadcaster = cosmos.NewBroadcaster(GinkgoT(), kyveChain)
		broadcaster.ConfigureClientContextOptions(func(clientContext sdkclient.Context) sdkclient.Context {
			return clientContext.
				WithBroadcastMode(flags.BroadcastSync).
				WithTxConfig(kyveChain.Config().EncodingConfig.TxConfig)
		})
		broadcaster.ConfigureFactoryOptions(func(factory tx.Factory) tx.Factory {
			return factory.
				WithGas(flags.DefaultGasLimit * 10).
				WithTxConfig(kyveChain.Config().EncodingConfig.TxConfig)
		})

		clientContext := sdkclient.Context{Client: kyveChain.GetNode().Client}
		queryBundlesClient = querytypes.NewQueryBundlesClient(clientContext)
		queryStakingClient = stakingtypes.NewQueryClient(clientContext)

		valResponse, err := queryStakingClient.Validators(ctx, &stakingtypes.QueryValidatorsRequest{})
		Expect(err).To(BeNil())

		tx, err := cosmos.BroadcastTx(
			ctx,
			broadcaster,
			wallets[utils.Alice.Name],
			&stakingtypes.MsgDelegate{
				DelegatorAddress: wallets[utils.Alice.Name].FormattedAddress(),
				ValidatorAddress: valResponse.Validators[0].OperatorAddress,
				Amount:           sdk.Coin{Denom: kyveChain.Config().Denom, Amount: math.NewInt(1_000_000_000_000)},
			},
		)
		expectTxSuccess(tx, err, kyveChain)

		govAuthority, err := kyveChain.GetModuleAddress(ctx, govmodule.ModuleName)
		Expect(err).To(BeNil())
		for _, name := range protocolRunner.GetIntegrationDirs() {
			gov := pooltypes.MsgCreatePool{
				Authority:            govAuthority,
				Name:                 name,
				Runtime:              fmt.Sprintf("@kyvejs/%s", name),
				Logo:                 "",
				Config:               "{\\\"network\\\":\\\"dydx-mainnet-1\\\",\\\"rpc\\\":\\\"http://testapi-integration-tendermint:8080\\\"}",
				StartKey:             "1",
				UploadInterval:       20,
				InflationShareWeight: 2500000000,
				MinDelegation:        0,
				MaxBundleSize:        2,
				Version:              "1.0.0",
				Binaries:             "{\\\"kyve-linux-arm64\\\":\\\"https://github.com/KYVENetwork/kyvejs/releases/download/%40kyvejs%2Ftendermint-bsync%401.0.0/kyve-linux-arm64.zip\\\",\\\"kyve-linux-x64\\\":\\\"https://github.com/KYVENetwork/kyvejs/releases/download/%40kyvejs%2Ftendermint-bsync%401.0.0/kyve-linux-x64.zip\\\",\\\"kyve-macos-x64\\\":\\\"https://github.com/KYVENetwork/kyvejs/releases/download/%40kyvejs%2Ftendermint-bsync%401.0.0/kyve-macos-x64.zip\\\"}",
				StorageProviderId:    4,
				CompressionId:        1,
			}
			messages := []sdk.Msg{&gov}
			msg, err := govtypes.NewMsgSubmitProposal(
				messages,
				sdk.Coins{sdk.Coin{Denom: kyveChain.Config().Denom, Amount: math.NewInt(1000)}},
				wallets[utils.Alice.Name].FormattedAddress(),
				"",
				"title",
				"summary",
			)
			Expect(err).To(BeNil())
			tx, err := cosmos.BroadcastTx(
				ctx,
				broadcaster,
				wallets[utils.Alice.Name],
				msg,
				//govtypes.NewMsgVote(),
			)
			expectTxSuccess(tx, err, kyveChain)
		}

		err = protocolRunner.Run(client, network, kyveChain.GetAPIAddress(), kyveChain.GetRPCAddress())
		Expect(err).To(BeNil())
	})

	AfterAll(func() {
		err := interchain.Close()
		if err != nil {
			fmt.Println(err)
		}

		err = protocolRunner.Cleanup(client)
		if err != nil {
			fmt.Println(err)
		}
	})

	for _, name := range protocolRunner.GetIntegrationDirs() {
		Describe(fmt.Sprintf("Test protocol integration %s", name), func() {
			It(fmt.Sprintf("Test finalized bundles for %s", name), func() {
				msg := &stakerstypes.MsgCreateStaker{
					Creator: wallets[utils.Alice.Name].FormattedAddress(),
					Amount:  100_000_000,
				}
				tx, err := cosmos.BroadcastTx(
					ctx,
					broadcaster,
					wallets[utils.Alice.Name],
					msg,
					//govtypes.NewMsgVote(),
				)
				expectTxSuccess(tx, err, kyveChain)

				// Wait for 4 finalized bundles to be created
				waitForBundles := 4
				err = testutil.WaitForCondition(10*time.Minute, 5*time.Second, func() (bool, error) {
					bundles := getFinalizedBundles(queryBundlesClient)
					return len(bundles.FinalizedBundles) == waitForBundles, nil
				})
				if err != nil {
					// If the test times out, print the finalized bundles
					fmt.Println(getFinalizedBundles(queryBundlesClient))
					Fail(err.Error())
				}
			})
		})
	}
})

func expectTxSuccess(tx sdk.TxResponse, err error, chain *cosmos.CosmosChain) {
	Expect(err).To(BeNil())
	Expect(tx.Code).To(Equal(uint32(0)))
	Expect(tx.Height).ToNot(Equal(int64(0)))

	//if tx.Height == 0 {
	//	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	//	defer cancel()
	//	result, _, err := chain.GetNode().ExecQuery(ctx, "tx", tx.TxHash)
	//	if err != nil {
	//		Fail(fmt.Sprintf("Tx %s failed: %s", tx.TxHash, err.Error()))
	//	}
	//	Fail(fmt.Sprintf("Tx %s failed: %s", tx.TxHash, result))
	//}
}

func getFinalizedBundles(client querytypes.QueryBundlesClient) *querytypes.QueryFinalizedBundlesResponse {
	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()

	params := &querytypes.QueryFinalizedBundlesRequest{
		PoolId: 0,
		//Pagination: &sdkquerytypes.PageRequest{},
	}

	res, err := client.FinalizedBundlesQuery(ctx, params)
	Expect(err).To(BeNil())

	return res
}
