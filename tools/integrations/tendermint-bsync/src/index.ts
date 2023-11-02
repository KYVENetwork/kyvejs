import { Validator } from '@kyvejs/protocol';
import TendermintBSync from './runtime';

const runtime = new TendermintBSync();

new Validator(runtime).bootstrap();
