import { Validator } from '@kyvejs/protocol';
import Syntropy from "./runtime";

const runtime = new Syntropy();

new Validator(runtime).bootstrap();
