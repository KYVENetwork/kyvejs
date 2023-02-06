import { StdSignDoc } from "@cosmjs/amino/build/signdoc";
import {
  AccountData,
  AminoSignResponse,
  OfflineAminoSigner,
} from "@cosmjs/amino/build/signer";
import { Keplr } from "@keplr-wallet/types";
import { SDKConfig } from "../constants";

export class KeplrAminoSigner implements OfflineAminoSigner {
  private keplr: Keplr;
  private config: SDKConfig;
  constructor(keplr: Keplr, config: SDKConfig) {
    this.keplr = keplr;
    this.config = config;
  }
  public async getAccounts(): Promise<readonly AccountData[]> {
    const key = await this.keplr.getKey(this.config.chainId);
    return [
      {
        address: key.bech32Address,
        // Currently, only secp256k1 is supported.
        algo: "secp256k1",
        pubkey: key.pubKey,
      },
    ];
  }
  public async signAmino(
    signerAddress: string,
    signDoc: StdSignDoc
  ): Promise<AminoSignResponse> {
    // support for https://docs.keplr.app/api/#request-signature-for-arbitrary-message
    // https://github.com/cosmos/cosmos-sdk/blob/main/docs/architecture/adr-036-arbitrary-signature.md
    if (signDoc.msgs[0].type === "sign/MsgSignData") {
      return await this.keplr.signAmino(
        this.config.chainId,
        signerAddress,
        signDoc
      );
    }
    if (this.config.chainId !== signDoc.chain_id) {
      throw new Error("Unmatched chain id with the offline signer");
    }
    const key = await this.keplr.getKey(this.config.chainId);

    if (key.bech32Address !== signerAddress) {
      throw new Error("Unknown signer address");
    }
    return await this.keplr.signAmino(
      this.config.chainId,
      signerAddress,
      signDoc
    );
  }
}
