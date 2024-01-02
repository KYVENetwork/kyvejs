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
	sdkquerytypes "github.com/cosmos/cosmos-sdk/types/query"
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

	var ctx context.Context
	var client *client.Client
	var network string
	var interchain *interchaintest.Interchain
	var broadcaster *cosmos.Broadcaster
	var queryBundlesClient querytypes.QueryBundlesClient

	var protocolRunner = utils.NewProtocolRunner()
	var wallets = make(map[string]ibc.Wallet, len(utils.Accounts))

	BeforeAll(func() {
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
		kyveChain = chains[0].(*cosmos.CosmosChain)

		interchain = interchaintest.NewInterchain().AddChain(kyveChain)

		ctx = context.Background()
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

		broadcaster = cosmos.NewBroadcaster(GinkgoT(), kyveChain)
		broadcaster.ConfigureClientContextOptions(func(clientContext sdkclient.Context) sdkclient.Context {
			return clientContext.WithBroadcastMode(flags.BroadcastSync)
		})

		queryBundlesClient = querytypes.NewQueryBundlesClient(sdkclient.Context{
			Client: kyveChain.GetNode().Client,
		})

		for _, account := range utils.Accounts {
			// TODO: can we make this async?
			wallet, err := interchaintest.GetAndFundTestUserWithMnemonic(ctx, "e2e-test", account.Mnemonic, math.NewInt(10_000_000_000_000), kyveChain)
			Expect(err).To(BeNil())
			wallets[account.Name] = wallet
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
				tx, err := cosmos.BroadcastTx(
					ctx,
					broadcaster,
					wallets[utils.Alice.Name],
					&pooltypes.MsgCreatePool{
						Authority:            wallets[utils.Alice.Name].FormattedAddress(),
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
					},
				)
				Expect(err).To(BeNil())
				Expect(tx.Code).To(Equal(0))

				// for loop with 10 iterations
				for i := 0; i < 10; i++ {
					tx, err := cosmos.BroadcastTx(
						ctx,
						broadcaster,
						wallets[utils.Alice.Name],
						&stakerstypes.MsgJoinPool{
							Creator:    wallets[utils.Alice.Name].FormattedAddress(),
							PoolId:     0,
							Valaddress: wallets[utils.AliceValaccount.Name].FormattedAddress(),
							Amount:     0,
						},
					)
					fmt.Println(tx)
					fmt.Println(err)
				}

				//Expect(err).To(BeNil())
				//Expect(tx.Code).NotTo(Equal(0))

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

func getFinalizedBundles(client querytypes.QueryBundlesClient) *querytypes.QueryFinalizedBundlesResponse {
	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()

	params := &querytypes.QueryFinalizedBundlesRequest{
		PoolId:     0,
		Pagination: &sdkquerytypes.PageRequest{},
	}

	res, err := client.FinalizedBundlesQuery(ctx, params)
	Expect(err).To(BeNil())

	return res
}
