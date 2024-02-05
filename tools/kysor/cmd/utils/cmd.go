package utils

import (
	"fmt"
	"slices"
	"strconv"

	"github.com/KYVENetwork/kyvejs/tools/kysor/cmd/types"
	"github.com/chzyer/readline"
	"github.com/manifoldco/promptui"
	"github.com/spf13/cobra"
	"github.com/spf13/pflag"
)

type noBellStdout struct{}

func (n *noBellStdout) Write(p []byte) (int, error) {
	if len(p) == 1 && p[0] == readline.CharBell {
		return 0, nil
	}
	return readline.Stdout.Write(p)
}

func (n *noBellStdout) Close() error {
	return readline.Stdout.Close()
}

var NoBellStdout = &noBellStdout{}

// AddStringFlags adds the given string flags to the given command.
// If a flag is required it will be marked as required.
func AddStringFlags(cmd *cobra.Command, flags []types.StringFlag) {
	for _, f := range flags {
		cmd.Flags().StringP(f.Name, f.Short, f.DefaultValue, f.Usage)
		if f.Required {
			err := cmd.MarkFlagRequired(f.Name)
			if err != nil {
				panic(err)
			}
		}
	}
}

// AddBoolFlags adds the given bool flags to the given command.
// If a flag is required it will be marked as required.
func AddBoolFlags(cmd *cobra.Command, flags []types.BoolFlag) {
	for _, f := range flags {
		cmd.Flags().BoolP(f.Name, f.Short, f.DefaultValue, f.Usage)
		if f.Required {
			err := cmd.MarkFlagRequired(f.Name)
			if err != nil {
				panic(err)
			}
		}
	}
}

// AddIntFlags adds the given int flags to the given command.
// If a flag is required it will be marked as required.
func AddIntFlags(cmd *cobra.Command, flags []types.IntFlag) {
	for _, f := range flags {
		cmd.Flags().Int64P(f.Name, f.Short, f.DefaultValue, f.Usage)
		if f.Required {
			err := cmd.MarkFlagRequired(f.Name)
			if err != nil {
				panic(err)
			}
		}
	}
}

// AddOptionFlags adds the given option flags to the given command.
// If a flag is required it will be marked as required.
func AddOptionFlags[T any](cmd *cobra.Command, flags []types.OptionFlag[T]) {
	for _, f := range flags {
		var defaultValue string
		if f.DefaultValue != nil {
			defaultValue = f.DefaultValue.Name()
		}
		cmd.Flags().StringP(f.Name, f.Short, defaultValue, f.Usage)
		if f.Required {
			err := cmd.MarkFlagRequired(f.Name)
			if err != nil {
				panic(err)
			}
		}
	}
}

// IsInteractive returns true if the non-interactive flag was not set.
func IsInteractive(cmd *cobra.Command) bool {
	return !cmd.Flags().Changed(types.FlagNonInteractive.Name)
}

// SetupInteractiveMode sets up the interactive mode for the given command.
// This means that all flags are not required anymore.
// Load the config file before running this function.
func SetupInteractiveMode(cmd *cobra.Command, _ []string) error {
	if IsInteractive(cmd) {
		cmd.Flags().VisitAll(func(f *pflag.Flag) {
			for val, annotation := range f.Annotations {
				if val == cobra.BashCompOneRequiredFlag {
					annotation[0] = "false"
				}
			}
		})
	}
	return nil
}

func AddPersistentStringFlags(cmd *cobra.Command, flags []types.StringFlag) {
	for _, f := range flags {
		cmd.PersistentFlags().StringP(f.Name, f.Short, f.DefaultValue, f.Usage)
	}
}

func AddPersistentBoolFlags(cmd *cobra.Command, flags []types.BoolFlag) {
	for _, f := range flags {
		cmd.PersistentFlags().BoolP(f.Name, f.Short, f.DefaultValue, f.Usage)
	}
}

func CombineFuncs(funcs ...cobra.PositionalArgs) cobra.PositionalArgs {
	return func(cmd *cobra.Command, args []string) error {
		for _, f := range funcs {
			err := f(cmd, args)
			if err != nil {
				return err
			}
		}
		return nil
	}
}

func getPromptString(cmd *cobra.Command) string {
	return fmt.Sprintf("%s - %s", cmd.Name(), cmd.Short)
}

// PromptCmd prompts the user to select one of the given options.
func PromptCmd(options []*cobra.Command) (*cobra.Command, error) {
	var items []string

	// Commands that will not be shown in the list
	blacklist := []string{"completion", "help"}
	for _, option := range options {
		if !slices.Contains(blacklist, option.Name()) {
			items = append(items, getPromptString(option))
		}
	}

	prompt := promptui.Select{
		Label:  "What do you want to do?",
		Items:  items,
		Stdout: NoBellStdout,
		Size:   len(options),
	}

	_, result, err := prompt.Run()
	if err != nil {
		return nil, err
	}
	for _, option := range options {
		if getPromptString(option) == result {
			return option, nil
		}
	}
	return nil, fmt.Errorf("invalid option: %s", result)
}

