<div align="center">
  <h1>@kyvejs</h1>
</div>

![banner](https://arweave.net/RkC-azeak1eOQGOLSaPNzHo-ORc-cWgnmdJnSScedFE)

<p align="center">
<strong>Tools for building applications on KYVE.</strong>
</p>

KYVE, the Web3 data lake solution, is a protocol that enables data providers to standardize, validate, and permanently store blockchain data streams. By leveraging permanent data storage solutions like Arweave, KYVE’s Cosmos SDK chain creates permanent backups and ensures the scalability, immutability, and availability of these resources over time.

## Project Overview

Common:

- [@kyvejs/types](common/types/README.md) - holds all types for the KYVE application in typescript
- [@kyvejs/sdk](common/sdk/README.md) - development kit for communicating with the KYVE blockchain
- [@kyvejs/protocol](common/protocol/README.md) - core functionality for running protocol nodes on the KYVE network

Integrations:

- [@kyve/bitcoin](integrations/bitcoin/README.md) - The official KYVE Bitcoin integration
- [@kyve/celo](integrations/celo/README.md) - The official KYVE Celo integration
- [@kyve/evm](integrations/evm/README.md) - The official KYVE EVM integration
- [@kyve/uniswap](integrations/uniswap/README.md) - The official KYVE Uniswap integration

- [@kyve/kysor](integrations/kysor/README.md) - The Cosmovisor of KYVE

## Getting Started

Install dependencies with yarn:

```bash
yarn install
```

To bootstrap and build the entire project:

```
yarn setup
```
