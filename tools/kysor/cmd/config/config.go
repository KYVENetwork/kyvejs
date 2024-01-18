package config

import (
	"fmt"
	"github.com/KYVENetwork/kyvejs/tools/kysor/cmd/types"
	"github.com/knadh/koanf/parsers/toml"
	"github.com/knadh/koanf/providers/file"
	"github.com/knadh/koanf/providers/structs"
	"github.com/knadh/koanf/v2"
	"github.com/spf13/cobra"
	"os"
	"path/filepath"
)

const configFilePath = ".kysor/config.toml"

var k = koanf.New(".")

var ConfigFilePath string

var Config KysorConfig

var (
	FlagConfig         = types.StringFlag{Name: "config", Short: "c", DefaultValue: "", Usage: fmt.Sprintf("config file (default is $HOME/%s)", configFilePath), Required: false}
	FlagNonInteractive = types.BoolFlag{Name: "yes", Short: "y", DefaultValue: false, Usage: "Non-interactive mode: Skips all prompts (default false)", Required: false}
)

// TODO: move to respective cmd files
var (
	RootCmdConfig    = types.CmdConfig{Name: "kysor", Short: "KYSOR helps you manage your KYVE data validators"}
	VersionCmdConfig = types.CmdConfig{Name: "version", Short: "Show the version of KYSOR"}
	InitCmdConfig    = types.CmdConfig{Name: "init", Short: "Init KYSOR"}
	StartCmdConfig   = types.CmdConfig{Name: "start", Short: "Start KYSOR"}
	//StopCmdConfig       = types.CmdConfig{Name: "stop", Short: "Stop KYSOR"}
	ValaccountsCmdConfig       = types.CmdConfig{Name: "valaccounts", Short: "Manage validator accounts"}
	ValaccountsCreateCmdConfig = types.CmdConfig{Name: "create", Short: "Create a new valaccount"}
)

type KysorConfig struct {
	ChainID              string `koanf:"chainId"`
	RPC                  string `koanf:"rpc"`
	REST                 string `koanf:"rest"`
	AutoDownloadBinaries bool   `koanf:"autoDownloadBinaries"`
}

func (c KysorConfig) Save(path string) error {
	if DoesConfigExist(path) {
		return fmt.Errorf("config file already exists at %s", getConfigFilePath())
	}

	// Load the config into koanf
	err := k.Load(structs.Provider(c, "koanf"), nil)
	if err != nil {
		return err
	}

	b, err := k.Marshal(toml.Parser())
	if err != nil {
		return err
	}

	// Create the config directory if it doesn't exist
	err = os.MkdirAll(filepath.Dir(path), os.ModePerm)
	if err != nil {
		return err
	}

	// Save the config file
	err = os.WriteFile(path, b, 0644)
	if err != nil {
		return err
	}

	return nil
}

func DoesConfigExist(configFilePath string) bool {
	if configFilePath == "" {
		configFilePath = getConfigFilePath()
	}
	if _, err := os.Stat(configFilePath); os.IsNotExist(err) {
		return false
	} else if err != nil {
		cobra.CheckErr(err)
	}
	return true
}

func getConfigFilePath() string {
	home, err := os.UserHomeDir()
	cobra.CheckErr(err)
	return filepath.Join(home, configFilePath)
}

func InitConfig() {
	// Check if the config file exists
	if _, err := os.Stat(ConfigFilePath); os.IsNotExist(err) {
		return
	}

	// Load the config file
	if err := k.Load(file.Provider(ConfigFilePath), toml.Parser()); err != nil {
		cobra.CheckErr(fmt.Errorf("error loading config: %v", err))
	}

	// Unmarshal the config file into the config struct
	err := k.Unmarshal("kysor", &Config)
	cobra.CheckErr(err)
}

func init() {
	FlagConfig.DefaultValue = getConfigFilePath()
}
