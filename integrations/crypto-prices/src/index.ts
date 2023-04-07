import { Validator } from "@kyvejs/protocol";

import CryptoPrices from "./runtime";

const runtime = new CryptoPrices();

new Validator(runtime).bootstrap();
