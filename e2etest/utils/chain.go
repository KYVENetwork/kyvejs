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

func mergeWithConfigOverrides(genesis map[string]interface{}) error {
	yamlFile, err := os.ReadFile("data/config.yml")
	if err != nil {
		return err
	}
	var yamlObj interface{}
	err = yaml.Unmarshal(yamlFile, &yamlObj)
	if err != nil {
		return err
	}

	jsonData, err := json.Marshal(yamlObj)
	if err != nil {
		return err
	}

	var jsonObj map[string]interface{}
	err = json.Unmarshal(jsonData, &jsonObj)
	if err != nil {
		return err
	}

	appState := jsonObj["genesis"].(map[string]interface{})["app_state"]
	poolObj := appState.(map[string]interface{})["pool"].(map[string]interface{})
	err = dyno.Set(genesis, poolObj, "app_state", "pool")
	if err != nil {
		return err
	}

	stakerList := appState.(map[string]interface{})["stakers"].(map[string]interface{})["staker_list"]
	err = dyno.Set(genesis, stakerList, "app_state", "stakers", "staker_list")
	if err != nil {
		return err
	}
	valaccountList := appState.(map[string]interface{})["stakers"].(map[string]interface{})["valaccount_list"]
	err = dyno.Set(genesis, valaccountList, "app_state", "stakers", "valaccount_list")
	if err != nil {
		return err
	}

	funderList := appState.(map[string]interface{})["funders"].(map[string]interface{})["funder_list"]
	err = dyno.Set(genesis, funderList, "app_state", "funders", "funder_list")
	if err != nil {
		return err
	}
	fundingList := appState.(map[string]interface{})["funders"].(map[string]interface{})["funding_list"]
	err = dyno.Set(genesis, fundingList, "app_state", "funders", "funding_list")
	if err != nil {
		return err
	}
	fundingStateList := appState.(map[string]interface{})["funders"].(map[string]interface{})["funding_state_list"]
	err = dyno.Set(genesis, fundingStateList, "app_state", "funders", "funding_state_list")
	if err != nil {
		return err
	}
	return nil
}

func ModifyGenesis(config ibc.ChainConfig, genbz []byte) ([]byte, error) {
	genesis := make(map[string]interface{})
	_ = json.Unmarshal(genbz, &genesis)

	err := mergeWithConfigOverrides(genesis)
	if err != nil {
		return nil, err
	}

	balances, _ := dyno.GetSlice(genesis, "app_state", "bank", "balances")
	balances = append(balances, bankTypes.Balance{
		Address: "kyve1e29j95xmsw3zmvtrk4st8e89z5n72v7nf70ma4",
		Coins:   sdk.NewCoins(sdk.NewCoin(config.Denom, math.NewInt(165_000_000_000_000))),
	}, bankTypes.Balance{
		Address: "kyve1jq304cthpx0lwhpqzrdjrcza559ukyy3zsl2vd", // Alice
		Coins:   sdk.NewCoins(sdk.NewCoin(config.Denom, math.NewInt(100_000_000))),
	}, bankTypes.Balance{
		Address: "kyve1aw5gtwz50g7u60geulppjwqlev2klqgvhnzu6k", // Alice's valaccount
		Coins:   sdk.NewCoins(sdk.NewCoin(config.Denom, math.NewInt(100_000_000))),
	})
	_ = dyno.Set(genesis, balances, "app_state", "bank", "balances")

	newGenesis, _ := json.Marshal(genesis)
	return newGenesis, nil
}
