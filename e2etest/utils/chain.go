package utils

import (
	"context"
	"encoding/json"
	"fmt"
	"time"

	"cosmossdk.io/math"

	"github.com/KYVENetwork/chain/app"
	"github.com/cosmos/cosmos-sdk/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdktestutil "github.com/cosmos/cosmos-sdk/types/module/testutil"
	banktypes "github.com/cosmos/cosmos-sdk/x/bank/types"
	"github.com/cosmos/go-bip39"
	"github.com/icza/dyno"
	"github.com/strangelove-ventures/interchaintest/v7"
	"github.com/strangelove-ventures/interchaintest/v7/chain/cosmos"
	"github.com/strangelove-ventures/interchaintest/v7/ibc"
	"github.com/strangelove-ventures/interchaintest/v7/testutil"
)

const (
	// version is the version of the kyve image to use
	version = "v1.4.0"
	// uidGid is the uid:gid is needed to run the kyve chain container
	uidGid = "1025:1025"
	// consensusSpeed is the speed at which the kyve chain will produce blocks
	consensusSpeed = 500 * time.Millisecond
	// GovVotingPeriod is the voting period for governance proposals
	GovVotingPeriod = 1 * time.Second
	// BundlesUploadTimeout is the timeout for uploading bundles
	BundlesUploadTimeout = 10 * time.Second
)

func (tc *TestConfig) GetProtocolConfigs() []ProtocolConfig {
	return []ProtocolConfig{tc.Alice, tc.Bob, tc.Viktor}
}

func getRandomMnemonic() string {
	entropy, _ := bip39.NewEntropy(256)
	mnemonic, _ := bip39.NewMnemonic(entropy)
	return mnemonic
}

type GenesisWrapper struct {
	Chain       *cosmos.CosmosChain
	TestConfigs []*TestConfig
}

func NewGenesisWrapper(testConfigs []*TestConfig) *GenesisWrapper {
	return &GenesisWrapper{
		TestConfigs: testConfigs,
	}
}

func kyveEncoding() *sdktestutil.TestEncodingConfig {
	encodingConfig := sdktestutil.TestEncodingConfig{}
	cfg := app.MakeEncodingConfig()

	encodingConfig.Codec = cfg.Marshaler
	encodingConfig.TxConfig = cfg.TxConfig
	encodingConfig.InterfaceRegistry = cfg.InterfaceRegistry
	encodingConfig.Amino = cfg.Amino

	return &encodingConfig
}

func KyveChainSpec(
	ctx context.Context,
	gw *GenesisWrapper,
	numValidators int,
	numFullNodes int,
) *interchaintest.ChainSpec {
	return &interchaintest.ChainSpec{
		NumValidators: &numValidators,
		NumFullNodes:  &numFullNodes,
		ChainConfig: ibc.ChainConfig{
			Type:                "cosmos",
			Name:                "kyve",
			ChainID:             "kyve-1",
			Bin:                 "kyved",
			Bech32Prefix:        "kyve",
			Denom:               "ukyve",
			GasPrices:           "0.02ukyve",
			GasAdjustment:       5,
			TrustingPeriod:      "112h",
			NoHostMount:         false,
			EncodingConfig:      kyveEncoding(),
			PreGenesis:          preGenesis(ctx, gw),
			ModifyGenesis:       modifyGenesis(gw),
			ConfigFileOverrides: configFileOverrides(),
			Images: []ibc.DockerImage{{
				Repository: "ghcr.io/strangelove-ventures/heighliner/kyve",
				Version:    version,
				UidGid:     uidGid,
			}},
		},
	}
}

func preGenesis(ctx context.Context, gw *GenesisWrapper) func(ibc.ChainConfig) error {
	return func(cc ibc.ChainConfig) (err error) {
		for _, testConfig := range gw.TestConfigs {
			keyName := fmt.Sprintf("alice-%s", testConfig.Integration.Name)
			alice, err := createWallet(ctx, gw, keyName, 10_000_000_000_000)
			if err != nil {
				return err
			}
			keyName = fmt.Sprintf("alice-valaccount-%s", testConfig.Integration.Name)
			val, err := createWallet(ctx, gw, keyName, 10_000_000)
			if err != nil {
				return err
			}
			testConfig.Alice.ProtocolNode = alice
			testConfig.Alice.Valaccount = val

			keyName = fmt.Sprintf("bob-%s", testConfig.Integration.Name)
			bob, err := createWallet(ctx, gw, keyName, 10_000_000_000_000)
			if err != nil {
				return err
			}
			keyName = fmt.Sprintf("bob-valaccount-%s", testConfig.Integration.Name)
			val, err = createWallet(ctx, gw, keyName, 10_000_000)
			if err != nil {
				return err
			}
			testConfig.Bob.ProtocolNode = bob
			testConfig.Bob.Valaccount = val

			keyName = fmt.Sprintf("viktor-%s", testConfig.Integration.Name)
			viktor, err := createWallet(ctx, gw, keyName, 10_000_000_000_000)
			if err != nil {
				return err
			}
			keyName = fmt.Sprintf("viktor-valaccount-%s", testConfig.Integration.Name)
			val, err = createWallet(ctx, gw, keyName, 10_000_000)
			if err != nil {
				return err
			}
			testConfig.Viktor.ProtocolNode = viktor
			testConfig.Viktor.Valaccount = val
		}
		return err
	}
}

