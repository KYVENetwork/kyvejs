package cmd

import (
	"fmt"
	"github.com/KYVENetwork/kyvejs/tools/kysor/cmd/config"
	"github.com/KYVENetwork/kyvejs/tools/kysor/cmd/types"
	"github.com/KYVENetwork/kyvejs/tools/kysor/cmd/utils"
	"github.com/manifoldco/promptui"
	"github.com/spf13/cobra"
	"os"
)

// rootCmd represents the base command when called without any subcommands
var rootCmd = &cobra.Command{
	Use:   config.RootCmdConfig.Name,
	Short: config.RootCmdConfig.Short,
	RunE: func(cmd *cobra.Command, args []string) error {
		var nextCmd *types.CmdConfig

		// Check if the interactive flag is set
		// -> if so ask the user what to do
		if utils.IsInteractive(cmd) {
			options := []types.CmdConfig{
				config.InitCmdConfig,
				config.StartCmdConfig,
				config.ValaccountsCmdConfig,
				config.VersionCmdConfig,
			}
			var err error
			nextCmd, err = utils.PromptCmd(options)
			if err != nil {
				return err
			}
		}

		switch nextCmd.Name {
		case config.InitCmdConfig.Name:
			config, err := cmd.PersistentFlags().GetString(config.FlagConfig.Name)
			if err != nil {
				return err
			}
			return initCmd(config).Execute()
		case config.StartCmdConfig.Name:
			return startCmd().Execute()
		case config.ValaccountsCmdConfig.Name:
			return valaccountsCmd().Execute()
		case config.VersionCmdConfig.Name:
			return versionCmd().Execute()
		default:
			return fmt.Errorf("invalid option: %s", nextCmd.Name)
		}
	},
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
	cobra.OnInitialize(config.InitConfig)

	rootCmd.PersistentFlags().StringVarP(&config.ConfigFilePath, config.FlagConfig.Name, config.FlagConfig.Short, config.FlagConfig.DefaultValue, config.FlagConfig.Usage)

	rootCmd.PersistentFlags().BoolP(config.FlagNonInteractive.Name, config.FlagNonInteractive.Short, config.FlagNonInteractive.DefaultValue, config.FlagNonInteractive.Usage)
	rootCmd.SetErrPrefix(promptui.IconBad)
}
