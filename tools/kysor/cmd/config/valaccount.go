package config

import (
	"fmt"
	"github.com/KYVENetwork/kyvejs/tools/kysor/cmd/types"
	"github.com/knadh/koanf/parsers/toml"
	"github.com/knadh/koanf/providers/file"
	"github.com/knadh/koanf/v2"
	"github.com/spf13/cobra"
	"os"
	"path/filepath"
	"strings"
)

var ValaccountConfigs []ValaccountConfig
var ValaccountConfigOptions []types.Option[ValaccountConfig]

type ValaccountConfig struct {
	Name           string
	Path           string
	Pool           uint64 `koanf:"pool"`
	Valaccount     string `koanf:"valaccount"`
	StoragePriv    string `koanf:"storagePriv"`
	RequestBackoff string `koanf:"requestBackoff"`
	Cache          string `koanf:"cache"`
	Metrics        bool   `koanf:"metrics"`
	MetricsPort    string `koanf:"metricsPort"`
}

func (c ValaccountConfig) Save() error {
	return save(c, c.Path)
}

func (c ValaccountConfig) PrettyName() string {
	return strings.TrimSuffix(c.Name, ".toml")
}

type ValaccountConfigOption struct {
	types.Option[ValaccountConfig]
	config ValaccountConfig
}

func (o ValaccountConfigOption) Name() string {
	return strings.TrimSuffix(o.config.Name, ".toml")
}

func (o ValaccountConfigOption) Value() ValaccountConfig {
	return o.config
}

func (o ValaccountConfigOption) StringValue() string {
	return o.config.Name
}

func GetValaccountsConfigDir(cmd *cobra.Command) (string, error) {
	homeDir, err := GetHomeDir(cmd)
	if err != nil {
		return "", err
	}
	return filepath.Join(homeDir, "valaccounts"), nil
}

func loadValaccountConfigs(cmd *cobra.Command, args []string) error {
	valaccountsDir, err := GetValaccountsConfigDir(cmd)
	if err != nil {
		return err
	}

	// Get all the valaccount config files
	entries, err := os.ReadDir(valaccountsDir)
	if err != nil && os.IsNotExist(err) {
		// return if the dir doesn't exist
		return nil
	} else if err != nil {
		return fmt.Errorf("error reading valaccount config directory: %s", err)
	}

	for _, entry := range entries {
		if !entry.IsDir() {
			if filepath.Ext(entry.Name()) == ".toml" {
				var k = koanf.New(".")
				var valaccountConfig ValaccountConfig
				name := entry.Name()
				path := filepath.Join(valaccountsDir, entry.Name())
				err = k.Load(file.Provider(path), toml.Parser())
				if err != nil {
					return fmt.Errorf("error loading valaccount config file: %s", err)
				}
				err = k.Unmarshal("", &valaccountConfig)
				if err != nil {
					return fmt.Errorf("error unmarshalling valaccount config file: %s", err)
				}
				valaccountConfig.Name = name
				valaccountConfig.Path = path
				ValaccountConfigs = append(ValaccountConfigs, valaccountConfig)
				ValaccountConfigOptions = append(ValaccountConfigOptions, ValaccountConfigOption{config: valaccountConfig})
			}
		}
	}
	return nil
}
