import {
  OfflineAminoSigner,
  pubkeyToAddress,
  Secp256k1HdWallet,
  Secp256k1Wallet,
} from "@cosmjs/amino";
import { fromBase64, fromHex } from "@cosmjs/encoding";
import {
  DirectSecp256k1HdWallet,
  DirectSecp256k1Wallet,
  OfflineDirectSigner,
} from "@cosmjs/proto-signing";
import { RequestAccountResponse } from "@cosmostation/extension-client/types/message";
import { verifyADR36Amino } from "@keplr-wallet/cosmos";

import { getSigningKyveClient } from "./clients/full-client";
import { createKyveLCDClient } from "./clients/lcd-client/client";
import KyveClient from "./clients/rpc-client/client";
import KyveWebClient from "./clients/rpc-client/web.client";
import {
  IConfig,
  KYVE_COSMOSTATION_CONFIG,
  KYVE_KEPLR_CONFIG,
  KYVE_LEAP_CONFIG,
  PREFIX,
  SUPPORTED_CHAIN_CONFIGS,
  SUPPORTED_WALLETS,
  SupportedChains,
} from "./constants";
import {
  cosmostationMethods,
  CosmostationSigner,
} from "./utils/cosmostation-helper";
import { KeplrAminoSigner } from "./utils/keplr-helper";

/** Class representing a KyveSDK. */
export class KyveSDK {
  public readonly config: IConfig;
  private walletSupports = new Set<keyof typeof SUPPORTED_WALLETS>();

  /**
   * Create sdk instance.
   * @param chainId - The chainId of the chain the sdk should connect to [default = kyve-1]
   * @param options - The default config of the sdk can be overwritten here
   */
  constructor(
    chainId: SupportedChains = "kyve-1",
    options?: {
      chainName?: string;
      rpc?: string;
      rest?: string;
      coin?: string;
      coinDenom?: string;
      coinDecimals?: number;
      gasPrice?: number;
    }
  ) {
    if (!SUPPORTED_CHAIN_CONFIGS[chainId]) {
      throw new Error(`ChainId "${chainId}" not supported.`);
    }

    this.config = { ...SUPPORTED_CHAIN_CONFIGS[chainId] };

    if (options?.chainName) {
      this.config = { ...this.config, chainName: options.chainName };
    }

    if (options?.rpc) {
      this.config = { ...this.config, rpc: options.rpc.replace(/\/$/, "") };
    }

    if (options?.rest) {
      this.config = { ...this.config, rest: options.rest.replace(/\/$/, "") };
    }

    if (options?.coin) {
      this.config = { ...this.config, coin: options.coin };
    }

    if (options?.coinDenom) {
      this.config = { ...this.config, coinDenom: options.coinDenom };
    }

    if (options?.coinDecimals) {
      this.config = { ...this.config, coinDecimals: options.coinDecimals };
    }

    if (options?.gasPrice) {
      this.config = { ...this.config, gasPrice: options.gasPrice };
    }
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
   * create a client from offline signers
   * @param offlineSigner - offline signer
   * @param offlineAminoSigner - offline amino signer
   * @param walletName - optinal wallet name
   * @return Promise<KyveClient>
   */
  async fromOfflineSigner(
    offlineSigner: OfflineDirectSigner | OfflineAminoSigner,
    offlineAminoSigner: OfflineAminoSigner,
    walletName?: string
  ): Promise<KyveClient> {
    return getSigningKyveClient(
      this.config,
      offlineSigner,
      offlineAminoSigner,
      walletName
    );
  }

  /**
   * Create a client from Keplr wallet if installed
   * @return Promise<KyveWebClient>
   */
  async fromKeplr(): Promise<KyveWebClient> {
    if (typeof window === "undefined") throw new Error("Unsupported.");
    if (!window.keplr) throw new Error("Please install Keplr.");

    const KYVE_COIN = {
      coinDenom: this.config.coin,
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
            low: this.config.gasPrice,
            average: this.config.gasPrice * 1.5,
            high: this.config.gasPrice * 3,
          },
        },
      ],
    });

    await window.keplr.enable(this.config.chainId);

    const signer = await window.keplr.getOfflineSignerAuto(this.config.chainId);
    const walletName = (await window.keplr.getKey(this.config.chainId)).name;
    const keplr = window.keplr;
    const keplrAminoSigner = new KeplrAminoSigner(keplr, this.config);
    const client = await getSigningKyveClient(
      this.config,
      signer,
      keplrAminoSigner,
      walletName
    );
    this.walletSupports.add(SUPPORTED_WALLETS.KEPLR);
    return client;
  }

  /**
   * Create a client from Cosmostaion wallet if installed
   * @return Promise<KyveWebClient>
   */
  async fromCosmostation(): Promise<KyveWebClient> {
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
        displayDenom: this.config.coin,
        baseDenom: this.config.coinDenom,
        decimals: this.config.coinDecimals,
        gasRate: {
          tiny: this.config.gasPrice.toString(),
          low: (this.config.gasPrice * 1.5).toString(),
          average: (this.config.gasPrice * 3).toString(),
        },
      });
      cosmostationAccount = await cosmostationMethods.requestAccount(
        this.config.chainName
      );
    }

    const cosmostationSigner = new CosmostationSigner(
      cosmostationAccount,
      this.config,
      {
        memo: true,
        fee: true,
      }
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
   * Create a client from Leap wallet if installed
   * @return Promise<KyveWebClient>
   */
  async fromLeap(): Promise<KyveWebClient> {
    if (typeof window === "undefined") throw new Error("Unsupported.");
    if (!window.leap) throw new Error("Please install Leap.");

    const KYVE_COIN = {
      coinDenom: this.config.coin,
      coinMinimalDenom: this.config.coinDenom,
      coinDecimals: this.config.coinDecimals,
    };

    await window.leap.experimentalSuggestChain({
      ...KYVE_LEAP_CONFIG,
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
            low: this.config.gasPrice,
            average: this.config.gasPrice * 1.5,
            high: this.config.gasPrice * 3,
          },
        },
      ],
    });

    await window.leap.enable(this.config.chainId);

    const signer = await window.leap.getOfflineSigner(this.config.chainId);
    const walletName = (await window.leap.getKey(this.config.chainId))
      .name as string;
    const leap = window.leap;
    const keplrAminoSigner = new KeplrAminoSigner(leap, this.config);
    const client = await getSigningKyveClient(
      this.config,
      signer,
      keplrAminoSigner,
      walletName
    );
    this.walletSupports.add(SUPPORTED_WALLETS.LEAP);
    return client;
  }

  /**
   * Listener to detect if account in wallet changed, support fromKeplr and fromCosmostation  instances
   * @param cb
   */
  async onAccountChange(cb: () => void) {
    if (this.walletSupports.has(SUPPORTED_WALLETS.KEPLR)) {
      return window.addEventListener("keplr_keystorechange", cb);
    }

    if (this.walletSupports.has(SUPPORTED_WALLETS.COSMOSTATION)) {
      return window.cosmostation.tendermint.on("accountChanged", cb);
    }

    if (this.walletSupports.has(SUPPORTED_WALLETS.LEAP)) {
      return window.addEventListener("leap_keystorechange", cb);
    }

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
