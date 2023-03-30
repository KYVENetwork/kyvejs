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
      this.prices.find((obj: any) => obj.symbol === "BNBBTC") || {};
    const { price: ethereum } =
      this.prices.find((obj: any) => obj.symbol === "ETHBTC") || {};
    const { price: atom } =
      this.prices.find((obj: any) => obj.symbol === "ATOMBTC") || {};

    if (
      !Object.keys(bitcoin).length ||
      !Object.keys(ethereum).length ||
      !Object.keys(atom).length
    ) {
      console.error("Price extraction of Binance failed.");
    }

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
    const { bitcoin } =
      this.prices.data.find((obj: any) => obj.name === "Bitcoin") || {};
    const { ethereum } =
      this.prices.data.find((obj: any) => obj.name === "Ethereum") || {};
    const { atom } =
      this.prices.data.find((obj: any) => obj.name === "Cosmos") || {};

    if (
      !Object.keys(bitcoin).length ||
      !Object.keys(ethereum).length ||
      !Object.keys(atom).length
    ) {
      console.error("Price extraction of Coincap failed.");
    }

    return {
      BTC: new BigNumber(bitcoin).decimalPlaces(4),
      ETH: new BigNumber(ethereum).decimalPlaces(4),
      ATOM: new BigNumber(atom).decimalPlaces(4),
    };
  }
}
