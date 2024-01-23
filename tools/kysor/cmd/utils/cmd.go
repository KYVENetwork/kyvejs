package utils

import (
	"fmt"
	"github.com/KYVENetwork/kyvejs/tools/kysor/cmd/types"
	"github.com/manifoldco/promptui"
	"github.com/spf13/cobra"
	"github.com/spf13/pflag"
	"strconv"
)

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
		var options []string
		for _, option := range f.Options {
			options = append(options, option.Name())
		}
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
func SetupInteractiveMode(cmd *cobra.Command, _ []string) {
	if IsInteractive(cmd) {
		cmd.Flags().VisitAll(func(f *pflag.Flag) {
			for val, annotation := range f.Annotations {
				if val == cobra.BashCompOneRequiredFlag {
					annotation[0] = "false"
				}
			}
		})
	}
}

// PromptCmd prompts the user to select one of the given options.
func PromptCmd(options []types.CmdConfig) (*types.CmdConfig, error) {
	var items []string
	for _, option := range options {
		items = append(items, option.ActionString())
	}

	prompt := promptui.Select{
		Label: "What do you want to do?",
		Items: items,
	}

	_, result, err := prompt.Run()
	if err != nil {
		return nil, err
	}
	for _, option := range options {
		if option.ActionString() == result {
			return &option, nil
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

// GetOptionFromPromptOrFlag returns the option value from
// 1. the given flag
// 2. prompts the user for the value if the flag was not set
func GetOptionFromPromptOrFlag[T any](cmd *cobra.Command, flag types.OptionFlag[T]) (types.Option[T], error) {
	value, err := cmd.Flags().GetString(flag.Name)
	if err != nil {
		return nil, err
	}

	if IsInteractive(cmd) && !cmd.Flags().Changed(flag.Name) {
		// Only prompt if we are in interactive mode and the flag was not set
		label := flag.Prompt
		if label == "" {
			label = flag.Usage
		}

		var items []string
		for _, option := range flag.Options {
			items = append(items, option.Name())
		}

		prompt := promptui.Select{
			Label: label,
			Items: items,
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
