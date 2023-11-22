import * as grpc from '@grpc/grpc-js';
import { sendUnaryData, ServerUnaryCall, UntypedHandleCall } from '@grpc/grpc-js';
import Ajv from 'ajv';
import block_schema from './schemas/block.json';
import block_results_schema from './schemas/block_result.json';
import { name, version } from '../package.json';
import {
  GetDataItemRequest,
  GetDataItemResponse,
  GetRuntimeNameRequest,
  GetRuntimeNameResponse,
  GetRuntimeVersionRequest,
  GetRuntimeVersionResponse,
  NextKeyRequest,
  NextKeyResponse,
  PrevalidateDataItemRequest,
  PrevalidateDataItemResponse,
  RuntimeServiceServer,
  SummarizeDataBundleRequest,
  SummarizeDataBundleResponse,
  TransformDataItemRequest,
  TransformDataItemResponse,
  ValidateDataItemRequest,
  ValidateDataItemResponse,
  ValidateSetConfigRequest,
  ValidateSetConfigResponse
} from './proto/kyverdk/runtime/v1/runtime';
import axios from 'axios';
import { VoteType } from './proto/kyve/bundles/v1beta1/tx';

const ajv = new Ajv();

export class TendermintServer implements RuntimeServiceServer {
  [name: string]: UntypedHandleCall;

  getRuntimeName(call: ServerUnaryCall<GetRuntimeNameRequest, GetRuntimeNameResponse>, callback: sendUnaryData<GetRuntimeNameResponse>): void {
    callback(null, GetRuntimeNameResponse.create({ name }));
  }

  getRuntimeVersion(call: ServerUnaryCall<GetRuntimeVersionRequest, GetRuntimeVersionResponse>, callback: sendUnaryData<GetRuntimeVersionResponse>): void {
    callback(null, GetRuntimeVersionResponse.create({ version }));
  }

  validateSetConfig(call: ServerUnaryCall<ValidateSetConfigRequest, ValidateSetConfigResponse>, callback: sendUnaryData<ValidateSetConfigResponse>): void {
    try {
      const config = JSON.parse(call.request.raw_config);

      if (!config.network) {
        callback({
          code: grpc.status.INVALID_ARGUMENT,
          details: 'Config does not have property "network" defined'
        });
        return;
      }
      if (!config.rpc) {
        callback({
          code: grpc.status.INVALID_ARGUMENT,
          details: 'Config does not have property "rpc" defined'
        });
        return;
      }

      if (process.env.KYVEJS_TENDERMINT_RPC) {
        config.rpc = process.env.KYVEJS_TENDERMINT_RPC;
      }

      const serialized_config = JSON.stringify(config);
      callback(null, ValidateSetConfigResponse.create({ serialized_config }));
    } catch (error: any) {
      callback({
        code: grpc.status.INVALID_ARGUMENT,
        details: error.message
      });
    }
  }

