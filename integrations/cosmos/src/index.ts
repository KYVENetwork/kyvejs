import { Node } from '@kyvejs/protocol';
import Cosmos from './runtime';

const runtime = new Cosmos();

new Node(runtime).bootstrap();
