import { Validator } from '@kyvejs/protocol';
import Tendermint from './runtime';

const runtime = new Tendermint();

new Validator(runtime).bootstrap();
