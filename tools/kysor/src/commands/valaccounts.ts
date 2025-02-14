import TOML from "@iarna/toml";
import KyveSDK from "@kyvejs/sdk";
import BigNumber from "bignumber.js";
import { Command } from "commander";
import fs from "fs";
import path from "path";
import prompts from "prompts";

import { IValaccountConfig } from "../types/interfaces";
import { FILE_ACCESS, KYSOR_DIR, USER_HOME } from "../utils/constants";

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
  .option(
    "--home <string>",
    "The location of the .kysor home directory where binaries and configs are stored."
  )
  .option(
    "--request-backoff <number>",
    "The time in milliseconds between each getDataItem request where the node sleeps [default = 50]",
    "50"
  )
  .option(
    "--cache <jsonfile|memory>",
    "The cache this node should use",
    "jsonfile"
  )
  .option(
    "--metrics",
    "Start a prometheus metrics server on http://localhost:8080/metrics"
  )
  .option(
    "--metrics-port <number>",
    "Specify the port of the metrics server. Only considered if '--metrics' is set [default = 8080]",
    "8080"
  )
  .option(
    "--debug-max-size <number>",
    "Specify the max size in bytes for the debug folder. [default = 10737418240 (10GB)]",
    "10737418240"
  )
  .option("--recover", "Create a valaccount by importing an existing mnemonic")
  .action(async (options) => {
    try {
      const home = path.join(options.home || USER_HOME, KYSOR_DIR);

      if (!fs.existsSync(path.join(home, `config.toml`))) {
        console.log(
          `KYSOR is not initialized yet. You can initialize it by running: ./kysor init --network <desired_network> --auto-download-binaries`
        );
        return;
      }

      // create home directory for valaccount configs
      fs.mkdirSync(path.join(home, "valaccounts"), { recursive: true });

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
      // check if name already exists
      if (
        fs.existsSync(path.join(home, "valaccounts", `${options.name}.toml`))
      ) {
        console.log(
          `ERROR: Already created a valaccount with name = ${options.name}`
        );
        return;
      }
      // check if same valaccount was already created
      const configs = fs.readdirSync(path.join(home, "valaccounts"));
      const valaccounts = [];

      for (const config of configs) {
        const valaccount: IValaccountConfig = TOML.parse(
          fs.readFileSync(path.join(home, "valaccounts", config), "utf-8")
        ) as any;
        valaccounts.push(valaccount.valaccount);
      }

      if (valaccounts.includes(valaccount)) {
        console.log(
          `ERROR: Already created a valaccount with same mnemonic = ${await KyveSDK.getAddressFromMnemonic(
            valaccount
          )}`
        );
        return;
      }

      const config: IValaccountConfig = {
        pool: parseInt(options.pool, 10),
        valaccount,
        storagePriv: options.storagePriv,
        requestBackoff: options.requestBackoff,
        cache: options.cache,
        metrics: options.metrics,
        metricsPort: options.metricsPort,
        debugMaxSize: options.debugMaxSize,
      };

      fs.writeFileSync(
        path.join(home, "valaccounts", `${options.name}.toml`),
        TOML.stringify(config as any),
        {
          mode: FILE_ACCESS,
        }
      );
      console.log(`Successfully created valaccount ${options.name}`);
    } catch (err) {
      console.log(`ERROR: Could not create valaccount: ${err}`);
    }
  });

valaccounts
  .command("show-address")
  .description("Show address of a valaccount")
  .requiredOption(
    "--name <string>",
    "Name of the valaccount (name only used locally for KYSOR)"
  )
  .option(
    "--home <string>",
    "The location of the .kysor home directory where binaries and configs are stored."
  )
  .action(async (options) => {
    try {
      const home = path.join(options.home || USER_HOME, KYSOR_DIR);

      if (
        !fs.existsSync(path.join(home, "valaccounts", `${options.name}.toml`))
      ) {
        console.log(`Valaccount with name ${options.name} does not exist`);
        return;
      }

      const valaccount = TOML.parse(
        fs.readFileSync(
          path.join(home, "valaccounts", `${options.name}.toml`),
          "utf-8"
        )
      ) as any;

      const address = await KyveSDK.getAddressFromMnemonic(
        valaccount.valaccount
      );
      console.log(address);
    } catch (err) {
      console.log(`ERROR: Could not show address of valaccount: ${err}`);
    }
  });