// GetStringFromPromptOrFlag returns the string value from
// 1. the given flag
// 2. prompts the user for the value if the flag was not set
func GetStringFromPromptOrFlag(cmd *cobra.Command, flag types.StringFlag) (string, error) {
	value, err := cmd.Flags().GetString(flag.Name)
	if err != nil {
		return "", err
	}

	if IsInteractive(cmd) && !cmd.Flags().Changed(flag.Name) {
		// Only prompt if we are in interactive mode and the flag was not set
		label := flag.Prompt
		if label == "" {
			label = flag.Usage
		}

		prompt := promptui.Prompt{
			Label:    label,
			Validate: flag.ValidateFn,
			Default:  flag.DefaultValue,
			Stdout:   NoBellStdout,
		}
		return prompt.Run()
	} else if cmd.Flags().Changed(flag.Name) {
		// If the flag was set we need to validate it (if a validation function is set)
		if flag.ValidateFn != nil {
			err = flag.ValidateFn(value)
			if err != nil {
				return "", err
			}
		}
	}
	return value, nil
}

// GetBoolFromPromptOrFlag returns the bool value from
// 1. the given flag
// 2. prompts the user for the value if the flag was not set
func GetBoolFromPromptOrFlag(cmd *cobra.Command, flag types.BoolFlag) (bool, error) {
	value, err := cmd.Flags().GetBool(flag.Name)
	if err != nil {
		return false, err
	}

	if IsInteractive(cmd) && !cmd.Flags().Changed(flag.Name) {
		// Only prompt if we are in interactive mode and the flag was not set
		cursorPos := 0
		if !value {
			cursorPos = 1
		}

		label := flag.Prompt
		if label == "" {
			label = flag.Usage
		}

		prompt := promptui.Select{
			Label:     label,
			Items:     []string{"Yes", "No"},
			CursorPos: cursorPos,
			Stdout:    NoBellStdout,
		}
		_, result, err := prompt.Run()
		if err != nil {
			return false, err
		}
		return result == "Yes", nil
	}
	return value, nil
}

// GetIntFromPromptOrFlag returns the int value from
// 1. the given flag
// 2. prompts the user for the value if the flag was not set
func GetIntFromPromptOrFlag(cmd *cobra.Command, flag types.IntFlag) (int64, error) {
	value, err := cmd.Flags().GetInt64(flag.Name)
	if err != nil {
		return 0, err
	}

	if IsInteractive(cmd) && !cmd.Flags().Changed(flag.Name) {
		// Only prompt if we are in interactive mode and the flag was not set
		label := flag.Prompt
		if label == "" {
			label = flag.Usage
		}

		prompt := promptui.Prompt{
			Label:    label,
			Validate: flag.ValidateFn,
			Default:  strconv.FormatInt(flag.DefaultValue, 10),
			Stdout:   NoBellStdout,
		}
		result, err := prompt.Run()
		if err != nil {
			return 0, err
		}

		parsed, err := strconv.ParseInt(result, 10, 64)
		if err != nil {
			return 0, err
		}
		return parsed, nil
	} else if cmd.Flags().Changed(flag.Name) {
		// If the flag was set we need to validate it (if a validation function is set)
		if flag.ValidateFn != nil {
			err = flag.ValidateFn(strconv.FormatInt(value, 10))
			if err != nil {
				return 0, err
			}
		}
	}
	return value, nil
}

// GetOptionFromPrompt returns the option value from a select prompt
func GetOptionFromPrompt[T any](flag types.OptionFlag[T]) (types.Option[T], error) {
	label := flag.Prompt
	if label == "" {
		label = flag.Usage
	}

	cursorPos := 0
	var items []string
	for i, option := range flag.Options {
		items = append(items, option.Name())
		if option == flag.DefaultValue {
			cursorPos = i
		}
	}

	prompt := promptui.Select{
		Label:     label,
		Items:     items,
		Stdout:    NoBellStdout,
		Size:      len(flag.Options),
		CursorPos: cursorPos,
	}
	_, result, err := prompt.Run()
	if err != nil {
		return nil, err
	}
	for _, option := range flag.Options {
		if option.Name() == result {
			return option, nil
		}
	}
	return nil, fmt.Errorf("invalid option: %s", result)
}

// GetOptionFromPromptOrFlag returns the option value from
// 1. the given flag
// 2. prompts the user for the value if the flag was not set
func GetOptionFromPromptOrFlag[T any](cmd *cobra.Command, flag types.OptionFlag[T]) (types.Option[T], error) {
	value, err := cmd.Flags().GetString(flag.Name)
	if err != nil {
		return nil, err
	}

	if len(flag.Options) == 0 {
		return nil, fmt.Errorf("no options available")
	}

	if IsInteractive(cmd) && !cmd.Flags().Changed(flag.Name) {
		// Only prompt if we are in interactive mode and the flag was not set
		return GetOptionFromPrompt(flag)
	} else if cmd.Flags().Changed(flag.Name) {
		// If the flag was set we need to validate it (if a validation function is set)
		if flag.ValidateFn != nil {
			err = flag.ValidateFn(value)
			if err != nil {
				return nil, err
			}
		}
	}
	for _, option := range flag.Options {
		if option.StringValue() == value || option.Name() == value {
			return option, nil
		}
	}
	return nil, fmt.Errorf("invalid option: %s", value)
}

var hasInteractiveInfoBeenShown = false

// ShowInteractiveInfo prints a message to the user that the command is running in interactive mode.
func ShowInteractiveInfo() {
	if !hasInteractiveInfoBeenShown {
		fmt.Println("KYSOR is running in interactive mode.")
		fmt.Println("Add '-y' to your command to disable interactive mode.")
		fmt.Println()
		hasInteractiveInfoBeenShown = true
	}
}

func RunPromptCommandE(cmd *cobra.Command, args []string) error {
	// Check if the interactive flag is set
	// -> if so ask the user what to do
	if IsInteractive(cmd) {
		ShowInteractiveInfo()

		// Prompt for the next command
		nextCmd, err := PromptCmd(cmd.Commands())
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
