# Shortcut targets
default: image

###############################################################################
# Both native and cross architecture builds are supported.
# The target architecture is select by setting the ARCH variable.
# When ARCH is undefined it is set to the detected host architecture.
# When ARCH differs from the host architecture a crossbuild will be performed.
ARCHES = amd64 armv7 arm64

GOOS ?= $(shell uname | tr '[:upper:]' '[:lower:]')

# BUILDARCH is the host architecture
# ARCH is the target architecture
# we need to keep track of them separately
BUILDARCH ?= $(shell uname -m)

# canonicalized names for host architecture
ifeq ($(BUILDARCH),aarch64)
        BUILDARCH=arm64
endif
ifeq ($(BUILDARCH),x86_64)
        BUILDARCH=amd64
endif
ifeq ($(BUILDARCH),armv7l)
        BUILDARCH=armv7
endif

# unless otherwise set, I am building for my own architecture, i.e. not cross-compiling
ARCH ?= $(BUILDARCH)

###############################################################################
DOCKERFILE ?= Dockerfile
VERSION ?= latest
DOCKER_IMAGE_NAME=tendermint-go
BINARY_NAME ?= kyve-$(GOOS)-$(ARCH)
CGO_ENABLED=0

###############################################################################
# Building the binary
###############################################################################

build:
	go build -o cmd/$(BINARY_NAME) ./pkg

###############################################################################
# Building the image
###############################################################################


build-image-buildx:
	docker buildx build --platform linux/$(ARCH) -t $(DOCKER_IMAGE_NAME):$(VERSION) .

build-image:
	docker build -t $(DOCKER_IMAGE_NAME):$(VERSION) .

run-container:
	docker run -it --rm -p 50051:50051 $(DOCKER_IMAGE_NAME):$(VERSION)