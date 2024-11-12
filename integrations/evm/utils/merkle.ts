import * as crypto from '@cosmjs/crypto';

export function createHashesFromBundle(bundle: any[]): Uint8Array[] {
  return bundle.map((dataItem) => {
    const rawDataItemHash: Uint8Array = dataItemToSha256(dataItem.value);

    const blockHash = dataItemToSha256(dataItem.value.block)

    const transactionsHashes = dataItem.value.block.transactions.map((tx: any) => dataItemToSha256(tx))
    const transactionsMerkleRoot: Uint8Array = generateMerkleRoot(transactionsHashes)

    const receiptsHash = dataItemToSha256(dataItem.value.receipts)

    let allLogs: any[] = [];
    dataItem.value.receipts.forEach((receipt: any) => {
        allLogs = allLogs.concat(receipt.logs)
    })
    allLogs = allLogs.map(log => dataItemToSha256(log))
    const logsMerkleRoot: Uint8Array = generateMerkleRoot(allLogs)

    const blockMerkleRoot: Uint8Array = generateMerkleRoot([
        blockHash,
        transactionsMerkleRoot
    ])
    const receiptsAndLogsMerkleRoot: Uint8Array = generateMerkleRoot([
        receiptsHash,
        logsMerkleRoot
    ])
    const subMerkleRoot: Uint8Array = generateMerkleRoot([
        blockMerkleRoot,
        receiptsAndLogsMerkleRoot
    ])
    const merkleRootWithoutKey: Uint8Array = generateMerkleRoot([
        rawDataItemHash,
        subMerkleRoot
    ])

    const keyBytes = crypto.sha256(Buffer.from(dataItem.key, 'utf-8'));

    const combined = Buffer.concat([keyBytes, merkleRootWithoutKey]);

   return crypto.sha256(combined);
  })
}

function dataItemToSha256(data: any): Uint8Array {
  // Encode the serialized object to UTF-8
  const encoded_obj: Uint8Array = Buffer.from(JSON.stringify(data), 'utf-8');
  // Calculate the SHA-256 hash
  return crypto.sha256(encoded_obj)
}

export function generateMerkleRoot(hashes: Uint8Array[]): Uint8Array {
  if (!hashes || hashes.length == 0) {
    return Buffer.from("0000000000000000000000000000000000000000000000000000000000000000", "hex");
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






