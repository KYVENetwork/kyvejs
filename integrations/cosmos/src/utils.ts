import axios, { AxiosResponse } from 'axios';
import { createHash } from 'crypto';
import { OUT_OF_RANGE } from './types';

export function isHeightOutOfRange(err: any): boolean {
  if (err.isAxiosError) {
    const response: AxiosResponse = err.response;
    if (response && response.data && response.data.message) {
      if (response.data.message === OUT_OF_RANGE) {
        return true;
      }
    }
  }

  return false;
}

export async function fetchBlock(
  endpoint: string,
  height: number,
  headers: any
): Promise<any> {
  const res = await call<any>(
    `${endpoint}/cosmos/base/tendermint/v1beta1/blocks/${height}`,
    headers
  );

  const txs = await fetchTransactions(
    endpoint,
    res.block.data.txs.map(parseEncodedTx),
    headers
  );

  return {
    ...res.block,
    data: {
      ...res.block.data,
      txs,
    },
  };
}

async function fetchTransactions(
  endpoint: string,
  hashes: string[],
  headers: any
): Promise<any[]> {
  const res: any[] = [];

  for (const hash of hashes) {
    const tx = await call<any>(
      `${endpoint}/cosmos/tx/v1beta1/txs/${hash}`,
      headers
    );

    res.push(tx ? tx.tx_response : null);
  }

  return res;
}

async function call<T>(endpoint: string, headers: any): Promise<T | null> {
  try {
    const { data } = await axios.get<T>(endpoint, {
      headers,
    });

    return data;
  } catch (err: any) {
    if (isHeightOutOfRange(err)) {
      throw err;
    } else if (err.response.status === 400 || err.response.status === 404) {
      return null;
    } else {
      throw err;
    }
  }
}

function parseEncodedTx(input: string): string {
  const txBytes = new Uint8Array(
    createHash('sha256').update(Buffer.from(input, 'base64')).digest()
  );

  return Buffer.from(txBytes.slice(0, 32)).toString('hex').toUpperCase();
}
