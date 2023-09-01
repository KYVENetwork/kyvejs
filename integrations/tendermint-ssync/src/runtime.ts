import { DataItem, IRuntime, Validator } from '@kyvejs/protocol';
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
      (s: ISnapshot) => s.height === height
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
          snapshot,
          lastLightBlock: null,
          currentLightBlock: null,
          nextLightBlock: null,
          appHash: null,
          chunkIndex,
          chunk,
        },
      };
    }

    // fetch app hash
    const {
      data: { AppHash: appHash },
    } = await axios.get(`${this.config.api}/get_app_hash/${height + 1}`);

    // fetch light blocks
    const { data: lastLightBlock } = await axios.get(
      `${this.config.api}/get_light_block/${height}`
    );

    const { data: currentLightBlock } = await axios.get(
      `${this.config.api}/get_light_block/${height + 1}`
    );

    const { data: nextLightBlock } = await axios.get(
      `${this.config.api}/get_light_block/${height + 2}`
    );

    return {
      key,
      value: {
        snapshot,
        lastLightBlock,
        currentLightBlock,
        nextLightBlock,
        appHash,
        chunkIndex,
        chunk,
      },
    };
  }

  async prevalidateDataItem(_: Validator, item: DataItem): Promise<boolean> {
    // check if block is defined
    if (!item.value) {
      return false;
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
  ): Promise<boolean> {
    // apply equal comparison
    return (
      JSON.stringify(proposedDataItem) === JSON.stringify(validationDataItem)
    );
  }

  async summarizeDataBundle(_: Validator, bundle: DataItem[]): Promise<string> {
    // TODO: maybe app hash or snapshot hash?
    return `${bundle.at(-1)?.value?.snapshot?.height ?? '0'}/${
      bundle.at(-1)?.value?.chunkIndex
    }`;
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
      (s: ISnapshot) => s.height === height
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
