import { Validator } from '@kyvejs/protocol';
import Validium from "./runtime";

const runtime = new Validium();

new Validator(runtime).bootstrap();
