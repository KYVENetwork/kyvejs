import TOML from "@iarna/toml";
import KyveSDK from "@kyvejs/sdk";
import { PoolResponse } from "@kyvejs/types/lcd/kyve/query/v1beta1/pools";
import dotenv from "dotenv";
import download from "download";
import extract from "extract-zip";
import fs from "fs";
import path from "path";

import { IConfig, IValaccountConfig } from "./types/interfaces";
import { getChecksum, setupLogger, startNodeProcess } from "./utils";
import { ARCH, KYSOR_DIR, PLATFORM, USER_HOME } from "./utils/constants";

const INFINITY_LOOP = true;

export const run = async (options: any) => {
  let config: IConfig = {} as IConfig;
  let rpc: string[];
  let rest: string[];
  let valaccount: IValaccountConfig = {} as IValaccountConfig;
  let pool: PoolResponse;
  let env: any;

  const home = path.join(options.home || USER_HOME, KYSOR_DIR);
  const logger = setupLogger(home);

  if (!fs.existsSync(path.join(home, `config.toml`))) {
    logger.error(
      `KYSOR is not initialized yet. You can initialize it by running: ./kysor init --chain-id <chain_id> --rpc <rpc_1,rpc_2...> --rest <rest_1,rest_2...> --auto-download-binaries`
    );
    return;
  }

  logger.info("Starting KYSOR ...");
  logger.info(`Running on platform and architecture "${PLATFORM}" - "${ARCH}"`);

  // verify that KYSOR config toml exists and can be parsed
  try {
    if (!fs.existsSync(path.join(home, `config.toml`))) {
      logger.error(`KYSOR config.toml does not exist. Exiting KYSOR ...`);
      process.exit(0);
    }
  } catch (err) {
    logger.error(
      `Error opening KYSOR config file config.toml. Exiting KYSOR ...`
    );
    logger.error(JSON.parse(JSON.stringify(err)));
    process.exit(0);
  }

  // verify that KYSOR config toml can be parsed
  try {
    config = TOML.parse(
      fs.readFileSync(path.join(home, `config.toml`), "utf-8")
    ) as any;
    logger.info(`Found KYSOR config file "config.toml"`);
  } catch (err) {
    logger.error(
      `Error parsing KYSOR config file config.toml. Exiting KYSOR ...`
    );
    logger.error(JSON.parse(JSON.stringify(err)));
    process.exit(0);
  }

  // verify that rpc and rest endpoints are valid
  try {
    rpc = config.rpc.split(",").map((r) => r.trim());
    rest = config.rest.split(",").map((r) => r.trim());

    if (!rpc.length || !rest.length) {
      throw new Error("rpc and rest endpoints must be specified");
    }

    if (rpc.length !== rest.length) {
      throw new Error("rpc and rest endpoints must have same lengths");
    }
  } catch (err) {
    logger.error(
      `Error validating rpc and rest endpoints. Edit the config.toml accordingly. Exiting KYSOR ...`
    );
    logger.error(JSON.parse(JSON.stringify(err)));
    process.exit(0);
  }

  // verify that valaccount toml exists and can be parsed
  try {
    if (
      !fs.existsSync(
        path.join(home, "valaccounts", `${options.valaccount}.toml`)
      )
    ) {
      logger.error(
        `Valaccount with name ${options.valaccount} does not exist. Exiting KYSOR ...`
      );
      process.exit(0);
    }
  } catch (err) {
    logger.error(
      `Error opening valaccount config file ${options.valaccount}.toml. Exiting KYSOR ...`
    );
    logger.error(JSON.parse(JSON.stringify(err)));
    process.exit(0);
  }

  // verify that valaccount toml can be parsed
  try {
    valaccount = TOML.parse(
      fs.readFileSync(
        path.join(home, "valaccounts", `${options.valaccount}.toml`),
        "utf-8"
      )
    ) as any;
    logger.info(`Found valaccount config file "${options.valaccount}.toml"`);
  } catch (err) {
    logger.error(
      `Error parsing valaccount config file ${options.valaccount}.toml. Exiting KYSOR ...`
    );
    logger.error(JSON.parse(JSON.stringify(err)));
    process.exit(0);
  }

  // verify that .env can be parsed
  if (options.envFile) {
    try {
      env = dotenv.parse(fs.readFileSync(options.envFile, "utf-8"));
      logger.info(`Found .env config file "${options.envFile}"`);
    } catch (err) {
      logger.error(
        `Error parsing .env config file ${options.envFile}. Exiting KYSOR ...`
      );
      logger.error(JSON.parse(JSON.stringify(err)));
      process.exit(0);
    }
  }

  // create lcd clients
  const lcd = rpc.map((_, i) => {
    try {
      return new KyveSDK(config.chainId, {
        rpc: rpc[i],
        rest: rest[i],
        coinDenom: config.coinDenom,
        coinDecimals: config.coinDecimals,
        gasPrice: config.gasPrice,
      }).createLCDClient();
    } catch (err) {
      logger.error(
        `Error creating LCD client from chain id ${config.chainId}, rpc ${rpc[i]} and rest ${rest[i]}. Exiting KYSOR ...`
      );
      logger.error(JSON.parse(JSON.stringify(err)));
      process.exit(0);
    }
  });

  while (INFINITY_LOOP) {
    let data;

    // create pool directory if it does not exist yet
    if (!fs.existsSync("./upgrades")) {
      logger.info(`Creating "upgrades" directory ...`);
      fs.mkdirSync(path.join(home, `upgrades`), {
        recursive: true,
      });
    }

    // fetch pool state
    for (let l = 0; l < lcd.length; l++) {
      try {
        logger.info(`Calling rest ${rest[l]}`);

        data = await lcd[l].kyve.query.v1beta1.pool({
          id: valaccount.pool.toString(),
        });
      } catch (err) {
        logger.error(`Call to rest ${rest[l]} failed`);
        logger.error(JSON.parse(JSON.stringify(err)));
        continue;
      }
    }

    if (!data) {
      logger.error(`Unable to fetch pool state. Exiting KYSOR ...`);
      process.exit(0);
    }

    pool = data.pool as PoolResponse;

    const version = pool.data?.protocol?.version;

    if (!version) {
      logger.error("Version tag not found on pool. Exiting KYSOR ...");
      process.exit(0);
    }

    // create pool directory if does not exist yet
    if (!fs.existsSync(path.join(home, `upgrades`, `pool-${pool.id}`))) {
      fs.mkdirSync(path.join(home, `upgrades`, `pool-${pool.id}`), {
        recursive: true,
      });
    }

    // check if directory with version already exists
    if (
      fs.existsSync(path.join(home, `upgrades`, `pool-${pool.id}`, version))
    ) {
      logger.info(
        `Binary of pool "${pool.id}" with version ${version} found locally`
      );
    } else {
      logger.info(
        `Binary of pool "${pool.id}" with version ${version} not found locally`
      );

      // if binary needs to be downloaded and autoDownload is disable exit
      if (!config.autoDownloadBinaries) {
        logger.error(
          "Auto download is disabled and new upgrade binary could not be found. Exiting KYSOR ..."
        );
        process.exit(0);
      }

      const binaries = JSON.parse(pool.data!.protocol!.binaries);
      const downloadLink = binaries[`kyve-${PLATFORM}-${ARCH}`];

      // if download link was not found exit
      if (!downloadLink) {
        logger.error(
          `Upgrade binary "kyve-${PLATFORM}-${ARCH}" not found on pool. Exiting KYSOR ...`
        );
        process.exit(0);
      }

      logger.info("Found downloadable binary on pool");

      const checksum = new URL(downloadLink).searchParams.get("checksum") || "";

      // create directories for new version
      fs.mkdirSync(
        path.join(home, `upgrades`, `pool-${pool.id}`, version, `bin`),
        {
          recursive: true,
        }
      );

      // try to download binary
      try {
        logger.info(`Downloading from ${downloadLink} ...`);

        fs.writeFileSync(
          path.join(
            home,
            `upgrades`,
            `pool-${pool.id}`,
            version,
            `bin`,
            "kyve.zip"
          ),
          await download(downloadLink)
        );
      } catch (err) {
        logger.error(
          `Error downloading binary from ${downloadLink}. Exiting KYSOR ...`
        );
        logger.error(JSON.parse(JSON.stringify(err)));

        // exit and delete version folders if binary could not be downloaded
        fs.rmSync(path.join(home, `upgrades`, `pool-${pool.id}`, version), {
          recursive: true,
        });
        process.exit(0);
      }

      try {
        logger.info(
          `Extracting binary to ${path.join(
            home,
            `upgrades`,
            `pool-${pool.id}`,
            version,
            `bin`,
            "kyve.zip"
          )} ...`
        );
        await extract(
          path.join(
            home,
            `upgrades`,
            `pool-${pool.id}`,
            version,
            `bin`,
            "kyve.zip"
          ),
          {
            dir: path.resolve(
              path.join(home, `upgrades`, `pool-${pool.id}`, version, `bin`)
            ),
            defaultFileMode: 0o555,
          }
        );

        // check if kyve.zip exists
        if (
          fs.existsSync(
            path.join(
              home,
              `upgrades`,
              `pool-${pool.id}`,
              version,
              `bin`,
              "kyve.zip"
            )
          )
        ) {
          logger.info(`Deleting kyve.zip ...`);
          // delete zip afterwards
          fs.unlinkSync(
            path.join(
              home,
              `upgrades`,
              `pool-${pool.id}`,
              version,
              `bin`,
              "kyve.zip"
            )
          );
        }
      } catch (err) {
        logger.error("Error extracting binary. Exiting KYSOR ...");
        logger.error(JSON.parse(JSON.stringify(err)));

        // exit and delete version folders if binary could not be extracted
        fs.rmSync(path.join(home, `upgrades`, `pool-${pool.id}`, version), {
          recursive: true,
        });
        process.exit(0);
      }

      if (checksum) {
        const versionHome = path.join(
          home,
          `upgrades`,
          `pool-${pool.id}`,
          version
        );
        const binHome = path.join(versionHome, `bin`);
        const binName = fs.readdirSync(binHome)[0];
        const binPath = path.join(binHome, binName);

        const localChecksum = await getChecksum(binPath);

        logger.info("Comparing binary checksums ...");
        console.log();
        logger.info(`Found checksum = ${checksum}`);
        logger.info(`Local checksum = ${localChecksum}`);
        console.log();

        if (checksum === localChecksum) {
          logger.info("Checksums are equal. Continuing ...");
        } else {
          logger.info("Checksums are not equal. Exiting KYSOR ...");
          process.exit(0);
        }
      }
    }

    try {
      const versionHome = path.join(
        home,
        `upgrades`,
        `pool-${pool.id}`,
        version
      );
      const binHome = path.join(versionHome, `bin`);
      const binName = fs.readdirSync(binHome)[0];
      const binPath = path.join(binHome, binName);

      // export env secrets so binary can read them
      const valaccountEnv = `VALACCOUNT_${options.valaccount}`.toUpperCase();
      process.env[valaccountEnv] = valaccount.valaccount;

      const storagePrivEnv = `STORAGE_PRIV_${options.valaccount}`.toUpperCase();
      process.env[storagePrivEnv] = valaccount.storagePriv;

      // export custom env variables
      for (const key of Object.keys(env || {})) {
        process.env[key] = env[key];
      }

      const args = [
        `start`,
        `--pool`,
        `${valaccount.pool}`,
        `--valaccount`,
        `${valaccountEnv}`,
        `--storage-priv`,
        `${storagePrivEnv}`,
        `--chain-id`,
        `${config.chainId}`,
        `--rpc`,
        `${config.rpc}`,
        `--rest`,
        `${config.rest}`,
        `--home`,
        `${versionHome}`,
      ];

      if (options.debug) {
        args.push("--debug");
      }

      if (options.dryRun) {
        args.push("--dry-run");
      }

      if (options.dryRunBundles > 0) {
        args.push("--dry-run-bundles");
        args.push(`${options.dryRunBundles}`);
      }

      if (valaccount.requestBackoff) {
        args.push(`--request-backoff`);
        args.push(`${valaccount.requestBackoff}`);
      }

      if (valaccount.cache) {
        args.push(`--cache`);
        args.push(`${valaccount.cache}`);
      }

      if (valaccount.metrics) {
        args.push("--metrics");
        args.push("--metrics-port");
        args.push(`${valaccount.metricsPort}`);
      }

      if (valaccount.debugMaxSize) {
        args.push("--debug-max-size");
        args.push(`${valaccount.debugMaxSize}`);
      }

      if (options.gasPrice) {
        args.push("--gas-price");
        args.push(`${options.gasPrice}`);
      }

      logger.info("Starting process ...");

      console.log("\n");

      await startNodeProcess(binPath, args, {});

      console.log("\n");

      logger.info("Stopped process ...");
    } catch (err) {
      logger.error("Found unexpected runtime error. Exiting KYSOR ...");
      if (err) {
        logger.error(JSON.parse(JSON.stringify(err)));
      }
      process.exit(1);
    }
  }
};
