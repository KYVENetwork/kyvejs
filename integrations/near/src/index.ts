import { Validator } from '@kyvejs/protocol';
import Near from "./runtime";

const runtime = new Near();

new Validator(runtime).bootstrap();