valaccounts
  .command("show-balance")
  .description("Show balance of a valaccount")
  .requiredOption(
    "--name <string>",
    "Name of the valaccount (name only used locally for KYSOR)"
  )
  .option(
    "--home <string>",
    "The location of the .kysor home directory where binaries and configs are stored."
  )
  .action(async (options) => {
    try {
      const home = path.join(options.home || USER_HOME, KYSOR_DIR);

      if (
        !fs.existsSync(path.join(home, "valaccounts", `${options.name}.toml`))
      ) {
        console.log(`Valaccount with name ${options.name} does not exist`);
        return;
      }

      const config = TOML.parse(
        fs.readFileSync(path.join(home, "config.toml"), "utf-8")
      ) as any;

      const valaccount = TOML.parse(
        fs.readFileSync(
          path.join(home, "valaccounts", `${options.name}.toml`),
          "utf-8"
        )
      ) as any;

      const client = await new KyveSDK(config.chainId, {
        rpc: config.rpc.split(",")[0],
        rest: config.rest.split(",")[0],
        gasPrice: config.gasPrice,
      }).fromMnemonic(valaccount.valaccount);

      const balance = await client.getKyveBalance();

      console.log(`${balance} ${client.config.coinDenom}`);
    } catch (err) {
      console.log(`ERROR: Could not show balance of valaccount: ${err}`);
    }
  });

valaccounts
  .command("transfer")
  .description("Transfer funds from valaccount to a recipient")
  .requiredOption(
    "--from <string>",
    "Name of the valaccount the amount should be transferred from (name only used locally for KYSOR)"
  )
  .requiredOption(
    "--amount <string>",
    "Amount to send to recipient (base unit)"
  )
  .requiredOption("--recipient <string>", "Wallet address of the recipient")
  .option(
    "--home <string>",
    "The location of the .kysor home directory where binaries and configs are stored."
  )
  .action(async (options) => {
    try {
      const home = path.join(options.home || USER_HOME, KYSOR_DIR);

      if (
        !fs.existsSync(path.join(home, "valaccounts", `${options.from}.toml`))
      ) {
        console.log(`Valaccount with name ${options.from} does not exist`);
        return;
      }

      const config = TOML.parse(
        fs.readFileSync(path.join(home, "config.toml"), "utf-8")
      ) as any;

      const valaccount = TOML.parse(
        fs.readFileSync(
          path.join(home, "valaccounts", `${options.from}.toml`),
          "utf-8"
        )
      ) as any;

      const client = await new KyveSDK(config.chainId, {
        rpc: config.rpc.split(",")[0],
        rest: config.rest.split(",")[0],
        gasPrice: config.gasPrice,
      }).fromMnemonic(valaccount.valaccount);

      const tx = await client.cosmos.bank.v1beta1.transfer(
        options.recipient,
        options.amount
      );

      const { value } = await prompts(
        {
          type: "confirm",
          name: "value",
          message: `Confirm transfer of ${options.amount} ${
            client.config.coinDenom
          } (${new BigNumber(options.amount)
            .dividedBy(
              new BigNumber(10).exponentiatedBy(client.config.coinDecimals)
            )
            .toString(10)} ${client.config.coin}) to recipient ${
            options.recipient
          }`,
        },
        {
          onCancel: () => {
            throw Error("Aborted transfer confirmation");
          },
        }
      );

      if (value) {
        console.log(`Waiting for confirmation: ${tx.txHash} ...`);

        const receipt = await tx.execute();

        if (receipt.code === 0) {
          console.log(
            `Successfully transferred ${options.amount} ${client.config.coinDenom} to recipient ${options.recipient}`
          );
        } else {
          console.log(
            `Transfer failed with receipt ${JSON.stringify(receipt)}`
          );
        }
      } else {
        console.log("Aborted transfer");
      }
    } catch (err) {
      console.log(`ERROR: Could not transfer funds from valaccount: ${err}`);
    }
  });

valaccounts
  .command("delete")
  .description("Delete a valaccount")
  .requiredOption(
    "--name <string>",
    "Name of the valaccount (name only used locally for KYSOR)"
  )
  .option(
    "--home <string>",
    "The location of the .kysor home directory where binaries and configs are stored."
  )
  .action(async (options) => {
    try {
      const home = path.join(options.home || USER_HOME, KYSOR_DIR);

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

valaccounts
  .command("list")
  .description("List all valaccounts")
  .option(
    "--home <string>",
    "The location of the .kysor home directory where binaries and configs are stored."
  )
  .action(async (options) => {
    try {
      const home = path.join(options.home || USER_HOME, KYSOR_DIR);

      const files = fs.readdirSync(path.join(home, "valaccounts"));
      for (const file of files) {
        console.log(file.replace(".toml", ""));
      }
    } catch (err) {
      console.log(`ERROR: Could not list valaccounts: ${err}`);
    }
  });

export default valaccounts;
