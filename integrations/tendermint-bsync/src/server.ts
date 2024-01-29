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
import * as grpc from '@grpc/grpc-js';
import { UntypedHandleCall } from '@grpc/grpc-js';
import { sendUnaryData, ServerUnaryCall } from '@grpc/grpc-js/build/src/server-call';
import { name, version } from '../package.json';
import axios from 'axios';
import { VoteType } from './proto/kyve/bundles/v1beta1/tx';

export class TendermintServer implements RuntimeServiceServer {
  [name: string]: UntypedHandleCall;

  getRuntimeName(
    call: ServerUnaryCall<GetRuntimeNameRequest, GetRuntimeNameResponse>,
    callback: sendUnaryData<GetRuntimeNameResponse>): void {
    callback(null, GetRuntimeNameResponse.create({ name }));
  }

  getRuntimeVersion(
    call: ServerUnaryCall<GetRuntimeVersionRequest, GetRuntimeVersionResponse>,
    callback: sendUnaryData<GetRuntimeVersionResponse>): void {
    callback(null, GetRuntimeVersionResponse.create({ version }));
  }

  validateSetConfig(
    call: ServerUnaryCall<ValidateSetConfigRequest, ValidateSetConfigResponse>,
    callback: sendUnaryData<ValidateSetConfigResponse>): void {
    try {
      const rawConfig = call.request.raw_config;
      const config = JSON.parse(rawConfig);

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

      if (process.env.KYVEJS_TENDERMINT_BSYNC_RPC) {
        config.rpc = process.env.KYVEJS_TENDERMINT_BSYNC_RPC;
      }

      const serialized_config = JSON.stringify(config);
      callback(null, { serialized_config });
    } catch (error: any) {
      callback({
        code: grpc.status.INVALID_ARGUMENT,
        details: error.message
      });
    }
  }

  async getDataItem(
    call: ServerUnaryCall<GetDataItemRequest, GetDataItemResponse>,
    callback: sendUnaryData<GetDataItemResponse>): Promise<void> {
    try {
      const config = JSON.parse(call.request.config!.serialized_config);
      const key = call.request.key;

      // Fetch block from rpc at the given block height
      const { data } = await axios.get(
        `${config.rpc}/block?height=${key}`
      );

      const block = data.result.block;

      callback(null, GetDataItemResponse.create({ data_item: { key, value: JSON.stringify(block) } }));
    } catch (error: any) {
      callback({
        code: grpc.status.INTERNAL,
        details: error.message
      });
    }
  }

  prevalidateDataItem(
    call: ServerUnaryCall<PrevalidateDataItemRequest, PrevalidateDataItemResponse>,
    callback: sendUnaryData<PrevalidateDataItemResponse>): void {
    try {
      // check if block is defined
      if (!call.request.data_item?.value) {
        const response = PrevalidateDataItemResponse.create(
          {
            valid: false,
            error: 'Value in data item is not defined'
          });
        callback(null, response);
        return
      }

      const item = {
        key: call.request.data_item?.key,
        value: JSON.parse(call.request.data_item!.value)
      };

      // check if block height matches
      if (item.key !== item.value.header.height) {
        const response = PrevalidateDataItemResponse.create(
          {
            valid: false,
            error: `Block height does not match: key${item.key} value:${item.value.header.height}`
          });
        callback(null, response);
        return
      }

      const config = JSON.parse(call.request.config!.serialized_config);

      // check if network matches
      if (config.network !== item.value.header.chain_id) {
        const response = PrevalidateDataItemResponse.create(
          {
            valid: false,
            error: 'Chain ID does not match'
          });
        callback(null, response);
        return
      }
      callback(null, PrevalidateDataItemResponse.create({ valid: true }));
    } catch (error: any) {
      callback({
        code: grpc.status.INTERNAL,
        details: error.message
      });
    }
  }

  validateDataItem(
    call: ServerUnaryCall<ValidateDataItemRequest, ValidateDataItemResponse>,
    callback: sendUnaryData<ValidateDataItemResponse>): void {
    try {
      const request_proposed_data_item = call.request.proposed_data_item;
      const request_validation_data_item = call.request.validation_data_item;
      if (request_proposed_data_item === undefined || request_validation_data_item === undefined) {
        const error = new Error('proposed_data_item or validation_data_item is undefined');
        callback({
          code: grpc.status.INTERNAL,
          details: error.message
        });
        return;
      }

      // apply equal comparison
      if (JSON.stringify(request_proposed_data_item) === JSON.stringify(request_validation_data_item)) {
        callback(null, { vote: VoteType.VOTE_TYPE_VALID });
        return;
      }
      callback(null, { vote: VoteType.VOTE_TYPE_INVALID });
    } catch (error: any) {
      callback({
        code: grpc.status.INTERNAL,
        details: error.message
      });
    }
  }

  transformDataItem(
    call: ServerUnaryCall<TransformDataItemRequest, TransformDataItemResponse>,
    callback: sendUnaryData<TransformDataItemResponse>): void {
    callback(null, TransformDataItemResponse.create({ transformed_data_item: call.request.data_item }));
  }

  summarizeDataBundle(
    call: ServerUnaryCall<SummarizeDataBundleRequest, SummarizeDataBundleResponse>,
    callback: sendUnaryData<SummarizeDataBundleResponse>): void {
    try {
      // use latest block height as bundle summary
      const summary = JSON.parse(call.request.bundle?.at(-1)?.value ?? '{}')?.header?.height ?? '';
      callback(null, SummarizeDataBundleResponse.create({ summary }));
    } catch (error: any) {
      callback({
        code: grpc.status.INTERNAL,
        details: error.message
      });
    }
  }

  nextKey(
    call: ServerUnaryCall<NextKeyRequest, NextKeyResponse>,
    callback: sendUnaryData<NextKeyResponse>): void {
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
