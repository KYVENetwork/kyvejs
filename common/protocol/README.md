<div align="center">
  <h1>@kyvejs/protocol</h1>
</div>

![banner](https://arweave.net/WK6XCKv12mV8bN9KTJtQDR73_B0BVDfxA4MD0G5AlpE)

# Architecture Overview

The KYVE protocol node is in general responsible for collecting data from various sources and submitting them
for validation to the KYVE network. It does that by transforming the data, packaging it in bundles and storing
them on permanent storage providers like Arweave, where other protocol nodes can retrieve and validate them
for their correctness.

During all that time KYVE protocol nodes are communicating with the KYVE blockchain, a cosmos-sdk based PoS chain
providing the main KYVE logic of registering bundle proposals and keeping track of votes.

## General protocol node architecture

The basic architecture of a protocol node can be found below:

<br/>
<br/>

<p align="center">
<img src="https://arweave.net/FAj2xIyD_D-_sfLr5XGeUY91kHF8aEBG8oa9dgxrCPQ" style="display: block; margin-left: auto; margin-right: auto" />
</p>

<br/>
<br/>

**Overview**

- **KYVE blockchain** - a cosmos-sdk based PoS blockchain which has all the KYVE logic and is responsible for scheduling bundle proposal rounds and keeping track of bundle proposals and their respected votes from protocol nodes
- **Permanent Storage** - usually web3 permanent storage providers like Arweave. This is the place where all validated data from KYVE will be archived
- **Local Node Cache** - a local Key-Value-Store on the protocol node for caching all the data which is currently in the validation process
- **Data Sources** - data sources defined by the storage pool. There can be multiple data sources or only one. Examples for data sources can be blockchain rpc endpoints or web2 api endpoints which need to be validated and archived
- **Proposal Round Cyclic Updates** - schedules both main threads when to start collecting data or when to start validating/uploading bundle proposals. This schedule is dictated by the KYVE blockchain
- **Data Collection Thread** - the main thread collecting the required data for the current proposal round. It requests all given data sources defined on the storage pool and writes them to the local node cache
- **Data Indexing Thread** - the main thread validating proposed bundles proposals from other protocol nodes and proposing new bundle proposals to the network. It communicates closely with the KYVE blockchain and reads all the cached items for validation and proposition. Also for validation and proposition it reads and writes data to the permanent storage provider

<br/>
<br/>

## Data collection thread overview

A more detailed architecture overview of the data collection thread can be found below:

<br/>
<br/>

<p align="center">
<img src="https://arweave.net/3Ot8WfE4YyLWD4PkDcsQrhj_MzKGobWjiLV0hAIvyzE" style="display: block; margin-left: auto; margin-right: auto" />
</p>

<br/>
<br/>

- **core logic (red)** - all the logic controlled by `@kyve/core`
- **runtime logic (blue)** - all the custom logic defined by the `runtime`. This is very application specific
- **external data sources (green)** - data sources defined on the storage pool which should be validated and archived
- **Key-Value-Store (yellow)** - a local Key-Value-Store which serves as cache for the protocol node

<br/>
<br/>

## Data indexing thread overview

A more detailed architecture overview of the data indexing thread can be found below:

<br/>
<br/>

<p align="center">
<img src="https://arweave.net/8PKehcv8vYYhtKI2KRBGJkpe6CNvD8uDrudau_Zfpag" style="display: block; margin-left: auto; margin-right: auto" />
</p>

<br/>
<br/>

- **core logic (red)** - all the logic controlled by `@kyve/core`
- **runtime logic (blue)** - all the custom logic defined by the `runtime`. This is very application specific
- **external data sources (green)** - data sources defined on the storage pool which should be validated and archived
- **Key-Value-Store (yellow)** - a local Key-Value-Store which serves as cache for the protocol node
- **Permanent Storage (grey)** - a web3 permanent storage provider like Arweave where all the validated data from KYVE gets archived
- **KYVE blockchain (orange)** - the KYVE chain which keeps track of bundle proposals and votes

<br/>
<br/>
