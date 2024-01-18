package cmd

import (
	"fmt"
	"github.com/KYVENetwork/kyvejs/tools/kysor/cmd/config"

	"github.com/spf13/cobra"
)

var valaccountsCmd = &cobra.Command{
	Use:   config.ValaccountsCmdConfig.Name,
	Short: config.ValaccountsCmdConfig.Short,
	Run: func(cmd *cobra.Command, args []string) {
		fmt.Println("valaccounts called")
	},
}

func init() {
	rootCmd.AddCommand(valaccountsCmd)
}
