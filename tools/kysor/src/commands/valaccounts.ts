import TOML from "@iarna/toml";
import KyveSDK from "@kyvejs/sdk";
import { Command } from "commander";
import fs from "fs";
import path from "path";
import prompts from "prompts";

import { IValaccountConfig } from "../types/interfaces";

const home = path.join(process.env.HOME!, ".kysor");

const valaccounts = new Command("valaccounts").description(
  "Create and delete valaccounts"
);

valaccounts
  .command("create")
  .description("Create a new valaccount")
  .requiredOption(
    "--name <string>",
    "Name of the valaccount (name only used locally for KYSOR)"
  )
  .requiredOption(
    "--pool <string>",
    "The ID of the pool this valaccount should participate as a validator"
  )
  .requiredOption(
    "--storage-priv <string>",
    "The private key of the storage provider"
  )
  .option("--verbose", "Run the validator node in verbose logging mode")
  .option(
    "--metrics",
    "Start a prometheus metrics server on http://localhost:8080/metrics"
  )
  .option(
    "--metrics-port <number>",
    "Specify the port of the metrics server. Only considered if '--metrics' is set [default = 8080]",
    "8080"
  )
  .option("--recover", "Create a valaccount by importing an existing mnemonic")
  .action(async (options) => {
    try {
      if (!fs.existsSync(path.join(home, `config.toml`))) {
        console.log(
          `KYSOR is not initialized yet. You can initialize it by running: ./kysor init --network <desired_network> --auto-download-binaries`
        );
        return;
      }

      // create home directory for valaccount configs
      fs.mkdirSync(path.join(home, "valaccounts"), { recursive: true });

      // check if valaccount with same pool id was already created
      const pools = [];
      const valaccounts = fs.readdirSync(path.join(home, "valaccounts"));

      for (const valaccount of valaccounts) {
        const config: IValaccountConfig = TOML.parse(
          fs.readFileSync(path.join(home, "valaccounts", valaccount), "utf-8")
        ) as any;
        pools.push(config.pool);
      }

      // parse pool id
      const pool = parseInt(options.pool, 10);

      if (pools.includes(pool)) {
        console.log(
          `ERROR: Already created a valaccount with Pool Id = ${pool}`
        );
        return;
      }

      // get mnemonic for valaccount
      let valaccount;

      if (options.recover) {
        const { mnemonic } = await prompts(
          {
            type: "text",
            name: "mnemonic",
            message: "Enter the mnemonic",
            validate: async (value) => {
              try {
                await KyveSDK.getAddressFromMnemonic(value);
              } catch (err) {
                return `${err}`;
              }

              return true;
            },
          },
          {
            onCancel: () => {
              throw Error("Aborted mnemonic input");
            },
          }
        );

        valaccount = mnemonic;
      } else {
        valaccount = await KyveSDK.generateMnemonic();
      }

      const config: IValaccountConfig = {
        pool,
        valaccount,
        storagePriv: options.storagePriv,
        verbose: options.verbose,
        metrics: options.metrics,
        metricsPort: options.metricsPort,
      };

      fs.writeFileSync(
        path.join(home, "valaccounts", `${options.name}.toml`),
        TOML.stringify(config as any)
      );
      console.log(`Successfully created valaccount ${options.name}`);
    } catch (err) {
      console.log(`ERROR: Could not create valaccount: ${err}`);
    }
  });

valaccounts
  .command("delete")
  .description("Delete a valaccount")
  .requiredOption(
    "--name <string>",
    "Name of the valaccount (name only used locally for KYSOR)"
  )
  .action(async (options) => {
    try {
      if (
        !fs.existsSync(path.join(home, "valaccounts", `${options.name}.toml`))
      ) {
        console.log(`Valaccount with name ${options.name} does not exist`);
        return;
      }

      fs.unlinkSync(path.join(home, "valaccounts", `${options.name}.toml`));
      console.log(`Successfully deleted valaccount ${options.name}`);
    } catch (err) {
      console.log(`ERROR: Could not delete valaccount: ${err}`);
    }
  });

export default valaccounts;
