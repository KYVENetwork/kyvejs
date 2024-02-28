#!/bin/sh

#########################################
#               Variables               #
#########################################
# Key, config, and expected values (CHANGE THESE TO MATCH YOUR INTEGRATION!!!)
KEY="720000/0"
API="http://ovh-protocol-1:26015"
CONFIG='{"network":"celestia","interval":5000,"api":"'$API'"}'
EXPECTED_SUMMARY="\"$KEY\""
EXPECTED_NEXT_KEY="\"720000/1\""

#########################################

# Host and port
HOST="host.docker.internal"
PORT="50051"

# Directories
KYSTRAP_DIR=./tools/kystrap
TMP_DIR=/tmp/kystrap
OUTPUT_DIR=$TMP_DIR/output

#########################################

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

# Build the kystrap image
docker build --tag kystrap "$KYSTRAP_DIR" || exit 1

# Setup
mkdir -p $OUTPUT_DIR
touch $TMP_DIR/data.json

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
      --entrypoint ./entrypoint.sh                  `# Set the entrypoint to entrypoint.sh` \
      kystrap
}

test_get_runtime_name() {
  printf "\nGetRuntimeName\n"
  run_test -m GetRuntimeName -y || exit 1
}

test_get_runtime_version() {
  printf "\nGetRuntimeVersion\n"
  run_test -m GetRuntimeVersion -y || exit 1
}

test_validate_set_config() {
  printf "\nValidateSetConfig\n"
  jq -n -c '{raw_config: $config}' --arg config "$CONFIG" > $TMP_DIR/data.json || exit 1
  run_test -m ValidateSetConfig -f data.json || exit 1
  jq -n -c '{config: {serialized_config: $response.serializedConfig}}' --arg key $KEY --argjson response "$(cat $OUTPUT_DIR/output.json)" > $TMP_DIR/config.json || exit 1
}

test_get_data_item() {
  printf "\nGetDataItem\n"
  jq -c '. + {key: $key}' --arg key $KEY $TMP_DIR/config.json  > $TMP_DIR/data.json || exit 1
  run_test -m GetDataItem -f data.json || exit 1
  cp $OUTPUT_DIR/output.json $TMP_DIR/data_item.json
}

test_prevalidate_data_item() {
  printf "\nPrevalidateDataItem\n"
  jq -c --slurpfile config $TMP_DIR/config.json '{data_item: .dataItem} + $config[0]' $OUTPUT_DIR/output.json > $TMP_DIR/data.json || exit 1
  run_test -m PrevalidateDataItem -f data.json || exit 1

  # Check if response is valid
  if [ "$(jq '.valid' $OUTPUT_DIR/output.json)" != "true" ]; then
    printf "PrevalidateDataItem failed\n"
    exit 1
  fi
}

test_transform_data_item() {
  printf "\nTransformDataItem\n"
  jq -c --slurpfile config $TMP_DIR/config.json '{data_item: .dataItem} + $config[0]' $TMP_DIR/data_item.json > $TMP_DIR/data.json || exit 1
  run_test -m TransformDataItem -f data.json || exit 1
  cp $OUTPUT_DIR/output.json $TMP_DIR/transformed_data_item.json
}

test_validate_data_item() {
  printf "\nValidateDataItem\n"
  jq -c --slurpfile config $TMP_DIR/config.json '{proposed_data_item: .transformedDataItem, validation_data_item: .transformedDataItem} + $config[0]' $OUTPUT_DIR/output.json > $TMP_DIR/data.json || exit 1
  run_test -m ValidateDataItem -f data.json || exit 1

  # Check if response is valid
  if [ "$(jq '.vote == "VOTE_TYPE_VALID"' $OUTPUT_DIR/output.json)" != "true" ]; then
    printf "ValidateDataItem failed; expected VOTE_TYPE_VALID, got %s\n" "$(jq '.vote' $OUTPUT_DIR/output.json)"
    exit 1
  fi
}

test_summarize_data_bundle() {
  printf "\nSummarizeDataBundle\n"
  jq -c --slurpfile config $TMP_DIR/config.json '{bundle: .transformedDataItem} + $config[0]' $TMP_DIR/transformed_data_item.json > $TMP_DIR/data.json || exit 1
  run_test -m SummarizeDataBundle -f data.json || exit 1

  # Check if the summary is correct
  if [ "$(jq '.summary' $OUTPUT_DIR/output.json)" != "$EXPECTED_SUMMARY" ]; then
    printf "SummarizeDataBundle failed; expected %s, got %s\n" "$EXPECTED_SUMMARY" "$(jq '.summary' $OUTPUT_DIR/output.json)"
    exit 1
  fi
}

test_next_key() {
  printf "\nNextKey\n"
  jq -c '. + {key: $key}' --arg key $KEY $TMP_DIR/config.json  > $TMP_DIR/data.json || exit 1
  run_test -m NextKey -f data.json || exit 1

  # Check if the next key is correct
  if [ "$(jq '.nextKey' $OUTPUT_DIR/output.json)" != "$EXPECTED_NEXT_KEY" ]; then
    printf "NextKey failed; expected %s, got %s\n" "$EXPECTED_NEXT_KEY" "$(jq '.nextKey' $OUTPUT_DIR/output.json)"
    exit 1
  fi
}

# Call the functions
test_get_runtime_name
test_get_runtime_version
test_validate_set_config
test_get_data_item
test_prevalidate_data_item
test_transform_data_item
test_validate_data_item
test_summarize_data_bundle
test_next_key

# Clean up
rm -rf $TMP_DIR