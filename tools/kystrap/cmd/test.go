package cmd

import (
	"errors"
	"fmt"
	"os"
	"regexp"

	commoncmd "github.com/KYVENetwork/kyvejs/common/goutils/cmd"
	"github.com/KYVENetwork/kyvejs/tools/kystrap/grpcall"
	"github.com/KYVENetwork/kyvejs/tools/kystrap/types"
	"github.com/manifoldco/promptui"
	"github.com/spf13/cobra"
	"google.golang.org/protobuf/reflect/protoreflect"
)

var addressRegex = regexp.MustCompile(`^([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+:([0-9]+)+$`)

var (
	flagAddress = commoncmd.StringFlag{
		Name:         "address",
		Short:        "a",
		Usage:        "address and port of the runtime server (ex: localhost:50051)",
		Prompt:       "Enter address and port of the runtime server",
		DefaultValue: "host.docker.internal:50051",
		ValidateFn: func(input string) error {
			if !addressRegex.MatchString(input) {
				return errors.New("invalid address... must be in the format address:port")
			}
			return nil
		},
	}
	flagMethod = commoncmd.OptionFlag[protoreflect.MethodDescriptor]{
		Name:   "method",
		Short:  "m",
		Usage:  "gRPC method that you want to test",
		Prompt: "Which method do you want to test?",
	}
	flagData = commoncmd.StringFlag{
		Name:  "data",
		Short: "d",
		Usage: "data that you want to send with the gRPC method call",
	}
	flagDataFile = commoncmd.StringFlag{
		Name:  "data-file",
		Short: "f",
		Usage: "file containing the data that you want to send with the gRPC method call",
	}
	flagSimple = commoncmd.BoolFlag{
		Name:         "simple",
		Short:        "s",
		Usage:        "simple output (only prints the response)",
		DefaultValue: false,
	}
)

func promptInput(cmd *cobra.Command, field protoreflect.FieldDescriptor, fieldLabel string, history *map[string]string) (string, error) {
	if !commoncmd.IsInteractive(cmd) {
		return "", nil
	}

	if field.Message() != nil {
		var data string
		for i := 0; i < field.Message().Fields().Len(); i++ {
			subField := field.Message().Fields().Get(i)
			input, err := promptInput(cmd, subField, fmt.Sprintf("%s -> %s", fieldLabel, subField.Name()), history)
			if err != nil {
				return "", err
			}

			// add comma between fields
			if data != "" {
				data += ", "
			}
			data += input
		}
		if field.IsList() || field.IsMap() || field.Message() != nil {
			return fmt.Sprintf(`"%s": {%s}`, field.Name(), data), nil
		}
		return fmt.Sprintf(`"%s": "%s"`, field.Name(), data), nil
	}
	historyValue := ""
	if history != nil {
		historyValue = (*history)[fieldLabel]
	}
	prompt := promptui.Prompt{
		Label:   fieldLabel,
		Default: historyValue,
	}
	result, err := prompt.Run()
	if err != nil {
		return "", err
	}
	(*history)[fieldLabel] = result
	return fmt.Sprintf(`"%s": "%s"`, field.Name(), result), err
}

func runMethodPrompts(cmd *cobra.Command, method protoreflect.MethodDescriptor, address string, data string, history *map[string]string) (protoreflect.MethodDescriptor, bool, error) {
	if method == nil {
		methodOption, err := commoncmd.GetOptionFromPrompt(flagMethod)
		if err != nil {
			return method, false, err
		}
		method = methodOption.Value()
		flagMethod.DefaultValue = types.NewMethodOption(method)
	}

	if data == "" {
		fields := method.Input().Fields()
		for i := 0; i < fields.Len(); i++ {
			field := fields.Get(i)
			input, err := promptInput(cmd, field, string(field.Name()), history)
			if err != nil {
				return method, false, err
			}

			// separate fields with comma
			if data != "" {
				data += ", "
			}
			data += input
		}
		data = fmt.Sprintf(`{%s}`, data)
	}

	cmd.SetOut(os.Stdout)
	caller := grpcall.NewGrpcCaller(address, isSimpleOutput(cmd), cmd)
	success, err := caller.PerformMethodCall(method, data)
	return method, success, err
}

func isSimpleOutput(cmd *cobra.Command) bool {
	return cmd.Flags().Changed(flagSimple.Name)
}

type action string

const (
	actionRetry       action = "Retry"
	actionTestAnother action = "Test another method"
	actionExit        action = "Exit"
)

func promptAction(wasSuccess bool) (action, error) {
	position := 0
	if wasSuccess {
		position = 1
	}
	prompt := promptui.Select{
		Label:     "What now?",
		Items:     []action{actionRetry, actionTestAnother, actionExit},
		CursorPos: position,
	}
	_, result, err := prompt.Run()
	if err != nil {
		return actionExit, err
	}
	return action(result), nil
}

func CmdTestIntegration() *cobra.Command {
	cmd := &cobra.Command{
		Use:     "test",
		Short:   "Test integration",
		PreRunE: commoncmd.SetupInteractiveMode,
		RunE: func(cmd *cobra.Command, args []string) error {
			// Data (don't prompt if the flag was not set)
			data, err := cmd.Flags().GetString(flagData.Name)
			if err != nil {
				return err
			}

			// If data is not set, check if the data-file flag is set
			if data == "" {
				dataFile, err := cmd.Flags().GetString(flagDataFile.Name)
				if err != nil {
					return err
				}
				if dataFile != "" {
					// read data from file
					var dataBytes []byte
					dataBytes, err = os.ReadFile(dataFile)
					if err != nil {
						return err
					}
					data = string(dataBytes)
				}
			}

			// Address
			address, err := commoncmd.GetStringFromPromptOrFlag(cmd, flagAddress)
			if err != nil {
				return err
			}

			// Method
			methodOption, err := commoncmd.GetOptionFromPromptOrFlag(cmd, flagMethod)
			if err != nil {
				return err
			}
			method := methodOption.Value()

			// Set as new default value to remember the cursor position in further prompts
			flagMethod.DefaultValue = types.NewMethodOption(method)

			history := make(map[string]string)
			method, success, err := runMethodPrompts(cmd, method, address, data, &history)
			if err != nil {
				return err
			}

			// don't prompt for further actions if we are not in interactive mode
			if !commoncmd.IsInteractive(cmd) {
				return nil
			}

			// prompt for action until the user exits or an error occurs
			for {
				cmd.Println()
				actionResult, err := promptAction(success)
				if err != nil {
					return err
				}
				switch actionResult {
				case actionRetry:
					method, success, err = runMethodPrompts(cmd, method, address, "", &history)
					if err != nil {
						return err
					}
				case actionTestAnother:
					method = nil
					method, success, err = runMethodPrompts(cmd, method, address, "", &history)
					if err != nil {
						return err
					}
				case actionExit:
					return nil
				}
			}
		},
	}
	flagMethod.Options = types.Rdk.MethodOptions()
	commoncmd.AddOptionFlags(cmd, []commoncmd.OptionFlag[protoreflect.MethodDescriptor]{flagMethod})
	commoncmd.AddStringFlags(cmd, []commoncmd.StringFlag{flagData, flagDataFile, flagAddress})
	commoncmd.AddBoolFlags(cmd, []commoncmd.BoolFlag{flagSimple})
	cmd.MarkFlagsMutuallyExclusive(flagData.Name, flagDataFile.Name)
	return cmd
}

func init() {
	rootCmd.AddCommand(CmdTestIntegration())
}
