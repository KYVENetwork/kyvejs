package server

import (
	"context"
	"encoding/json"
	"fmt"
	"os"
	"reflect"
	"strconv"

	bundlestypes "github.com/KYVENetwork/chain/x/bundles/types"
	pb "github.com/KYVENetwork/kyvejs/integrations/tendermint-bsync-go/proto/kyverdk/runtime/v1"
	"github.com/KYVENetwork/kyvejs/integrations/tendermint-bsync-go/utils"
	tmJson "github.com/cometbft/cometbft/libs/json"
	"github.com/cometbft/cometbft/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

type TendermintBsyncGoServer struct {
	pb.RuntimeServiceServer
}

type Config struct {
	Network string `json:"network"`
	Rpc     string `json:"rpc"`
}

type Block types.Block


type TendermintBsyncGoItemValue struct {
	Block        Block                  `json:"block"`
}

type TendermintBsyncGoTransformedItemValue struct {
	Block        Block       `json:"block"`
}

// GetRuntimeName returns the name of the runtime. Example "@kyvejs/tendermint"
func (t *TendermintBsyncGoServer) GetRuntimeName(ctx context.Context, req *pb.GetRuntimeNameRequest) (*pb.GetRuntimeNameResponse, error) {
	return &pb.GetRuntimeNameResponse{Name: "@kyvejs/tendermint-bsync"}, nil
}

// GetRuntimeVersion returns the version of the runtime. Example "1.2.0"
func (t *TendermintBsyncGoServer) GetRuntimeVersion(ctx context.Context, req *pb.GetRuntimeVersionRequest) (*pb.GetRuntimeVersionResponse, error) {
	return &pb.GetRuntimeVersionResponse{Version: "1.1.4"}, nil
}

// ValidateSetConfig parses the raw runtime config found on pool, validates it and finally sets
// the property "config" in the runtime. A raw config could be an ipfs link to the
// actual config or a stringified yaml or json string. This method should error if
// the specific runtime config is not parsable or invalid.
//
// Deterministic behavior is required
func (t *TendermintBsyncGoServer) ValidateSetConfig(ctx context.Context, req *pb.ValidateSetConfigRequest) (*pb.ValidateSetConfigResponse, error) {
	rawConfig := req.GetRawConfig()
	var config Config
	err := json.Unmarshal([]byte(rawConfig), &config)
	if err != nil {
		return nil, status.Errorf(codes.Internal, "Error unmarshalling rawConfig JSON string: %v", err)
	}

	if config.Network == "" {
		return nil, status.Error(codes.Internal, "config does not have property 'network' defined")
	}

	if config.Rpc == "" {
		return nil, status.Error(codes.Internal, "config does not have property 'rpc' defined")
	}

	if value, exists := os.LookupEnv("KYVEJS_TENDERMINT-BSYNC-GO_RPC"); exists {
		config.Rpc = value
	}

	serializedConfig, err := json.Marshal(config)
	if err != nil {
		return nil, status.Errorf(codes.Internal, "Error marshalling config: %v", err)
	}
	return &pb.ValidateSetConfigResponse{SerializedConfig: string(serializedConfig)}, nil
}

// GetDataItem gets the data item from a specific key and returns both key and the value.
//
// Deterministic behavior is required
func (t *TendermintBsyncGoServer) GetDataItem(ctx context.Context, req *pb.GetDataItemRequest) (*pb.GetDataItemResponse, error) {
	var config Config
	err := json.Unmarshal([]byte(req.GetConfig().GetSerializedConfig()), &config)
	if err != nil {
		return nil, status.Errorf(codes.Internal, "Error unmarshalling config: %v", err)
	}
	key := req.GetKey()

	blockHeightUrl := fmt.Sprintf("%s/block?height=%s", config.Rpc, key)
	blockResponse, err := utils.GetResultFromUrl(blockHeightUrl)
	if err != nil {
		return nil, status.Errorf(codes.Internal, "Error getting JSON from URL %s: %v", blockHeightUrl, err)
	}

	var block struct {
		Block        Block                  `json:"block"`
	}
	if err := tmJson.Unmarshal(blockResponse, &block); err != nil {
		return nil, status.Errorf(codes.Internal, "Error unmarshalling block: %s", err)
	}

	value := TendermintBsyncGoItemValue{
		Block:        block.Block,
	}

	parsedJson, err := tmJson.Marshal(value)
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
func (t *TendermintBsyncGoServer) PrevalidateDataItem(ctx context.Context, req *pb.PrevalidateDataItemRequest) (*pb.PrevalidateDataItemResponse, error) {
	var config Config
	err := json.Unmarshal([]byte(req.GetConfig().GetSerializedConfig()), &config)
	if err != nil {
		return nil, status.Errorf(codes.Internal, "Error unmarshalling serializedConfig JSON string: %v", err)
	}

	var itemValue TendermintBsyncGoItemValue
	err = tmJson.Unmarshal([]byte(req.GetDataItem().GetValue()), &itemValue)
	if err != nil {
		return nil, status.Errorf(codes.Internal, "Error unmarshalling data item: %v", err)
	}

	if err := itemValue.Block.ValidateBasic(); err != nil {
		return &pb.PrevalidateDataItemResponse{Valid: false}, status.Errorf(codes.Internal, "Error validating block: %s", err)
	}

	if itemValue.Block.Header.ChainID != config.Network {
		return &pb.PrevalidateDataItemResponse{Valid: false}, status.Errorf(codes.Internal, "Wrong chain id detected, expected %s got %s", config.Network, itemValue.Block.Header.ChainID)
	}

	return &pb.PrevalidateDataItemResponse{Valid: true}, nil
}

// TransformDataItem transforms a single data item and return it. Used for example
// to remove unecessary data or format the data in a better way.
//
// Deterministic behavior is required
func (t *TendermintBsyncGoServer) TransformDataItem(ctx context.Context, req *pb.TransformDataItemRequest) (*pb.TransformDataItemResponse, error) {
	return &pb.TransformDataItemResponse{TransformedDataItem: req.GetDataItem()}, nil
}

// ValidateDataItem validates a single data item of a bundle proposal
//
// Deterministic behavior is required
func (t *TendermintBsyncGoServer) ValidateDataItem(ctx context.Context, req *pb.ValidateDataItemRequest) (*pb.ValidateDataItemResponse, error) {
	requestProposedDataItem := req.GetProposedDataItem()
	requestValidationDataItem := req.GetValidationDataItem()

	var proposed TendermintBsyncGoTransformedItemValue
	var validation TendermintBsyncGoTransformedItemValue
	
	if err := tmJson.Unmarshal([]byte(requestProposedDataItem.GetValue()), &proposed); err != nil {
		return nil, status.Errorf(codes.Internal, "Error unmarshalling proposedDataItem: %v", err)
	}
	
	if err := tmJson.Unmarshal([]byte(requestValidationDataItem.GetValue()), &validation); err != nil {
		return nil, status.Errorf(codes.Internal, "Error unmarshalling validationDataItem: %v", err)
	}

	// Check if the proposedDataItem and validationDataItem are equal
	if reflect.DeepEqual(proposed, validation) {
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
func (t *TendermintBsyncGoServer) SummarizeDataBundle(ctx context.Context, req *pb.SummarizeDataBundleRequest) (*pb.SummarizeDataBundleResponse, error) {
	bundle := req.GetBundle()
	if len(bundle) == 0 {
		return nil, status.Error(codes.Internal, "Bundle is empty")
	}

	latestBundle := bundle[len(bundle)-1]

	var value TendermintBsyncGoTransformedItemValue
	if err := tmJson.Unmarshal([]byte(latestBundle.GetValue()), &value); err != nil {
		return nil, status.Errorf(codes.Internal, "Error unmarshalling data item: %v", err)
	}

	return &pb.SummarizeDataBundleResponse{Summary: latestBundle.Key}, nil
}

// NextKey gets the next key from the current key so that the data archived has an order.
//
// Deterministic behavior is required
func (t *TendermintBsyncGoServer) NextKey(ctx context.Context, req *pb.NextKeyRequest) (*pb.NextKeyResponse, error) {
	key := req.GetKey()
	parsedKey, err := strconv.Atoi(key)
	if err != nil {
		return nil, status.Errorf(codes.Internal, "Error converting key %s to int: %v", key, err)
	}

	nextKey := parsedKey + 1

	return &pb.NextKeyResponse{NextKey: strconv.Itoa(nextKey)}, nil
}