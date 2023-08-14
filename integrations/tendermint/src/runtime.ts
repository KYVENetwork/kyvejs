import { DataItem, IRuntime, Validator } from '@kyvejs/protocol';
import { name, version } from '../package.json';
import axios from 'axios';
import Ajv from 'ajv';
import block_schema from './schemas/block.json';
import block_results_schema from './schemas/block_result.json';
const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");
const PROTO_PATH = "./password.proto";

const loaderOptions = {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
};

// initializing the package definition
var packageDef = protoLoader.loadSync(PROTO_PATH, loaderOptions);

const grpcObj = grpc.loadPackageDefinition(packageDef);

const runtimeServer = new grpc.Server();

const ajv = new Ajv();



class TendermintServer {
    async getName: (call, callback) => {
      const config = call.request.config;

      const name = "Runtime Name";

      callback(null, { name });
    },
    async getVersion: (call, callback) => {
      const config = call.request.config;

      const version = "Runtime Version";

      callback(null, { version });
    },
    async validateSetConfig(call, callback) {
      try {
        const rawConfig = call.request.raw_config;
        const config = JSON.parse(rawConfig);

        if (!config.network) {
          callback({
            code: grpc.status.INVALID_ARGUMENT,
            details: 'Config does not have property "network" defined',
          });
          return;
        }

        if (!config.rpc) {
          callback({
            code: grpc.status.INVALID_ARGUMENT,
            details: 'Config does not have property "rpc" defined',
          });
          return;
        }

        if (process.env.KYVEJS_TENDERMINT_RPC) {
          config.rpc = process.env.KYVEJS_TENDERMINT_RPC;
        }

        // Store the validated config
        this.config = config;

        callback(null, {});
      } catch (error) {
        callback({
          code: grpc.status.INVALID_ARGUMENT,
          details: error.message,
        });
      }
    },
    async getDataItem(call, callback) {
      try {
        const key = call.request.key;

        // Fetch block from rpc at the given block height
        const blockResponse = await axios.get(`${this.config.rpc}/block?height=${key}`);
        const block = blockResponse.data.result.block;

        // Fetch block results from rpc at the given block height
        const blockResultsResponse = await axios.get(`${this.config.rpc}/block_results?height=${key}`);
        const blockResults = blockResultsResponse.data.result.block_results;

        // Construct the Value message
        const value = {
          block: block,
          block_results: blockResults,
        };

        // Construct the DataItem message
        const dataItem = {
          key: key,
          value: value,
        };

        callback(null, dataItem);
      } catch (error) {
        callback({
          code: grpc.status.INTERNAL,
          details: error.message,
        });
       }
    },
    async prevalidateDataItem(call, callback) {
      try {
        const item = call.request.item;

        // Check if data item is defined
        if (!item.value) {
          callback(null, { valid: false });
          return;
        }

        // Check if block and block results are defined
        if (!item.value.block || !item.value.block_results) {
          callback(null, { valid: false });
          return;
        }

        // Check if network matches
        if (this.config.network !== item.value.block.block.header.chain_id) {
          callback(null, { valid: false });
          return;
        }

        // Check if block height matches
        if (item.key !== item.value.block.block.header.height.toString()) {
          callback(null, { valid: false });
          return;
        }

        // Perform additional validation if needed

        // If all checks pass, the data item is prevalidated
        callback(null, { valid: true });
      } catch (error) {
        callback({
          code: grpc.status.INTERNAL,
          details: error.message,
        });
      }
    },
    async transformDataItem(call, callback) {
      try {
        const item = call.request.item;

        // Sort attributes of events and remove unnecessary properties
        if (item.value.block_results.begin_block_events) {
          item.value.block_results.begin_block_events = item.value.block_results.begin_block_events.map((event) => {
            event.attributes = event.attributes.sort((a, b) => a.key.localeCompare(b.key));
            return {
              ...event,
              attributes: event.attributes.map(({ index, ...attribute }) => attribute),
            };
          });
        }

        if (item.value.block_results.end_block_events) {
          item.value.block_results.end_block_events = item.value.block_results.end_block_events.map((event) => {
            event.attributes = event.attributes.sort((a, b) => a.key.localeCompare(b.key));
            return {
              ...event,
              attributes: event.attributes.map(({ index, ...attribute }) => attribute),
            };
          });
        }

        if (item.value.block_results.txs_results) {
          item.value.block_results.txs_results = item.value.block_results.txs_results.map((tx_result) => {
            delete tx_result.log;

            if (tx_result.events) {
              tx_result.events = tx_result.events.map((event) => {
                event.attributes = event.attributes.sort((a, b) => a.key.localeCompare(b.key));

                if (event.type === 'fungible_token_packet') {
                  event.attributes = event.attributes.map((attribute) => {
                    if (attribute.key === 'YWNrbm93bGVkZ2VtZW50') {
                      attribute.value = '';
                    }
                    return attribute;
                  });
                }

                return event;
              });
            }

            return tx_result;
          });
        }

        callback(null, item);
      } catch (error) {
        callback({
          code: grpc.status.INTERNAL,
          details: error.message,
        });
      }
    },
    async validateDataItem(call, callback) {
      try {
        const proposedDataItem = call.request.proposed_item;
        const validationDataItem = call.request.validation_item;

        // Apply equal comparison
        const isValid = JSON.stringify(proposedDataItem) === JSON.stringify(validationDataItem);

        callback(null, { valid: isValid });
      } catch (error) {
        callback({
          code: grpc.status.INTERNAL,
          details: error.message,
        });
      }
    },
    async summarizeDataBundle(call, callback) {
      try {
        const bundle = call.request.bundle;

        // Get the latest block height from the last item in the bundle
        const latestBlockHeight = bundle[bundle.length - 1]?.value?.block?.block?.header?.height || '';

        callback(null, { summary: latestBlockHeight.toString() });
      } catch (error) {
        callback({
          code: grpc.status.INTERNAL,
          details: error.message,
        });
      }
    },
    async nextKey(call, callback) {
      try {
        const key = call.request.key;

        // Calculate the next key (current block height + 1)
        const nextKey = (parseInt(key) + 1).toString();

        callback(null, { next_key: nextKey });
      } catch (error) {
        callback({
          code: grpc.status.INTERNAL,
          details: error.message,
        });
      }
    }
}


const runtimeService = new TendermintServer();
server.addService(runtimeProto.RuntimeService.service, {
  validateSetConfig: runtimeService.validateSetConfig,
  getDataItem: runtimeService.getDataItem,
  prevalidateDataItem: runtimeService.PrevalidateDataItem,
  transformDataItem: runtimeService.TransformDataItem,
  validateDataItem: runtimeService.ValidateDataItem,
  summarizeDataBundle: runtimeService.SummarizeDataBundle,
  nextKey: runtimeService.NextKey,
});


runtimeServer.bindAsync(
    "0.0.0.0:50051",
    grpc.ServerCredentials.createInsecure(),
    (error, port) => {
        console.log("Server running at http://0.0.0.0:50051");
        ourServer.start();
    }
);