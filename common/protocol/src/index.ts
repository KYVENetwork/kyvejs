import { PoolResponse } from "@kyvejs/types/lcd/kyve/query/v1beta1/pools";
import KyveSDK, { KyveClient, KyveLCDClientType } from "@kyvejs/sdk";
import { Command, OptionValues } from "commander";
import os from "os";
import { Logger } from "tslog";

import { version as protocolVersion } from "../package.json";
import {
  parseCache,
  parseMnemonic,
  parseNetwork,
  parsePoolId,
} from "./commander";
import {
  canPropose,
  canVote,
  claimUploaderRole,
  compressionFactory,
  continueRound,
  createBundleProposal,
  getBalances,
  runCache,
  runNode,
  saveBundleDecompress,
  saveBundleDownload,
  saveGetTransformDataItem,
  saveLoadValidationBundle,
  setupCacheProvider,
  setupLogger,
  setupMetrics,
  setupSDK,
  setupValidator,
  skipUploaderRole,
  storageProviderFactory,
  submitBundleProposal,
  syncPoolConfig,
  syncPoolState,
  validateBundleProposal,
  validateIsNodeValidator,
  validateIsPoolActive,
  validateRuntime,
  validateStorageBalance,
  validateVersion,
  voteBundleProposal,
  waitForAuthorization,
  waitForCacheContinuation,
  waitForNextBundleProposal,
  waitForUploadInterval,
  getProxyAuth,
} from "./methods";
import { ICacheProvider, IMetrics, IRuntime } from "./types";
import { standardizeJSON } from "./utils";

/**
 * Main class of KYVE protocol nodes representing a validator node.
 *
 * @class Validator
 * @constructor
 */
export class Validator {
  // reactor attributes
  protected runtime!: IRuntime;
  protected cacheProvider!: ICacheProvider;

  // sdk attributes
  public sdk!: KyveSDK;
  public client!: KyveClient;
  public lcd!: KyveLCDClientType;

  // node attributes
  public protocolVersion!: string;
  public pool!: PoolResponse;
  public poolConfig!: any;
  public name!: string;

  // logger attributes
  public logger!: Logger;

  // metrics attributes
  public m!: IMetrics;

  // node option attributes
  protected poolId!: number;
  protected staker!: string;
  protected valaccount!: string;
  protected storagePriv!: string;
  protected network!: string;
  protected rpc!: string;
  protected rest!: string;
  protected cache!: string;
  protected debug!: boolean;
  protected metrics!: boolean;
  protected metricsPort!: number;
  protected home!: string;

  // setups
  protected setupLogger = setupLogger;
  protected setupCacheProvider = setupCacheProvider;
  protected setupMetrics = setupMetrics;
  protected setupSDK = setupSDK;
  protected setupValidator = setupValidator;

  // checks
  protected validateRuntime = validateRuntime;
  protected validateVersion = validateVersion;
  protected validateIsNodeValidator = validateIsNodeValidator;
  protected validateIsPoolActive = validateIsPoolActive;

  // timeouts
  protected waitForAuthorization = waitForAuthorization;
  protected waitForUploadInterval = waitForUploadInterval;
  protected waitForNextBundleProposal = waitForNextBundleProposal;
  protected waitForCacheContinuation = waitForCacheContinuation;

  // helpers
  protected continueRound = continueRound;
  protected saveGetTransformDataItem = saveGetTransformDataItem;
  public getProxyAuth = getProxyAuth;

  // factories
  protected storageProviderFactory = storageProviderFactory;
  protected compressionFactory = compressionFactory;

  // txs
  protected claimUploaderRole = claimUploaderRole;
  protected skipUploaderRole = skipUploaderRole;
  protected voteBundleProposal = voteBundleProposal;
  protected submitBundleProposal = submitBundleProposal;

  // queries
  protected syncPoolState = syncPoolState;
  protected syncPoolConfig = syncPoolConfig;
  protected getBalances = getBalances;
  protected canVote = canVote;
  protected canPropose = canPropose;

  // validate
  protected saveBundleDownload = saveBundleDownload;
  protected saveBundleDecompress = saveBundleDecompress;
  protected saveLoadValidationBundle = saveLoadValidationBundle;
  protected validateBundleProposal = validateBundleProposal;
  protected validateStorageBalance = validateStorageBalance;

