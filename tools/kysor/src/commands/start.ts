import { Command } from "commander";

import { run } from "../kysor";

const start = new Command("start").description("Start KYSOR");

start
  .requiredOption("-v, --valaccount <string>", "Name of the valaccount to run")
  .option("--debug", "Run the validator node in debug mode")
  .action(async (options) => {
    await run(options);
  });

export default start;
