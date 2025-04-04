import { AddChainParams } from "@cosmostation/extension-client/types/message";
import { Bech32Address } from "@keplr-wallet/cosmos";
import { ChainInfo } from "@keplr-wallet/types";

export const PREFIX = "kyve";
export const VAL_PREFIX = "kyvevaloper";
export const GOV_AUTHORITY = "kyve10d07y265gmmuvt4z0w9aw880jnsr700jdv7nah";
export const GAS_MULTIPLIER = 1.5;
export const COIN_TYPE = 118;

export const MAINNET_CHAIN_ID = "kyve-1";
export const TESTNET_CHAIN_ID = "kaon-1";
export const DEVNET_CHAIN_ID = "korellia-2";
export const LOCAL_CHAIN_ID = "kyve-local";

export type IConfig = {
  chainId: string;
  chainName: string;
  rpc: string;
  rest: string;
  coin: string;
  coinDenom: string;
  coinDecimals: number;
  gasPrice: number;
};

// chains are always identified by their chain id
export const SUPPORTED_CHAIN_CONFIGS = {
  "kyve-1": {
    chainId: "kyve-1",
    chainName: "KYVE",
    rpc: "https://rpc.kyve.network",
    rest: "https://api.kyve.network",
    coin: "KYVE",
    coinDenom: "ukyve",
    coinDecimals: 6,
    gasPrice: 2,
  },
  "kaon-1": {
    chainId: "kaon-1",
    chainName: "KYVE Kaon",
    rpc: "https://rpc.kaon.kyve.network",
    rest: "https://api.kaon.kyve.network",
    coin: "KYVE",
    coinDenom: "tkyve",
    coinDecimals: 6,
    gasPrice: 2,
  },
  "korellia-2": {
    chainId: "korellia-2",
    chainName: "KYVE Korellia",
    rpc: "https://rpc.korellia.kyve.network",
    rest: "https://api.korellia.kyve.network",
    coin: "KYVE",
    coinDenom: "tkyve",
    coinDecimals: 6,
    gasPrice: 2,
  },
  "kyve-beta": {
    chainId: "kyve-beta",
    chainName: "KYVE-Beta",
    rpc: "https://rpc.beta.kyve.network",
    rest: "https://api.beta.kyve.network",
    coin: "KYVE",
    coinDenom: "tkyve",
    coinDecimals: 6,
    gasPrice: 2,
  },
  "kyve-alpha": {
    chainId: "kyve-alpha",
    chainName: "KYVE Alpha",
    rpc: "https://rpc.alpha.kyve.network",
    rest: "https://api.alpha.kyve.network",
    coin: "KYVE",
    coinDenom: "tkyve",
    coinDecimals: 6,
    gasPrice: 2,
  },
  "kyve-local": {
    chainId: "kyve-local",
    chainName: "KYVE Local",
    rpc: "http://0.0.0.0:26657",
    rest: "http://0.0.0.0:1317",
    coin: "KYVE",
    coinDenom: "tkyve",
    coinDecimals: 6,
    gasPrice: 2,
  },
};

export type SupportedChains = keyof typeof SUPPORTED_CHAIN_CONFIGS;

export const SUPPORTED_WALLETS = {
  KEPLR: "KEPLR",
  COSMOSTATION: "COSMOSTATION",
  LEAP: "LEAP",
} as const;

export const KYVE_KEPLR_CONFIG: ChainInfo = {
  rpc: "",
  rest: "",
  chainId: "",
  chainName: "",
  stakeCurrency: {
    coinDenom: "",
    coinMinimalDenom: "",
    coinDecimals: 0,
  },
  bip44: {
    coinType: COIN_TYPE,
  },
  bech32Config: Bech32Address.defaultBech32Config("kyve"),
  currencies: [],
  feeCurrencies: [],
  features: ["ibc-transfer", "ibc-go"],
};

export const KYVE_COSMOSTATION_CONFIG: AddChainParams = {
  chainId: "",
  restURL: "",
  chainName: "",
  baseDenom: "",
  displayDenom: "",
  addressPrefix: PREFIX,
  coinType: COIN_TYPE.toString(),
  decimals: 0,
  gasRate: {
    tiny: "1",
    low: "1.5",
    average: "3",
  },
};

export const KYVE_LEAP_CONFIG: ChainInfo = {
  rpc: "",
  rest: "",
  chainId: "",
  chainName: "",
  stakeCurrency: {
    coinDenom: "",
    coinMinimalDenom: "",
    coinDecimals: 0,
  },
  bip44: {
    coinType: 118,
  },
  bech32Config: Bech32Address.defaultBech32Config("kyve"),
  currencies: [],
  feeCurrencies: [],
  features: ["ibc-transfer", "ibc-go"],
};
