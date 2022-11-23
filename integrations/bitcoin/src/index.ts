import { ProtocolNode } from "@kyvejs/protocol";
import Bitcoin from "./runtime";

const runtime = new Bitcoin();

new ProtocolNode(runtime).bootstrap();
