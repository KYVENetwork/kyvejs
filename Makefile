
# Get all modules by looking for subfolders with a Makefile and a go.mod file
MODULES := $(shell find . -mindepth 2 -maxdepth 4 -name Makefile -exec dirname {} \; | xargs -I {} sh -c 'test -f {}/go.mod && echo {}')

###############################################################################
###                          Formatting & Linting                           ###
###############################################################################

gofumpt_cmd=mvdan.cc/gofumpt
golangci_lint_cmd=github.com/golangci/golangci-lint/cmd/golangci-lint

# loop through all modules and run the format command
format:
	@for module in $(MODULES); do \
		make -C $$module format; echo ""; \
	done


# loop through all modules and run the lint command
lint:
	@for module in $(MODULES); do \
		make -C $$module lint; \
	done

###############################################################################
###    		                       Protobuf    		                        ###
###############################################################################

proto-gen:
	sh ./proto/proto-gen.sh

###############################################################################
###    		                       Kystrap    		                        ###
###############################################################################

bootstrap-integration:
	sh ./tools/kystrap/kystrap.sh create

test-integration:
	sh ./tools/kystrap/kystrap.sh test

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
