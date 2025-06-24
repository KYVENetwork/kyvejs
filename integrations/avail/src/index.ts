import { Validator } from '@kyvejs/protocol';
import Avail from "./runtime";

const runtime = new Avail();

new Validator(runtime).bootstrap();