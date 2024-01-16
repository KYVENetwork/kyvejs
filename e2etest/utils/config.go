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

func getPoolConfig(integration Integration) (*PoolConfig, error) {
	path, err := filepath.Abs(fmt.Sprintf("%s/config.yml", integration.TestDataPath))
	if err != nil {
		return nil, err
	}
	if _, err := os.Stat(path); os.IsNotExist(err) {
		return nil, fmt.Errorf("%s does not exist", path)
	}

	// Read the config.yml file
	data, err := os.ReadFile(path)
	if err != nil {
		return nil, err
	}

	var obj poolConfigYml

	// Set default values from struct tags
	err = defaults.Set(&obj)
	if err != nil {
		return nil, err
	}

	// Unmarshal the yaml
	err = yaml.Unmarshal(data, &obj)
	if err != nil {
		return nil, err
	}

	// Convert to json
	jsonData, err := json.Marshal(obj.Config)
	if err != nil {
		return nil, err
	}

	return &PoolConfig{
		StartKey: obj.StartKey,
		Config:   string(jsonData),
	}, nil
}

func getTestdataPath(path string) (string, error) {
	path, err := filepath.Abs(fmt.Sprintf("%s/testdata", path))
	if err != nil {
		return "", err
	}
	if _, err := os.Stat(path); os.IsNotExist(err) {
		return "", fmt.Errorf("%s does not exist", path)
	}
	return path, nil
}

// GetIntegrationDirs returns a list of all integration folder names
func getIntegrations() ([]Integration, error) {
	path, err := filepath.Abs(integrationsPath)
	if err != nil {
		return nil, err
	}
	dirEntries, err := os.ReadDir(path)
	if err != nil {
		return nil, err
	}

	var integrationDirs []Integration
	for _, entry := range dirEntries {
		if entry.IsDir() {
			integrationPath := filepath.Join(path, entry.Name())
			testDataPath, err := getTestdataPath(integrationPath)
			if err != nil {
				return nil, err
			}
			integrationDirs = append(integrationDirs, Integration{
				Path:         integrationPath,
				Name:         entry.Name(),
				TestDataPath: testDataPath,
			})
		}
	}
	return integrationDirs, nil
}

func GetTestConfigs() ([]*TestConfig, error) {
	var testConfigs []*TestConfig
	integrations, err := getIntegrations()
	if err != nil {
		return nil, err
	}
	for _, integration := range integrations {
		poolConfig, err := getPoolConfig(integration)
		if err != nil {
			return nil, err
		}
		testConfigs = append(testConfigs, &TestConfig{
			PoolConfig:  *poolConfig,
			Integration: integration,
		})
	}
	return testConfigs, nil
}

type TmpIntegration struct {
	Name     string
	Path     string
	Language string
}

func GetTmpIntegrationDirectories() ([]TmpIntegration, error) {
	// Read Languages from directories in templates folder
	// Every directory is a language
	var languages []string
	dirs, err := os.ReadDir(kystrapTemplatesDir)
	if err != nil {
		return nil, fmt.Errorf("failed to read templates directory: %v", err)
	}
	for _, dir := range dirs {
		if dir.IsDir() {
			languages = append(languages, dir.Name())
		}
	}

	iPath, err := filepath.Abs(integrationsPath)
	if err != nil {
		return nil, err
	}

	// Build the tmp folder names
	var tmpIntegration []TmpIntegration
	for _, language := range languages {
		name := fmt.Sprintf("tmp-e2e-%s", language)
		tmpIntegration = append(tmpIntegration, TmpIntegration{
			Name:     name,
			Path:     fmt.Sprintf("%s/%s", iPath, name),
			Language: language,
		})
	}
	return tmpIntegration, nil
}
