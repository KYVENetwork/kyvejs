import BigNumber from "bignumber.js";
interface DataSource {
  extractPrices(): Record<string, BigNumber>;
}

export class Binance implements DataSource {
  private prices: any;
  constructor(priceObject: any) {
    this.prices = priceObject;
  }
  extractPrices(): Record<string, BigNumber> {
    const { price: bitcoin } =
      this.prices.find((obj: any) => obj.symbol === "BTCUSDT");
    const { price: ethereum } =
      this.prices.find((obj: any) => obj.symbol === "ETHUSDT");
    const { price: atom } =
      this.prices.find((obj: any) => obj.symbol === "ATOMUSDT");

    return {
      BTC: new BigNumber(bitcoin).decimalPlaces(4),
      ETH: new BigNumber(ethereum).decimalPlaces(4),
      ATOM: new BigNumber(atom).decimalPlaces(4),
    };
  }
}

export class Coincap implements DataSource {
  private prices: any;
  constructor(priceObject: any) {
    this.prices = priceObject;
  }
  extractPrices(): Record<string, BigNumber> {
    const bitcoin =
      (this.prices.data.find((obj: any) => obj.name === "Bitcoin")).priceUsd;
    const ethereum =
      (this.prices.data.find((obj: any) => obj.name === "Ethereum")).priceUsd;
    const atom =
      (this.prices.data.find((obj: any) => obj.name === "Cosmos")).priceUsd;

    return {
      BTC: new BigNumber(bitcoin).decimalPlaces(4),
      ETH: new BigNumber(ethereum).decimalPlaces(4),
      ATOM: new BigNumber(atom).decimalPlaces(4),
    };
  }
}
