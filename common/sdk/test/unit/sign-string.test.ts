import KyveClient from "../../src/clients/rpc-client/client";
import { SigningStargateClient } from "@cosmjs/stargate";
import { OfflineAminoSigner } from "@cosmjs/amino/build/signer";
import Mock = jest.Mock;
import { cosmos } from "@keplr-wallet/cosmos";
import TxRaw = cosmos.tx.v1beta1.TxRaw;
import { Secp256k1HdWallet, Secp256k1Wallet } from "@cosmjs/amino";
import { PREFIX } from "../../src/constants";
import KyveSDK from "../../src";
import { fromHex } from "@cosmjs/encoding";
import { KeplrAminoSigner } from "../../src/utils/keplr-helper";
import { Keplr } from "@keplr-wallet/types";
import { Network } from "../../src/constants";
const TEST_PRIVATE_KEY =
  "3fff4f4365485545348c2fb5dd85775058b16b7c5117d9f2c8824d9e9e28dcef";
const TEST_MNEMONIC =
  "slogan taxi lonely path hazard laundry cruise luggage exile upgrade figure toward";
const TEST_STRING = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";

describe("sign string", () => {
  let kyvePrivateKeySignerClient: KyveClient;
  let kyveMnemonicSignerClient: KyveClient;
  let kyveKeplrSignerClient: KyveClient;
  let mockSign: Mock;
  let mockSendTokens: Mock;
  let mockGetBalance: Mock;
  let mockKeplrAminoSign: Mock;
  beforeEach(async () => {
    mockSign = jest.fn(() => TxRaw.create());
    mockSendTokens = jest.fn();
    mockGetBalance = jest.fn(() => ({ amount: 0 }));
    const mockNativeClient = {
      simulate: () => Promise.resolve(1),
      sign: mockSign,
      sendTokens: mockSendTokens,
      getBalance: mockGetBalance,
    } as unknown as SigningStargateClient;
    /** INIT clients with different amino signers **/
    const aminoPrivateKeySigner = await Secp256k1Wallet.fromKey(
      fromHex(TEST_PRIVATE_KEY),
      PREFIX
    );
    const [accountKey] = await aminoPrivateKeySigner.getAccounts();
    kyvePrivateKeySignerClient = new KyveClient(
      mockNativeClient,
      accountKey,
      aminoPrivateKeySigner
    );
    const aminoMnemonicSigner = await Secp256k1HdWallet.fromMnemonic(
      TEST_MNEMONIC,
      {
        prefix: PREFIX,
      }
    );
    const [accMnemonic] = await aminoMnemonicSigner.getAccounts();
    kyveMnemonicSignerClient = new KyveClient(
      mockNativeClient,
      accMnemonic,
      aminoMnemonicSigner
    );
    mockKeplrAminoSign = jest.fn((...args) =>
      aminoMnemonicSigner.signAmino.apply(aminoMnemonicSigner, [
        args[1],
        args[2],
      ])
    );
    const mockKeplr = {
      signAmino: mockKeplrAminoSign,
      getKey() {
        return {
          bech32Address: accMnemonic.address,
          pubkey: accMnemonic.pubkey,
        };
      },
    } as unknown as Keplr;
    const aminoKeplrSigner = new KeplrAminoSigner(mockKeplr, {
      chainId: "test-chain",
    } as unknown as Network);
    kyveKeplrSignerClient = new KyveClient(
      mockNativeClient,
      accMnemonic,
      aminoKeplrSigner
    );
  });
  describe("from private key", () => {
    test("should verify same string as truthy", async () => {
      const sign = await kyvePrivateKeySignerClient.signString(TEST_STRING);
      const result = await KyveSDK.verifyString(
        sign.signature,
        TEST_STRING,
        sign.pub_key.value
      );
      expect(result).toEqual(true);
    });
    test("should verify opposite string as falsy", async () => {
      const sign = await kyvePrivateKeySignerClient.signString(
        TEST_STRING + Date.now()
      );
      const result = await KyveSDK.verifyString(
        sign.signature,
        TEST_STRING,
        sign.pub_key.value
      );
      expect(result).toEqual(false);
    });
  });

  describe("from mnemonic", () => {
    test("should verify same string as truthy", async () => {
      const sign = await kyveMnemonicSignerClient.signString(TEST_STRING);
      const result = await KyveSDK.verifyString(
        sign.signature,
        TEST_STRING,
        sign.pub_key.value
      );
      expect(result).toEqual(true);
    });
    test("should verify opposite string as falsy", async () => {
      const sign = await kyveMnemonicSignerClient.signString(
        TEST_STRING + Date.now()
      );

      const result = await KyveSDK.verifyString(
        sign.signature,
        TEST_STRING,
        sign.pub_key.value
      );
      expect(result).toEqual(false);
    });
  });
  describe("from keplr", () => {
    function verifyADR36Behavior() {
      //https://docs.keplr.app/api/#request-signature-for-arbitrary-message
      expect(mockKeplrAminoSign).toHaveBeenCalledTimes(1);
      const [[_1, _2, signDoc]] = mockKeplrAminoSign.mock.calls;
      expect(signDoc.chain_id).toEqual("");
      expect(signDoc.account_number).toEqual("0");
      expect(signDoc.fee).toEqual({ gas: "0", amount: [] });
      expect(signDoc.msgs[0].type).toEqual("sign/MsgSignData");
      expect(signDoc.memo).toEqual("");
    }
    test("should verify same string as truthy", async () => {
      const sign = await kyveKeplrSignerClient.signString(TEST_STRING);
      verifyADR36Behavior();
      const result = KyveSDK.verifyString(
        sign.signature,
        TEST_STRING,
        sign.pub_key.value
      );
      expect(result).toBeTruthy();
    });
    test("should verify opposite string as falsy", async () => {
      const sign = await kyveKeplrSignerClient.signString(
        TEST_STRING + Date.now()
      );
      const result = await KyveSDK.verifyString(
        sign.signature,
        TEST_STRING,
        sign.pub_key.value
      );
      verifyADR36Behavior();
      expect(result).toEqual(false);
    });
  });
});
