package utils

import (
	"cosmossdk.io/math"
	"encoding/json"
	"fmt"
	sdk "github.com/cosmos/cosmos-sdk/types"
	bankTypes "github.com/cosmos/cosmos-sdk/x/bank/types"
	"github.com/icza/dyno"
	"github.com/strangelove-ventures/interchaintest/v7/ibc"
	"gopkg.in/yaml.v3"
	"os"
)

const (
	// version is the version of the kyve image to use
	version = "v1.4.0"
	uidGid  = "1025:1025"
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

var Mnemonics = []string{
	Alice.Mnemonic,
	AliceValaccount.Mnemonic,
	Bob.Mnemonic,
	BobValaccount.Mnemonic,
	Viktor.Mnemonic,
	ViktorValaccount.Mnemonic,
}

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

	appState := jsonObj["genesis"].(map[string]interface{})["app_state"].(map[string]interface{})
	for key, newValue := range appState {
		oldValue, err := dyno.Get(genesis, "app_state", key)
		if err != nil {
			return err
		}

		// Assuming the values are also maps
		oldMap, ok := oldValue.(map[string]interface{})
		if !ok {
			return fmt.Errorf("value is not a map[string]interface{}")
		}

		newMap, ok := newValue.(map[string]interface{})
		if !ok {
			return fmt.Errorf("value is not a map[string]interface{}")
		}

		// Merge the old and new maps
		for k, v := range newMap {
			oldMap[k] = v
		}

		// Set the merged map back into the genesis map
		err = dyno.Set(genesis, oldMap, "app_state", key)
		if err != nil {
			return err
		}
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
	})
	_ = dyno.Set(genesis, balances, "app_state", "bank", "balances")

	newGenesis, _ := json.Marshal(genesis)
	return newGenesis, nil
}
