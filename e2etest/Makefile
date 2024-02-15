# Shortcut targets
default: docker-image

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
GO_VERSION := $(shell go version | cut -c 14- | cut -d' ' -f1 | cut -d'.' -f1,2)
DOCKERFILE ?= Dockerfile
VERSION ?= latest
DOCKER_IMAGE_NAME=kysor
BINARY_NAME ?= kysor-$(GOOS)-$(ARCH)
CGO_ENABLED=0

###############################################################################
###                          Formatting & Linting                           ###
###############################################################################

gofumpt_cmd=mvdan.cc/gofumpt
golangci_lint_cmd=github.com/golangci/golangci-lint/cmd/golangci-lint

format:
	@echo "📝 Running formatter..."
	@go run $(gofumpt_cmd) -l -w .
	@go run $(gofumpt_cmd) -l -w testapi
	@echo "✅ Completed formatting!"

lint:
	@echo "📝 Running linter..."
	@go run $(golangci_lint_cmd) run --timeout=10m --allow-parallel-runners
	@go run $(golangci_lint_cmd) run --timeout=10m testapi --allow-parallel-runners
	@echo "✅ Completed linting!"

###############################################################################
###      			                Tests            			            ###
###############################################################################

test:
	@echo "🧪 Running end-to-end tests..."
	@go test -v -parallel 10 -timeout 30m ./...
	@echo "✅ Completed end-to-end tests!"

###############################################################################
### 							 	Docker 							 		###
###############################################################################

docker-image:
	@echo "🏗️  Building docker image..."
	DOCKER_BUILDKIT=1 docker build --platform linux/$(ARCH) -t $(DOCKER_IMAGE_NAME):$(VERSION) .
	@echo "✅ Completed docker image build!"
