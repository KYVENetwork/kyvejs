# @kyvejs/tendermint-ssync

## Content

- [Introduction](#introduction)
- [Use cases](#use-cases)
- [Architecture](#architecture)
  - [Data Collection Flow](#data-collection-flow)
  - [Snapshot Chunking Mechanism](#snapshot-chunking-mechanism)
  - [Non-deterministic Field Handling](#non-deterministic-field-handling)
  - [Runtime Implementation](#runtime-implementation)
- [Required Setup](#required-setup)
- [Binary Installation](#binary-installation)
  - [Build from source](#build-from-source)
  - [Download prebuilt binary](#download-prebuilt-binary)
- [Run a node](#run-a-node)
- [Creating a pool with the runtime](#creating-a-pool-with-the-runtime)
  - [Config](#config)
  - [Environment Variable Override](#environment-variable-override)
  - [Create Pool governance proposal](#create-pool-governance-proposal)

## Introduction

This runtime validates and archives state-sync snapshots from any tendermint based blockchain application.
It only stores one snapshot chunk per bundle and makes the given snapshot chunks directly available for download
from the storage provider. This enabled the state- and height-sync feature for KSYNC.

## Use cases

Since storage pools which use this runtime archive validated and historical state-sync snapshots nodes can use those archived snapshots to state-sync to any historical height within minutes. This makes expensive and huge backups obsolete.

## Architecture

This section explains how Tendermint state-sync snapshots are collected, chunked, validated, and archived.

### Data Collection Flow

```mermaid
graph TB
    subgraph "Data Source"
        KSYNC[KSYNC Snapshot Server<br/>serve-snapshots]
    end

    subgraph "KYVE Protocol Node"
        Runtime[Tendermint SSync Runtime]
        Cache[Local Cache]
        Protocol[Protocol Core]
    end

    subgraph "Storage & Chain"
        Storage[Storage Provider<br/>Arweave/Bundlr]
        Chain[KYVE Chain]
    end

    KSYNC -->|1. /list_snapshots| Runtime
    Runtime -->|2. Find snapshot at height| Runtime
    KSYNC -->|3. /load_snapshot_chunk<br/>height/format/chunkIndex| Runtime
    Runtime -->|4. First chunk:<br/>get metadata| KSYNC
    KSYNC -->|5. /get_block<br/>/get_seen_commit<br/>/get_state| Runtime
    Runtime -->|6. Prevalidate| Runtime
    Runtime -->|7. Cache chunk| Cache
    Cache -->|8. Bundle 1 chunk| Protocol
    Protocol -->|9. Compress| Protocol
    Protocol -->|10. Upload| Storage
    Storage -->|11. Propose| Chain
    Chain -->|12. Validators download| Storage
    Storage -->|13. Validate| Runtime
    Runtime -->|14. Vote VALID/INVALID| Chain

    style Runtime fill:#e1f5ff
    style Protocol fill:#fff4e1
    style Chain fill:#ffe1e1
```

![Tendermint State-Sync Architecture](./assets/tendermint-ssync.png)

### Snapshot Chunking Mechanism

State-sync snapshots are large files that are split into chunks for efficient storage and retrieval. This runtime archives **one chunk per bundle**.

**Key Format:**
```
{height}/{chunkIndex}
```

Example: `10000/0`, `10000/1`, `10000/2` for chunks of snapshot at height 10000.

**Chunking Process:**

1. **Snapshot Creation** (via KSYNC):
   - Tendermint creates snapshots at configurable intervals (e.g., every 3000 blocks)
   - Each snapshot is split into multiple chunks (typically 10-50 chunks)
   - Each chunk is ~10-16 MB in size

2. **Sequential Chunk Archival**:
   - Runtime archives chunks sequentially: `height/0`, `height/1`, `height/2`, etc.
   - **First chunk (`/0`)** includes full metadata:
     - Snapshot info (height, format, chunks count, hash)
     - Block data
     - Seen commit
     - State (validator set, consensus params, etc.)
   - **Subsequent chunks** contain only the chunk data (no metadata duplication)

3. **Moving to Next Snapshot**:
   - After archiving all chunks of current snapshot, runtime moves to next snapshot height
   - Next height = `current_height + interval`
   - Example: If interval is 3000, after completing height 10000, moves to 13000

**Bundle Size:**
- `max_bundle_size` **MUST be 1** for this runtime
- Each bundle contains exactly one chunk
- This ensures efficient downloads and prevents bundle size issues

### Non-deterministic Field Handling

State data contains fields that can be non-deterministic across nodes:

**Removed Fields:**

1. **Software Version** (`state.Version.software`):
   - Tendermint software version string
   - Different nodes may run different versions
   - Removed from both proposed and validation items before comparison

2. **Time Iota** (`state.ConsensusParams.block.time_iota_ms`):
   - Block time parameter that can vary
   - Removed to prevent false INVALID votes

**Validation Strategy:**
```typescript
// Remove non-deterministic fields
delete state.Version.software
delete state.ConsensusParams.block.time_iota_ms

// Then compare with exact JSON match
if (JSON.stringify(proposed) === JSON.stringify(validation)) {
  return VOTE_TYPE_VALID
} else {
  return VOTE_TYPE_INVALID
}
```

No ABSTAIN vote is used - after removing known non-deterministic fields, data must match exactly.

### Runtime Implementation

The runtime implements the `IRuntime` interface with special handling for snapshot chunks:

#### 1. getDataItem
Fetches snapshot chunk at given key (`height/chunkIndex`):

**For first chunk (chunkIndex = 0):**
- Calls `/list_snapshots` to find snapshot metadata
- Calls `/load_snapshot_chunk/{height}/{format}/{chunkIndex}` to get chunk data
- Calls `/get_block/{height}` to get block at snapshot height
- Calls `/get_seen_commit/{height}` to get commit signatures
- Calls `/get_state/{height}` to get validator set and consensus params
- Returns all data together

**For subsequent chunks (chunkIndex > 0):**
- Only calls `/load_snapshot_chunk/{height}/{format}/{chunkIndex}`
- Returns chunk data with null metadata (to avoid duplication)

#### 2. prevalidateDataItem
Validates chunk data before caching:

**For first chunk:**
- Checks that chunk, snapshot, block, seenCommit, and state are all defined
- Verifies snapshot height matches key
- Ensures no unexpected null values

**For subsequent chunks:**
- Checks that chunk is defined
- Ensures snapshot, block, seenCommit, and state are null (no duplication)

#### 3. transformDataItem
No transformation applied - data is passed through as-is.

#### 4. validateDataItem
Exact comparison after removing non-deterministic fields:
- Removes `state.Version.software` from both items
- Removes `state.ConsensusParams.block.time_iota_ms` from both items
- Performs exact JSON string comparison
- Returns VALID if match, INVALID if different

#### 5. summarizeDataBundle
Returns compact summary in format: `{height}/{format}/{chunkIndex}/{totalChunks}`

Example: `10000/1/5/10` means:
- Height: 10000
- Format: 1
- Current chunk: 5
- Total chunks: 10

#### 6. nextKey
Calculates next chunk or snapshot to archive:

**If more chunks remain in current snapshot:**
- Returns `{height}/{chunkIndex + 1}`
- Example: `10000/5` → `10000/6`

**If all chunks archived:**
- Returns `{height + interval}/0`
- Example: If interval is 3000, `10000/9` → `13000/0`

This ensures sequential archival of all chunks across all snapshots.

## Required Setup

This runtime requires the node operator to run a tendermint node which is used as the source and the KYVE protocol node. Depending
on which tendermint chain gets archived the minimum hardware requirements are at least the min requirements of that tendermint node.

This architecture diagram summarizes the setup of the Cosmos Hub integration on KYVE:

![tendermint-bsync](assets/tendermint-ssync.png)

Here this runtime is responsible for communicating with the tendermint application (purple) - in this case gaia, and forwarding the data to the KYVE core protocol. The KYVE core then handles the communication with the pool. This entire process (yellow) is the KYVE protocol node. The resulting
data are the blocks from the tendermint application - validated and permanently stored on a storage provider like Arweave.

## Binary Installation

This section explains how to install a protocol node with this runtime. This is only relevant for protocol node
operators who want to run a node in a pool which has this runtime.

### Build from source

The first option to install the binary is to build it from source. For that you have to execute the following
commands:

```bash
git clone git@github.com:KYVENetwork/kyvejs.git
cd kyvejs
```

If you want to build a specific version you can checkout the tag and continue from the version branch.
If you want to build the latest version you can skip this step.

```bash
git checkout tags/@kyvejs/tendermint-ssync@x.x.x -b x.x.x
```

After you have cloned the project and have the desired version the dependencies can be installed and the project build:

```bash
yarn install
yarn setup
```

Finally, you can build the runtime binaries.

**INFO**: During the binary build log warnings can occur. You can safely ignore them.

```bash
cd integrations/tendermint-ssync
yarn build:binaries
```

You can verify the installation with printing the version:

```bash
./out/kyve-linux-64 version
```

After the build succeeded you can find the binaries in the `out` folder where you can move them to use
desired location (like KYSOR).

### Download prebuilt binary

You can find all prebuilt binaries in the releases of the kyvejs repository. For this specific runtime they
can be found [here](https://github.com/KYVENetwork/kyvejs/releases?q=tendermint).

You can verify the installation with printing the version:

```bash
./kyve-linux-64 version
```

Once you have downloaded the binary for the correct platform and version you can simply unzip them and move them
to your desired location (like KYSOR).

## Run a node

This section explains which runtime specific setup you must have in order to run a node. This is only relevant for
protocol node operators who have already installed the binary (previous section) and want to run a node in a pool
which has this runtime.

Depending on the integration which are currently live the following setup has to be done.

### Archway

The entire documentation on how to run a protocol node with the state-sync runtime can be found [here](https://docs.kyve.network/validators/protocol_nodes/pools/archway_state-sync/introduction)

## Creating a pool with the runtime

This section explains how you can create a storage pool on KYVE with this specific runtime. This is only relevant for
users or projects, who are interested in archiving and validating a new data source.

### Config

This runtime requires the following config format in order to run:

```json
{
  "api": "https://api-endpoint-ksync-snapshot-server:7878",
  "interval": "SNAPSHOT_INTERVAL"
}
```

Here the properties have the following reason:

- `api`: the api endpoint for retrieving the snapshot chunk data. This endpoint gets exposed by the KSYNC serve-snapshots command. The default port is 7878
- `interval`: the block interval at which snapshots should be created and archived. A smaller interval ensures quick height-syncs later, but takes more time due to archiving more snapshots over time

This config should then be stringified on the pool and should look like this:

```json
{
  "config": "{\"api\":\"http://localhost:7878\",\"interval\":3000}"
}
```

### Environment Variable Override

You can override the pool's API endpoint using the `KYVEJS_TENDERMINT_SSYNC_API` environment variable. This is useful for:
- Using a local KSYNC snapshot server
- Testing with different endpoints
- Running custom snapshot configurations

```bash
export KYVEJS_TENDERMINT_SSYNC_API="https://my-custom-api-endpoint:7878"
```

When set, this environment variable takes precedence over the `api` value in the pool config.

### Create Pool governance proposal

In order to create a pool it has to go through the Governance process (more on that can be found [here](https://docs.kyve.network/token_holders/governance)). An example proposal with which a storage pool with this runtime could be created can be found below:

```json
{
  "messages": [
    {
      "@type": "/kyve.pool.v1beta1.MsgCreatePool",
      "authority": "kyve10d07y265gmmuvt4z0w9aw880jnsr700jdv7nah",
      "name": "<your pool name>",
      "runtime": "@kyvejs/tendermint-ssync",
      "logo": "ar://<your logo stored on arweave>",
      "config": "<your config like described above>",
      "start_key": "<interval>/0", // start key has to be a string with the following format. e.g. "3000/0" for the config above
      "upload_interval": "120", // 120s is the recommended value
      "operating_cost": "<your base bundle reward>", // for example 1000000 if the base reward per bundle should be 1 $KYVE
      "min_delegation": "<your required min delegation", // for example 1000000000 if the pool should only run if more than 1000 $KYVE are bonded in this pool
      "max_bundle_size": "1", // has to be 1!
      "version": "<runtime version>", // the current version of this runtime
      "binaries": "{\"kyve-linux-arm64\":\"<linux-arm64 binary download URL>\",\"kyve-linux-x64\":\"<linux-x64 binary download URL>\",\"kyve-macos-x64\":\"<macos-x64 binary download URL>\"}", // download URLs of binaries for KYSOR
      "storageProviderId": "2", // Bundlr is the recommended storage provider
      "compressionId": "1" // Gzip is the recommended bundle compression
    }
  ],
  "metadata": "<your ipfs metadata info>", // gov proposal metadata
  "deposit": "<your deposit>ukyve" // proposal deposit, check the required min deposit
}
```

Once your proposal is ready you can submit it to the network. Please follow the official governance process to increase
the chances of getting your proposal accepted.
