import { Validator } from "@kyvejs/protocol";

import TokenPrices from "./runtime";

const runtime = new TokenPrices();

new Validator(runtime).bootstrap();
