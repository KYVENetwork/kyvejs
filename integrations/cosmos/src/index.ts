import { Validator } from '@kyvejs/protocol';
import Cosmos from './runtime';

const runtime = new Cosmos();

new Validator(runtime).bootstrap();
