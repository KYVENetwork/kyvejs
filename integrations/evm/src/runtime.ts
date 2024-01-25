import { DataItem, IRuntime, Validator, VOTE } from '@kyvejs/protocol';
import { name, version } from '../package.json';
import { providers } from 'ethers';
import { BlockWithTransactions, TransactionReceipt } from '@ethersproject/abstract-provider';
import {shuffle, removeLeadingZero, chunkArray} from "../utils/utils";
import fs from "fs";

// EVM config
interface IConfig {
  sources: string[];
  sourceThreshold: number,
  finality: number;
}

export default class EVM implements IRuntime {
  public name = name;
  public version = version;
  public config!: IConfig;

  async validateSetConfig(rawConfig: string): Promise<void> {
    const config: IConfig = JSON.parse(rawConfig);

    let RPCs: string[] = [];

    if (process.env.KYVEJS_EVM_RPC) {
      RPCs = process.env.KYVEJS_EVM_RPC!.split(",");
    }

    if (RPCs.length) {
      config.sources = ["https://polygon-rpc.com","https://polygon.drpc.org","https://rpc.ankr.com/polygon/eb2a0f47804a2f34f4af73be124e7df49ca9ed3e0675b850409aa3affc562a63"]
    }

    if (!config.sources.length) {
      throw new Error(`Config does not have any sources`);
    }

    if (config.sources.length < config.sourceThreshold) {
      throw new Error(`Sources threshold ${config.sourceThreshold} not reached with ${config.sources.length} sources`)
    }

    if (!config.finality) {
      throw new Error(`Config does not have finality defined`);
    }

    this.config = config;
  }

  async  getDataItem(_: Validator, key: string): Promise<any> {
    const blockWithTxs: BlockWithTransactions[] = [];
    const receipts: TransactionReceipt[] = [];
    const traceCalls: any[] = [];

    const receiptRequestData = {
      method: 'eth_getBlockReceipts',
      params: [Number(key)],
      id: 1,
      jsonrpc: '2.0',
    };

    const sources = shuffle(["https://polygon-rpc.com", "https://polygon.drpc.org", "https://rpc.ankr.com/polygon"]);
    for (let i = 0; i < 1; i++) {
      const provider = new providers.StaticJsonRpcProvider({
        url: sources[i],
      });

      const currentHeight = await provider.getBlockNumber();

      console.log("current height", currentHeight)

      const block = await provider.getBlockWithTransactions(+key);

      // only validate if current height is already 'finalized'
      if (block.number >= currentHeight - 256) {
        throw new Error(
          `Finality not reached yet; waiting for next block`
        )
      }
      // delete confirmations from transactions to keep data deterministic
      block.transactions.forEach(
        (tx: Partial<providers.TransactionResponse>) => {
          delete tx.confirmations
        }
      );
      blockWithTxs.push(block);

      // retrieve all transaction receipts for the key
      const receipt = await provider.send(receiptRequestData.method, receiptRequestData.params);
      receipts.push(receipt);

      const chunkedTransactions = chunkArray(blockWithTxs[0].transactions, 4);

      const chunkedTraceCalls: any[] = [];
      // Process each chunk
      for (const chunk of chunkedTransactions) {
        const traceParams = chunk.map((tx: any) => [
          {
            from: tx.from,
            to: tx.to,
            value: removeLeadingZero(tx.value.toHexString()),
          },
          ['trace'],
        ]);

        // Send trace call request for each chunk
        const traceCall = await provider.send('trace_callMany', [traceParams, 'latest']);

        traceCall.forEach((t: any) => {
          chunkedTraceCalls.push(t);
        })
      }
      traceCalls.push(chunkedTraceCalls)
    }

    // check if results from the different sources match
    if (
      !blockWithTxs.every((b) => JSON.stringify(b) === JSON.stringify(blockWithTxs[0]))
    ) {
      throw new Error(`Sources returned different blockWithTxs`);
    }
    if (
      !receipts.every((r) => JSON.stringify(r) === JSON.stringify(receipts[0]))
    ) {
      throw new Error(`Sources returned different receipts`);
    }
    if (
      !traceCalls.every((t) => JSON.stringify(t) === JSON.stringify(traceCalls[0]))
    ) {
      throw new Error(`Sources returned different traceCalls`);
    }

    return {
      key,
      value: {
        block: blockWithTxs[0],
        receipts: receipts[0],
        traceCalls: traceCalls[0]
      },
    };
  }


  async prevalidateDataItem(_: Validator, item: DataItem): Promise<boolean> {
    // check if item value is not null
    return !!item.value;
  }

  async transformDataItem(_: Validator, item: DataItem): Promise<DataItem> {
    // do not transform data item
    return item;
  }

  async validateDataItem(
      _: Validator,
      proposedDataItem: DataItem,
      validationDataItem: DataItem
  ): Promise<number> {
    // apply equal comparison
    if (
        JSON.stringify(proposedDataItem) === JSON.stringify(validationDataItem)
    ) {
      return VOTE.VOTE_TYPE_VALID;
    }
    return VOTE.VOTE_TYPE_INVALID;
  }

  async summarizeDataBundle(_: Validator, bundle: DataItem[]): Promise<string> {
    return bundle.at(-1)?.value?.hash ?? '';
  }

  async nextKey(_: Validator, key: string): Promise<string> {
    return (parseInt(key) + 1).toString();
  }
}