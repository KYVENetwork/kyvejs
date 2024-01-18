package cmd

import (
	"fmt"
	"github.com/KYVENetwork/kyvejs/tools/kysor/cmd/config"
	"github.com/KYVENetwork/kyvejs/tools/kysor/cmd/types"
	"github.com/KYVENetwork/kyvejs/tools/kysor/cmd/utils"

	"github.com/spf13/cobra"
)

func valaccountsCmd() *cobra.Command {
	return &cobra.Command{
		Use:   config.ValaccountsCmdConfig.Name,
		Short: config.ValaccountsCmdConfig.Short,
		RunE: func(cmd *cobra.Command, args []string) error {
			var nextCmd *types.CmdConfig

			// Check if the interactive flag is set
			// -> if so ask the user what to do
			if utils.IsInteractive(cmd) {
				options := []types.CmdConfig{
					config.ValaccountsCreateCmdConfig,
				}
				var err error
				nextCmd, err = utils.PromptCmd(options)
				if err != nil {
					return err
				}
			}

			switch nextCmd.Name {
			case config.ValaccountsCreateCmdConfig.Name:
				return valaccountsCreateCmd().Execute()
			default:
				return fmt.Errorf("invalid option: %s", nextCmd.Name)
			}
		},
	}
}

var (
	flagValaccCreateName = types.StringFlag{
		Name:         "name",
		Short:        "n",
		DefaultValue: "",
		Usage:        "Name of the valaccount (name only used locally for KYSOR)",
		Prompt:       "Name of the valaccount (name only used locally for KYSOR)",
		Required:     true,
	}
	flagValaccCreatePool = types.StringFlag{
		Name:         "pool",
		Short:        "p",
		DefaultValue: "",
		Usage:        "The ID of the pool this valaccount should participate as a validator",
		Prompt:       "The ID of the pool this valaccount should participate as a validator",
		Required:     true,
	}
	flagValaccCreateStorageProvKey = types.StringFlag{
		Name:         "storage-priv",
		Short:        "",
		DefaultValue: "",
		Usage:        "The private key of the storage provider",
		Prompt:       "The private key of the storage provider",
	}
)

func valaccountsCreateCmd() *cobra.Command {
	cmd := &cobra.Command{
		Use:    config.ValaccountsCreateCmdConfig.Name,
		Short:  config.ValaccountsCreateCmdConfig.Short,
		PreRun: utils.SetupInteractiveMode,
		RunE: func(cmd *cobra.Command, args []string) error {
			// Get the values from the flags or prompt the user for them
			name, err := utils.GetStringFromPromptOrFlag(cmd, flagValaccCreateName)
			if err != nil {
				return err
			}

			// TODO: Get pools from chain and make a selection
			pool, err := utils.GetStringFromPromptOrFlag(cmd, flagValaccCreatePool)
			if err != nil {
				return nil
			}

			storageProvKey, err := utils.GetStringFromPromptOrFlag(cmd, flagValaccCreateStorageProvKey)
			if err != nil {
				return nil
			}

			fmt.Println(name, pool, storageProvKey)

			return nil
		},
	}
	utils.AddStringFlags(cmd, []types.StringFlag{flagValaccCreateName, flagValaccCreatePool})
	return cmd
}

func init() {
	cmd := valaccountsCmd()
	cmd.AddCommand(valaccountsCreateCmd())
	rootCmd.AddCommand(cmd)
}
