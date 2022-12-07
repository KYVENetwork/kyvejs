import { Validator } from '@kyvejs/protocol';

import Evm from './runtime';

const runtime = new Evm();

new Validator(runtime).bootstrap();
