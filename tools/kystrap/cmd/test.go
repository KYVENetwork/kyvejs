package cmd

import (
	"errors"
	"fmt"
	"github.com/KYVENetwork/kyvejs/tools/kystrap/grpcall"
	"github.com/KYVENetwork/kyvejs/tools/kystrap/types"
	"github.com/manifoldco/promptui"
	"github.com/spf13/cobra"
	"google.golang.org/protobuf/reflect/protoreflect"
	"regexp"
	"strings"
)

type executionInfo struct {
	method   protoreflect.MethodDescriptor
	position int
	success  bool
	address  string
}

func newExecutionInfo() executionInfo {
	return executionInfo{
		method:   nil,
		position: 0,
		success:  false,
		address:  "localhost:50051",
	}
}

func findDescriptorMethod(name string) protoreflect.MethodDescriptor {
	if name == "" {
		return nil
	}
	lower := strings.ToLower(name)
	for _, method := range types.Rdk.MethodList() {
		if strings.ToLower(string(method.Name())) == lower || strings.ToLower(string(method.FullName())) == lower {
			return method
		}
	}
	return nil
}

// setMethodPosition sets the position of the method in the list of methods
func setMethodPosition(execution *executionInfo) {
	if execution.method != nil {
		for i := 0; i < types.Rdk.Methods.Len(); i++ {
			if types.Rdk.Methods.Get(i).FullName() == execution.method.FullName() {
				execution.position = i
			}
		}
	}
}

var addressRegex = regexp.MustCompile(`^([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+:([0-9]+)+$`)

func promptAddress(execution *executionInfo) error {
	validate := func(input string) error {
		if !addressRegex.MatchString(input) {
			return errors.New("invalid address... must be in the format address:port")
		}
		return nil
	}
	prompt := promptui.Prompt{
		Label:    "Enter the address and port of the runtime server",
		Default:  execution.address,
		Validate: validate,
	}
	result, err := prompt.Run()
	if err != nil {
		return err
	}
	execution.address = result
	return nil
}

func promptMethod(execution *executionInfo) error {
	prompt := promptui.Select{
		Label:     "Which method do you want to test?",
		Items:     types.Rdk.MethodNames(),
		CursorPos: execution.position,
		Size:      types.Rdk.Methods.Len(),
	}
	position, result, err := prompt.Run()
	if err != nil {
		return err
	}
	execution.method = findDescriptorMethod(result)
	execution.position = position
	return nil
}

func promptInput(field protoreflect.FieldDescriptor, fieldLabel string) (string, error) {
	if field.Message() != nil {
		var data string
		for i := 0; i < field.Message().Fields().Len(); i++ {
			subField := field.Message().Fields().Get(i)
			input, err := promptInput(subField, fmt.Sprintf("%s -> %s", fieldLabel, subField.Name()))
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
	prompt := promptui.Prompt{
		Label: fieldLabel,
	}
	result, err := prompt.Run()
	if err != nil {
		return "", err
	}
	return fmt.Sprintf(`"%s": "%s"`, field.Name(), result), err
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

func runMethodPrompts(
	cmd *cobra.Command,
	execution *executionInfo,
	data string,
) error {
	if execution.method == nil {
		if skipPrompts(cmd) {
			return errors.New("no gRPC method specified")
		}

		err := promptMethod(execution)
		if err != nil {
			return err
		}
	}

	if data == "" {
		if skipPrompts(cmd) {
			return errors.New("no data specified")
		}

		fields := execution.method.Input().Fields()
		for i := 0; i < fields.Len(); i++ {
			field := fields.Get(i)
			input, err := promptInput(field, string(field.Name()))
			if err != nil {
				return err
			}

			// separate fields with comma
			if data != "" {
				data += ", "
			}
			data += input
		}
		data = fmt.Sprintf(`{%s}`, data)
	}

	caller := grpcall.NewGrpcCaller(execution.address, isSimpleOutput(cmd), cmd)
	success, err := caller.PerformMethodCall(execution.method, data)
	execution.success = success
	return err
}

const flagSimple = "simple"

func isSimpleOutput(cmd *cobra.Command) bool {
	return cmd.Flags().Changed(flagSimple)
}

func CmdTestIntegration() *cobra.Command {
	const flagMethod = "method"
	const flagData = "data"
	const flagAddress = "address"

	cmd := &cobra.Command{
		Use:   "test",
		Short: "Test a runtime integration",
		RunE: func(cmd *cobra.Command, args []string) error {
			execution := newExecutionInfo()
			method, _ := cmd.Flags().GetString(flagMethod)
			data, _ := cmd.Flags().GetString(flagData)
			address, _ := cmd.Flags().GetString(flagAddress)

			if method != "" {
				execution.method = findDescriptorMethod(method)
				if execution.method == nil {
					return errors.New(fmt.Sprintf("invalid gRPC method %s", method))
				}
				setMethodPosition(&execution)
			}

			if address != "" {
				execution.address = address
			} else if !skipPrompts(cmd) {
				err := promptAddress(&execution)
				if err != nil {
					return err
				}
			}

			err := runMethodPrompts(cmd, &execution, data)
			if err != nil {
				return err
			}

			// if yes flag is set, don't prompt for further actions
			if skipPrompts(cmd) {
				return nil
			}

			// prompt for action until the user exits or an error occurs
			for {
				cmd.Println()
				actionResult, err := promptAction(execution.success)
				if err != nil {
					return err
				}
				switch actionResult {
				case actionRetry:
					err = runMethodPrompts(cmd, &execution, "")
					if err != nil {
						return err
					}
				case actionTestAnother:
					execution.method = nil
					err = runMethodPrompts(cmd, &execution, "")
					if err != nil {
						return err
					}
				case actionExit:
					return nil
				}
			}
		},
	}
	cmd.Flags().StringP(flagMethod, "m", "", "gRPC method that you want to test")
	cmd.Flags().StringP(flagData, "d", "", "data that you want to send with the gRPC method call")
	cmd.Flags().StringP(flagAddress, "a", "", "address and port of the runtime server (ex: localhost:50051)")
	cmd.Flags().BoolP(flagSimple, "s", false, "simple output (only prints the response)")
	return cmd
}

func init() {
	rootCmd.AddCommand(CmdTestIntegration())
}
