import { parseCoins, Coin } from "@cosmjs/amino";
import BigNumber from "bignumber.js";

BigNumber.set({
  ROUNDING_MODE: 3,
});

type CoinArgs = String[] | Coin[] | Coins[];

export class Coins {
  private coinMap: Map<string, BigNumber> = new Map();

  private get coins(): Coin[] {
    return this.sortCoins(
      Array.from(this.coinMap.entries()).map(([denom, amount]) => ({
        denom,
        amount: amount.toFixed(0),
      }))
    ).filter((coin) => !new BigNumber(coin.amount).isZero());
  }

  /**
   * constructor creates a Coins instance from the CoinArgs.
   * On this Coins instance multiple arithmetic operations
   * can be performed. This will fail if the denoms are invalid
   * or if there are any negative values.
   *
   * Examples:
   *
   * new Coins("10acoin,20bcoin,30coin")
   * new Coins({"denom": "acoin", "amount": "10"}, {"denom": "bcoin", "amount": "20"})
   * new Coins(...[{"denom": "acoin", "amount": "10"}, {"denom": "bcoin", "amount": "20"}])
   * new Coins(new Coins("10acoin,20bcoin,30coin"))
   *
   * @method constructor
   * @param {CoinArgs} coins
   * @return {void}
   */
  constructor(...coins: CoinArgs) {
    this.coinMap = this.coinArgsToMap(...coins);
  }

  /**
   * toString encodes the coin array into a string. The coins
   * are sorted after their denom.
   *
   * Examples:
   *
   * new Coins({"denom": "acoin", "amount": "10"}, {"denom": "bcoin", "amount": "20"}).toString()
   * -> "10acoin,20bcoin"
   *
   * @method toString
   * @return {string}
   */
  public toString(): string {
    return this.coinsToString(this.coins);
  }

  /**
   * toArray returns the coins in a coin array. The coins are
   * sorted after their denom.
   *
   * Examples:
   *
   * new Coins("10acoin,20bcoin").toArray()
   * -> [{"denom": "acoin", "amount": "10"}, {"denom": "bcoin", "amount": "20"}]
   *
   * @method toArray
   * @return {Coin[]}
   */
  public toArray(): Coin[] {
    return this.coins;
  }

  /**
   * len returns the amount of coins.
   *
   * Examples:
   *
   * new Coins("10acoin,20bcoin").len()
   * -> 2
   *
   * @method len
   * @return {number}
   */
  public len(): number {
    return this.coins.length;
  }

  /**
   * empty returns true if there are no coins
   * and false otherwise.
   *
   * Examples:
   *
   * new Coins("10acoin,20bcoin").empty()
   * -> false
   * new Coins().empty()
   * -> true
   *
   * @method empty
   * @return {boolean}
   */
  public empty(): boolean {
    return !this.len();
  }

  /**
   * isZero returns true if there are no coins or
   * all coins are zero.
   *
   * Examples:
   *
   * new Coins().isZero()
   * -> true
   * new Coins("0acoin,0bcoin").isZero()
   * -> true
   * new Coins("0acoin,5bcoin").isZero()
   * -> false
   *
   * @method isZero
   * @return {boolean}
   */
  public isZero(): boolean {
    return Array.from(this.coinMap.values()).every((amount) => amount.isZero());
  }

  /**
   * amountOf returns the amount of the denom. If
   * the coin with the denom is not present it
   * returns a zero amount.
   *
   * @method amountOf
   * @param {string} denom
   * @return {string}
   */
  public amountOf(denom: string): string {
    return this.coinMap.get(denom)?.toString() ?? "0";
  }

  /**
   * find returns the coin if it exists and is
   * not zero, otherwise it returns undefined.
   *
   * @method find
   * @param {string} denom
   * @return {Coin | undefined}
   */
  public find(denom: string): Coin | undefined {
    return this.coins.find((coin) => coin.denom === denom);
  }

  /**
   * equal returns true if the two sets of coins have
   * the same value.
   *
   * @method equal
   * @param {CoinArgs} coinsB
   * @return {boolean}
   */
  public equal(...coinsB: CoinArgs): boolean {
    const coins = this.coinArgsToCoins(...coinsB);
    return this.toString() === this.coinsToString(coins);
  }

