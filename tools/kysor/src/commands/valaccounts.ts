import TOML from "@iarna/toml";
import KyveSDK from "@kyvejs/sdk";
import BigNumber from "bignumber.js";
import { Command } from "commander";
import fs from "fs";
import path from "path";
import prompts from "prompts";

import { IValaccountConfig } from "../types/interfaces";
import {
  DEFAULT_COIN_DECIMALS,
  DEFAULT_COIN_DENOM,
  FILE_ACCESS,
  HOME,
} from "../utils/constants";

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
  .option("--recover", "Create a valaccount by importing an existing mnemonic")
  .action(async (options) => {
    try {
      if (!fs.existsSync(path.join(HOME, `config.toml`))) {
        console.log(
          `KYSOR is not initialized yet. You can initialize it by running: ./kysor init --network <desired_network> --auto-download-binaries`
        );
        return;
      }

      // create home directory for valaccount configs
      fs.mkdirSync(path.join(HOME, "valaccounts"), { recursive: true });

      // check if valaccount with same pool id was already created
      const pools = [];
      const valaccounts = fs.readdirSync(path.join(HOME, "valaccounts"));

      for (const valaccount of valaccounts) {
        const config: IValaccountConfig = TOML.parse(
          fs.readFileSync(path.join(HOME, "valaccounts", valaccount), "utf-8")
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
        cache: options.cache,
        metrics: options.metrics,
        metricsPort: options.metricsPort,
      };

      fs.writeFileSync(
        path.join(HOME, "valaccounts", `${options.name}.toml`),
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
  .action(async (options) => {
    try {
      if (
        !fs.existsSync(path.join(HOME, "valaccounts", `${options.name}.toml`))
      ) {
        console.log(`Valaccount with name ${options.name} does not exist`);
        return;
      }

      const valaccount = TOML.parse(
        fs.readFileSync(
          path.join(HOME, "valaccounts", `${options.name}.toml`),
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
  .action(async (options) => {
    try {
      if (
        !fs.existsSync(path.join(HOME, "valaccounts", `${options.name}.toml`))
      ) {
        console.log(`Valaccount with name ${options.name} does not exist`);
        return;
      }

      const config = TOML.parse(
        fs.readFileSync(path.join(HOME, "config.toml"), "utf-8")
      ) as any;

      const valaccount = TOML.parse(
        fs.readFileSync(
          path.join(HOME, "valaccounts", `${options.name}.toml`),
          "utf-8"
        )
      ) as any;

      const client = await new KyveSDK({
        chainId: config.chainId,
        chainName: config.chainId.toUpperCase(),
        rpc: config.rpc.split(",")[0],
        rest: config.rest.split(",")[0],
      }).fromMnemonic(valaccount.valaccount);

      const balance = await client.nativeClient.getBalance(
        client.account.address,
        config.denom || DEFAULT_COIN_DENOM
      );

      console.log(`${balance.amount} ${config.denom || DEFAULT_COIN_DENOM}`);
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
  .action(async (options) => {
    try {
      if (
        !fs.existsSync(path.join(HOME, "valaccounts", `${options.from}.toml`))
      ) {
        console.log(`Valaccount with name ${options.from} does not exist`);
        return;
      }

      const config = TOML.parse(
        fs.readFileSync(path.join(HOME, "config.toml"), "utf-8")
      ) as any;

      const valaccount = TOML.parse(
        fs.readFileSync(
          path.join(HOME, "valaccounts", `${options.from}.toml`),
          "utf-8"
        )
      ) as any;

      const client = await new KyveSDK({
        chainId: config.chainId,
        chainName: config.chainId.toUpperCase(),
        rpc: config.rpc.split(",")[0],
        rest: config.rest.split(",")[0],
      }).fromMnemonic(valaccount.valaccount);

      const tx = await client.kyve.base.v1beta1.transfer(
        options.recipient,
        options.amount
      );

      const { value } = await prompts(
        {
          type: "confirm",
          name: "value",
          message: `Confirm transfer of ${options.amount} ${
            options.denom || DEFAULT_COIN_DENOM
          } (${new BigNumber(options.amount)
            .dividedBy(
              new BigNumber(10).exponentiatedBy(
                options.denom || DEFAULT_COIN_DECIMALS
              )
            )
            .toString(10)} $KYVE) to recipient ${options.recipient}`,
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
            `Successfully transferred ${options.amount} ${
              config.denom || DEFAULT_COIN_DENOM
            } to recipient ${options.recipient}`
          );
        } else {
          `Transfer failed with receipt ${JSON.stringify(receipt)}`;
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
  .action(async (options) => {
    try {
      if (
        !fs.existsSync(path.join(HOME, "valaccounts", `${options.name}.toml`))
      ) {
        console.log(`Valaccount with name ${options.name} does not exist`);
        return;
      }

      fs.unlinkSync(path.join(HOME, "valaccounts", `${options.name}.toml`));
      console.log(`Successfully deleted valaccount ${options.name}`);
    } catch (err) {
      console.log(`ERROR: Could not delete valaccount: ${err}`);
    }
  });

export default valaccounts;
