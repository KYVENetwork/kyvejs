package utils

import (
	"encoding/json"
	"fmt"
	"os"
	"path/filepath"

	"github.com/creasty/defaults"
	"github.com/strangelove-ventures/interchaintest/v7/ibc"
	"gopkg.in/yaml.v3"
)

// integrationsPath is the path to the integrations folder
const integrationsPath = "../integrations"

type poolConfigYml struct {
	StartKey string                 `default:"1" yaml:"startKey"`
	Config   map[string]interface{} `default:"{}" yaml:"config"`
}

type ProtocolConfig struct {
	ProtocolNode ibc.Wallet
	Valaccount   ibc.Wallet
}

type PoolConfig struct {
	StartKey string `yaml:"startKey"`
	Config   string `yaml:"config"`
}

type Integration struct {
	Name         string
	Path         string
	TestDataPath string
}

type TestConfig struct {
	Alice       ProtocolConfig
	Bob         ProtocolConfig
	Viktor      ProtocolConfig
	PoolId      uint64
	PoolConfig  PoolConfig
	Integration Integration
}

func getPoolConfig(integration Integration) PoolConfig {
	path, err := filepath.Abs(fmt.Sprintf("%s/config.yml", integration.TestDataPath))
	if err != nil {
		panic(err)
	}
	if _, err := os.Stat(path); os.IsNotExist(err) {
		panic(fmt.Sprintf("%s does not exist", path))
	}

	// Read the config.yml file
	data, err := os.ReadFile(path)
	if err != nil {
		panic(err)
	}

	var obj poolConfigYml

	// Set default values from struct tags
	err = defaults.Set(&obj)
	if err != nil {
		panic(err)
	}

	// Unmarshal the yaml
	err = yaml.Unmarshal(data, &obj)
	if err != nil {
		panic(err)
	}

	// Convert to json
	jsonData, err := json.Marshal(obj.Config)
	if err != nil {
		panic(err)
	}

	return PoolConfig{
		StartKey: obj.StartKey,
		Config:   string(jsonData),
	}
}

func getTestdataPath(path string) string {
	path, err := filepath.Abs(fmt.Sprintf("%s/testdata", path))
	if err != nil {
		panic(err)
	}
	if _, err := os.Stat(path); os.IsNotExist(err) {
		panic(fmt.Sprintf("%s does not exist", path))
	}
	return path
}

// GetIntegrationDirs returns a list of all integration folder names
func getIntegrations() []Integration {
	path, err := filepath.Abs(integrationsPath)
	if err != nil {
		panic(err)
	}
	dirEntries, err := os.ReadDir(path)
	if err != nil {
		panic(err)
	}

	var integrationDirs []Integration
	for _, entry := range dirEntries {
		if entry.IsDir() {
			integrationPath := filepath.Join(path, entry.Name())
			integrationDirs = append(integrationDirs, Integration{
				Path:         integrationPath,
				Name:         entry.Name(),
				TestDataPath: getTestdataPath(integrationPath),
			})
		}
	}
	return integrationDirs
}

func GetTestConfigs() []*TestConfig {
	var testConfigs []*TestConfig
	for _, integration := range getIntegrations() {
		testConfigs = append(testConfigs, &TestConfig{
			PoolConfig:  getPoolConfig(integration),
			Integration: integration,
		})
	}
	return testConfigs
}