package cmd

import (
	"fmt"
	"github.com/KYVENetwork/kyvejs/tools/kysor/cmd/config"
	"github.com/KYVENetwork/kyvejs/tools/kysor/cmd/types"
	"github.com/KYVENetwork/kyvejs/tools/kysor/cmd/utils"
	"github.com/spf13/cobra"
)

var (
	flagChainID = types.StringFlag{
		Name:         "chain-id",
		Short:        "",
		DefaultValue: "",
		Usage:        "Chain ID of the network",
		Required:     true,
		ValidateFn: func(input string) error {
			if len(input) == 0 {
				return fmt.Errorf("chain ID must not be empty")
			}
			return nil
		},
	}
	flagRPC = types.StringFlag{
		Name:         "rpc",
		Short:        "",
		DefaultValue: "",
		Usage:        "Comma separated list of rpc endpoints. If the first fails the next endpoint will be used as fallback.",
		Prompt:       "Comma separated list of rpc endpoints",
		Required:     true,
		ValidateFn: func(input string) error {
			if len(input) == 0 {
				return fmt.Errorf("rpc endpoints must not be empty")
			}
			return nil
		},
	}
	flagREST = types.StringFlag{
		Name:         "rest",
		Short:        "",
		DefaultValue: "",
		Usage:        "Comma separated list of rest endpoints. If the first fails the next endpoint will be used as fallback.",
		Prompt:       "Comma separated list of rest endpoints",
		Required:     true,
		ValidateFn: func(input string) error {
			if len(input) == 0 {
				return fmt.Errorf("rest endpoints must not be empty")
			}
			return nil
		},
	}
	flagAutoDownload = types.BoolFlag{
		Name:         "auto-download-binaries",
		Short:        "d",
		DefaultValue: false,
		Usage:        "Allow automatic download and execution of new upgrade binaries",
		Required:     false,
	}
)

func initCmd() *cobra.Command {
	cmd := &cobra.Command{
		Use:     "init",
		Short:   "Initialize KYSOR",
		PreRunE: utils.SetupInteractiveMode,
		RunE: func(cmd *cobra.Command, args []string) error {
			path, err := config.GetConfigFilePath(cmd)
			if err != nil {
				return fmt.Errorf("error getting config file path: %s", err)
			}

			// Check if the config file already exists
			if config.DoesConfigExist(path) {
				return fmt.Errorf("config file already exists: %s", path)
			}

			// Get the values from the flags or prompt the user for them
			chainID, err := utils.GetStringFromPromptOrFlag(cmd, flagChainID)
			if err != nil {
				return err
			}

			rpc, err := utils.GetStringFromPromptOrFlag(cmd, flagRPC)
			if err != nil {
				return err
			}

			rest, err := utils.GetStringFromPromptOrFlag(cmd, flagREST)
			if err != nil {
				return err
			}

			autoDownload, err := utils.GetBoolFromPromptOrFlag(cmd, flagAutoDownload)
			if err != nil {
				return err
			}

			// Create the config file
			kysorConfig := config.KysorConfig{
				ChainID:              chainID,
				RPC:                  rpc,
				REST:                 rest,
				AutoDownloadBinaries: autoDownload,
			}

			return kysorConfig.Save(path)
		},
	}
	utils.AddStringFlags(cmd, []types.StringFlag{flagChainID, flagRPC, flagREST})
	utils.AddBoolFlags(cmd, []types.BoolFlag{flagAutoDownload})
	return cmd
}

func init() {
	rootCmd.AddCommand(initCmd())
}
