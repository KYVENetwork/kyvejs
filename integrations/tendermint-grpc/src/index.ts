// TODO: migrate imports to typescript import ... from ... syntax
const axios = require('axios');
const Ajv = require('ajv');

const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
// TODO: build project with webpack resolve path correctly and not hardcode dist here
const PROTO_PATH = './dist/runtime.proto';

import { name, version } from '../package.json';

const loaderOptions = {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
};

// Initializing the package definition
var packageDef = protoLoader.loadSync(PROTO_PATH, loaderOptions);

const grpcObj = grpc.loadPackageDefinition(packageDef);

const runtimeServer = new grpc.Server();

const ajv = new Ajv();

class TendermintServer {
  async getRuntimeName(call: any, callback: any) {
    callback(null, { name });
  }

  async getRuntimeVersion(call: any, callback: any) {
    callback(null, { version });
  }

  async validateSetConfig(call: any, callback: any) {
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

      const serialized_config = JSON.stringify(config);
      callback(null, { serialized_config });
    } catch (error: any) {
      callback({
        code: grpc.status.INVALID_ARGUMENT,
        details: error.message,
      });
    }
  }

  async getDataItem(call: any, callback: any) {
    try {
      const config = JSON.parse(call.request.config.serialized_config);
      const key = call.request.key;

      // Fetch block from rpc at the given block height
      const blockResponse = await axios.get(
        `${config.rpc}/block?height=${key}`
      );
      const block = blockResponse.data.result;

      // Fetch block results from rpc at the given block height
      const blockResultsResponse = await axios.get(
        `${config.rpc}/block_results?height=${key}`
      );
      const blockResults = blockResultsResponse.data.result;

      // Construct the Value message
      const value = {
        block: block,
        block_results: blockResults,
      };

      // Construct the DataItem message
      const data_item = {
        key: key,
        value: JSON.stringify(value),
      };

      callback(null, { data_item });
    } catch (error: any) {
      callback({
        code: grpc.status.INTERNAL,
        details: error.message,
      });
    }
  }
  async prevalidateDataItem(call: any, callback: any) {
    try {
      const config = JSON.parse(call.request.config.serialized_config);
      const request_item = call.request.data_item;
      const item = {
        key: request_item.key,
        value: JSON.parse(request_item.value),
      };

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
      if (config.network !== item.value.block.block.header.chain_id) {
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
    } catch (error: any) {
      callback({
        code: grpc.status.INTERNAL,
        details: error.message,
      });
    }
  }
  async transformDataItem(call: any, callback: any) {
    try {
      const config = JSON.parse(call.request.config.serialized_config);
      const request_item = call.request.data_item;
      const item = {
        key: request_item.key,
        value: JSON.parse(request_item.value),
      };

      const compareEventAttribute = (a: any, b: any) =>
        a.key.toLowerCase() > b.key.toLowerCase()
          ? 1
          : b.key.toLowerCase() > a.key.toLowerCase()
          ? -1
          : 0;

      if (item.value.block_results.begin_block_events) {
        item.value.block_results.begin_block_events =
          item.value.block_results.begin_block_events.map((event: any) => {
            event.attributes = event.attributes
              .sort(compareEventAttribute)
              .map(({ index, ...attribute }: any) => attribute);
            return event;
          });
      }

      if (item.value.block_results.end_block_events) {
        item.value.block_results.end_block_events =
          item.value.block_results.end_block_events.map((event: any) => {
            event.attributes = event.attributes
              .sort(compareEventAttribute)
              .map(({ index, ...attribute }: any) => attribute);
            return event;
          });
      }

      if (item.value.block_results.txs_results) {
        item.value.block_results.txs_results =
          item.value.block_results.txs_results.map((tx_result: any) => {
            delete tx_result.log;

            if (tx_result.events) {
              tx_result.events = tx_result.events.map((event: any) => {
                event.attributes = event.attributes
                  .sort(compareEventAttribute)
                  .map(({ index, ...attribute }: any) => attribute);

                if (event.type === 'fungible_token_packet') {
                  event.attributes = event.attributes.map((attribute: any) => {
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

      // Construct the data_item to return
      const transformed_data_item = {
        key: item.key,
        value: JSON.stringify(item.value),
      };

      callback(null, { transformed_data_item });
    } catch (error: any) {
      callback({
        code: grpc.status.INTERNAL,
        details: error.message,
      });
    }
  }

  async validateDataItem(call: any, callback: any) {
    try {
      const config = JSON.parse(call.request.config.serialized_config); // TODO: if a config is not needed in a method don't declare it
      const request_proposed_data_item = call.request.proposed_data_item;
      const request_validation_data_item = call.request.validation_data_item;
      const proposedDataItem = {
        key: request_proposed_data_item.key,
        value: JSON.parse(request_proposed_data_item.value),
      };
      const validationDataItem = {
        key: request_validation_data_item.key,
        value: JSON.parse(request_validation_data_item.value),
      };

      // Apply equal comparison
      const isValid =
        JSON.stringify(proposedDataItem) === JSON.stringify(validationDataItem);

      callback(null, { valid: isValid });
    } catch (error: any) {
      callback({
        code: grpc.status.INTERNAL,
        details: error.message,
      });
    }
  }
  async summarizeDataBundle(call: any, callback: any) {
    try {
      const config = JSON.parse(call.request.config.serialized_config);
      const grpcBundle = call.request.bundle;

      const bundle = grpcBundle.map((item: any) => ({
        key: item.key,
        value: JSON.parse(item.value),
      }));

      // Get the latest block height from the last item in the bundle
      const latestBlockHeight =
        bundle[bundle.length - 1]?.value?.block?.block?.header?.height || '';

      callback(null, { summary: latestBlockHeight.toString() });
    } catch (error: any) {
      callback({
        code: grpc.status.INTERNAL,
        details: error.message,
      });
    }
  }
  async nextKey(call: any, callback: any) {
    try {
      const config = JSON.parse(call.request.config.serialized_config);
      const key = call.request.key;

      // Calculate the next key (current block height + 1)
      const nextKey = (parseInt(key) + 1).toString();

      callback(null, { next_key: nextKey });
    } catch (error: any) {
      callback({
        code: grpc.status.INTERNAL,
        details: error.message,
      });
    }
  }
}

// TODO: clean up this part. server init should be done in index.ts file (here)
// and server implementation should be moved to another file (server.ts) for example
// to keep code clean
const runtimeService = new TendermintServer();
runtimeServer.addService(grpcObj.RuntimeService.service, {
  getRuntimeName: runtimeService.getRuntimeName,
  getRuntimeVersion: runtimeService.getRuntimeVersion,
  validateSetConfig: runtimeService.validateSetConfig,
  getDataItem: runtimeService.getDataItem,
  prevalidateDataItem: runtimeService.prevalidateDataItem,
  transformDataItem: runtimeService.transformDataItem,
  validateDataItem: runtimeService.validateDataItem,
  summarizeDataBundle: runtimeService.summarizeDataBundle,
  nextKey: runtimeService.nextKey,
});

runtimeServer.bindAsync(
  '0.0.0.0:50051',
  grpc.ServerCredentials.createInsecure(),
  (error: any, port: any) => {
    console.log('Server running at http://0.0.0.0:50051');
    runtimeServer.start();
  }
);
