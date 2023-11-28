package cmd

import (
	"github.com/manifoldco/promptui"
	"os"

	"github.com/spf13/cobra"
)

type option string

const (
	help   option = "show help"
	create option = "bootstrap integration"
)

const yesFlag = "yes"

func promptOption() (option, error) {
	var items = []option{create, help}

	prompt := promptui.Select{
		Label: "What do you want to do?",
		Items: items,
	}

	_, result, err := prompt.Run()
	return option(result), err
}

// rootCmd represents the base command when called without any subcommands
var rootCmd = &cobra.Command{
	Use:   "kystrap",
	Short: "kystrap is a CLI tool to bootstrap KYVE integrations",
	// Uncomment the following line if your bare application
	// has an action associated with it:
	RunE: func(cmd *cobra.Command, args []string) error {
		option := help

		// Check if the yes flag is set
		// -> if not ask the user what to do
		if !cmd.Flags().Changed(yesFlag) {
			var err error
			option, err = promptOption()
			if err != nil {
				return err
			}
		}

		switch option {
		case help:
			return cmd.Help()
		case create:
			return CmdCreateIntegration().Execute()
		default:
			return nil
		}
	},
}

// Execute adds all child commands to the root command and sets flags appropriately.
// This is called by main.main(). It only needs to happen once to the rootCmd.
func Execute() {
	rootCmd.CompletionOptions.DisableDefaultCmd = true
	err := rootCmd.Execute()
	if err != nil {
		os.Exit(1)
	}
}

func init() {
	// Here you will define your flags and configuration settings.
	// Cobra supports persistent flags, which, if defined here,
	// will be global for your application.

	// rootCmd.PersistentFlags().StringVar(&cfgFile, "config", "", "config file (default is $HOME/.kystrap.yaml)")

	// Cobra also supports local flags, which will only run
	// when this action is called directly.
	rootCmd.PersistentFlags().BoolP(yesFlag, "y", false, "Skip all prompts and use default values")
}
