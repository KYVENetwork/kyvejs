package types

import (
	"fmt"

	commoncmd "github.com/KYVENetwork/kyvejs/common/goutils/cmd"
	"github.com/fullstorydev/grpcurl"
	"github.com/jhump/protoreflect/desc"
	"google.golang.org/protobuf/reflect/protoreflect"
)

const (
	ServiceName            = "kyverdk.runtime.v1.RuntimeService"
	ProtobufDescriptorFile = "protobuf.descriptor.bin"
)

type RdkDescriptor struct {
	DescriptorSource  grpcurl.DescriptorSource
	ServiceDescriptor desc.Descriptor
	Methods           protoreflect.MethodDescriptors
}

var Rdk *RdkDescriptor

func (r *RdkDescriptor) MethodList() []protoreflect.MethodDescriptor {
	var methods []protoreflect.MethodDescriptor
	for i := 0; i < r.Methods.Len(); i++ {
		methods = append(methods, r.Methods.Get(i))
	}
	return methods
}

type MethodOption struct {
	commoncmd.Option[protoreflect.MethodDescriptor]
	method protoreflect.MethodDescriptor
}

func (r *RdkDescriptor) MethodOptions() []commoncmd.Option[protoreflect.MethodDescriptor] {
	var methods []commoncmd.Option[protoreflect.MethodDescriptor]
	for i := 0; i < r.Methods.Len(); i++ {
		methods = append(methods, NewMethodOption(r.Methods.Get(i)))
	}
	return methods
}

func NewMethodOption(method protoreflect.MethodDescriptor) MethodOption {
	return MethodOption{method: method}
}

func (o MethodOption) Name() string {
	return string(o.method.Name())
}

func (o MethodOption) Value() protoreflect.MethodDescriptor {
	return o.method
}

func (o MethodOption) StringValue() string {
	return o.Name()
}

func (r *RdkDescriptor) MethodNames() []string {
	var names []string
	for i := 0; i < r.Methods.Len(); i++ {
		names = append(names, string(r.Methods.Get(i).Name()))
	}
	return names
}

func parseProtobufDescriptor() error {
	sets, err := grpcurl.DescriptorSourceFromProtoSets(ProtobufDescriptorFile)
	if err != nil {
		return err
	}

	services, err := sets.ListServices()
	if err != nil {
		return err
	}
	var kyverdk string
	for _, service := range services {
		if service == ServiceName {
			kyverdk = service
		}
	}
	if kyverdk == "" {
		return fmt.Errorf("%s not found", ServiceName)
	}

	serviceDescriptor, err := sets.FindSymbol(kyverdk)
	if err != nil {
		return err
	}

	Rdk = &RdkDescriptor{
		DescriptorSource:  sets,
		ServiceDescriptor: serviceDescriptor,
		Methods:           serviceDescriptor.GetFile().GetServices()[0].UnwrapService().Methods(),
	}

	return nil
}

func init() {
	err := parseProtobufDescriptor()
	if err != nil {
		panic(err)
	}
}
