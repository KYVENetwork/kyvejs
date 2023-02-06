import {
  pubkeyToAddress,
  Secp256k1HdWallet,
  Secp256k1Wallet,
} from "@cosmjs/amino";
import { fromBase64, fromHex } from "@cosmjs/encoding";
import {
  DirectSecp256k1HdWallet,
  DirectSecp256k1Wallet,
} from "@cosmjs/proto-signing";
import {
  RequestAccountResponse,
  SignOptions,
} from "@cosmostation/extension-client/types/message";
import { verifyADR36Amino } from "@keplr-wallet/cosmos";
import { getSigningKyveClient } from "./clients/full-client";
import { createKyveLCDClient } from "./clients/lcd-client/client";
import KyveClient from "./clients/rpc-client/client";
import KyveWebClient from "./clients/rpc-client/web.client";
import {
  KYVE_COSMOSTATION_CONFIG,
  KYVE_KEPLR_CONFIG,
  PREFIX,
  SUPPORTED_WALLETS,
  SDKConfig,
  DEFAULT_COIN_DENOM,
  DEFAULT_COIN_DECIMALS,
  SDKConfigInput,
} from "./constants";
import {
  cosmostationMethods,
  CosmostationSigner,
} from "./utils/cosmostation-helper";
import { KeplrAminoSigner } from "./utils/keplr-helper";

/** Class representing a KyveSDK. */
export class KyveSDK {
  public readonly config: SDKConfig;
  private walletSupports: Set<keyof typeof SUPPORTED_WALLETS>;

  /**
   * Create sdk instance.
   * @param config - The config type, e.g mainnet, testnet, etc
   */
  constructor(config: SDKConfigInput) {
    this.walletSupports = new Set<keyof typeof SUPPORTED_WALLETS>();
    this.config = {
      chainId: config.chainId,
      chainName: config.chainName,
      rpc: config.rpc,
      rest: config.rest,
      coinDenom: config.coinDenom || DEFAULT_COIN_DENOM,
      coinDecimals: config.coinDecimals || DEFAULT_COIN_DECIMALS,
    };
  }

  /**
   * Create a client from mnemonic
   * @param mnemonic
   * @return Promise<KyveClient>
   */
  async fromMnemonic(mnemonic: string): Promise<KyveClient> {
    const aminoSigner = await Secp256k1HdWallet.fromMnemonic(mnemonic, {
      prefix: PREFIX,
    });
    const signedClient = await DirectSecp256k1HdWallet.fromMnemonic(mnemonic, {
      prefix: PREFIX,
    });
    return getSigningKyveClient(this.config, signedClient, aminoSigner);
  }

  /**
   * create a client from private key
   * @param privateKey - hex privateKey
   * @return Promise<KyveClient>
   */
  async fromPrivateKey(privateKey: string): Promise<KyveClient> {
    const formattedKey = fromHex(
      privateKey.startsWith("0x") ? privateKey.slice(2) : privateKey
    );
    const signedClient = await DirectSecp256k1Wallet.fromKey(
      formattedKey,
      PREFIX
    );
    const aminoSigner = await Secp256k1Wallet.fromKey(formattedKey, PREFIX);
    return getSigningKyveClient(this.config, signedClient, aminoSigner);
  }

  /**
   * Crate a client from Keplr wallet if installed
   * @return Promise<KyveWebClient>
   */
  async fromKeplr(): Promise<KyveWebClient> {
    if (typeof window === "undefined") throw new Error("Unsupported.");
    if (!window.keplr) throw new Error("Please install Keplr.");

    const KYVE_COIN = {
      coinDenom: "KYVE",
      coinMinimalDenom: this.config.coinDenom,
      coinDecimals: this.config.coinDecimals,
    };

    await window.keplr.experimentalSuggestChain({
      ...KYVE_KEPLR_CONFIG,
      chainName: this.config.chainName,
      chainId: this.config.chainId,
      rpc: this.config.rpc,
      rest: this.config.rest,
      stakeCurrency: KYVE_COIN,
      currencies: [KYVE_COIN],
      feeCurrencies: [
        {
          ...KYVE_COIN,
          gasPriceStep: {
            low: 2,
            average: 2.5,
            high: 10,
          },
        },
      ],
    });
    await window.keplr.enable(this.config.chainId);
    window.keplr.defaultOptions = {
      sign: {
        preferNoSetFee: true,
      },
    };
    const signer = window.keplr.getOfflineSigner(this.config.chainId);
    const walletName = (await window.keplr.getKey(this.config.chainId)).name;
    const keplr = window.keplr;
    const keplrAminoSigner = new KeplrAminoSigner(keplr, this.config);
    const client = await getSigningKyveClient(
      this.config,
      signer,
      keplrAminoSigner,
      walletName
    );
    this.walletSupports.add(SUPPORTED_WALLETS.KEPLER);
    return client;
  }

