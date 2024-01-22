package cmd

import (
	"fmt"
	"github.com/KYVENetwork/kyvejs/tools/kysor/cmd/types"
	"github.com/KYVENetwork/kyvejs/tools/kysor/cmd/utils"
	"github.com/spf13/cobra"
)

var (
	ValaccountsCmdConfig       = types.CmdConfig{Name: "valaccounts", Short: "Manage validator accounts"}
	ValaccountsCreateCmdConfig = types.CmdConfig{Name: "create", Short: "Create a new valaccount"}
)

func valaccountsCmd() *cobra.Command {
	return &cobra.Command{
		Use:   ValaccountsCmdConfig.Name,
		Short: ValaccountsCmdConfig.Short,
		RunE: func(cmd *cobra.Command, args []string) error {
			var nextCmd *types.CmdConfig

			// Check if the interactive flag is set
			// -> if so ask the user what to do
			if utils.IsInteractive(cmd) {
				// TODO: print a better help message (explain interactive mode)
				err := cmd.Help()
				if err != nil {
					return err
				}

				options := []types.CmdConfig{
					ValaccountsCreateCmdConfig,
				}
				nextCmd, err = utils.PromptCmd(options)
				if err != nil {
					return err
				}
			}

			switch nextCmd.Name {
			case ValaccountsCreateCmdConfig.Name:
				return valaccountsCreateCmd().Execute()
			default:
				return fmt.Errorf("invalid option: %s", nextCmd.Name)
			}
		},
	}
}

var (
	flagValaccCreateName = types.StringFlag{
		Name:     "name",
		Short:    "n",
		Usage:    "Name of the valaccount (name only used locally for KYSOR)",
		Required: true,
	}
	flagValaccCreatePool = types.IntFlag{
		Name:       "pool",
		Short:      "p",
		Usage:      "The ID of the pool this valaccount should participate as a validator",
		Required:   true,
		ValidateFn: utils.ValidateInt,
	}
	flagValaccCreateStorageProvKey = types.StringFlag{
		Name:  "storage-priv",
		Usage: "The private key of the storage provider",
	}
	flagValaccCreateRequestBackoff = types.IntFlag{
		Name:         "request-backoff",
		DefaultValue: 50,
		Usage:        "The time in milliseconds between each getDataItem request where the node sleeps",
		ValidateFn:   utils.ValidateIntOrEmpty,
	}
	flagValaccCreateCache = types.StringFlag{
		Name:         "cache",
		DefaultValue: "jsonfile",
		Usage:        "The cache this node should use",
	}
	flagValaccCreateMetrics = types.BoolFlag{
		Name:         "metrics",
		DefaultValue: false,
		Usage:        "Start a prometheus metrics server on http://localhost:8080/metrics",
	}
	flagValaccCreateMetricsPort = types.IntFlag{
		Name:         "metrics-port",
		DefaultValue: 8080,
		ValidateFn:   utils.ValidatePort,
		Usage:        "Specify the port of the metrics server. Only considered if '--metrics' is set",
	}
	flagValaccCreateRecover = types.BoolFlag{
		Name:         "recover",
		DefaultValue: false,
		Usage:        "Recover a valaccount from a mnemonic",
	}
)

func valaccountsCreateCmd() *cobra.Command {
	cmd := &cobra.Command{
		Use:    ValaccountsCreateCmdConfig.Name,
		Short:  ValaccountsCreateCmdConfig.Short,
		PreRun: utils.SetupInteractiveMode,
		RunE: func(cmd *cobra.Command, args []string) error {
			// Get the values from the flags or prompt the user for them
			name, err := utils.GetStringFromPromptOrFlag(cmd, flagValaccCreateName)
			if err != nil {
				return err
			}

			// TODO: Get pools from chain and make a selection
			pool, err := utils.GetIntFromPromptOrFlag(cmd, flagValaccCreatePool)
			if err != nil {
				return err
			}

			storageProvKey, err := utils.GetStringFromPromptOrFlag(cmd, flagValaccCreateStorageProvKey)
			if err != nil {
				return err
			}

			backoffTime, err := utils.GetIntFromPromptOrFlag(cmd, flagValaccCreateRequestBackoff)
			if err != nil {
				return err
			}

			cache, err := utils.GetStringFromPromptOrFlag(cmd, flagValaccCreateCache)
			if err != nil {
				return err
			}

			metrics, err := utils.GetBoolFromPromptOrFlag(cmd, flagValaccCreateMetrics)
			if err != nil {
				return err
			}

			metricsPort, err := utils.GetIntFromPromptOrFlag(cmd, flagValaccCreateMetricsPort)
			if err != nil {
				return err
			}

			isRecover, err := utils.GetBoolFromPromptOrFlag(cmd, flagValaccCreateRecover)
			if err != nil {
				return err
			}

			fmt.Println(name, pool, storageProvKey, backoffTime, cache, metrics, metricsPort, isRecover)

			return nil
		},
	}
	utils.AddStringFlags(cmd, []types.StringFlag{flagValaccCreateName, flagValaccCreateStorageProvKey, flagValaccCreateCache})
	utils.AddIntFlags(cmd, []types.IntFlag{flagValaccCreatePool, flagValaccCreateRequestBackoff, flagValaccCreateMetricsPort})
	utils.AddBoolFlags(cmd, []types.BoolFlag{flagValaccCreateMetrics, flagValaccCreateRecover})
	return cmd
}

func init() {
	cmd := valaccountsCmd()
	cmd.AddCommand(valaccountsCreateCmd())
	rootCmd.AddCommand(cmd)
}
