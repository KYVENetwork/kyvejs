import { Validator } from '@kyvejs/protocol';
import Celestia from "./runtime";

const runtime = new Celestia();

new Validator(runtime).bootstrap();
