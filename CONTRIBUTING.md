# Contributing to kyvejs

Thank you for your interest in contributing to kyvejs! This document provides guidelines and instructions for contributing to the KYVE protocol node implementation.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Project Structure](#project-structure)
- [Coding Standards](#coding-standards)
- [Testing](#testing)
- [Submitting Changes](#submitting-changes)
- [Creating New Runtimes](#creating-new-runtimes)
- [Release Process](#release-process)

## Code of Conduct

We are committed to providing a welcoming and inclusive environment. All contributors are expected to:

- Be respectful and constructive in all interactions
- Focus on what is best for the community
- Show empathy towards other community members
- Accept constructive criticism gracefully
- Welcome newcomers and help them get started

## Getting Started

### Prerequisites

- **Node.js**: v16.x or later (v18.x recommended)
- **Yarn**: v1.22.x
- **Git**: Latest version
- **TypeScript**: Included as dev dependency (v4.7+)

### Initial Setup

1. **Fork the repository**
   ```bash
   # Fork on GitHub, then clone your fork
   git clone git@github.com:YOUR_USERNAME/kyvejs.git
   cd kyvejs
   ```

2. **Add upstream remote**
   ```bash
   git remote add upstream git@github.com:KYVENetwork/kyvejs.git
   ```

3. **Install dependencies**
   ```bash
   yarn install
   ```

4. **Build all packages**
   ```bash
   yarn setup
   ```

   This runs:
   - `lerna clean` - Removes old build artifacts
   - `yarn install` - Installs dependencies
   - `lerna run build` - Builds all packages

5. **Verify setup**
   ```bash
   yarn test
   ```

## Development Workflow

### Branch Strategy

- `main` - Stable release branch, protected
- `feat/*` - Feature branches (e.g., `feat/add-bitcoin-runtime`)
- `fix/*` - Bug fix branches (e.g., `fix/validation-error`)
- `docs/*` - Documentation branches (e.g., `docs/improve-readme`)

### Creating a Branch

```bash
# Ensure you're on main and up to date
git checkout main
git pull upstream main

# Create your feature branch
git checkout -b feat/my-new-feature
```

### Making Changes

1. **Make your changes** in the appropriate package(s)

2. **Build affected packages**
   ```bash
   # Build specific package
   cd common/protocol
   yarn build

   # Or build all packages
   yarn build
   ```

3. **Test your changes**
   ```bash
   # Run tests for specific package
   cd common/protocol
   yarn test

   # Or run all tests
   yarn test
   ```

4. **Lint and format**
   ```bash
   yarn lint:fix
   yarn fmt
   ```

### Keeping Your Branch Updated

```bash
# Fetch latest changes
git fetch upstream

# Rebase your branch
git rebase upstream/main
```

If you encounter conflicts:
```bash
# Resolve conflicts in your editor
# Then continue rebase
git add .
git rebase --continue
```

## Project Structure

### Monorepo Organization

```
kyvejs/
├── common/
│   ├── protocol/       # Core protocol validator
│   ├── sdk/            # KYVE blockchain SDK
│   ├── types/          # Generated TypeScript types
│   └── coins/          # Coin arithmetic utilities
├── integrations/
│   ├── tendermint/     # Tendermint runtime
│   ├── evm/            # EVM runtime
│   ├── avail/          # Avail runtime
│   └── ...             # Other runtimes
├── tools/
│   └── kysor/          # Protocol node manager
├── .github/            # CI/CD workflows
├── scripts/            # Build and utility scripts
├── lerna.json          # Lerna configuration
└── package.json        # Root package config
```

### Package Dependencies

- **protocol** depends on: sdk, types, coins
- **integrations** depend on: protocol
- **sdk** depends on: types
- **types** has no dependencies
- **coins** has no dependencies
- **kysor** depends on: types

Always build packages in dependency order (Lerna handles this automatically).

### Key Directories

Each package follows this structure:
```
package/
├── src/                # TypeScript source
├── dist/               # Compiled JavaScript (ESM)
├── dist-cjs/           # Bundled CommonJS (for binaries)
├── out/                # Compiled binaries (integrations only)
├── test/               # Test files
├── package.json        # Package configuration
├── tsconfig.json       # TypeScript configuration
└── README.md           # Package documentation
```

## Coding Standards

### TypeScript Style

- **Indentation**: 2 spaces (no tabs)
- **Quotes**: Single quotes for strings
- **Semicolons**: Required at end of statements
- **Line length**: 100 characters max (soft limit)
- **Trailing commas**: Use in multi-line objects/arrays

### Naming Conventions

```typescript
// Classes: PascalCase
class BundleProposal {}

// Interfaces: PascalCase with I prefix
interface IRuntime {}

// Functions/methods: camelCase
function validateBundle() {}

// Constants: SCREAMING_SNAKE_CASE
const MAX_BUNDLE_SIZE = 100;

// Private members: _ prefix
class Validator {
  private _cache: Cache;
}

// Type aliases: PascalCase
type DataItem = { key: string; value: any };

// Enum members: SCREAMING_SNAKE_CASE
enum VoteType {
  VOTE_TYPE_VALID = 1,
  VOTE_TYPE_INVALID = 2,
  VOTE_TYPE_ABSTAIN = 3,
}
```

### Code Organization

```typescript
// 1. Imports (grouped and sorted)
import { external } from 'external-package';
import { another } from 'another-package';

import { local } from './local-file';
import { other } from './other-file';

// 2. Constants
const CONSTANT = 'value';

// 3. Interfaces/Types
interface Config {
  // ...
}

// 4. Class/Function implementation
export class MyClass {
  // 4a. Properties
  private _prop: string;
  public config: Config;

  // 4b. Constructor
  constructor(config: Config) {
    this.config = config;
  }

  // 4c. Public methods
  public method(): void {}

  // 4d. Private methods
  private _helper(): void {}
}
```

### Comments

Use JSDoc for public APIs:

```typescript
/**
 * Validates a bundle proposal against fresh data from the source.
 *
 * @param proposal - The bundle proposal to validate
 * @param runtime - Runtime instance for data fetching
 * @returns Vote type (VALID, INVALID, or ABSTAIN)
 * @throws Error if validation cannot be performed
 */
async validateBundleProposal(
  proposal: BundleProposal,
  runtime: IRuntime
): Promise<VoteType> {
  // Implementation
}
```

Use inline comments for complex logic:

```typescript
// Remove non-deterministic fields to prevent false INVALID votes
delete validationDataItem.value.block.header.extension.V3.commitment;
delete proposedDataItem.value.block.header.extension.V3.commitment;
```

### Error Handling

Always provide context in errors:

```typescript
// Good
throw new Error(`Failed to fetch data item at key ${key}: ${error.message}`);

// Bad
throw new Error('Fetch failed');
```

Use try-catch for expected failures:

```typescript
try {
  await uploadToStorage(bundle);
} catch (error) {
  this.logger.error('Storage upload failed', { error, bundleSize });
  throw error;
}
```

## Testing

### Test Structure

- **Unit tests**: `*.test.ts` alongside source files
- **Integration tests**: `test/integration/` directory
- **E2E tests**: `test/e2e/` directory (when available)

### Writing Tests

Use Jest for all testing:

```typescript
import { describe, it, expect, beforeEach } from '@jest/globals';

describe('BundleValidator', () => {
  let validator: BundleValidator;

  beforeEach(() => {
    validator = new BundleValidator();
  });

  describe('validateDataItem', () => {
    it('should return VALID for matching data items', async () => {
      const result = await validator.validateDataItem(item1, item2);
      expect(result).toBe(VOTE.VOTE_TYPE_VALID);
    });

    it('should return INVALID for mismatched data items', async () => {
      const result = await validator.validateDataItem(item1, item3);
      expect(result).toBe(VOTE.VOTE_TYPE_INVALID);
    });

    it('should handle null values gracefully', async () => {
      const nullItem = { key: '1', value: null };
      await expect(
        validator.validateDataItem(item1, nullItem)
      ).rejects.toThrow();
    });
  });
});
```

### Running Tests

```bash
# All tests
yarn test

# Specific package
cd common/protocol
yarn test

# Watch mode
yarn test --watch

# Coverage
yarn test --coverage

# Specific test file
yarn test src/validator.test.ts
```

### Test Coverage

Aim for:
- **Statements**: >80%
- **Branches**: >75%
- **Functions**: >80%
- **Lines**: >80%

Critical code (validation logic, economic calculations) should have >90% coverage.

## Submitting Changes

### Commit Messages

We use [Conventional Commits](https://www.conventionalcommits.org/).

**Format:**
```
<type>(<scope>): <subject>

<body>

<footer>
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation only
- `style`: Code style (formatting, semicolons, etc.)
- `refactor`: Code refactoring (no functional changes)
- `perf`: Performance improvements
- `test`: Adding or updating tests
- `chore`: Maintenance tasks (dependencies, build config)

**Examples:**

```
feat(protocol): add bundle compression support

Implements Gzip compression for bundles to reduce storage costs.
Compression is configurable per pool via compressionId parameter.

Closes #123
```

```
fix(evm): handle null transaction receipts correctly

Fixes crash when transaction receipts are null for pending blocks.
Now correctly waits for finality before processing receipts.

Fixes #456
```

```
docs(readme): add architecture diagrams

Adds Mermaid diagrams showing data flow and component relationships.
Improves understanding of system architecture for new developers.
```

### Creating a Pull Request

1. **Push your branch**
   ```bash
   git push origin feat/my-new-feature
   ```

2. **Open PR on GitHub**
   - Go to https://github.com/KYVENetwork/kyvejs
   - Click "New Pull Request"
   - Select your fork and branch
   - Fill out the PR template

3. **PR Checklist**
   - [ ] Code follows style guidelines
   - [ ] Self-review completed
   - [ ] Comments added for complex logic
   - [ ] Documentation updated (if needed)
   - [ ] Tests added/updated
   - [ ] All tests passing
   - [ ] Conventional commit messages used
   - [ ] PR description explains changes and motivation

### PR Review Process

1. **Automated checks** must pass:
   - Linting (`yarn lint`)
   - Type checking (`tsc --noEmit`)
   - Unit tests (`yarn test`)
   - Build success (`yarn build`)

2. **Code review** by maintainers:
   - Code quality and maintainability
   - Test coverage adequacy
   - Documentation completeness
   - Breaking changes assessment
   - Security implications

3. **Approval and merge**:
   - At least one maintainer approval required
   - All CI checks must pass
   - Squash and merge to main (preserves clean history)

## Creating New Runtimes

### Runtime Development Guide

Creating a new runtime to support a different data source:

1. **Create package directory**
   ```bash
   mkdir integrations/my-runtime
   cd integrations/my-runtime
   ```

2. **Initialize package.json**
   ```json
   {
     "name": "@kyvejs/my-runtime",
     "version": "1.0.0-beta.1",
     "license": "MIT",
     "scripts": {
       "build": "rimraf dist && tsc",
       "transpile": "rimraf dist-cjs && webpack --config webpack.config.js",
       "build:binaries": "yarn build && yarn transpile && rimraf out && pkg --no-bytecode --public-packages '*' --compress GZip --output out/kyve package.json"
     },
     "dependencies": {
       "@kyvejs/protocol": "^1.6.0"
     }
   }
   ```

3. **Create tsconfig.json**
   ```json
   {
     "extends": "../../tsconfig.json",
     "compilerOptions": {
       "outDir": "./dist",
       "rootDir": "./src"
     },
     "include": ["src/**/*"]
   }
   ```

4. **Implement IRuntime interface**
   ```typescript
   // src/runtime.ts
   import { IRuntime, Validator, DataItem, VOTE } from "@kyvejs/protocol";

   interface MyConfig {
     rpc: string;
     // ... other config fields
   }

   export default class MyRuntime implements IRuntime {
     name = "@kyvejs/my-runtime";
     version = "1.0.0-beta.1";
     config!: MyConfig;

     async validateSetConfig(rawConfig: string): Promise<void> {
       this.config = JSON.parse(rawConfig);

       if (!this.config.rpc) {
         throw new Error('Config must include "rpc" field');
       }

       // Override with environment variable if present
       if (process.env.KYVEJS_MY_RUNTIME_RPC) {
         this.config.rpc = process.env.KYVEJS_MY_RUNTIME_RPC;
       }
     }

     async getDataItem(v: Validator, key: string): Promise<DataItem> {
       // Fetch data from source
       const data = await fetchFromSource(this.config.rpc, key);
       return { key, value: data };
     }

     async prevalidateDataItem(v: Validator, item: DataItem): Promise<boolean> {
       // Quick validation before caching
       return item.value !== null;
     }

     async transformDataItem(v: Validator, item: DataItem): Promise<DataItem> {
       // Transform for determinism (remove non-deterministic fields)
       // If no transformation needed, return item as-is
       return item;
     }

     async validateDataItem(
       v: Validator,
       proposedItem: DataItem,
       validationItem: DataItem
     ): Promise<number> {
       // Deterministic comparison
       if (JSON.stringify(proposedItem) === JSON.stringify(validationItem)) {
         return VOTE.VOTE_TYPE_VALID;
       }
       return VOTE.VOTE_TYPE_INVALID;
     }

     async summarizeDataBundle(v: Validator, bundle: DataItem[]): Promise<string> {
       // Create merkle root or other summary
       const hashes = bundle.map(item => hash(JSON.stringify(item)));
       const merkleRoot = generateMerkleRoot(hashes);
       return JSON.stringify({ merkle_root: merkleRoot });
     }

     async nextKey(v: Validator, key: string): Promise<string> {
       // Calculate next key (e.g., increment block height)
       return (parseInt(key) + 1).toString();
     }
   }
   ```

5. **Create entry point**
   ```typescript
   // src/index.ts
   import { Validator } from "@kyvejs/protocol";
   import MyRuntime from "./runtime";

   new Validator(new MyRuntime()).bootstrap();
   ```

6. **Add comprehensive README**
   - See [integrations/evm/README.md](integrations/evm/README.md) for template
   - Include: introduction, use cases, architecture, config, installation, usage

7. **Add tests**
   ```typescript
   // test/runtime.test.ts
   import MyRuntime from '../src/runtime';

   describe('MyRuntime', () => {
     let runtime: MyRuntime;

     beforeEach(() => {
       runtime = new MyRuntime();
     });

     it('should validate config correctly', async () => {
       await runtime.validateSetConfig('{"rpc":"http://localhost:8545"}');
       expect(runtime.config.rpc).toBe('http://localhost:8545');
     });

     // ... more tests
   });
   ```

8. **Submit PR** with new runtime
   - Explain the data source
   - Provide example pool configuration
   - Include documentation

### Runtime Best Practices

**Determinism:**
- Ensure all validation logic is deterministic
- Remove/handle non-deterministic fields
- Use consistent JSON serialization
- Test with multiple validators

**Error Handling:**
- Handle network failures gracefully
- Use retry logic for transient errors
- Throw errors for finality/availability issues
- Log errors with context

**Finality:**
- Respect finality requirements of data source
- Wait for blocks to be finalized before archiving
- Don't archive data that could be reorganized

**Non-determinism:**
- Use ABSTAIN vote for uncertain data
- Document known non-deterministic fields
- Remove non-deterministic fields before comparison

**Performance:**
- Cache expensive computations
- Use efficient data structures
- Minimize RPC calls
- Batch requests when possible

## Release Process

Releases are managed by maintainers using Lerna.

### Version Bumping

Lerna automatically determines version bumps based on conventional commits:
- `feat:` → minor version bump (1.0.0 → 1.1.0)
- `fix:` → patch version bump (1.0.0 → 1.0.1)
- `BREAKING CHANGE:` → major version bump (1.0.0 → 2.0.0)

### Creating a Release

```bash
# Maintainers only

# Version packages (creates tags, updates package.json)
yarn lerna version

# Lerna will:
# 1. Analyze commits since last release
# 2. Determine version bumps per package
# 3. Update package.json files
# 4. Create git tags
# 5. Push tags to GitHub

# CI/CD will automatically:
# 1. Build binaries for all integrations
# 2. Create GitHub releases
# 3. Publish packages to npm (if configured)
```

### CI/CD Pipeline

**On Pull Request:**
- Run linting
- Run type checking
- Run all tests
- Build all packages
- Comment with build status

**On Tag Push:**
- Build binaries for all platforms
- Create GitHub release
- Upload binaries to release
- Publish to npm (if configured)

**On Main Merge:**
- Deploy documentation (if configured)
- Update changelog

## Getting Help

Need assistance? Here's how to get support:

- **Discord**: [Join KYVE Discord](https://discord.com/invite/kyve) - `#dev-support` channel
- **Telegram**: [KYVE Telegram](https://t.me/kyvenet)
- **GitHub Issues**: [Report bugs or request features](https://github.com/KYVENetwork/kyvejs/issues)
- **Documentation**: [docs.kyve.network](https://docs.kyve.network/)
- **Architecture**: See [ARCHITECTURE.md](ARCHITECTURE.md) for system design
- **Development**: See [DEVELOPMENT.md](DEVELOPMENT.md) for local setup

## Recognition

Contributors are recognized in:
- Release notes and changelogs
- GitHub contributors page
- Community announcements and shout-outs
- Special contributor badges (for significant contributions)

Thank you for contributing to KYVE! Your efforts help build the decentralized data infrastructure of the future. 🚀
