import { DataItem, IRuntime } from '@kyvejs/protocol';
import grpc from '@grpc/grpc-js';
import protoLoader from '@grpc/proto-loader';

// config is a serialized string
type IConfig = string;

export default class Docker implements IRuntime {
  private static readonly GRPC_URL = 'localhost:50051';
  private static readonly RUNTIME_PROTO_PATH = './proto/runtime.proto';

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

  async getName() {
    // TODO: call grpc client like this?
    const name = await this.grpcClient.GetRuntimeName({});
    return name;
  }

  async getVersion() {
    // TODO: call grpc client like this?
    const version = await this.grpcClient.GetRuntimeVersion({});
    return version;
  }

  async validateSetConfig(rawConfig: string): Promise<void> {
    // TODO: call grpc client like this?
    // TODO: how to pass method args?
    // TODO: does "ValidateSetConfig" return the serialized config all
    // other methods takes as "RuntimeConfig"
    const serializedConfig = await this.grpcClient.ValidateSetConfig({
      raw_config: rawConfig,
    });
    return serializedConfig;
  }

  async getDataItem(key: string): Promise<DataItem> {
    // TODO: call grpc client like this?
    // TODO: how to pass method args?
    const dataItem = await this.grpcClient.GetDataItem({
      config: {
        serialized_config: this.config,
      },
      key,
    });
    // TODO: what does the grpc service return? we want to return the data item
    // defined by the runtime interface
    return JSON.parse(dataItem);
  }

  async prevalidateDataItem(item: DataItem): Promise<boolean> {
    // TODO: call grpc client like this?
    // TODO: how to pass method args?
    const valid = await this.grpcClient.PrevalidateDataItem({
      config: {
        serialized_config: this.config,
      },
      data_item: JSON.stringify(item), // TODO: how to serialize js args?
    });
    // TODO: what does the grpc service return? we want to return a boolean here
    return JSON.parse(valid);
  }

  async transformDataItem(item: DataItem): Promise<DataItem> {
    // TODO: call grpc client like this?
    // TODO: how to pass method args?
    const dataItem = await this.grpcClient.TransformDataItem({
      config: {
        serialized_config: this.config,
      },
      data_item: JSON.stringify(item), // TODO: how to serialize js args?
    });
    // TODO: what does the grpc service return? we want to return the data item
    // defined by the runtime interface
    return JSON.parse(dataItem);
  }

  async validateDataItem(
    proposedDataItem: DataItem,
    validationDataItem: DataItem
  ): Promise<boolean> {
    // TODO: call grpc client like this?
    // TODO: how to pass method args?
    const valid = await this.grpcClient.ValidateDataItem({
      config: {
        serialized_config: this.config,
      },
      proposed_data_item: JSON.stringify(proposedDataItem), // TODO: how to serialize js args?
      validation_data_item: JSON.stringify(validationDataItem), // TODO: how to serialize js args?
    });
    // TODO: what does the grpc service return? // we want to return a boolean here
    return JSON.parse(valid);
  }

  async summarizeDataBundle(bundle: DataItem[]): Promise<string> {
    // TODO: call grpc client like this?
    // TODO: how to pass method args?
    const summary = await this.grpcClient.SummarizeDataBundle({
      config: {
        serialized_config: this.config,
      },
      bundle: JSON.stringify(bundle),
    });
    // TODO: what does the grpc service return? // we want to return the data item
    // defined by the runtime interface
    return summary;
  }

  async nextKey(key: string): Promise<string> {
    // TODO: call grpc client like this?
    // TODO: how to pass method args?
    const nextKey = await this.grpcClient.NextKey({
      config: {
        serialized_config: this.config,
      },
      key,
    });
    // TODO: what does the grpc service return? // we want to return the data item
    // defined by the runtime interface
    return nextKey;
  }
}
