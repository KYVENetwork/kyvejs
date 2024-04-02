import { DataItem, IRuntime, Validator, VOTE } from "@kyvejs/protocol";
import { name, version } from "../package.json";
import axios from "axios";
import { createVersionedHash, getTransactionByHash } from "../utils/utils";
import { providers } from "ethers";
import { hexValue } from "ethers/lib/utils";
import { createHashesFromBundle, generateMerkleRoot } from "../utils/merkle";

// Ethereum Blobs config
interface IConfig {
  consensusRPC: string;
  executionRPC: string;
  finality: number;
  genesisTime: number;
  sequencer: string[];
}

export default class EthereumBlobs implements IRuntime {
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

    if (!config.sequencer.length) {
      throw new Error(`Config does not have property "sequencer" defined`);
    }

    if (process.env.KYVEJS_ETHEREUM_BLOBS_EXECUTION_RPC) {
      config.executionRPC = process.env.KYVEJS_ETHEREUM_BLOBS_EXECUTION_RPC;

      console.log("set config executionRPC to", config.executionRPC)
    }

    if (process.env.KYVEJS_ETHEREUM_BLOBS_CONSENSUS_RPC) {
      config.consensusRPC = process.env.KYVEJS_ETHEREUM_BLOBS_CONSENSUS_RPC;

      console.log("set config consensusRPC to", config.consensusRPC)
    }

    this.config = config;
    this.config.sequencer = config.sequencer.map(s => s.toLowerCase())
  }

  async  getDataItem(_: Validator, key: string): Promise<any> {
    const provider = new providers.StaticJsonRpcProvider(this.config.executionRPC);

    const currentHeight = await provider.getBlockNumber();

    // only validate if current height is already 'finalized'
    if (parseInt(key) >= currentHeight - 256) {
      throw new Error(
        `Finality not reached yet; waiting for next block`
      )
    }

    const hexKey = hexValue(+key);

    const block = await provider.getBlockWithTransactions(hexKey);

    // Get all type3 transactions that has been sent to the sequencer inbox
    const filteredTransactions = block.transactions.filter(
      (tx) => {
        if (tx.type == 3) {
          if (tx.to && tx.from) {
            return this.config.sequencer.includes(tx.to.toLowerCase()) || this.config.sequencer.includes(tx.from.toLowerCase())
          } else if (tx.to && !tx.from) {
            return this.config.sequencer.includes(tx.to.toLowerCase())
          } else if (!tx.to && tx.from) {
            return this.config.sequencer.includes(tx.from.toLowerCase())
          }
        }
        return false
      }
    );

    let type3TxsToSequencer: string[] = [];
    for (const tx of filteredTransactions) {
      const txDetail = await getTransactionByHash(this.config.executionRPC, tx.hash);
      txDetail["blobVersionedHashes"].forEach((bHash: any) => type3TxsToSequencer.push(bHash))
    }

    let blobs: any[] = [];

    // Calculate corresponding slot number
    const slotNumber = (block.timestamp - this.config.genesisTime) / 12

    await axios.get(`${this.config.consensusRPC}/eth/v1/beacon/blob_sidecars/${slotNumber}`, {
      headers: {
        'accept': 'application/json'
      }
    }).then((res) => {
      blobs = res.data.data;
    }).catch(err => {
      throw new Error(
        `Failed to query '/eth/v1/beacon/blob_sidecars/${slotNumber}': ${err}`
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
      value: {
        slot: slotNumber,
        blobs: includedBlobs
      },
    };
  }


  async prevalidateDataItem(_: Validator, item: DataItem): Promise<boolean> {
    // check if item value is not null
    return item.value && item.value.slot
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
      "from_slot": bundle.at(0)?.value.slot,
      "to_slot": bundle.at(-1)?.value.slot,
      "merkle_root": merkleRoot
    })
  }

  async nextKey(_: Validator, key: string): Promise<string> {
    return (parseInt(key) + 1).toString();
  }
}