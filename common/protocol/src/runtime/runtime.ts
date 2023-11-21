import * as grpc from "@grpc/grpc-js";
import {
  GetRuntimeNameResponse,
  GetRuntimeVersionResponse,
  ValidateSetConfigResponse,
  GetDataItemResponse,
  PrevalidateDataItemResponse,
  TransformDataItemResponse,
  ValidateDataItemResponse,
  SummarizeDataBundleResponse,
  NextKeyResponse,
  RuntimeServiceClient,
  DataItem,
} from "../proto/kyverdk/runtime/v1/runtime";
import { DirectChannel } from "./direct-channel";
import { IRuntime, ProtocolConfig } from "../types";
import { ClientOptions } from "@grpc/grpc-js";

// config is a serialized string
type IConfig = string;

export default class GrpcRuntime implements IRuntime {
  private grpcClient: RuntimeServiceClient;

  public config!: IConfig;

  constructor(protocolConfig: ProtocolConfig) {
    const options: Partial<ClientOptions> = {};
    if (!protocolConfig.useGrpc) {
      if (protocolConfig.services === undefined) {
        throw new Error("runConfig.services is undefined");
      }
      options.channelOverride = new DirectChannel(protocolConfig.services);
    }
    this.grpcClient = new RuntimeServiceClient(
      `${protocolConfig.host || "localhost"}:${protocolConfig.port || 50051}`,
      grpc.credentials.createInsecure(),
      options
    );
  }

  async getName(): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      this.grpcClient.getRuntimeName(
        {},
        (error: Error | null, runtimeResponse: GetRuntimeNameResponse) => {
          if (error) {
            reject(error);
          } else {
            resolve(runtimeResponse.name);
          }
        }
      );
    });
  }

  async getVersion(): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      this.grpcClient.getRuntimeVersion(
        {},
        (error: Error | null, runtimeResponse: GetRuntimeVersionResponse) => {
          if (error) {
            reject(error);
          } else {
            resolve(runtimeResponse.version);
          }
        }
      );
    });
  }

  async validateSetConfig(rawConfig: string): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      this.grpcClient.validateSetConfig(
        {
          raw_config: rawConfig,
        },
        (error: Error | null, runtimeResponse: ValidateSetConfigResponse) => {
          if (error) {
            // Handle the error here if needed
            reject(error);
          } else {
            this.config = runtimeResponse.serialized_config;

            // Resolve with the correct response
            resolve(runtimeResponse.serialized_config);
          }
        }
      );
    });
  }

  async getDataItem(key: string): Promise<DataItem> {
    return new Promise<DataItem>((resolve, reject) => {
      this.grpcClient.getDataItem(
        {
          config: {
            serialized_config: this.config,
          },
          key: key, // Use the provided 'key' parameter
        },
        (error: Error | null, runtimeResponse: GetDataItemResponse) => {
          if (error) {
            // Handle the error here if needed
            reject(error);
          } else {
            if (runtimeResponse.data_item === undefined) {
              throw new Error("runtimeResponse.dataItem is undefined");
            }

            const responseDataItem: DataItem = {
              key: runtimeResponse.data_item.key,
              value: JSON.parse(runtimeResponse.data_item.value),
            };
            resolve(responseDataItem);
          }
        }
      );
    });
  }

  async prevalidateDataItem(item: DataItem): Promise<boolean> {
    const request_item = {
      key: item.key,
      value: JSON.stringify(item.value),
    };
    return new Promise<boolean>((resolve, reject) => {
      this.grpcClient.prevalidateDataItem(
        {
          config: {
            serialized_config: this.config,
          },
          data_item: request_item,
        },
        (error: Error | null, runtimeResponse: PrevalidateDataItemResponse) => {
          if (error) {
            // Handle the error here if needed
            reject(error);
          } else {
            resolve(runtimeResponse.valid);
          }
        }
      );
    });
  }

  async transformDataItem(item: DataItem): Promise<DataItem> {
    const request_item = {
      key: item.key,
      value: JSON.stringify(item.value),
    };
    return new Promise<DataItem>((resolve, reject) => {
      this.grpcClient.transformDataItem(
        {
          config: {
            serialized_config: this.config,
          },
          data_item: request_item,
        },
        (error: Error | null, runtimeResponse: TransformDataItemResponse) => {
          if (error) {
            // Handle the error here if needed
            reject(error);
          } else {
            if (runtimeResponse.transformed_data_item === undefined) {
              throw new Error("runtimeResponse.dataItem is undefined");
            }

            const responseDataItem: DataItem = {
              key: runtimeResponse.transformed_data_item.key,
              value: JSON.parse(runtimeResponse.transformed_data_item.value),
            };
            resolve(responseDataItem);
          }
        }
      );
    });
  }

  async validateDataItem(
    proposedDataItem: DataItem,
    validationDataItem: DataItem
  ): Promise<number> {
    const request_proposed_data_item = {
      key: proposedDataItem.key,
      value: JSON.stringify(proposedDataItem.value),
    };
    const request_validation_data_item = {
      key: validationDataItem.key,
      value: JSON.stringify(validationDataItem.value),
    };
    return new Promise<number>((resolve, reject) => {
      this.grpcClient.validateDataItem(
        {
          config: {
            serialized_config: this.config,
          },
          proposed_data_item: request_proposed_data_item,
          validation_data_item: request_validation_data_item,
        },
        (error: Error | null, runtimeResponse: ValidateDataItemResponse) => {
          if (error) {
            // Handle the error here if needed
            reject(error);
          } else {
            resolve(runtimeResponse.vote);
          }
        }
      );
    });
  }

  async summarizeDataBundle(bundle: DataItem[]): Promise<string> {
    const grpcBundle = bundle.map((item) => ({
      key: item.key,
      value: JSON.stringify(item.value),
    }));
    return new Promise<string>((resolve, reject) => {
      this.grpcClient.summarizeDataBundle(
        {
          config: {
            serialized_config: this.config,
          },
          bundle: grpcBundle,
        },
        (error: Error | null, runtimeResponse: SummarizeDataBundleResponse) => {
          if (error) {
            // Handle the error here if needed
            reject(error);
          } else {
            resolve(runtimeResponse.summary);
          }
        }
      );
    });
  }

  async nextKey(key: string): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      this.grpcClient.nextKey(
        {
          config: {
            serialized_config: this.config,
          },
          key: key,
        },
        (error: Error | null, runtimeResponse: NextKeyResponse) => {
          if (error) {
            // Handle the error here if needed
            reject(error);
          } else {
            if (runtimeResponse.next_key === undefined) {
              throw new Error("runtimeResponse.dataItem is undefined");
            }

            resolve(runtimeResponse.next_key);
          }
        }
      );
    });
  }
}
