package e2etest

import (
	"context"
	"fmt"
	"github.com/KYVENetwork/kyvejs/e2etest/utils"
	sdkclient "github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	. "github.com/onsi/ginkgo/v2"
	. "github.com/onsi/gomega"
	"github.com/strangelove-ventures/interchaintest/v7"
	"github.com/strangelove-ventures/interchaintest/v7/chain/cosmos"
	"github.com/strangelove-ventures/interchaintest/v7/testutil"
	"go.uber.org/zap/zaptest"
	"testing"
	"time"
)

func TestIntegrations(t *testing.T) {
	RegisterFailHandler(Fail)
	RunSpecs(t, fmt.Sprint("Kyvejs integration tests"))
}

const testName = "Kyvejs e2e tests"

var interchain *interchaintest.Interchain
var executor = utils.NewExecutor()
var protocolRunner = utils.NewProtocolRunner()
var testConfigs = &[]*utils.TestConfig{}
var integrationNames = protocolRunner.GetIntegrationDirs()

var _ = SynchronizedBeforeSuite(
	//runs *only* on process #1
	func() {
		var ctx = context.Background()
		for _, integration := range integrationNames {
			poolConfig, err := protocolRunner.GetPoolConfigFromTestData(integration)
			Expect(err).To(BeNil())
			*testConfigs = append(*testConfigs, &utils.TestConfig{
				PoolConfig:  *poolConfig,
				Integration: integration,
			})
		}
		var genesisWrapper = utils.NewGenesisWrapper(testConfigs)

		numFullNodes := 0
		numValidators := 2
		factory := interchaintest.NewBuiltinChainFactory(
			zaptest.NewLogger(GinkgoT()),
			[]*interchaintest.ChainSpec{utils.KyveChainSpec(ctx, genesisWrapper, numValidators, numFullNodes)},
		)

		chains, err := factory.Chains(testName)
		Expect(err).To(BeNil())
		kyveChain := chains[0].(*cosmos.CosmosChain)
		genesisWrapper.Chain = kyveChain

		interchain = interchaintest.NewInterchain().AddChain(kyveChain)

		client, network := interchaintest.DockerSetup(GinkgoT())

		err = protocolRunner.Build()
		Expect(err).To(BeNil())

		err = interchain.Build(ctx, nil, interchaintest.InterchainBuildOptions{
			TestName:         testName,
			Client:           client,
			NetworkID:        network,
			SkipPathCreation: true,
		})
		Expect(err).To(BeNil())
		DeferCleanup(func() {
			err := interchain.Close()
			if err != nil {
				fmt.Println(err)
			}
		})

		broadcaster := cosmos.NewBroadcaster(GinkgoT(), kyveChain)
		broadcaster.ConfigureClientContextOptions(func(clientContext sdkclient.Context) sdkclient.Context {
			return clientContext.
				WithBroadcastMode(flags.BroadcastSync)
		})
		broadcaster.ConfigureFactoryOptions(func(factory tx.Factory) tx.Factory {
			return factory.
				WithGas(flags.DefaultGasLimit * 10)
		})

		// Init executor and protocol runner
		executor.Init(kyveChain, broadcaster)
		protocolRunner.Init(network, kyveChain.GetAPIAddress(), kyveChain.GetRPCAddress())
		DeferCleanup(func() {
			err = protocolRunner.Cleanup()
			if err != nil {
				fmt.Println(err)
			}
		})

		// Stake Alice's token to give her voting power
		executor.DelegateToValidator(ctx, (*testConfigs)[0].Alice.ProtocolNode, 9_000_000_000_000)

		// Create one pool for every integration (per gov proposal)
		for _, cfg := range *testConfigs {
			executor.CreatePool(cfg.Integration, cfg.PoolConfig, (*testConfigs)[0].Alice.ProtocolNode)
		}

		// Create 3 protocol nodes
		executor.CreateProtocolNode((*testConfigs)[0].Alice.ProtocolNode)
		executor.CreateProtocolNode((*testConfigs)[0].Bob.ProtocolNode)
		executor.CreateProtocolNode((*testConfigs)[0].Viktor.ProtocolNode)

		// Wait for all pools to be created (gov proposals)
		expectedPoolCnt := len(integrationNames)
		err = testutil.WaitForCondition(utils.GovVotingPeriod, 1*time.Second, func() (bool, error) {
			pools := executor.GetPools().Pools
			configuredConfigs := map[string]interface{}{}
			if len(pools) == expectedPoolCnt {
				for _, pool := range pools {
					for _, testConfig := range *testConfigs {
						if pool.GetData().Name == testConfig.Integration {
							testConfig.PoolId = pool.GetData().Id
							configuredConfigs[testConfig.Integration] = nil
						}
					}
				}
				Expect(len(configuredConfigs)).To(Equal(expectedPoolCnt))
				return true, nil
			}
			return false, nil
		})
		Expect(err).To(BeNil())
	}, func() {})

var _ = Describe(fmt.Sprintf("Protocol e2e Tests"), func() {
	for _, integration := range integrationNames {
		generateProtocolNodeTest(integration)
	}
})

func generateProtocolNodeTest(integration string) {
	var getTestConfig = func(name string) utils.TestConfig {
		for _, testConfig := range *testConfigs {
			if testConfig.Integration == name {
				return *testConfig
			}
		}
		Fail(fmt.Sprintf("Test config for integration %s not found", name))
		return utils.TestConfig{}
	}

	It(fmt.Sprintf("Test finalized bundles for %s", integration), func() {
		testConfig := getTestConfig(integration)

		err := protocolRunner.RunProtocolNodes(testConfig)
		Expect(err).To(BeNil())
		//goland:noinspection GoUnhandledErrorResult
		defer protocolRunner.StopProtocolNodes(testConfig)

		// Join the pool with 3 protocol nodes
		executor.JoinPool(testConfig.Alice.ProtocolNode, testConfig.Alice.Valaccount, testConfig.PoolId)
		executor.JoinPool(testConfig.Bob.ProtocolNode, testConfig.Bob.Valaccount, testConfig.PoolId)
		executor.JoinPool(testConfig.Viktor.ProtocolNode, testConfig.Viktor.Valaccount, testConfig.PoolId)

		// Wait for 4 finalized bundles to be created
		waitForBundles := 4
		err = testutil.WaitForCondition(5*time.Minute, 5*time.Second, func() (bool, error) {
			return len(executor.GetFinalizedBundles(testConfig.PoolId).FinalizedBundles) == waitForBundles, nil
		})
		Expect(err).To(
			BeNil(),
			fmt.Sprintf("Failed to wait for %d finalized bundles\n"+
				"Finaziled Bundles: %s",
				waitForBundles,
				executor.GetFinalizedBundles(testConfig.PoolId)),
		)
	})
}
