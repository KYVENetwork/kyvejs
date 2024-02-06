package cmd

import (
	"os"

	commoncmd "github.com/KYVENetwork/kyvejs/common/goutils/cmd"

	"github.com/KYVENetwork/kyvejs/tools/kysor/cmd/config"
	"github.com/KYVENetwork/kyvejs/tools/kysor/cmd/utils"
	"github.com/manifoldco/promptui"
	"github.com/spf13/cobra"
)

// rootCmd represents the base command when called without any subcommands
var rootCmd = &cobra.Command{
	Use:   "kysor",
	Short: "KYSOR helps you manage your KYVE data validators",
	RunE:  utils.RunPromptCommandE,
}

// Execute adds all child commands to the root command and sets flags appropriately.
// This is called by main.main(). It only needs to happen once to the rootCmd.
func Execute() {
	err := rootCmd.Execute()
	if err != nil {
		os.Exit(1)
	}
}

func init() {
	commoncmd.AddPersistentStringFlags(rootCmd, []commoncmd.StringFlag{config.FlagHome})
	commoncmd.AddPersistentBoolFlags(rootCmd, []commoncmd.BoolFlag{commoncmd.FlagNonInteractive})
	rootCmd.SetErrPrefix(promptui.IconBad)
}
