import { Validator } from "../..";

/**
 * getProxyAuth is used for authenticating the protocol node
 * for the proxy by signing messages including the pool id
 * the validator is currently in
 *
 * @method getProxyAuth
 * @param {Validator} this
 * @return {Promise<{ [key: string]: string | number; }>}
 */
export async function getProxyAuth(
  this: Validator
): Promise<{ [key: string]: string | number }> {
  const address = this.client.account.address;
  const timestamp = new Date().valueOf().toString();
  const poolId = this.pool.id;

  const { signature, pub_key } = await this.client.signString(
    `${address}//${poolId}//${timestamp}`
  );

  return {
    "Content-Type": "application/json",
    Signature: `${signature}`,
    "Public-Key": pub_key.value,
    "Pool-ID": poolId,
    Timestamp: timestamp,
  };
}
