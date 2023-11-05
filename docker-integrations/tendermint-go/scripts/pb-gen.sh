#!/bin/bash

# Change to the root directory of the repository
cd ../../../

# Run the protoc command to compile the protobuf files
protoc --proto_path=common/protocol/src/types/protos/ \
       --go_out=docker-integrations/tendermint-go/protos \
       --go_opt=paths=source_relative \
       --go-grpc_out=docker-integrations/tendermint-go/protos \
       --go-grpc_opt=paths=source_relative \
       runtime.proto

# Print a message indicating the script has finished running
echo "Protobuf compilation complete."