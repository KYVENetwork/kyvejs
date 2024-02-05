package cmd

import (
	"fmt"
	"github.com/spf13/cobra"
	"runtime"
	"runtime/debug"
)

func versionCmd() *cobra.Command {
	return &cobra.Command{
		Use:   "version",
		Short: "Show KYSOR version",
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
