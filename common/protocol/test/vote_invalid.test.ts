import { Logger } from "tslog";
import {
  bundleToBytes,
  ICompression,
  IStorageProvider,
  Validator,
  sha256,
  standardizeJSON,
  VOTE,
} from "../src/index";
import { runNode } from "../src/methods/main/runNode";
import { genesis_pool } from "./mocks/constants";
import { client } from "./mocks/client.mock";
import { lcd } from "./mocks/lcd.mock";
import { TestCacheProvider } from "./mocks/cache.mock";
import { setupMetrics } from "../src/methods";
import { register } from "prom-client";
import { TestRuntime } from "./mocks/runtime.mock";
import { VoteType } from "@kyvejs/types/client/kyve/bundles/v1beta1/tx";
import { TestNormalStorageProvider } from "./mocks/storageProvider.mock";
import { TestNormalCompression } from "./mocks/compression.mock";

/*

TEST CASES - invalid votes tests

* vote invalid because runtime validate function returns false
* vote invalid because proposed data_size does not match
* vote invalid because proposed from_key does not match
* vote invalid because proposed to_key does not match
* vote invalid because proposed bundle_summary does not match
* vote invalid because proposed data_hash does not match
* try to vote invalid after validator has voted abstain bebore
* try to vote invalid after validator has voted invalid before
* try to vote invalid after validator has voted valid before
* vote invalid but local bundle could not be loaded in the first try
* vote invalid but bundle from storage provider could not be loaded in the first try
* try to vote invalid where voteBundleProposal fails

*/

