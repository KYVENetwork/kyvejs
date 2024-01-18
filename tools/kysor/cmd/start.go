package cmd

import (
	"fmt"
	"github.com/KYVENetwork/kyvejs/tools/kysor/cmd/config"

	"github.com/spf13/cobra"
)

var startCmd = &cobra.Command{
	Use:   config.StartCmdConfig.Name,
	Short: config.StartCmdConfig.Short,
	Run: func(cmd *cobra.Command, args []string) {
		fmt.Println("start called")
	},
}

func init() {
	rootCmd.AddCommand(startCmd)
}
