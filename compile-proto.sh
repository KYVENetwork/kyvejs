#!/bin/bash

print_help() {
  echo "Usage: $0 -p|--proto-path <proto_file_location> -o|--output <output_location> -l|--language <target_language>"
  echo
  echo "Options:"
  echo "  -p, --proto-path <proto_file_location>   Specify the path to the .proto file."
  echo "  -o, --output <output_location>          Specify the output directory for the generated files."
  echo "  -l, --language <target_language>        Specify the target language (typescript or python)."
  echo "  -h, --help                             Display this help message."
}

while [[ "$#" -gt 0 ]]; do
  case $1 in
    -p|--proto-path) proto_file_location="$2"; shift; ;;
    -o|--output) output_location="$2"; shift; ;;
    -l|--language) target_language="$2"; shift; ;;
    -h|--help) print_help; exit 0 ;;
    *) echo "Unknown parameter passed: $1"; print_help; exit 1 ;;
  esac
  shift
done

# Check if required arguments are provided
if [ -z "$proto_file_location" ] || [ -z "$output_location" ] || [ -z "$target_language" ]; then
  echo "Error: -p or --proto-path, -o or --output, and -l or --language options are required."
  print_help
  exit 1
fi

# Check if the output directory exists, and create it if it doesn't
if [ ! -d "$output_location" ]; then
  mkdir -p "$output_location"
fi

# Define the dependencies and download them if necessary based on the selected target language
proto_path_dir=$(dirname "$proto_file_location")
if [ "$target_language" == "typescript" ]; then
  PROTOC_GEN_TS_PROTO="./node_modules/.bin/protoc-gen-ts_proto"
  PROTOC_CMD="protoc --proto_path='$proto_path_dir' --plugin='$PROTOC_GEN_TS_PROTO' --ts_proto_opt=snakeToCamel=false --ts_proto_opt=outputServices=grpc-js --ts_proto_out='$output_location' '$proto_file_location'"
elif [ "$target_language" == "python" ]; then
  PROTOC_CMD="python3 -m grpc_tools.protoc -I $proto_path_dir --python_out='$output_location' --grpc_python_out='$output_location' '$proto_file_location'"
else
  echo "Error: Unsupported target language. Supported languages are 'typescript' and 'python'."
  exit 1
fi

# Check if the protoc plugin is installed and install if it does not exist
if ! command -v "$PROTOC_GEN_TS_PROTO" &> /dev/null; then
  echo "$PROTOC_GEN_TS_PROTO is not installed. Attempting to install..."
  if yarn install; then
    echo "$PROTOC_GEN_TS_PROTO installed successfully."
  else
    echo "Error: Failed to download $PROTOC_GEN_TS_PROTO. Make sure you have Node.js and Yarn installed."
    exit 1
  fi
else
  echo "$PROTOC_GEN_TS_PROTO is already installed."
fi

# Check if the protoc plugin is installed and install it if it does not exist
if ! command -v "$PROTOC_GEN_GRPC_PYTHON" &> /dev/null; then
  echo "$PROTOC_GEN_GRPC_PYTHON is not installed. Attempting to install..."
  if pip3 install grpcio-tools; then
    echo "$PROTOC_GEN_GRPC_PYTHON installed successfully."

    # Automatically find and add the directory containing protoc-gen-grpc_python to the PATH
    INSTALL_DIR=$(pip3 show grpcio-tools | grep "Location" | cut -d ' ' -f 2)
    if [ -n "$INSTALL_DIR" ]; then
      export PATH="$INSTALL_DIR:$PATH"
      echo "$PROTOC_GEN_GRPC_PYTHON is added to the PATH."
    else
      echo "Error: Could not determine the installation directory of $PROTOC_GEN_GRPC_PYTHON."
      exit 1
    fi
  else
    echo "Error: Failed to install $PROTOC_GEN_GRPC_PYTHON. Make sure you have pip and grpcio-tools installed."
    exit 1
  fi
else
  echo "$PROTOC_GEN_GRPC_PYTHON is already installed."
fi

# Run protoc with the specified options based on the selected target language
echo $PROTOC_CMD
if eval "$PROTOC_CMD"; then
  echo "Proto compilation for $target_language completed."
else
  echo "Error: Proto compilation for $target_language failed."
  exit 1
fi
