#!/bin/bash
rm -rf temp
mkdir temp

# clone cosmos-sdk repo
COSMOS_SDK_REPO="git@github.com:KYVENetwork/cosmos-sdk.git"
COSMOS_SDK_VERSION="v0.47.5-kyve-rc0"

git -C ./temp clone  -b ${COSMOS_SDK_VERSION} --single-branch ${COSMOS_SDK_REPO}

# clone chain repo
KYVE_CHAIN_REPO="git@github.com:KYVENetwork/chain.git"
KYVE_CHAIN_VERSION="rapha/funders-module"

git -C ./temp clone  -b ${KYVE_CHAIN_VERSION} --single-branch ${KYVE_CHAIN_REPO}

# create proto dir
mkdir temp/proto

cp -r ../../node_modules/@protobufs/* temp/proto/

git -C ./temp clone --single-branch git@github.com:cosmos/cosmos-proto.git
cp -r temp/cosmos-proto/proto/cosmos_proto temp/proto/cosmos_proto

cp -r temp/cosmos-sdk/proto/amino temp/proto/amino
cp -r temp/cosmos-sdk/proto/cosmos temp/proto/cosmos
cp -r temp/cosmos-sdk/proto/tendermint temp/proto/tendermint

# clean destination folder
rm -rf ./src/client
rm -rf ./src/lcd
mkdir ./src/client
mkdir ./src/lcd

# generate TypeScript proto
PROTO_DIR="temp/proto"
PROTOC_GEN_TS_PROTO_PATH="./node_modules/.bin/protoc-gen-ts_proto"
OUT_DIR="./src/client"
KYVE_PROTO='./temp/chain/proto'
protoc --plugin="protoc-gen-ts_proto=${PROTOC_GEN_TS_PROTO_PATH}" \
--ts_proto_out="${OUT_DIR}" \
--ts_proto_opt="esModuleInterop=true,forceLong=string,useOptionals=messages,snakeToCamel=false" \
--proto_path="$PROTO_DIR" \
--proto_path="$KYVE_PROTO" \
$(find ${PROTO_DIR}  -path -prune -o -name '*.proto' -print0 | xargs -0) \
$(find ${KYVE_PROTO}  -path -prune -o -name '*.proto' -print0 | xargs -0)

OUT_DIR_RES="./src/lcd"

protoc --plugin="protoc-gen-ts_proto=${PROTOC_GEN_TS_PROTO_PATH}" \
--ts_proto_out="${OUT_DIR_RES}" \
--ts_proto_opt="esModuleInterop=true,forceLong=string,useOptionals=messages,snakeToCamel=false,stringEnums=true" \
--proto_path="$PROTO_DIR" \
--proto_path="$KYVE_PROTO" \
$(find ${PROTO_DIR}  -path -prune -o -name '*.proto' -print0 | xargs -0) \
$(find ${KYVE_PROTO}  -path -prune -o -name '*.proto' -print0 | xargs -0)
rm -rf temp

echo "export const version = \"${KYVE_CHAIN_VERSION}\"" > ./src/version.ts

git add ./src