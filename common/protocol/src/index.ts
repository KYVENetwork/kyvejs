import { PoolResponse } from "@kyvejs/types/lcd/kyve/query/v1beta1/pools";
import KyveSDK, { KyveClient, KyveLCDClientType } from "@kyvejs/sdk";
import { Command, OptionValues } from "commander";
import os from "os";
import { Logger } from "tslog";

import { version as protocolVersion } from "../package.json";
import {
  parseCache,
  parseEndpoints,
  parsePoolAccount,
  parsePoolId,
} from "./commander";
import {
  archiveDebugBundle,
  canPropose,
  canVote,
  claimUploaderRole,
  continueRound,
  createBundleProposal,
  getBalancesForMetrics,
  runCache,
  runNode,
  saveBundleDownload,
  saveLoadValidationBundle,
  setupCacheProvider,
  setupLogger,
  setupMetrics,
  setupSDK,
  setupValidator,
  skipUploaderRole,
  submitBundleProposal,
  syncPoolState,
  syncParams,
  parseProposedBundle,
  validateBundleProposal,
  isNodeValidator,
  isPoolActive,
  isValidRuntime,
  isStorageBalanceZero,
  isValidVersion,
  isDataAvailable,
  voteBundleProposal,
  waitForAuthorization,
  waitForCacheContinuation,
  waitForNextBundleProposal,
  waitForUploadInterval,
  isStorageBalanceLow,
} from "./methods";
import { ICacheProvider, IMetrics, IRuntime } from "./types";
import { IDLE_TIME, sleep, standardizeError } from "./utils";
import { SupportedChains } from "@kyvejs/sdk/dist/constants";
import { storageProviderFactory } from "./reactors/storageProviders";
import { testStorageProvider } from "./reactors/storageProviders/testStorageProvider";
import { compressionFactory } from "./reactors/compression";
import { cacheProviderFactory } from "./reactors/cacheProvider";
import { QueryParamsResponse } from "@kyvejs/types/lcd/kyve/query/v1beta1/params";

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
  public sdk!: KyveSDK[];
  public client!: KyveClient[];
  public lcd!: KyveLCDClientType[];

  // node attributes
  public protocolVersion!: string;
  public pool!: PoolResponse;
  public name!: string;

  // logger attributes
  public logFile!: string;
  public logger!: Logger;

  // metrics attributes
  public m!: IMetrics;

  // node option attributes
  protected poolId!: number;
  protected staker!: string;
  protected poolAccount!: string;
  protected storagePriv!: string;
  protected chainId!: SupportedChains;
  protected rpc!: string[];
  protected rest!: string[];
  protected coinDenom!: string;
  protected coinDecimals!: number;
  protected gasPrice!: number;
  protected requestBackoff!: number;
  protected cache!: string;
  protected debug!: boolean;
  protected debugMaxSize!: number;
  protected metrics!: boolean;
  protected metricsPort!: number;
  protected home!: string;
  protected dryRun!: boolean;
  protected dryRunBundles!: number;
  protected ensureNoLoss!: boolean;
  protected scaleEnsureNoLoss!: number;
  protected params!: QueryParamsResponse;

  // tmp variables
  protected lastUploadedBundle: {
    storageId: string;
    dataSize: number;
    dataHash: string;
  } | null = null;

  // setups
  protected setupLogger = setupLogger;
  protected setupCacheProvider = setupCacheProvider;
  protected setupMetrics = setupMetrics;
  protected setupSDK = setupSDK;
  protected setupValidator = setupValidator;

  // checks
  protected isValidRuntime = isValidRuntime;
  protected isValidVersion = isValidVersion;
  protected isNodeValidator = isNodeValidator;
  protected isPoolActive = isPoolActive;
  protected isStorageBalanceZero = isStorageBalanceZero;
  protected isStorageBalanceLow = isStorageBalanceLow;
  protected isDataAvailable = isDataAvailable;

  // timeouts
  protected waitForAuthorization = waitForAuthorization;
  protected waitForUploadInterval = waitForUploadInterval;
  protected waitForNextBundleProposal = waitForNextBundleProposal;
  protected waitForCacheContinuation = waitForCacheContinuation;

  // helpers
  protected archiveDebugBundle = archiveDebugBundle;
  protected continueRound = continueRound;

  // txs
  protected claimUploaderRole = claimUploaderRole;
  protected skipUploaderRole = skipUploaderRole;
  protected voteBundleProposal = voteBundleProposal;
  protected submitBundleProposal = submitBundleProposal;

  // queries
  protected syncPoolState = syncPoolState;
  protected syncParams = syncParams;
  protected getBalancesForMetrics = getBalancesForMetrics;
  protected canVote = canVote;
  protected canPropose = canPropose;

  // validate
  protected saveBundleDownload = saveBundleDownload;
  protected saveLoadValidationBundle = saveLoadValidationBundle;
  protected parseProposedBundle = parseProposedBundle;
  protected validateBundleProposal = validateBundleProposal;

  // upload
  protected createBundleProposal = createBundleProposal;

  // main
  protected runNode = runNode;
  protected runCache = runCache;

  // factories
  protected cacheProviderFactory = cacheProviderFactory;
  protected storageProviderFactory = storageProviderFactory;
  protected compressionFactory = compressionFactory;

  // tests
  protected testStorageProvider = testStorageProvider;

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
        console.log(`Node version: ${process.version}`);
        console.log();
        console.log(`Platform: ${os.platform()}`);
        console.log(`Arch: ${os.arch()}`);
      });

    // define test command
    const test = program
      .command("test")
      .description("Test reactors independently");

    test
      .command("storage-provider")
      .description("Test a storage provider")
      .requiredOption(
        "--storage-provider-id <number>",
        "The ID storage provider"
      )
      .option(
        "--storage-priv <string>",
        "The environment variable pointing to the private key of the storage provider. Only required when using storage providers that require secrets"
      )
      .option(
        "--data <string>",
        'Test data to upload and retrieve (default "Hello World!")',
        "Hello World!"
      )
      .action((options) => {
        this.startTestStorageProvider(options);
      });

    // define start command
    program
      .command("start")
      .description("Run the protocol node")
      .requiredOption(
        "--pool <string>",
        "The ID of the pool this pool account should participate as a validator",
        parsePoolId
      )
      // TODO: make required in next version and remove --valaccount completely
      .option(
        "--pool-account <string>",
        "The environment variable pointing to the pool account mnemonic",
        parsePoolAccount
      )
      .option(
        "--valaccount <string>",
        "The environment variable pointing to the valaccount mnemonic (soon deprecated, use --pool-account instead)",
        parsePoolAccount
      )
      .requiredOption("--chain-id <string>", "The chain ID of the network")
      .requiredOption(
        "--rpc <string>",
        "Comma seperated list of rpc endpoints. If the first fails the next endpoint will be used as fallback.",
        parseEndpoints
      )
      .requiredOption(
        "--rest <string>",
        "Comma separated list of rest endpoints. If the first fails the next endpoint will be used as fallback.",
        parseEndpoints
      )
      .option(
        "--storage-priv <string>",
        "The environment variable pointing to the private key of the storage provider. Only required when using storage providers that require secrets"
      )
      .option(
        "--coin-denom <string>",
        "The denom of the coin, this value will be loaded by default based on the chain id"
      )
      .option(
        "--coin-decimals <number>",
        "The decimals of the coin, this value will be loaded by default based on the chain id"
      )
      .option(
        "--gas-price <number>",
        "The gas price the node should use to calculate transaction fees, this value will be loaded by default based on the chain id"
      )
      .option(
        "--request-backoff <number>",
        "The time in milliseconds between each getDataItem request where the node sleeps [default = 50]",
        "50"
      )
      .option(
        "--cache <jsonfile|memory>",
        "The cache this node should use",
        parseCache,
        "jsonfile"
      )
      .option("--debug", "Run the validator node in debug mode")
      .option(
        "--debug-max-size <number>",
        "The maximum size of the debug folder in bytes. Use zero to disable [default = 10737418240 (10GB)]",
        "10737418240"
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
      .option(
        "--skip-data-availability-check",
        "Skip data availability check and join pool instantly without waiting for the data source. WARNING: Only use this if you know what you are doing since this can lead to timeout slashes"
      )
      .option(
        "--dry-run",
        "Run the node without uploading or voting on bundles so the operator can test his setup before joining as a validator."
      )
      .option(
        "--dry-run-bundles <number>",
        "Specify the number of bundles that should be tested before the node properly exits. If zero the node will run indefinitely [default = 0]",
        "0"
      )
      .option(
        "--ensure-no-loss",
        "Ensures that the node only uploads bundles which can be fully rewarded by the protocol.",
        true
      )
      .option(
        "--scale-ensure-no-loss <number>",
        "Scales the maximum bytes which ensure no loss with this scale factor. E.g 0.5 would mean that you would only upload 50% of the bundle size that what you could normally upload with no loss, 0 to disable this.",
        "0"
      )
      .action((options) => {
        this.start(options);
      });

    // bootstrap program
    program.parse();
  }

  /**
   * This method will upload a small data item to the selected storage provider
   * and try to read it again. This command will exit after one round
   *
   * @method startTestStorageProvider
   * @param {OptionValues} options contains all node options defined in bootstrap
   * @return {Promise<void>}
   */
  private async startTestStorageProvider(options: OptionValues): Promise<void> {
    this.storagePriv = process.env[options.storagePriv] || "";
    this.pool = {
      data: {
        current_storage_provider_id: parseInt(options.storageProviderId),
      },
    } as PoolResponse;

    await this.testStorageProvider(options.data);
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
    // assign program options to node instance
    this.poolId = options.pool;
    this.poolAccount = options.poolAccount || options.valaccount;
    this.storagePriv = process.env[options.storagePriv] || "";
    this.chainId = options.chainId;
    this.rpc = options.rpc;
    this.rest = options.rest;
    this.coinDenom = options.coinDenom;
    this.coinDecimals = options.coinDecimals;
    this.gasPrice = options.gasPrice;
    this.requestBackoff = parseInt(options.requestBackoff);
    this.cache = options.cache;
    this.debug = options.debug;
    this.debugMaxSize = parseInt(options.debugMaxSize);
    this.metrics = options.metrics;
    this.metricsPort = parseInt(options.metricsPort);
    this.home = options.home;
    this.dryRun = options.dryRun;
    this.dryRunBundles = parseInt(options.dryRunBundles);
    this.ensureNoLoss = options.ensureNoLoss;
    this.scaleEnsureNoLoss = options.scaleEnsureNoLoss;

    if (!this.poolAccount) {
      this.logger.fatal(`Pool account not found. Exiting ...`);
      process.exit(1);
    }

    // name the log file after the time the node got started
    this.logFile = `${new Date().toISOString()}.log`;

    // perform setups
    this.setupLogger();
    this.setupMetrics();

    await this.setupSDK();
    await this.syncPoolState(true);

    if (!this.dryRun && (await this.isStorageBalanceZero())) {
      process.exit(1);
    }

    // by default we check if the first data items are available
    // to protect the node operator from timeout slashes due to
    // misconfiguration of the data source
    if (!options.skipDataAvailabilityCheck) {
      while (!(await this.isDataAvailable())) {
        await sleep(IDLE_TIME);
      }
    }

    if (!this.dryRun) {
      await this.setupValidator();
    }

    await this.setupCacheProvider();

    // start the node process. Validator and cache should run at the same time.
    // Thats why, although they are async they are called synchronously
    try {
      this.runNode();
      this.runCache();
    } catch (err) {
      this.logger.fatal(`Unexpected runtime error. Exiting ...`);
      this.logger.fatal(standardizeError(err));

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

// add this so we can JSON.stringify bignumbers
(BigInt.prototype as any).toJSON = function () {
  return this.toString();
};
