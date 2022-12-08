import axios from 'axios';
import { createHash } from 'crypto';
import { sleep } from '@kyvejs/protocol';

export async function fetchBlock(
  endpoint: string,
  height: number,
  headers: any
): Promise<any> {
  const value = await call<any>(
    `${endpoint}/cosmos/base/tendermint/v1beta1/blocks/${height}`,
    headers
  );

  const parsed_txs = await fetchTransactions(
    endpoint,
    value.block.data.txs.map(parseEncodedTx),
    headers
  );

  return {
    ...value,
    __kyve: {
      block: {
        data: {
          parsed_txs,
        },
      },
    },
  };
}

async function fetchTransactions(
  endpoint: string,
  hashes: string[],
  headers: any
): Promise<any[]> {
  const txs: any[] = [];

  for (const hash of hashes) {
    try {
      const tx = await call<any>(
        `${endpoint}/cosmos/tx/v1beta1/txs/${hash}`,
        headers
      );

      txs.push(tx.tx_response);
    } catch {
      txs.push(null);
    } finally {
      await sleep(500);
    }
  }

  return txs;
}

async function call<T>(endpoint: string, headers: any): Promise<T> {
  const { data } = await axios.get<T>(endpoint, {
    headers,
  });

  return data;
}

function parseEncodedTx(tx: string): string {
  const txBytes = new Uint8Array(
    createHash('sha256').update(Buffer.from(tx, 'base64')).digest()
  );

  return Buffer.from(txBytes.slice(0, 32)).toString('hex').toUpperCase();
}
