import { parseCoins, Coin } from "@cosmjs/amino";
import BN from "bn.js";

type CoinArgs = String[] | Coin[] | Coins[];

export class Coins {
  private coinMap: Map<string, BN> = new Map();

  constructor(...coinArgs: CoinArgs) {
    this.setCoinMap(this.coinArgsToCoins(...coinArgs));
  }

  private get coins(): Coin[] {
    return this.sortCoins(
      Array.from(this.coinMap.entries()).map(([denom, amount]) => ({
        denom,
        amount: amount.toString(),
      }))
    );
  }

  public toString(): string {
    return this.coinsToString(this.coins);
  }

  public toArray(): Coin[] {
    return this.coins;
  }

  public len(): number {
    return this.coinMap.size;
  }

  public isEmpty(): boolean {
    return !this.len();
  }

  public isZero(): boolean {
    return Array.from(this.coinMap.values()).every((amount) => amount.isZero());
  }

  public amountOf(denom: string): string {
    return this.coinMap.get(denom)?.toString() ?? "0";
  }

  public find(denom: string): Coin | undefined {
    return this.coins.find((coin) => coin.denom === denom);
  }

  public equal(...coinArgs: CoinArgs): boolean {
    const coins = this.coinArgsToCoins(...coinArgs);
    return this.toString() === this.coinsToString(coins);
  }

  public denoms(): string[] {
    return this.coins.map((coin) => coin.denom);
  }

  public isAnyNegative(): boolean {
    return Array.from(this.coinMap.values()).some((amount) => amount.isNeg());
  }

  public isAllPositive(): boolean {
    return (
      !this.isEmpty() &&
      Array.from(this.coinMap.values()).every((amount) => amount.gtn(0))
    );
  }

  public add(...coinArgs: CoinArgs): Coins {
    this.coinArgsToCoins(...coinArgs).forEach((coin) => {
      this.coinMap.set(
        coin.denom,
        (this.coinMap.get(coin.denom) || new BN(0)).add(new BN(coin.amount))
      );
    });

    return new Coins(this);
  }

  public sub(...coinArgs: CoinArgs): Coins {
    this.coinArgsToCoins(...coinArgs).forEach((coin) => {
      this.coinMap.set(
        coin.denom,
        (this.coinMap.get(coin.denom) || new BN(0)).sub(new BN(coin.amount))
      );
    });

    return new Coins(this);
  }

  public mul(value: number | string): Coins {
    this.coinMap.forEach((amount, denom) => {
      this.coinMap.set(denom, amount.mul(new BN(value)));
    });

    return new Coins(this);
  }

  public div(value: number | string): Coins {
    this.coinMap.forEach((amount, denom) => {
      this.coinMap.set(denom, new BN(amount.div(new BN(value)).toString()));
    });

    return new Coins(this);
  }

  public min(...coinArgs: CoinArgs): Coins {
    const minCoinMap: Map<string, BN> = new Map();

    this.coinArgsToCoins(...coinArgs)
      .filter((coin) => this.coinMap.has(coin.denom))
      .forEach((coin) => {
        minCoinMap.set(
          coin.denom,
          BN.min(this.coinMap.get(coin.denom)!, new BN(coin.amount))
        );
      });

    const minCoins: Coin[] = Array.from(minCoinMap.entries()).map(
      ([denom, amount]) => ({
        denom,
        amount: amount.toString(),
      })
    );

    return new Coins(...minCoins);
  }

  public max(...coinArgs: CoinArgs): Coins {
    this.coinArgsToCoins(...coinArgs).forEach((coin) => {
      this.coinMap.set(
        coin.denom,
        BN.max(this.coinMap.get(coin.denom) || new BN(0), new BN(coin.amount))
      );
    });

    return new Coins(this);
  }

  public isAllGTE(...coinArgs: CoinArgs): boolean {
    return this.coinArgsToCoins(...coinArgs).every(
      (coin) =>
        this.coinMap.has(coin.denom) &&
        this.coinMap.get(coin.denom)!.gte(new BN(coin.amount))
    );
  }

  public isAllGT(...coinArgs: CoinArgs): boolean {
    return this.coinArgsToCoins(...coinArgs).every(
      (coin) =>
        this.coinMap.has(coin.denom) &&
        this.coinMap.get(coin.denom)!.gt(new BN(coin.amount))
    );
  }

  public isAllLTE(...coinArgs: CoinArgs): boolean {
    return this.coinArgsToCoins(...coinArgs).every(
      (coin) =>
        this.coinMap.has(coin.denom) &&
        this.coinMap.get(coin.denom)!.lte(new BN(coin.amount))
    );
  }

  public isAllLT(...coinArgs: CoinArgs): boolean {
    return this.coinArgsToCoins(...coinArgs).every(
      (coin) =>
        this.coinMap.has(coin.denom) &&
        this.coinMap.get(coin.denom)!.lt(new BN(coin.amount))
    );
  }

  public isAnyGTE(...coinArgs: CoinArgs): boolean {
    return this.coinArgsToCoins(...coinArgs).some(
      (coin) =>
        this.coinMap.has(coin.denom) &&
        this.coinMap.get(coin.denom)!.gte(new BN(coin.amount))
    );
  }

  public isAnyGT(...coinArgs: CoinArgs): boolean {
    return this.coinArgsToCoins(...coinArgs).some(
      (coin) =>
        this.coinMap.has(coin.denom) &&
        this.coinMap.get(coin.denom)!.gt(new BN(coin.amount))
    );
  }

  public isAnyLTE(...coinArgs: CoinArgs): boolean {
    return this.coinArgsToCoins(...coinArgs).some(
      (coin) =>
        this.coinMap.has(coin.denom) &&
        this.coinMap.get(coin.denom)!.lte(new BN(coin.amount))
    );
  }

  public isAnyLT(...coinArgs: CoinArgs): boolean {
    return this.coinArgsToCoins(...coinArgs).some(
      (coin) =>
        this.coinMap.has(coin.denom) &&
        this.coinMap.get(coin.denom)!.lt(new BN(coin.amount))
    );
  }

  private coinArgsToCoins(...coinArgs: CoinArgs): Coin[] {
    const coins: Coin[] = [];

    coinArgs.forEach((coin) => {
      if (coin instanceof Coins) {
        coins.push(...coin.toArray());
      } else if (typeof coin === "string") {
        coins.push(...parseCoins(coin));
      } else {
        coins.push(coin as Coin);
      }
    });

    const uniques = Array.from(new Set(coins.map((c) => c.denom)));
    if (uniques.length < coins.length) {
      throw new Error("Found duplicate coins");
    }

    return coins;
  }

  private setCoinMap(coins: Coin[]) {
    coins.forEach((coin) => {
      this.coinMap.set(coin.denom, new BN(coin.amount));
    });
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
