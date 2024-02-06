<div align="center">
  <h1>@kyvejs</h1>
</div>

![banner](https://arweave.net/RkC-azeak1eOQGOLSaPNzHo-ORc-cWgnmdJnSScedFE)

<p align="center">
<strong>Tools for building applications on KYVE</strong>
</p>

<br/>

<div align="center">
  <img alt="License: Apache-2.0" src="https://badgen.net/github/license/KYVENetwork/kyvejs?color=green" />

  <img alt="License: Apache-2.0" src="https://badgen.net/github/stars/KYVENetwork/kyvejs?color=green" />

  <img alt="License: Apache-2.0" src="https://badgen.net/github/contributors/KYVENetwork/kyvejs?color=green" />

  <img alt="License: Apache-2.0" src="https://badgen.net/github/releases/KYVENetwork/kyvejs?color=green" />
</div>

<div align="center">
  <a href="https://twitter.com/KYVENetwork" target="_blank">
    <img alt="Twitter" src="https://badgen.net/badge/icon/twitter?icon=twitter&label" />
  </a>
  <a href="https://discord.com/invite/kyve" target="_blank">
    <img alt="Discord" src="https://badgen.net/badge/icon/discord?icon=discord&label" />
  </a>
  <a href="https://t.me/kyvenet" target="_blank">
    <img alt="Telegram" src="https://badgen.net/badge/icon/telegram?icon=telegram&label" />
  </a>
</div>

<br/>

KYVE, a protocol that enables data providers to standardize, validate, and permanently store blockchain data streams, is a solution for Web3 data lakes. For more information on Web3 data lakes, [click here](link). By leveraging permanent data storage solutions like Arweave (a decentralized storage network) and KYVE’s Cosmos SDK chain (a framework for building blockchain applications in Go), we create permanent backups and ensure the scalability, immutability, and availability of these resources over time. For more information on Arweave, [click here](link). For more information on Cosmos SDK, [click here](link).

## Project Overview

**Common:**

- [@kyvejs/types](common/types/README.md) - holds all types for the KYVE application in typescript
- [@kyvejs/sdk](common/sdk/README.md) - development kit for communicating with the KYVE blockchain
- [@kyvejs/protocol](common/protocol/README.md) - core functionality for running validators on the KYVE network
- @kyvejs/goutils - go utility functions for this repository

**Tools:**

- [@kyvejs/kysor](tools/kysor/README.md) - The Cosmovisor of KYVE
- [@kyvejs/kystrap](tools/kystrap/README.md) - A bootstrap tool for creating new KYVE integrations

**Integrations:**

- [@kyvejs/tendermint](integrations/tendermint/README.md) - The official KYVE Tendermint sync integration
- [@kyvejs/tendermint-ssync](integrations/tendermint-ssync/README.md) - The official KYVE Tendermint state-sync integration
- [@kyvejs/tendermint-bsync](integrations/tendermint-bsync/README.md) - The official KYVE Tendermint block sync integration

## What is a KYVE integration?
A KYVE data validator requires a runtime to validate and store data. 
A runtime consists of the protocol (client) and the integration (server).
The protocol is responsible to communicate between the KYVE blockchain and the integration.

//TODO: add picture of this workflow (Chain -> Protocol -> Integration) or link


## How to write a KYVE integration

You can choose to write an integration in Go, Python, or TypeScript. The following steps will guide you through the process of creating a new integration.

**Prerequisites:**
- [Docker](https://docs.docker.com/engine/install/)

**Step 1:** Clone the repository and checkout a new branch
```bash
git clone git@github.com:KYVENetwork/kyvejs.git

# Checkout a new branch
# git checkout -b [feat/fix]/integration/[my-branch-name]
git checkout -b feat/integration/fancypants
```

**Step 2:** Run kystrap
```bash
# with make
make bootstrap-integration
```
```bash
# with a shell
./tools/kystrap/kystrap.sh create
```
```bash
# with yarn
yarn bootstrap:integration
```

Follow the instructions to create a new integration.
The wizard will create a new folder in `integrations` with the integration name you provided.

The new integration will contain a `README.md` with further instructions on how to get started.

**NOTE**: The usage of [Conventional Commits](https://conventionalcommits.org) is required when creating PRs and committing to this repository

## How to release

In order to release new changes which got merged into `main` lerna can be used. Lerna will look into every change and create a new release tag if necessary. After the user has approved the new version tags (bumped according to [Semantic Versioning](https://semver.org/)) lerna will push those new tags to `main`, starting the CI/CD pipeline and creating the releases.

Release with lerna:

```
yarn lerna version
```
