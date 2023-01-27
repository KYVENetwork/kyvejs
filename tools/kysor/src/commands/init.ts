import TOML from "@iarna/toml";
import KyveSDK from "@kyvejs/sdk";
import { Command } from "commander";
import fs from "fs";
import path from "path";

const home = path.join(process.env.HOME!, ".kysor");

const init = new Command("init").description("Init KYSOR");

init
  .requiredOption("--chain-id <string>", "The chain ID of the network")
  .requiredOption(
    "--rpc <string>",
    "Comma seperated list of rpc endpoints. If the first fails the next endpoint will be used as fallback."
  )
  .requiredOption(
    "--rest <string>",
    "Comma separated list of rest endpoints. If the first fails the next endpoint will be used as fallback. "
  )
  .option(
    "-d, --auto-download-binaries",
    "Allow automatic download and execution of new upgrade binaries"
  )
  .action(async (options) => {
    try {
      if (fs.existsSync(path.join(home, `config.toml`))) {
        console.log(
          `KYSOR was already initialized. You can directly edit the config file under ${path.join(
            home,
            `config.toml`
          )}`
        );
      } else {
        // create KYSOR home directory
        fs.mkdirSync(home, {
          recursive: true,
        });

        let rpc;
        let rest;

        // verify that rpc and rest endpoints are valid
        try {
          rpc = options.rpc.split(",").map((r: string) => r.trim());
          rest = options.rest.split(",").map((r: string) => r.trim());

          if (!rpc.length || !rest.length) {
            throw new Error("rpc and rest endpoints must be specified");
          }

          if (rpc.length !== rest.length) {
            throw new Error("rpc and rest endpoints must have same lengths");
          }
        } catch (err) {
          console.log(`ERROR: Could parse provided rpc and rest endpoints`);
          console.log(JSON.parse(JSON.stringify(err)));
          return;
        }

        try {
          new KyveSDK({
            chainId: options.chainId,
            rpc: rpc[0],
            rest: rest[0],
            chainName: `KYVE - ${options.chainId}`,
          });
        } catch (err) {
          console.log(
            `ERROR: Could not init KYVE SDK with provided network options`
          );
          console.log(JSON.parse(JSON.stringify(err)));
          return;
        }

        const config = {
          chainId: options.chainId,
          rpc: options.rpc,
          rest: options.rest,
          autoDownloadBinaries: options.autoDownloadBinaries,
        };

        fs.writeFileSync(
          path.join(home, `config.toml`),
          TOML.stringify(config as any)
        );

        console.log(
          `Successfully initialized KYSOR in the following home directory: ${home}`
        );
      }
    } catch (err) {
      console.log(`ERROR: Could not init KYSOR: ${err}`);
    }
  });

export default init;
