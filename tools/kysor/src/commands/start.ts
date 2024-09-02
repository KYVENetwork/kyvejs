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
  .option(
    "--dry-run",
    "Run the node without uploading or voting on bundles so the operator can test his setup before joining as a validator."
  )
  .option(
    "--dry-run-bundles <number>",
    "Specify the number of bundles that should be tested before the node properly exits. If zero the node will run indefinitely [default = 0]",
    "0"
  )
  .action(async (options) => {
    await run(options);
  });

export default start;
