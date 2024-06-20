import * as crypto from '@cosmjs/crypto';
import { dataItemToSha256, generateMerkleRoot } from '@kyvejs/sdk';

// Creates an Array of hashes from an array of data items (bundle).
// The hash of a data item consists of the Merkle root from the block and the block
// results (only two leafs) and the key of the data item. This allows the
// Trustless API to serve block and block results independently.
export function createHashesFromTendermintBundle(bundle: any[]): Uint8Array[] {
  return bundle.map((dataItem) => {
    const blockHashes: Uint8Array[] = [
      dataItemToSha256(dataItem.value?.block),
      dataItemToSha256(dataItem.value?.block_results),
    ];

    const merkleRoot: Uint8Array = generateMerkleRoot(blockHashes);

    return tendermintDataItemToSha256(dataItem.key, merkleRoot);
  });
}

function tendermintDataItemToSha256(
  key: string,
  merkleRoot: Uint8Array
): Uint8Array {
  const keyBytes = crypto.sha256(Buffer.from(key, 'utf-8'));

  const combined = Buffer.concat([keyBytes, merkleRoot]);

  return crypto.sha256(combined);
}