  /**
   * Crate a client from Cosmostaion wallet if installed
   * @return Promise<KyveWebClient>
   */
  async fromCosmostation(config?: SignOptions): Promise<KyveWebClient> {
    if (typeof window === "undefined") throw new Error("Unsupported.");
    if (!window.cosmostation) throw new Error("Please install cosmostation.");

    const chain = await cosmostationMethods.getSupportedChains();
    let cosmostationAccount: RequestAccountResponse;

    if (chain.unofficial.includes(this.config.chainName.toLowerCase().trim())) {
      cosmostationAccount = await cosmostationMethods.requestAccount(
        this.config.chainName
      );
    } else {
      await cosmostationMethods.addChain({
        ...KYVE_COSMOSTATION_CONFIG,
        restURL: this.config.rest,
        chainId: this.config.chainId,
        chainName: this.config.chainName,
        baseDenom: this.config.coinDenom,
        decimals: this.config.coinDecimals || DEFAULT_COIN_DECIMALS,
      });
      cosmostationAccount = await cosmostationMethods.requestAccount(
        this.config.chainName
      );
    }

    const cosmostationSigner = new CosmostationSigner(
      cosmostationAccount,
      this.config,
      config ? config : {}
    );

    const client = await getSigningKyveClient(
      this.config,
      cosmostationSigner,
      null,
      cosmostationAccount.name
    );

    this.walletSupports.add(SUPPORTED_WALLETS.COSMOSTATION);
    return client;
  }

  /**
   * Listener to detect if account in wallet changed, support fromKeplr and fromCosmostation  instances
   * @param cb
   */
  async onAccountChange(cb: () => void) {
    if (this.walletSupports.has(SUPPORTED_WALLETS.COSMOSTATION))
      return window.cosmostation.tendermint.on("accountChanged", cb);
    if (this.walletSupports.has(SUPPORTED_WALLETS.KEPLER))
      return window.addEventListener("keplr_keystorechange", cb);
    throw new Error("Need to initiate from wallet");
  }

  /**
   * create LCD client to get data from Rest api
   */
  createLCDClient() {
    return createKyveLCDClient(this.config.rest);
  }

  /**
   * generate KyveClient instance without mnemonic
   */
  async generate() {
    const signer = await DirectSecp256k1HdWallet.generate(24, {
      prefix: PREFIX,
    });
    const aminoSigner = await Secp256k1HdWallet.fromMnemonic(signer.mnemonic, {
      prefix: PREFIX,
    });
    return getSigningKyveClient(this.config, signer, aminoSigner);
  }

  static async generateMnemonic(): Promise<string> {
    const signer = await DirectSecp256k1HdWallet.generate(24, {
      prefix: PREFIX,
    });

    return signer.mnemonic;
  }

  static getAddressFromPubKey(pubKey: string) {
    return pubkeyToAddress(
      { type: "tendermint/PubKeySecp256k1", value: pubKey },
      PREFIX
    );
  }

  static async getAddressFromMnemonic(mnemonic: string) {
    const aminoSigner = await Secp256k1HdWallet.fromMnemonic(mnemonic, {
      prefix: PREFIX,
    });

    const [account] = await aminoSigner.getAccounts();
    return account.address;
  }

  static verifyString(
    signature: string,
    data: string,
    pubKey: string
  ): boolean {
    return verifyADR36Amino(
      PREFIX,
      KyveSDK.getAddressFromPubKey(pubKey),
      new TextEncoder().encode(data),
      fromBase64(pubKey),
      fromBase64(signature)
    );
  }
}
