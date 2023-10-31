#!/bin/bash

print_help() {
  echo "Usage: $0 -p|--proto-path <proto_file_location> -o|--output <output_location>"
  echo
  echo "Options:"
  echo "  -p, --proto-path <proto_file_location>   Specify the path to the .proto file."
  echo "  -o, --output <output_location>          Specify the output directory for the generated files."
  echo "  -h, --help                             Display this help message."
}

while [[ "$#" -gt 0 ]]; do
  case $1 in
    -p|--proto-path) proto_file_location="$2"; shift; ;;
    -o|--output) output_location="$2"; shift; ;;
    -h|--help) print_help; exit 0 ;;
    *) echo "Unknown parameter passed: $1"; print_help; exit 1 ;;
  esac
  shift
done

# Check if required arguments are provided
if [ -z "$proto_file_location" ] || [ -z "$output_location" ]; then
  echo "Error: Both -p or --proto-path and -o or --output options are required."
  print_help
  exit 1
fi

# Check if the output directory exists, and create it if it doesn't
if [ ! -d "$output_location" ]; then
  mkdir -p "$output_location"
fi

# Define the dependencies and download them if necessary
PROTOC_GEN_TS_PROTO="./node_modules/.bin/protoc-gen-ts_proto"

# Try to install the package, handle errors
if [ ! -f "$PROTOC_GEN_TS_PROTO" ]; then
  echo "Downloading protoc-gen-ts_proto..."
  if yarn install; then
    echo "ProtoC-gen-ts_proto installed successfully."
  else
    echo "Error: Failed to download protoc-gen-ts_proto. Make sure you have Node.js and Yarn installed."
    exit 1
  fi
fi

# Run protoc with the specified options
proto_path_dir=$(dirname "$proto_file_location")
if protoc --proto_path="$proto_path_dir" \
  --plugin="$PROTOC_GEN_TS_PROTO" \
  --ts_proto_opt=snakeToCamel=false \
  --ts_proto_opt=outputServices=grpc-js \
  --ts_proto_out="$output_location" "$proto_file_location"; then
  echo "Proto compilation completed."
else
  echo "Error: Proto compilation failed."
  exit 1
fi
