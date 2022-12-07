import { Validator } from "@kyvejs/protocol";

import Bitcoin from "./runtime";

const runtime = new Bitcoin();

new Validator(runtime).bootstrap();
