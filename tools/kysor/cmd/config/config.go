package config

import (
	"fmt"
	"github.com/KYVENetwork/kyvejs/tools/kysor/cmd/types"
)

const configFilePath = ".kysor/config.toml"

var (
	FlagConfig         = types.StringFlag{Name: "config", Short: "c", DefaultValue: "", Usage: fmt.Sprintf("config file (default is $HOME/%s)", configFilePath), Required: false}
	FlagNonInteractive = types.BoolFlag{Name: "yes", Short: "y", DefaultValue: false, Usage: "Non-interactive mode: Skips all prompts (default false)", Required: false}
)

var (
	RootCmdConfig        = types.CmdConfig{Name: "kysor", Short: "Kysor helps you manage your KYVE data validators"}
	InitCmdConfig        = types.CmdConfig{Name: "init", Short: "Init kysor"}
	StartCmdConfig       = types.CmdConfig{Name: "start", Short: "Start kysor"}
	ValaccountsCmdConfig = types.CmdConfig{Name: "valaccounts", Short: "Manage validator accounts"}
	VersionCmdConfig     = types.CmdConfig{Name: "version", Short: "Show the version of kysor"}
)
