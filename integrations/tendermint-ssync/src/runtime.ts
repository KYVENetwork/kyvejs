import { DataItem, IRuntime, Validator, VOTE } from '@kyvejs/protocol';
import { name, version } from '../package.json';
import axios from 'axios';

// TendermintBSync config
interface IConfig {
  api: string;
  interval: number;
}

interface ISnapshot {
  height: number;
  format: number;
  chunks: number;
  hash: string;
  metadata: string;
}

export default class TendermintSSync implements IRuntime {
  public name = name;
  public version = version;
  public config!: IConfig;

  async validateSetConfig(rawConfig: string): Promise<void> {
    const config: IConfig = JSON.parse(rawConfig);

    if (!config.api) {
      throw new Error(`Config does not have property "api" defined`);
    }

    if (!config.interval) {
      throw new Error(`Config does not have property "interval" defined`);
    }

    if (process.env.KYVEJS_TENDERMINT_SSYNC_API) {
      config.api = process.env.KYVEJS_TENDERMINT_SSYNC_API;
    }

    this.config = config;
  }

  async getDataItem(_: Validator, key: string): Promise<DataItem> {
    // fetch snapshot chunk from given height, format and chunk derived from key
    const [height, chunkIndex] = key.split('/').map((k) => +k);

    const { data: snapshots } = await axios.get(
      `${this.config.api}/list_snapshots`
    );

    if (!snapshots) {
      throw new Error(`404: Snapshot with height ${height} not found`);
    }

    const snapshot: ISnapshot = snapshots.find(
      (s: ISnapshot) => +s.height === height
    );

    if (!snapshot) {
      throw new Error(`404: Snapshot with height ${height} not found`);
    }

    // fetch snapshot chunk
    const { data: chunk } = await axios.get(
      `${this.config.api}/load_snapshot_chunk/${height}/${snapshot.format}/${chunkIndex}`
    );

    // if we are not at the first chunk we skip all the metadata to prevent
    // storing information repeatedly
    if (chunkIndex != 0) {
      return {
        key,
        value: {
          snapshot: null,
          block: null,
          seenCommit: null,
          state: null,
          chunk,
        },
      };
    }

    // fetch block
    const { data: block } = await axios.get(
      `${this.config.api}/get_block/${height}`
    );

    // fetch seen commit
    const { data: seenCommit } = await axios.get(
      `${this.config.api}/get_seen_commit/${height}`
    );

    // fetch state
    const { data: state } = await axios.get(
      `${this.config.api}/get_state/${height}`
    );

    return {
      key,
      value: {
        snapshot,
        block,
        seenCommit,
        state,
        chunk,
      },
    };
  }

  async prevalidateDataItem(_: Validator, item: DataItem): Promise<boolean> {
    // parse snapshot key
    const [height, chunkIndex] = item.key.split('/').map((k) => +k);

    // throw error if entire value is not defined
    if (!item.value) {
      throw new Error(`Value in data item is not defined: ${item.value}`);
    }

    // throw error if chunk is missing
    if (!item.value.chunk) {
      throw new Error(`Value in data item has no snapshot chunk`);
    }

    if (chunkIndex > 0) {
      // throw error if one of those values is not null
      if (
        item.value.snapshot ||
        item.value.block ||
        item.value.seenCommit ||
        item.value.state
      ) {
        throw new Error(
          `Value in data item has unexpected values; snapshot:${item.value.snapshot} block:${item.value.block} seenCommit:${item.value.seenCommit} state:${item.value.state}`
        );
      }

      return true;
    }

    // throw error if one of those values is null
    if (
      !(
        item.value.snapshot &&
        item.value.block &&
        item.value.seenCommit &&
        item.value.state
      )
    ) {
      throw new Error(
        `Value in data item has unexpected null values; snapshot:${!!item.value
          .snapshot} block:${!!item.value.block} seenCommit:${!!item.value
          .seenCommit} state:${!!item.value.state}`
      );
    }

    // throw error if snapshot height mismatches
    if (+item.value.snapshot.height !== height) {
      throw new Error(
        `Snapshot height differs in key and value; key:${height} value:${item.value.snapshot.height}`
      );
    }

    return true;
  }

  async transformDataItem(_: Validator, item: DataItem): Promise<DataItem> {
    // don't transform data item
    return item;
  }

  async validateDataItem(
    _: Validator,
    proposedDataItem: DataItem,
    validationDataItem: DataItem
  ): Promise<number> {
    // exclude tendermint software version from validation
    if (proposedDataItem.value.state && proposedDataItem.value.state.Version) {
      delete proposedDataItem.value.state.Version.software;
    }

    if (
      validationDataItem.value.state &&
      validationDataItem.value.state.Version
    ) {
      delete validationDataItem.value.state.Version.software;
    }

    // apply equal comparison
    if (
      JSON.stringify(proposedDataItem) === JSON.stringify(validationDataItem)
    ) {
      return VOTE.VOTE_TYPE_VALID;
    }
    return VOTE.VOTE_TYPE_INVALID;
  }

  async summarizeDataBundle(_: Validator, bundle: DataItem[]): Promise<string> {
    return bundle.at(-1)?.key ?? '';
  }

  async nextKey(_: Validator, key: string): Promise<string> {
    // since we only need to fetch if we continue with the next snapshot
    const [height, chunkIndex] = key.split('/').map((k) => +k);

    const { data: snapshots } = await axios.get(
      `${this.config.api}/list_snapshots`
    );

    if (!snapshots) {
      throw new Error(`404: Snapshot with height ${height} not found`);
    }

    const snapshot: ISnapshot = snapshots.find(
      (s: ISnapshot) => +s.height === height
    );

    if (!snapshot) {
      throw new Error(`404: Snapshot with height ${height} not found`);
    }

    // move on to next snapshot and start at first chunk
    // if we have already reached all chunks in current snapshot
    if (snapshot.chunks - 1 === chunkIndex) {
      return `${height + this.config.interval}/0`;
    }

    // stay on current snapshot and continue with next snapshot chunk
    return `${height}/${chunkIndex + 1}`;
  }
}
