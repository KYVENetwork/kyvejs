import * as grpc from '@grpc/grpc-js';

import { RuntimeService } from './protos/runtime';
import { TendermintServer } from './server';

const maxMessageSize: number = 2 * 1024 * 1024 * 1024; // 2 GB
const runtimeServer: grpc.Server = new grpc.Server({
  'grpc.max_receive_message_length': maxMessageSize,
  'grpc.max_send_message_length': maxMessageSize,
});
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

// Function to handle graceful server shutdown
const shutdown = () => {
  console.log('Received shutdown signal. Gracefully stopping server.');
  runtimeServer.tryShutdown(() => {
    console.log('Server has been shut down.');
    process.exit(0);
  });
};

// Attach event listeners for SIGINT and SIGTERM
process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);

runtimeServer.bindAsync(
  '0.0.0.0:50051',
  grpc.ServerCredentials.createInsecure(),
  (error: Error | null, port: number) => {
    if (error) {
      console.error('Error binding server:', error);
    } else {
      console.log(`Server running at http://0.0.0.0:${port}`);
      runtimeServer.start();
    }
  }
);
