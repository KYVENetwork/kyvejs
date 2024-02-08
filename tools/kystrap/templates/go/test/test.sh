#!/bin/sh

KEY=11044702  # Change this to the key you want to test
RPC="https://my-fancy-pants-rpc"  # Change this to the RPC you want to test
CONFIG='{"network":"fancy-network","rpc":"'$RPC'"}' # Set your config here
HOST="host:docker:internal"
PORT="50051"

KYSTRAP_DIR=./tools/kystrap
TMP_DIR=/tmp/kystrap
OUTPUT_DIR=$TMP_DIR/output

mkdir -p $OUTPUT_DIR

# Go up until the root of the project (max 3 levels)
for _ in 1 2 3; do
  if [ -d $KYSTRAP_DIR ]; then
    break
  fi
  cd ..
done
if ! [ -d $KYSTRAP_DIR ]; then
  printf "Could not find %s\n", "$KYSTRAP_DIR"
  exit 1
fi

docker build --tag kystrap "$KYSTRAP_DIR" || exit 1

# Create an entrypoint file, taking the kystrap arguments from the command line
create_entrypoint() {
  cat > $TMP_DIR/entrypoint.sh <<EOF
#!/bin/sh

data=\$(cat /app/data.json)

rm -f /app/output/output.json
./kystrap test -y -a $HOST:$PORT $@ || exit 1
./kystrap test -y -a $HOST:$PORT -s $@ > /app/output/output.json
EOF
  chmod +x $TMP_DIR/entrypoint.sh
}

run_test() {
  create_entrypoint "$@"
    docker run \
      --rm                                          `# Remove container after run` \
      --user "$(id -u):$(id -g)"                    `# Run as current user` \
      --net="host"                                  `# Use host network` \
      --add-host=host.docker.internal:host-gateway  `# Add host.docker.internal to /etc/hosts` \
      -v $TMP_DIR/data.json:/app/data.json          `# Mount the data.json file` \
      -v $TMP_DIR/entrypoint.sh:/app/entrypoint.sh  `# Mount the entrypoint.sh file` \
      -v $OUTPUT_DIR:/app/output                    `# Mount the output.json file` \
      --entrypoint ./entrypoint.sh                  `# Set the entrypoint to kystrap` \
      kystrap
}

printf "\nValidateSetConfig\n"
jq -n -c '{raw_config: $config}' --arg config "$CONFIG" > $TMP_DIR/data.json || exit 1
run_test -m ValidateSetConfig -f data.json || exit 1

jq -n -c '{config: {serialized_config: $response.serializedConfig}}' --arg key $KEY --argjson response "$(cat $OUTPUT_DIR/output.json)" > $TMP_DIR/config.json || exit 1

printf "\nGetDataItem\n"
jq -c '. + {key: $key}' --arg key $KEY $TMP_DIR/config.json  > $TMP_DIR/data.json || exit 1
run_test -m GetDataItem -f data.json || exit 1
cp $OUTPUT_DIR/output.json $TMP_DIR/data_item.json

printf "\nPrevalidateDataItem\n"
jq -c --slurpfile config $TMP_DIR/config.json '{data_item: .dataItem} + $config[0]' $OUTPUT_DIR/output.json > $TMP_DIR/data.json || exit 1
run_test -m PrevalidateDataItem -f data.json || exit 1

# Check if response is valid
if [ "$(jq '.valid' $OUTPUT_DIR/output.json)" != "true" ]; then
  printf "PrevalidateDataItem failed\n"
  exit 1
fi

printf "\nTransformDataItem\n"
jq -c --slurpfile config $TMP_DIR/config.json '{data_item: .dataItem} + $config[0]' $TMP_DIR/data_item.json > $TMP_DIR/data.json || exit 1
run_test -m TransformDataItem -f data.json || exit 1
cp $OUTPUT_DIR/output.json $TMP_DIR/transformed_data_item.json

printf "\nValidateDataItem\n"
jq -c --slurpfile config $TMP_DIR/config.json '{proposed_data_item: .transformedDataItem, validation_data_item: .transformedDataItem} + $config[0]' $OUTPUT_DIR/output.json > $TMP_DIR/data.json || exit 1
run_test -m ValidateDataItem -f data.json || exit 1

# Check if response is valid
if [ "$(jq '.vote == "VOTE_TYPE_VALID"' $OUTPUT_DIR/output.json)" != "true" ]; then
  printf "ValidateDataItem failed\n"
  exit 1
fi

printf "\nSummarizeDataBundle\n"
jq -c --slurpfile config $TMP_DIR/config.json '{bundle: .transformedDataItem} + $config[0]' $TMP_DIR/transformed_data_item.json > $TMP_DIR/data.json || exit 1
run_test -m SummarizeDataBundle -f data.json || exit 1

#TODO: check if summary is as expected

printf "\nNextKey\n"
jq -c '. + {key: $key}' --arg key $KEY $TMP_DIR/config.json  > $TMP_DIR/data.json || exit 1
run_test -m NextKey -f data.json || exit 1

#TODO: check if next key is as expected

rm -rf $TMP_DIR