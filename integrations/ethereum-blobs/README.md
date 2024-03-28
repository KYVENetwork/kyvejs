# @kyvejs/ethereum-blobs

## Content

- [Introduction](#introduction)
- [Use-cases](#use-cases)
- [Binary Installation](#binary-installation)
    - [Build from source](#build-from-source)
    - [Download prebuilt binary](#download-prebuilt-binary)

## Introduction

This runtime validates and archives blobs from the Ethereum beacon chain. It stores blobs that have been sent to specified contract/sequencer addresses
from and to a given height and makes them available to directly download them from the storage provider. This data can be used to spin up a trustless RPC
mocking the `/eth/v1/beacon/blob_sidecars/<block_id>` endpoint.

## Use cases

As EIP-4844 enhances Ethereum's scalability and performance, it simultaneously burdens L2s with the responsibility of managing their own data blobs.
Without proper infrastructure, this requirement risks scalability and increases reliance on centralized storage solutions.

KYVE offers a vital decentralized alternative, enabling L2s to preserve their historical data securely and permanently on Arweave*.
This ensures not only the integrity and availability of data as a public good but also supports the scalability and sustainability of the Ethereum
ecosystem as it evolves. [Vitalik Buterin has highlighted the necessity for decentralized solutions to support the ecosystem through this transition](https://notes.ethereum.org/@vbuterin/proto_danksharding_faq#If-data-is-deleted-after-30-days-how-would-users-access-older-blobs),
and KYVE is here to support that.

## Architecture

This section explains how the blobs of specified sequencer addresses are obtained in order to validate them properly. First, the pool
config provides a good overview about the requirements:

```
{
  "consensusRPC": <endpoint of local running consensus client (Lighthouse)>;
  "executionRPC": <endpoint of local running execution client (Geth)>;
  "finality": <number of blocks the pool waits before archiving>;
  "genesisTime": <genesis time of the beacon node>;
  "sequencer": <all addresses of L1 contracts receiving type 3 txs (blobs) that the pool will archive>;
}
```

In addition to the configuration, the steps of the `getDataItem` method of the runtime also provides a clear understanding of the implementation:

1. Get latest height of the execution client, wait if finality isn't reached yet.
2. Query the block and all transactions for the given height.
3. Filter all `type 3` txs that has been sent to a specified sequencer in the pool config.
4. For each filtered tx, execute `eth_getTxByHash` to get the commitment.
5. Calculate the slot number for the given height -> `(block_time - genesis_time) / 12`
6. Execute `consensusRPC/eth/v1/beacon/blob_sidecars/${slotNumber}` to get all blobs for the given height.
7. For each blob, take the KZG commitment and check if it matches with a first versioned hash of type3TxToSequencer. This means that the blob was actually sent to the sequencer address. If it matches, include the blob in data item, if not, skip blob.
8. Check if the length of the selected blob is equal to the length of all filtered txs from step 3 to verify that all required blobs are included.

## Required Setup

This runtime requires the node operator to run an Ethereum node which is used as the source and the KYVE protocol node. The Ethereum node
itself consists of the consensus layer (Lighthouse) and the execution layer (Geth). The minimum hardware requirements are at least the min requirements
of that Ethereum node.

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
git checkout tags/@kyvejs/ethereum-blobs@x.x.x -b x.x.x
```

After you have cloned the project and have the desired version the dependencies can be installed and the project build:

```bash
yarn install
yarn setup
```

Finally, you can build the runtime binaries.

**INFO**: During the binary build log warnings can occur. You can safely ignore them.

```bash
cd integrations/ethereum-blobs
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
can be found [here](https://github.com/KYVENetwork/kyvejs/releases?q=ethereum-blobs).

You can verify the installation with printing the version:

```bash
./kyve-linux-64 version
```

Once you have downloaded the binary for the correct platform and version you can simply unzip them and move them
to your desired location (like KYSOR).