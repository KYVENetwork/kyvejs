import { Command } from "commander";

import { run } from "../kysor";

const start = new Command("start").description("Start KYSOR");

start
  .requiredOption("-v, --valaccount <string>", "Name of the valaccount to run")
  .option("-d, --auto-download-binaries")
  .action(async (options) => {
    await run(options);
  });

export default start;
