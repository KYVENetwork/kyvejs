package cmd

import (
	"bytes"
	"context"
	"encoding/json"
	"errors"
	"fmt"
	"github.com/KYVENetwork/kyvejs/tools/kystrap/types"
	"github.com/fullstorydev/grpcurl"
	"github.com/manifoldco/promptui"
	"github.com/spf13/cobra"
	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials"
	"google.golang.org/grpc/status"
	"google.golang.org/protobuf/reflect/protoreflect"
	"strings"
	"time"
)

type executionInfo struct {
	method   protoreflect.MethodDescriptor
	position int
	success  bool
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

func setPosition(execution *executionInfo) {
	if execution.method != nil {
		for i := 0; i < types.Rdk.Methods.Len(); i++ {
			if types.Rdk.Methods.Get(i).FullName() == execution.method.FullName() {
				execution.position = i
			}
		}
	}
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
	if field.IsList() || field.IsMap() || field.Message() != nil {
		return fmt.Sprintf(`"%s": %s`, field.Name(), result), err
	}
	return fmt.Sprintf(`"%s": "%s"`, field.Name(), result), err
}

type action string

const (
	actionRetry       action = "Retry"
	actionTestAnother action = "Test another method"
	actionExit        action = "Exit"
)

func promptAction(isYesNo bool) (action, error) {
	if isYesNo {
		prompt := promptui.Prompt{
			Label:     "Continue",
			IsConfirm: true,
			Default:   "y",
		}
		result, err := prompt.Run()
		if err != nil {
			return actionExit, err
		}
		if strings.ToLower(result) == "y" || result == "" {
			return actionTestAnother, nil
		}
		return actionExit, nil
	}
	prompt := promptui.Select{
		Label: "What now?",
		Items: []action{actionRetry, actionTestAnother, actionExit},
	}
	_, result, err := prompt.Run()
	if err != nil {
		return actionExit, err
	}
	return action(result), nil
}

func dial() (*grpc.ClientConn, error) {
	dialTime := 10 * time.Second
	ctx, cancel := context.WithTimeout(context.Background(), dialTime)
	defer cancel()
	var opts []grpc.DialOption
	var creds credentials.TransportCredentials

	grpcurlUA := "kystrap"
	opts = append(opts, grpc.WithUserAgent(grpcurlUA))

	network := "tcp"

	target := "localhost:50051"

	cc, err := grpcurl.BlockingDial(ctx, network, target, creds, opts...)
	if err != nil {
		return nil, err
	}
	return cc, nil
}

func printMethodDescription(cmd *cobra.Command, method protoreflect.MethodDescriptor) {
	cmd.Println()
	cmd.Printf("📜 Expected format for %s\n", method.Name())
	fields := method.Input().Fields()
	for i := 0; i < fields.Len(); i++ {
		field := fields.Get(i)
		if field.Message() != nil {
			cmd.Printf("  - %s:\n", field.Name())
			for j := 0; j < field.Message().Fields().Len(); j++ {
				subField := field.Message().Fields().Get(j)
				cmd.Printf("    - %s (%s)\n", subField.Name(), subField.Kind())
			}
			continue
		}
		cmd.Printf("  - %s (%s)\n", field.Name(), field.Kind())
	}
	cmd.Println()
}

func printRequest(cmd *cobra.Command, data string) {
	cmd.Printf("➡️ Request\n%s\n\n", data)
}

func printResponse(cmd *cobra.Command, h *grpcurl.DefaultEventHandler, data string) {
	if h.Status.Err() != nil {
		cmd.PrintErrln("⬅️ Response")
		cmd.PrintErrf("%s %s (error code: %s)\n", promptui.IconBad, h.Status.Message(), h.Status.Code())
	} else {
		cmd.Printf("⬅️ Response\n%s", data)
		cmd.Printf("%s %s %s\n", promptui.IconGood, h.Status.Code(), h.Status.Message())
	}
}

func printError(cmd *cobra.Command, err error) {
	cmd.Printf("%s %s\n", promptui.IconBad, err.Error())
}

func performMethodCall(cmd *cobra.Command, method protoreflect.MethodDescriptor, data string) (bool, error) {
	cc, err := dial()
	if err != nil {
		return false, err
	}
	//goland:noinspection GoUnhandledErrorResult
	defer cc.Close()

	dialTime := 10 * time.Second
	ctx, cancel := context.WithTimeout(context.Background(), dialTime)
	defer cancel()

	in := strings.NewReader(data)

	options := grpcurl.FormatOptions{
		EmitJSONDefaultFields: true,
		AllowUnknownFields:    true,
	}

	rf, formatter, err := grpcurl.RequestParserAndFormatter(grpcurl.FormatJSON, types.Rdk.DescriptorSource, in, options)
	if err != nil {
		return false, err
	}

	out := new(bytes.Buffer)
	h := &grpcurl.DefaultEventHandler{
		Out:            out,
		Formatter:      formatter,
		VerbosityLevel: 0,
	}

	err = grpcurl.InvokeRPC(ctx, types.Rdk.DescriptorSource, cc, string(method.FullName()), nil, h, rf.Next)
	if err != nil {
		if errStatus, ok := status.FromError(err); ok {
			h.Status = errStatus
		} else if strings.HasPrefix(err.Error(), "error getting request data:") {
			printMethodDescription(cmd, method)
			cmd.PrintErrf("%s %s\n", promptui.IconBad, err.Error())
			return false, nil
		} else {
			return false, err
		}
	}
	if h.Status.Err() != nil {
		printMethodDescription(cmd, method)
		printRequest(cmd, data)
		printResponse(cmd, h, out.String())
	} else {
		cmd.Println()
		printRequest(cmd, data)
		printResponse(cmd, h, out.String())
	}
	return h.Status.Err() == nil, nil
}

func runTestIntegration(
	cmd *cobra.Command,
	execution *executionInfo,
	data string,
	skipPromptMethod bool,
	skipPromptInput bool,
) error {
	if execution.method == nil {
		if skipPromptMethod {
			return errors.New("no gRPC method specified")
		}

		err := promptMethod(execution)
		if err != nil {
			return err
		}
	}

	if data == "" {
		if skipPromptInput {
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

		if !json.Valid([]byte(data)) {
			printError(cmd, errors.New("invalid JSON"))
			return nil
		}
	}

	success, err := performMethodCall(cmd, execution.method, data)
	execution.success = success
	return err
}

func CmdTestIntegration() *cobra.Command {
	const flagMethod = "method"
	const flagData = "data"

	cmd := &cobra.Command{
		Use:   "test",
		Short: "Test a runtime integration",
		RunE: func(cmd *cobra.Command, args []string) error {
			execution := executionInfo{}
			defaultMethod, _ := cmd.Flags().GetString(flagMethod)
			if defaultMethod != "" {
				execution.method = findDescriptorMethod(defaultMethod)
				if execution.method == nil {
					return errors.New(fmt.Sprintf("invalid gRPC method %s", defaultMethod))
				}
				setPosition(&execution)
			}

			defaultData, _ := cmd.Flags().GetString(flagData)
			skip := cmd.Flags().Changed(yesFlag)
			err := runTestIntegration(cmd, &execution, defaultData, skip, skip)
			if err != nil {
				return err
			}

			// if yes flag is set, don't prompt for action
			if cmd.Flags().Changed(yesFlag) {
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
					err = runTestIntegration(cmd, &execution, "", true, false)
					if err != nil {
						return err
					}
				case actionTestAnother:
					execution.method = nil
					err = runTestIntegration(cmd, &execution, "", false, false)
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
	return cmd
}

func init() {
	rootCmd.AddCommand(CmdTestIntegration())
}
