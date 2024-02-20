import * as grpc from '@grpc/grpc-js';
import { sendUnaryData, ServerUnaryCall, UntypedHandleCall } from '@grpc/grpc-js';
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
import { VoteType } from "./proto/kyve/bundles/v1beta1/tx";

export class {{ .name | ToPascal }}Server implements RuntimeServiceServer {
  [name: string]: UntypedHandleCall;

  /** Returns the name of the runtime. Example "@kyvejs/tendermint" */
  getRuntimeName(call: ServerUnaryCall<GetRuntimeNameRequest, GetRuntimeNameResponse>, callback: sendUnaryData<GetRuntimeNameResponse>): void {
    callback(null, GetRuntimeNameResponse.create({ name }));
  }

  /** Returns the version of the runtime. Example "1.2.0" */
  getRuntimeVersion(call: ServerUnaryCall<GetRuntimeVersionRequest, GetRuntimeVersionResponse>, callback: sendUnaryData<GetRuntimeVersionResponse>): void {
    callback(null, GetRuntimeVersionResponse.create({ version }));
  }

  /**
   * Parses the raw runtime config found on pool, validates it and finally sets
   * the property "config" in the runtime. A raw config could be an ipfs link to the
   * actual config or a stringified yaml or json string. This method should error if
   * the specific runtime config is not parsable or invalid.
   *
   * Deterministic behavior is required
   */
  validateSetConfig(call: ServerUnaryCall<ValidateSetConfigRequest, ValidateSetConfigResponse>, callback: sendUnaryData<ValidateSetConfigResponse>): void {
    try {
      const config = JSON.parse(call.request.raw_config);

      // TODO: validate config
      // Example:
      // if (!config.rpc) {
      //   callback({
      //     code: grpc.status.INVALID_ARGUMENT,
      //     details: 'Config does not have property "rpc" defined'
      //   });
      //   return;
      // }

      // TODO: make changes to config if necessary
      // Example:
      // if (process.env.KYVEJS_{{ .name | ToUpper }}_API) {
      //   config.rpc = process.env.KYVEJS_{{ .name }}_API;
      // }

      const serialized_config = JSON.stringify(config);
      callback(null, ValidateSetConfigResponse.create({ serialized_config }));
    } catch (error: any) {
      callback({
        code: grpc.status.INVALID_ARGUMENT,
        details: error.message
      });
    }
  }

  /**
   * Gets the data item from a specific key and returns both key and the value.
   *
   * Deterministic behavior is required
   */
  async getDataItem(call: ServerUnaryCall<GetDataItemRequest, GetDataItemResponse>, callback: sendUnaryData<GetDataItemResponse>): Promise<void> {
    try {
      const config = JSON.parse(call.request.config!.serialized_config);
      const key = call.request.key;

      // TODO: get the data item for {{ .name }} with the given key
      // Example:
      // const response = await axios.get(`${config.rpc}/block?height=${key}`);
      // const value = response.data;
      const value = {};

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

  /**
   * Prevalidates a data item right after is was retrieved from source.
   * If the prevalidation fails the item gets rejected and never makes
   * it to the local cache. If the prevalidation succeeds the item gets
   * transformed and written to cache were it is used from submission
   * of proposals or bundle validation.
   *
   * Deterministic behavior is required
   */
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

      // TODO: check if data item is valid

      // If all checks pass, the data item is prevalidated
      callback(null, PrevalidateDataItemResponse.create({ valid: true }));
    } catch (error: any) {
      callback({
        code: grpc.status.INTERNAL,
        details: error.message
      });
    }
  }

  /**
   * Transforms a single data item and return it. Used for example
   * to remove unecessary data or format the data in a better way.
   *
   * Deterministic behavior is required
   */
  transformDataItem(call: ServerUnaryCall<TransformDataItemRequest, TransformDataItemResponse>, callback: sendUnaryData<TransformDataItemResponse>): void {
    try {
      const request_item = call.request.data_item;
      const item = {
        key: request_item!.key,
        value: JSON.parse(request_item!.value)
      };

      // TODO: transform the data item so that it can be saved

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

  /**
   * Validates a single data item of a bundle proposal
   *
   * Deterministic behavior is required
   */
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

      if (JSON.stringify(proposedDataItem) === JSON.stringify(validationDataItem)) {
        callback(null, ValidateDataItemResponse.create({ vote: VoteType.VOTE_TYPE_VALID }));
        return;
      }

      // TODO: add custom validation logic here

      // vote invalid if data does not match
      callback(null, ValidateDataItemResponse.create({ vote: VoteType.VOTE_TYPE_INVALID }));
    } catch (error: any) {
      callback({
        code: grpc.status.INTERNAL,
        details: error.message
      });
    }
  }

  /**
   * Gets a formatted value string from a bundle. This produces a "summary" of
   * a bundle which gets stored on-chain and therefore needs to be short.
   *
   * String should not be longer than 100 characters, else gas costs might be too expensive.
   *
   * Deterministic behavior is required
   */
  summarizeDataBundle(call: ServerUnaryCall<SummarizeDataBundleRequest, SummarizeDataBundleResponse>, callback: sendUnaryData<SummarizeDataBundleResponse>): void {
    try {
      const grpcBundle = call.request.bundle;

      const bundle = grpcBundle.map((item: any) => ({
        key: item.key,
        value: JSON.parse(item.value)
      }));

      // TODO: summarize the data bundle
      // Example:
      // const summary = bundle[bundle.length - 1]?.value?.block?.block?.header?.height.toString() || '';
      const summary = '';

      callback(null, SummarizeDataBundleResponse.create({ summary }));
    } catch (error: any) {
      callback({
        code: grpc.status.INTERNAL,
        details: error.message
      });
    }
  }

  /**
   * Gets the next key from the current key so that the data archived has an order.
   *
   * Deterministic behavior is required
   */
  nextKey(call: ServerUnaryCall<NextKeyRequest, NextKeyResponse>, callback: sendUnaryData<NextKeyResponse>): void {
    try {
      const key = call.request.key;

      // TODO: calculate the next key
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
