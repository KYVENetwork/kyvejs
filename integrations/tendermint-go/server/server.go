package server

import (
	"bytes"
	"context"
	"encoding/json"
	"fmt"
	"os"
	"strconv"

	bundlestypes "github.com/KYVENetwork/chain/x/bundles/types"
	pb "github.com/KYVENetwork/kyvejs/integrations/tendermint-go/proto/kyverdk/runtime/v1"
	"github.com/KYVENetwork/kyvejs/integrations/tendermint-go/utils"
	tmJson "github.com/cometbft/cometbft/libs/json"
	coreTypes "github.com/cometbft/cometbft/rpc/core/types"
	"github.com/cometbft/cometbft/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

type TendermintGoServer struct {
	pb.RuntimeServiceServer
}

type Config struct {
	Network string `json:"network"`
	Rpc     string `json:"rpc"`
}

type Block struct {
	BlockId *types.BlockID `json:"block_id"`
	Block   *types.Block   `json:"block"`
}

type TendermintGoItemValue struct {
	Block        *Block                  `json:"block"`
	BlockResults *coreTypes.ResultBlockResults `json:"block_results"`
}

type TendermintGoTransformedItemValue = TendermintGoItemValue

type BlockResponse struct {
	Result *Block `json:"result"`
}

type BlockResultsResponse struct {
	Result *coreTypes.ResultBlockResults `json:"result"`
}

// GetRuntimeName returns the name of the runtime. Example "@kyvejs/tendermint"
func (t *TendermintGoServer) GetRuntimeName(ctx context.Context, req *pb.GetRuntimeNameRequest) (*pb.GetRuntimeNameResponse, error) {
	return &pb.GetRuntimeNameResponse{Name: "@kyvejs/tendermint"}, nil
}

// GetRuntimeVersion returns the version of the runtime. Example "1.2.0"
func (t *TendermintGoServer) GetRuntimeVersion(ctx context.Context, req *pb.GetRuntimeVersionRequest) (*pb.GetRuntimeVersionResponse, error) {
	return &pb.GetRuntimeVersionResponse{Version: "1.1.4"}, nil
}

// ValidateSetConfig parses the raw runtime config found on pool, validates it and finally sets
// the property "config" in the runtime. A raw config could be an ipfs link to the
// actual config or a stringified yaml or json string. This method should error if
// the specific runtime config is not parsable or invalid.
//
// Deterministic behavior is required
func (t *TendermintGoServer) ValidateSetConfig(ctx context.Context, req *pb.ValidateSetConfigRequest) (*pb.ValidateSetConfigResponse, error) {
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

	if value, exists := os.LookupEnv("KYVEJS_TENDERMINT-GO_RPC"); exists {
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
func (t *TendermintGoServer) GetDataItem(ctx context.Context, req *pb.GetDataItemRequest) (*pb.GetDataItemResponse, error) {
	var config Config
	err := json.Unmarshal([]byte(req.GetConfig().GetSerializedConfig()), &config)
	if err != nil {
		return nil, status.Errorf(codes.Internal, "Error unmarshalling config: %v", err)
	}
	key := req.GetKey()

	blockHeightUrl := fmt.Sprintf("%s/block?height=%s", config.Rpc, key)
	blockResponse, err := utils.GetFromUrl(blockHeightUrl)
	if err != nil {
		return nil, status.Errorf(codes.Internal, "Error getting JSON from URL %s: %v", blockHeightUrl, err)
	}

	var block BlockResponse
	if err := tmJson.Unmarshal(blockResponse, &block); err != nil {
		return nil, status.Errorf(codes.Internal, "Error unmarshalling block: %s", err)
	}

	blockResultsHeightUrl := fmt.Sprintf("%s/block_results?height=%s", config.Rpc, key)
	blockResultsResponse, err := utils.GetFromUrl(blockResultsHeightUrl)
	if err != nil {
		return nil, status.Errorf(codes.Internal, "Error getting JSON from URL %s: %v", blockResultsHeightUrl, err)
	}

	var blockResults BlockResultsResponse
	if err := tmJson.Unmarshal(blockResultsResponse, &blockResults); err != nil {
		return nil, status.Errorf(codes.Internal, "Error unmarshalling block results: %s", err)
	}

	value := TendermintGoItemValue{
		Block:        block.Result,
		BlockResults: blockResults.Result,
	}

	parsedJson, err := tmJson.Marshal(value)
	if err != nil {
		return nil, status.Errorf(codes.Internal, "Error marshalling value data: %v", err)
	}

	return &pb.GetDataItemResponse{DataItem: &pb.DataItem{Key: key, Value: parsedJson}}, nil
}

// PrevalidateDataItem prevalidates a data item right after is was retrieved from source.
// If the prevalidation fails the item gets rejected and never makes
// it to the local cache. If the prevalidation succeeds the item gets
// transformed and written to cache were it is used from submission
// of proposals or bundle validation.
//
// Deterministic behavior is required
func (t *TendermintGoServer) PrevalidateDataItem(ctx context.Context, req *pb.PrevalidateDataItemRequest) (*pb.PrevalidateDataItemResponse, error) {
	var config Config
	err := json.Unmarshal([]byte(req.GetConfig().GetSerializedConfig()), &config)
	if err != nil {
		return nil, status.Errorf(codes.Internal, "Error unmarshalling serializedConfig JSON string: %v", err)
	}

	var itemValue TendermintGoItemValue
	err = tmJson.Unmarshal([]byte(req.GetDataItem().GetValue()), &itemValue)
	if err != nil {
		return nil, status.Errorf(codes.Internal, "Error unmarshalling data item: %v", err)
	}

	if err := itemValue.Block.BlockId.ValidateBasic(); err != nil {
		return &pb.PrevalidateDataItemResponse{Valid: false}, status.Errorf(codes.Internal, "Error validating block id: %s", err)
	}

	if err := itemValue.Block.Block.ValidateBasic(); err != nil {
		return &pb.PrevalidateDataItemResponse{Valid: false}, status.Errorf(codes.Internal, "Error validating block: %s", err)
	}

	if itemValue.Block.Block.Header.ChainID != config.Network {
		return &pb.PrevalidateDataItemResponse{Valid: false}, status.Errorf(codes.Internal, "Wrong chain id detected, expected %s got %s", config.Network, itemValue.Block.Block.Header.ChainID)
	}

	if itemValue.Block.Block.Header.Height != itemValue.BlockResults.Height {
		return &pb.PrevalidateDataItemResponse{Valid: false}, status.Errorf(codes.Internal, "Block height differs from block results height, block = %d, block results = %d", itemValue.Block.Block.Header.Height, itemValue.BlockResults.Height)
	}

	return &pb.PrevalidateDataItemResponse{Valid: true}, nil
}

// TransformDataItem transforms a single data item and return it. Used for example
// to remove unecessary data or format the data in a better way.
//
// Deterministic behavior is required
func (t *TendermintGoServer) TransformDataItem(ctx context.Context, req *pb.TransformDataItemRequest) (*pb.TransformDataItemResponse, error) {
	return &pb.TransformDataItemResponse{TransformedDataItem: req.GetDataItem()}, nil
}

// ValidateDataItem validates a single data item of a bundle proposal
//
// Deterministic behavior is required
func (t *TendermintGoServer) ValidateDataItem(ctx context.Context, req *pb.ValidateDataItemRequest) (*pb.ValidateDataItemResponse, error) {
	if bytes.Equal(req.GetProposedDataItem().GetValue(), req.GetValidationDataItem().GetValue()) {
		return &pb.ValidateDataItemResponse{Vote: bundlestypes.VOTE_TYPE_VALID}, nil
	}
	
	return &pb.ValidateDataItemResponse{Vote: bundlestypes.VOTE_TYPE_INVALID}, nil
}

// SummarizeDataBundle gets a formatted value string from a bundle. This produces a "summary" of
// a bundle which gets stored on-chain and therefore needs to be short.
//
// String should not be longer than 100 characters, else gas costs might be too expensive.
//
// Deterministic behavior is required
func (t *TendermintGoServer) SummarizeDataBundle(ctx context.Context, req *pb.SummarizeDataBundleRequest) (*pb.SummarizeDataBundleResponse, error) {
	bundle := req.GetBundle()
	if len(bundle) == 0 {
		return nil, status.Error(codes.Internal, "Bundle is empty")
	}

	latestBundle := bundle[len(bundle)-1]

	var value TendermintGoTransformedItemValue
	if err := tmJson.Unmarshal([]byte(latestBundle.GetValue()), &value); err != nil {
		return nil, status.Errorf(codes.Internal, "Error unmarshalling data item: %v", err)
	}

	return &pb.SummarizeDataBundleResponse{Summary: latestBundle.Key}, nil
}

// NextKey gets the next key from the current key so that the data archived has an order.
//
// Deterministic behavior is required
func (t *TendermintGoServer) NextKey(ctx context.Context, req *pb.NextKeyRequest) (*pb.NextKeyResponse, error) {
	key := req.GetKey()
	parsedKey, err := strconv.Atoi(key)
	if err != nil {
		return nil, status.Errorf(codes.Internal, "Error converting key %s to int: %v", key, err)
	}

	nextKey := parsedKey + 1

	return &pb.NextKeyResponse{NextKey: strconv.Itoa(nextKey)}, nil
}
