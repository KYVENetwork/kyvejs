# @kyvejs/tendermint-bsync

## Introduction

This runtime validates and archives blocks from any tendermint based blockchain application. It only stores blocks from and to a given height and makes
them available to directly download them from the storage provider, or directly sync them into the blockchain nodes itself, therefore enabling block sync
via validated KYVE blocks.

## Use cases

Since storage pools which use this runtime archive validated and historical blocks blockchain nodes can use those archived blocks
to bootstrap themselves and sync to the current network height. This may make expensive archival nodes obsolete since those blocks are
already permanently and immutably archived. Additionally, block data can be retrieved over an ELT pipeline, further analyzing and using
it for different applications like block explorers.

## Integrations

The following integrations are running on this runtime and are currently live.

### Mainnet (KYVE)

(planned - currently in test)

### Testnet (Kaon)

(planned - currently in test)

### Devnet (Korellia)

- **Cosmos Hub // cosmoshub-4**
  - Pool ID: TBD
  - Chain ID: _cosmoshub-4_
  - Base Height: _5200791_
- **Axelar // axelar-dojo-1**
  - Pool ID: TBD
  - Chain ID: _axelar-dojo-1_
  - Base Height: _1_
- **Osmosis // osmosis-1**
  - Pool ID: TBD
  - Chain ID: _osmosis-1_
  - Base Height: _1_
- **Evmos // evmos_9001-2**
  - Pool ID: TBD
  - Chain ID: _evmos_9001-2_
  - Base Height: _58701_

## Config

This runtime requires the following config format in order to run:

```json
{
  "network": "CHAIN_ID_OF_INTEGRATION",
  "rpc": "https://rpc-endpoint-of-integration:26657"
}
```

Here the properties have the following reason:

- `network`: the chain ID of the network. This is a check to verify that only blocks from this network are validated and archived. The runtime rejects blocks that do not match with this ID
- `rpc`: the default rpc endpoint of the network to collect blocks from. This should only be a base URL **without** a trailing slash. This can be a public rpc endpoint from a dedicated provider or an URL pointing to localhost in order to signal that every protocol node has to host their own blockchain node

This config should then be stringified on the pool and should look like this:

```json
{
  "config": "{\"network\":\"CHAIN_ID_OF_INTEGRATION\",\"rpc\":\"https://rpc-endpoint-of-integration:26657\"}"
}
```

With this setup the runtime is able to run. Furthermore an optional environment variable can be set to override the default rpc endpoint (`rpc`).

```bash
export KYVEJS_TENDERMINT_BSYNC_RPC="https://my-custom-rpc-endpoint:26657"
```

## Join pools

In order to join
