package cmd

import (
	"fmt"
	"github.com/KYVENetwork/kyvejs/tools/kysor/cmd/config"
	"github.com/KYVENetwork/kyvejs/tools/kysor/cmd/types"
	"github.com/KYVENetwork/kyvejs/tools/kysor/cmd/utils"
	"github.com/spf13/cobra"
	"runtime"
)

var StartCmdConfig = types.CmdConfig{Name: "start", Short: "Start KYSOR"}

var (
	flagStartValaccount = types.OptionFlag[config.ValaccountConfig]{
		Name:     "valaccount",
		Short:    "v",
		Usage:    "Name of the valaccount to run",
		Required: true,
	}
	flagStartEnvFile = types.StringFlag{
		Name:       "env-file",
		Short:      "e",
		Usage:      "Specify the path to an .env file which should be used when starting a binary",
		Required:   false,
		ValidateFn: utils.ValidatePathExistsOrEmpty,
	}
	flagStartDebug = types.BoolFlag{
		Name:         "debug",
		Short:        "",
		Usage:        "Run the validator node in debug mode",
		DefaultValue: false,
	}
)

func startCmd() *cobra.Command {
	cmd := &cobra.Command{
		Use:    StartCmdConfig.Name,
		Short:  StartCmdConfig.Short,
		PreRun: utils.SetupInteractiveMode,
		RunE: func(cmd *cobra.Command, args []string) error {
			// Return if no valaccount exists
			flagStartValaccount.Options = config.ValaccountConfigOptions
			if len(flagStartValaccount.Options) == 0 {
				fmt.Println("No valaccount found. Create one with 'kysor valaccounts create'")
				return nil
			}

			// Valaccount config
			valConfig, err := utils.GetOptionFromPromptOrFlag(cmd, flagStartValaccount)
			if err != nil {
				return err
			}

			// Env file
			envFile, err := utils.GetStringFromPromptOrFlag(cmd, flagStartEnvFile)
			if err != nil {
				return err
			}

			// Debug
			debug, err := utils.GetBoolFromPromptOrFlag(cmd, flagStartDebug)
			if err != nil {
				return err
			}

			fmt.Println("Starting KYSOR...")
			fmt.Printf("Running on platform and architecture: %s - %s\n", runtime.GOOS, runtime.GOARCH)

			fmt.Println("Valaccount:", valConfig.Name())
			fmt.Println("Env file:", envFile)
			fmt.Println("Debug:", debug)

			return nil
		},
	}
	utils.AddOptionFlags(cmd, []types.OptionFlag[config.ValaccountConfig]{flagStartValaccount})
	utils.AddStringFlags(cmd, []types.StringFlag{flagStartEnvFile})
	utils.AddBoolFlags(cmd, []types.BoolFlag{flagStartDebug})
	return cmd
}

func init() {
	rootCmd.AddCommand(startCmd())
}
