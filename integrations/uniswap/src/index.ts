import { Node } from '@kyvejs/protocol';

import UniswapEvents from './runtime';

const runtime = new UniswapEvents();

new Node(runtime).bootstrap();
