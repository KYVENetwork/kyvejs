package cmd

import (
	"fmt"
	"runtime"
	"runtime/debug"

	"github.com/spf13/cobra"
)

func versionCmd() *cobra.Command {
	return &cobra.Command{
		Use:   "version",
		Short: "Show KYSOR version",
		Run: func(cmd *cobra.Command, args []string) {
			bi, ok := debug.ReadBuildInfo()
			if ok && bi.Main.Version != "" {
				fmt.Printf("Kysor version: %s\n", bi.Main.Version)
			}
			fmt.Printf("Go version: %s\n", runtime.Version())
			fmt.Println()
			fmt.Printf("Platform: %s\n", runtime.GOOS)
			fmt.Printf("Arch: %s\n", runtime.GOARCH)
		},
	}
}

func init() {
	rootCmd.AddCommand(versionCmd())
}