describe("invalid votes tests", () => {
  let v: Validator;

  let processExit: jest.Mock<never, never>;
  let setTimeoutMock: jest.Mock;

  let storageProvider: IStorageProvider;
  let compression: ICompression;

  beforeEach(() => {
    v = new Validator(new TestRuntime());

    v["cacheProvider"] = new TestCacheProvider();

    // mock storage provider
    storageProvider = new TestNormalStorageProvider();
    v["storageProviderFactory"] = jest.fn().mockReturnValue(storageProvider);

    // mock compression
    compression = new TestNormalCompression();
    v["compressionFactory"] = jest.fn().mockReturnValue(compression);

    // mock archiveDebugBundle
    v["archiveDebugBundle"] = jest.fn();

    // mock process.exit
    processExit = jest.fn<never, never>();
    process.exit = processExit;

    // mock setTimeout
    setTimeoutMock = jest
      .fn()
      .mockImplementation(
        (
          callback: (args: void) => void,
          ms?: number | undefined
        ): NodeJS.Timeout => {
          callback();
          return null as any;
        }
      );
    global.setTimeout = setTimeoutMock as any;

    // mock logger
    v.logger = new Logger();

    v.logger.info = jest.fn();
    v.logger.debug = jest.fn();
    v.logger.warn = jest.fn();
    v.logger.error = jest.fn();

    v["poolId"] = 0;
    v["staker"] = "test_staker";

    v["rpc"] = ["http://0.0.0.0:26657"];
    v.client = [client()];

    v["rest"] = ["http://0.0.0.0:1317"];
    v.lcd = [lcd()];

    v["waitForNextBundleProposal"] = jest.fn();

    v["continueRound"] = jest
      .fn()
      .mockReturnValueOnce(true)
      .mockReturnValue(false);

    setupMetrics.call(v);
  });

  afterEach(() => {
    // reset prometheus
    register.clear();
  });

  test("vote invalid because runtime validate function returns false", async () => {
    // ARRANGE
    const validateBundleMock = jest.fn().mockResolvedValue(VOTE.INVALID);
    v["runtime"].validateDataItem = validateBundleMock;

    const bundle = [
      { key: "test_key_1", value: "test_value_1" },
      { key: "test_key_2", value: "test_value_2" },
    ];

    const bundleBytes = bundleToBytes(bundle);
    const compressedBundle = bundleBytes; // no compression
    const dataSize = compressedBundle.byteLength.toString();
    const dataHash = sha256(bundleBytes);

    v["syncPoolState"] = jest.fn().mockImplementation(() => {
      v.pool = {
        ...genesis_pool,
        bundle_proposal: {
          ...genesis_pool.bundle_proposal,
          storage_id: "another_test_storage_id",
          uploader: "another_test_staker",
          next_uploader: "another_test_staker",
          data_size: dataSize,
          data_hash: dataHash,
          bundle_size: "2",
          from_key: "test_key_1",
          to_key: "test_key_2",
          bundle_summary: JSON.stringify(bundle),
          updated_at: "0",
          voters_valid: ["another_test_staker"],
        },
      } as any;
    });

    v["cacheProvider"].get = jest
      .fn()
      .mockResolvedValueOnce({
        key: "test_key_1",
        value: "test_value_1",
      })
      .mockResolvedValueOnce({
        key: "test_key_2",
        value: "test_value_2",
      });

    // ACT
    await runNode.call(v);

    // ASSERT
    const txs = v["client"][0].kyve.bundles.v1beta1;
    const queries = v["lcd"][0].kyve.query.v1beta1;
    const cacheProvider = v["cacheProvider"];
    const runtime = v["runtime"];

    // ========================
    // ASSERT CLIENT INTERFACES
    // ========================

    expect(txs.claimUploaderRole).toHaveBeenCalledTimes(0);

    expect(txs.voteBundleProposal).toHaveBeenCalledTimes(1);
    expect(txs.voteBundleProposal).toHaveBeenLastCalledWith(
      {
        staker: "test_staker",
        pool_id: "0",
        storage_id: "another_test_storage_id",
        vote: VoteType.VOTE_TYPE_INVALID,
      },
      {
        fee: 1.6,
      }
    );

    expect(txs.submitBundleProposal).toHaveBeenCalledTimes(0);

    expect(txs.skipUploaderRole).toHaveBeenCalledTimes(0);

    // =====================
    // ASSERT LCD INTERFACES
    // =====================

    expect(queries.canVote).toHaveBeenCalledTimes(1);
    expect(queries.canVote).toHaveBeenLastCalledWith({
      staker: "test_staker",
      pool_id: "0",
      voter: "test_valaddress",
      storage_id: "another_test_storage_id",
    });

    expect(queries.canPropose).toHaveBeenCalledTimes(0);

    // =========================
    // ASSERT STORAGE INTERFACES
    // =========================

    expect(storageProvider.saveBundle).toHaveBeenCalledTimes(0);

    expect(storageProvider.retrieveBundle).toHaveBeenCalledTimes(1);
    expect(storageProvider.retrieveBundle).toHaveBeenLastCalledWith(
      "another_test_storage_id",
      (120 - 20) * 1000
    );

    // =======================
    // ASSERT CACHE INTERFACES
    // =======================

    expect(cacheProvider.get).toHaveBeenCalledTimes(2);
    expect(cacheProvider.get).toHaveBeenNthCalledWith(1, "0");
    expect(cacheProvider.get).toHaveBeenNthCalledWith(2, "1");

    // =============================
    // ASSERT COMPRESSION INTERFACES
    // =============================

    expect(compression.compress).toHaveBeenCalledTimes(0);

    expect(compression.decompress).toHaveBeenCalledTimes(1);
    expect(compression.decompress).toHaveBeenLastCalledWith(compressedBundle);

    // =============================
    // ASSERT INTEGRATION INTERFACES
    // =============================

    expect(runtime.summarizeDataBundle).toHaveBeenCalledTimes(0);

    expect(runtime.validateDataItem).toHaveBeenCalledTimes(1);

    expect(runtime.validateDataItem).toHaveBeenLastCalledWith(
      expect.any(Validator),
      standardizeJSON(bundle[0]),
      standardizeJSON(bundle[0])
    );

    // ========================
    // ASSERT NODEJS INTERFACES
    // ========================

    // assert that only one round ran
    expect(v["waitForNextBundleProposal"]).toHaveBeenCalledTimes(1);

    // TODO: assert timeouts
  });

  test("vote invalid because proposed data_size does not match", async () => {
    // ARRANGE
    const bundle = [
      { key: "test_key_1", value: "test_value_1" },
      { key: "test_key_2", value: "test_value_2" },
    ];

    const bundleBytes = bundleToBytes(bundle);
    const compressedBundle = bundleBytes; // no compression
    const dataSize = compressedBundle.byteLength.toString();
    const dataHash = sha256(bundleBytes);

    v["syncPoolState"] = jest.fn().mockImplementation(() => {
      v.pool = {
        ...genesis_pool,
        bundle_proposal: {
          ...genesis_pool.bundle_proposal,
          storage_id: "another_test_storage_id",
          uploader: "another_test_staker",
          next_uploader: "another_test_staker",
          data_hash: dataHash,
          data_size: "123456789",
          bundle_size: "2",
          from_key: "test_key_1",
          to_key: "test_key_2",
          bundleSummary: JSON.stringify(bundle),
          updated_at: "0",
          voters_valid: ["another_test_staker"],
        },
      } as any;
    });

    v["cacheProvider"].get = jest
      .fn()
      .mockResolvedValueOnce({
        key: "test_key_1",
        value: "test_value_1",
      })
      .mockResolvedValueOnce({
        key: "test_key_2",
        value: "test_value_2",
      });

    // ACT
    await runNode.call(v);

    // ASSERT
    const txs = v["client"][0].kyve.bundles.v1beta1;
    const queries = v["lcd"][0].kyve.query.v1beta1;
    const cacheProvider = v["cacheProvider"];
    const runtime = v["runtime"];

    // ========================
    // ASSERT CLIENT INTERFACES
    // ========================

    expect(txs.claimUploaderRole).toHaveBeenCalledTimes(0);

    expect(txs.voteBundleProposal).toHaveBeenCalledTimes(1);
    expect(txs.voteBundleProposal).toHaveBeenLastCalledWith(
      {
        staker: "test_staker",
        pool_id: "0",
        storage_id: "another_test_storage_id",
        vote: VoteType.VOTE_TYPE_INVALID,
      },
      {
        fee: 1.6,
      }
    );

    expect(txs.submitBundleProposal).toHaveBeenCalledTimes(0);

    expect(txs.skipUploaderRole).toHaveBeenCalledTimes(0);

    // =====================
    // ASSERT LCD INTERFACES
    // =====================

    expect(queries.canVote).toHaveBeenCalledTimes(1);
    expect(queries.canVote).toHaveBeenLastCalledWith({
      staker: "test_staker",
      pool_id: "0",
      voter: "test_valaddress",
      storage_id: "another_test_storage_id",
    });

    expect(queries.canPropose).toHaveBeenCalledTimes(0);

    // =========================
    // ASSERT STORAGE INTERFACES
    // =========================

    expect(storageProvider.saveBundle).toHaveBeenCalledTimes(0);

    expect(storageProvider.retrieveBundle).toHaveBeenCalledTimes(1);
    expect(storageProvider.retrieveBundle).toHaveBeenLastCalledWith(
      "another_test_storage_id",
      (120 - 20) * 1000
    );

    // =======================
    // ASSERT CACHE INTERFACES
    // =======================

    expect(cacheProvider.get).toHaveBeenCalledTimes(0);

    // =============================
    // ASSERT COMPRESSION INTERFACES
    // =============================

    expect(compression.compress).toHaveBeenCalledTimes(0);

    expect(compression.decompress).toHaveBeenCalledTimes(0);

    // =============================
    // ASSERT INTEGRATION INTERFACES
    // =============================

    expect(runtime.summarizeDataBundle).toHaveBeenCalledTimes(0);

    expect(runtime.validateDataItem).toHaveBeenCalledTimes(0);

    // ========================
    // ASSERT NODEJS INTERFACES
    // ========================

    // assert that only one round ran
    expect(v["waitForNextBundleProposal"]).toHaveBeenCalledTimes(1);

    // TODO: assert timeouts
  });

  test("vote invalid because proposed from_key does not match", async () => {
    // ARRANGE
    const bundle = [
      { key: "test_key_1", value: "test_value_1" },
      { key: "test_key_2", value: "test_value_2" },
    ];

    const bundleBytes = bundleToBytes(bundle);
    const compressedBundle = bundleBytes; // no compression
    const dataSize = compressedBundle.byteLength.toString();
    const dataHash = sha256(bundleBytes);

    v["syncPoolState"] = jest.fn().mockImplementation(() => {
      v.pool = {
        ...genesis_pool,
        bundle_proposal: {
          ...genesis_pool.bundle_proposal,
          storage_id: "another_test_storage_id",
          uploader: "another_test_staker",
          next_uploader: "another_test_staker",
          data_size: dataSize,
          data_hash: dataHash,
          bundle_size: "2",
          from_key: "invalid_from_key",
          to_key: "invalid_to_key",
          bundle_summary: JSON.stringify(bundle),
          updated_at: "0",
          voters_valid: ["another_test_staker"],
        },
      } as any;
    });

    v["cacheProvider"].get = jest
      .fn()
      .mockResolvedValueOnce({
        key: "test_key_1",
        value: "test_value_1",
      })
      .mockResolvedValueOnce({
        key: "test_key_2",
        value: "test_value_2",
      });

    // ACT
    await runNode.call(v);

    // ASSERT
    const txs = v["client"][0].kyve.bundles.v1beta1;
    const queries = v["lcd"][0].kyve.query.v1beta1;
    const cacheProvider = v["cacheProvider"];
    const runtime = v["runtime"];

    // ========================
    // ASSERT CLIENT INTERFACES
    // ========================

    expect(txs.claimUploaderRole).toHaveBeenCalledTimes(0);

    expect(txs.voteBundleProposal).toHaveBeenCalledTimes(1);
    expect(txs.voteBundleProposal).toHaveBeenLastCalledWith(
      {
        staker: "test_staker",
        pool_id: "0",
        storage_id: "another_test_storage_id",
        vote: VoteType.VOTE_TYPE_INVALID,
      },
      {
        fee: 1.6,
      }
    );

    expect(txs.submitBundleProposal).toHaveBeenCalledTimes(0);

    expect(txs.skipUploaderRole).toHaveBeenCalledTimes(0);

    // =====================
    // ASSERT LCD INTERFACES
    // =====================

    expect(queries.canVote).toHaveBeenCalledTimes(1);
    expect(queries.canVote).toHaveBeenLastCalledWith({
      staker: "test_staker",
      pool_id: "0",
      voter: "test_valaddress",
      storage_id: "another_test_storage_id",
    });

    expect(queries.canPropose).toHaveBeenCalledTimes(0);

    // =========================
    // ASSERT STORAGE INTERFACES
    // =========================

    expect(storageProvider.saveBundle).toHaveBeenCalledTimes(0);

    expect(storageProvider.retrieveBundle).toHaveBeenCalledTimes(1);
    expect(storageProvider.retrieveBundle).toHaveBeenLastCalledWith(
      "another_test_storage_id",
      (120 - 20) * 1000
    );

    // =======================
    // ASSERT CACHE INTERFACES
    // =======================

    expect(cacheProvider.get).toHaveBeenCalledTimes(2);
    expect(cacheProvider.get).toHaveBeenNthCalledWith(1, "0");
    expect(cacheProvider.get).toHaveBeenNthCalledWith(2, "1");

    // =============================
    // ASSERT COMPRESSION INTERFACES
    // =============================

    expect(compression.compress).toHaveBeenCalledTimes(0);

    expect(compression.decompress).toHaveBeenCalledTimes(0);

    // =============================
    // ASSERT INTEGRATION INTERFACES
    // =============================

    expect(runtime.summarizeDataBundle).toHaveBeenCalledTimes(0);

    expect(runtime.validateDataItem).toHaveBeenCalledTimes(0);

    // ========================
    // ASSERT NODEJS INTERFACES
    // ========================

    // assert that only one round ran
    expect(v["waitForNextBundleProposal"]).toHaveBeenCalledTimes(1);

    // TODO: assert timeouts
  });

  test("vote invalid because proposed to_key does not match", async () => {
    // ARRANGE
    const bundle = [
      { key: "test_key_1", value: "test_value_1" },
      { key: "test_key_2", value: "test_value_2" },
    ];

    const bundleBytes = bundleToBytes(bundle);
    const compressedBundle = bundleBytes; // no compression
    const dataSize = compressedBundle.byteLength.toString();
    const dataHash = sha256(bundleBytes);

    v["syncPoolState"] = jest.fn().mockImplementation(() => {
      v.pool = {
        ...genesis_pool,
        bundle_proposal: {
          ...genesis_pool.bundle_proposal,
          storage_id: "another_test_storage_id",
          uploader: "another_test_staker",
          next_uploader: "another_test_staker",
          data_size: dataSize,
          data_hash: dataHash,
          bundle_size: "2",
          from_key: "test_key_1",
          to_key: "invalid_to_key",
          bundle_summary: JSON.stringify(bundle),
          updated_at: "0",
          voters_valid: ["another_test_staker"],
        },
      } as any;
    });

    v["cacheProvider"].get = jest
      .fn()
      .mockResolvedValueOnce({
        key: "test_key_1",
        value: "test_value_1",
      })
      .mockResolvedValueOnce({
        key: "test_key_2",
        value: "test_value_2",
      });

    // ACT
    await runNode.call(v);

    // ASSERT
    const txs = v["client"][0].kyve.bundles.v1beta1;
    const queries = v["lcd"][0].kyve.query.v1beta1;
    const cacheProvider = v["cacheProvider"];
    const runtime = v["runtime"];

    // ========================
    // ASSERT CLIENT INTERFACES
    // ========================

    expect(txs.claimUploaderRole).toHaveBeenCalledTimes(0);

    expect(txs.voteBundleProposal).toHaveBeenCalledTimes(1);
    expect(txs.voteBundleProposal).toHaveBeenLastCalledWith(
      {
        staker: "test_staker",
        pool_id: "0",
        storage_id: "another_test_storage_id",
        vote: VoteType.VOTE_TYPE_INVALID,
      },
      {
        fee: 1.6,
      }
    );

    expect(txs.submitBundleProposal).toHaveBeenCalledTimes(0);

    expect(txs.skipUploaderRole).toHaveBeenCalledTimes(0);

    // =====================
    // ASSERT LCD INTERFACES
    // =====================

    expect(queries.canVote).toHaveBeenCalledTimes(1);
    expect(queries.canVote).toHaveBeenLastCalledWith({
      staker: "test_staker",
      pool_id: "0",
      voter: "test_valaddress",
      storage_id: "another_test_storage_id",
    });

    expect(queries.canPropose).toHaveBeenCalledTimes(0);

    // =========================
    // ASSERT STORAGE INTERFACES
    // =========================

    expect(storageProvider.saveBundle).toHaveBeenCalledTimes(0);

    expect(storageProvider.retrieveBundle).toHaveBeenCalledTimes(1);
    expect(storageProvider.retrieveBundle).toHaveBeenLastCalledWith(
      "another_test_storage_id",
      (120 - 20) * 1000
    );

    // =======================
    // ASSERT CACHE INTERFACES
    // =======================

    expect(cacheProvider.get).toHaveBeenCalledTimes(2);
    expect(cacheProvider.get).toHaveBeenNthCalledWith(1, "0");
    expect(cacheProvider.get).toHaveBeenNthCalledWith(2, "1");

    // =============================
    // ASSERT COMPRESSION INTERFACES
    // =============================

    expect(compression.compress).toHaveBeenCalledTimes(0);

    expect(compression.decompress).toHaveBeenCalledTimes(0);

    // =============================
    // ASSERT INTEGRATION INTERFACES
    // =============================

    expect(runtime.summarizeDataBundle).toHaveBeenCalledTimes(0);

    expect(runtime.validateDataItem).toHaveBeenCalledTimes(0);

    // ========================
    // ASSERT NODEJS INTERFACES
    // ========================

    // assert that only one round ran
    expect(v["waitForNextBundleProposal"]).toHaveBeenCalledTimes(1);

    // TODO: assert timeouts
  });

  test("vote invalid because proposed bundle_summary does not match", async () => {
    // ARRANGE
    const bundle = [
      { key: "test_key_1", value: "test_value_1" },
      { key: "test_key_2", value: "test_value_2" },
    ];

    const bundleBytes = bundleToBytes(bundle);
    const compressedBundle = bundleBytes; // no compression
    const dataSize = compressedBundle.byteLength.toString();
    const dataHash = sha256(bundleBytes);

    v["syncPoolState"] = jest.fn().mockImplementation(() => {
      v.pool = {
        ...genesis_pool,
        bundle_proposal: {
          ...genesis_pool.bundle_proposal,
          storage_id: "another_test_storage_id",
          uploader: "another_test_staker",
          next_uploader: "another_test_staker",
          data_size: dataSize,
          data_hash: dataHash,
          bundle_size: "2",
          from_key: "test_key_1",
          to_key: "test_key_2",
          bundle_summary: "invalid_test_value",
          updated_at: "0",
          voters_valid: ["another_test_staker"],
        },
      } as any;
    });

    v["cacheProvider"].get = jest
      .fn()
      .mockResolvedValueOnce({
        key: "test_key_1",
        value: "test_value_1",
      })
      .mockResolvedValueOnce({
        key: "test_key_2",
        value: "test_value_2",
      });

    // ACT
    await runNode.call(v);

    // ASSERT
    const txs = v["client"][0].kyve.bundles.v1beta1;
    const queries = v["lcd"][0].kyve.query.v1beta1;
    const cacheProvider = v["cacheProvider"];
    const runtime = v["runtime"];

    // ========================
    // ASSERT CLIENT INTERFACES
    // ========================

    expect(txs.claimUploaderRole).toHaveBeenCalledTimes(0);

    expect(txs.voteBundleProposal).toHaveBeenCalledTimes(1);
    expect(txs.voteBundleProposal).toHaveBeenLastCalledWith(
      {
        staker: "test_staker",
        pool_id: "0",
        storage_id: "another_test_storage_id",
        vote: VoteType.VOTE_TYPE_INVALID,
      },
      {
        fee: 1.6,
      }
    );

    expect(txs.submitBundleProposal).toHaveBeenCalledTimes(0);

    expect(txs.skipUploaderRole).toHaveBeenCalledTimes(0);

    // =====================
    // ASSERT LCD INTERFACES
    // =====================

    expect(queries.canVote).toHaveBeenCalledTimes(1);
    expect(queries.canVote).toHaveBeenLastCalledWith({
      staker: "test_staker",
      pool_id: "0",
      voter: "test_valaddress",
      storage_id: "another_test_storage_id",
    });

    expect(queries.canPropose).toHaveBeenCalledTimes(0);

    // =========================
    // ASSERT STORAGE INTERFACES
    // =========================

    expect(storageProvider.saveBundle).toHaveBeenCalledTimes(0);

    expect(storageProvider.retrieveBundle).toHaveBeenCalledTimes(1);
    expect(storageProvider.retrieveBundle).toHaveBeenLastCalledWith(
      "another_test_storage_id",
      (120 - 20) * 1000
    );

    // =======================
    // ASSERT CACHE INTERFACES
    // =======================

    expect(cacheProvider.get).toHaveBeenCalledTimes(2);
    expect(cacheProvider.get).toHaveBeenNthCalledWith(1, "0");
    expect(cacheProvider.get).toHaveBeenNthCalledWith(2, "1");

    // =============================
    // ASSERT COMPRESSION INTERFACES
    // =============================

    expect(compression.compress).toHaveBeenCalledTimes(0);

    expect(compression.decompress).toHaveBeenCalledTimes(1);
    expect(compression.decompress).toHaveBeenLastCalledWith(compressedBundle);

    // =============================
    // ASSERT INTEGRATION INTERFACES
    // =============================

    expect(runtime.summarizeDataBundle).toHaveBeenCalledTimes(1);
    expect(runtime.summarizeDataBundle).toHaveBeenLastCalledWith(
      expect.any(Validator),
      bundle
    );

    expect(runtime.validateDataItem).toHaveBeenCalledTimes(2);

    expect(runtime.validateDataItem).toHaveBeenNthCalledWith(
      1,
      expect.any(Validator),
      standardizeJSON(bundle[0]),
      standardizeJSON(bundle[0])
    );
    expect(runtime.validateDataItem).toHaveBeenNthCalledWith(
      2,
      expect.any(Validator),
      standardizeJSON(bundle[1]),
      standardizeJSON(bundle[1])
    );

    // ========================
    // ASSERT NODEJS INTERFACES
    // ========================

    // assert that only one round ran
    expect(v["waitForNextBundleProposal"]).toHaveBeenCalledTimes(1);

    // TODO: assert timeouts
  });

  test("vote abstain because proposed data_hash does not match", async () => {
    // ARRANGE
    const bundle = [
      { key: "test_key_1", value: "test_value_1" },
      { key: "test_key_2", value: "test_value_2" },
    ];

    const bundleBytes = bundleToBytes(bundle);
    const compressedBundle = bundleBytes; // no compression
    const dataSize = compressedBundle.byteLength.toString();
    const dataHash = sha256(bundleBytes);

    v["syncPoolState"] = jest.fn().mockImplementation(() => {
      v.pool = {
        ...genesis_pool,
        bundle_proposal: {
          ...genesis_pool.bundle_proposal,
          storage_id: "another_test_storage_id",
          uploader: "another_test_staker",
          next_uploader: "another_test_staker",
          data_size: dataSize,
          data_hash: "invalid_bundle_hash",
          bundle_size: "2",
          from_key: "test_key_1",
          to_key: "test_key_2",
          bundle_summary: "test_value_2",
          updated_at: "0",
          voters_valid: ["another_test_staker"],
        },
      } as any;
    });

    v["cacheProvider"].get = jest
      .fn()
      .mockResolvedValueOnce({
        key: "test_key_1",
        value: "test_value_1",
      })
      .mockResolvedValueOnce({
        key: "test_key_2",
        value: "test_value_2",
      });

    // ACT
    await runNode.call(v);

    // ASSERT
    const txs = v["client"][0].kyve.bundles.v1beta1;
    const queries = v["lcd"][0].kyve.query.v1beta1;
    const cacheProvider = v["cacheProvider"];
    const runtime = v["runtime"];

    // ========================
    // ASSERT CLIENT INTERFACES
    // ========================

    expect(txs.claimUploaderRole).toHaveBeenCalledTimes(0);

    expect(txs.voteBundleProposal).toHaveBeenCalledTimes(1);
    expect(txs.voteBundleProposal).toHaveBeenLastCalledWith(
      {
        staker: "test_staker",
        pool_id: "0",
        storage_id: "another_test_storage_id",
        vote: VoteType.VOTE_TYPE_ABSTAIN,
      },
      {
        fee: 1.6,
      }
    );

    expect(txs.submitBundleProposal).toHaveBeenCalledTimes(0);

    expect(txs.skipUploaderRole).toHaveBeenCalledTimes(0);

    // =====================
    // ASSERT LCD INTERFACES
    // =====================

    expect(queries.canVote).toHaveBeenCalledTimes(1);
    expect(queries.canVote).toHaveBeenLastCalledWith({
      staker: "test_staker",
      pool_id: "0",
      voter: "test_valaddress",
      storage_id: "another_test_storage_id",
    });

    expect(queries.canPropose).toHaveBeenCalledTimes(0);

    // =========================
    // ASSERT STORAGE INTERFACES
    // =========================

    expect(storageProvider.saveBundle).toHaveBeenCalledTimes(0);

    expect(storageProvider.retrieveBundle).toHaveBeenCalledTimes(1);
    expect(storageProvider.retrieveBundle).toHaveBeenLastCalledWith(
      "another_test_storage_id",
      (120 - 20) * 1000
    );

    // =======================
    // ASSERT CACHE INTERFACES
    // =======================

    expect(cacheProvider.get).toHaveBeenCalledTimes(0);

    // =============================
    // ASSERT COMPRESSION INTERFACES
    // =============================

    expect(compression.compress).toHaveBeenCalledTimes(0);

    expect(compression.decompress).toHaveBeenCalledTimes(0);

    // =============================
    // ASSERT INTEGRATION INTERFACES
    // =============================

    expect(runtime.summarizeDataBundle).toHaveBeenCalledTimes(0);

    expect(runtime.validateDataItem).toHaveBeenCalledTimes(0);

    // ========================
    // ASSERT NODEJS INTERFACES
    // ========================

    // assert that only one round ran
    expect(v["waitForNextBundleProposal"]).toHaveBeenCalledTimes(1);

    // TODO: assert timeouts
  });

  test("try to vote invalid after validator has voted abstain bebore", async () => {
    // ARRANGE
    const validateBundleMock = jest.fn().mockResolvedValue(VOTE.INVALID);

    v["runtime"].validateDataItem = validateBundleMock;

    const bundle = [
      { key: "test_key_1", value: "test_value_1" },
      { key: "test_key_2", value: "test_value_2" },
    ];

    const bundleBytes = bundleToBytes(bundle);
    const compressedBundle = bundleBytes; // no compression
    const dataSize = compressedBundle.byteLength.toString();
    const dataHash = sha256(bundleBytes);

    v["syncPoolState"] = jest.fn().mockImplementation(() => {
      v.pool = {
        ...genesis_pool,
        bundle_proposal: {
          ...genesis_pool.bundle_proposal,
          storage_id: "another_test_storage_id",
          uploader: "another_test_staker",
          next_uploader: "another_test_staker",
          data_size: dataSize,
          data_hash: dataHash,
          bundle_size: "2",
          from_key: "test_key_1",
          to_key: "test_key_2",
          bundle_summary: JSON.stringify(bundle),
          updated_at: "0",
          voters_valid: ["another_test_staker"],
          voters_abstain: ["test_staker"],
        },
      } as any;
    });

    v["cacheProvider"].get = jest
      .fn()
      .mockResolvedValueOnce({
        key: "test_key_1",
        value: "test_value_1",
      })
      .mockResolvedValueOnce({
        key: "test_key_2",
        value: "test_value_2",
      });

    // ACT
    await runNode.call(v);

    // ASSERT
    const txs = v["client"][0].kyve.bundles.v1beta1;
    const queries = v["lcd"][0].kyve.query.v1beta1;
    const cacheProvider = v["cacheProvider"];
    const runtime = v["runtime"];

    // ========================
    // ASSERT CLIENT INTERFACES
    // ========================

    expect(txs.claimUploaderRole).toHaveBeenCalledTimes(0);

    expect(txs.voteBundleProposal).toHaveBeenCalledTimes(1);
    expect(txs.voteBundleProposal).toHaveBeenLastCalledWith(
      {
        staker: "test_staker",
        pool_id: "0",
        storage_id: "another_test_storage_id",
        vote: VoteType.VOTE_TYPE_INVALID,
      },
      {
        fee: 1.6,
      }
    );

    expect(txs.submitBundleProposal).toHaveBeenCalledTimes(0);

    expect(txs.skipUploaderRole).toHaveBeenCalledTimes(0);

    // =====================
    // ASSERT LCD INTERFACES
    // =====================

    expect(queries.canVote).toHaveBeenCalledTimes(1);
    expect(queries.canVote).toHaveBeenLastCalledWith({
      staker: "test_staker",
      pool_id: "0",
      voter: "test_valaddress",
      storage_id: "another_test_storage_id",
    });

    expect(queries.canPropose).toHaveBeenCalledTimes(0);

    // =========================
    // ASSERT STORAGE INTERFACES
    // =========================

    expect(storageProvider.saveBundle).toHaveBeenCalledTimes(0);

    expect(storageProvider.retrieveBundle).toHaveBeenCalledTimes(1);
    expect(storageProvider.retrieveBundle).toHaveBeenLastCalledWith(
      "another_test_storage_id",
      (120 - 20) * 1000
    );

    // =======================
    // ASSERT CACHE INTERFACES
    // =======================

    expect(cacheProvider.get).toHaveBeenCalledTimes(2);
    expect(cacheProvider.get).toHaveBeenNthCalledWith(1, "0");
    expect(cacheProvider.get).toHaveBeenNthCalledWith(2, "1");

    // =============================
    // ASSERT COMPRESSION INTERFACES
    // =============================

    expect(compression.compress).toHaveBeenCalledTimes(0);

    expect(compression.decompress).toHaveBeenCalledTimes(1);
    expect(compression.decompress).toHaveBeenLastCalledWith(compressedBundle);

    // =============================
    // ASSERT INTEGRATION INTERFACES
    // =============================

    expect(runtime.summarizeDataBundle).toHaveBeenCalledTimes(0);

    expect(runtime.validateDataItem).toHaveBeenCalledTimes(1);

    expect(runtime.validateDataItem).toHaveBeenLastCalledWith(
      expect.any(Validator),
      standardizeJSON(bundle[0]),
      standardizeJSON(bundle[0])
    );

    // ========================
    // ASSERT NODEJS INTERFACES
    // ========================

    // assert that only one round ran
    expect(v["waitForNextBundleProposal"]).toHaveBeenCalledTimes(1);

    // TODO: assert timeouts
  });

  test("try to vote invalid after validator has voted invalid before", async () => {
    // ARRANGE
    const validateBundleMock = jest.fn().mockResolvedValue(VOTE.INVALID);

    v["runtime"].validateDataItem = validateBundleMock;

    const canVoteMock = jest.fn().mockResolvedValue({
      possible: false,
      reaseon: "already voted invalid",
    });

    v["lcd"][0].kyve.query.v1beta1.canVote = canVoteMock;

    const bundle = [
      { key: "test_key_1", value: "test_value_1" },
      { key: "test_key_2", value: "test_value_2" },
    ];

    const bundleBytes = bundleToBytes(bundle);
    const compressedBundle = bundleBytes; // no compression
    const dataSize = compressedBundle.byteLength.toString();
    const dataHash = sha256(bundleBytes);

    v["syncPoolState"] = jest.fn().mockImplementation(() => {
      v.pool = {
        ...genesis_pool,
        bundle_proposal: {
          ...genesis_pool.bundle_proposal,
          storage_id: "another_test_storage_id",
          uploader: "another_test_staker",
          next_uploader: "another_test_staker",
          data_size: dataSize,
          data_hash: dataHash,
          bundle_size: "2",
          from_key: "test_key_1",
          to_key: "test_key_2",
          bundle_summary: JSON.stringify(bundle),
          updated_at: "0",
          voters_valid: ["another_test_staker"],
          voters_invalid: ["test_staker"],
        },
      } as any;
    });

    v["cacheProvider"].get = jest
      .fn()
      .mockResolvedValueOnce({
        key: "test_key_1",
        value: "test_value_1",
      })
      .mockResolvedValueOnce({
        key: "test_key_2",
        value: "test_value_2",
      });

    // ACT
    await runNode.call(v);

    // ASSERT
    const txs = v["client"][0].kyve.bundles.v1beta1;
    const queries = v["lcd"][0].kyve.query.v1beta1;
    const cacheProvider = v["cacheProvider"];
    const runtime = v["runtime"];

    // ========================
    // ASSERT CLIENT INTERFACES
    // ========================

    expect(txs.claimUploaderRole).toHaveBeenCalledTimes(0);

    expect(txs.voteBundleProposal).toHaveBeenCalledTimes(0);

    expect(txs.submitBundleProposal).toHaveBeenCalledTimes(0);

    expect(txs.skipUploaderRole).toHaveBeenCalledTimes(0);

    // =====================
    // ASSERT LCD INTERFACES
    // =====================

    expect(queries.canVote).toHaveBeenCalledTimes(1);
    expect(queries.canVote).toHaveBeenLastCalledWith({
      staker: "test_staker",
      pool_id: "0",
      voter: "test_valaddress",
      storage_id: "another_test_storage_id",
    });

    expect(queries.canPropose).toHaveBeenCalledTimes(0);

    // =========================
    // ASSERT STORAGE INTERFACES
    // =========================

    expect(storageProvider.saveBundle).toHaveBeenCalledTimes(0);

    expect(storageProvider.retrieveBundle).toHaveBeenCalledTimes(0);

    // =======================
    // ASSERT CACHE INTERFACES
    // =======================

    expect(cacheProvider.get).toHaveBeenCalledTimes(0);

    // =============================
    // ASSERT COMPRESSION INTERFACES
    // =============================

    expect(compression.compress).toHaveBeenCalledTimes(0);

    expect(compression.decompress).toHaveBeenCalledTimes(0);

    // =============================
    // ASSERT INTEGRATION INTERFACES
    // =============================

    expect(runtime.summarizeDataBundle).toHaveBeenCalledTimes(0);

    expect(runtime.validateDataItem).toHaveBeenCalledTimes(0);

    // ========================
    // ASSERT NODEJS INTERFACES
    // ========================

    // assert that only one round ran
    expect(v["waitForNextBundleProposal"]).toHaveBeenCalledTimes(1);

    // TODO: assert timeouts
  });

  test("try to vote invalid after validator has voted valid before", async () => {
    // ARRANGE
    const validateBundleMock = jest.fn().mockResolvedValue(VOTE.INVALID);

    v["runtime"].validateDataItem = validateBundleMock;

    const canVoteMock = jest.fn().mockResolvedValue({
      possible: false,
      reaseon: "already voted valid",
    });
    v["lcd"][0].kyve.query.v1beta1.canVote = canVoteMock;

    const bundle = [
      { key: "test_key_1", value: "test_value_1" },
      { key: "test_key_2", value: "test_value_2" },
    ];

    const bundleBytes = bundleToBytes(bundle);
    const compressedBundle = bundleBytes; // no compression
    const dataSize = compressedBundle.byteLength.toString();
    const dataHash = sha256(bundleBytes);

    v["syncPoolState"] = jest.fn().mockImplementation(() => {
      v.pool = {
        ...genesis_pool,
        bundle_proposal: {
          ...genesis_pool.bundle_proposal,
          storage_id: "another_test_storage_id",
          uploader: "another_test_staker",
          next_uploader: "another_test_staker",
          data_size: dataSize,
          data_hash: dataHash,
          bundle_size: "2",
          from_key: "test_key_1",
          to_key: "test_key_2",
          bundle_summary: JSON.stringify(bundle),
          updated_at: "0",
          voters_valid: ["another_test_staker", "test_staker"],
        },
      } as any;
    });

    v["cacheProvider"].get = jest
      .fn()
      .mockResolvedValueOnce({
        key: "test_key_1",
        value: "test_value_1",
      })
      .mockResolvedValueOnce({
        key: "test_key_2",
        value: "test_value_2",
      });

    // ACT
    await runNode.call(v);

    // ASSERT
    const txs = v["client"][0].kyve.bundles.v1beta1;
    const queries = v["lcd"][0].kyve.query.v1beta1;
    const cacheProvider = v["cacheProvider"];
    const runtime = v["runtime"];

    // ========================
    // ASSERT CLIENT INTERFACES
    // ========================

    expect(txs.claimUploaderRole).toHaveBeenCalledTimes(0);

    expect(txs.voteBundleProposal).toHaveBeenCalledTimes(0);

    expect(txs.submitBundleProposal).toHaveBeenCalledTimes(0);

    expect(txs.skipUploaderRole).toHaveBeenCalledTimes(0);

    // =====================
    // ASSERT LCD INTERFACES
    // =====================

    expect(queries.canVote).toHaveBeenCalledTimes(1);
    expect(queries.canVote).toHaveBeenLastCalledWith({
      staker: "test_staker",
      pool_id: "0",
      voter: "test_valaddress",
      storage_id: "another_test_storage_id",
    });

    expect(queries.canPropose).toHaveBeenCalledTimes(0);

    // =========================
    // ASSERT STORAGE INTERFACES
    // =========================

    expect(storageProvider.saveBundle).toHaveBeenCalledTimes(0);

    expect(storageProvider.retrieveBundle).toHaveBeenCalledTimes(0);

    // =======================
    // ASSERT CACHE INTERFACES
    // =======================

    expect(cacheProvider.get).toHaveBeenCalledTimes(0);

    // =============================
    // ASSERT COMPRESSION INTERFACES
    // =============================

    expect(compression.compress).toHaveBeenCalledTimes(0);

    expect(compression.decompress).toHaveBeenCalledTimes(0);

    // =============================
    // ASSERT INTEGRATION INTERFACES
    // =============================

    expect(runtime.summarizeDataBundle).toHaveBeenCalledTimes(0);

    expect(runtime.validateDataItem).toHaveBeenCalledTimes(0);

    // ========================
    // ASSERT NODEJS INTERFACES
    // ========================

    // assert that only one round ran
    expect(v["waitForNextBundleProposal"]).toHaveBeenCalledTimes(1);

    // TODO: assert timeouts
  });

  test("vote invalid but local bundle could not be loaded in the first try", async () => {
    // ARRANGE
    v["runtime"].validateDataItem = jest.fn().mockResolvedValue(VOTE.INVALID);

    const bundle = [
      { key: "test_key_1", value: "test_value_1" },
      { key: "test_key_2", value: "test_value_2" },
    ];

    const bundleBytes = bundleToBytes(bundle);
    const compressedBundle = bundleBytes; // no compression
    const dataSize = compressedBundle.byteLength.toString();
    const dataHash = sha256(bundleBytes);

    v["syncPoolState"] = jest.fn().mockImplementation(() => {
      v.pool = {
        ...genesis_pool,
        bundle_proposal: {
          ...genesis_pool.bundle_proposal,
          storage_id: "another_test_storage_id",
          uploader: "another_test_staker",
          next_uploader: "another_test_staker",
          data_size: dataSize,
          data_hash: dataHash,
          bundle_size: "2",
          from_key: "test_key_1",
          to_key: "test_key_2",
          bundle_summary: JSON.stringify(bundle),
          updated_at: "0",
          voters_valid: ["another_test_staker"],
        },
      } as any;
    });

    v["cacheProvider"].get = jest
      .fn()
      .mockRejectedValueOnce(new Error("not found"))
      .mockResolvedValueOnce({
        key: "test_key_1",
        value: "test_value_1",
      })
      .mockResolvedValueOnce({
        key: "test_key_2",
        value: "test_value_2",
      });

    // ACT
    await runNode.call(v);

    // ASSERT
    const txs = v["client"][0].kyve.bundles.v1beta1;
    const queries = v["lcd"][0].kyve.query.v1beta1;
    const cacheProvider = v["cacheProvider"];
    const runtime = v["runtime"];

    // ========================
    // ASSERT CLIENT INTERFACES
    // ========================

    expect(txs.claimUploaderRole).toHaveBeenCalledTimes(0);

    expect(txs.voteBundleProposal).toHaveBeenCalledTimes(2);
    expect(txs.voteBundleProposal).toHaveBeenNthCalledWith(
      1,
      {
        staker: "test_staker",
        pool_id: "0",
        storage_id: "another_test_storage_id",
        vote: VoteType.VOTE_TYPE_ABSTAIN,
      },
      {
        fee: 1.6,
      }
    );
    expect(txs.voteBundleProposal).toHaveBeenNthCalledWith(
      2,
      {
        staker: "test_staker",
        pool_id: "0",
        storage_id: "another_test_storage_id",
        vote: VoteType.VOTE_TYPE_INVALID,
      },
      {
        fee: 1.6,
      }
    );

    expect(txs.submitBundleProposal).toHaveBeenCalledTimes(0);

    expect(txs.skipUploaderRole).toHaveBeenCalledTimes(0);

    // =====================
    // ASSERT LCD INTERFACES
    // =====================

    expect(queries.canVote).toHaveBeenCalledTimes(1);
    expect(queries.canVote).toHaveBeenLastCalledWith({
      staker: "test_staker",
      pool_id: "0",
      voter: "test_valaddress",
      storage_id: "another_test_storage_id",
    });

    expect(queries.canPropose).toHaveBeenCalledTimes(0);

    // =========================
    // ASSERT STORAGE INTERFACES
    // =========================

    expect(storageProvider.saveBundle).toHaveBeenCalledTimes(0);

    expect(storageProvider.retrieveBundle).toHaveBeenCalledTimes(1);
    expect(storageProvider.retrieveBundle).toHaveBeenLastCalledWith(
      "another_test_storage_id",
      (120 - 20) * 1000
    );

    // =======================
    // ASSERT CACHE INTERFACES
    // =======================

    expect(cacheProvider.get).toHaveBeenCalledTimes(3);
    expect(cacheProvider.get).toHaveBeenNthCalledWith(1, "0");
    expect(cacheProvider.get).toHaveBeenNthCalledWith(2, "0");
    expect(cacheProvider.get).toHaveBeenNthCalledWith(3, "1");

    // =============================
    // ASSERT COMPRESSION INTERFACES
    // =============================

    expect(compression.compress).toHaveBeenCalledTimes(0);

    expect(compression.decompress).toHaveBeenCalledTimes(1);
    expect(compression.decompress).toHaveBeenLastCalledWith(compressedBundle);

    // =============================
    // ASSERT INTEGRATION INTERFACES
    // =============================

    expect(runtime.summarizeDataBundle).toHaveBeenCalledTimes(0);

    expect(runtime.validateDataItem).toHaveBeenCalledTimes(1);

    expect(runtime.validateDataItem).toHaveBeenLastCalledWith(
      expect.any(Validator),
      standardizeJSON(bundle[0]),
      standardizeJSON(bundle[0])
    );

    // ========================
    // ASSERT NODEJS INTERFACES
    // ========================

    // assert that only one round ran
    expect(v["waitForNextBundleProposal"]).toHaveBeenCalledTimes(1);

    // TODO: assert timeouts
  });

  test("vote invalid but bundle from storage provider could not be loaded in the first try", async () => {
    // ARRANGE
    v["runtime"].validateDataItem = jest.fn().mockResolvedValue(VOTE.INVALID);

    const bundle = [
      { key: "test_key_1", value: "test_value_1" },
      { key: "test_key_2", value: "test_value_2" },
    ];

    const bundleBytes = bundleToBytes(bundle);
    const compressedBundle = bundleBytes; // no compression
    const dataSize = compressedBundle.byteLength.toString();
    const dataHash = sha256(bundleBytes);

    v["syncPoolState"] = jest.fn().mockImplementation(() => {
      v.pool = {
        ...genesis_pool,
        bundle_proposal: {
          ...genesis_pool.bundle_proposal,
          storage_id: "another_test_storage_id",
          uploader: "another_test_staker",
          next_uploader: "another_test_staker",
          data_size: dataSize,
          data_hash: dataHash,
          bundle_size: "2",
          from_key: "test_key_1",
          to_key: "test_key_2",
          bundle_summary: JSON.stringify(bundle),
          updated_at: "0",
          voters_valid: ["another_test_staker"],
        },
      } as any;
    });

    v["cacheProvider"].get = jest
      .fn()
      .mockResolvedValueOnce({
        key: "test_key_1",
        value: "test_value_1",
      })
      .mockResolvedValueOnce({
        key: "test_key_2",
        value: "test_value_2",
      });

    storageProvider.retrieveBundle = jest
      .fn()
      .mockRejectedValueOnce(new Error())
      .mockResolvedValue({
        storageId: "test_storage_id",
        storageData: compressedBundle,
      });

    // ACT
    await runNode.call(v);

    // ASSERT
    const txs = v["client"][0].kyve.bundles.v1beta1;
    const queries = v["lcd"][0].kyve.query.v1beta1;
    const cacheProvider = v["cacheProvider"];
    const runtime = v["runtime"];

    // ========================
    // ASSERT CLIENT INTERFACES
    // ========================

    expect(txs.claimUploaderRole).toHaveBeenCalledTimes(0);

    expect(txs.voteBundleProposal).toHaveBeenCalledTimes(2);
    expect(txs.voteBundleProposal).toHaveBeenNthCalledWith(
      1,
      {
        staker: "test_staker",
        pool_id: "0",
        storage_id: "another_test_storage_id",
        vote: VoteType.VOTE_TYPE_ABSTAIN,
      },
      {
        fee: 1.6,
      }
    );
    expect(txs.voteBundleProposal).toHaveBeenNthCalledWith(
      2,
      {
        staker: "test_staker",
        pool_id: "0",
        storage_id: "another_test_storage_id",
        vote: VoteType.VOTE_TYPE_INVALID,
      },
      {
        fee: 1.6,
      }
    );

    expect(txs.submitBundleProposal).toHaveBeenCalledTimes(0);

    expect(txs.skipUploaderRole).toHaveBeenCalledTimes(0);

    // =====================
    // ASSERT LCD INTERFACES
    // =====================

    expect(queries.canVote).toHaveBeenCalledTimes(1);
    expect(queries.canVote).toHaveBeenLastCalledWith({
      staker: "test_staker",
      pool_id: "0",
      voter: "test_valaddress",
      storage_id: "another_test_storage_id",
    });

    expect(queries.canPropose).toHaveBeenCalledTimes(0);

    // =========================
    // ASSERT STORAGE INTERFACES
    // =========================

    expect(storageProvider.saveBundle).toHaveBeenCalledTimes(0);

    expect(storageProvider.retrieveBundle).toHaveBeenCalledTimes(2);
    expect(storageProvider.retrieveBundle).toHaveBeenNthCalledWith(
      1,
      "another_test_storage_id",
      (120 - 20) * 1000
    );
    expect(storageProvider.retrieveBundle).toHaveBeenNthCalledWith(
      2,
      "another_test_storage_id",
      (120 - 20) * 1000
    );

    // =======================
    // ASSERT CACHE INTERFACES
    // =======================

    expect(cacheProvider.get).toHaveBeenCalledTimes(2);
    expect(cacheProvider.get).toHaveBeenNthCalledWith(1, "0");
    expect(cacheProvider.get).toHaveBeenNthCalledWith(2, "1");

    // =============================
    // ASSERT COMPRESSION INTERFACES
    // =============================

    expect(compression.compress).toHaveBeenCalledTimes(0);

    expect(compression.decompress).toHaveBeenCalledTimes(1);
    expect(compression.decompress).toHaveBeenLastCalledWith(compressedBundle);

    // =============================
    // ASSERT INTEGRATION INTERFACES
    // =============================

    expect(runtime.summarizeDataBundle).toHaveBeenCalledTimes(0);

    expect(runtime.validateDataItem).toHaveBeenCalledTimes(1);

    expect(runtime.validateDataItem).toHaveBeenLastCalledWith(
      expect.any(Validator),
      standardizeJSON(bundle[0]),
      standardizeJSON(bundle[0])
    );

    // ========================
    // ASSERT NODEJS INTERFACES
    // ========================

    // assert that only one round ran
    expect(v["waitForNextBundleProposal"]).toHaveBeenCalledTimes(1);

    // TODO: assert timeouts
  });

  test("try to vote invalid where voteBundleProposal fails", async () => {
    // ARRANGE
    v["continueRound"] = jest
      .fn()
      .mockReturnValueOnce(true)
      .mockReturnValueOnce(true)
      .mockReturnValue(false);

    v["runtime"].validateDataItem = jest.fn().mockResolvedValue(VOTE.INVALID);

    v["client"][0].kyve.bundles.v1beta1.voteBundleProposal = jest
      .fn()
      .mockRejectedValueOnce(new Error())
      .mockResolvedValue({
        txHash: "vote_bundle_proposal_test_hash",
        execute: jest.fn().mockResolvedValue({
          code: 0,
        }),
      });

    const bundle = [
      { key: "test_key_1", value: "test_value_1" },
      { key: "test_key_2", value: "test_value_2" },
    ];

    const bundleBytes = bundleToBytes(bundle);
    const compressedBundle = bundleBytes; // no compression
    const dataSize = compressedBundle.byteLength.toString();
    const dataHash = sha256(bundleBytes);

    v["syncPoolState"] = jest.fn().mockImplementation(() => {
      v.pool = {
        ...genesis_pool,
        bundle_proposal: {
          ...genesis_pool.bundle_proposal,
          storage_id: "another_test_storage_id",
          uploader: "another_test_staker",
          next_uploader: "another_test_staker",
          data_size: dataSize,
          data_hash: dataHash,
          bundle_size: "2",
          from_key: "test_key_1",
          to_key: "test_key_2",
          bundle_summary: JSON.stringify(bundle),
          updated_at: "0",
          voters_valid: ["another_test_staker"],
        },
      } as any;
    });

    v["cacheProvider"].get = jest
      .fn()
      .mockResolvedValueOnce({
        key: "test_key_1",
        value: "test_value_1",
      })
      .mockResolvedValueOnce({
        key: "test_key_2",
        value: "test_value_2",
      })
      .mockResolvedValueOnce({
        key: "test_key_1",
        value: "test_value_1",
      })
      .mockResolvedValueOnce({
        key: "test_key_2",
        value: "test_value_2",
      });

    // ACT
    await runNode.call(v);

    // ASSERT
    const txs = v["client"][0].kyve.bundles.v1beta1;
    const queries = v["lcd"][0].kyve.query.v1beta1;
    const cacheProvider = v["cacheProvider"];
    const runtime = v["runtime"];

    // ========================
    // ASSERT CLIENT INTERFACES
    // ========================

    expect(txs.claimUploaderRole).toHaveBeenCalledTimes(0);

    expect(txs.voteBundleProposal).toHaveBeenCalledTimes(2);
    expect(txs.voteBundleProposal).toHaveBeenNthCalledWith(
      1,
      {
        staker: "test_staker",
        pool_id: "0",
        storage_id: "another_test_storage_id",
        vote: VoteType.VOTE_TYPE_INVALID,
      },
      {
        fee: 1.6,
      }
    );
    expect(txs.voteBundleProposal).toHaveBeenNthCalledWith(
      2,
      {
        staker: "test_staker",
        pool_id: "0",
        storage_id: "another_test_storage_id",
        vote: VoteType.VOTE_TYPE_INVALID,
      },
      {
        fee: 1.6,
      }
    );

    expect(txs.submitBundleProposal).toHaveBeenCalledTimes(0);

    expect(txs.skipUploaderRole).toHaveBeenCalledTimes(0);

    // =====================
    // ASSERT LCD INTERFACES
    // =====================

    expect(queries.canVote).toHaveBeenCalledTimes(2);
    expect(queries.canVote).toHaveBeenNthCalledWith(1, {
      staker: "test_staker",
      pool_id: "0",
      voter: "test_valaddress",
      storage_id: "another_test_storage_id",
    });
    expect(queries.canVote).toHaveBeenNthCalledWith(2, {
      staker: "test_staker",
      pool_id: "0",
      voter: "test_valaddress",
      storage_id: "another_test_storage_id",
    });

    expect(queries.canPropose).toHaveBeenCalledTimes(0);

    // =========================
    // ASSERT STORAGE INTERFACES
    // =========================

    expect(storageProvider.saveBundle).toHaveBeenCalledTimes(0);

    expect(storageProvider.retrieveBundle).toHaveBeenCalledTimes(2);
    expect(storageProvider.retrieveBundle).toHaveBeenNthCalledWith(
      1,
      "another_test_storage_id",
      (120 - 20) * 1000
    );
    expect(storageProvider.retrieveBundle).toHaveBeenNthCalledWith(
      2,
      "another_test_storage_id",
      (120 - 20) * 1000
    );

    // =======================
    // ASSERT CACHE INTERFACES
    // =======================

    expect(cacheProvider.get).toHaveBeenCalledTimes(4);
    expect(cacheProvider.get).toHaveBeenNthCalledWith(1, "0");
    expect(cacheProvider.get).toHaveBeenNthCalledWith(2, "1");
    expect(cacheProvider.get).toHaveBeenNthCalledWith(3, "0");
    expect(cacheProvider.get).toHaveBeenNthCalledWith(4, "1");

    // =============================
    // ASSERT COMPRESSION INTERFACES
    // =============================

    expect(compression.compress).toHaveBeenCalledTimes(0);

    expect(compression.decompress).toHaveBeenCalledTimes(2);
    expect(compression.decompress).toHaveBeenNthCalledWith(1, compressedBundle);
    expect(compression.decompress).toHaveBeenNthCalledWith(2, compressedBundle);

    // =============================
    // ASSERT INTEGRATION INTERFACES
    // =============================

    expect(runtime.summarizeDataBundle).toHaveBeenCalledTimes(0);

    expect(runtime.validateDataItem).toHaveBeenCalledTimes(2);

    expect(runtime.validateDataItem).toHaveBeenNthCalledWith(
      1,
      expect.any(Validator),
      standardizeJSON(bundle[0]),
      standardizeJSON(bundle[0])
    );
    expect(runtime.validateDataItem).toHaveBeenNthCalledWith(
      2,
      expect.any(Validator),
      standardizeJSON(bundle[0]),
      standardizeJSON(bundle[0])
    );

    // ========================
    // ASSERT NODEJS INTERFACES
    // ========================

    // assert that only one round ran
    expect(v["waitForNextBundleProposal"]).toHaveBeenCalledTimes(1);

    // TODO: assert timeouts
  });
});
