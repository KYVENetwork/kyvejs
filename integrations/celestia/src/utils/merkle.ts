import * as crypto from '@cosmjs/crypto';
import { dataItemToSha256, generateMerkleRoot } from '@kyvejs/sdk';
import * as protobuf from 'protobufjs';
import { fromBase64, toBase64, toHex } from '@cosmjs/encoding';
import { decodeTxRaw } from '@cosmjs/proto-signing';
import celestiaProto from './celestia.json';

// Creates an Array of hashes from an array of data items (bundle).
// The hash of a data item consists of the Merkle root from the block and the block
// results (only two leafs), the included blobs and the key of the data item. This allows the
// Trustless API to serve block and block results independently.
export function createHashesFromCelestiaBundle(bundle: any[]): Uint8Array[] {
  return bundle.map((dataItem) => {
    const blockHashes: Uint8Array[] = [
      dataItemToSha256(dataItem.value?.block),
      dataItemToSha256(dataItem.value?.block_results),
    ];

    const tendermintMerkleRoot: Uint8Array = generateMerkleRoot(blockHashes);

    const blobMerkleRoot: Uint8Array = createMerkleRootForBlobs(
      dataItem.value.block.block.data.txs
    );

    const combinedMerkleRoot: Uint8Array = generateMerkleRoot([
      tendermintMerkleRoot,
      blobMerkleRoot,
    ]);

    return celestiaDataItemToSha256(dataItem.key, combinedMerkleRoot);
  });
}

function celestiaDataItemToSha256(
  key: string,
  merkleRoot: Uint8Array
): Uint8Array {
  const keyBytes = crypto.sha256(Buffer.from(key, 'utf-8'));

  const combined = Buffer.concat([keyBytes, merkleRoot]);

  return crypto.sha256(combined);
}

function createMerkleRootForBlobs(txs: any): Uint8Array {
  const blobs: any = [];

  txs.forEach((txData: any) => {
    const root = protobuf.Root.fromJSON(celestiaProto);
    const BlobTx = root.lookupType('BlobTx');
    const MsgPayForBlobs = root.lookupType('MsgPayForBlobs');

    try {
      const decodedCelestiaTx: any = BlobTx.decode(fromBase64(txData));
      if (decodedCelestiaTx['typeId'] !== 'BLOB') {
        return null;
      }

      const tx = decodeTxRaw(decodedCelestiaTx.tx);
      if (tx === null) {
        console.error('failed to decode');
        return null;
      }

      const payForBlobsMsg: any[] = [];
      tx.body.messages.forEach((m) => {
        if (m.typeUrl == '/celestia.blob.v1.MsgPayForBlobs') {
          payForBlobsMsg.push(m);
        }
      });

      if (!payForBlobsMsg || payForBlobsMsg.length != 1) {
        return null;
      }

      const decodedPayForBlobs: any = MsgPayForBlobs.decode(
        payForBlobsMsg[0].value
      );

      decodedCelestiaTx.blobs.forEach((blob: any, index: any) => {
        blobs.push({
          namespace: toBase64(decodedPayForBlobs.namespaces[index]),
          data: toBase64(blob.data),
          share_version: decodedPayForBlobs.shareVersions[index],
          commitment: toBase64(decodedPayForBlobs.shareCommitments[index]),
          index: -1,
        });
      });
    } catch (e) {
      return null;
    }
  });

  const hashedBlobs = blobs.map((blob: any) => dataItemToSha256(blob));

  return generateMerkleRoot(hashedBlobs);
}
