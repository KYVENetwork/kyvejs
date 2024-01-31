package cmd

import (
	"fmt"
	"github.com/KYVENetwork/kyvejs/tools/kysor/cmd/types"
	"github.com/KYVENetwork/kyvejs/tools/kysor/cmd/utils"
	"os"

	"github.com/manifoldco/promptui"

	"github.com/spf13/cobra"
)

// rootCmd represents the base command when called without any subcommands
var rootCmd = &cobra.Command{
	Use:   "kystrap",
	Short: "kystrap is a CLI tool to bootstrap KYVE integrations",
	RunE: func(cmd *cobra.Command, args []string) error {
		// Check if the interactive flag is set
		// -> if so ask the user what to do
		if utils.IsInteractive(cmd) {
			options := []types.CmdConfig{
				CreateCmdConfig,
				TestCmdConfig,
			}
			nextCmd, err := utils.PromptCmd(options)
			if err != nil {
				return err
			}

			switch nextCmd.Name {
			case CreateCmdConfig.Name:
				return CmdCreateIntegration().Execute()
			case TestCmdConfig.Name:
				return CmdTestIntegration().Execute()
			default:
				return fmt.Errorf("invalid option: %s", nextCmd.Name)
			}
		}
		return cmd.Help()
	},
}

// Execute adds all child commands to the root command and sets flags appropriately.
// This is called by main.main(). It only needs to happen once to the rootCmd.
func Execute() {
	rootCmd.CompletionOptions.DisableDefaultCmd = true
	err := rootCmd.Execute()
	if err != nil {
		os.Exit(1)
	}
}

func init() {
	rootCmd.PersistentFlags().BoolP(types.FlagNonInteractive.Name, types.FlagNonInteractive.Short, types.FlagNonInteractive.DefaultValue, types.FlagNonInteractive.Usage)
	rootCmd.SetErrPrefix(promptui.IconBad)
}
