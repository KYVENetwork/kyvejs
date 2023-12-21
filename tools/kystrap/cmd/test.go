package cmd

import (
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
	"os"
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

func promptMethod(execution *executionInfo, skipPrompt bool) error {
	if skipPrompt && execution.method == nil {
		return errors.New("no gRPC method specified")
	}

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

func promptInput(field protoreflect.FieldDescriptor, skipPrompt bool) (string, error) {
	if skipPrompt {
		return "", nil
	}
	prompt := promptui.Prompt{
		Label: field.Name(),
	}
	result, err := prompt.Run()
	return result, err
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

	//in := os.Stdin
	in := strings.NewReader(data)

	options := grpcurl.FormatOptions{
		EmitJSONDefaultFields: true,
		AllowUnknownFields:    true,
	}

	rf, formatter, err := grpcurl.RequestParserAndFormatter(grpcurl.FormatJSON, types.Rdk.DescriptorSource, in, options)
	if err != nil {
		return false, err
	}

	h := &grpcurl.DefaultEventHandler{
		Out:            os.Stdout,
		Formatter:      formatter,
		VerbosityLevel: 0,
	}

	err = grpcurl.InvokeRPC(ctx, types.Rdk.DescriptorSource, cc, string(method.FullName()), nil, h, rf.Next)
	if err != nil {
		if errStatus, ok := status.FromError(err); ok {
			h.Status = errStatus
		} else if strings.HasPrefix(err.Error(), "error getting request data:") {
			cmd.PrintErrln(err.Error())
			return false, nil
		} else {
			return false, err
		}
	}
	if h.Status.Err() != nil {
		cmd.PrintErrln(h.Status.Message())
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
		err := promptMethod(execution, skipPromptMethod)
		if err != nil {
			return err
		}
	}

	if data == "" {
		fields := execution.method.Input().Fields()
		for i := 0; i < fields.Len(); i++ {
			field := fields.Get(i)
			input, err := promptInput(field, skipPromptInput)
			if err != nil {
				return err
			}

			// separate fields with comma
			if data != "" {
				data += ", "
			}
			data += fmt.Sprintf(`"%s": "%s"`, field.Name(), input)
		}
		data = fmt.Sprintf(`{%s}`, data)

		if !json.Valid([]byte(data)) {
			cmd.PrintErrln("invalid json")
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

			if cmd.Flags().Changed(yesFlag) {
				return nil
			}

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