  /**
   * denoms returns all denoms ordered of the coins
   * set which are not zero.
   *
   * @method denoms
   * @return {string[]}
   */
  public denoms(): string[] {
    return this.coins.map((coin) => coin.denom);
  }

  /**
   * isAnyNegative returns true if there is at least one
   * coin whose amount is negative; returns false otherwise.
   * It returns false if the coin set is empty too.
   *
   * @method isAnyNegative
   * @return {boolean}
   */
  public isAnyNegative(): boolean {
    return Array.from(this.coinMap.values()).some((amount) =>
      amount.isNegative()
    );
  }

  /**
   * isAllPositive returns true if there is at least
   * one coin and all currencies have a positive value.
   *
   * @method isAllPositive
   * @return {boolean}
   */
  public isAllPositive(): boolean {
    return (
      !this.empty() &&
      Array.from(this.coinMap.values()).every((amount) => amount.gt(0))
    );
  }

  /**
   * add adds two sets of coins.
   *
   * Examples:
   * {2A} + {A, 2B} = {3A, 2B}
   * {2A} + {0B} = {2A}
   *
   * @method add
   * @param {CoinArgs} coinsB
   * @return {Coins}
   */
  public add(...coinsB: CoinArgs): Coins {
    this.coinArgsToCoins(...coinsB).forEach((coin) => {
      this.coinMap.set(
        coin.denom,
        (this.coinMap.get(coin.denom) || new BigNumber(0)).plus(coin.amount)
      );
    });

    return new Coins(this);
  }

  /**
   * sub subtracts a set of coins from another.
   *
   * Examples:
   *
   * {2A, 3B} - {A} = {A, 3B}
   * {2A} - {0B} = {2A}
   * {A, B} - {A} = {B}
   *
   * @method sub
   * @param {CoinArgs} coinsB
   * @return {Coins}
   */
  public sub(...coinsB: CoinArgs): Coins {
    this.coinArgsToCoins(...coinsB).forEach((coin) => {
      this.coinMap.set(
        coin.denom,
        (this.coinMap.get(coin.denom) || new BigNumber(0)).minus(coin.amount)
      );
    });

    return new Coins(this);
  }

  /**
   * mul performs the scalar multiplication of coins with a `multiplier`.
   * All coins are multiplied by x
   *
   * Examples:
   *
   * {2A, 3B} * 2 = {4A, 6B}
   * {2A} * 0 = {}
   *
   * @method mul
   * @param {number | string} value
   * @return {Coins}
   */
  public mul(value: number | string): Coins {
    this.coinMap.forEach((amount, denom) => {
      this.coinMap.set(
        denom,
        new BigNumber(amount.multipliedBy(value).toFixed(0))
      );
    });

    return new Coins(this);
  }

  /**
   * quo performs the scalar division of coins with a `divisor`.
   * All coins are divided by x and truncated.
   *
   * Examples:
   *
   * {2A, 30B} / 2 = {1A, 15B}
   * {2A} / 2 = {1A}
   * {4A} / {8A} = {}
   * {2A} / 0 = throws
   *
   * @method quo
   * @param {number | string} value
   * @return {Coins}
   */
  public quo(value: number | string): Coins {
    this.coinMap.forEach((amount, denom) => {
      this.coinMap.set(denom, amount.idiv(value));
    });

    return new Coins(this);
  }

  /**
   * min takes two coin sets and takes the minimum amount
   * of each coin.
   *
   * Examples:
   *
   * {1A, 3B, 2C}.Min({4A, 2B, 2C} = {1A, 2B, 2C})
   * {2A, 3B}.Min({1B, 4C}) = {1B}
   * {1A, 2B}.Min({3C}) = {}
   *
   * @method min
   * @param {CoinArgs} coinsB
   * @return {Coins}
   */
  public min(...coinsB: CoinArgs): Coins {
    return new Coins(
      ...this.coinArgsToCoins(...coinsB).map((coin) => ({
        denom: coin.denom,
        amount: BigNumber.min(
          this.coinMap.get(coin.denom) || new BigNumber(0),
          coin.amount
        ).toString(),
      }))
    );
  }

