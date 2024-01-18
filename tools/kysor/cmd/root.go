package cmd

import (
	"fmt"
	"github.com/KYVENetwork/kyvejs/tools/kysor/cmd/config"
	"github.com/KYVENetwork/kyvejs/tools/kysor/cmd/types"
	"github.com/KYVENetwork/kyvejs/tools/kysor/cmd/utils"
	"github.com/manifoldco/promptui"
	"os"
	"path/filepath"

	"github.com/spf13/cobra"
	"github.com/spf13/viper"
)

var cfgFile string

func promptCmd() (string, error) {
	items := []string{
		config.InitCmdConfig.ActionString(),
		config.StartCmdConfig.ActionString(),
		config.ValaccountsCmdConfig.ActionString(),
		config.VersionCmdConfig.ActionString(),
	}

	prompt := promptui.Select{
		Label: "What do you want to do?",
		Items: items,
	}

	_, result, err := prompt.Run()
	return result, err
}

// rootCmd represents the base command when called without any subcommands
var rootCmd = &cobra.Command{
	Use:   config.RootCmdConfig.Name,
	Short: config.RootCmdConfig.Short,
	RunE: func(cmd *cobra.Command, args []string) error {
		option := ""

		// Check if the interactive flag is set
		// -> if so ask the user what to do
		if utils.IsInteractive(cmd) {
			var err error
			option, err = promptCmd()
			if err != nil {
				return err
			}
		}

		switch option {
		case config.InitCmdConfig.Name:
			return InitCmd().Execute()
		case config.StartCmdConfig.Name:
			return startCmd.Execute()
		case config.ValaccountsCmdConfig.Name:
			return valaccountsCmd.Execute()
		case config.VersionCmdConfig.Name:
			return versionCmd.Execute()
		default:
			return nil
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
	cobra.OnInitialize(initConfig)

	rootCmd.PersistentFlags().StringVarP(&cfgFile, config.FlagConfig.Name, config.FlagConfig.Short, config.FlagConfig.DefaultValue, config.FlagConfig.Usage)

	rootCmd.PersistentFlags().BoolP(config.FlagNonInteractive.Name, config.FlagNonInteractive.Short, config.FlagNonInteractive.DefaultValue, config.FlagNonInteractive.Usage)
	rootCmd.SetErrPrefix(promptui.IconBad)
}

// initConfig reads in config file and ENV variables if set
func initConfig() {
	if cfgFile != "" {
		// Use config file from the flag
		viper.SetConfigFile(cfgFile)
	} else {
		// Find home directory
		home, err := os.UserHomeDir()
		cobra.CheckErr(err)

		path := filepath.Join(home, ".kysor")

		// Search config in home directory with name ".kysor"
		viper.AddConfigPath(path)
		viper.SetConfigType("toml")
		viper.SetConfigName("config")
	}

	viper.AutomaticEnv() // read in environment variables that match

	// If a config file is found, read it in
	if err := viper.ReadInConfig(); err == nil {
		fmt.Println("Using config file:", viper.ConfigFileUsed())

		// Unmarshal config
		kysorConfig := types.KysorConfig{}
		err = viper.Unmarshal(&kysorConfig)
		cobra.CheckErr(err)
	}
}
