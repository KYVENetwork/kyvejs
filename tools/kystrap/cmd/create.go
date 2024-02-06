package cmd

import (
	"errors"
	"fmt"
	"regexp"
	"strings"

	commoncmd "github.com/KYVENetwork/kyvejs/common/goutils/cmd"

	"github.com/KYVENetwork/kyvejs/tools/kystrap/bootstrap"
	"github.com/KYVENetwork/kyvejs/tools/kystrap/types"
	"github.com/manifoldco/promptui"
	"github.com/spf13/cobra"
)

var regexpAlphaNumericAndDash = regexp.MustCompile(`^[a-zA-Z0-9-]+$`)

var (
	flagLanguage = commoncmd.OptionFlag[types.Language]{
		Name:     "language",
		Short:    "l",
		Usage:    fmt.Sprintf("Language for your integration (%s)", strings.Join(types.LanguagesStringSlice(), ", ")),
		Prompt:   "Select the Language for your integration",
		Required: true,
		ValidateFn: func(input string) error {
			if commoncmd.ValidateNotEmpty(input) != nil {
				return fmt.Errorf("language must not be empty")
			}
			for _, language := range types.Languages {
				if language.StringValue() == input {
					return nil
				}
			}
			return fmt.Errorf("invalid language. Please choose one from '%s'", strings.Join(types.LanguagesStringSlice(), ", "))
		},
	}
	flagName = commoncmd.StringFlag{
		Name:     "name",
		Short:    "n",
		Usage:    "Name for your integration",
		Prompt:   "Set a name for your integration",
		Required: true,
		ValidateFn: func(input string) error {
			if len(input) < 3 {
				return errors.New("name must be at least 3 characters long")
			}
			if !regexpAlphaNumericAndDash.MatchString(input) {
				return errors.New("name must only contain alphanumeric characters and dashes")
			}
			return nil
		},
	}
	flagOutput = commoncmd.StringFlag{
		Name:         "output",
		Short:        "o",
		Usage:        "Output directory for your integration",
		DefaultValue: "out",
	}
)

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
	cmd := &cobra.Command{
		Use:     "create",
		Short:   "Create integration",
		PreRunE: commoncmd.SetupInteractiveMode,
		RunE: func(cmd *cobra.Command, args []string) error {
			// Output directory
			outputDir, err := cmd.Flags().GetString(flagOutput.Name)
			if err != nil {
				return err
			}

			// Language
			languageOption, err := commoncmd.GetOptionFromPromptOrFlag(cmd, flagLanguage)
			if err != nil {
				return err
			}
			language := languageOption.Value()
			if language.IsRequestOtherLanguage() {
				return promptLinkToGithub()
			}

			// Name
			name, err := commoncmd.GetStringFromPromptOrFlag(cmd, flagName)
			if err != nil {
				return err
			}

			// Create integration
			err = bootstrap.CreateIntegration(outputDir, language, name)
			if err != nil {
				return err
			}
			fmt.Printf("✅ Successfully created integration in `%s`\n", name)
			return nil
		},
	}
	flagLanguage.Options = types.Languages
	commoncmd.AddOptionFlags(cmd, []commoncmd.OptionFlag[types.Language]{flagLanguage})
	commoncmd.AddStringFlags(cmd, []commoncmd.StringFlag{flagName, flagOutput})
	return cmd
}

func init() {
	rootCmd.AddCommand(CmdCreateIntegration())
}
