import { DataItem, IRuntime, Validator, VOTE } from "@kyvejs/protocol";
import { name, version } from "../package.json";
import axios from "axios";
import { providers } from "ethers";
import { hexValue } from "ethers/lib/utils";
import { createHashesFromBundle, generateMerkleRoot } from "../utils/merkle";

// Ethereum Blobs config
interface IConfig {
  rpc: string;
}

export default class Avail implements IRuntime {
  public name = name;
  public version = version;
  public config!: IConfig;

  async validateSetConfig(rawConfig: string): Promise<void> {
    const config: IConfig = JSON.parse(rawConfig);

    if (!config.rpc) {
      throw new Error(`Config does not have property "rpc" defined`);
    }

    if (process.env.KYVEJS_AVAIL_RPC) {
      config.rpc = process.env.KYVEJS_AVAIL_RPC;

      console.log("set config rpc to", config.rpc)
    }

    this.config = config;
  }

  async  getDataItem(_: Validator, key: string): Promise<any> {
    let blockHash;
    let block;

    const blockHashResult = await axios.post(this.config.rpc, {
      id: 1,
      jsonrpc: '2.0',
      method: 'chain_getBlockHash',
      params: [
        +key,
      ]
    }, {
      headers: {
        'Content-Type': 'application/json',
      }
    });

    if (blockHashResult.data.result) {
      blockHash = blockHashResult.data.result
    } else {
      throw new Error(`Failed to query block hash`)
    }

    const blockResult = await axios.post(this.config.rpc, {
      id: 1,
      jsonrpc: '2.0',
      method: 'chain_getBlock',
      params: [
        blockHash,
      ]
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.CELESTIA_NODE_AUTH_TOKEN}`
      }
    });

    if (blockResult.data.result) {
      block = blockResult.data.result
    } else {
      throw new Error(`Failed to query block`)
    }

    return {
      key,
      value: block,
    };
  }


  async prevalidateDataItem(_: Validator, item: DataItem): Promise<boolean> {
    // check if item value is not null
    return item.value
  }

  async transformDataItem(_: Validator, item: DataItem): Promise<DataItem> {
    // do not transform data item
    return item;
  }

  async validateDataItem(
    v: Validator,
    proposedDataItem: DataItem,
    validationDataItem: DataItem
  ): Promise<number> {
    // apply equal comparison
    if (
      JSON.stringify(proposedDataItem) === JSON.stringify(validationDataItem)
    ) {
      return VOTE.VOTE_TYPE_VALID;
    }
    // prevent nondeterministic misbehaviour
    v.logger.info('Removing commitments: difference identified');
    // remove nondeterministic block_results to prevent incorrect invalid vote
    delete validationDataItem.value.block.header.extension.V1.commitment;

    if (
      JSON.stringify(proposedDataItem) === JSON.stringify(validationDataItem)
    ) {
      v.logger.warn("Voting abstain: value.block.header.extension.V1.commitment don't match");
      // vote abstain if begin_block_events are not equal
      return VOTE.VOTE_TYPE_ABSTAIN;
    }
    // vote invalid if data does not match
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