export const OUT_OF_RANGE =
  'rpc error: code = InvalidArgument desc = requested block height is bigger then the chain length: invalid request';

export interface Signature {
  signature: string;
  pubKey: string;
  poolId: string;
  timestamp: string;
}
