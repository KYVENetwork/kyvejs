package server

import (
	"context"
	"encoding/json"
	"fmt"
	bundlestypes "github.com/KYVENetwork/chain/x/bundles/types"
	pb "github.com/KYVENetwork/kyvejs/integrations/{{ .name }}/proto/kyverdk/runtime/v1"
	"google.golang.org/grpc"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
	"log"
	"net"
	"reflect"
	"strconv"
)

type {{ .name | ToTitle }}Server struct {
	pb.RuntimeServiceServer
}

type Config struct {
	// TODO: Add config properties here
	// Example:
	// Network string `json:"network"`
	// Rpc string `json:"rpc"`
}

type {{ .name | ToTitle }}ItemValue struct {
	// TODO: Define data properties here
	// Example:
	// Block string `json:"block"`
}

type {{ .name | ToTitle }}TransformedItemValue struct {
	// TODO: Define data properties here
	// Example:
	// Block string `json:"block"`
}

// GetRuntimeName returns the name of the runtime. Example "@kyvejs/tendermint"
func (t *{{ .name | ToTitle }}Server) GetRuntimeName(ctx context.Context, req *pb.GetRuntimeNameRequest) (*pb.GetRuntimeNameResponse, error) {
	return &pb.GetRuntimeNameResponse{Name: "@docker/tendermint-go"}, nil
}

// GetRuntimeVersion returns the version of the runtime. Example "1.2.0"
func (t *{{ .name | ToTitle }}Server) GetRuntimeVersion(ctx context.Context, req *pb.GetRuntimeVersionRequest) (*pb.GetRuntimeVersionResponse, error) {
	return &pb.GetRuntimeVersionResponse{Version: "0.0.1"}, nil
}

// ValidateSetConfig parses the raw runtime config found on pool, validates it and finally sets
// the property "config" in the runtime. A raw config could be an ipfs link to the
// actual config or a stringified yaml or json string. This method should error if
// the specific runtime config is not parsable or invalid.
//
// Deterministic behavior is required
func (t *{{ .name | ToTitle }}Server) ValidateSetConfig(ctx context.Context, req *pb.ValidateSetConfigRequest) (*pb.ValidateSetConfigResponse, error) {
	rawConfig := req.GetRawConfig()
	var config Config
	err := json.Unmarshal([]byte(rawConfig), &config)
	if err != nil {
		return nil, status.Errorf(codes.Internal, "Error unmarshalling rawConfig JSON string: %v", err)
	}

	// TODO: validate config here
	// Example:
	// if config.Network == "" {
	//	 return nil, status.Error(codes.Internal, "config does not have property 'network' defined")
	// }

	// TODO: make changes to config if necessary
	// Example:
	// if value, exists := os.LookupEnv("KYVEJS_{{ .name | ToUpper }}_API"); exists {
	//	 config["rpc"] = value
	// }

	serializedConfig, err := json.Marshal(config)
	if err != nil {
		return nil, status.Errorf(codes.Internal, "Error marshalling config: %v", err)
	}
	return &pb.ValidateSetConfigResponse{SerializedConfig: string(serializedConfig)}, nil
}

// GetDataItem gets the data item from a specific key and returns both key and the value.
//
// Deterministic behavior is required
func (t *{{ .name | ToTitle }}Server) GetDataItem(ctx context.Context, req *pb.GetDataItemRequest) (*pb.GetDataItemResponse, error) {
	var config Config
	err := json.Unmarshal([]byte(req.GetConfig().GetSerializedConfig()), &config)
	if err != nil {
		return nil, status.Errorf(codes.Internal, "Error unmarshalling config: %v", err)
	}
	key := req.GetKey()

	// TODO: get the data item with the given key
	// Example:
	// blockHeightUrl := fmt.Sprintf("%s/block?height=%s", config.Rpc, key)
	// blockResponse, err := utils.GetJsonFromUrl(blockHeightUrl)
	// if err != nil {
	//   return nil, status.Errorf(codes.Internal, "Error getting JSON from URL %s: %v", blockHeightUrl, err)
	// }
	// value := map[string]interface{}{
	//	 "block":         blockResponse["result"],
	// }

	var value = map[string]{{ .name | ToTitle }}ItemValue{}

	parsedJson, err := json.Marshal(value)
	if err != nil {
		return nil, status.Errorf(codes.Internal, "Error marshalling value data: %v", err)
	}

	return &pb.GetDataItemResponse{DataItem: &pb.DataItem{Key: key, Value: string(parsedJson)}}, nil
}

// PrevalidateDataItem prevalidates a data item right after is was retrieved from source.
// If the prevalidation fails the item gets rejected and never makes
// it to the local cache. If the prevalidation succeeds the item gets
// transformed and written to cache were it is used from submission
// of proposals or bundle validation.
//
// Deterministic behavior is required
func (t *{{ .name | ToTitle }}Server) PrevalidateDataItem(ctx context.Context, req *pb.PrevalidateDataItemRequest) (*pb.PrevalidateDataItemResponse, error) {
	var config map[string]string
	err := json.Unmarshal([]byte(req.GetConfig().GetSerializedConfig()), &config)
	if err != nil {
		return nil, status.Errorf(codes.Internal, "Error unmarshalling serializedConfig JSON string: %v", err)
	}

	var itemValue {{ .name | ToTitle }}ItemValue
	err = json.Unmarshal([]byte(req.GetDataItem().GetValue()), &itemValue)
	if err != nil {
		return nil, status.Errorf(codes.Internal, "Error unmarshalling data item: %v", err)
	}

	// TODO: check if data item is valid
	// Example:
	// if itemValue.Block == "" {
	// 	 return &pb.PrevalidateDataItemResponse{Valid: false}, nil
	// }

	return &pb.PrevalidateDataItemResponse{Valid: true}, nil
}

