package cmd

import (
	"errors"
	"github.com/KYVENetwork/kyvejs/tools/kystrapper/bootstrap"
	"github.com/KYVENetwork/kyvejs/tools/kystrapper/types"
	"github.com/manifoldco/promptui"
	"github.com/spf13/cobra"
)

func promptLanguage(defaultVal types.Language, skipPrompt bool) (types.Language, error) {
	var items = []types.Language{types.Go, types.Python, types.Typescript}
	var position = 0
	if defaultVal != "" {
		for i, item := range items {
			if item == defaultVal {
				position = i
				break
			}
		}
	}
	prompt := promptui.Select{
		Label:     "Select the Language for your integration",
		Items:     items,
		CursorPos: position,
	}

	if skipPrompt {
		if defaultVal == "" {
			return "", errors.New("no language specified")
		}
		return defaultVal, nil
	}
	_, result, err := prompt.Run()
	return types.Language(result), err
}

func promptName(defaultVal string, skipPromp bool) (string, error) {
	validate := func(input string) error {
		if len(input) < 3 {
			return errors.New("name must be at least 3 characters long")
		}
		return nil
	}
	prompt := promptui.Prompt{
		Label:    "Set a name for your integration",
		Validate: validate,
		Default:  defaultVal,
	}

	if skipPromp {
		return defaultVal, validate(defaultVal)
	}

	result, err := prompt.Run()
	return result, err
}

func CmdCreateIntegration() *cobra.Command {
	var flagLanguage types.Language
	const flagName = "name"

	cmd := &cobra.Command{
		Use:   "create",
		Short: "Create a new runtime integration",
		RunE: func(cmd *cobra.Command, args []string) error {
			language, err := promptLanguage(flagLanguage, cmd.Flags().Changed(yesFlag))
			if err != nil {
				return err
			}

			defaultName, _ := cmd.Flags().GetString(flagName)
			name, err := promptName(defaultName, cmd.Flags().Changed(yesFlag))
			if err != nil {
				return err
			}

			return bootstrap.CreateIntegration("out", language, name)
		},
	}
	cmd.Flags().VarP(&flagLanguage, "language", "l", "language for your integration")
	cmd.Flags().StringP(flagName, "n", "", "name for your integration")
	return cmd
}

func init() {
	rootCmd.AddCommand(CmdCreateIntegration())
}
