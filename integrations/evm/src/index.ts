import { Validator } from '@kyvejs/protocol';
import EVM from './runtime';

const runtime = new EVM();

new Validator(runtime).bootstrap();