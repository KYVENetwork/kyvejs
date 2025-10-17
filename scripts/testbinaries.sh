#!/bin/bash
set -e  # Exit immediately if a command exits with a non-zero status

# Detect OS
OS="$(uname | tr '[:upper:]' '[:lower:]')"
# Detect architecture
ARCH="$(uname -m)"

# Normalize architecture naming to match filename
if [[ "$ARCH" == "x86_64" ]]; then
  ARCH="x64"
elif [[ "$ARCH" == "arm64" || "$ARCH" == "aarch64" ]]; then
  ARCH="arm64"
else
  echo "Unsupported architecture: $ARCH"
  exit 1
fi

# Normalize OS naming to match filename
if [[ "$OS" == "darwin" ]]; then
  OS="macos"
elif [[ "$OS" == "linux" ]]; then
  OS="linux"
else
  echo "Unsupported operating system: $OS"
  exit 1
fi

# Base directory containing integration folders
BASE_DIR="integrations"

# Find all 'out' directories under integrations
find "$BASE_DIR" -type d -name out | while read -r out_dir; do
  echo "Running binaries in $out_dir"

  # Construct binary filename to select based on OS/ARCH
  BINARY_NAME="kyve-$OS-$ARCH"

  # Check if binary exists in the out_dir and is executable
  BINARY_PATH="$out_dir/$BINARY_NAME"

  echo "Executing $BINARY_PATH"
  "$BINARY_PATH" version
done