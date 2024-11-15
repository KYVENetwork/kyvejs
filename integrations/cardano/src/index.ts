import { Validator } from '@kyvejs/protocol';
import Cardano from './runtime';

const runtime = new Cardano();

new Validator(runtime).bootstrap();
