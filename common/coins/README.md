# Coins

@kyvejs/coins is an sdk for doing arithmetic operations on Cosmos Coins, it is an exact implementation of the
sdk.Coins type in Typescript, the original Golang implementation can be found here: https://github.com/cosmos/cosmos-sdk/blob/main/types/coin.go

## Installation

You can install this package with npm or yarn:

```bash
yarn add @kyvejs/coins
npm i @kyvejs/coins
```

## Usage

Here are some examples on how to use the coins sdk:

```ts
const coinsA = new Coins({"denom": "acoin", amount: "10"}, {"denom": "bcoin", amount: "20"})
const coinsB = new Coins("30ccoin")

coinsA.add(coinsB).quo(10).toString()
-> "1acoin,2bcoin,3ccoin"

coinsA.equal(coinsB)
-> false

coinsA.max(coinsB).toArray()
-> [{"denom": "acoin", amount: "10"}, {"denom": "bcoin", amount: "20"}, {"denom": "ccoin", amount: "30"}]
```
