import { DataItem, IRuntime, Validator, VOTE } from "@kyvejs/protocol";
import { name, version } from "../package.json";
import axios from "axios";
import { createVersionedHash, getTransactionByHash } from "../utils/utils";
import { providers } from "ethers";
import { hexValue } from "ethers/lib/utils";
import { SHA256 } from "crypto-js";


// Beacon Blobs config
interface IConfig {
  consensusRPC: string;
  executionRPC: string;
  finality: number;
  genesisTime: number;
  sequencer: string;
}

export default class BeaconBlobs implements IRuntime {
  public name = name;
  public version = version;
  public config!: IConfig;

  async validateSetConfig(rawConfig: string): Promise<void> {
    const config: IConfig = JSON.parse(rawConfig);

    if (!config.finality) {
      throw new Error(`Config does not have finality defined`);
    }

    if (!config.consensusRPC) {
      throw new Error(`Config does not have property "consensusRPC" defined`);
    }

    if (!config.executionRPC) {
      throw new Error(`Config does not have property "executionRPC" defined`);
    }

    if (!config.genesisTime) {
      throw new Error(`Config does not have property "genesisTime" defined`);
    }

    if (!config.sequencer) {
      throw new Error(`Config does not have property "sequencer" defined`);
    }

    if (process.env.KYVEJS_BEACON_BLOBS_EXECUTION_RPC) {
      config.executionRPC = process.env.KYVEJS_BEACON_BLOBS_EXECUTION_RPC;

      console.log("set config executionRPC to", config.executionRPC)
    }

    if (process.env.KYVEJS_BEACON_BLOBS_CONSENSUS_RPC) {
      config.consensusRPC = process.env.KYVEJS_BEACON_BLOBS_CONSENSUS_RPC;

      console.log("set config consensusRPC to", config.consensusRPC)
    }


    this.config = config;
  }

  async  getDataItem(_: Validator, key: string): Promise<any> {
    const provider = new providers.StaticJsonRpcProvider(this.config.executionRPC);

    const currentHeight = await provider.getBlockNumber();

    console.log("current height", currentHeight)

    const hexKey = hexValue(+key);

    const block = await provider.getBlockWithTransactions(hexKey);

    // only validate if current height is already 'finalized'
    if (block.number >= currentHeight - 256) {
      throw new Error(
        `Finality not reached yet; waiting for next block`
      )
    }

    // Get all type3 transactions that has been sent to the sequencer inbox
    const filteredTransactions = block.transactions.filter(
      (tx) => tx.type == 3 && tx.to == this.config.sequencer
    );

    // Calculate corresponding slot number
    const slotNumber = (block.timestamp - this.config.genesisTime) / 12

    let type3TxsToSequencer: string[] = [];
    for (const tx of filteredTransactions) {
      const txDetail = await getTransactionByHash(this.config.executionRPC, tx.hash);
      type3TxsToSequencer.concat(txDetail["blobVersionedHashes"]);
    }

    let blobs: any;

    await axios.get(`${this.config.consensusRPC}/eth/v1/beacon/blob_sidecars/${slotNumber}`, {
      headers: {
        'accept': 'application/json'
      }
    }).then((res) => {
      blobs = res.data.data;
    }).catch(err => {
      throw new Error(
        `Failed to query '/eth/v1/beacon/blob_sidecars/${slotNumber}'`
      );
    });

    let includedBlobs: any[] = [];
    // For each blob, take KZG commitment and check if it matches with a first versioned hash of type3TxToSequencer.
    // This means that the blob was actually sent to the sequencer address.
    // If it matches, include the blob in data item, if not, skip blob.
    blobs.forEach((b: any) => {
      const commitment= createVersionedHash(b["kzg_commitment"]);

      if (type3TxsToSequencer.includes(commitment)) {
        includedBlobs.push(b)
      }
    });

    if (includedBlobs.length != type3TxsToSequencer.length) {
      throw new Error(
        `Length of included blobs and txs to sequencer is not equal`
      )
    }

    return {
      key,
      value: includedBlobs,
    };
  }


  async prevalidateDataItem(_: Validator, item: DataItem): Promise<boolean> {
    // check if item value is not null
    return true;
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
    return JSON.stringify(bundle.map((x: any) => {
      const str = JSON.stringify(x)
      return SHA256(str)
    }));
  }

  async nextKey(_: Validator, key: string): Promise<string> {
    return (parseInt(key) + 1).toString();
  }
}