  /**
   * max takes two coin sets and takes the maximum amount
   * of each coin.
   *
   * Examples:
   *
   * {1A, 3B, 2C}.Max({4A, 2B, 2C} = {4A, 3B, 2C})
   * {2A, 3B}.Max({1B, 4C}) = {2A, 3B, 4C}
   * {1A, 2B}.Max({}) = {1A, 2B}
   *
   * @method max
   * @param {CoinArgs} coinsB
   * @return {Coins}
   */
  public max(...coinsB: CoinArgs): Coins {
    this.coinArgsToCoins(...coinsB).forEach((coin) => {
      this.coinMap.set(
        coin.denom,
        BigNumber.max(
          this.coinMap.get(coin.denom) || new BigNumber(0),
          coin.amount
        )
      );
    });

    return new Coins(this);
  }

  /**
   * isAllGTE returns false if for any denom in coinsB,
   * the denom is present at a smaller amount in coins,
   * else returns true.
   *
   * Examples:
   *
   * {2A, 3B}.isAllGTE({2A, 1B}) = true
   * {1A}.isAllGTE({4A, 2B, 2C} = false
   * {1A, 2B}.isAllGTE({}) = true
   * {}.isAllGTE({1A, 2B}) = false
   *
   * @method isAllGTE
   * @param {CoinArgs} coinsB
   * @return {Coins}
   */
  public isAllGTE(...coinsB: CoinArgs): boolean {
    return this.coinArgsToCoins(...coinsB).every(
      (coin) =>
        this.coinMap.has(coin.denom) &&
        this.coinMap.get(coin.denom)!.gte(coin.amount)
    );
  }

  /**
   * isAllGT returns false if for any denom in coinsB,
   * the denom is present at a smaller or equal amount in
   * coins, else returns true.
   *
   * Examples:
   *
   * {2A, 3B}.isAllGT({1A, 1B}) = true
   * {1A}.isAllGT({} = false
   * {1A, 2B}.isAllGT({}) = true
   * {}.isAllGT({1A, 2B}) = false
   *
   * @method isAllGTE
   * @param {CoinArgs} coinsB
   * @return {Coins}
   */
  public isAllGT(...coinsB: CoinArgs): boolean {
    return this.coinArgsToCoins(...coinsB).every(
      (coin) =>
        this.coinMap.has(coin.denom) &&
        this.coinMap.get(coin.denom)!.gt(coin.amount)
    );
  }

  /**
   * isAllLTE returns false if for any denom in coinsB,
   * the denom is present at a greater amount in coins,
   * else returns true.
   *
   * Examples:
   *
   * {2A, 1B}.isAllLTE({2A, 3B}) = true
   * {4A, 2B, 2C}.isAllLTE({1A} = false
   * {}.isAllLTE({1A, 2B}) = true
   * {1A, 2B}.isAllLTE({}) = false
   *
   * @method isAllLTE
   * @param {CoinArgs} coinsB
   * @return {Coins}
   */
  public isAllLTE(...coinsB: CoinArgs): boolean {
    const coins = this.coinArgsToMap(...coinsB);

    return Array.from(this.coinMap.keys()).every(
      (denom) =>
        coins.has(denom) && this.coinMap.get(denom)!.lte(coins.get(denom)!)
    );
  }

  /**
   * isAllLT returns false if for any denom in coinsB,
   * the denom is present at a greater or equal amount
   * in coins, else returns true.
   *
   * Examples:
   *
   * {1A, 1B}.isAllLT({2A, 3B}) = true
   * {4A, 2B, 2C}.isAllLT({1A} = false
   * {}.isAllLT({1A, 2B}) = true
   * {1A, 2B}.isAllLT({}) = false
   *
   * @method isAllLT
   * @param {CoinArgs} coinsB
   * @return {Coins}
   */
  public isAllLT(...coinsB: CoinArgs): boolean {
    const coins = this.coinArgsToMap(...coinsB);

    return Array.from(this.coinMap.keys()).every(
      (denom) =>
        coins.has(denom) && this.coinMap.get(denom)!.lt(coins.get(denom)!)
    );
  }

  /**
   * isAnyGTE returns true if coins contains at least
   * one denom that is present at a greater or equal
   * amount in coinsB, it returns false otherwise.
   *
   * Examples:
   *
   * {2A, 3B}.isAnyGTE({}) = false
   * {}.isAnyGTE({2A, 3B}) = false
   * {2B}.isAnyGTE({4A, 2B, 2C} = true
   * {2A, 1C}.isAnyGTE({4A, 2B, 2C} = false
   *
   * @method isAnyGTE
   * @param {CoinArgs} coinsB
   * @return {Coins}
   */
  public isAnyGTE(...coinsB: CoinArgs): boolean {
    const coins = this.coinArgsToMap(...coinsB);

    return Array.from(this.coinMap.keys()).some(
      (denom) =>
        coins.has(denom) && this.coinMap.get(denom)!.gte(coins.get(denom)!)
    );
  }

