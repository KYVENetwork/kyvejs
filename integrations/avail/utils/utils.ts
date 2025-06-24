import axios from "axios";

export async function fetchJsonRpc(rpc: string, method: string, params: any[] = []) {
  const response = await axios.post(rpc, {
    id: 1,
    jsonrpc: '2.0',
    method,
    params,
  }, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (!response.data.result) {
    throw new Error(`Failed to query ${method}`);
  }
  return response.data.result;
}