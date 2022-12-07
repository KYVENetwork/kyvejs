export interface Response<T> {
  result: T;
  error: any;
  id: string;
}

export interface Signature {
  signature: string;
  pubKey: string;
  poolId: string;
  timestamp: string;
}
