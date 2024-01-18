package cmd

import (
	"fmt"
	"github.com/KYVENetwork/kyvejs/tools/kysor/cmd/config"
	"github.com/KYVENetwork/kyvejs/tools/kysor/cmd/types"
	"github.com/KYVENetwork/kyvejs/tools/kysor/cmd/utils"
	"github.com/spf13/cobra"
)

var (
	flagChainID      = types.StringFlag{Name: "chain-id", Short: "", DefaultValue: "", Usage: "Chain ID of the network", Required: true}
	flagRPC          = types.StringFlag{Name: "rpc", Short: "", DefaultValue: "", Usage: "Comma seperated list of rpc endpoints. If the first fails the next endpoint will be used as fallback.", Required: true}
	flagREST         = types.StringFlag{Name: "rest", Short: "", DefaultValue: "", Usage: "Comma seperated list of rest endpoints. If the first fails the next endpoint will be used as fallback.", Required: true}
	flagAutoDownload = types.BoolFlag{Name: "auto-download-binaries", Short: "d", DefaultValue: false, Usage: "Allow automatic download and execution of new upgrade binaries", Required: false}
)

func InitCmd() *cobra.Command {
	cmd := &cobra.Command{
		Use:    config.InitCmdConfig.Name,
		Short:  config.InitCmdConfig.Short,
		PreRun: utils.SetupInteractiveMode,
		Run: func(cmd *cobra.Command, args []string) {
			fmt.Println("Run: init called")
		},
	}
	utils.AddStringFlags(cmd, []types.StringFlag{flagChainID, flagRPC, flagREST})
	utils.AddBoolFlags(cmd, []types.BoolFlag{flagAutoDownload})
	return cmd
}

func init() {
	rootCmd.AddCommand(InitCmd())
}
