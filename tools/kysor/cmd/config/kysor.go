package config

import (
	"fmt"
	"github.com/knadh/koanf/parsers/toml"
	"github.com/knadh/koanf/providers/file"
	"github.com/knadh/koanf/providers/structs"
	"github.com/knadh/koanf/v2"
	"github.com/spf13/cobra"
	"os"
	"path/filepath"
)

const configDir = ".kysor"
const configFilePath = configDir + "/config.toml"

var ConfigFilePath string

var Config *KysorConfig

type KysorConfig struct {
	Name                 string
	Path                 string
	ChainID              string `koanf:"chainId"`
	RPC                  string `koanf:"rpc"`
	REST                 string `koanf:"rest"`
	AutoDownloadBinaries bool   `koanf:"autoDownloadBinaries"`
}

func (c KysorConfig) Save() error {
	return save(c, c.Path)
}

func save(s interface{}, path string) error {
	if DoesConfigExist(path) {
		return fmt.Errorf("config file already exists at %s", path)
	}

	var k = koanf.New(".")

	// Load the config into koanf
	err := k.Load(structs.Provider(s, "koanf"), nil)
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
	if _, err := os.Stat(configFilePath); os.IsNotExist(err) {
		return false
	} else if err != nil {
		cobra.CheckErr(err)
	}
	return true
}

func GetDefaultConfigFilePath() string {
	home, err := os.UserHomeDir()
	cobra.CheckErr(err)
	return filepath.Join(home, configFilePath)
}

func InitKysorConfig() {
	// Check if the config file exists
	if _, err := os.Stat(ConfigFilePath); os.IsNotExist(err) {
		return
	}

	var k = koanf.New(".")

	// Load the config file
	if err := k.Load(file.Provider(ConfigFilePath), toml.Parser()); err != nil {
		cobra.CheckErr(fmt.Errorf("error loading config: %v", err))
	}

	// Unmarshal the config file into the config struct
	var c KysorConfig
	err := k.Unmarshal("", &c)
	cobra.CheckErr(err)

	// Set the config name and path
	c.Name = filepath.Base(ConfigFilePath)
	c.Path = ConfigFilePath
	Config = &c
}
