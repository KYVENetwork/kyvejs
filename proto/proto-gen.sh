#!/bin/sh

cd proto || exit 1

# Variables
OUTPUT_FOLDER="out"
DESCRIPTOR_FILE="protobuf.descriptor.bin"

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

run_protobuf_builder() {
  printf "🛠️ Building proto descriptor...\n"
  docker run --rm \
    --volume "$(pwd)":/workspace \
    --workdir /workspace \
    --user "$(id -u):$(id -g)" \
    kyve-protocol-proto \
    buf build \
    -o "$OUTPUT_FOLDER"/"$DESCRIPTOR_FILE" || exit 1
}

copy_go_files() {
  printf "  🇬 Go\n"

  # find all go folders in ./integrations by checking if they have a go.mod
  folders=$(find ../integrations -maxdepth 2 -name go.mod -exec dirname {} \;)

  # find all go folders in ./tools/kystrap/templates by checking if they have a go.mod
  folders="$folders,$(find ../tools/kystrap/templates -maxdepth 2 -name go.mod -exec dirname {} \;)"

  # remove all old files in the proto folders
  for folder in $(echo "$folders" | tr "," "\n"); do
    printf "    🧹 Cleaning %s\n" "$folder/proto/*"
    rm -rf "$folder"/proto/*
  done

  # copy the new files to the proto folders
  for folder in $(echo "$folders" | tr "," "\n"); do
    printf "    📁 Copying files to %s\n" "$folder/proto/"
    mkdir -p "$folder/proto"
    cp -r "$OUTPUT_FOLDER"/go/* "$folder/proto/"
  done
}

copy_typescript_files() {
  printf "  🇹 Typescript\n"

  # find all typescript folders in ./integrations by checking if they have a package.json
  folders=$(find ../integrations -maxdepth 2 -name package.json -exec dirname {} \;)

  # find all typescript folders in ./tools/kystrap/templates by checking if they have a package.json
  folders="$folders,$(find ../tools/kystrap/templates -maxdepth 2 -name package.json -exec dirname {} \;)"

  # add the common folder
  folders="$folders,../common/protocol"

  # remove all old files in the proto folders
  for folder in $(echo "$folders" | tr "," "\n"); do
    printf "    🧹 Cleaning %s\n" "$folder/src/proto/*"
    rm -rf "$folder"/src/proto/*
  done

  # copy the new files to the proto folders
  for folder in $(echo "$folders" | tr "," "\n"); do
    printf "    📁 Copying files to %s\n" "$folder/src/proto/"
    mkdir -p "$folder/src/proto"
    cp -r "$OUTPUT_FOLDER"/ts/* "$folder/src/proto/"
  done
}

copy_python_files() {
  printf "  🐍 Python\n"

  # find all python folders in ./integrations by checking if they have a requirements.txt
  folders=$(find ../integrations -maxdepth 2 -name requirements.txt -exec dirname {} \;)

  # find all python folders in ./tools/kystrap/templates by checking if they have a requirements.txt
  folders="$folders,$(find ../tools/kystrap/templates -maxdepth 2 -name requirements.txt -exec dirname {} \;)"

  # remove all old files in the proto folders
  for folder in $(echo "$folders" | tr "," "\n"); do
    printf "    🧹 Cleaning %s\n" "$folder/proto/*"
    rm -rf "$folder"/proto/*
  done

  # copy the new files to the proto folders
  for folder in $(echo "$folders" | tr "," "\n"); do
    printf "    📁 Copying files to %s\n" "$folder/proto/"
    mkdir -p "$folder/proto"
    cp -r "$OUTPUT_FOLDER"/python/* "$folder/proto/"
  done
}

copy_descriptor_file() {
  printf "  📄 Descriptor\n"
  printf "    📁 Copy descriptor to ../tools/kystrap/%s\n" "${DESCRIPTOR_FILE}"
  cp "$OUTPUT_FOLDER"/"$DESCRIPTOR_FILE" ../tools/kystrap/"$DESCRIPTOR_FILE"
}

copy_files() {
  printf "📄 Copy generated files to folders...\n"

  copy_typescript_files
  copy_go_files
  copy_python_files
  copy_descriptor_file

  printf "✅ Completed copying files!\n\n"
}

clean_up() {
  rm -rf "$OUTPUT_FOLDER"
}

build_docker_image
run_protobuf_formatter
run_protobuf_linter
run_protobuf_generator
run_protobuf_builder
copy_files
clean_up
