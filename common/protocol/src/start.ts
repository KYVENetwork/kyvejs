import { ProtocolConfig } from "./types";
import { Validator } from "./index";

const config: Partial<ProtocolConfig> = {
  host: process.env.HOST || "locahost",
  port: parseInt(process.env.PORT || "50051"),
  useGrpc: true,
  services: undefined,
};

new Validator(config).bootstrap();
