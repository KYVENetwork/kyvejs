import { Node } from "@kyvejs/protocol";

import Bitcoin from "./runtime";

const runtime = new Bitcoin();

new Node(runtime).bootstrap();
