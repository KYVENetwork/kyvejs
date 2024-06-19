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

Arithmetic methods:

```ts
new Coins("1acoin,2bcoin").add({denom: "ccoin", amount: "3"}).mul(2).toString()
-> "2acoin,4bcoin,6ccoin"

new Coins("1acoin,2bcoin,4ccoin").sub("1acoin").div(2).toArray()
-> [{denom: "bcoin", amount: "1"}, {denom: "ccoin", amount: "2"}]
```

Checks and info methods:

```ts
const myCoins = new Coins("1acoin,2bcoin")

myCoins.isZero()
-> false

myCoins.len()
-> 2

myCoins.equal("1acoin,2bcoin")
-> true

myCoins.amountOf("bcoin")
-> "2"

myCoins.min("1bcoin,1ccoin").toString()
-> "1bcoin"

myCoins.max("1bcoin,1ccoin").toString()
-> "1acoin,2bcoin,1ccoin"
```

Comparison methods:

```ts
const myCoins = new Coins({denom: "bcoin", amount: "1"}, {denom: "ccoin", amount: "2"})

new Coins("1acoin,2bcoin,3ccoin").isAllGT(myCoins)
-> true

new Coins("2bcoin,1ccoin").isAnyLT(myCoins)
-> true
```

## All available methods

The following methods are available on the Coins class:

- toString() - return coins to string object
- toArray() - return coins in json form with denom and amount
- len() - get the number of coins
- empty() - check if coins are empty
- isZero() - check if all coins have a zero value
- amountOf() - get the amount of a coin
- find() - get the coin by denom
- equal() - assert if to coin sets are equal
- denoms() - get all denoms
- isAnyNegative() - check if any coin is negative
- isAllPositive() - check if all coins are positive
- add() - add two coin sets together
- sub() - subtract two coin sets
- mul() - multiply each coin with a number
- quo() - divide each coin and truncate with a number
- min() - get the minimum amounts of two coin sets
- max() - get the maximum amounts of two coin sets
- isAllGTE() - check if all coins are greater equal
- isAllGT() - check if all coins are greater
- isAllLTE() - check if all coins are less equal
- isAllLT() - check if all coins are less
- isAnyGTE() - check if any coins are greater equal
- isAnyGT() - check if any coins are greater
- isAnyLTE() - check if any coins are less equal
- isAnyLT() - check if any coins are less
