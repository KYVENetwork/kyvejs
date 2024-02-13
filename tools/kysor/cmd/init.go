package cmd

import (
	"fmt"

	commoncmd "github.com/KYVENetwork/kyvejs/common/goutils/cmd"
	"github.com/KYVENetwork/kyvejs/tools/kysor/cmd/config"
	"github.com/spf13/cobra"
)

type chainId struct {
	value string
	label string
}

func newChainId(value, label string) chainId {
	return chainId{
		value: value,
		label: label,
	}
}

func (c chainId) Name() string {
	return fmt.Sprintf("%s (%s)", c.label, c.value)
}

func (c chainId) Value() chainId {
	return c
}

func (c chainId) StringValue() string {
	return c.value
}

var chainIds = []chainId{
	newChainId("kyve-1", "mainnet"),
	newChainId("kaon-1", "testnet"),
	newChainId("korellia-2", "dev-testnet"),
}

var (
	flagChainID = commoncmd.OptionFlag[chainId]{
		Name:         "chain-id",
		Short:        "",
		DefaultValue: chainIds[0],
		Usage:        "Chain ID of the network",
		Required:     true,
		Options:      []commoncmd.Option[chainId]{chainIds[0], chainIds[1], chainIds[2]},
	}
	flagRPC = commoncmd.StringFlag{
		Name:         "rpc",
		Short:        "",
		DefaultValue: "",
		Usage:        "Comma separated list of rpc endpoints. If the first fails the next endpoint will be used as fallback.",
		Prompt:       "Comma separated list of rpc endpoints",
		Required:     true,
		ValidateFn:   commoncmd.ValidateNotEmpty,
	}
	flagREST = commoncmd.StringFlag{
		Name:         "rest",
		Short:        "",
		DefaultValue: "",
		Usage:        "Comma separated list of rest endpoints. If the first fails the next endpoint will be used as fallback.",
		Prompt:       "Comma separated list of rest endpoints",
		Required:     true,
		ValidateFn:   commoncmd.ValidateNotEmpty,
	}
	flagAutoDownload = commoncmd.BoolFlag{
		Name:         "auto-download-binaries",
		Short:        "d",
		DefaultValue: true,
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
				return fmt.Errorf("KYSOR was already initialized. You can edit the config file directyl under %s", path)
			}

			// Get the values from the flags or prompt the user for them
			chainID, err := commoncmd.GetOptionFromPromptOrFlag(cmd, flagChainID)
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
				ChainID:              chainID.Value().value,
				RPC:                  rpc,
				REST:                 rest,
				AutoDownloadBinaries: autoDownload,
			}

			return kysorConfig.Save(path)
		},
	}
	commoncmd.AddOptionFlags(cmd, []commoncmd.OptionFlag[chainId]{flagChainID})
	commoncmd.AddStringFlags(cmd, []commoncmd.StringFlag{flagRPC, flagREST})
	commoncmd.AddBoolFlags(cmd, []commoncmd.BoolFlag{flagAutoDownload})
	return cmd
}

func init() {
	rootCmd.AddCommand(initCmd())
}
