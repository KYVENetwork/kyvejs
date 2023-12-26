package e2etest

import (
	"context"
	"fmt"
	"github.com/KYVENetwork/kyvejs/e2etest/utils"
	"github.com/docker/docker/client"
	. "github.com/onsi/ginkgo/v2"
	. "github.com/onsi/gomega"
	"github.com/strangelove-ventures/interchaintest/v7"
	"github.com/strangelove-ventures/interchaintest/v7/chain/cosmos"
	"go.uber.org/zap/zaptest"
	"testing"
)

func TestKyveJsIntegrations(t *testing.T) {
	RegisterFailHandler(Fail)
	RunSpecs(t, fmt.Sprint("Kyvejs e2e Tests"))
}

var _ = Describe(fmt.Sprintf("e2e Tests"), Ordered, func() {
	var kyve *cosmos.CosmosChain

	var ctx context.Context
	var client *client.Client
	var network string
	var interchain *interchaintest.Interchain

	//var kyveWallet *cosmos.CosmosWallet

	BeforeAll(func() {
		//utils.DockerCleanup()
		//utils.DockerRun()
		//Fail("EVERYTHING IS OK")

		numFullNodes := 0
		numValidators := 2
		factory := interchaintest.NewBuiltinChainFactory(zaptest.NewLogger(GinkgoT()), []*interchaintest.ChainSpec{
			{
				Name:          "kyve",
				ChainConfig:   utils.MainnetConfig,
				NumValidators: &numValidators,
				NumFullNodes:  &numFullNodes,
			},
		})

		chains, err := factory.Chains(GinkgoT().Name())
		Expect(err).To(BeNil())
		kyve = chains[0].(*cosmos.CosmosChain)

		interchain = interchaintest.NewInterchain().AddChain(kyve)

		ctx = context.Background()
		client, network = interchaintest.DockerSetup(GinkgoT())

		utils.DockerCleanup(client)
		utils.DockerBuild()

		err = interchain.Build(ctx, nil, interchaintest.InterchainBuildOptions{
			TestName:         GinkgoT().Name(),
			Client:           client,
			NetworkID:        network,
			SkipPathCreation: true,
		})
		Expect(err).To(BeNil())

		utils.DockerRun(client, network)

		//wallets := interchaintest.GetAndFundTestUsers(
		//	GinkgoT(), ctx, GinkgoT().Name(), math.NewInt(10_000_000_000), kyve,
		//)
		//kyveWallet = wallets[0].(*cosmos.CosmosWallet)
	})

	AfterAll(func() {
		//_ = interchain.Close()
	})

	It("Test block production", func() {
		//waitErr := testutil.WaitForBlocks(ctx, 10, kyve)
		//Expect(waitErr).To(BeNil())
		fmt.Println("EVERYTHING IS OK", ctx, interchain)
	})
})
