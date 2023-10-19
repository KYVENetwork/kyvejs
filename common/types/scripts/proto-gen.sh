#!/bin/bash

# Variables
KYVE_CHAIN_REPO="git@github.com:KYVENetwork/chain.git"
KYVE_CHAIN_VERSION="v1.3.0"

echo "Cloning chain repo version ${KYVE_CHAIN_VERSION}"
mkdir -p ./tmp
git -C ./tmp clone  -b ${KYVE_CHAIN_VERSION} --single-branch ${KYVE_CHAIN_REPO}

# Setup protobuf docker image and build proto files
cd tmp/chain
cp ../../buf/Dockerfile ./proto/Dockerfile
cp ../../buf/generate.sh ./proto/generate.sh
cp ../../buf/proto/import.proto ./proto/kyve/import.proto
make proto-setup

# Generate lcd proto files
echo "Generating proto files for lcd"
cp ../../buf/buf.gen.lcd.yaml ./proto/buf.gen.yaml
docker run --rm --volume "$(pwd)":/workspace --workdir /workspace kyve-proto sh ./proto/generate.sh

# Generate client proto files
echo "Generating proto files for client"
cp ../../buf/buf.gen.client.yaml ./proto/buf.gen.yaml
docker run --rm --volume "$(pwd)":/workspace --workdir /workspace kyve-proto sh ./proto/generate.sh

# Cleanup src folder
cd ../../
rm -rf ./src/*

# Copy generated files to src folder
cp -r tmp/chain/lcd ./src
cp -r tmp/chain/client ./src

# Delete some files that cause problems (we don't need them anyway)
rm -rf ./src/lcd/google/protobuf/descriptor.ts
rm -rf ./src/lcd/kyve/import.ts
rm -rf ./src/client/google/protobuf/descriptor.ts
rm -rf ./src/client/kyve/import.ts

# Set version
echo "export const version = \"${KYVE_CHAIN_VERSION}\"" > ./src/version.ts
git add ./src

# Cleanup
rm -rf ./tmp

