#!/bin/sh

# Set INTEGRATIONS_DIR
INTEGRATIONS_DIR="$(pwd)"/integrations
if [ ! -d "$INTEGRATIONS_DIR" ]; then
  INTEGRATIONS_DIR="$(pwd)"/../../integrations
fi
if [ ! -d "$INTEGRATIONS_DIR" ]; then
  echo "Could not find INTEGRATIONS_DIR folder"
  exit 1
fi

# Set KYSTRAP_DIR
KYSTRAP_DIR="$(pwd)"/tools/kystrap
if [ ! -d "$KYSTRAP_DIR" ]; then
  KYSTRAP_DIR="$(pwd)"/../kystrap
fi

# Build docker image
docker build --tag kystrap "$KYSTRAP_DIR" || exit 1

# Run docker image
docker run \
  -it                                   `# Interactive mode` \
  --rm                                  `# Remove container after run` \
  --user "$(id -u):$(id -g)"            `# Run as current user` \
  -v "$INTEGRATIONS_DIR":/app/out       `# Mount integrations folder` \
  kystrap $(echo "$@")                   # Pass all arguments to kystrap