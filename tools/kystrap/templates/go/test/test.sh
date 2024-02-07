#!/bin/sh

KEY=11044702  # Change this to the key you want to test
RPC="https://my-fancypants-rpc-endpoint"  # Change this to the RPC you want to test
CONFIG='{"network":"lavanet","rpc":"'$RPC'"}' # Set your config here
HOST="localhost"
PORT="50051"

# Go up until the root of the project (max 3 levels)
if [ -f "./tools/kystrap/kystrap.sh" ]; then
  cd ..
fi
if [ -f "./tools/kystrap/kystrap.sh" ]; then
  cd ..
fi
if [ -f "./tools/kystrap/kystrap.sh" ]; then
  cd ..
fi
if [ -f "./tools/kystrap/kystrap.sh" ]; then
  printf "Could not find ./tools/kystrap/kystrap.sh\n"
fi

KYSTRAP_DIR="$(pwd)"/tools/kystrap
docker build --tag kystrap "$KYSTRAP_DIR" || exit 1

run_test(args) {
    docker run \
      --rm                                          `# Remove container after run` \
      --user "$(id -u):$(id -g)"                    `# Run as current user` \
      --net="host"                                  `# Use host network` \
      --add-host=host.docker.internal:host-gateway  `# Add host.docker.internal to /etc/hosts` \
      kystrap $(echo "$args")                        # Pass all arguments to kystrap
}

printf "GetRuntimeName\n"
run_test() test -a $HOST:$PORT -m GetRuntimeName -y || exit 1

printf "\nGetRuntimeVersion\n"
sh tools/kystrap/kystrap.sh test -a $HOST:$PORT -m GetRuntimeVersion -y || exit 1

printf "\nValidateSetConfig\n"
validateSetConfigRequest=$(jq -n -c '{raw_config: $config}' --arg config $CONFIG)
sh tools/kystrap/kystrap.sh test -a $HOST:$PORT  -m ValidateSetConfig -d $(echo "$validateSetConfigRequest") -y  || exit 1
validateSetConfigResponse=$(sh tools/kystrap/kystrap.sh test -a $HOST:$PORT  -m ValidateSetConfig -d $(echo "$validateSetConfigRequest") -y -s 2>&1)

config=$(jq -n -c '{serialized_config: $response}' --arg key $KEY --argjson response $(echo $validateSetConfigResponse | jq '.serializedConfig'))

printf "\nGetDataItem\n"
getDataItemRequest=$(jq -n -c '{config: $cfg, key: $key}' --arg key $KEY --argjson cfg $config)
sh tools/kystrap/kystrap.sh test -a $HOST:$PORT  -m GetDataItem -d $getDataItemRequest -y || exit 1
getDataItemResponse=$(sh tools/kystrap/kystrap.sh test -a $HOST:$PORT  -m GetDataItem -d $getDataItemRequest -y -s 2>&1)

printf "\nPrevalidateDataItem\n"
prevalidateDataItemRequest=$(jq -n -c '{config: $cfg, data_item: {key: $key, value: $response}}' \
    --arg key $KEY --argjson cfg $config --argjson response $(echo $getDataItemResponse | jq '.dataItem.value'))
sh tools/kystrap/kystrap.sh test -a $HOST:$PORT  -m PrevalidateDataItem -d $prevalidateDataItemRequest -y || exit 1
prevalidateDataItemResponse=$(sh tools/kystrap/kystrap.sh test -a $HOST:$PORT  -m PrevalidateDataItem -d $prevalidateDataItemRequest -y -s 2>&1)

printf "\nTransformDataItem\n"
transformDataItemRequest=$(jq -n -c '{config: $cfg, data_item: {key: $key, value: $response}}' \
    --arg key $KEY --argjson cfg $config --argjson response $(echo $getDataItemResponse | jq '.dataItem.value'))
sh tools/kystrap/kystrap.sh test -a $HOST:$PORT  -m TransformDataItem -d $transformDataItemRequest -y || exit 1
transformDataItemResponse=$(sh tools/kystrap/kystrap.sh test -a $HOST:$PORT  -m TransformDataItem -d $transformDataItemRequest -y -s 2>&1)

printf "\nvalidateDataItem\n"
validateDataItemRequest=$(jq -n -c '{config: $cfg, proposed_data_item: {key: $key, value: $response}, validation_data_item: {key: $key, value: $response}}' \
    --arg key $KEY --argjson cfg $config --argjson response $(echo $transformDataItemResponse | jq '.transformedDataItem.value'))
sh tools/kystrap/kystrap.sh test -a $HOST:$PORT  -m ValidateDataItem -d $validateDataItemRequest -y || exit 1

printf "\nSummarizeDataBundle\n"
summarizeDataBundleRequest=$(jq -n -c '{config: $cfg, bundle: {key: $key, value: $response}}' \
    --arg key $KEY --argjson cfg $config --argjson response $(echo $transformDataItemResponse | jq '.transformedDataItem.value'))
sh tools/kystrap/kystrap.sh test -a $HOST:$PORT  -m SummarizeDataBundle -d $summarizeDataBundleRequest -y || exit 1

printf "\nNextKey\n"
nextKeyRequest=$(jq -n -c '{config: $cfg, key: $key}' --arg key $KEY --argjson cfg $config)
sh tools/kystrap/kystrap.sh test -a $HOST:$PORT  -m NextKey -d $nextKeyRequest -y || exit 1