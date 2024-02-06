package grpcall

import (
	"bytes"
	"context"
	"encoding/json"
	"errors"
	"strings"
	"time"

	"github.com/KYVENetwork/kyvejs/tools/kystrap/types"
	"github.com/fullstorydev/grpcurl"
	"github.com/manifoldco/promptui"
	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials"
	"google.golang.org/grpc/status"
	"google.golang.org/protobuf/reflect/protoreflect"
)

type GrpcCaller struct {
	address        string
	isSimpleOutput bool
	printer        Printer
}

type Printer interface {
	Print(i ...interface{})
	Println(i ...interface{})
	Printf(format string, i ...interface{})
	PrintErr(i ...interface{})
	PrintErrln(i ...interface{})
	PrintErrf(format string, i ...interface{})
}

func NewGrpcCaller(address string, isSimpleOutput bool, printer Printer) *GrpcCaller {
	return &GrpcCaller{
		address:        address,
		isSimpleOutput: isSimpleOutput,
		printer:        printer,
	}
}

func (gc *GrpcCaller) printMethodDescription(method protoreflect.MethodDescriptor) {
	if gc.isSimpleOutput {
		return
	}

	gc.printer.Printf("📜 Expected format for %s\n", method.Name())
	fields := method.Input().Fields()
	for i := 0; i < fields.Len(); i++ {
		field := fields.Get(i)
		if field.Message() != nil {
			gc.printer.Printf("  - %s:\n", field.Name())
			for j := 0; j < field.Message().Fields().Len(); j++ {
				subField := field.Message().Fields().Get(j)
				gc.printer.Printf("    - %s (%s)\n", subField.Name(), subField.Kind())
			}
			continue
		}
		gc.printer.Printf("  - %s (%s)\n", field.Name(), field.Kind())
	}
	gc.printer.Println()
}

func (gc *GrpcCaller) printRequest(data string) {
	if gc.isSimpleOutput {
		return
	}

	gc.printer.Printf("➡️ Request\n%s\n\n", data)
}

func (gc *GrpcCaller) printResponse(h *grpcurl.DefaultEventHandler, data string) {
	if gc.isSimpleOutput {
		if h.Status.Err() != nil {
			gc.printer.PrintErrf("%s %d %s - %s\n", promptui.IconBad, h.Status.Code(), h.Status.Code(), h.Status.Message())
		} else {
			gc.printer.Printf(data)
		}
	} else {
		if h.Status.Err() != nil {
			gc.printer.PrintErrln("⬅️ Response")
			gc.printer.PrintErrf("%s %d %s - %s\n", promptui.IconBad, h.Status.Code(), h.Status.Code(), h.Status.Message())
		} else {
			gc.printer.Printf("⬅️ Response\n%s", data)
			gc.printer.Printf("%s %d %s %s\n", promptui.IconGood, h.Status.Code(), h.Status.Code(), h.Status.Message())
		}
	}
}

func (gc *GrpcCaller) printError(err error) {
	if gc.isSimpleOutput {
		gc.printer.PrintErr(err)
		return
	}
	gc.printer.PrintErrf("%s %s\n", promptui.IconBad, err.Error())
}

func (gc *GrpcCaller) dial() (*grpc.ClientConn, error) {
	dialTime := 10 * time.Second
	ctx, cancel := context.WithTimeout(context.Background(), dialTime)
	defer cancel()
	var opts []grpc.DialOption
	var creds credentials.TransportCredentials

	grpcurlUA := "kystrap"
	opts = append(opts, grpc.WithUserAgent(grpcurlUA))

	network := "tcp"

	cc, err := grpcurl.BlockingDial(ctx, network, gc.address, creds, opts...)
	if err != nil {
		return nil, err
	}
	return cc, nil
}

// PerformMethodCall performs a method call on the gRPC server
// It returns true if the call was successful with a positive status code
// An error is only returned if the call could not be performed (e.g. connection issues)
// Invalid JSON is not considered an error
func (gc *GrpcCaller) PerformMethodCall(method protoreflect.MethodDescriptor, data string) (bool, error) {
	if !json.Valid([]byte(data)) {
		gc.printMethodDescription(method)
		gc.printError(errors.New("invalid JSON"))
		return false, nil
	}

	cc, err := gc.dial()
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
			gc.printMethodDescription(method)
			gc.printError(err)
			return false, nil
		} else {
			return false, err
		}
	}
	if h.Status.Err() != nil {
		gc.printMethodDescription(method)
		gc.printRequest(data)
		gc.printResponse(h, out.String())
	} else {
		gc.printRequest(data)
		gc.printResponse(h, out.String())
	}
	return h.Status.Err() == nil, nil
}
