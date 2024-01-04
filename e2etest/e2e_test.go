package e2etest

import (
	"context"
	"fmt"
	stakerstypes "github.com/KYVENetwork/chain/x/stakers/types"
	"github.com/KYVENetwork/kyvejs/e2etest/utils"
	sdkclient "github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
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
	var client *client.Client
	var interchain *interchaintest.Interchain
	var executor *utils.Executor

	var protocolRunner = utils.NewProtocolRunner()
	var wallets = make(map[string]ibc.Wallet, len(utils.Accounts))

	BeforeAll(func() {
		var ctx = context.Background()
		var genesisWrapper = utils.GenesisWrapper{}

		numFullNodes := 0
		numValidators := 2
		factory := interchaintest.NewBuiltinChainFactory(
			zaptest.NewLogger(GinkgoT()),
			[]*interchaintest.ChainSpec{utils.KyveChainSpec(ctx, &genesisWrapper, numValidators, numFullNodes)},
		)

		chains, err := factory.Chains(GinkgoT().Name())
		Expect(err).To(BeNil())
		kyveChain := chains[0].(*cosmos.CosmosChain)
		genesisWrapper.Chain = kyveChain

		interchain = interchaintest.NewInterchain().AddChain(kyveChain)

		client, network := interchaintest.DockerSetup(GinkgoT())

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

		broadcaster := cosmos.NewBroadcaster(GinkgoT(), kyveChain)
		broadcaster.ConfigureClientContextOptions(func(clientContext sdkclient.Context) sdkclient.Context {
			return clientContext.
				WithBroadcastMode(flags.BroadcastSync)
		})
		broadcaster.ConfigureFactoryOptions(func(factory tx.Factory) tx.Factory {
			return factory.
				WithGas(flags.DefaultGasLimit * 10)
		})

		executor = utils.NewExecutor(kyveChain, broadcaster, wallets)

		executor.DelegateToValidator(ctx, wallets[utils.Alice.Name], 9_000_000_000_000)

		// Create one pool for every integration
		for _, name := range protocolRunner.GetIntegrationDirs() {
			executor.CreatePool(ctx, name, wallets[utils.Alice.Name])
		}

		// Create 3 protocol nodes
		for _, account := range []utils.Account{utils.Alice, utils.Bob, utils.Viktor} {
			executor.CreateProtocolNode(ctx, wallets[account.Name])
		}

		// Start the protocol nodes and all dependencies
		err = protocolRunner.Run(client, network, kyveChain.GetAPIAddress(), kyveChain.GetRPCAddress())
		Expect(err).To(BeNil())

		// Wait for all pools to be created (gov proposals)
		expectedPoolCnt := len(protocolRunner.GetIntegrationDirs())
		err = testutil.WaitForCondition(utils.GovVotingPeriod, 1*time.Second, func() (bool, error) {
			return len(executor.GetPools().Pools) == expectedPoolCnt, nil
		})
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

	for i, name := range protocolRunner.GetIntegrationDirs() {
		Describe(fmt.Sprintf("Test protocol integration %s", name), func() {
			It(fmt.Sprintf("Test finalized bundles for %s", name), func() {
				joinPoolMsg := &stakerstypes.MsgJoinPool{
					Creator:    wallets[utils.Alice.Name].FormattedAddress(),
					PoolId:     uint64(i),
					Valaddress: wallets[utils.AliceValaccount.Name].FormattedAddress(),
					Amount:     1_000,
				}
				executor.ExpectTxSuccess(cosmos.BroadcastTx(
					context.Background(),
					executor.Broadcaster,
					wallets[utils.Alice.Name],
					joinPoolMsg,
				))

				// Wait for 4 finalized bundles to be created
				waitForBundles := 4
				err := testutil.WaitForCondition(10*time.Minute, 5*time.Second, func() (bool, error) {
					return len(executor.GetFinalizedBundles(0).FinalizedBundles) == waitForBundles, nil
				})
				Expect(err).To(
					BeNil(),
					fmt.Sprintf("Failed to wait for %d finalized bundles\n"+
						"Finaziled Bundles: %s",
						waitForBundles,
						executor.GetFinalizedBundles(0)),
				)
			})
		})
	}
})
