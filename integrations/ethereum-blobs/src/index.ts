import { Validator } from '@kyvejs/protocol';
import EthereumBlobs from "./runtime";

const runtime = new EthereumBlobs();

new Validator(runtime).bootstrap();