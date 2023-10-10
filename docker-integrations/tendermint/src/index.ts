import * as grpc from '@grpc/grpc-js';
import { TendermintServer } from './server';
import { RuntimeService } from './protos/runtime';

const runtimeServer: grpc.Server = new grpc.Server();

const runtimeService = new TendermintServer();

runtimeServer.addService(RuntimeService, {
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
