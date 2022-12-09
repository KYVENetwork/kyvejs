import { Validator } from '@kyvejs/protocol';

import UniswapEvents from './runtime';

const runtime = new UniswapEvents();

new Validator(runtime).bootstrap();
