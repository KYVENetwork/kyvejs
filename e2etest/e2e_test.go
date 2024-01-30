package e2etest

import (
	"context"
	"fmt"
	"os"
	"testing"
	"time"

	"github.com/KYVENetwork/kyvejs/e2etest/utils"
	sdkclient "github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	. "github.com/onsi/gomega"
	"github.com/strangelove-ventures/interchaintest/v7"
	"github.com/strangelove-ventures/interchaintest/v7/chain/cosmos"
	"github.com/strangelove-ventures/interchaintest/v7/testutil"
	"go.uber.org/zap"
	"go.uber.org/zap/zaptest"
)

const testName = "Kyvejs e2e tests"

func setup(t *testing.T, log *zap.Logger) ([]utils.TestConfig, string, *cosmos.CosmosChain, *interchaintest.Interchain, *cosmos.Broadcaster) {
	ctx := context.Background()
	g := NewWithT(t)

	testConfigs, err := utils.GetTestConfigs()
	g.Expect(err).To(BeNil())
	genesisWrapper := utils.NewGenesisWrapper(testConfigs)

	numFullNodes := 0
	numValidators := 2
	factory := interchaintest.NewBuiltinChainFactory(
		log,
		[]*interchaintest.ChainSpec{utils.KyveChainSpec(ctx, genesisWrapper, numValidators, numFullNodes)},
	)

	chains, err := factory.Chains(testName)
	g.Expect(err).To(BeNil())
	kyveChain := chains[0].(*cosmos.CosmosChain)
	genesisWrapper.Chain = kyveChain

	interchain := interchaintest.NewInterchain().AddChain(kyveChain)

	client, network := interchaintest.DockerSetup(t)

	// Build the docker images
	protocolBuilder := utils.NewProtocolBuilder(testName, log)
	g.Expect(protocolBuilder.BuildIntegrations(testConfigs)).To(BeNil())

	// Start the chain
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

	executor := utils.NewExecutor(g, log, kyveChain, broadcaster)

	// Stake Alice's token to give her voting power
	executor.DelegateToValidator(testConfigs[0].Alice.ProtocolNode, 9_000_000_000_000)

	// Create one pool for every integration (per gov proposal)
	for _, cfg := range testConfigs {
		executor.CreatePool(cfg.Integration.Name, cfg.PoolConfig, testConfigs[0].Alice.ProtocolNode)
	}

	// Wait for all pools to be created (gov proposals)
	expectedPoolCnt := len(testConfigs)
	err = testutil.WaitForCondition(utils.GovVotingPeriod+10*time.Second, time.Second, func() (bool, error) {
		pools := executor.GetPools().Pools
		configuredConfigs := map[string]interface{}{}
		if len(pools) == expectedPoolCnt {
			for _, pool := range pools {
				for _, testConfig := range testConfigs {
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

	var tcfgs []utils.TestConfig
	for _, cfg := range testConfigs {
		tcfgs = append(tcfgs, *cfg)
	}

	return tcfgs, network, kyveChain, interchain, broadcaster
}

func removeFolders(tmpIntegrations []utils.TmpIntegration) error {
	for _, tmp := range tmpIntegrations {
		if _, err := os.Stat(tmp.Path); os.IsNotExist(err) {
			continue
		}
		err := os.RemoveAll(tmp.Path)
		if err != nil {
			return err
		}
	}
	return nil
}

func bootstrapTmpIntegrations(t *testing.T, log *zap.Logger, protocolBuilder *utils.ProtocolBuilder) {
	g := NewWithT(t)
	err := protocolBuilder.BuildDependencies()
	g.Expect(err).To(BeNil())

	tmpFolders, err := utils.GetTmpIntegrationDirectories()
	g.Expect(err).To(BeNil())

	// Cleanup any folders from previous runs
	err = removeFolders(tmpFolders)
	g.Expect(err).To(BeNil())

	t.Cleanup(func() {
		// Remove the tmp folders after the tests
		err := removeFolders(tmpFolders)
		if err != nil {
			log.Error(err.Error())
		}
	})

	kystrapRunner := utils.NewKystrapRunner()
	err = kystrapRunner.BootstrapTmpIntegrations(tmpFolders)

	g.Expect(err).To(BeNil())
	for _, tmpFolder := range tmpFolders {
		g.Expect(tmpFolder.Path).To(BeADirectory())
	}
}

func TestProtocolNode(t *testing.T) {
	log := zaptest.NewLogger(t)
	protocolBuilder := utils.NewProtocolBuilder(testName, log)
	t.Cleanup(func() {
		err := protocolBuilder.Cleanup()
		if err != nil {
			log.Error(err.Error())
		}
	})

	// Create integrations for all available templates in kystrap
	bootstrapTmpIntegrations(t, log, protocolBuilder)

	testConfigs, network, kyveChain, interchain, broadcaster := setup(t, log)

	t.Parallel()
	t.Cleanup(func() {
		err := interchain.Close()
		if err != nil {
			log.Error(err.Error())
		}
	})

	for _, tc := range testConfigs {
		testConfig := tc // This needs to be here because of the golang loopvar issue (should be fixed with go 1.22)
		t.Run(fmt.Sprintf("Test protol runtime for %s", testConfig.Integration.Name), func(t *testing.T) {
			// This will run the test in parallel
			t.Parallel()
			g := NewWithT(t)
			protocolRunner := utils.NewProtocolRunner(testConfig, network, kyveChain.GetAPIAddress(), kyveChain.GetRPCAddress())

			g.Expect(protocolRunner.RunProtocolNodes()).To(BeNil())
			defer func() {
				err := protocolRunner.StopProtocolNodes()
				if err != nil {
					log.Error(err.Error())
				}
			}()
			executor := utils.NewExecutor(g, log, kyveChain, broadcaster)

			// Create 3 protocol nodes
			executor.CreateProtocolNode(testConfig.Alice.ProtocolNode)
			executor.CreateProtocolNode(testConfig.Bob.ProtocolNode)
			executor.CreateProtocolNode(testConfig.Viktor.ProtocolNode)

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
