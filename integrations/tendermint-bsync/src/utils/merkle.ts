import * as crypto from '@cosmjs/crypto';
import { dataItemToSha256, generateMerkleRoot } from '@kyvejs/sdk';

// Creates an Array of hashes from an array of data items (bundle).
// The hash of a data item consists of the Merkle root from the block and the block
// results (only two leafs) and the key of the data item. This allows the
// Trustless API to serve block and block results independently.
export function createHashesFromTendermintBundle(bundle: any[]): Uint8Array[] {
  return bundle.map((dataItem) => dataItemToSha256(dataItem));
}
