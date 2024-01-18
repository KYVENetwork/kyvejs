package types

import "fmt"

type StringFlag struct {
	Name         string
	Short        string
	DefaultValue string
	Usage        string
	Required     bool
}

type BoolFlag struct {
	Name         string
	Short        string
	DefaultValue bool
	Usage        string
	Required     bool
}

type KysorConfig struct {
	ChainID              string `json:"chainId" mapstructure:"chainId"`
	RPC                  string `json:"rpc" mapstructure:"rpc"`
	REST                 string `json:"rest" mapstructure:"rest"`
	AutoDownloadBinaries bool   `json:"autoDownloadBinaries" mapstructure:"autoDownloadBinaries"`
}

type CmdConfig struct {
	Name  string
	Short string
}

func (c CmdConfig) ActionString() string {
	return fmt.Sprintf("%s (%s)", c.Short, c.Name)
}
