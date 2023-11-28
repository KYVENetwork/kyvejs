#!/bin/sh

# Build docker image
docker build --tag kystrap .

# Run docker image
docker run \
  -it                                   `# Interactive mode` \
  --rm                                  `# Remove container after run` \
  --user "$(id -u):$(id -g)"            `# Run as current user` \
  -v $(pwd)/../../integrations:/app/out `# Mount integrations folder` \
  kystrap $(echo "$@")                   # Pass all arguments to kystrap
