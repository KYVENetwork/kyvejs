package cmd

import (
	"errors"
	"fmt"
	"github.com/KYVENetwork/kyvejs/tools/kystrap/bootstrap"
	"github.com/KYVENetwork/kyvejs/tools/kystrap/types"
	"github.com/manifoldco/promptui"
	"github.com/spf13/cobra"
	"regexp"
	"strings"
)

var regexpAlphaNumericAndDash = regexp.MustCompile(`^[a-zA-Z0-9-]+$`)

func promptLanguage(defaultVal types.Language, skipPrompt bool) (types.Language, error) {
	var items = types.Languages
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
	return types.NewLanguage(result), err
}

func promptName(defaultVal string, skipPrompt bool) (string, error) {
	validate := func(input string) error {
		if len(input) < 3 {
			return errors.New("name must be at least 3 characters long")
		}
		if !regexpAlphaNumericAndDash.MatchString(input) {
			return errors.New("name must only contain alphanumeric characters and dashes")
		}
		return nil
	}
	prompt := promptui.Prompt{
		Label:    "Set a name for your integration",
		Validate: validate,
		Default:  defaultVal,
	}

	if skipPrompt {
		return strings.ToLower(defaultVal), validate(defaultVal)
	}

	result, err := prompt.Run()
	return strings.ToLower(result), err
}

func promptLinkToGithub() error {
	const githubUrl = "https://github.com/KYVENetwork/kyvejs/issues/new"
	prompt := promptui.Prompt{
		Label:     fmt.Sprintf("Please create an issue on %s", githubUrl),
		IsConfirm: true,
		Default:   "y",
	}
	_, err := prompt.Run()
	return err
}

func CmdCreateIntegration() *cobra.Command {
	const flagLanguage = "language"
	const flagName = "name"
	const flagOutputDir = "output"

	cmd := &cobra.Command{
		Use:   "create",
		Short: "Create a new runtime integration",
		RunE: func(cmd *cobra.Command, args []string) error {
			outputDir, err := cmd.Flags().GetString(flagOutputDir)
			if err != nil {
				return err
			}

			var defaultLanguage types.Language
			defaultLanguageStr, _ := cmd.Flags().GetString(flagLanguage)
			if defaultLanguageStr != "" {
				defaultLanguage = types.NewLanguage(defaultLanguageStr)
			}
			language, err := promptLanguage(defaultLanguage, cmd.Flags().Changed(flagYes))
			if err != nil {
				return err
			}
			if language.IsRequestOtherLanguage() {
				return promptLinkToGithub()
			}

			defaultName, _ := cmd.Flags().GetString(flagName)
			name, err := promptName(defaultName, cmd.Flags().Changed(flagYes))
			if err != nil {
				return err
			}
			err = bootstrap.CreateIntegration(outputDir, language, name)
			if err != nil {
				return err
			}
			fmt.Printf("✅ Successfully created integration in `%s`\n", name)
			return nil
		},
	}
	cmd.Flags().StringP(flagLanguage, "l", "",
		fmt.Sprintf("language for your integration (%s)", strings.Join(types.LanguagesStringSlice(), ", ")))
	cmd.Flags().StringP(flagName, "n", "", "name for your integration")
	cmd.Flags().StringP(flagOutputDir, "o", "out", "output directory for your integration")
	return cmd
}

func init() {
	rootCmd.AddCommand(CmdCreateIntegration())
}
