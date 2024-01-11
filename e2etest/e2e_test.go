package e2etest

import (
	"context"
	"fmt"
	"github.com/KYVENetwork/kyvejs/e2etest/utils"
	sdkclient "github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	. "github.com/onsi/gomega"
	"github.com/strangelove-ventures/interchaintest/v7"
	"github.com/strangelove-ventures/interchaintest/v7/chain/cosmos"
	"github.com/strangelove-ventures/interchaintest/v7/testutil"
	"go.uber.org/zap/zaptest"
	"testing"
	"time"
)

const testName = "Kyvejs e2e tests"

func setup(t *testing.T) (*[]*utils.TestConfig, string, *cosmos.CosmosChain, *interchaintest.Interchain, *utils.ProtocolBuilder, *utils.Executor) {
	var ctx = context.Background()
	var g = NewWithT(t)

	var testConfigs = utils.GetTestConfigs()
	var genesisWrapper = utils.NewGenesisWrapper(testConfigs)

	numFullNodes := 0
	numValidators := 2
	factory := interchaintest.NewBuiltinChainFactory(
		zaptest.NewLogger(t),
		[]*interchaintest.ChainSpec{utils.KyveChainSpec(ctx, genesisWrapper, numValidators, numFullNodes)},
	)

	chains, err := factory.Chains(testName)
	g.Expect(err).To(BeNil())
	kyveChain := chains[0].(*cosmos.CosmosChain)
	genesisWrapper.Chain = kyveChain

	interchain := interchaintest.NewInterchain().AddChain(kyveChain)

	client, network := interchaintest.DockerSetup(t)

	protocolBuilder := utils.NewProtocolBuilder()
	g.Expect(protocolBuilder.Build(testConfigs)).To(BeNil())

	err = interchain.Build(ctx, nil, interchaintest.InterchainBuildOptions{
		TestName:         testName,
		Client:           client,
		NetworkID:        network,
		SkipPathCreation: true,
	})
	g.Expect(err).To(BeNil())

	broadcaster := cosmos.NewBroadcaster(t, kyveChain)
	broadcaster.ConfigureClientContextOptions(func(clientContext sdkclient.Context) sdkclient.Context {
		return clientContext.
			WithBroadcastMode(flags.BroadcastSync)
	})
	broadcaster.ConfigureFactoryOptions(func(factory tx.Factory) tx.Factory {
		return factory.
			WithGas(flags.DefaultGasLimit * 10)
	})

	executor := utils.NewExecutor(g, kyveChain, broadcaster)

	// Stake Alice's token to give her voting power
	executor.DelegateToValidator(ctx, (*testConfigs)[0].Alice.ProtocolNode, 9_000_000_000_000)

	// Create one pool for every integration (per gov proposal)
	for _, cfg := range *testConfigs {
		executor.CreatePool(cfg.Integration.Name, cfg.PoolConfig, (*testConfigs)[0].Alice.ProtocolNode)
	}

	// Create 3 protocol nodes
	executor.CreateProtocolNode((*testConfigs)[0].Alice.ProtocolNode)
	executor.CreateProtocolNode((*testConfigs)[0].Bob.ProtocolNode)
	executor.CreateProtocolNode((*testConfigs)[0].Viktor.ProtocolNode)

	// Wait for all pools to be created (gov proposals)
	expectedPoolCnt := len(*testConfigs)
	err = testutil.WaitForCondition(utils.GovVotingPeriod, 1*time.Second, func() (bool, error) {
		pools := executor.GetPools().Pools
		configuredConfigs := map[string]interface{}{}
		if len(pools) == expectedPoolCnt {
			for _, pool := range pools {
				for _, testConfig := range *testConfigs {
					if pool.GetData().Name == testConfig.Integration.Name {
						testConfig.PoolId = pool.GetData().Id
						configuredConfigs[testConfig.Integration.Name] = nil
					}
				}
			}
			g.Expect(len(configuredConfigs)).To(Equal(expectedPoolCnt))
			return true, nil
		}
		return false, nil
	})
	g.Expect(err).To(BeNil())

	return testConfigs, network, kyveChain, interchain, protocolBuilder, executor
}

func TestProtocolNode(t *testing.T) {
	g := NewWithT(t)
	testConfigs, network, kyveChain, interchain, protocolBuilder, executor := setup(t)

	defer func() {
		err := interchain.Close()
		if err != nil {
			fmt.Println(err)
		}

		err = protocolBuilder.Cleanup()
		if err != nil {
			fmt.Println(err)
		}
	}()

	for _, testConfig := range *testConfigs {
		t.Run(fmt.Sprintf("Test protol runtime for %s", testConfig.Integration.Name), func(t *testing.T) {
			t.Parallel() // This will run the test in parallel

			protocolRunner := utils.NewProtocolRunner(*testConfig, network, kyveChain.GetAPIAddress(), kyveChain.GetRPCAddress())

			g.Expect(protocolRunner.RunProtocolNodes()).To(BeNil())
			//goland:noinspection GoUnhandledErrorResult
			defer func() {
				err := protocolRunner.StopProtocolNodes()
				if err != nil {
					fmt.Println(err)
				}
			}()

			// Join the pool with 3 protocol nodes
			executor.JoinPool(testConfig.Alice.ProtocolNode, testConfig.Alice.Valaccount, testConfig.PoolId)
			executor.JoinPool(testConfig.Bob.ProtocolNode, testConfig.Bob.Valaccount, testConfig.PoolId)
			executor.JoinPool(testConfig.Viktor.ProtocolNode, testConfig.Viktor.Valaccount, testConfig.PoolId)

			// Wait for 4 finalized bundles to be created
			waitForBundles := 4
			err := testutil.WaitForCondition(5*time.Minute, 5*time.Second, func() (bool, error) {
				return len(executor.GetFinalizedBundles(testConfig.PoolId).FinalizedBundles) == waitForBundles, nil
			})
			g.Expect(err).To(
				BeNil(),
				fmt.Sprintf("Failed to wait for %d finalized bundles\n"+
					"Finaziled Bundles: %s",
					waitForBundles,
					executor.GetFinalizedBundles(testConfig.PoolId)),
			)
		})
	}
}