// TransformDataItem transforms a single data item and return it. Used for example
// to remove unecessary data or format the data in a better way.
//
// Deterministic behavior is required
func (t *{{ .name | ToTitle }}Server) TransformDataItem(ctx context.Context, req *pb.TransformDataItemRequest) (*pb.TransformDataItemResponse, error) {
	var itemValue {{ .name | ToTitle }}ItemValue
	err := json.Unmarshal([]byte(req.GetDataItem().GetValue()), &itemValue)
	if err != nil {
		return nil, status.Errorf(codes.Internal, "Error unmarshalling data item: %v", err)
	}

	// TODO: transform the data item so that it can be saved
	var transformedItemValue = itemValue

	// Construct the data_item to return
	transformedDataItemJSON, err := json.Marshal(transformedItemValue)
	if err != nil {
		return nil, status.Errorf(codes.Internal, "Error marshalling JSON: %v", err)
	}

	transformedDataItem := &pb.DataItem{
		Key:   req.DataItem.Key,
		Value: string(transformedDataItemJSON),
	}

	return &pb.TransformDataItemResponse{TransformedDataItem: transformedDataItem}, nil
}

// ValidateDataItem validates a single data item of a bundle proposal
//
// Deterministic behavior is required
func (t *{{ .name | ToTitle }}Server) ValidateDataItem(ctx context.Context, req *pb.ValidateDataItemRequest) (*pb.ValidateDataItemResponse, error) {
	requestProposedDataItem := req.GetProposedDataItem()
	requestValidationDataItem := req.GetValidationDataItem()

	var proposed GogoTransformedItemValue
	var validation GogoTransformedItemValue
	err := json.Unmarshal([]byte(requestProposedDataItem.GetValue()), &proposed)
	if err != nil {
		return nil, status.Errorf(codes.Internal, "Error unmarshalling proposedDataItem: %v", err)
	}
	err = json.Unmarshal([]byte(requestValidationDataItem.GetValue()), &validation)
	if err != nil {
		return nil, status.Errorf(codes.Internal, "Error unmarshalling validationDataItem: %v", err)
	}

	// Check if the proposedDataItem and validationDataItem are equal
	if !reflect.DeepEqual(proposed, validation) {
		return &pb.ValidateDataItemResponse{Vote: bundlestypes.VOTE_TYPE_VALID}, nil
	}

	// TODO: add custom validation logic here

	// Vote Invalid if proposedDataItem and validationDataItem do not match
	return &pb.ValidateDataItemResponse{Vote: bundlestypes.VOTE_TYPE_INVALID}, nil
}

// SummarizeDataBundle gets a formatted value string from a bundle. This produces a "summary" of
// a bundle which gets stored on-chain and therefore needs to be short.
//
// String should not be longer than 100 characters, else gas costs might be too expensive.
//
// Deterministic behavior is required
func (t *{{ .name | ToTitle }}Server) SummarizeDataBundle(ctx context.Context, req *pb.SummarizeDataBundleRequest) (*pb.SummarizeDataBundleResponse, error) {
	var summary = ""

	// TODO: summarize the data bundle
	// Example:
	// grpcBundle := req.GetBundle()
	// latestBundle := grpcBundle[len(grpcBundle)-1]
	// var value GogoTransformedItemValue
	// err := json.Unmarshal([]byte(latestBundle.GetValue()), &value)
	// if err == nil {
	//	 if value.Block.(map[string]interface{})["height"] != nil {
	//		 summary = value.Block.(map[string]interface{})["height"].(string)
	//	 }
	// }

	return &pb.SummarizeDataBundleResponse{Summary: summary}, nil
}

// NextKey gets the next key from the current key so that the data archived has an order.
//
// Deterministic behavior is required
func (t *{{ .name | ToTitle }}Server) NextKey(ctx context.Context, req *pb.NextKeyRequest) (*pb.NextKeyResponse, error) {
	key := req.GetKey()
	parsedKey, err := strconv.Atoi(key)
	if err != nil {
		return nil, status.Errorf(codes.Internal, "Error converting key %s to int: %v", key, err)
	}

	// TODO: calculate the next key
	nextKey := parsedKey + 1

	return &pb.NextKeyResponse{NextKey: strconv.Itoa(nextKey)}, nil
}

func StartServer() {
	// Initialize the gRPC server and listen on port 50051
	fmt.Println("Initializing {{ .name | ToTitle }} runtime...")
	listener, err := net.Listen("tcp", ":50051")
	if err != nil {
		log.Fatalf("Failed to listen on port 50051: %v", err)
	}

	// Create a new gRPC server instance
	server := grpc.NewServer()

	// Register the Tendermint service with the gRPC server
	pb.RegisterRuntimeServiceServer(server, &{{ .name | ToTitle }}Server{})

	// Start serving incoming connections
	fmt.Printf("{{ .name | ToTitle }} gRPC Server is running...\nPress Ctrl + C to exit.\n")
	err = server.Serve(listener)
	if err != nil {
		log.Fatalf("Failed to serve gRPC server: %v", err)
	}
}
