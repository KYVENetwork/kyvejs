import { Validator } from "@kyvejs/protocol";
import Docker from "./runtime";

const runtime = new Docker();

new Validator(runtime).bootstrap();
