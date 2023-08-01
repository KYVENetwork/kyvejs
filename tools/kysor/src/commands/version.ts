import { Command } from "commander";
import os from "os";

import { version as kysorVersion } from "../../package.json";

const version = new Command("version")
  .description("Get KYSOR version")
  .action(() => {
    console.log(`KYSOR version: ${kysorVersion}`);
    console.log(`Node version: ${process.version}`);
    console.log();
    console.log(`Platform: ${os.platform()}`);
    console.log(`Arch: ${os.arch()}`);
  });

export default version;
