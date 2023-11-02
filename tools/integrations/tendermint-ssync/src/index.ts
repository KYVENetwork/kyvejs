import { Validator } from '@kyvejs/protocol';
import TendermintSSync from './runtime';

const runtime = new TendermintSSync();

new Validator(runtime).bootstrap();
