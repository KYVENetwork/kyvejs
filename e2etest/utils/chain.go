package utils

import (
	"cosmossdk.io/math"
	"encoding/json"
	sdk "github.com/cosmos/cosmos-sdk/types"
	bankTypes "github.com/cosmos/cosmos-sdk/x/bank/types"
	"github.com/icza/dyno"
	"github.com/strangelove-ventures/interchaintest/v7/ibc"
	"gopkg.in/yaml.v3"
	"os"
)

const (
	version = "v1.4.0"
	uidGid  = "1025:1025"
)

var MainnetConfig = ibc.ChainConfig{
	Type:    "cosmos",
	Name:    "kyve",
	ChainID: "kyve-1",
	Images: []ibc.DockerImage{{
		Repository: "ghcr.io/strangelove-ventures/heighliner/kyve",
		Version:    version,
		UidGid:     uidGid,
	}},
	Bin:                 "kyved",
	Bech32Prefix:        "kyve",
	Denom:               "ukyve",
	GasPrices:           "0.02ukyve",
	GasAdjustment:       5,
	TrustingPeriod:      "112h",
	NoHostMount:         false,
	ModifyGenesis:       ModifyGenesis,
	ConfigFileOverrides: nil,
	EncodingConfig:      nil,
}

//func ModifyGenesis(config ibc.ChainConfig, genbz []byte) ([]byte, error) {
//	genesis := make(map[string]interface{})
//	_ = json.Unmarshal(genbz, &genesis)
//
//	balances, _ := dyno.GetSlice(genesis, "app_state", "bank", "balances")
//	balances = append(balances, bankTypes.Balance{
//		Address: "kyve1e29j95xmsw3zmvtrk4st8e89z5n72v7nf70ma4",
//		Coins:   sdk.NewCoins(sdk.NewCoin(config.Denom, math.NewInt(165_000_000_000_000))),
//	})
//	_ = dyno.Set(genesis, balances, "app_state", "bank", "balances")
//
//	_ = dyno.Set(genesis, math.LegacyMustNewDecFromStr("0.5"),
//		"app_state", "global", "params", "min_initial_deposit_ratio",
//	)
//
//	_ = dyno.Set(genesis, "10s",
//		"app_state", "gov", "voting_params", "voting_period",
//	)
//	_ = dyno.Set(genesis, "0",
//		"app_state", "gov", "deposit_params", "min_deposit", 0, "amount",
//	)
//	_ = dyno.Set(genesis, config.Denom,
//		"app_state", "gov", "deposit_params", "min_deposit", 0, "denom",
//	)
//
//	_ = dyno.Set(genesis, "0.169600000000000000",
//		"app_state", "pool", "params", "protocol_inflation_share",
//	)
//	_ = dyno.Set(genesis, "0.050000000000000000",
//		"app_state", "pool", "params", "pool_inflation_payout_rate",
//	)
//
//	newGenesis, _ := json.Marshal(genesis)
//	return newGenesis, nil
//}

func ModifyGenesis(config ibc.ChainConfig, genbz []byte) ([]byte, error) {
	genesis := make(map[string]interface{})
	_ = json.Unmarshal(genbz, &genesis)

	yamlFile, err := os.ReadFile("data/config.yml")
	if err != nil {
		return nil, err
	}
	var yamlObj interface{}
	err = yaml.Unmarshal(yamlFile, &yamlObj)
	if err != nil {
		return nil, err
	}

	jsonData, err := json.Marshal(yamlObj)
	if err != nil {
		return nil, err
	}

	var jsonObj map[string]interface{}
	err = json.Unmarshal(jsonData, &jsonObj)
	if err != nil {
		return nil, err
	}

	poolObj := jsonObj["genesis"].(map[string]interface{})["app_state"].(map[string]interface{})["pool"].(map[string]interface{})
	err = dyno.Set(genesis, poolObj, "app_state", "pool")
	if err != nil {
		return nil, err
	}

	balances, _ := dyno.GetSlice(genesis, "app_state", "bank", "balances")
	balances = append(balances, bankTypes.Balance{
		Address: "kyve1e29j95xmsw3zmvtrk4st8e89z5n72v7nf70ma4",
		Coins:   sdk.NewCoins(sdk.NewCoin(config.Denom, math.NewInt(165_000_000_000_000))),
	})
	_ = dyno.Set(genesis, balances, "app_state", "bank", "balances")

	newGenesis, _ := json.Marshal(genesis)
	return newGenesis, nil
}

//func ModifyGenesis(config ibc.ChainConfig, genbz []byte) ([]byte, error) {
//	yamlFile, err := os.ReadFile("data/config.yml")
//	if err != nil {
//		return nil, err
//	}
//	var cfg interface{}
//	err = yaml.Unmarshal(yamlFile, &cfg)
//	if err != nil {
//		return nil, err
//	}
//
//	return json.Marshal(cfg)
//}
