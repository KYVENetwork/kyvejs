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
      const config: IConfig = JSON.parse(rawConfig);

      if (!config.api) {
        callback({
          code: grpc.status.INVALID_ARGUMENT,
          details: 'Config does not have property "api" defined'
        });
        return;
      }
      if (!config.interval) {
        callback({
          code: grpc.status.INVALID_ARGUMENT,
          details: 'Config does not have property "interval" defined'
        });
        return;
      }

      if (process.env.KYVEJS_TENDERMINT_SSYNC_API) {
        config.api = process.env.KYVEJS_TENDERMINT_SSYNC_API;
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
      const config: IConfig = JSON.parse(call.request.config!.serialized_config);
      const key = call.request.key;

      // fetch snapshot chunk from given height, format and chunk derived from key
      const [height, chunkIndex] = key.split('/').map((k) => +k);

      // check if key is valid
      if (isNaN(height) || isNaN(chunkIndex)) {
        callback({
          code: grpc.status.INVALID_ARGUMENT,
          details: `Key is not valid: ${key}`
        });
        return
      }

      // get snapshots
      const { data: snapshots } = await axios.get(
        `${config.api}/list_snapshots`
      );

      if (!snapshots) {
        callback({
          code: grpc.status.INTERNAL,
          details: `404: Snapshot with height ${height} not found`
        });
        return
      }

      // find snapshot with given height
      const snapshot: ISnapshot = snapshots.find(
        (s: ISnapshot) => +s.height === height
      );

      if (!snapshot) {
        callback({
          code: grpc.status.INTERNAL,
          details: `404: Snapshot with height ${height} not found`
        });
        return
      }

      // fetch snapshot chunk
      const { data: chunk } = await axios.get(
        `${config.api}/load_snapshot_chunk/${height}/${snapshot.format}/${chunkIndex}`
      );

      // if we are not at the first chunk we skip all the metadata to prevent
      // storing information repeatedly
      if (chunkIndex != 0) {
        const value = {
          snapshot: null,
          block: null,
          seenCommit: null,
          state: null,
          chunk,
        };
        const response = GetDataItemResponse.create({
          data_item: {
            key,
            value: JSON.stringify(value)
          }
        });
        callback(null, response);
        return;
      }

      // fetch block
      const { data: block } = await axios.get(
        `${config.api}/get_block/${height}`
      );

      // fetch seen commit
      const { data: seenCommit } = await axios.get(
        `${config.api}/get_seen_commit/${height}`
      );

      // fetch state
      const { data: state } = await axios.get(
        `${config.api}/get_state/${height}`
      );

      const value = {
        snapshot,
        block,
        seenCommit,
        state,
        chunk,
      };
      const response = GetDataItemResponse.create({
        data_item: {
          key,
          value: JSON.stringify(value)
        }
      });
      callback(null, response);
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
      const key = call.request.data_item?.key;
      const value = JSON.parse(call.request.data_item?.value ?? '{}');

      // fetch snapshot chunk from given height, format and chunk derived from key
      const [height, chunkIndex] = call.request.data_item?.key.split('/').map((k) => +k) ?? [NaN, NaN];

      // check if key is valid
      if (isNaN(height) || isNaN(chunkIndex)) {
        callback({
          code: grpc.status.INVALID_ARGUMENT,
          details: `Key is not valid: ${key}`
        });
        return
      }

      // error if value is not defined
      if (!value) {
        callback({
          code: grpc.status.INVALID_ARGUMENT,
          details: `Value is not defined`
        });
        return;
      }

      // throw error if chunk is missing
      if (!value.chunk) {
        callback({
          code: grpc.status.INVALID_ARGUMENT,
          details: `Value in data item has no snapshot chunk`
        });
        return;
      }

      if (chunkIndex > 0) {
        // error if one of those values is not null
        if (
          value.snapshot ||
          value.block ||
          value.seenCommit ||
          value.state
        ) {
          const response = PrevalidateDataItemResponse.create({
            valid: false,
            error: `Value in data item has unexpected values; snapshot:${value.snapshot} block:${value.block} seenCommit:${value.seenCommit} state:${value.state}`
          });
          callback(null, response);
          return;
        }
        callback(null, PrevalidateDataItemResponse.create({ valid: true }));
        return;
      }

      // error if one of those values is null
      if (
        !(
          value.snapshot &&
          value.block &&
          value.seenCommit &&
          value.state
        )
      ) {
        const response = PrevalidateDataItemResponse.create({
          valid: false,
          error: `Value in data item has unexpected null values; snapshot:${!!value
            .snapshot} block:${!!value.block} seenCommit:${!!value
            .seenCommit} state:${!!value.state}`
        });
        callback(null, response);
        return;
      }

      // error if snapshot height mismatches
      if (+value.snapshot.height !== height) {
        const response = PrevalidateDataItemResponse.create({
          valid: false,
          error: `Snapshot height differs in key and value; key:${height} value:${value.snapshot.height}`
        });
        callback(null, response);
        return;
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
      if (!request_proposed_data_item || !request_validation_data_item) {
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
      const summary = call.request.bundle.at(-1)?.key ?? '';
      callback(null, SummarizeDataBundleResponse.create({ summary }));
    } catch (error: any) {
      callback({
        code: grpc.status.INTERNAL,
        details: error.message
      });
    }
  }

  async nextKey(
    call: ServerUnaryCall<NextKeyRequest, NextKeyResponse>,
    callback: sendUnaryData<NextKeyResponse>): Promise<void> {
    try {
      const config: IConfig = JSON.parse(call.request.config!.serialized_config);

      // since we only need to fetch if we continue with the next snapshot
      const [height, chunkIndex] = call.request.key.split('/').map((k) => +k);

      const { data: snapshots } = await axios.get(
        `${config.api}/list_snapshots`
      );

      if (!snapshots) {
        callback({
          code: grpc.status.INTERNAL,
          details: `404: Snapshot with height ${height} not found`
        });
        return
      }

      const snapshot: ISnapshot = snapshots.find(
        (s: ISnapshot) => +s.height === height
      );

      if (!snapshot) {
        callback({
          code: grpc.status.INTERNAL,
          details: `404: Snapshot with height ${height} not found`
        });
        return
      }

      // move on to next snapshot and start at first chunk
      // if we have already reached all chunks in current snapshot
      if (snapshot.chunks - 1 === chunkIndex) {
        callback(null, NextKeyResponse.create({ next_key: `${height + config.interval}/0` }));
        return
      }

      // stay on current snapshot and continue with next snapshot chunk
      callback(null, NextKeyResponse.create({ next_key: `${height}/${chunkIndex + 1}` }));
    } catch (error: any) {
      callback({
        code: grpc.status.INTERNAL,
        details: error.message
      });
    }
  }
}
