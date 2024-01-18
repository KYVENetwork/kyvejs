package cmd

import (
	"fmt"
	"github.com/KYVENetwork/kyvejs/tools/kysor/cmd/config"

	"github.com/spf13/cobra"
)

var versionCmd = &cobra.Command{
	Use:   config.VersionCmdConfig.Name,
	Short: config.VersionCmdConfig.Short,
	Run: func(cmd *cobra.Command, args []string) {
		fmt.Println("version called")
	},
}

func init() {
	rootCmd.AddCommand(versionCmd)
}
