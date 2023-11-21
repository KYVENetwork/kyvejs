import * as grpc from '@grpc/grpc-js';

import { RuntimeServiceServer, RuntimeServiceService } from "./proto/kyverdk/runtime/v1/runtime";
import { TendermintServer } from './server';
import { ProtocolConfig, Validator } from '@kyvejs/protocol';

const maxMessageSize: number = 2 * 1024 * 1024 * 1024; // 2 GB
const runtimeServer: grpc.Server = new grpc.Server({
  'grpc.max_receive_message_length': maxMessageSize,
  'grpc.max_send_message_length': maxMessageSize
});
const runtimeService = new TendermintServer();

const runtimeServiceImpl: RuntimeServiceServer = {
  getRuntimeName: runtimeService.getRuntimeName,
  getRuntimeVersion: runtimeService.getRuntimeVersion,
  validateSetConfig: runtimeService.validateSetConfig,
  getDataItem: runtimeService.getDataItem,
  prevalidateDataItem: runtimeService.prevalidateDataItem,
  transformDataItem: runtimeService.transformDataItem,
  validateDataItem: runtimeService.validateDataItem,
  summarizeDataBundle: runtimeService.summarizeDataBundle,
  nextKey: runtimeService.nextKey
};

const config: ProtocolConfig = {
  host: 'localhost',
  port: 50051,
  useGrpc: true,
  services: {},
}

if (process.env.RUN_IN_DOCKER_MODE === 'true') {
  runtimeServer.addService(RuntimeServiceService, runtimeServiceImpl);

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
    `0.0.0.0:${config.port}`,
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
} else {
  config.useGrpc = false;
  config.services = runtimeServiceImpl;
}

new Validator(config).bootstrap();
