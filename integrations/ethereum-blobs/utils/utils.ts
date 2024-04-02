import crypto from "crypto";
import axios from "axios";

export async function getTransactionByHash(rpc: string, hash: string) {
  const data = {
    method: 'eth_getTransactionByHash',
    params: [hash],
    id: 1,
    jsonrpc: '2.0'
  };

  try {
    const response = await axios.post(rpc, data, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return response.data.result;
  } catch (error) {
    console.error('Error:', error);
  }
}

// Creates the versioned hash for a kzg_commitment to enable
// the comparison with a tx_hash.
export function createVersionedHash(hex: string): string {
  if (hex.startsWith('0x')) {
    hex = hex.slice(2);
  }

  const inputBuffer = Buffer.from(hex, 'hex');

  const hash = crypto.createHash('sha256').update(inputBuffer).digest('hex');

  const formattedHash = '01' + hash.substring(2);

  return "0x" + formattedHash;
}