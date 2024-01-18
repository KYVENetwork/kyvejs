package cmd

import (
	"fmt"
	"github.com/KYVENetwork/kyvejs/tools/kysor/cmd/config"

	"github.com/spf13/cobra"
)

func valaccountsCmd() *cobra.Command {
	return &cobra.Command{
		Use:   config.ValaccountsCmdConfig.Name,
		Short: config.ValaccountsCmdConfig.Short,
		Run: func(cmd *cobra.Command, args []string) {
			fmt.Println("valaccounts called")
		},
	}
}

func ValaccountsCreateCmd() *cobra.Command {
	cmd := &cobra.Command{
		Use:   config.ValaccountsCreateCmdConfig.Name,
		Short: config.ValaccountsCreateCmdConfig.Short,
		Run: func(cmd *cobra.Command, args []string) {
			fmt.Println("valaccounts called")
		},
	}
	return cmd
}

func init() {
	cmd := valaccountsCmd()
	cmd.AddCommand(ValaccountsCreateCmd())
	rootCmd.AddCommand(cmd)
}
