import { OfflineAminoSigner } from "@cosmjs/amino/build/signer";
import { OfflineSigner, Registry } from "@cosmjs/proto-signing";
import { GasPrice, SigningStargateClient } from "@cosmjs/stargate";

import * as KyveRegistryTx from "../registry/tx.registry";
import KyveClient from "./rpc-client/client";
import KyveWebClient from "./rpc-client/web.client";

export async function getSigningKyveClient(
  rpcEndpoint: string,
  signer: OfflineSigner,
  aminoSigner: OfflineAminoSigner | null,
  walletName?: undefined,
  defaultTypes?: undefined
): Promise<KyveClient>;

export async function getSigningKyveClient(
  rpcEndpoint: string,
  signer: OfflineSigner,
  aminoSigner: OfflineAminoSigner | null,
  walletName?: string,
  defaultTypes?: undefined
): Promise<KyveWebClient>;

export async function getSigningKyveClient(
  rpcEndpoint: string,
  signer: OfflineSigner,
  aminoSigner: OfflineAminoSigner | null,
  walletName?: string
): Promise<KyveWebClient | KyveClient> {
  const registry = new Registry([...KyveRegistryTx.registry]);
  const gasPrice = GasPrice.fromString("0tkyve");
  const client: SigningStargateClient =
    await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
      registry,
      gasPrice,
    });
  const [account] = await signer.getAccounts();
  if (typeof walletName === "string")
    return new KyveWebClient(client, account, aminoSigner, walletName);
  return new KyveClient(client, account, aminoSigner);
}
