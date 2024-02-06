package cmd

import (
	"fmt"
	commoncmd "github.com/KYVENetwork/kyvejs/common/goutils/cmd"
	"os"

	"github.com/manifoldco/promptui"

	"github.com/spf13/cobra"
)

var hasInteractiveInfoBeenShown = false

// ShowInteractiveInfo prints a message to the user that the command is running in interactive mode.
func ShowInteractiveInfo() {
	if !hasInteractiveInfoBeenShown {
		fmt.Println("Kystrap is running in interactive mode.")
		fmt.Println("Add '-y' to your command to disable interactive mode.")
		fmt.Println()
		hasInteractiveInfoBeenShown = true
	}
}

func RunPromptCommandE(cmd *cobra.Command, args []string) error {
	// Check if the interactive flag is set
	// -> if so ask the user what to do
	if commoncmd.IsInteractive(cmd) {
		ShowInteractiveInfo()

		// Prompt for the next command
		nextCmd, err := commoncmd.PromptCmd(cmd.Commands())
		if err != nil {
			return err
		}

		// Run persistent pre run functions
		if nextCmd.PersistentPreRunE != nil {
			err = nextCmd.PersistentPreRunE(nextCmd, args)
			if err != nil {
				return err
			}
		} else if nextCmd.PersistentPreRun != nil {
			nextCmd.PersistentPreRun(nextCmd, args)
		}

		// Run pre run functions
		if nextCmd.PreRunE != nil {
			err = nextCmd.PreRunE(nextCmd, args)
			if err != nil {
				return err
			}
		} else if nextCmd.PreRun != nil {
			nextCmd.PreRun(nextCmd, args)
		}

		// Run the next command
		if nextCmd.RunE != nil {
			return nextCmd.RunE(nextCmd, args)
		} else if nextCmd.Run != nil {
			nextCmd.Run(nextCmd, args)
			return nil
		}
		return fmt.Errorf("no run function defined for command: %s", nextCmd.Name())
	}
	// Otherwise show the help
	return cmd.Help()
}

// rootCmd represents the base command when called without any subcommands
var rootCmd = &cobra.Command{
	Use:   "kystrap",
	Short: "kystrap is a CLI tool to bootstrap KYVE integrations",
	RunE:  RunPromptCommandE,
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
	commoncmd.AddPersistentBoolFlags(rootCmd, []commoncmd.BoolFlag{commoncmd.FlagNonInteractive})
	rootCmd.SetErrPrefix(promptui.IconBad)
}