  /**
   * isAnyGT returns true if coins contains at least
   * one denom that is present at a greater
   * amount in coinsB, it returns false otherwise.
   *
   * Examples:
   *
   * {2A, 3B}.isAnyGT({}) = false
   * {}.isAnyGT({2A, 3B}) = false
   * {3B}.isAnyGT({4A, 2B, 2C} = true
   * {4A, 1C}.isAnyGT({4A, 2B, 2C} = false
   *
   * @method isAnyGT
   * @param {CoinArgs} coinsB
   * @return {Coins}
   */
  public isAnyGT(...coinsB: CoinArgs): boolean {
    const coins = this.coinArgsToMap(...coinsB);

    return Array.from(this.coinMap.keys()).some(
      (denom) =>
        coins.has(denom) && this.coinMap.get(denom)!.gt(coins.get(denom)!)
    );
  }

  /**
   * isAnyLTE returns true if coins contains at least
   * one denom that is present at a smaller or equal
   * amount in coinsB, it returns false otherwise.
   *
   * Examples:
   *
   * {2A, 3B}.isAnyLTE({}) = false
   * {}.isAnyLTE({2A, 3B}) = false
   * {2B}.isAnyLTE({4A, 2B, 2C} = true
   * {6A, 3C}.isAnyLTE({4A, 2B, 2C} = false
   *
   * @method isAnyLTE
   * @param {CoinArgs} coinsB
   * @return {Coins}
   */
  public isAnyLTE(...coinsB: CoinArgs): boolean {
    const coins = this.coinArgsToMap(...coinsB);

    return Array.from(this.coinMap.keys()).some(
      (denom) =>
        coins.has(denom) && this.coinMap.get(denom)!.lte(coins.get(denom)!)
    );
  }

  /**
   * isAnyLT returns true if coins contains at least
   * one denom that is present at a smaller
   * amount in coinsB, it returns false otherwise.
   *
   * Examples:
   *
   * {2A, 3B}.isAnyLT({}) = false
   * {}.isAnyLT({2A, 3B}) = false
   * {1B}.isAnyLT({4A, 2B, 2C} = true
   * {4A, 3C}.isAnyLT({4A, 2B, 2C} = false
   *
   * @method isAnyLT
   * @param {CoinArgs} coinsB
   * @return {Coins}
   */
  public isAnyLT(...coinsB: CoinArgs): boolean {
    const coins = this.coinArgsToMap(...coinsB);

    return Array.from(this.coinMap.keys()).some(
      (denom) =>
        coins.has(denom) && this.coinMap.get(denom)!.lt(coins.get(denom)!)
    );
  }

  private coinArgsToCoins(...coinArgs: CoinArgs): Coin[] {
    let coins: Coin[] = [];

    coinArgs.forEach((coin) => {
      if (coin instanceof Coins) {
        coins.push(...coin.toArray());
      } else if (typeof coin === "string") {
        coins.push(...parseCoins(coin));
      } else {
        coins.push(coin as Coin);
      }
    });

    // use regex checks in parseCoins to validate coin denoms
    parseCoins(this.coinsToString(coins));

    // since parseCoins does not check for duplicates we do it here
    if (Array.from(new Set(coins.map((c) => c.denom))).length < coins.length) {
      throw new Error("Got duplicate coins");
    }

    return coins;
  }

  private coinArgsToMap(...coinArgs: CoinArgs): Map<string, BigNumber> {
    const map: Map<string, BigNumber> = new Map();

    this.coinArgsToCoins(...coinArgs).forEach((coin) => {
      map.set(coin.denom, new BigNumber(coin.amount));
    });

    return map;
  }

  private sortCoins(coins: Coin[]): Coin[] {
    return [...coins].sort((a, b) => a.denom.localeCompare(b.denom));
  }

  private coinsToString(coins: Coin[]): string {
    return this.sortCoins(coins)
      .map((c) => `${c.amount.toString()}${c.denom}`)
      .join(",");
  }
}

export { parseCoins, Coin } from "@cosmjs/amino";
