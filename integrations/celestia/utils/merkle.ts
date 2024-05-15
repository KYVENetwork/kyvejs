import * as crypto from '@cosmjs/crypto';

// Creates an Array of hashes from an array of data items (bundle).
// The hash of a data item consists of the Merkle root from all sharesByNamespace
// entries and the key of the data item. This allows the Trustless API to serve
// each share completely trustless.
export function createHashesFromBundleByNamespace(bundle: any[]): Uint8Array[] {
  return bundle.map(dataItem => {
    const namespacedSharesHashes = dataItem.value?.sharesByNamespace.map((share: any) => dataItemToSha256(share))

    const merkleRoot: Uint8Array = generateMerkleRoot(namespacedSharesHashes);

    return celestiaDataItemToSha256(dataItem.key, merkleRoot)
  })
}

function celestiaDataItemToSha256(key: string, merkleRoot: Uint8Array): Uint8Array {
  const keyBytes = crypto.sha256(Buffer.from(key, 'utf-8'));

  const combined = Buffer.concat([keyBytes, merkleRoot]);

  return crypto.sha256(combined);
}

function dataItemToSha256(data: any): Uint8Array {
  // Encode the serialized object to UTF-8
  const encoded_obj: Uint8Array = Buffer.from(JSON.stringify(data), 'utf-8');
  // Calculate the SHA-256 hash
  return crypto.sha256(encoded_obj)
}

export function generateMerkleRoot(hashes: Uint8Array[]): Uint8Array {
  if (!hashes || hashes.length == 0) {
    return Buffer.from("");
  }

  // Ensure number of hashes (leafs) are even by copying the
  // last hash (the very right leaf) if the amount is odd
  if (hashes.length % 2 !== 0) {
    hashes.push(hashes[hashes.length - 1]);
  }

  const combinedHashes: Uint8Array[] = [];
  for(let i = 0; i < hashes.length; i += 2) {
    const hashesConcatenated = new Uint8Array([ ...hashes[i], ...hashes[i+1]])
    const hash = crypto.sha256(hashesConcatenated);
    combinedHashes.push(hash);
  }

  // If the combinedHashes length is 1, it means that we have the merkle root already,
  // and we can return the hex representation
  if (combinedHashes.length === 1) {
    return combinedHashes[0];
  }
  return generateMerkleRoot(combinedHashes);
}