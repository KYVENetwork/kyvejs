package utils

import (
	"fmt"
	"github.com/KYVENetwork/kyvejs/tools/kysor/cmd/types"
	"github.com/manifoldco/promptui"
	"github.com/spf13/cobra"
	"github.com/spf13/pflag"
)

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

	if value != "" {
		return value, nil
	}

	prompt := promptui.Prompt{
		Label:    flag.Prompt,
		Validate: flag.ValidateFn,
	}
	return prompt.Run()
}

// GetBoolFromPromptOrFlag returns the bool value from
// 1. the given flag
// 2. prompts the user for the value if the flag was not set
func GetBoolFromPromptOrFlag(cmd *cobra.Command, flag types.BoolFlag) (bool, error) {
	value, err := cmd.Flags().GetBool(flag.Name)
	if err != nil {
		return false, err
	}

	// Only ask if we are in interactive mode and the flag was not set
	if IsInteractive(cmd) && !cmd.Flags().Changed(flag.Name) {
		cursorPos := 0
		if !value {
			cursorPos = 1
		}
		prompt := promptui.Select{
			Label:     flag.Question,
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
