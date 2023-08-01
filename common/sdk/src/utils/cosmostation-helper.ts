import { StdSignDoc } from "@cosmjs/amino/build/signdoc";
import { makeSignDoc } from "@cosmjs/proto-signing";
import {
  AccountData,
  OfflineDirectSigner,
} from "@cosmjs/proto-signing/build/signer";
import {
  AddChainParams,
  RequestAccountResponse,
  SignAminoResponse,
  SignOptions,
} from "@cosmostation/extension-client/types/message";
import { SignDoc } from "cosmjs-types/cosmos/tx/v1beta1/tx";

import { IConfig } from "../constants";

export const cosmostationMethods = {
  getSupportedChains() {
    return window.cosmostation.tendermint.request({
      method: "ten_supportedChainNames",
    });
  },
  addChain(params: AddChainParams) {
    return window.cosmostation.tendermint.request({
      method: "ten_addChain",
      params,
    });
  },
  requestAccount(chainId: string) {
    return window.cosmostation.tendermint.request({
      method: "ten_requestAccount",
      params: { chainName: chainId },
    });
  },
  signDirect(chainName: string, doc: unknown, options?: SignOptions) {
    return window.cosmostation.tendermint.request({
      method: "ten_signDirect",
      params: {
        chainName,
        doc,
        isEditMemo: !!options?.memo,
        isEditFee: !!options?.fee,
      },
    });
  },
  signAmino(chainName: string, doc: StdSignDoc, options?: SignOptions) {
    return window.cosmostation.tendermint.request({
      method: "ten_signAmino",
      params: {
        chainName,
        doc,
        isEditMemo: !!options?.memo,
        isEditFee: !!options?.fee,
        gasRate: options?.gasRate,
      },
    }) as Promise<SignAminoResponse>;
  },
};

export class CosmostationSigner implements OfflineDirectSigner {
  private config: IConfig;
  private cosmostationAccount: RequestAccountResponse;
  private cosmostationOption: SignOptions | undefined;

  constructor(
    cosmostationAccount: RequestAccountResponse,
    config: IConfig,
    cosmostationOption?: SignOptions
  ) {
    this.config = config;
    this.cosmostationAccount = cosmostationAccount;
    this.cosmostationOption = cosmostationOption;
  }

  async getAccounts(): Promise<readonly AccountData[]> {
    return [
      {
        address: this.cosmostationAccount.address,
        // Currently, only secp256k1 is supported.
        algo: "secp256k1",
        pubkey: this.cosmostationAccount.publicKey,
      },
    ];
  }

  async signDirect(signerAddress: string, signDoc: SignDoc) {
    const signedResult = await cosmostationMethods.signDirect(
      this.config.chainId,
      {
        chain_id: signDoc.chainId,
        body_bytes: signDoc.bodyBytes,
        auth_info_bytes: signDoc.authInfoBytes,
        account_number: signDoc.accountNumber.toString(),
      },
      this.cosmostationOption
    );
    const currentAccountAddress = await cosmostationMethods.requestAccount(
      this.config.chainId
    );
    if (this.cosmostationAccount.address !== currentAccountAddress.address) {
      throw new Error("Unknown signer address");
    }
    return {
      signed: makeSignDoc(
        signedResult.signed_doc.body_bytes,
        signedResult.signed_doc.auth_info_bytes,
        signedResult.signed_doc.chain_id,
        Number(signedResult.signed_doc.account_number)
      ),
      signature: {
        pub_key: signedResult.pub_key,
        signature: signedResult.signature,
      },
    };
  }
}
