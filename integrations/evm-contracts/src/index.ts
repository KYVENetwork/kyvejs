import { Validator } from '@kyvejs/protocol';
import EvmContracts from './runtime';

const runtime = new EvmContracts();

new Validator(runtime).bootstrap();
