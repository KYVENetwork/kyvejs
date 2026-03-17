# @kyvejs/types

![banner](https://arweave.net/Gs2PvyzkWt9d2CfwTYtwDGGqv-HhV-qXjTURTCW0LuU)

## Overview

@kyvejs/types provides TypeScript type definitions for interacting with the KYVE blockchain and protocol. This package contains auto-generated types from Protocol Buffer definitions, including all Cosmos SDK modules and KYVE-specific modules.

These types are used internally by [@kyvejs/sdk](../sdk) and [@kyvejs/protocol](../protocol), but can also be imported directly for advanced use cases or custom implementations.

## Installation

Install via npm:

```bash
npm install @kyvejs/types
```

Or via yarn:

```bash
yarn add @kyvejs/types
```

## What's Included

This package provides TypeScript types for two main purposes:

### 1. LCD Client Types (`/lcd`)
Types for REST API queries - used when reading data from the blockchain.

### 2. Transaction Types (`/client`)
Types for transaction messages - used when signing and broadcasting transactions.

## Module Organization

### KYVE Modules

KYVE-specific protocol modules:

- **kyve.bundles.v1beta1** - Bundle proposals, voting, and uploader role management
- **kyve.delegation.v1beta1** - Protocol node delegation (different from Cosmos staking)
- **kyve.pool.v1beta1** - Storage pool configuration and management
- **kyve.stakers.v1beta1** - Staker (protocol validator) management
- **kyve.funders.v1beta1** - Pool funding management
- **kyve.multi_coin_rewards.v1beta1** - Multi-coin reward distribution
- **kyve.query.v1beta1** - Query types for all KYVE modules
- **kyve.global.v1beta1** - Global protocol parameters
- **kyve.team.v1beta1** - Team vesting and authority management

### Cosmos SDK Modules

Standard Cosmos SDK modules:

- **cosmos.auth.v1beta1** - Authentication accounts and parameters
- **cosmos.bank.v1beta1** - Token transfers and balances
- **cosmos.staking.v1beta1** - Cosmos chain staking (validator staking, not KYVE delegation)
- **cosmos.gov.v1** - Governance proposals and voting
- **cosmos.distribution.v1beta1** - Rewards distribution
- **cosmos.base.v1beta1** - Base types (Coin, DecCoin, pagination, etc.)

Plus all other standard Cosmos SDK modules (slashing, evidence, params, upgrade, etc.)

## Usage Examples

### Query Types (LCD)

Use LCD types when querying blockchain data via REST API:

```typescript
import { kyve } from '@kyvejs/types/lcd/kyve';

// Pool query types
type PoolsRequest = kyve.query.v1beta1.QueryPoolsRequest;
type PoolsResponse = kyve.query.v1beta1.QueryPoolsResponse;

// Example query
const queryPoolsRequest: PoolsRequest = {
  pagination: {
    limit: 10,
    offset: 0,
  }
};
```

### Transaction Message Types

Use client types when constructing transactions:

```typescript
import { kyve } from '@kyvejs/types/client/kyve';

// Bundle proposal message type
type MsgSubmitBundleProposal = kyve.bundles.v1beta1.MsgSubmitBundleProposal;

// Example message
const bundleProposal: MsgSubmitBundleProposal = {
  creator: "kyve1...",
  staker: "kyve1...",
  pool_id: 0,
  storage_id: "abc123",
  data_size: 1024000,
  data_hash: "hash...",
  from_index: 100,
  bundle_size: 100,
  from_key: "100",
  to_key: "200",
  bundle_summary: '{"merkle_root":"..."}',
};
```

### Common Cosmos Types

```typescript
import { cosmos } from '@kyvejs/types/lcd/cosmos';

// Coin type for token amounts
type Coin = cosmos.base.v1beta1.Coin;

const coin: Coin = {
  denom: "ukyve",
  amount: "1000000" // 1 KYVE (1,000,000 ukyve)
};

// Pagination for queries
type PageRequest = cosmos.base.query.v1beta1.PageRequest;

const pagination: PageRequest = {
  key: new Uint8Array(),
  offset: 0,
  limit: 100,
  count_total: true,
  reverse: false
};
```

### Governance Types

```typescript
import { cosmos } from '@kyvejs/types/client/cosmos';

// Governance proposal message
type MsgSubmitProposal = cosmos.gov.v1.MsgSubmitProposal;

const proposal: MsgSubmitProposal = {
  messages: [
    // Any messages to execute if proposal passes
  ],
  initial_deposit: [
    { denom: "ukyve", amount: "10000000000" }
  ],
  proposer: "kyve1...",
  metadata: "ipfs://...",
  title: "My Proposal",
  summary: "Proposal description"
};
```

### Staker (Protocol Validator) Types

```typescript
import { kyve } from '@kyvejs/types/client/kyve';

// Create staker message
type MsgCreateStaker = kyve.stakers.v1.MsgCreateStaker;

const createStaker: MsgCreateStaker = {
  creator: "kyve1...",
  amount: "1000000000" // Minimum stake
};

// Join pool message
type MsgJoinPool = kyve.stakers.v1.MsgJoinPool;

const joinPool: MsgJoinPool = {
  creator: "kyve1...",
  pool_id: 0,
  valaddress: "kyve1valaddress...",
  amount: "1000000000"
};
```

### Funding Types

```typescript
import { kyve } from '@kyvejs/types/client/kyve';

// Fund pool message
type MsgFundPool = kyve.funders.v1beta1.MsgFundPool;

const fundPool: MsgFundPool = {
  creator: "kyve1...",
  pool_id: 0,
  amounts: [
    { denom: "ukyve", amount: "100000000000" }
  ],
  amounts_per_bundle: [
    { denom: "ukyve", amount: "1000000" }
  ]
};
```

### Vote Types

```typescript
import { kyve } from '@kyvejs/types/client/kyve';
import { VOTE } from '@kyvejs/protocol';

// Vote on bundle proposal
type MsgVoteBundleProposal = kyve.bundles.v1beta1.MsgVoteBundleProposal;

const voteBundle: MsgVoteBundleProposal = {
  creator: "kyve1...",
  staker: "kyve1...",
  pool_id: 0,
  storage_id: "abc123",
  vote: VOTE.VOTE_TYPE_VALID // or VOTE_TYPE_INVALID or VOTE_TYPE_ABSTAIN
};
```

## Type Generation

Types are automatically generated from Protocol Buffer definitions using the following process:

1. **Source**: KYVE chain proto definitions from the [KYVE chain repository](https://github.com/KYVENetwork/chain)
2. **Tool**: [Telescope](https://github.com/osmosis-labs/telescope) - Proto to TypeScript compiler
3. **Build**: Run `yarn build` in this package to regenerate types

To regenerate types (for maintainers):

```bash
cd common/types
yarn generate  # Generate from .proto files
yarn build     # Compile TypeScript
```

**Note**: End users typically don't need to regenerate types - use the published package versions.

## Usage with @kyvejs/sdk

The types package is used internally by [@kyvejs/sdk](../sdk), which provides a higher-level API. For most use cases, prefer using the SDK:

```typescript
import { KyveSDK } from '@kyvejs/sdk';

const sdk = new KyveSDK('kyve-1'); // mainnet
const client = await sdk.fromMnemonic(mnemonic);

// SDK methods use types from @kyvejs/types internally
const tx = await client.kyve.bundles.v1beta1.submitBundleProposal({
  // TypeScript will auto-complete with types from @kyvejs/types
  creator: client.account.address,
  staker: stakerAddress,
  pool_id: 0,
  // ... other fields
});
```

The SDK wraps these types with:
- Automatic signing and broadcasting
- Gas estimation
- Transaction result handling
- Multi-wallet support (Keplr, Cosmostation, etc.)

## Directory Structure

```
@kyvejs/types/
├── lcd/                    # REST API query types
│   ├── kyve/               # KYVE modules
│   │   ├── bundles/
│   │   ├── delegation/
│   │   ├── funders/
│   │   ├── stakers/
│   │   ├── pool/
│   │   ├── query/
│   │   └── ...
│   └── cosmos/             # Cosmos SDK modules
│       ├── auth/
│       ├── bank/
│       ├── staking/
│       ├── gov/
│       └── ...
├── client/                 # Transaction message types
│   ├── kyve/               # KYVE modules
│   └── cosmos/             # Cosmos SDK modules
└── version.ts              # Package version
```

## Common Type Patterns

### Amount/Balance Types

Amounts are always represented as strings to preserve precision:

```typescript
type Coin = {
  denom: string;    // Token denomination (e.g., "ukyve")
  amount: string;   // Amount in base units as string
};

// Example: 1 KYVE = 1,000,000 ukyve
const oneKyve: Coin = {
  denom: "ukyve",
  amount: "1000000"
};
```

### Pagination Types

Queries support pagination:

```typescript
type PageRequest = {
  key?: Uint8Array;       // Continuation key from previous response
  offset?: number;        // Number of items to skip
  limit?: number;         // Maximum items to return
  count_total?: boolean;  // Return total count
  reverse?: boolean;      // Reverse order
};

type PageResponse = {
  next_key?: Uint8Array;  // Key for next page
  total?: number;         // Total count (if requested)
};
```

### Message Wrapping

All transaction messages include standard fields:

```typescript
type MsgExample = {
  creator: string;        // Signer address (always present)
  // ... message-specific fields
};
```

## Advanced Usage

### Custom Transaction Construction

For advanced use cases, you can construct transactions manually using these types:

```typescript
import { kyve } from '@kyvejs/types/client/kyve';
import { SigningStargateClient } from '@cosmjs/stargate';

const client = await SigningStargateClient.connect(rpcEndpoint);

const msg: kyve.bundles.v1beta1.MsgSubmitBundleProposal = {
  // ... message fields with type safety
};

const result = await client.signAndBroadcast(
  senderAddress,
  [msg],
  fee,
  memo
);
```

### Type Guards

Types don't include runtime validation. For runtime type checking, combine with validators:

```typescript
function isCoin(value: unknown): value is Coin {
  return (
    typeof value === 'object' &&
    value !== null &&
    'denom' in value &&
    'amount' in value &&
    typeof (value as Coin).denom === 'string' &&
    typeof (value as Coin).amount === 'string'
  );
}
```

## Additional Resources

- [@kyvejs/sdk](../sdk/README.md) - High-level SDK using these types
- [@kyvejs/protocol](../protocol/README.md) - Protocol node implementation
- [KYVE Protocol Documentation](https://docs.kyve.network/)
- [Cosmos SDK Documentation](https://docs.cosmos.network/)
- [Protocol Buffer Documentation](https://protobuf.dev/)

## Version Compatibility

This package version should match the KYVE chain version it's compatible with:

- Types v1.5.x → Compatible with KYVE chain v1.5.x
- Types v1.4.x → Compatible with KYVE chain v1.4.x
- etc.

When upgrading, ensure your types version matches your target chain version.
