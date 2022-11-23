import { ProtocolNode } from '@kyvejs/protocol';
import Evm from './runtime';

const runtime = new Evm();

new ProtocolNode(runtime).bootstrap();
