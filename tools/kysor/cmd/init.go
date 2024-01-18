package cmd

import (
	"bytes"
	"encoding/json"
	"fmt"
	"github.com/KYVENetwork/kyvejs/tools/kysor/cmd/config"
	"github.com/KYVENetwork/kyvejs/tools/kysor/cmd/types"
	"github.com/KYVENetwork/kyvejs/tools/kysor/cmd/utils"
	"github.com/manifoldco/promptui"
	"github.com/spf13/cobra"
	"github.com/spf13/viper"
	"os"
	"strconv"
)

var (
	flagChainID      = types.StringFlag{Name: "chain-id", Short: "", DefaultValue: "", Usage: "Chain ID of the network", Required: true}
	flagRPC          = types.StringFlag{Name: "rpc", Short: "", DefaultValue: "", Usage: "Comma separated list of rpc endpoints. If the first fails the next endpoint will be used as fallback.", Required: true}
	flagREST         = types.StringFlag{Name: "rest", Short: "", DefaultValue: "", Usage: "Comma separated list of rest endpoints. If the first fails the next endpoint will be used as fallback.", Required: true}
	flagAutoDownload = types.BoolFlag{Name: "auto-download-binaries", Short: "d", DefaultValue: false, Usage: "Allow automatic download and execution of new upgrade binaries", Required: false}
)

func promptStringIfEmpty(value string, question string) (string, error) {
	if value != "" {
		return value, nil
	}
	prompt := promptui.Prompt{
		Label: question,
	}
	return prompt.Run()
}

func promptBool(question string) (bool, error) {
	prompt := promptui.Prompt{
		Label: question,
	}
	result, err := prompt.Run()
	if err != nil {
		return false, err
	}
	return strconv.ParseBool(result)
}

func promptYesNo(question string, defaultValue *bool) (bool, error) {
	pos := 0
	if defaultValue != nil && !(*defaultValue) {
		pos = 1
	}
	prompt := promptui.Select{
		Label:     question,
		Items:     []string{"Yes", "No"},
		CursorPos: pos,
	}
	_, result, err := prompt.Run()
	if err != nil {
		return false, err
	}
	return result == "Yes", nil
}

func InitCmd() *cobra.Command {
	cmd := &cobra.Command{
		Use:    config.InitCmdConfig.Name,
		Short:  config.InitCmdConfig.Short,
		PreRun: utils.SetupInteractiveMode,
		RunE: func(cmd *cobra.Command, args []string) error {
			// Check if the config file already exists
			if _, err := os.Stat(viper.ConfigFileUsed()); err == nil {
				return fmt.Errorf("config file already exists: %s", viper.ConfigFileUsed())
			}

			// Get the values from the flags or prompt the user for them
			chainID, err := cmd.Flags().GetString(flagChainID.Name)
			if err != nil {
				return err
			}
			chainID, err = promptStringIfEmpty(chainID, flagChainID.Usage)
			if err != nil {
				return err
			}

			rpc, err := cmd.Flags().GetString(flagRPC.Name)
			if err != nil {
				return err
			}
			rpc, err = promptStringIfEmpty(rpc, flagRPC.Usage)
			if err != nil {
				return err
			}

			rest, err := cmd.Flags().GetString(flagREST.Name)
			if err != nil {
				return err
			}
			rest, err = promptStringIfEmpty(rest, flagREST.Usage)
			if err != nil {
				return err
			}

			autoDownload, err := cmd.Flags().GetBool(flagAutoDownload.Name)
			if err != nil {
				return err
			}
			if utils.IsInteractive(cmd) && !cmd.Flags().Changed(flagAutoDownload.Name) {
				autoDownload, err = promptYesNo(flagAutoDownload.Usage, &flagAutoDownload.DefaultValue)
				if err != nil {
					return err
				}
			}

			kysorConfig := types.KysorConfig{
				ChainID:              chainID,
				RPC:                  rpc,
				REST:                 rest,
				AutoDownloadBinaries: autoDownload,
			}

			// Marshal the struct into a JSON string
			kysorConfigJson, err := json.Marshal(kysorConfig)
			if err != nil {
				return err
			}

			viper.SetConfigType("json")

			// Write the config to the config file
			err = viper.ReadConfig(bytes.NewBuffer(kysorConfigJson))
			if err != nil {
				return err
			}

			viper.SetConfigType("toml")
			viper.Set("ThisIsCamelCase", "TheValue")

			err = viper.SafeWriteConfig()
			return err
		},
	}
	utils.AddStringFlags(cmd, []types.StringFlag{flagChainID, flagRPC, flagREST})
	utils.AddBoolFlags(cmd, []types.BoolFlag{flagAutoDownload})
	return cmd
}

func init() {
	rootCmd.AddCommand(InitCmd())
}
