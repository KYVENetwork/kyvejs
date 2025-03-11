import { DataItem, IRuntime, Validator, VOTE } from "@kyvejs/protocol";
import { name, version } from "../package.json";
import { createHashesFromBundle, generateMerkleRoot } from "../utils/merkle";
import { fetchJsonRpc } from "../utils/utils";

// Avail config
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
    }

    this.config = config;
  }

  async getDataItem(_: Validator, key: string): Promise<any> {
    const finalizedBlockHash = await fetchJsonRpc(this.config.rpc, 'chain_getFinalizedHead');
    const finalizedBlock = await fetchJsonRpc(this.config.rpc, 'chain_getBlock', [finalizedBlockHash]);
    const finalizedHeight = parseInt(finalizedBlock.block.header.number);

    if (parseInt(key) > finalizedHeight) {
      throw new Error('Finality not reached yet; waiting for finality');
    }

    const blockHash = await fetchJsonRpc(this.config.rpc, 'chain_getBlockHash', [+key]);
    const block = await fetchJsonRpc(this.config.rpc, 'chain_getBlock', [blockHash]);

    return {
      key,
      value: {
        block: block.block,
        hash: blockHash,
      },
    };
  }

  async prevalidateDataItem(_: Validator, item: DataItem): Promise<boolean> {
    return true
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
    // remove nondeterministic data to prevent incorrect invalid vote
    delete validationDataItem.value.block.header.extension.V3.commitment;
    delete proposedDataItem.value.block.header.extension.V3.commitment;
    delete validationDataItem.value.justifications;
    delete proposedDataItem.value.justifications;

    if (
      JSON.stringify(proposedDataItem) === JSON.stringify(validationDataItem)
    ) {
      v.logger.warn("Voting abstain: value.block.header.extension.V3.commitment or value.justifications don't match");
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