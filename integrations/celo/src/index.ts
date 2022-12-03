import { Node } from '@kyvejs/protocol';

import Celo from './runtime';

const runtime = new Celo();

new Node(runtime).bootstrap();
