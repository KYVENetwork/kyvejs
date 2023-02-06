import { AddChainParams } from "@cosmostation/extension-client/types/message";
import { Bech32Address } from "@keplr-wallet/cosmos";
import { ChainInfo } from "@keplr-wallet/types";

export const DEFAULT_COIN_DENOM = "tkyve";
export const DEFAULT_COIN_DECIMALS = 9;

export const COIN = "KYVE";
export const PREFIX = "kyve";
export const GOV_AUTHORITY = "kyve10d07y265gmmuvt4z0w9aw880jnsr700jdv7nah";

export const SUPPORTED_WALLETS = {
  KEPLER: "KEPLER",
  COSMOSTATION: "COSMOSTATION",
} as const;

export type SDKConfig = {
  chainId: string;
  chainName: string;
  rpc: string;
  rest: string;
  coinDenom: string;
  coinDecimals: number;
};

export type SDKConfigInput = {
  chainId: string;
  chainName: string;
  rpc: string;
  rest: string;
  coinDenom?: string;
  coinDecimals?: number;
};

export const KYVE_KEPLR_CONFIG: ChainInfo = {
  rpc: "",
  rest: "",
  chainId: "",
  chainName: "",
  stakeCurrency: {
    coinDenom: "KYVE",
    coinMinimalDenom: "",
    coinDecimals: 0,
  },
  bip44: {
    coinType: 118,
  },
  bech32Config: Bech32Address.defaultBech32Config("kyve"),
  currencies: [],
  feeCurrencies: [],
  coinType: 118,
  features: ["ibc-transfer", "ibc-go"],
};

export const KYVE_COSMOSTATION_CONFIG: AddChainParams = {
  chainId: "",
  restURL: "",
  chainName: "",
  baseDenom: "",
  displayDenom: "KYVE",
  addressPrefix: PREFIX,
  coinType: "118",
  decimals: 0,
  gasRate: {
    tiny: "1.6",
    low: "2",
    average: "0.8",
  },
};
