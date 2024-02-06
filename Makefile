
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
