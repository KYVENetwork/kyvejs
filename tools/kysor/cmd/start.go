package cmd

import (
	"fmt"
	"github.com/KYVENetwork/kyvejs/tools/kysor/cmd/types"

	"github.com/spf13/cobra"
)

var StartCmdConfig = types.CmdConfig{Name: "start", Short: "Start KYSOR"}

func startCmd() *cobra.Command {
	return &cobra.Command{
		Use:   StartCmdConfig.Name,
		Short: StartCmdConfig.Short,
		Run: func(cmd *cobra.Command, args []string) {
			fmt.Println("start called")
		},
	}
}

func init() {
	rootCmd.AddCommand(startCmd())
}
