import { TendermintServer } from './server';
import { ProtocolConfig, Validator } from '@kyvejs/protocol';

const runtimeService = new TendermintServer();

const config: Partial<ProtocolConfig> = {
  useGrpc: false,
  services: runtimeService
};

new Validator(config).bootstrap();
