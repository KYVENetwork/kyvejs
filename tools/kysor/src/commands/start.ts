import { Command } from "commander";

import { run } from "../kysor";

const start = new Command("start").description("Start KYSOR");

start
  .requiredOption("-v, --valaccount <string>", "Name of the valaccount to run")
  .option(
    "--home <string>",
    "The location of the .kysor home directory where binaries and configs are stored."
  )
  .option(
    "-e, --env-file <string>",
    "Specify the path to an .env file which should be used when starting a binary"
  )
  .option("--debug", "Run the validator node in debug mode")
  .action(async (options) => {
    await run(options);
  });

export default start;
