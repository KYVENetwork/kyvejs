import { RuntimeServiceServer } from "../proto/kyverdk/runtime/v1/runtime";

export interface ProtocolConfig {
  host: string;
  port: number;
  useGrpc: boolean;
  services: RuntimeServiceServer | undefined;
}
