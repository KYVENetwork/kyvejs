import * as crypto from '@cosmjs/crypto';

export function createHashesFromBundle(bundle: any[]): Uint8Array[] {
  return bundle.map(dataItem => dataItemToSha256(dataItem))
}

function dataItemToSha256(data: any): Uint8Array {
  // Encode the serialized object to UTF-8
  const encoded_obj: Uint8Array = Buffer.from(JSON.stringify(data), 'utf-8');
  // Calculate the SHA-256 hash
  return crypto.sha256(encoded_obj)
}

export function generateMerkleRoot(hashes: Uint8Array[]): string {
  if (!hashes || hashes.length == 0) {
    return '';
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
    return Buffer.from(combinedHashes[0]).toString('hex');
  }
  return generateMerkleRoot(combinedHashes);
}