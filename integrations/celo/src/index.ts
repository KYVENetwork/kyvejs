import { Validator } from '@kyvejs/protocol';

import Celo from './runtime';

const runtime = new Celo();

new Validator(runtime).bootstrap();