  async getDataItem(call: ServerUnaryCall<GetDataItemRequest, GetDataItemResponse>, callback: sendUnaryData<GetDataItemResponse>): Promise<void> {
    try {
      const config = JSON.parse(call.request.config!.serialized_config);
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
        block_results: blockResults
      };

      // Construct the DataItem message
      const data_item = {
        key: key,
        value: JSON.stringify(value)
      };

      callback(null, GetDataItemResponse.create({ data_item }));
    } catch (error: any) {
      callback({
        code: grpc.status.INTERNAL,
        details: error.message
      });
    }
  }

  prevalidateDataItem(call: ServerUnaryCall<PrevalidateDataItemRequest, PrevalidateDataItemResponse>, callback: sendUnaryData<PrevalidateDataItemResponse>): void {
    try {
      const config = JSON.parse(call.request.config!.serialized_config);
      const request_item = call.request.data_item;
      const item = {
        key: request_item?.key,
        value: JSON.parse(request_item!.value)
      };

      // Check if data item is defined
      if (!item.value) {
        const response = PrevalidateDataItemResponse.create(
          { valid: false, error: 'Value in data item is not defined' });
        callback(null, response);
        return;
      }

      // Check if block is defined
      if (!item.value.block) {
        const response = PrevalidateDataItemResponse.create(
          { valid: false, error: 'Block in data item is not defined' });
        callback(null, response);
        return;
      }

      // Check if block results is defined
      if (!item.value.block_results) {
        const response = PrevalidateDataItemResponse.create(
          { valid: false, error: 'Block results in data item is not defined' });
        callback(null, response);
        return;
      }

      // Check if block height matches
      if (item.key !== item.value.block.block.header.height) {
        const response = PrevalidateDataItemResponse.create(
          {
            valid: false,
            error: `Block height does not match: key${item.key} value:${item.value.block.block.header.height}`
          });
        callback(null, response);
        return;
      }

      // Check if block results height matches
      if (item.key !== item.value.block_results.height) {
        const response = PrevalidateDataItemResponse.create(
          {
            valid: false,
            error: `Block results height does not match: key${item.key} value:${item.value.block_results.height}`
          });
        callback(null, response);
        return;
      }

      // Check if network matches
      if (config.network !== item.value.block.block.header.chain_id) {
        const response = PrevalidateDataItemResponse.create(
          { valid: false, error: 'Chain ID does not match' });
        callback(null, response);
        return;
      }

      // validate block schema
      const block_validate = ajv.compile(block_schema);
      if (!block_validate(item.value.block)) {
        const response = PrevalidateDataItemResponse.create(
          { valid: false, error: `Block schema validation failed: ${block_validate.errors}` });
        callback(null, response);
        return;
      }

      // validate block_results schema
      const block_results_validate = ajv.compile(block_results_schema);
      if (!block_results_validate(item.value.block_results)) {
        const response = PrevalidateDataItemResponse.create(
          { valid: false, error: `Block results schema validation failed: ${block_results_validate.errors}` });
        callback(null, response);
        return;
      }

      // If all checks pass, the data item is prevalidated
      callback(null, PrevalidateDataItemResponse.create({ valid: true }));
    } catch (error: any) {
      callback({
        code: grpc.status.INTERNAL,
        details: error.message
      });
    }
  }

  transformDataItem(call: ServerUnaryCall<TransformDataItemRequest, TransformDataItemResponse>, callback: sendUnaryData<TransformDataItemResponse>): void {
    try {
      const request_item = call.request.data_item;
      const item = {
        key: request_item!.key,
        value: JSON.parse(request_item!.value)
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
        value: JSON.stringify(item.value)
      };

      callback(null, TransformDataItemResponse.create({ transformed_data_item }));
    } catch (error: any) {
      callback({
        code: grpc.status.INTERNAL,
        details: error.message
      });
    }
  }

  validateDataItem(call: ServerUnaryCall<ValidateDataItemRequest, ValidateDataItemResponse>, callback: sendUnaryData<ValidateDataItemResponse>): void {
    try {
      const request_proposed_data_item = call.request.proposed_data_item;
      const request_validation_data_item = call.request.validation_data_item;
      const proposedDataItem = {
        key: request_proposed_data_item!.key,
        value: JSON.parse(request_proposed_data_item!.value)
      };
      const validationDataItem = {
        key: request_validation_data_item!.key,
        value: JSON.parse(request_validation_data_item!.value)
      };

      if (
        JSON.stringify(proposedDataItem) === JSON.stringify(validationDataItem)
      ) {
        callback(null, ValidateDataItemResponse.create({ vote: VoteType.VOTE_TYPE_VALID }));
        return;
      }

      // prevent nondeterministic misbehaviour due to osmosis-1 specific problems
      if (
        validationDataItem.value.block.block.header.chain_id === 'osmosis-1'
      ) {
        // remove nondeterministic begin_block_events to prevent incorrect invalid vote
        delete validationDataItem.value.block_results.begin_block_events;
        delete proposedDataItem.value.block_results.begin_block_events;

        if (
          JSON.stringify(proposedDataItem) ===
          JSON.stringify(validationDataItem)
        ) {
          // vote abstain if begin_block_events are not equal
          callback(null, ValidateDataItemResponse.create({ vote: VoteType.VOTE_TYPE_ABSTAIN }));
          return;
        }
      }

      // vote invalid if data does not match
      callback(null, ValidateDataItemResponse.create({ vote: VoteType.VOTE_TYPE_INVALID }));
    } catch (error: any) {
      callback({
        code: grpc.status.INTERNAL,
        details: error.message
      });
    }
  }

  summarizeDataBundle(call: ServerUnaryCall<SummarizeDataBundleRequest, SummarizeDataBundleResponse>, callback: sendUnaryData<SummarizeDataBundleResponse>): void {
    try {
      const grpcBundle = call.request.bundle;

      const bundle = grpcBundle.map((item: any) => ({
        key: item.key,
        value: JSON.parse(item.value)
      }));

      // Get the latest block height from the last item in the bundle
      const latestBlockHeight =
        bundle[bundle.length - 1]?.value?.block?.block?.header?.height || '';

      callback(null, SummarizeDataBundleResponse.create({ summary: latestBlockHeight.toString() }));
    } catch (error: any) {
      callback({
        code: grpc.status.INTERNAL,
        details: error.message
      });
    }
  }

  nextKey(call: ServerUnaryCall<NextKeyRequest, NextKeyResponse>, callback: sendUnaryData<NextKeyResponse>): void {
    try {
      const key = call.request.key;

      // Calculate the next key (current block height + 1)
      const nextKey = (parseInt(key) + 1).toString();

      callback(null, NextKeyResponse.create({ next_key: nextKey }));
    } catch (error: any) {
      callback({
        code: grpc.status.INTERNAL,
        details: error.message
      });
    }
  }
}
