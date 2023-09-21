import { DataItem, IRuntime } from '@kyvejs/protocol';
import grpc from '@grpc/grpc-js';
var protoLoader = require("@grpc/proto-loader");



// config is a serialized string
type IConfig = string;

export default class Docker implements IRuntime {
  private static readonly GRPC_URL = 'localhost:50051';
  private static readonly RUNTIME_PROTO_PATH = './src/proto/runtime.proto';

  private grpcClient: any;

  public config!: IConfig;

  constructor() {
    console.log(Docker.RUNTIME_PROTO_PATH);
    console.log("Current directory:", __dirname);

    // TODO: how to properly start grpc server?
    const runtimeDef = protoLoader.loadSync(Docker.RUNTIME_PROTO_PATH, {
      keepCase: true,
      longs: String,
      enums: String,
      defaults: true,
      oneofs: true,
    });
    const RuntimeService = grpc.loadPackageDefinition(runtimeDef).RuntimeService as any;

    this.grpcClient = new RuntimeService(
      Docker.GRPC_URL,
      grpc.credentials.createInsecure()
    );
  }

  async getName(): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      this.grpcClient.GetRuntimeName({}, (error: Error | null, runtimeResponse: any) => {  // TODO  CHECK IF ANY IS OF THE CORRECT TYPE
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
        (error: grpc.ServiceError | null, runtimeResponse: any) => {
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

  async getDataItem(key) {
    // TODO: call grpc client like this?
    // TODO: how to pass method args?
    return new Promise((resolve, reject) => {
      this.grpcClient.GetDataItem(
        {
          config: {
            serialized_config: this.config,
          },
          key: "2",
        }, (error, runtimeResponse) => {
        if (error) {
          // Handle the error here if needed
          reject(error);
        } else {
          resolve(runtimeResponse);
        }
      });
    });
    // TODO: what does the grpc service return? we want to return the data item
    // defined by the runtime interface
  }

  async prevalidateDataItem(item) {
    // TODO: call grpc client like this?
    // TODO: how to pass method args?
    return new Promise((resolve, reject) => {
      this.grpcClient.prevalidateDataItem(
        {
          config: {
              serialized_config: this.config,
          },
          key: "2",
        }, (error, runtimeResponse) => {
        if (error) {
          // Handle the error here if needed
          reject(error);
        } else {
          resolve(runtimeResponse);
        }
      });
    });
  }

  async transformDataItem(item) {
    // TODO: call grpc client like this?
    // TODO: how to pass method args?
    return new Promise((resolve, reject) => {
      this.grpcClient.transformDataItem(
        {
          config: {
              serialized_config: this.config,
          },
          key: "2",
        }, (error, runtimeResponse) => {
        if (error) {
          // Handle the error here if needed
          reject(error);
        } else {
          resolve(runtimeResponse);
        }
      });
    });
  }

  async validateDataItem(proposedDataItem, validationDataItem) {
    return new Promise((resolve, reject) => {
      this.grpcClient.validateDataItem(
        {
          config: {
              serialized_config: this.config,
          },
          key: "2",
        }, (error, runtimeResponse) => {
        if (error) {
          // Handle the error here if needed
          reject(error);
        } else {
          resolve(runtimeResponse);
        }
      });
    });
  }

  async summarizeDataBundle(bundle) {
    return new Promise((resolve, reject) => {
      this.grpcClient.summarizeDataBundle(
        {
          config: {
              serialized_config: this.config,
          },
          key: "2",
        }, (error, runtimeResponse) => {
        if (error) {
          // Handle the error here if needed
          reject(error);
        } else {
          resolve(runtimeResponse);
        }
      });
    });
  }

  async nextKey(key) {
    return new Promise((resolve, reject) => {
      this.grpcClient.nextKey(
        {
          config: {
              serialized_config: this.config,
          },
          key: "2",
        }, (error, runtimeResponse) => {
        if (error) {
          // Handle the error here if needed
          reject(error);
        } else {
          resolve(runtimeResponse);
        }
      });
    });
  }

}
