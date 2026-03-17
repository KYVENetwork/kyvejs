# Development Guide

This guide covers local development setup, testing, debugging, and troubleshooting for kyvejs. Whether you're fixing bugs, adding features, or creating new runtimes, this guide will help you get started.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Initial Setup](#initial-setup)
- [Development Environment](#development-environment)
- [Building Packages](#building-packages)
- [Running Tests](#running-tests)
- [Local Protocol Node Testing](#local-protocol-node-testing)
- [Debugging](#debugging)
- [Common Tasks](#common-tasks)
- [Troubleshooting](#troubleshooting)
- [IDE Setup](#ide-setup)
- [Performance Tips](#performance-tips)

## Prerequisites

### Required Software

- **Node.js**: v16.x or later (v18.x recommended for best compatibility)
  - Check version: `node --version`
  - Install via [nvm](https://github.com/nvm-sh/nvm) for easy version management

- **Yarn**: v1.22.x (Classic Yarn, not Yarn Berry)
  - Check version: `yarn --version`
  - Install: `npm install -g yarn`

- **Git**: Latest stable version
  - Check version: `git --version`

- **TypeScript**: Included as dev dependency
  - The project uses TypeScript v4.7+

### Recommended Software

- **VS Code**: With TypeScript and ESLint extensions
- **Docker**: For running local KYVE chain (optional but recommended)
- **jq**: For JSON parsing in shell scripts (`brew install jq` on macOS)

### Installation

**Node.js (via nvm - recommended):**
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
nvm install 18
nvm use 18
nvm alias default 18
```

**Yarn:**
```bash
npm install -g yarn
```

**Verify installations:**
```bash
node --version   # Should output v16.x or later
yarn --version   # Should output 1.22.x
git --version    # Should output 2.x or later
```

## Initial Setup

### 1. Clone Repository

```bash
git clone git@github.com:KYVENetwork/kyvejs.git
cd kyvejs
```

Or if contributing, clone your fork:
```bash
git clone git@github.com:YOUR_USERNAME/kyvejs.git
cd kyvejs
git remote add upstream git@github.com:KYVENetwork/kyvejs.git
```

### 2. Install Dependencies

```bash
# Install all dependencies for all packages
yarn install
```

This command:
- Installs root workspace dependencies
- Installs dependencies for all packages in `common/`, `integrations/`, and `tools/`
- Links local packages together (e.g., `@kyvejs/protocol` links to local `@kyvejs/sdk`)

**Expected output:**
```
yarn install v1.22.x
[1/4] Resolving packages...
[2/4] Fetching packages...
[3/4] Linking dependencies...
[4/4] Building fresh packages...
Done in 45.21s.
```

### 3. Build All Packages

```bash
# Build all packages in dependency order
yarn setup
```

This runs:
1. `lerna clean` - Removes `dist/`, `dist-cjs/`, and `out/` directories
2. `yarn install` - Ensures dependencies are up to date
3. `lerna run build` - Builds all packages respecting dependency order

**Build order:**
1. `@kyvejs/types` (no dependencies)
2. `@kyvejs/coins` (no dependencies)
3. `@kyvejs/sdk` (depends on types)
4. `@kyvejs/protocol` (depends on sdk, types, coins)
5. Integrations (depend on protocol)
6. `@kyve/kysor` (depends on types)

**Expected output:**
```
lerna success run Ran npm script 'build' in 9 packages:
lerna success - @kyvejs/coins
lerna success - @kyvejs/types
lerna success - @kyvejs/sdk
lerna success - @kyvejs/protocol
lerna success - @kyvejs/tendermint
lerna success - @kyvejs/evm
lerna success - @kyvejs/avail
lerna success - @kyvejs/ethereum-blobs
lerna success - @kyve/kysor
```

### 4. Verify Setup

```bash
# Run all tests
yarn test

# Check linting
yarn lint

# Format code
yarn fmt
```

If all commands succeed, your development environment is ready!

## Development Environment

### Environment Variables

Create `.env` files in integration directories for local testing. These files are gitignored and won't be committed.

**integrations/evm/.env:**
```bash
# EVM node endpoint
KYVEJS_EVM_RPC=http://localhost:8545

# KYVE chain endpoints (testnet)
KYVE_RPC=https://rpc.korellia.kyve.network
KYVE_REST=https://api.korellia.kyve.network

# Validator configuration
MNEMONIC="your test mnemonic here (24 words)"
VALACCOUNT=kyve1yourvalaccountaddress

# Storage provider (Arweave wallet)
ARWEAVE_WALLET='{"kty":"RSA",...}'  # Full Arweave wallet JSON

# Logging
LOG_LEVEL=debug
```

**integrations/tendermint/.env:**
```bash
# Tendermint node endpoint
KYVEJS_TENDERMINT_RPC=http://localhost:26657

# KYVE chain endpoints
KYVE_RPC=https://rpc.korellia.kyve.network
KYVE_REST=https://api.korellia.kyve.network

# Validator configuration
MNEMONIC="your test mnemonic here"
VALACCOUNT=kyve1yourvalaccountaddress

# Storage provider
ARWEAVE_WALLET='{"kty":"RSA",...}'

# Logging
LOG_LEVEL=debug
```

### Local KYVE Chain (Optional)

For full local testing without testnet dependency, run a local KYVE chain:

```bash
# Clone KYVE chain
git clone https://github.com/KYVENetwork/chain.git
cd chain

# Build chain binary
make install

# Start local chain with default accounts
./scripts/local-chain.sh
```

This starts:
- KYVE chain on `localhost:26657` (RPC)
- REST API on `localhost:1317`
- Pre-funded test accounts

Update your `.env` files to use local endpoints:
```bash
KYVE_RPC=http://localhost:26657
KYVE_REST=http://localhost:1317
```

## Building Packages

### Build All Packages

```bash
# From root directory
yarn build
```

Uses Lerna to build all packages in dependency order.

### Build Specific Package

```bash
# Method 1: Navigate to package
cd common/protocol
yarn build

# Method 2: Use yarn workspace from root
yarn workspace @kyvejs/protocol build
```

### Build Integration Binaries

Integrations can be compiled to standalone binaries for distribution:

```bash
# Navigate to integration
cd integrations/evm
yarn build:binaries
```

**Build steps:**
1. `yarn build` - Compiles TypeScript to ESM (`dist/`)
2. `yarn transpile` - Bundles ESM to CommonJS (`dist-cjs/bundle.js`)
3. `pkg` - Compiles CommonJS to platform binaries (`out/`)

**Output binaries:**
```
out/
├── kyve-linux-arm64
├── kyve-linux-x64
├── kyve-macos-arm64
└── kyve-macos-x64
```

**Verify binary:**
```bash
./out/kyve-linux-x64 version
# Output: @kyvejs/evm@1.1.0-beta.20
```

### Clean Build Artifacts

```bash
# Clean all packages
yarn clean

# Clean specific package
cd common/protocol
yarn clean  # or rimraf dist dist-cjs out
```

### Watch Mode

For active development with auto-rebuild:

```bash
cd common/protocol
tsc --watch
```

Opens a TypeScript compiler in watch mode. Rebuilds on file changes.

## Running Tests

### Test All Packages

```bash
# From root
yarn test
```

Runs tests for all packages using Jest.

### Test Specific Package

```bash
# Method 1: Navigate to package
cd common/protocol
yarn test

# Method 2: Use yarn workspace
yarn workspace @kyvejs/protocol test

# Method 3: Use Lerna
lerna run test --scope=@kyvejs/protocol
```

### Test with Coverage

```bash
# All packages
yarn test --coverage

# Specific package
cd common/protocol
yarn test --coverage

# View coverage report
open coverage/lcov-report/index.html
```

### Test Watch Mode

```bash
cd common/protocol
yarn test --watch
```

Watches for file changes and reruns relevant tests.

### Test Specific File

```bash
cd common/protocol
yarn test src/validator.test.ts
```

### Test with Filters

```bash
# Run tests matching pattern
yarn test --testNamePattern="validate bundle"

# Run tests in specific file matching pattern
yarn test validator.test.ts --testNamePattern="should vote valid"
```

### Debug Tests

```bash
# Run tests with Node debugger
node --inspect-brk node_modules/.bin/jest --runInBand
```

Then attach your IDE debugger to the Node process.

## Local Protocol Node Testing

### Testing a Runtime Locally

Test integrations against real data sources:

1. **Set up data source**
   ```bash
   # Example: Run local Ethereum node
   geth --http --http.api eth,net,web3
   # Waits for sync...
   ```

2. **Build the integration**
   ```bash
   cd integrations/evm
   yarn build
   ```

3. **Configure environment**
   ```bash
   # Create or edit .env file
   cat > .env << EOF
   KYVEJS_EVM_RPC=http://localhost:8545
   KYVE_RPC=https://rpc.korellia.kyve.network
   KYVE_REST=https://api.korellia.kyve.network
   MNEMONIC="your test mnemonic"
   VALACCOUNT=kyve1youraddress
   LOG_LEVEL=debug
   EOF
   ```

4. **Get test tokens**
   - Request testnet KYVE tokens from faucet
   - Create valaccount on testnet pool
   - Get test Arweave tokens (or use free tier)

5. **Run protocol node**
   ```bash
   # From integration directory
   node dist/src/index.js
   ```

6. **Monitor logs**
   ```
   [INFO] Fetching data item: key=12345 pool=0
   [INFO] Cached data item: key=12345 size=1024
   [INFO] Claiming uploader role: pool=0 round=100
   [INFO] Creating bundle proposal: from=12000 to=12100
   [INFO] Uploading bundle to storage: size=1.2MB
   [INFO] Submitted bundle proposal: storage_id=abc123
   [INFO] Validating bundle proposal: storage_id=def456
   [INFO] Voted on bundle: vote=VALID
   ```

### Testing with KYSOR

KYSOR manages protocol nodes in production. Test it locally:

1. **Build KYSOR**
   ```bash
   cd tools/kysor
   yarn build
   ```

2. **Initialize KYSOR**
   ```bash
   ./dist/index.js init \
     --chain-id korellia \
     --rpc https://rpc.korellia.kyve.network \
     --rest https://api.korellia.kyve.network
   ```

3. **Create valaccount**
   ```bash
   ./dist/index.js valaccounts create \
     --name test-pool \
     --pool 0 \
     --storage-priv "$(cat arweave.json)" \
     --verbose
   ```

4. **Start KYSOR**
   ```bash
   ./dist/index.js start --valaccount test-pool
   ```

KYSOR will:
- Download runtime binary from pool config
- Start protocol node process
- Monitor and restart on failures
- Handle upgrades automatically

## Debugging

### VS Code Debug Configuration

Create `.vscode/launch.json`:

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Debug EVM Runtime",
      "program": "${workspaceFolder}/integrations/evm/dist/src/index.js",
      "preLaunchTask": "npm: build",
      "env": {
        "KYVEJS_EVM_RPC": "http://localhost:8545",
        "KYVE_RPC": "https://rpc.korellia.kyve.network",
        "KYVE_REST": "https://api.korellia.kyve.network",
        "LOG_LEVEL": "debug"
      },
      "outFiles": ["${workspaceFolder}/integrations/evm/dist/**/*.js"],
      "sourceMaps": true,
      "console": "integratedTerminal"
    },
    {
      "type": "node",
      "request": "launch",
      "name": "Debug Protocol Tests",
      "program": "${workspaceFolder}/node_modules/.bin/jest",
      "args": [
        "--runInBand",
        "--no-cache",
        "${fileBasenameNoExtension}"
      ],
      "cwd": "${workspaceFolder}/common/protocol",
      "console": "integratedTerminal",
      "internalConsoleOptions": "neverOpen"
    },
    {
      "type": "node",
      "request": "launch",
      "name": "Debug Current Test File",
      "program": "${workspaceFolder}/node_modules/.bin/jest",
      "args": [
        "--runInBand",
        "${file}"
      ],
      "console": "integratedTerminal",
      "internalConsoleOptions": "neverOpen"
    }
  ]
}
```

### Debug Logging

Enable verbose logging:

```bash
# Set log level
export LOG_LEVEL=debug

# Run protocol node
node dist/src/index.js
```

**Log levels** (from most to least verbose):
- `trace` - Very detailed trace information
- `debug` - Detailed debug information
- `info` - General informational messages (default)
- `warn` - Warning messages
- `error` - Error messages
- `fatal` - Critical errors only

### Common Debug Scenarios

**Debug data fetching:**
```typescript
async getDataItem(v: Validator, key: string): Promise<DataItem> {
  v.logger.debug('Fetching data item', {
    key,
    rpc: this.config.rpc,
    finality: this.config.finality
  });

  const data = await this.fetchFromSource(key);

  v.logger.debug('Fetched data item', {
    key,
    dataSize: JSON.stringify(data).length,
    hasValue: !!data
  });

  return { key, value: data };
}
```

**Debug validation:**
```typescript
async validateDataItem(v: Validator, proposed: DataItem, validation: DataItem): Promise<number> {
  const proposedHash = sha256(JSON.stringify(proposed));
  const validationHash = sha256(JSON.stringify(validation));

  v.logger.debug('Validating data item', {
    key: proposed.key,
    proposedHash,
    validationHash,
    match: proposedHash === validationHash
  });

  if (proposedHash === validationHash) {
    return VOTE.VOTE_TYPE_VALID;
  }

  v.logger.warn('Validation mismatch', {
    key: proposed.key,
    proposedSize: JSON.stringify(proposed).length,
    validationSize: JSON.stringify(validation).length
  });

  return VOTE.VOTE_TYPE_INVALID;
}
```

**Debug network requests:**
```typescript
try {
  const response = await axios.get(url);
  v.logger.debug('HTTP request succeeded', { url, status: response.status });
  return response.data;
} catch (error) {
  v.logger.error('HTTP request failed', {
    url,
    error: error.message,
    code: error.code
  });
  throw error;
}
```

## Common Tasks

### Adding a Dependency

```bash
# Add to specific package
cd common/protocol
yarn add axios

# Add as dev dependency
yarn add -D @types/axios

# From root (use workspace)
yarn workspace @kyvejs/protocol add axios

# Add to multiple packages
lerna add axios --scope=@kyvejs/{protocol,evm}
```

### Updating Dependencies

```bash
# Update all dependencies
yarn upgrade

# Update specific dependency
yarn upgrade axios

# Interactive upgrade
yarn upgrade-interactive

# Update to latest (including major versions)
yarn upgrade-interactive --latest
```

### Generating Types from Protos

```bash
cd common/types

# Generate types
yarn generate

# Build generated types
yarn build
```

This uses Telescope to generate TypeScript types from Protocol Buffer definitions.

### Running Linter

```bash
# Check all packages
yarn lint

# Fix auto-fixable issues
yarn lint:fix

# Check specific package
cd common/protocol
yarn lint

# Lint specific file
eslint src/validator.ts
```

### Formatting Code

```bash
# Format all files
yarn fmt

# Check formatting (CI mode)
yarn fmt --check

# Format specific package
cd common/protocol
yarn format

# Format specific file
prettier --write src/validator.ts
```

### Publishing (Maintainers Only)

```bash
# Version packages (creates tags)
yarn lerna version

# Publish to npm
yarn lerna publish from-package

# Publish with dist-tag
yarn lerna publish from-package --dist-tag beta
```

## Troubleshooting

### Build Failures

**Issue**: `error TS2307: Cannot find module '@kyvejs/protocol'`

**Cause**: Package dependencies not built

**Solution**:
```bash
# Clean and rebuild all
yarn clean
yarn setup

# Or build dependencies first
cd common/protocol
yarn build
cd ../../integrations/evm
yarn build
```

**Issue**: `error TS6059: File is not under 'rootDir'`

**Cause**: TypeScript configuration issue

**Solution**: Check `tsconfig.json`:
```json
{
  "compilerOptions": {
    "rootDir": "./src",
    "outDir": "./dist"
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist", "test"]
}
```

**Issue**: `Cannot find name 'Buffer'`

**Cause**: Missing Node.js type definitions

**Solution**:
```bash
yarn add -D @types/node
```

### Test Failures

**Issue**: Tests fail with module resolution errors

**Solution**:
```bash
# Rebuild packages
yarn build

# Clear Jest cache
yarn test --clearCache

# Run tests again
yarn test
```

**Issue**: Tests timeout

**Cause**: Async operations taking too long

**Solution**: Increase timeout in test file:
```typescript
jest.setTimeout(30000); // 30 seconds

// Or per test
it('should validate bundle', async () => {
  // ...
}, 30000);
```

**Issue**: Mock functions not working

**Cause**: Jest configuration issue

**Solution**: Check `jest.config.js`:
```javascript
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  clearMocks: true,
  resetMocks: true,
};
```

### Runtime Execution Issues

**Issue**: `Cannot find module '@kyvejs/protocol'`

**Cause**: Protocol package not built

**Solution**:
```bash
cd common/protocol
yarn build
cd ../../integrations/evm
yarn build
```

**Issue**: `RPC endpoint not responding`

**Cause**: Data source node not running or endpoint incorrect

**Solution**:
- Verify node is running: `curl http://localhost:8545`
- Check endpoint in config or environment variable
- Try alternative endpoint

**Issue**: `Storage balance insufficient`

**Cause**: Arweave wallet has no funds

**Solution**:
- Get testnet AR from faucet
- Check wallet balance
- Verify wallet file is correct format

**Issue**: `Finality not reached yet`

**Cause**: Requested block height exceeds finalized height

**Solution**: This is expected behavior. Runtime will wait and retry.

### Lerna Issues

**Issue**: `lerna: command not found`

**Cause**: Lerna not installed

**Solution**:
```bash
yarn install  # Installs Lerna as dev dependency
```

**Issue**: Lerna not detecting changes

**Cause**: Git working tree is dirty

**Solution**:
```bash
# Commit or stash changes
git add .
git commit -m "wip"

# Or force rebuild
lerna run build --force-publish
```

## IDE Setup

### VS Code

**Recommended Extensions:**
- ESLint (`dbaeumer.vscode-eslint`)
- Prettier (`esbenp.prettier-vscode`)
- TypeScript (`ms-vscode.vscode-typescript-next`)
- Jest (`Orta.vscode-jest`)
- GitLens (`eamodio.gitlens`)
- Error Lens (`usernamehw.errorlens`)

**Workspace Settings** (`.vscode/settings.json`):
```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "typescript.tsdk": "node_modules/typescript/lib",
  "typescript.enablePromptUseWorkspaceTsdk": true,
  "eslint.workingDirectories": [
    "common/protocol",
    "common/sdk",
    "integrations/evm",
    "integrations/avail"
  ],
  "files.exclude": {
    "**/node_modules": true,
    "**/dist": true,
    "**/dist-cjs": true,
    "**/out": true,
    "**/.DS_Store": true
  },
  "search.exclude": {
    "**/node_modules": true,
    "**/dist": true,
    "**/dist-cjs": true,
    "**/out": true
  },
  "jest.autoRun": "off"
}
```

### IntelliJ IDEA / WebStorm

**Configuration:**
1. **TypeScript**: Preferences → Languages → TypeScript → Enable service
2. **ESLint**: Preferences → Languages → JavaScript → Code Quality Tools → ESLint → Automatic
3. **Prettier**: Preferences → Languages → JavaScript → Prettier → On save
4. **Jest**: Run → Edit Configurations → Add Jest configuration

## Performance Tips

### Build Performance

```bash
# Use parallel builds (faster on multi-core systems)
lerna run build --concurrency 4

# Build only changed packages
lerna run build --since origin/main

# Skip tests during build
lerna run build --ignore-scripts
```

### Test Performance

```bash
# Run tests in parallel
yarn test --maxWorkers=4

# Run only changed tests
yarn test --onlyChanged

# Skip slow tests
yarn test --testPathIgnorePatterns=e2e
```

### Development Workflow

```bash
# Use watch mode for active development
cd common/protocol
tsc --watch &
yarn test --watch

# Use nodemon for runtime testing
nodemon --watch dist dist/src/index.js
```

## Additional Resources

- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Jest Documentation](https://jestjs.io/docs/getting-started)
- [Lerna Documentation](https://lerna.js.org/)
- [KYVE Documentation](https://docs.kyve.network/)
- [Contributing Guide](CONTRIBUTING.md)
- [Architecture Overview](ARCHITECTURE.md)

## Getting Help

If you encounter issues not covered here:

1. Check existing [GitHub Issues](https://github.com/KYVENetwork/kyvejs/issues)
2. Ask in [Discord #dev-support](https://discord.com/invite/kyve)
3. Create a new issue with:
   - Steps to reproduce
   - Error messages and logs
   - Environment details (OS, Node version, etc.)
   - What you've already tried

Happy developing! 🚀
