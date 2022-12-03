import TOML from "@iarna/toml";
import KyveSDK from "@kyvejs/sdk";
import { Command } from "commander";
import fs from "fs";
import path from "path";

const home = path.join(process.env.HOME!, ".kysor");

const init = new Command("init").description("Init KYSOR");

init
  .requiredOption(
    "-n, --network <local|alpha|beta|korellia>",
    "The network the KYSOR should run on"
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

        try {
          new KyveSDK(options.network);
        } catch (err) {
          console.log(`ERROR: network ${options.network} was not recognized`);
          return;
        }

        const config = {
          network: options.network,
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
