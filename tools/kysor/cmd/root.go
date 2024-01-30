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

var (
	RootCmdConfig = types.CmdConfig{Name: "kysor", Short: "KYSOR helps you manage your KYVE data validators"}
)

// rootCmd represents the base command when called without any subcommands
var rootCmd = &cobra.Command{
	Use:   RootCmdConfig.Name,
	Short: RootCmdConfig.Short,
	RunE: func(cmd *cobra.Command, args []string) error {
		// Check if the interactive flag is set
		// -> if so ask the user what to do
		if utils.IsInteractive(cmd) {
			// TODO: print a better help message (explain interactive mode)
			err := cmd.Help()
			if err != nil {
				return err
			}

			options := []types.CmdConfig{
				InitCmdConfig,
				StartCmdConfig,
				StopCmdConfig,
				ValaccountsCmdConfig,
				VersionCmdConfig,
			}
			nextCmd, err := utils.PromptCmd(options)
			if err != nil {
				return err
			}

			switch nextCmd.Name {
			case InitCmdConfig.Name:
				config, err := cmd.PersistentFlags().GetString(types.FlagConfig.Name)
				if err != nil {
					return err
				}
				return initCmd(config).Execute()
			case StartCmdConfig.Name:
				return startCmd().Execute()
			case StopCmdConfig.Name:
				return stopCmd().Execute()
			case ValaccountsCmdConfig.Name:
				return valaccountsCmd().Execute()
			case VersionCmdConfig.Name:
				return versionCmd().Execute()
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
	err := rootCmd.Execute()
	if err != nil {
		os.Exit(1)
	}
}

func init() {
	cobra.OnInitialize(config.InitKysorConfig)
	cobra.OnInitialize(config.InitValaccountConfigs)

	types.FlagConfig.DefaultValue = config.GetDefaultConfigFilePath()

	rootCmd.PersistentFlags().StringP(types.FlagConfig.Name, types.FlagConfig.Short, types.FlagConfig.DefaultValue, types.FlagConfig.Usage)

	rootCmd.PersistentFlags().BoolP(types.FlagNonInteractive.Name, types.FlagNonInteractive.Short, types.FlagNonInteractive.DefaultValue, types.FlagNonInteractive.Usage)
	rootCmd.SetErrPrefix(promptui.IconBad)
}
