
# Get all modules by looking for subfolders with a Makefile and a go.mod file
MODULES := $(shell find . -mindepth 2 -maxdepth 4 -name Makefile -exec dirname {} \; | xargs -I {} sh -c 'test -f {}/go.mod && echo {}')
RESULT_FILE := /tmp/kyvejs-result

###############################################################################
###                          Formatting & Linting                           ###
###############################################################################

gofumpt_cmd=mvdan.cc/gofumpt
golangci_lint_cmd=github.com/golangci/golangci-lint/cmd/golangci-lint

# loop through all modules and run the format command (in parallel)
format:
	@rm -f $(RESULT_FILE)
	@set -e; for module in $(MODULES); do \
	  if make -C $$module -n format > /dev/null 2>&1; then \
	   { $(MAKE) $$module.format || echo $$? > $(RESULT_FILE); } & \
	  fi; \
 	done; wait; if [ -f $(RESULT_FILE) ]; then exit `cat $(RESULT_FILE)`; fi

%.format:
	@$(MAKE) -C $* format

# loop through all modules and run the lint command (in parallel)
lint:
	@rm -f $(RESULT_FILE)
	@set -e; for module in $(MODULES); do \
	  if make -C $$module -n lint > /dev/null 2>&1; then \
		{ $(MAKE) $$module.lint || echo $$? > $(RESULT_FILE); } & \
	  fi; \
	done; wait; if [ -f $(RESULT_FILE) ]; then exit `cat $(RESULT_FILE)`; fi

%.lint:
	@$(MAKE) -C $* lint

###############################################################################
###    		                       Protobuf    		                        ###
###############################################################################

proto-gen:
	sh ./proto/proto-gen.sh

###############################################################################
###    		                       Kystrap    		                        ###
###############################################################################

# Run kystrap to create a new integration
# Usage: make bootstrap-integration ARGS="--name my-integration -language go"
bootstrap-integration:
	sh ./tools/kystrap/kystrap.sh create $(ARGS)

test-integration:
	sh ./tools/kystrap/kystrap.sh test $(ARGS)

###############################################################################
### 						 	   Testing									###
###############################################################################

# Runs the e2e tests in a local environment
test-e2e:
	@echo "🧪 Running end-to-end tests..."
	@cd e2etest && go test -test.v -test.parallel 10 -test.timeout 30m ./...
	@echo "✅ Completed end-to-end tests!"

# Runs the e2e tests in a dind container (docker in docker)
# This is useful for running tests in a CI environment
test-e2e-dind:
	@echo "🧪 Running end-to-end tests (dind)..."
	@./e2etest/run-e2e-tests.sh
	@echo "✅ Completed end-to-end tests (dind)!"

###############################################################################
### 							 	Docker 							 		###
###############################################################################

# Builds the docker image for all modules (in parallel)
docker-image:
	@rm -f $(RESULT_FILE)
	@set -e; for module in $(MODULES); do \
	  if make -C $$module -n docker-image > /dev/null 2>&1; then \
		{ $(MAKE) $$module.docker-image || echo $$? > $(RESULT_FILE); } & \
	  fi; \
	done; wait; if [ -f $(RESULT_FILE) ]; then exit `cat $(RESULT_FILE)`; fi

%.docker-image:
	@$(MAKE) -C $* docker-image