  // upload
  protected createBundleProposal = createBundleProposal;

  // main
  protected runNode = runNode;
  protected runCache = runCache;

  /**
   * Constructor for the validator class. It is required to provide the
   * runtime class here in order to run the
   *
   * @method constructor
   * @param {IRuntime} runtime which implements the interface IRuntime
   */
  constructor(runtime: IRuntime) {
    // set provided runtime
    this.runtime = runtime;

    // set @kyvejs/protocol version
    this.protocolVersion = protocolVersion;
  }

  /**
   * Bootstrap method for protocol node. It initializes all commands including
   * the main program which can be called with "start"
   *
   * @method bootstrap
   * @return {void}
   */
  public bootstrap(): void {
    // define main program
    const program = new Command();

    // define version command
    program
      .command("version")
      .description("Print runtime and protocol version")
      .action(() => {
        console.log(`${this.runtime.name} version: ${this.runtime.version}`);
        console.log(`@kyvejs/protocol version: ${this.protocolVersion}`);
        console.log(`Validator version: ${process.version}`);
        console.log();
        console.log(`Platform: ${os.platform()}`);
        console.log(`Arch: ${os.arch()}`);
      });

    // define start command
    program
      .command("start")
      .description("Run the protocol node")
      .requiredOption(
        "--pool <string>",
        "The ID of the pool this valaccount should participate as a validator",
        parsePoolId
      )
      .requiredOption(
        "--valaccount <string>",
        "The mnemonic of the valaccount",
        parseMnemonic
      )
      .requiredOption(
        "--storage-priv <string>",
        "The private key of the storage provider"
      )
      .requiredOption(
        "--network <local|alpha|beta|korellia>",
        "The network of the KYVE chain",
        parseNetwork
      )
      .option(
        "--rpc",
        "Custom rpc endpoint the node uses for submitting transactions to chain"
      )
      .option(
        "--rest",
        "Custom rest api endpoint the node uses for querying from chain"
      )
      .option(
        "--cache <jsonfile|memory>",
        "The cache this node should use",
        parseCache,
        "jsonfile"
      )
      .option("--debug", "Run the validator node in debug mode")
      .option(
        "--verbose",
        "[DEPRECATED] Run the validator node in verbose logging mode"
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
        "--home <string>",
        "Specify the home directory of the node where logs and the cache should save their data. [default current directory]",
        "./"
      )
      .action((options) => {
        this.start(options);
      });

    // bootstrap program
    program.parse();
  }

  /**
   * Main method of @kyvejs/protocol. By running this method the node will start and run.
   * For this method to run the Runtime, Storage Provider and the Cache have to be added first.
   *
   * This method will run indefinetely and only exits on specific exit conditions like running
   * an incorrect runtime or version.
   *
   * @method start
   * @param {OptionValues} options contains all node options defined in bootstrap
   * @return {Promise<void>}
   */
  private async start(options: OptionValues): Promise<void> {
    // assign program options
    // to node instance
    this.poolId = options.pool;
    this.valaccount = options.valaccount;
    this.storagePriv = options.storagePriv;
    this.network = options.network;
    this.rpc = options.rpc;
    this.rest = options.rest;
    this.cache = options.cache;
    this.debug = options.debug;
    this.metrics = options.metrics;
    this.metricsPort = options.metricsPort;
    this.home = options.home;

    // perform setups
    this.setupLogger();
    this.setupMetrics();

    // perform async setups
    await this.setupSDK();
    await this.syncPoolState();
    await this.validateStorageBalance();
    await this.setupValidator();
    await this.setupCacheProvider();

    // start the node process. Validator and cache should run at the same time.
    // Thats why, although they are async they are called synchronously
    try {
      this.runNode();
      this.runCache();
    } catch (err) {
      this.logger.fatal(`Unexpected runtime error. Exiting ...`);
      this.logger.fatal(standardizeJSON(err));

      process.exit(1);
    }
  }
}

// export commander
export * from "./commander";

// export types
export * from "./types";

// export utils
export * from "./utils";
