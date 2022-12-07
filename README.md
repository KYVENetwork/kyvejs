<div align="center">
  <h1>@kyvejs</h1>
</div>

![banner](https://arweave.net/RkC-azeak1eOQGOLSaPNzHo-ORc-cWgnmdJnSScedFE)

<p align="center">
<strong>Tools for building applications on KYVE</strong>
</p>

KYVE, the Web3 data lake solution, is a protocol that enables data providers to standardize, validate, and permanently store blockchain data streams. By leveraging permanent data storage solutions like Arweave, KYVE’s Cosmos SDK chain creates permanent backups and ensures the scalability, immutability, and availability of these resources over time.

## Project Overview

**Common:**

- [@kyvejs/types](common/types/README.md) - holds all types for the KYVE application in typescript
- [@kyvejs/sdk](common/sdk/README.md) - development kit for communicating with the KYVE blockchain
- [@kyvejs/protocol](common/protocol/README.md) - core functionality for running validators on the KYVE network

**Tools:**

- [@kyvejs/kysor](tools/kysor/README.md) - The Cosmovisor of KYVE

**Integrations:**

- [@kyvejs/bitcoin](integrations/bitcoin/README.md) - The official KYVE Bitcoin integration
- [@kyvejs/celo](integrations/celo/README.md) - The official KYVE Celo integration
- [@kyvejs/cosmos](integrations/cosmos/README.md) - The official KYVE Cosmos integration
- [@kyvejs/evm](integrations/evm/README.md) - The official KYVE EVM integration

## How to contribute

Clone the repository:

```bash
git clone git@github.com:KYVENetwork/kyvejs.git
```

Checkout repository:

```bash
cd kyvejs
```

Checkout new branch to implement new features/fixes there

```bash
git checkout -b [feat/fix]/[my-branch-name]
```

Install dependencies with yarn:

```bash
yarn install
```

Bootstrap and build project:

```
yarn setup
```

Apply your changes and create a Pull Request to `main`. Once the team has
reviewed and approved your PR it can be merged and used.
