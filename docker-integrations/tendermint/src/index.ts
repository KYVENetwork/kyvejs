import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import { DataItem } from './proto/runtime';
import { TendermintServer } from './server'; // Import the TendermintServer class

const PROTO_PATH = './src/proto/runtime.proto';

const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});

const runtimePackage = grpc.loadPackageDefinition(packageDefinition) as any;
const runtimeServer: grpc.Server = new grpc.Server();

const runtimeService = new TendermintServer();
runtimeServer.addService(runtimePackage.RuntimeService.service, {
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
  "0.0.0.0:50051",
  grpc.ServerCredentials.createInsecure(),
  (error: Error | null, port: number) => {
      if (error) {
          console.error("Error binding server:", error);
      } else {
          console.log(`Server running at http://0.0.0.0:${port}`);
          runtimeServer.start();
      }
  }
);
