package main

import (
	"context"
	"encoding/json"
	"fmt"
	"github.com/KYVENetwork/kyvejs/docker-integrations/tendermint-go/protos"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
	"os"
	"reflect"
	"sort"
	"strconv"
)

type Tendermint struct {
	protos.RuntimeServer
}

func (t *Tendermint) GetRuntimeName(ctx context.Context, req *protos.GetRuntimeNameRequest) (*protos.GetRuntimeNameResponse, error) {
	return &protos.GetRuntimeNameResponse{Name: "@docker/tendermint-go"}, nil
}

func (t *Tendermint) GetRuntimeVersion(ctx context.Context, req *protos.GetRuntimeVersionRequest) (*protos.GetRuntimeVersionResponse, error) {
	return &protos.GetRuntimeVersionResponse{Version: "0.0.1"}, nil
}

func (t *Tendermint) ValidateSetConfig(ctx context.Context, req *protos.ValidateSetConfigRequest) (*protos.ValidateSetConfigResponse, error) {
	rawConfig := req.GetRawConfig()
	var config map[string]interface{}

	err := json.Unmarshal([]byte(rawConfig), &config)
	if err != nil {
		return nil, status.Errorf(codes.Internal, "Error unmarshalling rawConfig JSON string: %v", err)
	}

	if config["network"] == nil {
		return nil, status.Error(codes.Internal, "config does not have property 'network' defined")
	}

	if config["rpc"] == nil {
		return nil, status.Error(codes.Internal, "config does not have property 'rpc' defined")
	}

	if value, exists := os.LookupEnv("KYVEJS_TENDERMINT_RPC"); exists {
		config["rpc"] = value
	}

	serializedConfig, err := json.Marshal(config)
	if err != nil {
		return nil, status.Errorf(codes.Internal, "Error marshalling config map[string]interface{}: %v", err)
	}
	return &protos.ValidateSetConfigResponse{SerializedConfig: string(serializedConfig)}, nil
}

func (t *Tendermint) GetDataItem(ctx context.Context, req *protos.GetDataItemRequest) (*protos.GetDataItemResponse, error) {
	var config map[string]string
	err := json.Unmarshal([]byte(req.GetConfig().GetSerializedConfig()), &config)
	if err != nil {
		return nil, status.Errorf(codes.Internal, "Error unmarshalling serializedConfig JSON string: %v", err)
	}
	key := req.GetKey()

	blockHeightUrl := fmt.Sprintf("%s/block?height=%s", config["rpc"], key)
	blockResponse, err := getJsonFromUrl(blockHeightUrl)
	if err != nil {
		return nil, status.Errorf(codes.Internal, "Error getting JSON from URL %s: %v", blockHeightUrl, err)
	}

	blockResultsUrl := fmt.Sprintf("%s/block_results?height=%s", config["rpc"], key)
	blockResultsResponse, err := getJsonFromUrl(blockResultsUrl)
	if err != nil {
		return nil, status.Errorf(codes.Internal, "Error getting JSON from URL %s: %v", blockResultsUrl, err)
	}

	value := map[string]interface{}{
		"block":         blockResponse["result"],
		"block_results": blockResultsResponse["result"],
	}
	parsedJson, err := json.Marshal(value)
	if err != nil {
		return nil, status.Errorf(codes.Internal, "Error marshalling value map[string]interface{}: %v", err)
	}
	return &protos.GetDataItemResponse{DataItem: &protos.DataItem{Key: key, Value: string(parsedJson)}}, nil
}

func (t *Tendermint) PrevalidateDataItem(ctx context.Context, req *protos.PrevalidateDataItemRequest) (*protos.PrevalidateDataItemResponse, error) {
	var config map[string]string
	err := json.Unmarshal([]byte(req.GetConfig().GetSerializedConfig()), &config)
	if err != nil {
		return nil, status.Errorf(codes.Internal, "Error unmarshalling serializedConfig JSON string: %v", err)
	}

	var itemValue map[string]interface{}
	item := map[string]interface{}{
		"key":   req.GetDataItem().GetKey(),
		"value": json.Unmarshal([]byte(req.GetDataItem().GetValue()), &itemValue),
	}

	// Check if data item is defined
	if item["value"] == nil {
		return &protos.PrevalidateDataItemResponse{Valid: false}, nil
	}

	// Check if block and block results are defined
	if item["value"].(map[string]interface{})["block"] == nil && item["value"].(map[string]interface{})["block_results"] == nil {
		return &protos.PrevalidateDataItemResponse{Valid: false}, nil
	}

	// Check if network matches
	if config["network"] != item["value"].(map[string]interface{})["block"].(map[string]interface{})["header"].(map[string]interface{})["chain_id"] {
		return &protos.PrevalidateDataItemResponse{Valid: false}, nil
	}

	return &protos.PrevalidateDataItemResponse{Valid: true}, nil
}

