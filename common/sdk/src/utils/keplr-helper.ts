import { StdSignDoc } from "@cosmjs/amino/build/signdoc";
import {
  AccountData,
  AminoSignResponse,
  OfflineAminoSigner,
} from "@cosmjs/amino/build/signer";
import { Keplr } from "@keplr-wallet/types";

import { Network } from "../constants";

export class KeplrAminoSigner implements OfflineAminoSigner {
  private keplr: Keplr;
  private network: Network;
  constructor(keplr: Keplr, network: Network) {
    this.keplr = keplr;
    this.network = network;
  }
  public async getAccounts(): Promise<readonly AccountData[]> {
    const key = await this.keplr.getKey(this.network.chainId);
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
        this.network.chainId,
        signerAddress,
        signDoc
      );
    }
    if (this.network.chainId !== signDoc.chain_id) {
      throw new Error("Unmatched chain id with the offline signer");
    }
    const key = await this.keplr.getKey(this.network.chainId);

    if (key.bech32Address !== signerAddress) {
      throw new Error("Unknown signer address");
    }
    return await this.keplr.signAmino(
      this.network.chainId,
      signerAddress,
      signDoc
    );
  }
}
