import { Validator } from '@kyvejs/protocol';
import BeaconBlobs from "./runtime";

const runtime = new BeaconBlobs();

new Validator(runtime).bootstrap();