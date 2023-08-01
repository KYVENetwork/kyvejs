#!/bin/bash
rm -rf temp
mkdir temp
KYVE_CHAIN_REPO="git@github.com:KYVENetwork/chain.git"
KYVE_CHAIN_VERSION="v1.3.0"
git -C ./temp clone  -b ${KYVE_CHAIN_VERSION} --single-branch ${KYVE_CHAIN_REPO}
rm -rf ./src/client
rm -rf ./src/lcd
mkdir ./src/client
mkdir ./src/lcd
# generate TypeScript proto
PROTO_DIR="../../node_modules/@protobufs"
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