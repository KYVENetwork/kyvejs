import { Logger } from "tslog";
import {
  ICompression,
  IStorageProvider,
  Validator,
  sha256,
} from "../src/index";
import { runNode } from "../src/methods/main/runNode";
import { genesis_pool } from "./mocks/constants";
import { client } from "./mocks/client.mock";
import { lcd } from "./mocks/lcd.mock";
import { TestCacheProvider } from "./mocks/cache.mock";
import { setupMetrics } from "../src/methods";
import { register } from "prom-client";
import { TestRuntime } from "./mocks/runtime.mock";
import { TestNormalStorageProvider } from "./mocks/storageProvider.mock";
import { TestNormalCompression } from "./mocks/compression.mock";

/*

TEST CASES - propose bundle tests

* propose bundle with data
* propose bundle with no data
* propose bundle after last bundle has been dropped
* propose bundle where saveBundle fails
* propose bundle but saveBundle does not return a storage id
* propose bundle where submitBundleProposal fails
* propose bundle where skipUploaderRole fails
* propose bundle where saveBundle and skipUploaderRole fails
* propose bundle where summarizeDataBundle fails
* propose bundle where compress fails

*/

describe("propose bundle tests", () => {
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
    v["storageProviderFactory"] = jest.fn().mockResolvedValue(storageProvider);

    // mock compression
    compression = new TestNormalCompression();
    v["compressionFactory"] = jest.fn().mockReturnValue(compression);

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

    v.client = client();
    v.lcd = lcd();

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

  test("propose bundle with data", async () => {
    // ARRANGE
    v["lcd"].kyve.query.v1beta1.canVote = jest.fn().mockResolvedValue({
      possible: false,
      reason: "Already voted",
    });

    v["syncPoolState"] = jest.fn().mockImplementation(() => {
      v.pool = {
        ...genesis_pool,
        data: {
          ...genesis_pool.data,
          current_index: "100",
          current_key: "99",
        },
        bundle_proposal: {
          ...genesis_pool.bundle_proposal,
          storage_id: "another_test_storage_id",
          uploader: "another_test_staker",
          next_uploader: "test_staker",
          data_size: "123456789",
          data_hash: "previous_test_bundle_hash",
          bundle_size: "2",
          from_key: "100",
          to_key: "101",
          bundle_summary: "previous_test_value",
          updated_at: "0",
          voters_valid: ["test_staker"],
        },
      } as any;
    });

    const bundle = [
      {
        key: "test_key_1",
        value: "test_value_1",
      },
      {
        key: "test_key_2",
        value: "test_value_2",
      },
      {
        key: "test_key_3",
        value: "test_value_3",
      },
      {
        key: "test_key_4",
        value: "test_value_4",
      },
    ];

    await v["cacheProvider"].put("102", bundle[0]);
    await v["cacheProvider"].put("103", bundle[1]);
    await v["cacheProvider"].put("104", bundle[2]);
    await v["cacheProvider"].put("105", bundle[3]);

    // ACT
    await runNode.call(v);

    // ASSERT
    const txs = v["client"].kyve.bundles.v1beta1;
    const queries = v["lcd"].kyve.query.v1beta1;
    const cacheProvider = v["cacheProvider"];
    const runtime = v["runtime"];

    // ========================
    // ASSERT CLIENT INTERFACES
    // ========================

    expect(txs.claimUploaderRole).toHaveBeenCalledTimes(0);

    expect(txs.voteBundleProposal).toHaveBeenCalledTimes(0);

    expect(txs.submitBundleProposal).toHaveBeenCalledTimes(1);
    expect(txs.submitBundleProposal).toHaveBeenLastCalledWith({
      staker: "test_staker",
      pool_id: "0",
      storage_id: "test_storage_id",
      data_size: Buffer.from(JSON.stringify(bundle)).byteLength.toString(),
      data_hash: sha256(Buffer.from(JSON.stringify(bundle))),
      from_index: "102",
      bundle_size: "4",
      from_key: "test_key_1",
      to_key: "test_key_4",
      bundle_summary: JSON.stringify(bundle),
    });

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

    expect(queries.canPropose).toHaveBeenCalledTimes(1);
    expect(queries.canPropose).toHaveBeenLastCalledWith({
      staker: "test_staker",
      pool_id: "0",
      proposer: "test_valaddress",
      from_index: "102",
    });

    // =========================
    // ASSERT STORAGE INTERFACES
    // =========================

    expect(storageProvider.saveBundle).toHaveBeenCalledTimes(1);
    expect(storageProvider.saveBundle).toHaveBeenLastCalledWith(
      Buffer.from(JSON.stringify(bundle)),
      expect.any(Array)
    );

    expect(storageProvider.retrieveBundle).toHaveBeenCalledTimes(0);

    // =======================
    // ASSERT CACHE INTERFACES
    // =======================

    expect(cacheProvider.get).toHaveBeenCalledTimes(5);
    expect(cacheProvider.get).toHaveBeenNthCalledWith(1, "102");
    expect(cacheProvider.get).toHaveBeenNthCalledWith(2, "103");
    expect(cacheProvider.get).toHaveBeenNthCalledWith(3, "104");
    expect(cacheProvider.get).toHaveBeenNthCalledWith(4, "105");
    expect(cacheProvider.get).toHaveBeenNthCalledWith(5, "106");

    // =============================
    // ASSERT COMPRESSION INTERFACES
    // =============================

    expect(compression.compress).toHaveBeenCalledTimes(1);
    expect(compression.compress).toHaveBeenLastCalledWith(
      Buffer.from(JSON.stringify(bundle))
    );

    expect(compression.decompress).toHaveBeenCalledTimes(0);

    // =========================
    // ASSERT RUNTIME INTERFACES
    // =========================

    expect(runtime.summarizeDataBundle).toHaveBeenCalledTimes(1);
    expect(runtime.summarizeDataBundle).toHaveBeenLastCalledWith(
      expect.any(Validator),
      bundle
    );

    expect(runtime.validateDataItem).toHaveBeenCalledTimes(0);

    expect(runtime.getDataItem).toHaveBeenCalledTimes(0);

    expect(runtime.nextKey).toHaveBeenCalledTimes(0);

    // ========================
    // ASSERT NODEJS INTERFACES
    // ========================

    // assert that only one round ran
    expect(v["waitForNextBundleProposal"]).toHaveBeenCalledTimes(1);

    // TODO: assert timeouts
  });

  test("propose bundle with no data", async () => {
    // ARRANGE
    v["lcd"].kyve.query.v1beta1.canVote = jest.fn().mockResolvedValue({
      possible: false,
      reason: "Already voted",
    });

    v["syncPoolState"] = jest.fn().mockImplementation(() => {
      v.pool = {
        ...genesis_pool,
        data: {
          ...genesis_pool.data,
          current_index: "100",
          current_key: "99",
        },
        bundle_proposal: {
          ...genesis_pool.bundle_proposal,
          storage_id: "another_test_storage_id",
          uploader: "another_test_staker",
          next_uploader: "test_staker",
          data_size: "123456789",
          data_hash: "previous_test_bundle_hash",
          bundle_size: "2",
          from_key: "100",
          to_key: "101",
          bundle_summary: "previous_test_value",
          updated_at: "0",
          voters_valid: ["test_staker"],
        },
      } as any;
    });

    const bundle = [
      {
        key: "test_key_1",
        value: "test_value_1",
      },
      {
        key: "test_key_2",
        value: "test_value_2",
      },
    ];

    // ACT
    await runNode.call(v);

    // ASSERT

    const txs = v["client"].kyve.bundles.v1beta1;
    const queries = v["lcd"].kyve.query.v1beta1;
    const cacheProvider = v["cacheProvider"];
    const runtime = v["runtime"];

    // ========================
    // ASSERT CLIENT INTERFACES
    // ========================

    expect(txs.claimUploaderRole).toHaveBeenCalledTimes(0);

    expect(txs.voteBundleProposal).toHaveBeenCalledTimes(0);

    expect(txs.submitBundleProposal).toHaveBeenCalledTimes(0);

    expect(txs.skipUploaderRole).toHaveBeenCalledTimes(1);
    expect(txs.skipUploaderRole).toHaveBeenLastCalledWith({
      staker: "test_staker",
      pool_id: "0",
      from_index: "102",
    });

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

    expect(queries.canPropose).toHaveBeenCalledTimes(1);
    expect(queries.canPropose).toHaveBeenLastCalledWith({
      staker: "test_staker",
      pool_id: "0",
      proposer: "test_valaddress",
      from_index: "102",
    });

    // =========================
    // ASSERT STORAGE INTERFACES
    // =========================

    expect(storageProvider.saveBundle).toHaveBeenCalledTimes(0);

    expect(storageProvider.retrieveBundle).toHaveBeenCalledTimes(0);

    // =======================
    // ASSERT CACHE INTERFACES
    // =======================

    expect(cacheProvider.get).toHaveBeenCalledTimes(1);
    expect(cacheProvider.get).toHaveBeenLastCalledWith("102");

    // =============================
    // ASSERT COMPRESSION INTERFACES
    // =============================

    expect(compression.compress).toHaveBeenCalledTimes(0);

    expect(compression.decompress).toHaveBeenCalledTimes(0);

    // =========================
    // ASSERT RUNTIME INTERFACES
    // =========================

    expect(runtime.summarizeDataBundle).toHaveBeenCalledTimes(0);

    expect(runtime.validateDataItem).toHaveBeenCalledTimes(0);

    expect(runtime.getDataItem).toHaveBeenCalledTimes(0);

    expect(runtime.nextKey).toHaveBeenCalledTimes(0);

    // ========================
    // ASSERT NODEJS INTERFACES
    // ========================

    // assert that only one round ran
    expect(v["waitForNextBundleProposal"]).toHaveBeenCalledTimes(1);

    // TODO: assert timeouts
  });

  test("propose bundle after last bundle has been dropped", async () => {
    // ARRANGE
    v["lcd"].kyve.query.v1beta1.canVote = jest.fn().mockResolvedValue({
      possible: false,
      reason: "Already voted",
    });

    v["syncPoolState"] = jest.fn().mockImplementation(() => {
      v.pool = {
        ...genesis_pool,
        data: {
          ...genesis_pool.data,
          current_index: "100",
          current_key: "99",
        },
        bundle_proposal: {
          ...genesis_pool.bundle_proposal,
          storage_id: "",
          uploader: "",
          next_uploader: "test_staker",
          data_size: "0",
          data_hash: "",
          bundle_size: "0",
          from_key: "",
          to_key: "",
          bundle_summary: "",
          updated_at: "0",
        },
      } as any;
    });

    const bundle = [
      {
        key: "test_key_1",
        value: "test_value_1",
      },
      {
        key: "test_key_2",
        value: "test_value_2",
      },
    ];

    await v["cacheProvider"].put("100", bundle[0]);
    await v["cacheProvider"].put("101", bundle[1]);

    // ACT
    await runNode.call(v);

    // ASSERT

    const txs = v["client"].kyve.bundles.v1beta1;
    const queries = v["lcd"].kyve.query.v1beta1;
    const cacheProvider = v["cacheProvider"];
    const runtime = v["runtime"];

    // ========================
    // ASSERT CLIENT INTERFACES
    // ========================

    expect(txs.claimUploaderRole).toHaveBeenCalledTimes(0);

    expect(txs.voteBundleProposal).toHaveBeenCalledTimes(0);

    expect(txs.submitBundleProposal).toHaveBeenCalledTimes(1);
    expect(txs.submitBundleProposal).toHaveBeenLastCalledWith({
      staker: "test_staker",
      pool_id: "0",
      storage_id: "test_storage_id",
      data_size: Buffer.from(JSON.stringify(bundle)).byteLength.toString(),
      data_hash: sha256(Buffer.from(JSON.stringify(bundle))),
      from_index: "100",
      bundle_size: "2",
      from_key: "test_key_1",
      to_key: "test_key_2",
      bundle_summary: JSON.stringify(bundle),
    });

    expect(txs.skipUploaderRole).toHaveBeenCalledTimes(0);

    // =====================
    // ASSERT LCD INTERFACES
    // =====================

    expect(queries.canVote).toHaveBeenCalledTimes(0);

    expect(queries.canPropose).toHaveBeenCalledTimes(1);
    expect(queries.canPropose).toHaveBeenLastCalledWith({
      staker: "test_staker",
      pool_id: "0",
      proposer: "test_valaddress",
      from_index: "100",
    });

    // =========================
    // ASSERT STORAGE INTERFACES
    // =========================

    expect(storageProvider.saveBundle).toHaveBeenCalledTimes(1);
    expect(storageProvider.saveBundle).toHaveBeenLastCalledWith(
      Buffer.from(JSON.stringify(bundle)),
      expect.any(Array)
    );

    expect(storageProvider.retrieveBundle).toHaveBeenCalledTimes(0);

    // =======================
    // ASSERT CACHE INTERFACES
    // =======================

    expect(cacheProvider.get).toHaveBeenCalledTimes(3);
    expect(cacheProvider.get).toHaveBeenNthCalledWith(1, "100");
    expect(cacheProvider.get).toHaveBeenNthCalledWith(2, "101");
    expect(cacheProvider.get).toHaveBeenNthCalledWith(3, "102");

    // =============================
    // ASSERT COMPRESSION INTERFACES
    // =============================

    expect(compression.compress).toHaveBeenCalledTimes(1);
    expect(compression.compress).toHaveBeenLastCalledWith(
      Buffer.from(JSON.stringify(bundle))
    );

    expect(compression.decompress).toHaveBeenCalledTimes(0);

    // =========================
    // ASSERT RUNTIME INTERFACES
    // =========================

    expect(runtime.summarizeDataBundle).toHaveBeenCalledTimes(1);
    expect(runtime.summarizeDataBundle).toHaveBeenLastCalledWith(
      expect.any(Validator),
      bundle
    );

    expect(runtime.validateDataItem).toHaveBeenCalledTimes(0);

    expect(runtime.getDataItem).toHaveBeenCalledTimes(0);

    expect(runtime.nextKey).toHaveBeenCalledTimes(0);

    // ========================
    // ASSERT NODEJS INTERFACES
    // ========================

    // assert that only one round ran
    expect(v["waitForNextBundleProposal"]).toHaveBeenCalledTimes(1);

    // TODO: assert timeouts
  });

  test("propose bundle where saveBundle fails", async () => {
    // ARRANGE
    v["lcd"].kyve.query.v1beta1.canVote = jest.fn().mockResolvedValue({
      possible: false,
      reason: "Already voted",
    });

    storageProvider.saveBundle = jest.fn().mockRejectedValue(new Error());

    v["syncPoolState"] = jest.fn().mockImplementation(() => {
      v.pool = {
        ...genesis_pool,
        data: {
          ...genesis_pool.data,
          current_index: "100",
          current_key: "99",
        },
        bundle_proposal: {
          ...genesis_pool.bundle_proposal,
          storage_id: "another_test_storage_id",
          uploader: "another_test_staker",
          next_uploader: "test_staker",
          data_size: "123456789",
          data_hash: "previous_test_bundle_hash",
          bundle_size: "2",
          from_key: "100",
          to_key: "101",
          bundle_summary: "previous_test_value",
          updated_at: "0",
          voters_valid: ["test_staker"],
        },
      } as any;
    });

    const bundle = [
      {
        key: "test_key_1",
        value: "test_value_1",
      },
      {
        key: "test_key_2",
        value: "test_value_2",
      },
    ];

    await v["cacheProvider"].put("102", bundle[0]);
    await v["cacheProvider"].put("103", bundle[1]);

    // ACT
    await runNode.call(v);

    // ASSERT

    const txs = v["client"].kyve.bundles.v1beta1;
    const queries = v["lcd"].kyve.query.v1beta1;
    const cacheProvider = v["cacheProvider"];
    const runtime = v["runtime"];

    // ========================
    // ASSERT CLIENT INTERFACES
    // ========================

    expect(txs.claimUploaderRole).toHaveBeenCalledTimes(0);

    expect(txs.voteBundleProposal).toHaveBeenCalledTimes(0);

    expect(txs.submitBundleProposal).toHaveBeenCalledTimes(0);

    expect(txs.skipUploaderRole).toHaveBeenCalledTimes(1);
    expect(txs.skipUploaderRole).toHaveBeenLastCalledWith({
      staker: "test_staker",
      pool_id: "0",
      from_index: "102",
    });

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

    expect(queries.canPropose).toHaveBeenCalledTimes(1);
    expect(queries.canPropose).toHaveBeenLastCalledWith({
      staker: "test_staker",
      pool_id: "0",
      proposer: "test_valaddress",
      from_index: "102",
    });

    // =========================
    // ASSERT STORAGE INTERFACES
    // =========================

    expect(storageProvider.saveBundle).toHaveBeenCalledTimes(1);
    expect(storageProvider.saveBundle).toHaveBeenLastCalledWith(
      Buffer.from(JSON.stringify(bundle)),
      expect.any(Array)
    );

    expect(storageProvider.retrieveBundle).toHaveBeenCalledTimes(0);

    // =======================
    // ASSERT CACHE INTERFACES
    // =======================

    expect(cacheProvider.get).toHaveBeenCalledTimes(3);
    expect(cacheProvider.get).toHaveBeenNthCalledWith(1, "102");
    expect(cacheProvider.get).toHaveBeenNthCalledWith(2, "103");
    expect(cacheProvider.get).toHaveBeenNthCalledWith(3, "104");

    // =============================
    // ASSERT COMPRESSION INTERFACES
    // =============================

    expect(compression.compress).toHaveBeenCalledTimes(1);
    expect(compression.compress).toHaveBeenLastCalledWith(
      Buffer.from(JSON.stringify(bundle))
    );

    expect(compression.decompress).toHaveBeenCalledTimes(0);

    // =========================
    // ASSERT RUNTIME INTERFACES
    // =========================

    expect(runtime.summarizeDataBundle).toHaveBeenCalledTimes(1);
    expect(runtime.summarizeDataBundle).toHaveBeenLastCalledWith(
      expect.any(Validator),
      bundle
    );

    expect(runtime.validateDataItem).toHaveBeenCalledTimes(0);

    expect(runtime.getDataItem).toHaveBeenCalledTimes(0);

    expect(runtime.nextKey).toHaveBeenCalledTimes(0);

    // ========================
    // ASSERT NODEJS INTERFACES
    // ========================

    // assert that only one round ran
    expect(v["waitForNextBundleProposal"]).toHaveBeenCalledTimes(1);

    // TODO: assert timeouts
  });

  test("propose bundle but saveBundle does not return a storage id", async () => {
    // ARRANGE
    v["lcd"].kyve.query.v1beta1.canVote = jest.fn().mockResolvedValue({
      possible: false,
      reason: "Already voted",
    });

    storageProvider.saveBundle = jest.fn().mockResolvedValue(null);

    v["syncPoolState"] = jest.fn().mockImplementation(() => {
      v.pool = {
        ...genesis_pool,
        data: {
          ...genesis_pool.data,
          current_index: "100",
          current_key: "99",
        },
        bundle_proposal: {
          ...genesis_pool.bundle_proposal,
          storage_id: "another_test_storage_id",
          uploader: "another_test_staker",
          next_uploader: "test_staker",
          data_size: "123456789",
          data_hash: "previous_test_bundle_hash",
          bundle_size: "2",
          from_key: "100",
          to_key: "101",
          bundle_summary: "previous_test_value",
          updated_at: "0",
          voters_valid: ["test_staker"],
        },
      } as any;
    });

    const bundle = [
      {
        key: "test_key_1",
        value: "test_value_1",
      },
      {
        key: "test_key_2",
        value: "test_value_2",
      },
    ];

    await v["cacheProvider"].put("102", bundle[0]);
    await v["cacheProvider"].put("103", bundle[1]);

    // ACT
    await runNode.call(v);

    // ASSERT

    const txs = v["client"].kyve.bundles.v1beta1;
    const queries = v["lcd"].kyve.query.v1beta1;
    const cacheProvider = v["cacheProvider"];
    const runtime = v["runtime"];

    // ========================
    // ASSERT CLIENT INTERFACES
    // ========================

    expect(txs.claimUploaderRole).toHaveBeenCalledTimes(0);

    expect(txs.voteBundleProposal).toHaveBeenCalledTimes(0);

    expect(txs.submitBundleProposal).toHaveBeenCalledTimes(0);

    expect(txs.skipUploaderRole).toHaveBeenCalledTimes(1);
    expect(txs.skipUploaderRole).toHaveBeenLastCalledWith({
      staker: "test_staker",
      pool_id: "0",
      from_index: "102",
    });

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

    expect(queries.canPropose).toHaveBeenCalledTimes(1);
    expect(queries.canPropose).toHaveBeenLastCalledWith({
      staker: "test_staker",
      pool_id: "0",
      proposer: "test_valaddress",
      from_index: "102",
    });

    // =========================
    // ASSERT STORAGE INTERFACES
    // =========================

    expect(storageProvider.saveBundle).toHaveBeenCalledTimes(1);
    expect(storageProvider.saveBundle).toHaveBeenLastCalledWith(
      Buffer.from(JSON.stringify(bundle)),
      expect.any(Array)
    );

    expect(storageProvider.retrieveBundle).toHaveBeenCalledTimes(0);

    // =======================
    // ASSERT CACHE INTERFACES
    // =======================

    expect(cacheProvider.get).toHaveBeenCalledTimes(3);
    expect(cacheProvider.get).toHaveBeenNthCalledWith(1, "102");
    expect(cacheProvider.get).toHaveBeenNthCalledWith(2, "103");
    expect(cacheProvider.get).toHaveBeenNthCalledWith(3, "104");

    // =============================
    // ASSERT COMPRESSION INTERFACES
    // =============================

    expect(compression.compress).toHaveBeenCalledTimes(1);
    expect(compression.compress).toHaveBeenLastCalledWith(
      Buffer.from(JSON.stringify(bundle))
    );

    expect(compression.decompress).toHaveBeenCalledTimes(0);

    // =========================
    // ASSERT RUNTIME INTERFACES
    // =========================

    expect(runtime.summarizeDataBundle).toHaveBeenCalledTimes(1);
    expect(runtime.summarizeDataBundle).toHaveBeenLastCalledWith(
      expect.any(Validator),
      bundle
    );

    expect(runtime.validateDataItem).toHaveBeenCalledTimes(0);

    expect(runtime.getDataItem).toHaveBeenCalledTimes(0);

    expect(runtime.nextKey).toHaveBeenCalledTimes(0);

    // ========================
    // ASSERT NODEJS INTERFACES
    // ========================

    // assert that only one round ran
    expect(v["waitForNextBundleProposal"]).toHaveBeenCalledTimes(1);

    // TODO: assert timeouts
  });

  test("propose bundle where submitBundleProposal fails", async () => {
    // ARRANGE
    v["lcd"].kyve.query.v1beta1.canVote = jest.fn().mockResolvedValue({
      possible: false,
      reason: "Already voted",
    });

    v["client"].kyve.bundles.v1beta1.submitBundleProposal = jest
      .fn()
      .mockRejectedValue(new Error());

    v["syncPoolState"] = jest.fn().mockImplementation(() => {
      v.pool = {
        ...genesis_pool,
        data: {
          ...genesis_pool.data,
          current_index: "100",
          current_key: "99",
        },
        bundle_proposal: {
          ...genesis_pool.bundle_proposal,
          storage_id: "another_test_storage_id",
          uploader: "another_test_staker",
          next_uploader: "test_staker",
          data_size: "123456789",
          data_hash: "previous_test_bundle_hash",
          bundle_size: "2",
          from_key: "100",
          to_key: "101",
          bundle_summary: "previous_test_value",
          updated_at: "0",
          voters_valid: ["test_staker"],
        },
      } as any;
    });

    const bundle = [
      {
        key: "test_key_1",
        value: "test_value_1",
      },
      {
        key: "test_key_2",
        value: "test_value_2",
      },
    ];

    await v["cacheProvider"].put("102", bundle[0]);
    await v["cacheProvider"].put("103", bundle[1]);

    // ACT
    await runNode.call(v);

    // ASSERT

    const txs = v["client"].kyve.bundles.v1beta1;
    const queries = v["lcd"].kyve.query.v1beta1;
    const cacheProvider = v["cacheProvider"];
    const runtime = v["runtime"];

    // ========================
    // ASSERT CLIENT INTERFACES
    // ========================

    expect(txs.claimUploaderRole).toHaveBeenCalledTimes(0);

    expect(txs.voteBundleProposal).toHaveBeenCalledTimes(0);

    expect(txs.submitBundleProposal).toHaveBeenCalledTimes(1);
    expect(txs.submitBundleProposal).toHaveBeenLastCalledWith({
      staker: "test_staker",
      pool_id: "0",
      storage_id: "test_storage_id",
      data_size: Buffer.from(JSON.stringify(bundle)).byteLength.toString(),
      data_hash: sha256(Buffer.from(JSON.stringify(bundle))),
      from_index: "102",
      bundle_size: "2",
      from_key: "test_key_1",
      to_key: "test_key_2",
      bundle_summary: JSON.stringify(bundle),
    });

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

    expect(queries.canPropose).toHaveBeenCalledTimes(1);
    expect(queries.canPropose).toHaveBeenLastCalledWith({
      staker: "test_staker",
      pool_id: "0",
      proposer: "test_valaddress",
      from_index: "102",
    });

    // =========================
    // ASSERT STORAGE INTERFACES
    // =========================

    expect(storageProvider.saveBundle).toHaveBeenCalledTimes(1);
    expect(storageProvider.saveBundle).toHaveBeenLastCalledWith(
      Buffer.from(JSON.stringify(bundle)),
      expect.any(Array)
    );

    expect(storageProvider.retrieveBundle).toHaveBeenCalledTimes(0);

    // =======================
    // ASSERT CACHE INTERFACES
    // =======================

    expect(cacheProvider.get).toHaveBeenCalledTimes(3);
    expect(cacheProvider.get).toHaveBeenNthCalledWith(1, "102");
    expect(cacheProvider.get).toHaveBeenNthCalledWith(2, "103");
    expect(cacheProvider.get).toHaveBeenNthCalledWith(3, "104");

    // =============================
    // ASSERT COMPRESSION INTERFACES
    // =============================

    expect(compression.compress).toHaveBeenCalledTimes(1);
    expect(compression.compress).toHaveBeenLastCalledWith(
      Buffer.from(JSON.stringify(bundle))
    );

    expect(compression.decompress).toHaveBeenCalledTimes(0);

    // =========================
    // ASSERT RUNTIME INTERFACES
    // =========================

    expect(runtime.summarizeDataBundle).toHaveBeenCalledTimes(1);
    expect(runtime.summarizeDataBundle).toHaveBeenLastCalledWith(
      expect.any(Validator),
      bundle
    );

    expect(runtime.validateDataItem).toHaveBeenCalledTimes(0);

    expect(runtime.getDataItem).toHaveBeenCalledTimes(0);

    expect(runtime.nextKey).toHaveBeenCalledTimes(0);

    // ========================
    // ASSERT NODEJS INTERFACES
    // ========================

    // assert that only one round ran
    expect(v["waitForNextBundleProposal"]).toHaveBeenCalledTimes(1);

    // TODO: assert timeouts
  });

  test("propose bundle where skipUploaderRole fails", async () => {
    // ARRANGE
    v["lcd"].kyve.query.v1beta1.canVote = jest.fn().mockResolvedValue({
      possible: false,
      reason: "Already voted",
    });

    v["client"].kyve.bundles.v1beta1.skipUploaderRole = jest
      .fn()
      .mockRejectedValue(new Error());

    v["syncPoolState"] = jest.fn().mockImplementation(() => {
      v.pool = {
        ...genesis_pool,
        data: {
          ...genesis_pool.data,
          current_index: "100",
          current_key: "99",
        },
        bundle_proposal: {
          ...genesis_pool.bundle_proposal,
          storage_id: "another_test_storage_id",
          uploader: "another_test_staker",
          next_uploader: "test_staker",
          data_size: "123456789",
          data_hash: "previous_test_bundle_hash",
          bundle_size: "2",
          from_key: "100",
          to_key: "101",
          bundle_summary: "previous_test_value",
          updated_at: "0",
          voters_valid: ["test_staker"],
        },
      } as any;
    });

    const bundle = [
      {
        key: "test_key_1",
        value: "test_value_1",
      },
      {
        key: "test_key_2",
        value: "test_value_2",
      },
    ];

    // ACT
    await runNode.call(v);

    // ASSERT

    const txs = v["client"].kyve.bundles.v1beta1;
    const queries = v["lcd"].kyve.query.v1beta1;
    const cacheProvider = v["cacheProvider"];
    const runtime = v["runtime"];

    // ========================
    // ASSERT CLIENT INTERFACES
    // ========================

    expect(txs.claimUploaderRole).toHaveBeenCalledTimes(0);

    expect(txs.voteBundleProposal).toHaveBeenCalledTimes(0);

    expect(txs.submitBundleProposal).toHaveBeenCalledTimes(0);

    expect(txs.skipUploaderRole).toHaveBeenCalledTimes(1);
    expect(txs.skipUploaderRole).toHaveBeenLastCalledWith({
      staker: "test_staker",
      pool_id: "0",
      from_index: "102",
    });

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

    expect(queries.canPropose).toHaveBeenCalledTimes(1);
    expect(queries.canPropose).toHaveBeenLastCalledWith({
      staker: "test_staker",
      pool_id: "0",
      proposer: "test_valaddress",
      from_index: "102",
    });

    // =========================
    // ASSERT STORAGE INTERFACES
    // =========================

    expect(storageProvider.saveBundle).toHaveBeenCalledTimes(0);

    expect(storageProvider.retrieveBundle).toHaveBeenCalledTimes(0);

    // =======================
    // ASSERT CACHE INTERFACES
    // =======================

    expect(cacheProvider.get).toHaveBeenCalledTimes(1);
    expect(cacheProvider.get).toHaveBeenLastCalledWith("102");

    // =============================
    // ASSERT COMPRESSION INTERFACES
    // =============================

    expect(compression.compress).toHaveBeenCalledTimes(0);

    expect(compression.decompress).toHaveBeenCalledTimes(0);

    // =========================
    // ASSERT RUNTIME INTERFACES
    // =========================

    expect(runtime.summarizeDataBundle).toHaveBeenCalledTimes(0);

    expect(runtime.validateDataItem).toHaveBeenCalledTimes(0);

    expect(runtime.getDataItem).toHaveBeenCalledTimes(0);

    expect(runtime.nextKey).toHaveBeenCalledTimes(0);

    // ========================
    // ASSERT NODEJS INTERFACES
    // ========================

    // assert that only one round ran
    expect(v["waitForNextBundleProposal"]).toHaveBeenCalledTimes(1);

    // TODO: assert timeouts
  });

  test("propose bundle where saveBundle and skipUploaderRole fails", async () => {
    // ARRANGE
    v["lcd"].kyve.query.v1beta1.canVote = jest.fn().mockResolvedValue({
      possible: false,
      reason: "Already voted",
    });

    storageProvider.saveBundle = jest.fn().mockRejectedValue(new Error());

    v["client"].kyve.bundles.v1beta1.skipUploaderRole = jest
      .fn()
      .mockRejectedValue(new Error());

    v["syncPoolState"] = jest.fn().mockImplementation(() => {
      v.pool = {
        ...genesis_pool,
        data: {
          ...genesis_pool.data,
          current_index: "100",
          current_key: "99",
        },
        bundle_proposal: {
          ...genesis_pool.bundle_proposal,
          storage_id: "another_test_storage_id",
          uploader: "another_test_staker",
          next_uploader: "test_staker",
          data_size: "123456789",
          data_hash: "previous_test_bundle_hash",
          bundle_size: "2",
          from_key: "100",
          to_key: "101",
          bundle_summary: "previous_test_value",
          updated_at: "0",
          voters_valid: ["test_staker"],
        },
      } as any;
    });

    const bundle = [
      {
        key: "test_key_1",
        value: "test_value_1",
      },
      {
        key: "test_key_2",
        value: "test_value_2",
      },
    ];

    await v["cacheProvider"].put("102", bundle[0]);
    await v["cacheProvider"].put("103", bundle[1]);

    // ACT
    await runNode.call(v);

    // ASSERT

    const txs = v["client"].kyve.bundles.v1beta1;
    const queries = v["lcd"].kyve.query.v1beta1;
    const cacheProvider = v["cacheProvider"];
    const runtime = v["runtime"];

    // ========================
    // ASSERT CLIENT INTERFACES
    // ========================

    expect(txs.claimUploaderRole).toHaveBeenCalledTimes(0);

    expect(txs.voteBundleProposal).toHaveBeenCalledTimes(0);

    expect(txs.submitBundleProposal).toHaveBeenCalledTimes(0);

    expect(txs.skipUploaderRole).toHaveBeenCalledTimes(1);
    expect(txs.skipUploaderRole).toHaveBeenLastCalledWith({
      staker: "test_staker",
      pool_id: "0",
      from_index: "102",
    });

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

    expect(queries.canPropose).toHaveBeenCalledTimes(1);
    expect(queries.canPropose).toHaveBeenLastCalledWith({
      staker: "test_staker",
      pool_id: "0",
      proposer: "test_valaddress",
      from_index: "102",
    });

    // =========================
    // ASSERT STORAGE INTERFACES
    // =========================

    expect(storageProvider.saveBundle).toHaveBeenCalledTimes(1);
    expect(storageProvider.saveBundle).toHaveBeenLastCalledWith(
      Buffer.from(JSON.stringify(bundle)),
      expect.any(Array)
    );

    expect(storageProvider.retrieveBundle).toHaveBeenCalledTimes(0);

    // =======================
    // ASSERT CACHE INTERFACES
    // =======================

    expect(cacheProvider.get).toHaveBeenCalledTimes(3);
    expect(cacheProvider.get).toHaveBeenNthCalledWith(1, "102");
    expect(cacheProvider.get).toHaveBeenNthCalledWith(2, "103");
    expect(cacheProvider.get).toHaveBeenNthCalledWith(3, "104");

    // =============================
    // ASSERT COMPRESSION INTERFACES
    // =============================

    expect(compression.compress).toHaveBeenCalledTimes(1);
    expect(compression.compress).toHaveBeenLastCalledWith(
      Buffer.from(JSON.stringify(bundle))
    );

    expect(compression.decompress).toHaveBeenCalledTimes(0);

    // =========================
    // ASSERT RUNTIME INTERFACES
    // =========================

    expect(runtime.summarizeDataBundle).toHaveBeenCalledTimes(1);
    expect(runtime.summarizeDataBundle).toHaveBeenLastCalledWith(
      expect.any(Validator),
      bundle
    );

    expect(runtime.validateDataItem).toHaveBeenCalledTimes(0);

    expect(runtime.getDataItem).toHaveBeenCalledTimes(0);

    expect(runtime.nextKey).toHaveBeenCalledTimes(0);

    // ========================
    // ASSERT NODEJS INTERFACES
    // ========================

    // assert that only one round ran
    expect(v["waitForNextBundleProposal"]).toHaveBeenCalledTimes(1);

    // TODO: assert timeouts
  });

  test("propose bundle where summarizeDataBundle fails", async () => {
    // ARRANGE
    v["lcd"].kyve.query.v1beta1.canVote = jest.fn().mockResolvedValue({
      possible: false,
      reason: "Already voted",
    });

    v["runtime"].summarizeDataBundle = jest.fn().mockRejectedValue(new Error());

    v["syncPoolState"] = jest.fn().mockImplementation(() => {
      v.pool = {
        ...genesis_pool,
        data: {
          ...genesis_pool.data,
          current_index: "100",
          current_key: "99",
        },
        bundle_proposal: {
          ...genesis_pool.bundle_proposal,
          storage_id: "another_test_storage_id",
          uploader: "another_test_staker",
          next_uploader: "test_staker",
          data_size: "123456789",
          data_hash: "previous_test_bundle_hash",
          bundle_size: "2",
          from_key: "100",
          to_key: "101",
          bundle_summary: "previous_test_value",
          updated_at: "0",
          voters_valid: ["test_staker"],
        },
      } as any;
    });

    const bundle = [
      {
        key: "test_key_1",
        value: "test_value_1",
      },
      {
        key: "test_key_2",
        value: "test_value_2",
      },
    ];

    await v["cacheProvider"].put("102", bundle[0]);
    await v["cacheProvider"].put("103", bundle[1]);

    // ACT
    await runNode.call(v);

    // ASSERT

    const txs = v["client"].kyve.bundles.v1beta1;
    const queries = v["lcd"].kyve.query.v1beta1;
    const cacheProvider = v["cacheProvider"];
    const runtime = v["runtime"];

    // ========================
    // ASSERT CLIENT INTERFACES
    // ========================

    expect(txs.claimUploaderRole).toHaveBeenCalledTimes(0);

    expect(txs.voteBundleProposal).toHaveBeenCalledTimes(0);

    expect(txs.submitBundleProposal).toHaveBeenCalledTimes(0);

    expect(txs.skipUploaderRole).toHaveBeenCalledTimes(1);
    expect(txs.skipUploaderRole).toHaveBeenLastCalledWith({
      staker: "test_staker",
      pool_id: "0",
      from_index: "102",
    });

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

    expect(queries.canPropose).toHaveBeenCalledTimes(1);
    expect(queries.canPropose).toHaveBeenLastCalledWith({
      staker: "test_staker",
      pool_id: "0",
      proposer: "test_valaddress",
      from_index: "102",
    });

    // =========================
    // ASSERT STORAGE INTERFACES
    // =========================

    expect(storageProvider.saveBundle).toHaveBeenCalledTimes(0);

    expect(storageProvider.retrieveBundle).toHaveBeenCalledTimes(0);

    // =======================
    // ASSERT CACHE INTERFACES
    // =======================

    expect(cacheProvider.get).toHaveBeenCalledTimes(3);
    expect(cacheProvider.get).toHaveBeenNthCalledWith(1, "102");
    expect(cacheProvider.get).toHaveBeenNthCalledWith(2, "103");
    expect(cacheProvider.get).toHaveBeenNthCalledWith(3, "104");

    // =============================
    // ASSERT COMPRESSION INTERFACES
    // =============================

    expect(compression.compress).toHaveBeenCalledTimes(0);

    expect(compression.decompress).toHaveBeenCalledTimes(0);

    // =========================
    // ASSERT RUNTIME INTERFACES
    // =========================

    expect(runtime.summarizeDataBundle).toHaveBeenCalledTimes(1);
    expect(runtime.summarizeDataBundle).toHaveBeenLastCalledWith(
      expect.any(Validator),
      bundle
    );

    expect(runtime.validateDataItem).toHaveBeenCalledTimes(0);

    expect(runtime.getDataItem).toHaveBeenCalledTimes(0);

    expect(runtime.nextKey).toHaveBeenCalledTimes(0);

    // ========================
    // ASSERT NODEJS INTERFACES
    // ========================

    // assert that only one round ran
    expect(v["waitForNextBundleProposal"]).toHaveBeenCalledTimes(1);

    // TODO: assert timeouts
  });

  test("propose bundle where compress fails", async () => {
    // ARRANGE
    v["lcd"].kyve.query.v1beta1.canVote = jest.fn().mockResolvedValue({
      possible: false,
      reason: "Already voted",
    });

    compression.compress = jest.fn().mockRejectedValue(new Error());

    v["syncPoolState"] = jest.fn().mockImplementation(() => {
      v.pool = {
        ...genesis_pool,
        data: {
          ...genesis_pool.data,
          current_index: "100",
          current_key: "99",
        },
        bundle_proposal: {
          ...genesis_pool.bundle_proposal,
          storage_id: "another_test_storage_id",
          uploader: "another_test_staker",
          next_uploader: "test_staker",
          data_size: "123456789",
          data_hash: "previous_test_bundle_hash",
          bundle_size: "2",
          from_key: "100",
          to_key: "101",
          bundle_summary: "previous_test_value",
          updated_at: "0",
          voters_valid: ["test_staker"],
        },
      } as any;
    });

    const bundle = [
      {
        key: "test_key_1",
        value: "test_value_1",
      },
      {
        key: "test_key_2",
        value: "test_value_2",
      },
    ];

    await v["cacheProvider"].put("102", bundle[0]);
    await v["cacheProvider"].put("103", bundle[1]);

    // ACT
    await runNode.call(v);

    // ASSERT

    const txs = v["client"].kyve.bundles.v1beta1;
    const queries = v["lcd"].kyve.query.v1beta1;
    const cacheProvider = v["cacheProvider"];
    const runtime = v["runtime"];

    // ========================
    // ASSERT CLIENT INTERFACES
    // ========================

    expect(txs.claimUploaderRole).toHaveBeenCalledTimes(0);

    expect(txs.voteBundleProposal).toHaveBeenCalledTimes(0);

    expect(txs.submitBundleProposal).toHaveBeenCalledTimes(0);

    expect(txs.skipUploaderRole).toHaveBeenCalledTimes(1);
    expect(txs.skipUploaderRole).toHaveBeenLastCalledWith({
      staker: "test_staker",
      pool_id: "0",
      from_index: "102",
    });

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

    expect(queries.canPropose).toHaveBeenCalledTimes(1);
    expect(queries.canPropose).toHaveBeenLastCalledWith({
      staker: "test_staker",
      pool_id: "0",
      proposer: "test_valaddress",
      from_index: "102",
    });

    // =========================
    // ASSERT STORAGE INTERFACES
    // =========================

    expect(storageProvider.saveBundle).toHaveBeenCalledTimes(0);

    expect(storageProvider.retrieveBundle).toHaveBeenCalledTimes(0);

    // =======================
    // ASSERT CACHE INTERFACES
    // =======================

    expect(cacheProvider.get).toHaveBeenCalledTimes(3);
    expect(cacheProvider.get).toHaveBeenNthCalledWith(1, "102");
    expect(cacheProvider.get).toHaveBeenNthCalledWith(2, "103");
    expect(cacheProvider.get).toHaveBeenNthCalledWith(3, "104");

    // =============================
    // ASSERT COMPRESSION INTERFACES
    // =============================

    expect(compression.compress).toHaveBeenCalledTimes(1);
    expect(compression.compress).toHaveBeenLastCalledWith(
      Buffer.from(JSON.stringify(bundle))
    );

    expect(compression.decompress).toHaveBeenCalledTimes(0);

    // =========================
    // ASSERT RUNTIME INTERFACES
    // =========================

    expect(runtime.summarizeDataBundle).toHaveBeenCalledTimes(1);
    expect(runtime.summarizeDataBundle).toHaveBeenLastCalledWith(
      expect.any(Validator),
      bundle
    );

    expect(runtime.validateDataItem).toHaveBeenCalledTimes(0);

    expect(runtime.getDataItem).toHaveBeenCalledTimes(0);

    expect(runtime.nextKey).toHaveBeenCalledTimes(0);

    // ========================
    // ASSERT NODEJS INTERFACES
    // ========================

    // assert that only one round ran
    expect(v["waitForNextBundleProposal"]).toHaveBeenCalledTimes(1);

    // TODO: assert timeouts
  });
});
