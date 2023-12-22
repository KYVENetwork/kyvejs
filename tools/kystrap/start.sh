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

# check if -y flag is present anywhere in the arguments
# in that case we want to run in quiet mode and only output errors and results
QUIET=false
for arg in "$@"
do
  case $arg in
    -y)
      QUIET=true
      break
      ;;
  esac
done

# Build docker image
if [ "$QUIET" = true ]; then
  docker build --quiet --tag kystrap "$KYSTRAP_DIR" 1>/dev/null || exit 1
else
  docker build --tag kystrap "$KYSTRAP_DIR" || exit 1
fi

# Run docker image
if [ "$QUIET" = true ]; then
  docker run \
    --rm                                  `# Remove container after run` \
    --user "$(id -u):$(id -g)"            `# Run as current user` \
    -v "$INTEGRATIONS_DIR":/app/out       `# Mount integrations folder` \
    kystrap $(echo "$@")                   # Pass all arguments to kystrap
else
  docker run \
    -it                                   `# Run in interactive mode` \
    --rm                                  `# Remove container after run` \
    --user "$(id -u):$(id -g)"            `# Run as current user` \
    -v "$INTEGRATIONS_DIR":/app/out       `# Mount integrations folder` \
    kystrap $(echo "$@")                   # Pass all arguments to kystrap
fi