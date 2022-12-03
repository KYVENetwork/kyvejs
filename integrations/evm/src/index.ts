import { Node } from '@kyvejs/protocol';

import Evm from './runtime';

const runtime = new Evm();

new Node(runtime).bootstrap();
