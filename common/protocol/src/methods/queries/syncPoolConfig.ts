import axios from "axios";

import { Validator } from "../..";
import { standardizeJSON } from "../../utils";

/**
 * syncPoolConfig fetches the pool config from the provided link
 * and parses it into a json config
 *
 * @method syncPoolConfig
 * @param {Validator} this
 * @return {Promise<void>}
 */
export async function syncPoolConfig(this: Validator): Promise<void> {
  try {
    this.logger.debug(this.pool.data!.config);

    try {
      this.poolConfig = JSON.parse(this.pool.data!.config);
      return;
    } catch {}

    let url: string;

    // allow ipfs:// or ar:// as external config urls
    if (this.pool.data!.config.startsWith("ipfs://")) {
      url = this.pool.data!.config.replace("ipfs://", "https://ipfs.io/");
    } else if (this.pool.data!.config.startsWith("ar://")) {
      url = this.pool.data!.config.replace("ar://", "https://arweave.net/");
    } else {
      throw Error("Unsupported config link protocol");
    }

    this.logger.debug(url);
    const { data } = await axios.get(url);

    this.logger.debug(JSON.stringify(data));
    this.poolConfig = data;
  } catch (err) {
    this.logger.error(`Failed to sync pool config`);
    this.logger.error(standardizeJSON(err));

    if (!this.poolConfig) {
      this.poolConfig = {};
    }
  }
}
