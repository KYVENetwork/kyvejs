import axios from "axios";
import { nanoid } from "nanoid";

import { Response } from "./types";

export async function fetchBlock(
  endpoint: string,
  hash: string,
  headers: any
): Promise<any> {
  const block = await call<any>(endpoint, "getblock", [hash, 2], headers);

  // Remove confirmations to maintain determinism.
  delete block.confirmations;

  return block;
}

export async function fetchBlockHash(
  endpoint: string,
  height: number,
  headers: any
): Promise<string> {
  return await call<string>(endpoint, "getblockhash", [height], headers);
}

async function call<T>(
  endpoint: string,
  method: string,
  params: any[],
  headers: any
): Promise<T> {
  const { data } = await axios.get<Response<T>>(endpoint, {
    data: JSON.stringify({
      jsonrpc: "1.0",
      id: nanoid(),
      method,
      params,
    }),
    headers,
  });

  return data.result;
}
