package cmd

import (
	"fmt"
	"github.com/spf13/cobra"
	"runtime"
)

var Version = "development"
var Commit = "none"

func versionCmd() *cobra.Command {
	return &cobra.Command{
		Use:   "version",
		Short: "Show KYSOR version",
		Run: func(cmd *cobra.Command, args []string) {
			fmt.Printf("Kysor version: %s\n", Version)
			fmt.Printf("Go version: %s\n", runtime.Version())
			fmt.Printf("Git commit: %s\n", Commit)
			fmt.Println()
			fmt.Printf("Platform: %s\n", runtime.GOOS)
			fmt.Printf("Arch: %s\n", runtime.GOARCH)
		},
	}
}

func init() {
	rootCmd.AddCommand(versionCmd())
}
