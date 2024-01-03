package utils

import (
	"context"
	"cosmossdk.io/math"
	"encoding/json"
	"fmt"
	"github.com/KYVENetwork/chain/app"
	"github.com/cosmos/cosmos-sdk/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdktestutil "github.com/cosmos/cosmos-sdk/types/module/testutil"
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
	consensusSpeed = "200ms"
)

var (
	// Alice is a protocol validator main account
	Alice = Account{
		Mnemonic: "worry grief loyal smoke pencil arrow trap focus high pioneer tomato hedgehog essence purchase dove pond knee custom phone gentle sunset addict mother fabric",
		Address:  "kyve1jq304cthpx0lwhpqzrdjrcza559ukyy3zsl2vd",
		Name:     "alice",
	}
	// AliceValaccount is a protocol validator valaccount
	AliceValaccount = Account{
		Mnemonic: "artist final stage coffee coach stable quantum feed catch bridge pond like ranch steel insane hold vital horse catalog battle company suspect satoshi famous",
		Address:  "kyve1aw5gtwz50g7u60geulppjwqlev2klqgvhnzu6k",
		Name:     "alice-valaccount",
	}
	// Bob is a protocol validator main account
	Bob = Account{
		Mnemonic: "crash sick toilet stumble join cash erode glory door weird diagram away lizard solid segment apple urge joy annual able tank define candy demise",
		Address:  "kyve1hvg7zsnrj6h29q9ss577mhrxa04rn94h7zjugq",
		Name:     "bob",
	}
	// BobValaccount is a protocol validator valaccount
	BobValaccount = Account{
		Mnemonic: "rebuild resist mix bulb glass draw guess soda interest auto giggle noble cave boat wheat enact laugh bunker piano can flush stem crumble lunar",
		Address:  "kyve15azz593mwcg6k2uxdt974ax5q2j6dxa8vhnx4m",
		Name:     "bob-valaccount",
	}
	// Viktor is a protocol validator main account
	Viktor = Account{
		Mnemonic: "surround burst truly again vanish warrior arctic cave share marriage rib surge",
		Address:  "kyve1khwd59xmxs26fxwc9sqkwpuy9jxym3a485rzgf",
		Name:     "viktor",
	}
	// ViktorValaccount is a protocol validator valaccount
	ViktorValaccount = Account{
		Mnemonic: "art beyond rather game prepare depend slice entry ignore fashion replace front",
		Address:  "kyve1fsll7rjlx49z5gnfj03pagaql3z4z2ejnalmnx",
		Name:     "viktor-valaccount",
	}
)

type Account struct {
	Mnemonic string
	Address  string
	Name     string
}

var Accounts = []Account{
	Alice,
	AliceValaccount,
	Bob,
	BobValaccount,
	Viktor,
	ViktorValaccount,
}

type GenesisWrapper struct {
	Chain   *cosmos.CosmosChain
	Wallets map[string]ibc.Wallet
}

func KyveEncoding() *sdktestutil.TestEncodingConfig {
	testCfg := sdktestutil.TestEncodingConfig{}
	cfg := app.MakeEncodingConfig()

	testCfg.Codec = cfg.Marshaler
	testCfg.TxConfig = cfg.TxConfig
	testCfg.InterfaceRegistry = cfg.InterfaceRegistry
	testCfg.Amino = cfg.Amino

	return &testCfg
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
			EncodingConfig:      KyveEncoding(),
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
		gw.Wallets, err = createWallets(ctx, gw.Chain.GetNode())
		return err
	}
}

func createWallets(ctx context.Context, val *cosmos.ChainNode) (map[string]ibc.Wallet, error) {
	chainCfg := val.Chain.Config()
	wallets := make(map[string]ibc.Wallet, len(Accounts))

	for _, account := range Accounts {
		wallet, err := val.Chain.BuildWallet(ctx, account.Name, account.Mnemonic)
		if err != nil {
			return nil, fmt.Errorf("failed to create wallet: %w", err)
		}

		genesisWallet := ibc.WalletAmount{
			Address: wallet.FormattedAddress(),
			Denom:   chainCfg.Denom,
			Amount:  math.NewInt(10_000_000_000_000),
		}

		err = val.AddGenesisAccount(ctx, genesisWallet.Address, []types.Coin{types.NewCoin(genesisWallet.Denom, genesisWallet.Amount)})
		if err != nil {
			return nil, err
		}
		wallets[account.Name] = wallet
	}
	return wallets, nil
}

func modifyGenesis(gw *GenesisWrapper) func(config ibc.ChainConfig, genbz []byte) ([]byte, error) {
	return func(config ibc.ChainConfig, genbz []byte) ([]byte, error) {
		genesis := make(map[string]interface{})
		if err := json.Unmarshal(genbz, &genesis); err != nil {
			return nil, fmt.Errorf("failed to unmarshal genesis file: %w", err)
		}

		if err := modifyGovParams(config, genesis); err != nil {
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
	if err := dyno.Set(params, "10s", "voting_period"); err != nil {
		return fmt.Errorf("failed to set voting_period in genesis json: %w", err)
	}
	if err := dyno.Set(params, sdk.Coins{sdk.Coin{Denom: config.Denom, Amount: math.NewInt(0)}}, "min_deposit"); err != nil {
		return fmt.Errorf("failed to set min_deposit in genesis json: %w", err)
	}
	return nil
}

func configFileOverrides() testutil.Toml {
	override := make(testutil.Toml)
	override["config/config.toml"] = testutil.Toml{
		"consensus": testutil.Toml{
			"timeout_propose":   consensusSpeed,
			"timeout_prevote":   consensusSpeed,
			"timeout_precommit": consensusSpeed,
			"timeout_commit":    consensusSpeed,
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
