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
	@go run $(golangci_lint_cmd) run --timeout=10m
	@go run $(golangci_lint_cmd) run --timeout=10m testapi
	@echo "✅ Completed linting!"

###############################################################################
###      			                Tests            			            ###
###############################################################################

test:
	@echo "🎯 Running tests..."
	@go test -v -parallel 10 -timeout 30m ./...
	@echo "✅ Completed tests!"
