package cmd

import (
	"errors"
	"fmt"
	"github.com/KYVENetwork/kyvejs/tools/kystrap/types"
	"github.com/manifoldco/promptui"
	"github.com/spf13/cobra"
	"google.golang.org/protobuf/reflect/protoreflect"
	"os/exec"
	"strings"
)

func findDescriptorMethod(name string) protoreflect.MethodDescriptor {
	lower := strings.ToLower(name)
	for _, method := range types.Rdk.MethodList() {
		if strings.ToLower(string(method.Name())) == lower || strings.ToLower(string(method.FullName())) == lower {
			return method
		}
	}
	return nil
}

func getPosition(value string) (int, error) {
	var position = 0
	if value != "" {
		method := findDescriptorMethod(value)
		if method == nil {
			return 0, errors.New(fmt.Sprintf("invalid value %s", value))
		}
	}
	return position, nil
}

func promptMethod(defaultVal string, skipPrompt bool) (protoreflect.MethodDescriptor, error) {
	position, err := getPosition(defaultVal)
	if err != nil {
		return nil, err
	}
	if skipPrompt {
		if defaultVal == "" {
			return nil, errors.New("no method specified")
		}
		method := findDescriptorMethod(defaultVal)
		if method == nil {
			return nil, errors.New(fmt.Sprintf("invalid value %s", defaultVal))
		}
		return method, nil
	}

	prompt := promptui.Select{
		Label:     "Which method do you want to test?",
		Items:     types.Rdk.MethodNames(),
		CursorPos: position,
		Size:      types.Rdk.Methods.Len(),
	}
	_, result, err := prompt.Run()
	return findDescriptorMethod(result), err
}

func performBufCurl(method protoreflect.MethodDescriptor) (string, error) {
	host, port := "127.0.0.1", "50051"
	bufCmd := []string{
		"curl",
		"--protocol",
		"grpc",
		"--schema",
		"protobuf.descriptor.bin",
		"--http2-prior-knowledge",
		fmt.Sprintf("http://%s:%s/%s", host, port, method.Name()),
	}
	out, err := exec.Command("buf", bufCmd...).Output()
	if err != nil {
		//var exitError *exec.ExitError
		//if errors.As(err, &exitError) {
		//	return "", errors.New(string(exitError.Stderr))
		//}
		return "", err
	}
	return string(out), nil
}

func CmdTestIntegration() *cobra.Command {
	const flagMethod = "method"

	cmd := &cobra.Command{
		Use:   "test",
		Short: "Test a runtime integration",
		RunE: func(cmd *cobra.Command, args []string) error {
			defaultMethod, _ := cmd.Flags().GetString(flagMethod)
			method, err := promptMethod(defaultMethod, cmd.Flags().Changed(yesFlag))
			if err != nil {
				return err
			}
			result, err := performBufCurl(method)
			if err != nil {
				return err
			}
			fmt.Println(result)
			return nil
		},
	}
	cmd.Flags().StringP(flagMethod, "m", "", "method that you want to test")
	return cmd
}

func init() {
	rootCmd.AddCommand(CmdTestIntegration())
}
