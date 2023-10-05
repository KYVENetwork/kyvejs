import { DataItem, IRuntime, Validator, VOTE } from '@kyvejs/protocol';
import { name, version } from '../package.json';
import axios from 'axios';
import Ajv from 'ajv';
import block_schema from './schemas/block.json';
import block_results_schema from './schemas/block_result.json';

const ajv = new Ajv();

// Tendermint config
interface IConfig {
  network: string;
  rpc: string;
}

interface IAttribute {
  key: string;
  value: string;
  index?: boolean;
}

interface IEvent {
  type: string;
  attributes: IAttribute[];
}

export default class Tendermint implements IRuntime {
  public name = name;
  public version = version;
  public config!: IConfig;

  async validateSetConfig(rawConfig: string): Promise<void> {
    const config: IConfig = JSON.parse(rawConfig);

    if (!config.network) {
      throw new Error(`Config does not have property "network" defined`);
    }

    if (!config.rpc) {
      throw new Error(`Config does not have property "rpc" defined`);
    }

    if (process.env.KYVEJS_TENDERMINT_RPC) {
      config.rpc = process.env.KYVEJS_TENDERMINT_RPC;
    }

    this.config = config;
  }

  async getDataItem(_: Validator, key: string): Promise<DataItem> {
    // fetch block from rpc at given block height
    const {
      data: { result: block },
    } = await axios.get(`${this.config.rpc}/block?height=${key}`);

    // fetch block results from rpc at given block height
    const {
      data: { result: block_results },
    } = await axios.get(`${this.config.rpc}/block_results?height=${key}`);

    return { key, value: { block, block_results } };
  }

  async prevalidateDataItem(_: Validator, item: DataItem): Promise<boolean> {
    // check if data item is defined
    if (!item.value) {
      return false;
    }

    // check if block and block results are defined
    if (!item.value.block || !item.value.block_results) {
      return false;
    }

    // check if network matches
    if (this.config.network != item.value.block.block.header.chain_id) {
      return false;
    }

    // check if block height matches
    if (item.key !== item.value.block.block.header.height) {
      return false;
    }

    // check if block results height matches
    if (item.key !== item.value.block_results.height) {
      return false;
    }

    // validate block schema
    const block_validate = ajv.compile(block_schema);

    if (!block_validate(item.value.block)) {
      return false;
    }

    // validate block_results schema
    const block_results_validate = ajv.compile(block_results_schema);

    if (!block_results_validate(item.value.block_results)) {
      return false;
    }

    return true;
  }

  async transformDataItem(_: Validator, item: DataItem): Promise<DataItem> {
    // this method sorts all attributes of all events to ensure
    // determinism. Furthermore, the "log" property gets deleted from
    // the transaction results, since it contains duplicate information.
    // Finally, we remove the "Acknowledgement" attribute of the IBC
    // event "fungible_token_packet" since it is producing non-deterministic
    // values likely due to a bug

    const compareEventAttribute = (a: IAttribute, b: IAttribute) =>
      a.key.toLowerCase() > b.key.toLowerCase()
        ? 1
        : b.key.toLowerCase() > a.key.toLowerCase()
        ? -1
        : 0;

    // sort attributes and remove index in begin_block_events
    if (item.value.block_results.begin_block_events) {
      item.value.block_results.begin_block_events =
        item.value.block_results.begin_block_events.map((event: IEvent) => {
          event.attributes = event.attributes
            .sort(compareEventAttribute)
            .map(({ index, ...attribute }: IAttribute) => attribute);
          return event;
        });
    }

    // sort attributes and remove index in end_block_events
    if (item.value.block_results.end_block_events) {
      item.value.block_results.end_block_events =
        item.value.block_results.end_block_events.map((event: IEvent) => {
          event.attributes = event.attributes
            .sort(compareEventAttribute)
            .map(({ index, ...attribute }: IAttribute) => attribute);
          return event;
        });
    }

    if (item.value.block_results.txs_results) {
      item.value.block_results.txs_results =
        item.value.block_results.txs_results.map((tx_result: any) => {
          // delete log property of transaction results since it stores duplicate data
          delete tx_result.log;

          if (tx_result.events) {
            tx_result.events = tx_result.events.map((event: IEvent) => {
              // sort attributes in txs_results
              event.attributes = event.attributes
                .sort(compareEventAttribute)
                .map(({ index, ...attribute }: IAttribute) => attribute);

              // set attribute "acknowledgement" in ibc event "fungible_token_packet" to empty string
              if (event.type === 'fungible_token_packet') {
                event.attributes = event.attributes.map(
                  (attribute: IAttribute) => {
                    if (attribute.key === 'YWNrbm93bGVkZ2VtZW50') {
                      attribute.value = '';
                    }

                    return attribute;
                  }
                );
              }

              return event;
            });
          }

          return tx_result;
        });
    }

    return item;
  }

  async validateDataItem(
    _: Validator,
    proposedDataItem: DataItem,
    validationDataItem: DataItem
  ): Promise<number> {
    if (JSON.stringify(proposedDataItem) === JSON.stringify(validationDataItem)) {
      return VOTE.VALID
    }
    // prevent nondeterministic misbehaviour due to osmosis-1 specific problems
    if (validationDataItem.value.block.block.header.chain_id === "osmosis-1") {
      _.logger.info("Removing begin_block_events: osmosis-1 identified")
      // remove nondeterministic begin_block_events to prevent incorrect invalid vote
      delete validationDataItem.value.block_results.begin_block_events;
      delete proposedDataItem.value.block_results.begin_block_events;

      if (JSON.stringify(proposedDataItem) === JSON.stringify(validationDataItem)) {
        _.logger.warn("Voting abstain: value.block_results.begin_block_events don't match")
        // vote abstain if begin_block_events are not equal
        return VOTE.ABSTAIN
      }
    }
    // vote invalid if data does not match
    return VOTE.INVALID
  }

  async summarizeDataBundle(_: Validator, bundle: DataItem[]): Promise<string> {
    // use latest block height as bundle summary
    return bundle.at(-1)?.value?.block?.block?.header?.height ?? '';
  }

  async nextKey(_: Validator, key: string): Promise<string> {
    // the next key is always current block height + 1
    return (parseInt(key) + 1).toString();
  }
}
