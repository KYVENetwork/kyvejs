# Shortcut targets
default: docker-image

###############################################################################
# Both native and cross architecture builds are supported.
# The target architecture is select by setting the ARCH variable.
# When ARCH is undefined it is set to the detected host architecture.
# When ARCH differs from the host architecture a crossbuild will be performed.
ARCHES = amd64 armv7 arm64

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

# set the node architecture for pkg
ifeq ($(ARCH),amd64)
	NODE_ARCH=x64
endif
ifeq ($(ARCH),armv7)
	NODE_ARCH=armv7
endif
ifeq ($(ARCH),arm64)
	NODE_ARCH=arm64
endif

###############################################################################
DOCKERFILE ?= Dockerfile
VERSION ?= latest
DOCKER_IMAGE_NAME={{ .name }}
BINARY_NAME ?= kyve-$(NODE_ARCH)

###############################################################################
# Building the binary
###############################################################################

build:
	@echo "🏗️  Building binary..."
	yarn build && yarn run pkg --target latest-linux-$(NODE_ARCH) -o $(BINARY_NAME) package.json
	@echo "✅ Completed binary build!"

###############################################################################
# Building the image
###############################################################################

docker-image:
	@echo "🏗️  Building docker image..."
	DOCKER_BUILDKIT=1 docker build --platform linux/$(ARCH) -t $(DOCKER_IMAGE_NAME):$(VERSION) .
	@echo "✅ Completed docker image build!"

docker-run:
	docker run -it --rm -p 50051:50051 $(DOCKER_IMAGE_NAME):$(VERSION)