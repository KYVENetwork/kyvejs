#!/bin/sh

# Change to project root
if [ ! -d "$(pwd)"/e2etest ]; then
  cd ..
  if [ ! -d "$(pwd)"/e2etest ]; then
    echo "Could not find e2etest folder"
    exit 1
  fi
fi

# Build e2etest docker image
docker build e2etest -t e2etest

# Run docker image in privileged mode (required for docker-in-docker)
# Use this only for local testing!!!
docker run \
    --rm                                     `# Remove container after run` \
    --privileged                             `# Run in privileged mode` \
    -d                                       `# Run in detached mode` \
    --name e2etest                           `# Name the container` \
    -v ./integrations:/mnt/integrations:ro   `# Mount integrations folder` \
    -v ./tools:/tools:ro                     `# Mount tools folder` \
    -v ./common:/common:ro                   `# Mount common folder` \
    -v e2etestvol:/var/lib/docker            `# Mount docker volume (to cache images)` \
    e2etest

# Run e2e tests in docker container
# Make a copy of integrations folder in the container
docker exec -it e2etest sh -c \
  "rm -rf /integrations;
  mkdir /integrations;
  cp -r /mnt/integrations/* /integrations;
  ./e2etest -test.v -test.parallel 10 -test.timeout 30m"

# Stop docker container
docker stop e2etest