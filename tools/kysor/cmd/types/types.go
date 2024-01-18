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
	ChainID              string `json:"chainId"`
	RPC                  string `json:"rpc"`
	REST                 string `json:"rest"`
	AutoDownloadBinaries bool   `json:"autoDownloadBinaries"`
}

type CmdConfig struct {
	Name  string
	Short string
}

func (c CmdConfig) ActionString() string {
	return fmt.Sprintf("%s (%s)", c.Short, c.Name)
}
