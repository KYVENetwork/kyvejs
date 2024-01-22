package cmd

import (
	"fmt"
	"github.com/KYVENetwork/kyvejs/tools/kysor/cmd/types"
	"github.com/spf13/cobra"
	"runtime"
	"runtime/debug"
)

var VersionCmdConfig = types.CmdConfig{Name: "version", Short: "Show the version of KYSOR"}

func versionCmd() *cobra.Command {
	return &cobra.Command{
		Use:   VersionCmdConfig.Name,
		Short: VersionCmdConfig.Short,
		Run: func(cmd *cobra.Command, args []string) {
			bi, ok := debug.ReadBuildInfo()
			if ok && bi.Main.Version != "" {
				fmt.Println(fmt.Sprintf("Kysor version: %s", bi.Main.Version))
			}
			fmt.Println(fmt.Sprintf("Go version: %s", runtime.Version()))
			fmt.Println()
			fmt.Println(fmt.Sprintf("Platform: %s", runtime.GOOS))
			fmt.Println(fmt.Sprintf("Arch: %s", runtime.GOARCH))
		},
	}
}

func init() {
	rootCmd.AddCommand(versionCmd())
}
