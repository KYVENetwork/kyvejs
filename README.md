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

KYVE, the Web3 data lake solution, is a protocol that enables data providers to standardize, validate, and permanently store blockchain data streams. By leveraging permanent data storage solutions like Arweave, KYVE’s Cosmos SDK chain creates permanent backups and ensures the scalability, immutability, and availability of these resources over time.

## Project Overview

**Common:**

- [@kyvejs/types](common/types/README.md) - holds all types for the KYVE application in typescript
- [@kyvejs/sdk](common/sdk/README.md) - development kit for communicating with the KYVE blockchain
- [@kyvejs/protocol](common/protocol/README.md) - core functionality for running validators on the KYVE network
- [@kyvejs/docker](common/docker/README.md) - core functionality facilitating dockerising KYVE functionality and communicating with dockerised runtimes via gRPC

**Tools:**

- [@kyvejs/kysor](tools/kysor/README.md) - The Cosmovisor of KYVE

**Integrations:**

- [@kyvejs/tendermint](integrations/tendermint/README.md) - The official KYVE Tendermint sync integration
- [@kyvejs/tendermint-bsync](integrations/tendermint-bsync/README.md) - The official KYVE Tendermint block sync integration
- [@kyvejs/tendermint-ssync](integrations/tendermint-ssync/README.md) - The official KYVE Tendermint block sync integration

## Build Integration Binaries

Clone and checkout repository:

```bash
git clone git@github.com:KYVENetwork/kyvejs.git
cd kyvejs
```

Checkout desired version:

```
git checkout tags/@kyvejs/<integration>@x.x.x -b @kyvejs/<integration>@x.x.x
```

Example: `git checkout tags/@kyvejs/tendermint-bsync@1.0.0 -b @kyvejs/tendermint-bsync@1.0.0`

Install dependencies and setup project:

```
yarn setup
```

Checkout integration and build binaries:

```
cd integrations/<integration>
yarn build:binaries
```

The binaries can then be found in the `/out` folder

## Dockerized Execution

In the Kyve project, the binaries can now be easily executed within a Docker container. This allows for simplified deployment and consistent runtime environments. Before running the Kyve binaries in a Docker container, please ensure that you have set up a Docker network. If you haven't already, you can create a Docker network using the following command:

```
docker network create --driver bridge kyve
```

**Building the Docker Image**

To build a Docker image for Kyve Core, you can use the provided Dockerfile. Use the following command to build the image, while being in the root directory:

```
docker build -t kyve-core -f Dockerfile .
```

**Running Kyve Core in a Docker Container**

Once you have built the Docker image, you can run Kyve Core in a Docker container. Below are the instructions for running Kyve Core as a node:

1. Set your recovery phrase as the VALACCOUNT environment variable:

```
export VALACCOUNT="<recovery phrase>"
```

2. Run the Kyve Core container, replacing the placeholders with your specific parameters:

```
docker run --rm --name kyve-core --network kyve -e VALACCOUNT=$VALACCOUNT kyve-core ./kyve start --pool <pool id> --valaccount "$VALACCOUNT" --cache memory --rpc <rpc address> --rest <rest address> --chain-id=<chain id> --request-backoff 50 --debug
```
- `<recovery phrase>`: Replace this with your recovery phrase.
- `<pool id>`: Specify the pool ID you want to join.
- `<rpc address>`: Provide the RPC address of the network.
- `<rest address>`: Provide the REST API address.
- `<chain id>`: Specify the chain ID you want to interact with.

**Development and Testing**

For development and testing purposes, you can also run specific runtime methods in the Dockerized Kyve Core. Here's how to do it:

Run the Kyve Core container for a specific runtime method and arguments:
```
docker run --rm --name kyve-core --network kyve kyve-core ./kyve runtime <method> <args>
```
- `<method>`: Replace this with the name of the runtime method you want to test.
- `<args>`: Provide any required arguments for the runtime method.

By following these instructions, you can easily dockerize and run Kyve Core and perform testing and development tasks. The Dockerized runtime provides a convenient and isolated environment for your Kyve project.






## How to contribute

Checkout new branch to implement new features/fixes there

```bash
git checkout -b [feat/fix]/[my-branch-name]
```

Install dependencies and setup project:

```bash
yarn setup
```

Apply your changes and create a Pull Request to `main`. Once the team has
reviewed and approved your PR it can be merged and used.

**NOTE**: The usage of [Conventional Commits](https://conventionalcommits.org) is required when creating PRs and committing to this repository

## How to release

In order to release new changes which got merged into `main` lerna can be used. Lerna will look into every change and create a new release tag if necessary. After the user has approved the new version tags (bumped according to [Semantic Versioning](https://semver.org/)) lerna will push those new tags to `main`, starting the CI/CD pipeline and creating the releases.

Release with lerna:

```
yarn lerna version
```
