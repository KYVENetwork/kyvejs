package cmd

import (
	"fmt"
	commoncmd "github.com/KYVENetwork/kyvejs/common/goutils/cmd"
	"github.com/KYVENetwork/kyvejs/tools/kysor/cmd/config"
	"github.com/spf13/cobra"
)

var (
	flagChainID = commoncmd.StringFlag{
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
	flagRPC = commoncmd.StringFlag{
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
	flagREST = commoncmd.StringFlag{
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
	flagAutoDownload = commoncmd.BoolFlag{
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
		PreRunE: commoncmd.SetupInteractiveMode,
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
			chainID, err := commoncmd.GetStringFromPromptOrFlag(cmd, flagChainID)
			if err != nil {
				return err
			}

			rpc, err := commoncmd.GetStringFromPromptOrFlag(cmd, flagRPC)
			if err != nil {
				return err
			}

			rest, err := commoncmd.GetStringFromPromptOrFlag(cmd, flagREST)
			if err != nil {
				return err
			}

			autoDownload, err := commoncmd.GetBoolFromPromptOrFlag(cmd, flagAutoDownload)
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
	commoncmd.AddStringFlags(cmd, []commoncmd.StringFlag{flagChainID, flagRPC, flagREST})
	commoncmd.AddBoolFlags(cmd, []commoncmd.BoolFlag{flagAutoDownload})
	return cmd
}

func init() {
	rootCmd.AddCommand(initCmd())
}