func (t *Tendermint) TransformDataItem(ctx context.Context, req *protos.TransformDataItemRequest) (*protos.TransformDataItemResponse, error) {
	var item map[string]interface{}
	if err := json.Unmarshal([]byte(req.GetDataItem().GetValue()), &item); err != nil {
		return nil, status.Errorf(codes.Internal, "Error unmarshalling JSON: %v", err)
	}

	compareEventAttribute := func(a, b map[string]interface{}) bool {
		return a["key"].(string) < b["key"].(string)
	}

	processEvents := func(events []map[string]interface{}) []map[string]interface{} {
		for _, event := range events {
			attributes := event["attributes"].([]map[string]interface{})
			sort.Slice(attributes, func(i, j int) bool {
				return compareEventAttribute(attributes[i], attributes[j])
			})
			event["attributes"] = attributes
		}
		return events
	}

	blockResults := item["block_results"].(map[string]interface{})
	if beginBlockEvents, ok := blockResults["begin_block_events"].([]map[string]interface{}); ok {
		blockResults["begin_block_events"] = processEvents(beginBlockEvents)
	}

	if endBlockEvents, ok := blockResults["end_block_events"].([]map[string]interface{}); ok {
		blockResults["end_block_events"] = processEvents(endBlockEvents)
	}

	if txsResults, ok := blockResults["txs_results"].([]map[string]interface{}); ok {
		for _, txResult := range txsResults {
			delete(txResult, "log")
			if events, ok := txResult["events"].([]map[string]interface{}); ok {
				txResult["events"] = processEvents(events)
			}
		}
	}

	// Construct the data_item to return
	transformedDataItemJSON, err := json.Marshal(item)
	if err != nil {
		return nil, status.Errorf(codes.Internal, "Error marshalling JSON: %v", err)
	}

	transformedDataItem := &protos.DataItem{
		Key:   req.DataItem.Key,
		Value: string(transformedDataItemJSON),
	}

	return &protos.TransformDataItemResponse{
		TransformedDataItem: transformedDataItem,
	}, nil
}

func (t *Tendermint) ValidateDataItem(ctx context.Context, req *protos.ValidateDataItemRequest) (*protos.ValidateDataItemResponse, error) {
	requestProposedDataItem := req.GetProposedDataItem()
	requestValidationDataItem := req.GetValidationDataItem()
	var proposedDataItem map[string]interface{}

	if err := json.Unmarshal([]byte(requestProposedDataItem.GetValue()), &proposedDataItem); err != nil {
		return nil, status.Errorf(codes.Internal, "Error unmarshalling proposedDataItem JSON string: %v", err)
	}

	var validationDataItem map[string]interface{}

	if err := json.Unmarshal([]byte(requestValidationDataItem.GetValue()), &validationDataItem); err != nil {
		return nil, status.Errorf(codes.Internal, "Error unmarshalling proposedDataItem JSON string: %v", err)
	}

	// Check if the proposedDataItem and validationDataItem are equal
	if !reflect.DeepEqual(proposedDataItem, validationDataItem) {
		return &protos.ValidateDataItemResponse{Vote: int32(protos.VOTE_VALID)}, nil
	}

	if validationDataItem["block"].(map[string]interface{})["block"].(map[string]interface{})["chain_id"] != "osmosis-1" {
		// Remove validationDataItem.value.block_results.begin_block_events
		validationDataItem["block_results"].(map[string]interface{})["begin_block_events"] = nil
		// Remove proposedDataItem.value.block_results.begin_block_events
		proposedDataItem["block_results"].(map[string]interface{})["begin_block_events"] = nil

		if !reflect.DeepEqual(proposedDataItem, validationDataItem) {
			// Vote Abstain if begin_block_events are not equal
			return &protos.ValidateDataItemResponse{Vote: int32(protos.VOTE_ABSTAIN)}, nil
		}
	}

	// Vote Invalid if proposedDataItem and validationDataItem do not match
	return &protos.ValidateDataItemResponse{Vote: int32(protos.VOTE_INVALID)}, nil
}

func (t *Tendermint) SummarizeDataBundle(ctx context.Context, req *protos.SummarizeDataBundleRequest) (*protos.SummarizeDataBundleResponse, error) {
	var latestBlockHeight string
	grpcBundle := req.GetBundle()

	latestBundle := grpcBundle[len(grpcBundle)-1]

	var value map[string]interface{}

	if err := json.Unmarshal([]byte(latestBundle.GetValue()), &value); err != nil {
		// If value.block.block.header.height exists save it to lateBlockHeight or else ""
		if value["block"].(map[string]interface{})["block"].(map[string]interface{})["header"].(map[string]interface{})["height"] != nil {
			latestBlockHeight = value["block"].(map[string]interface{})["block"].(map[string]interface{})["header"].(map[string]interface{})["height"].(string)
		} else {
			latestBlockHeight = ""
		}
	}
	return &protos.SummarizeDataBundleResponse{Summary: latestBlockHeight}, nil
}

func (t *Tendermint) NextKey(ctx context.Context, req *protos.NextKeyRequest) (*protos.NextKeyResponse, error) {
	key := req.GetKey()
	parsedKey, err := strconv.Atoi(key)
	if err != nil {
		return nil, status.Errorf(codes.Internal, "Error converting key %s to int: %v", key, err)
	}
	nextKey := parsedKey + 1

	return &protos.NextKeyResponse{NextKey: strconv.Itoa(nextKey)}, nil
}
