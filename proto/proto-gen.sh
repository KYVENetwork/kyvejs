#!/bin/sh

cd proto || exit 1

# Variables
OUTPUT_FOLDER="out"

build_docker_image() {
  printf "🏗️ Building docker image...\n"
  docker build --rm \
    --tag kyve-protocol-proto:latest \
    --file Dockerfile . || exit 1
  printf "✅ Completed building docker image!\n\n"
}

run_protobuf_formatter() {
  printf "📝 Running protobuf formatter...\n"
  docker run --rm \
    --volume "$(pwd)":/workspace \
    --workdir /workspace \
    --user "$(id -u):$(id -g)" \
    kyve-protocol-proto \
    buf format --diff --write || exit 1
  printf "✅ Completed protobuf formatting!\n\n"
}

run_protobuf_linter() {
  printf "📝 Running protobuf linter...\n"
  docker run --rm \
    --volume "$(pwd)":/workspace \
    --workdir /workspace \
    --user "$(id -u):$(id -g)" \
    kyve-protocol-proto \
    buf lint || exit 1
  printf "✅ Completed protobuf linting!\n\n"
}

run_protobuf_generator() {
  printf "🛠️ Generating proto files...\n"
  docker run --rm \
    --volume "$(pwd)":/workspace \
    --workdir /workspace \
    --user "$(id -u):$(id -g)" \
    kyve-protocol-proto \
    buf generate || exit 1
  if [ $? -eq 1 ]; then
    printf "🚨 Error generating proto files!\n"
    rm -rf "$OUTPUT_FOLDER"
    exit 1
  fi
  printf "✅ Completed generating proto files!\n\n"
}

copy_files() {
  printf "📄 Copy generated files to folders...\n"

  # find all folders in ./integrations that have a package.json and add proto folder
  folders=$(find ../integrations -name package.json -exec dirname {} \;)

  # add the common folder
  folders="$folders,../common/protocol"

  for folder in $(echo "$folders" | tr "," "\n"); do
    printf "  🧹 Cleaning %s\n" "$folder/src/proto/*"
    rm -rf "$folder/src/proto/*"
  done

  for folder in $(echo "$folders" | tr "," "\n"); do
    printf "  📁 Copying files to %s\n" "$folder/src/proto/"
    mkdir -p "$folder/src/proto"
    cp -r "$OUTPUT_FOLDER"/* "$folder/src/proto/"
  done
  printf "✅ Completed copying files!\n\n"
}

clean_up() {
  rm -rf "$OUTPUT_FOLDER"
}

build_docker_image
run_protobuf_formatter
run_protobuf_linter
run_protobuf_generator
copy_files
clean_up
