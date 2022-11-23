import { ProtocolNode } from '@kyvejs/protocol';
import UniswapEvents from './runtime';

const runtime = new UniswapEvents();

new ProtocolNode(runtime).bootstrap();