func createWallet(ctx context.Context, gw *GenesisWrapper, name string, amount int64) (ibc.Wallet, error) {
	chainCfg := gw.Chain.Config()

	wallet, err := gw.Chain.GetNode().Chain.BuildWallet(ctx, name, getRandomMnemonic())
	if err != nil {
		return nil, fmt.Errorf("failed to create wallet: %w", err)
	}

	genesisWallet := ibc.WalletAmount{
		Address: wallet.FormattedAddress(),
		Denom:   chainCfg.Denom,
		Amount:  math.NewInt(amount),
	}

	err = gw.Chain.GetNode().AddGenesisAccount(ctx, genesisWallet.Address, []types.Coin{types.NewCoin(genesisWallet.Denom, genesisWallet.Amount)})
	if err != nil {
		return nil, err
	}
	return wallet, nil
}

func modifyGenesis(_ *GenesisWrapper) func(config ibc.ChainConfig, genbz []byte) ([]byte, error) {
	return func(config ibc.ChainConfig, genbz []byte) ([]byte, error) {
		genesis := make(map[string]interface{})
		if err := json.Unmarshal(genbz, &genesis); err != nil {
			return nil, fmt.Errorf("failed to unmarshal genesis file: %w", err)
		}

		if err := modifyGovParams(config, genesis); err != nil {
			return nil, err
		}

		if err := modifyBundlesParams(config, genesis); err != nil {
			return nil, err
		}

		if err := modifyTeamBalance(config, genesis); err != nil {
			return nil, err
		}

		out, err := json.Marshal(&genesis)
		if err != nil {
			return nil, fmt.Errorf("failed to marshal genesis bytes to json: %w", err)
		}

		return out, nil
	}
}

func modifyGovParams(config ibc.ChainConfig, genesis map[string]interface{}) error {
	params, err := dyno.GetMapS(genesis, "app_state", "gov", "params")
	if err != nil {
		return fmt.Errorf("failed to get params from genesis json: %w", err)
	}
	if err := dyno.Set(params, GovVotingPeriod.String(), "voting_period"); err != nil {
		return fmt.Errorf("failed to set voting_period in genesis json: %w", err)
	}
	if err := dyno.Set(params, sdk.Coins{sdk.Coin{Denom: config.Denom, Amount: math.NewInt(0)}}, "min_deposit"); err != nil {
		return fmt.Errorf("failed to set min_deposit in genesis json: %w", err)
	}
	if err := dyno.Set(params, "0", "quorum"); err != nil {
		return fmt.Errorf("failed to set quorum in genesis json: %w", err)
	}
	return nil
}

func modifyBundlesParams(_ ibc.ChainConfig, genesis map[string]interface{}) error {
	params, err := dyno.GetMapS(genesis, "app_state", "bundles", "params")
	if err != nil {
		return fmt.Errorf("failed to get params from genesis json: %w", err)
	}
	if err := dyno.Set(params, int(BundlesUploadTimeout.Seconds()), "upload_timeout"); err != nil {
		return fmt.Errorf("failed to set upload_timeout in genesis json: %w", err)
	}
	return nil
}

func modifyTeamBalance(config ibc.ChainConfig, genesis map[string]interface{}) error {
	balances, err := dyno.GetSlice(genesis, "app_state", "bank", "balances")
	if err != nil {
		return fmt.Errorf("failed to get balances from genesis json: %w", err)
	}
	balances = append(balances, banktypes.Balance{
		Address: "kyve1e29j95xmsw3zmvtrk4st8e89z5n72v7nf70ma4",
		Coins:   sdk.NewCoins(sdk.NewCoin(config.Denom, math.NewInt(165_000_000_000_000))),
	})
	if err := dyno.Set(genesis, balances, "app_state", "bank", "balances"); err != nil {
		return err
	}
	return nil
}

func configFileOverrides() testutil.Toml {
	override := make(testutil.Toml)
	override["config/config.toml"] = testutil.Toml{
		"consensus": testutil.Toml{
			"timeout_propose":   consensusSpeed.String(),
			"timeout_prevote":   consensusSpeed.String(),
			"timeout_precommit": consensusSpeed.String(),
			"timeout_commit":    consensusSpeed.String(),
		},
	}
	return override
}

func init() {
	accountAddressPrefix := "kyve"
	accountPubKeyPrefix := accountAddressPrefix + "pub"
	validatorAddressPrefix := accountAddressPrefix + "valoper"
	validatorPubKeyPrefix := accountAddressPrefix + "valoperpub"
	consNodeAddressPrefix := accountAddressPrefix + "valcons"
	consNodePubKeyPrefix := accountAddressPrefix + "valconspub"

	config := sdk.GetConfig()
	config.SetBech32PrefixForAccount(accountAddressPrefix, accountPubKeyPrefix)
	config.SetBech32PrefixForValidator(validatorAddressPrefix, validatorPubKeyPrefix)
	config.SetBech32PrefixForConsensusNode(consNodeAddressPrefix, consNodePubKeyPrefix)
	config.Seal()
}
