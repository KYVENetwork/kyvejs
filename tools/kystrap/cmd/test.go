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
	"regexp"
	"strings"
	"time"
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

func setPosition(execution *executionInfo) {
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

func dial(address string) (*grpc.ClientConn, error) {
	dialTime := 10 * time.Second
	ctx, cancel := context.WithTimeout(context.Background(), dialTime)
	defer cancel()
	var opts []grpc.DialOption
	var creds credentials.TransportCredentials

	grpcurlUA := "kystrap"
	opts = append(opts, grpc.WithUserAgent(grpcurlUA))

	network := "tcp"

	cc, err := grpcurl.BlockingDial(ctx, network, address, creds, opts...)
	if err != nil {
		return nil, err
	}
	return cc, nil
}

func printMethodDescription(cmd *cobra.Command, method protoreflect.MethodDescriptor) {
	if printSimpleOutput(cmd) {
		return
	}

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
	if printSimpleOutput(cmd) {
		return
	}

	cmd.Printf("➡️ Request\n%s\n\n", data)
}

func printResponse(cmd *cobra.Command, h *grpcurl.DefaultEventHandler, data string) {
	if printSimpleOutput(cmd) {
		if h.Status.Err() != nil {
			cmd.PrintErrf("%s %d %s - %s\n", promptui.IconBad, h.Status.Code(), h.Status.Code(), h.Status.Message())
		} else {
			cmd.Printf(data)
		}
	} else {
		if h.Status.Err() != nil {
			cmd.PrintErrln("⬅️ Response")
			cmd.PrintErrf("%s %d %s - %s\n", promptui.IconBad, h.Status.Code(), h.Status.Code(), h.Status.Message())
		} else {
			cmd.Printf("⬅️ Response\n%s", data)
			cmd.Printf("%s %d %s %s\n", promptui.IconGood, h.Status.Code(), h.Status.Code(), h.Status.Message())
		}
	}
}

func printError(cmd *cobra.Command, err error) {
	if printSimpleOutput(cmd) {
		cmd.PrintErr(err)
		return
	}
	cmd.PrintErrf("%s %s\n", promptui.IconBad, err.Error())
}

func performMethodCall(cmd *cobra.Command, address string, method protoreflect.MethodDescriptor, data string) (bool, error) {
	cc, err := dial(address)
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
		Out:       out,
		Formatter: formatter,
	}

	err = grpcurl.InvokeRPC(ctx, types.Rdk.DescriptorSource, cc, string(method.FullName()), nil, h, rf.Next)
	if err != nil {
		if errStatus, ok := status.FromError(err); ok {
			h.Status = errStatus
		} else if strings.HasPrefix(err.Error(), "error getting request data:") {
			printMethodDescription(cmd, method)
			printError(cmd, err)
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
		printRequest(cmd, data)
		printResponse(cmd, h, out.String())
	}
	return h.Status.Err() == nil, nil
}

func runTestIntegration(
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

		if !json.Valid([]byte(data)) {
			execution.success = false
			printError(cmd, errors.New("invalid JSON"))
			return nil
		}
	}

	success, err := performMethodCall(cmd, execution.address, execution.method, data)
	execution.success = success
	return err
}

const flagSimple = "simple"

func printSimpleOutput(cmd *cobra.Command) bool {
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
				setPosition(&execution)
			}

			if address != "" {
				execution.address = address
			} else if !skipPrompts(cmd) {
				err := promptAddress(&execution)
				if err != nil {
					return err
				}
			}

			err := runTestIntegration(cmd, &execution, data)
			if err != nil {
				return err
			}

			// if yes flag is set, don't prompt for actions
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
					err = runTestIntegration(cmd, &execution, "")
					if err != nil {
						return err
					}
				case actionTestAnother:
					execution.method = nil
					err = runTestIntegration(cmd, &execution, "")
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
