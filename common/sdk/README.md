<div align="center">
  <h1>@kyvejs/sdk</h1>
</div>

![banner](https://arweave.net/Kb1ltyFwjCHflMAcZ7m6C0B7bslOBQ6laRhimaGFthE)

@kyvejs/sdk is a JavaScript library for interacting with the [Kyve network](https://www.kyve.network/) blockchain.

## Installation

npm 
```bash
npm install @kyvejs/sdk
```
yarn

```bash
yarn add @kyvejs/sdk
```

## Usage example

```ts
    const sdk = new KyveSDK('korellia');
    const client = await sdk.fromMnemonic(mnemonic);
    const transferTx= await client.kyve.base.v1beta1.transfer('kyve1qcual...', '1000000000');
    const receipt = await transferTxPromise.execute()
```

## Full documentation

### Table of contents
 - [Configuring an sdk](#configuring-an-sdk)
 - [Initiate client](#initiate-client)
 - [Transactions](#transactions)
 - [Transactions all](#transactions-all)
 - [Queries](#queries)
 
## Configuring an sdk

Instantiate the sdk with the network name. 
network name can be one of the following: 
- korellia
- alpha 
- beta
- local

```ts
    const sdk = new KyveSDK('korellia');
```
Sdk instance can be configured with a network object.

```ts
    const network = {
        rpc: "https://rpc.korellia.kyve.network",
        rest: "https://api.korellia.kyve.network",
        chainId: "korellia",
        chainName: "Korellia",
   }
    const sdk = new KyveSDK(network);
```

## Initiate client

To initiate a transaction, you need to create a client instance.

```ts
    const sdk = new KyveSDK('korellia');
    const client = await sdk.fromMnemonic(mnemonic);
```

Client instance can be created from a mnemonic or a private key.

```ts
    const clientMnenonic = await sdk.fromMnemonic(mnemonic);
    const clientPrivateKey = await sdk.fromPrivateKey(privateKey);
```
For frontend applications, you can use the following method to create a client instance.

@kyve/sdk has native supports for following cosmos wallets:
- Keplr 
- Cosmostation

```ts
    const keplrClient = await sdk.fromKeplr();
    const cosmostationClient = await sdk.fromCosmostation();
```
## Transactions

### Kyve transactions

All kyve transactions can be accessible with `kyve` property 
```ts
    const transferTx = await client.kyve.base.v1beta1.transfer('kyve1qcual...', '1000000000');
```

We are highly recommend to use typescript for better intellisense and type safety.

### Transaction Promise

[//]: # (# todo: create better naming for this. TransactionPromise is not a good name)

Each transaction returns a transaction promise. It's a not execute transaction. It's helpful because you can get the transaction hash before executed.
```ts
    const transferTxPromise = await client.kyve.base.v1beta1.transfer('kyve1qcual...', '1000000000');
    transferTxPromise.txHash // returns transaction hash
    const receipt = await transferTxPromise.execute();
```
### Cosmos transactions

@kyve/sdk is a wrapper around Cosmjs, you can access Cosmjs [SigningStargateClient](https://cosmos.github.io/cosmjs/latest/stargate/classes/SigningStargateClient.html) instance with `nativeClient` property.
```ts
    const tx = await client.nativeClient.signAndBroadcast(
      wallet.address,
      [msg],
      fee,
      memo
    );
```

## Transactions All 

Each transaction returns an incomplete transaction. It gives the ability to execute several messages in one transaction
```ts
const multiTransferTxPromise = await sdkInstance.kyve.base.v1beta1.multiTransfer([
        'kyve1qcual...',
        'kyve1pfs...'
    ], '1000000000');
    const transferTxPromise = await sdkInstance.kyve.base.v1beta1.transfer('kyve1qcua....', '1000000000');
    // combine several messages to one
    const txsAllResultPromise = await sdkInstance.txsAll([multiTransferTxPromise, transferTxPromise]);
    const receipt = await txsAllResultPromise.execute();
```
Any transaction can be added to the `txsAll` method. Also, you can pass to `txsAll` result of another `txsAll` method.

```ts
    const txsAllResultPromise = await sdkInstance.txsAll([await sdkInstance.txsAll([trx1, trx2]), transferTxPromise]);
    const receipt = await txsAllResultPromise.execute();
```
The approach is same like you work with JavaScript `Promise` and `Promise.all` methods.

## Queries
To interact with the Kyve blockchain rest api, you can use `lcdClient`.

```ts
    const query = await sdk.createLCDClient();
    const pools = query.kyve.query.v1beta1.pools();
```
We are highly recommend to use typescript for better intellisense and type safety.