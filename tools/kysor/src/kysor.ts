import TOML from "@iarna/toml";
import KyveSDK, { KyveLCDClientType } from "@kyvejs/sdk";
import { PoolResponse } from "@kyvejs/types/lcd/kyve/query/v1beta1/pools";
import download from "download";
import extract from "extract-zip";
import fs from "fs";
import os from "os";
import path from "path";

import { IConfig, IValaccountConfig } from "./types/interfaces";
import { getChecksum, setupLogger, startNodeProcess } from "./utils";

const home = path.join(process.env.HOME!, ".kysor");
const platform = os.platform() === "darwin" ? "macos" : os.platform();
const arch = os.arch();
const INFINITY_LOOP = true;
const logger = setupLogger();

export const run = async (options: any) => {
  let config: IConfig = {} as IConfig;
  let valaccount: IValaccountConfig = {} as IValaccountConfig;
  let pool: PoolResponse;
  let lcd: KyveLCDClientType = {} as KyveLCDClientType;

  if (!fs.existsSync(path.join(home, `config.toml`))) {
    logger.error(
      `KYSOR is not initialized yet. You can initialize it by running: ./kysor init --network <desired_network> --auto-download-binaries`
    );
    return;
  }

  logger.info("Starting KYSOR ...");
  logger.info(`Running on platform and architecture "${platform}" - "${arch}"`);

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
    logger.error(err);
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
    logger.error(err);
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
    logger.error(err);
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
    logger.error(err);
    process.exit(0);
  }

  // verify kyve sdk client can be created
  try {
    lcd = new KyveSDK(config.network).createLCDClient();
  } catch (err) {
    logger.error(
      `Error creating LCD client from network ${options.network}. Exiting KYSOR ...`
    );
    logger.error(err);
  }

  while (INFINITY_LOOP) {
    // create pool directory if it does not exist yet
    if (!fs.existsSync("./upgrades")) {
      logger.info(`Creating "upgrades" directory ...`);
      fs.mkdirSync(path.join(home, `upgrades`), {
        recursive: true,
      });
    }

    // fetch pool state
    const data = await lcd.kyve.query.v1beta1.pool({
      id: valaccount.pool.toString(),
    });

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
      const downloadLink = binaries[`kyve-${platform}-${arch}`];

      // if download link was not found exit
      if (!downloadLink) {
        logger.error(
          `Upgrade binary "kyve-${platform}-${arch}" not found on pool. Exiting KYSOR ...`
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
        logger.error(err);

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
        logger.error(err);

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

      const args = [
        `start`,
        `--pool`,
        `${valaccount.pool}`,
        `--valaccount`,
        `${valaccount.valaccount}`,
        `--storage-priv`,
        `${valaccount.storagePriv}`,
        `--network`,
        `${config.network}`,
        `--home`,
        `${versionHome}`,
      ];

      if (valaccount.verbose) {
        args.push("--verbose");
      }

      if (valaccount.metrics) {
        args.push("--metrics");
        args.push("--metrics-port");
        args.push(`${valaccount.metricsPort}`);
      }

      logger.info("Starting process ...");

      console.log("\n");

      await startNodeProcess(binPath, args, {});

      console.log("\n");

      logger.info("Stopped process ...");
    } catch (err) {
      logger.error("Found unexpected runtime error. Exiting KYSOR ...");
      if (err) {
        logger.error(err);
      }
      process.exit(1);
    }
  }
};
