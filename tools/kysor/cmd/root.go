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
	HelpCmdConfig = types.CmdConfig{Name: "help", Short: "Show help"}
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
				ValaccountsCmdConfig,
				StartCmdConfig,
				StopCmdConfig,
				VersionCmdConfig,
				HelpCmdConfig,
			}
			nextCmd, err := utils.PromptCmd(options)
			if err != nil {
				return err
			}

			switch nextCmd.Name {
			case InitCmdConfig.Name:
				homeDir, err := cmd.PersistentFlags().GetString(config.FlagHome.Name)
				if err != nil {
					return err
				}
				return initCmd(homeDir).Execute()
			case StartCmdConfig.Name:
				return startCmd().Execute()
			case StopCmdConfig.Name:
				return stopCmd().Execute()
			case ValaccountsCmdConfig.Name:
				return valaccountsCmd().Execute()
			case VersionCmdConfig.Name:
				return versionCmd().Execute()
			case HelpCmdConfig.Name:
				return cmd.Help()
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
	utils.AddPersistentStringFlags(rootCmd, []types.StringFlag{config.FlagHome})
	utils.AddPersistentBoolFlags(rootCmd, []types.BoolFlag{types.FlagNonInteractive})
	rootCmd.SetErrPrefix(promptui.IconBad)
}
