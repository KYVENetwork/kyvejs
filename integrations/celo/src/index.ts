import { ProtocolNode } from '@kyvejs/protocol';
import Celo from './runtime';

const runtime = new Celo();

new ProtocolNode(runtime).bootstrap();
