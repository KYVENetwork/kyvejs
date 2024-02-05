import { DataItem, IRuntime, Validator, VOTE } from '@kyvejs/protocol';
import { name, version } from '../package.json';
import { providers } from 'ethers';
import { BlockWithTransactions, TransactionReceipt } from '@ethersproject/abstract-provider';

// EVM config
interface IConfig {
  rpc: string;
  finality: number;
}

export default class EVM implements IRuntime {
  public name = name;
  public version = version;
  public config!: IConfig;

  async validateSetConfig(rawConfig: string): Promise<void> {
    const config: IConfig = JSON.parse(rawConfig);

    if (!config.rpc) {
      throw new Error(`Config does not have property "rpc" defined`);
    }

    if (process.env.KYVEJS_EVM_RPC) {
      config.rpc = process.env.KYVEJS_EVM_RPC;
    }

    if (!config.finality) {
      throw new Error(`Config does not have finality defined`);
    }

    this.config = config;
  }

  async  getDataItem(_: Validator, key: string): Promise<any> {
    const blockWithTxs: BlockWithTransactions[] = [];
    const receipts: TransactionReceipt[] = [];
    // const traceCalls: any[] = [];

    const provider = new providers.StaticJsonRpcProvider({
      url: this.config.rpc,
    });

    const currentHeight = await provider.getBlockNumber();

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

    const receiptRequestData = {
      method: 'eth_getBlockReceipts',
      params: [Number(key)],
      id: 1,
      jsonrpc: '2.0',
    };

    // retrieve all transaction receipts for the key
    const receipt = await provider.send(receiptRequestData.method, receiptRequestData.params);
    receipts.push(receipt);

    // const chunkedTransactions = chunkArray(blockWithTxs[0].transactions, 4);
    //
    // const chunkedTraceCalls: any[] = [];
    // // Process each chunk
    // for (const chunk of chunkedTransactions) {
    //   const traceParams = chunk.map((tx: any) => [
    //     {
    //       from: tx.from,
    //       to: tx.to,
    //       value: removeLeadingZero(tx.value.toHexString()),
    //     },
    //     ['trace'],
    //   ]);
    //
    //   // Send trace call request for each chunk
    //   const traceCall = await provider.send('trace_callMany', [traceParams, 'latest']);
    //
    //   traceCall.forEach((t: any) => {
    //     chunkedTraceCalls.push(t);
    //   })
    // }
    // traceCalls.push(chunkedTraceCalls)

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
    // if (
    //   !traceCalls.every((t) => JSON.stringify(t) === JSON.stringify(traceCalls[0]))
    // ) {
    //   throw new Error(`Sources returned different traceCalls`);
    // }

    return {
      key,
      value: {
        block: blockWithTxs[0],
        receipts: receipts[0],
        // traceCalls: traceCalls[0]
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

  // Remove non-deterministic data
  //   const modifiedValidationDataItem = removeOutputProperties(validationDataItem.value.traceCalls, ["output", "accessList", "address", "value"]);
  //   const modifiedProposedDataItem = removeOutputProperties(proposedDataItem.value.traceCalls, ["output", "accessList", "address", "value"])
  //
  // if (
  //     JSON.stringify(modifiedProposedDataItem) === JSON.stringify(modifiedValidationDataItem)
  //   ) {
  //     return VOTE.VOTE_TYPE_ABSTAIN;
  //   }

    return VOTE.VOTE_TYPE_INVALID;
  }

  async summarizeDataBundle(_: Validator, bundle: DataItem[]): Promise<string> {
    return bundle.at(-1)?.value?.hash ?? '';
  }

  async nextKey(_: Validator, key: string): Promise<string> {
    return (parseInt(key) + 1).toString();
  }
}