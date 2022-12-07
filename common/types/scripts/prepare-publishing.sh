#!/bin/bash
set -o errexit -o nounset -o pipefail
command -v shellcheck >/dev/null && shellcheck "$0"

DIRS="client lcd"

for dir in $DIRS; do
  rm -rf "$dir"
  cp -R "./dist/$dir" ./
done
