import { DataItem, IRuntime, Validator, VOTE } from "@kyvejs/protocol";
import { name, version } from "../package.json";
import { providers, utils } from "ethers";
import { TransactionReceipt } from "@ethersproject/abstract-provider";
import { createHashesFromBundle, generateMerkleRoot } from "../utils/merkle";

// EVM config
interface IConfig {
  rpc: string;
  finality: number;
  includedData: {
    blockWithTransactions: boolean,
    blockReceipts: boolean,
    transactionReceipts: boolean,
  }
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

    if (!config.includedData?.blockWithTransactions && !config.includedData?.blockReceipts && !config.includedData?.transactionReceipts) {
      throw new Error(`Config require included data`);
    }

    if (!config.includedData?.blockReceipts && !config.includedData?.transactionReceipts) {
      throw new Error(`Config can not include block receipts and transaction receipts at the same time`);
    }

    this.config = config;
  }

  async  getDataItem(_: Validator, key: string): Promise<any> {
    let receipts: TransactionReceipt[] = [];

    const provider = new providers.StaticJsonRpcProvider({
      url: this.config.rpc,
    });

    const currentHeight = await provider.getBlockNumber();

    const hexKey = utils.hexValue(+key);

    const block = await provider.getBlockWithTransactions(hexKey);

    // only validate if current height is already 'finalized'
    if (block.number >= currentHeight - this.config.finality) {
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

    if (this.config.includedData.blockReceipts) {
      const receiptRequestData = {
        method: 'eth_getBlockReceipts',
        params: [hexKey],
        id: 1,
        jsonrpc: '2.0',
      };

      // retrieve all transaction receipts for the key
      receipts = await provider.send(receiptRequestData.method, receiptRequestData.params)
    } else if (this.config.includedData.transactionReceipts) {
      for (const tx of block.transactions) {
        // retrieve transaction receipt
        const receiptRequestData = {
          method: 'eth_getTransactionReceipt',
          params: [tx.hash],
          id: 1,
          jsonrpc: '2.0',
        };

        const txReceipt = await provider.send(receiptRequestData.method, receiptRequestData.params);
        receipts.push(txReceipt)
      }
    }

    let value: any = {}

    if (this.config.includedData.blockWithTransactions) {
      value.block = block
    }

    if (this.config.includedData.transactionReceipts) {
      value.receipts = receipts
    } else if (this.config.includedData.blockReceipts) {
      value.receipts = receipts
    }

    return {
      key,
      value: value,
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
    const hashes = createHashesFromBundle(bundle);
    const merkleRoot = generateMerkleRoot(hashes);

    return JSON.stringify({
      "merkle_root": merkleRoot
    })
  }

  async nextKey(_: Validator, key: string): Promise<string> {
    return (parseInt(key) + 1).toString();
  }
}