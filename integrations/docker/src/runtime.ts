import { DataItem, IRuntime } from '@kyvejs/protocol';
import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';

// config is a serialized string
type IConfig = string;

export default class Docker implements IRuntime {
  private static readonly GRPC_URL = 'localhost:50051';
  private static readonly RUNTIME_PROTO_PATH = './src/proto/runtime.proto';

  private grpcClient: any;

  public config!: IConfig;

  constructor() {
    // TODO: how to properly start grpc server?
    const runtimeDef = protoLoader.loadSync(Docker.RUNTIME_PROTO_PATH, {
      keepCase: true,
      longs: String,
      enums: String,
      defaults: true,
      oneofs: true,
    });
    const RuntimeService = grpc.loadPackageDefinition(runtimeDef)
      .RuntimeService as any;

    this.grpcClient = new RuntimeService(
      Docker.GRPC_URL,
      grpc.credentials.createInsecure()
    );
  }

  async getName(): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      this.grpcClient.GetRuntimeName({}, (error: Error | null, runtimeResponse: any) => {
        if (error) {
          reject(error);
        } else {
          resolve(runtimeResponse.name);
        }
      });
    });
  }

  async getVersion(): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      this.grpcClient.GetRuntimeVersion({}, (error: Error | null, runtimeResponse: any) => {
        if (error) {
          reject(error);
        } else {
          resolve(runtimeResponse.version);
        }
      });
    });
  }

  async validateSetConfig(rawConfig: string): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      this.grpcClient.ValidateSetConfig(
        {
          raw_config: rawConfig,
        },
        (error: Error | null, runtimeResponse: any) => {
          if (error) {
            // Handle the error here if needed
            reject(error);
          } else {
            // Assuming you have a valid serialized JSON string
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
      this.grpcClient.GetDataItem(
        {
          config: {
            serialized_config: this.config,
          },
          key: key, // Use the provided 'key' parameter
        },
        (error: Error | null, runtimeResponse: any) => {
          if (error) {
            // Handle the error here if needed
            reject(error);
          } else {
            const responseDataItem: DataItem = {
              key: runtimeResponse.data_item.key,
              value: JSON.parse(runtimeResponse.data_item.value)
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
      value: JSON.stringify(item.value)
  };
    return new Promise<boolean>((resolve, reject) => {
      this.grpcClient.prevalidateDataItem(
        {
          config: {
            serialized_config: this.config,
          },
          data_item: request_item,
        },
        (error: Error | null, runtimeResponse: any) => {
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
      value: JSON.stringify(item.value)
  };
    return new Promise<DataItem>((resolve, reject) => {
      this.grpcClient.transformDataItem(
        {
          config: {
            serialized_config: this.config,
          },
          data_item: request_item,
        },
        (error: Error | null, runtimeResponse: any) => {
          if (error) {
            // Handle the error here if needed
            reject(error);
          } else {
            const responseDataItem: DataItem = {
              key: runtimeResponse.transformed_data_item.key,
              value: JSON.parse(runtimeResponse.transformed_data_item.value)
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
  ): Promise<boolean> {
    const request_proposed_data_item = {
      key: proposedDataItem.key,
      value: JSON.stringify(proposedDataItem.value)
    };
    const request_validation_data_item = {
        key: validationDataItem.key,
        value: JSON.stringify(validationDataItem.value)
    };
    return new Promise<boolean>((resolve, reject) => {
      this.grpcClient.validateDataItem(
        {
          config: {
            serialized_config: this.config,
          },
          proposed_data_item: request_proposed_data_item,
          validation_data_item: request_validation_data_item
        },
        (error: Error | null, runtimeResponse: any) => {
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
        (error: Error | null, runtimeResponse: any) => {
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
        (error: Error | null, runtimeResponse: any) => {
          if (error) {
            // Handle the error here if needed
            reject(error);
          } else {
            resolve(runtimeResponse.next_key);
          }
        }
      );
    });
  }
}
