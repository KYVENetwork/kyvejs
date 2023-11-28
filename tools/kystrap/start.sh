#!/bin/bash

docker build --tag kystrap .
docker run -it --rm --user "$(id -u):$(id -g)" -v $(pwd)/../../integrations:/app/out kystrap $(echo "$@")
