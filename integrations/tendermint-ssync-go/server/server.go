package server

import (
	"bytes"
	"context"
	"encoding/json"
	"fmt"
	"os"
	"slices"
	"strconv"
	"strings"

	bundlestypes "github.com/KYVENetwork/chain/x/bundles/types"
	pb "github.com/KYVENetwork/kyvejs/integrations/tendermint-ssync-go/proto/kyverdk/runtime/v1"
	"github.com/KYVENetwork/kyvejs/integrations/tendermint-ssync-go/utils"
	abciTypes "github.com/cometbft/cometbft/abci/types"
	tmJson "github.com/cometbft/cometbft/libs/json"
	stateTypes "github.com/cometbft/cometbft/state"
	"github.com/cometbft/cometbft/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

type TendermintSsyncGoServer struct {
	pb.RuntimeServiceServer
}

type Config struct {
	Network string `json:"network"`
	Api string `json:"api"`
	Interval     int64 `json:"interval"`
}

type TendermintSsyncGoItemValue struct {
	Snapshot        *abciTypes.Snapshot                  `json:"snapshot"`
	Block						*types.Block 												`json:"block"`
	SeenCommit 			*types.Commit 												`json:"seenCommit"`
	State 					*stateTypes.State 										`json:"state"`
	Chunk 					*[]byte															`json:"chunk"`
}

type TendermintSsyncGoTransformedItemValue = TendermintSsyncGoItemValue

func ParseKey(key string) (height uint64, chunkIndex uint64, err error) {
	parsed := strings.Split(key, "/")

	height, err = strconv.ParseUint(parsed[0], 10, 64)
	if err != nil {
		return
	}

	chunkIndex, err = strconv.ParseUint(parsed[1], 10, 64)
	if err != nil {
		return
	}

	return
}

// GetRuntimeName returns the name of the runtime. Example "@kyvejs/tendermint"
func (t *TendermintSsyncGoServer) GetRuntimeName(ctx context.Context, req *pb.GetRuntimeNameRequest) (*pb.GetRuntimeNameResponse, error) {
	return &pb.GetRuntimeNameResponse{Name: "@kyvejs/tendermint-ssync"}, nil
}

// GetRuntimeVersion returns the version of the runtime. Example "1.2.0"
func (t *TendermintSsyncGoServer) GetRuntimeVersion(ctx context.Context, req *pb.GetRuntimeVersionRequest) (*pb.GetRuntimeVersionResponse, error) {
	return &pb.GetRuntimeVersionResponse{Version: "1.1.4"}, nil
}

// ValidateSetConfig parses the raw runtime config found on pool, validates it and finally sets
// the property "config" in the runtime. A raw config could be an ipfs link to the
// actual config or a stringified yaml or json string. This method should error if
// the specific runtime config is not parsable or invalid.
//
// Deterministic behavior is required
func (t *TendermintSsyncGoServer) ValidateSetConfig(ctx context.Context, req *pb.ValidateSetConfigRequest) (*pb.ValidateSetConfigResponse, error) {
	rawConfig := req.GetRawConfig()
	var config Config
	err := json.Unmarshal([]byte(rawConfig), &config)
	if err != nil {
		return nil, status.Errorf(codes.Internal, "Error unmarshalling rawConfig JSON string: %v", err)
	}

	if config.Api == "" {
		return nil, status.Error(codes.Internal, "config does not have property 'api' defined")
	}

	if config.Interval == 0 {
		return nil, status.Error(codes.Internal, "config does not have property 'interval' defined")
	}

	if value, exists := os.LookupEnv("KYVEJS_TENDERMINT-SSYNC-GO_API"); exists {
		config.Api = value
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
func (t *TendermintSsyncGoServer) GetDataItem(ctx context.Context, req *pb.GetDataItemRequest) (*pb.GetDataItemResponse, error) {
	var config Config
	err := json.Unmarshal([]byte(req.GetConfig().GetSerializedConfig()), &config)
	if err != nil {
		return nil, status.Errorf(codes.Internal, "Error unmarshalling config: %v", err)
	}
	key := req.GetKey()

	height, chunkIndex, err := ParseKey(key)
	if err != nil {
		return nil, status.Errorf(codes.Internal, "Error parsing key: %s", key)
	}

	listSnapshotsUrl := fmt.Sprintf("%s/list_snapshots", config.Api)
	listSnapshotsResponse, err := utils.GetFromUrl(listSnapshotsUrl)
	if err != nil {
		return nil, status.Errorf(codes.Internal, "Error getting snapshots from URL %s: %v", listSnapshotsUrl, err)
	}

	var listSnapshots []abciTypes.Snapshot
	if err := tmJson.Unmarshal(listSnapshotsResponse, &listSnapshots); err != nil {
		return nil, status.Errorf(codes.Internal, "Error unmarshalling snapshots: %s", err)
	}

	idx := slices.IndexFunc(listSnapshots, func (s abciTypes.Snapshot) bool {
		return s.Height == height
	})

	if idx < 0 {
		return nil, status.Errorf(codes.Internal, "Error snapshot with height %d not found", height)
	}

	snapshot := &listSnapshots[idx]

	loadSnapshotChunkUrl := fmt.Sprintf("%s/load_snapshot_chunk/%d/%d/%d", config.Api, snapshot.Height, snapshot.Format, chunkIndex)
	loadSnapshotChunkResponse, err := utils.GetFromUrl(loadSnapshotChunkUrl)
	if err != nil {
		return nil, status.Errorf(codes.Internal, "Error loading snapshot chunk from URL %s: %v", loadSnapshotChunkUrl, err)
	}

	chunk := new([]byte)
	if err := tmJson.Unmarshal(loadSnapshotChunkResponse, chunk); err != nil {
		return nil, status.Errorf(codes.Internal, "Error unmarshalling chunk: %s", err)
	}

	var value TendermintSsyncGoItemValue

	if chunkIndex > 0 {
		// if we are not at the first chunk we skip all the metadata to prevent
  	// storing information repeatedly
		value = TendermintSsyncGoItemValue{
			Snapshot: nil,
			Block: nil,
			SeenCommit: nil,
			State: nil,
			Chunk: chunk,
		}
	} else {
		getBlockUrl := fmt.Sprintf("%s/get_block/%d", config.Api, height)
		getBlockResponse, err := utils.GetFromUrl(getBlockUrl)
		if err != nil {
			return nil, status.Errorf(codes.Internal, "Error getting block from URL %s: %v", getBlockUrl, err)
		}

		block := new(types.Block)
		if err := tmJson.Unmarshal(getBlockResponse, block); err != nil {
			return nil, status.Errorf(codes.Internal, "Error unmarshalling block: %s", err)
		}

		getSeenCommitUrl := fmt.Sprintf("%s/get_seen_commit/%d", config.Api, height)
		getSeenCommitResponse, err := utils.GetFromUrl(getSeenCommitUrl)
		if err != nil {
			return nil, status.Errorf(codes.Internal, "Error getting seen commit from URL %s: %v", getSeenCommitUrl, err)
		}

		seenCommit := new(types.Commit)
		if err := tmJson.Unmarshal(getSeenCommitResponse, seenCommit); err != nil {
			return nil, status.Errorf(codes.Internal, "Error unmarshalling seen commit: %s", err)
		}

		getStateUrl := fmt.Sprintf("%s/get_state/%d", config.Api, height)
		getStateResponse, err := utils.GetFromUrl(getStateUrl)
		if err != nil {
			return nil, status.Errorf(codes.Internal, "Error getting state from URL %s: %v", getStateUrl, err)
		}

		state := new(stateTypes.State)
		if err := tmJson.Unmarshal(getStateResponse, state); err != nil {
			return nil, status.Errorf(codes.Internal, "Error unmarshalling state: %s", err)
		}

		value = TendermintSsyncGoItemValue{
			Snapshot: snapshot,
			Block: block,
			SeenCommit: seenCommit,
			State: state,
			Chunk: chunk,
		}
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
func (t *TendermintSsyncGoServer) PrevalidateDataItem(ctx context.Context, req *pb.PrevalidateDataItemRequest) (*pb.PrevalidateDataItemResponse, error) {
	var config Config
	err := json.Unmarshal([]byte(req.GetConfig().GetSerializedConfig()), &config)
	if err != nil {
		return nil, status.Errorf(codes.Internal, "Error unmarshalling serializedConfig JSON string: %v", err)
	}

	key := req.GetDataItem().GetKey()

	height, chunkIndex, err := ParseKey(key)
	if err != nil {
		return nil, status.Errorf(codes.Internal, "Error parsing key: %s", key)
	}

	var itemValue TendermintSsyncGoItemValue
	err = tmJson.Unmarshal(req.GetDataItem().GetValue(), &itemValue)
	if err != nil {
		return nil, status.Errorf(codes.Internal, "Error unmarshalling data item: %v", err)
	}

	if len(*itemValue.Chunk) == 0 {
		return &pb.PrevalidateDataItemResponse{Valid: false}, status.Errorf(codes.Internal, "Error chunk is empty")
	}

	if chunkIndex > 0 {
		// throw error if one of those values is not empty
		if itemValue.Snapshot != nil {
			return &pb.PrevalidateDataItemResponse{Valid: false}, status.Errorf(codes.Internal, "Error snapshot is not empty although chunk index is %d", chunkIndex)
		}

		if itemValue.Block != nil {
			return &pb.PrevalidateDataItemResponse{Valid: false}, status.Errorf(codes.Internal, "Error block is not empty although chunk index is %d", chunkIndex)
		}

		if itemValue.SeenCommit != nil {
			return &pb.PrevalidateDataItemResponse{Valid: false}, status.Errorf(codes.Internal, "Error seen commit is not empty although chunk index is %d", chunkIndex)
		}

		if itemValue.State != nil {
			return &pb.PrevalidateDataItemResponse{Valid: false}, status.Errorf(codes.Internal, "Error state is not empty although chunk index is %d", chunkIndex)
		}

		return &pb.PrevalidateDataItemResponse{Valid: true}, nil
	}

	// throw error if one of those values is empty
	if itemValue.Snapshot == nil {
		return &pb.PrevalidateDataItemResponse{Valid: false}, status.Errorf(codes.Internal, "Error snapshot is empty although chunk index is zero")
	}

	if itemValue.Block == nil {
		return &pb.PrevalidateDataItemResponse{Valid: false}, status.Errorf(codes.Internal, "Error block is empty although chunk index is zero")
	}

	if itemValue.SeenCommit == nil {
		return &pb.PrevalidateDataItemResponse{Valid: false}, status.Errorf(codes.Internal, "Error seen commit is empty although chunk index is zero")
	}

	if itemValue.State == nil {
		return &pb.PrevalidateDataItemResponse{Valid: false}, status.Errorf(codes.Internal, "Error state is empty although chunk index is zero")
	}

	// throw error if snapshot height mismatches
	if itemValue.Snapshot.Height != height {
		return &pb.PrevalidateDataItemResponse{Valid: false}, status.Errorf(codes.Internal, "Error snapshot height differs, snapshot = %d, key = %d", itemValue.Snapshot.Height, height)
	}

	// throw error if block height mismatches
	if itemValue.Block.Header.Height != int64(height) {
		return &pb.PrevalidateDataItemResponse{Valid: false}, status.Errorf(codes.Internal, "Error block height differs, block = %d, key = %d", itemValue.Block.Header.Height, height)
	}

	// throw error if seen commit height mismatches
	if itemValue.SeenCommit.Height != int64(height) {
		return &pb.PrevalidateDataItemResponse{Valid: false}, status.Errorf(codes.Internal, "Error seen commit height differs, block = %d, key = %d", itemValue.SeenCommit.Height, height)
	}

	// throw error if state height mismatches
	if itemValue.State.LastBlockHeight != int64(height) {
		return &pb.PrevalidateDataItemResponse{Valid: false}, status.Errorf(codes.Internal, "Error state height differs, state = %d, key = %d", itemValue.State.LastBlockHeight, height)
	}

	// validate block
	if config.Network != "celestia" {
		if err := itemValue.Block.ValidateBasic(); err != nil {
			return &pb.PrevalidateDataItemResponse{Valid: false}, status.Errorf(codes.Internal, "Error validating block: %s", err)
		}
	}

	// validate commit
	if err := itemValue.SeenCommit.ValidateBasic(); err != nil {
		return &pb.PrevalidateDataItemResponse{Valid: false}, status.Errorf(codes.Internal, "Error validating seen commit: %s", err)
	}

	return &pb.PrevalidateDataItemResponse{Valid: true}, nil
}

// TransformDataItem transforms a single data item and return it. Used for example
// to remove unecessary data or format the data in a better way.
//
// Deterministic behavior is required
func (t *TendermintSsyncGoServer) TransformDataItem(ctx context.Context, req *pb.TransformDataItemRequest) (*pb.TransformDataItemResponse, error) {
	return &pb.TransformDataItemResponse{TransformedDataItem: req.GetDataItem()}, nil
}

// ValidateDataItem validates a single data item of a bundle proposal
//
// Deterministic behavior is required
func (t *TendermintSsyncGoServer) ValidateDataItem(ctx context.Context, req *pb.ValidateDataItemRequest) (*pb.ValidateDataItemResponse, error) {
	proposed := req.GetProposedDataItem().GetValue()
	validation := req.GetValidationDataItem().GetValue()

	if bytes.Equal(proposed, validation) {
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
func (t *TendermintSsyncGoServer) SummarizeDataBundle(ctx context.Context, req *pb.SummarizeDataBundleRequest) (*pb.SummarizeDataBundleResponse, error) {
	bundle := req.GetBundle()
	if len(bundle) == 0 {
		return nil, status.Error(codes.Internal, "Bundle is empty")
	}

	latestBundle := bundle[len(bundle)-1]

	return &pb.SummarizeDataBundleResponse{Summary: latestBundle.Key}, nil
}

// NextKey gets the next key from the current key so that the data archived has an order.
//
// Deterministic behavior is required
func (t *TendermintSsyncGoServer) NextKey(ctx context.Context, req *pb.NextKeyRequest) (*pb.NextKeyResponse, error) {
	var config Config
	err := json.Unmarshal([]byte(req.GetConfig().GetSerializedConfig()), &config)
	if err != nil {
		return nil, status.Errorf(codes.Internal, "Error unmarshalling serializedConfig JSON string: %v", err)
	}

	key := req.GetKey()

	height, chunkIndex, err := ParseKey(key)
	if err != nil {
		return nil, status.Errorf(codes.Internal, "Error parsing key: %s", key)
	}

	listSnapshotsUrl := fmt.Sprintf("%s/list_snapshots", config.Api)
	listSnapshotsResponse, err := utils.GetFromUrl(listSnapshotsUrl)
	if err != nil {
		return nil, status.Errorf(codes.Internal, "Error getting snapshots from URL %s: %v", listSnapshotsUrl, err)
	}

	var listSnapshots []abciTypes.Snapshot
	if err := tmJson.Unmarshal(listSnapshotsResponse, &listSnapshots); err != nil {
		return nil, status.Errorf(codes.Internal, "Error unmarshalling snapshots: %s", err)
	}

	idx := slices.IndexFunc(listSnapshots, func (s abciTypes.Snapshot) bool {
		return s.Height == height
	})

	if idx < 0 {
		return nil, status.Errorf(codes.Internal, "Error snapshot with height %d not found", height)
	}

	snapshot := listSnapshots[idx]

	// move on to next snapshot and start at first chunk
  // if we have already reached all chunks in current snapshot
	if snapshot.Chunks - 1 == uint32(chunkIndex) {
		return &pb.NextKeyResponse{NextKey: fmt.Sprintf("%d/0", snapshot.Height + uint64(config.Interval))}, nil
	}

	// stay on current snapshot and continue with next snapshot chunk
	return &pb.NextKeyResponse{NextKey: fmt.Sprintf("%d/%d", snapshot.Height, chunkIndex + 1)}, nil
}
