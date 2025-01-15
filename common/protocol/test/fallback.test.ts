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
import { TestNormalStorageProvider } from "./mocks/storageProvider.mock";
import { TestCacheProvider } from "./mocks/cache.mock";
import { TestNormalCompression } from "./mocks/compression.mock";
import { setupMetrics } from "../src/methods";
import { register } from "prom-client";
import { TestRuntime } from "./mocks/runtime.mock";

/*

TEST CASES - fallback tests

* call canPropose with one rest endpoint which fails
* call canPropose with two rest endpoints where first fails
* call canPropose with two rest endpoints where both fail

* submit ClaimUploaderRole tx with one rpc endpoint which fails
* submit ClaimUploaderRole tx with two rpc endpoints where first fails
* submit ClaimUploaderRole tx with two rpc endpoints where both fail

*/

describe("fallback tests", () => {
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

    v["continueRound"] = jest
      .fn()
      .mockReturnValueOnce(true)
      .mockReturnValue(false);

    v["waitForNextBundleProposal"] = jest.fn();

    setupMetrics.call(v);
  });

  afterEach(() => {
    // reset prometheus
    register.clear();
  });

  test("call canPropose with one rest endpoint which fails", async () => {
    // ARRANGE
    const canProposeMock = jest
      .fn()
      .mockRejectedValueOnce(new Error())
      .mockResolvedValue({
        possible: true,
        reason: "",
      });

    v["lcd"][0].kyve.query.v1beta1.canPropose = canProposeMock;

    v["syncPoolState"] = jest
      .fn()
      .mockImplementationOnce(() => {
        v.pool = {
          ...genesis_pool,
        } as any;
      })
      .mockImplementation(() => {
        v.pool = {
          ...genesis_pool,
          bundle_proposal: {
            ...genesis_pool.bundle_proposal,
            next_uploader: "test_staker",
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

    await v["cacheProvider"].put("0", bundle[0]);
    await v["cacheProvider"].put("1", bundle[1]);

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

    expect(txs.claimUploaderRole).toHaveBeenCalledTimes(1);
    expect(txs.claimUploaderRole).toHaveBeenLastCalledWith({
      staker: "test_staker",
      pool_id: "0",
    });

    expect(txs.voteBundleProposal).toHaveBeenCalledTimes(0);

    expect(txs.submitBundleProposal).toHaveBeenCalledTimes(1);
    expect(txs.submitBundleProposal).toHaveBeenLastCalledWith({
      staker: "test_staker",
      pool_id: "0",
      storage_id: "test_storage_id",
      data_size: Buffer.from(JSON.stringify(bundle)).byteLength.toString(),
      data_hash: sha256(Buffer.from(JSON.stringify(bundle))),
      from_index: "0",
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

    expect(queries.canPropose).toHaveBeenCalledTimes(2);
    expect(queries.canPropose).toHaveBeenNthCalledWith(1, {
      staker: "test_staker",
      pool_id: "0",
      proposer: "test_valaddress",
      from_index: "0",
    });
    expect(queries.canPropose).toHaveBeenNthCalledWith(2, {
      staker: "test_staker",
      pool_id: "0",
      proposer: "test_valaddress",
      from_index: "0",
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
    expect(cacheProvider.get).toHaveBeenNthCalledWith(1, "0");
    expect(cacheProvider.get).toHaveBeenNthCalledWith(2, "1");
    expect(cacheProvider.get).toHaveBeenNthCalledWith(3, "2");

    // =============================
    // ASSERT COMPRESSION INTERFACES
    // =============================

    expect(compression.compress).toHaveBeenCalled();

    expect(compression.decompress).toHaveBeenCalledTimes(0);

    // =============================
    // ASSERT INTEGRATION INTERFACES
    // =============================

    expect(runtime.summarizeDataBundle).toHaveBeenCalledTimes(1);

    expect(runtime.summarizeDataBundle).toHaveBeenLastCalledWith(
      expect.any(Validator),
      bundle
    );

    expect(runtime.validateDataItem).toHaveBeenCalledTimes(0);

    // ========================
    // ASSERT NODEJS INTERFACES
    // ========================

    // assert that only one round ran
    expect(v["waitForNextBundleProposal"]).toHaveBeenCalledTimes(1);

    // TODO: assert timeouts
  });

  test("call canPropose with two rest endpoints where first fails", async () => {
    // ARRANGE
    v["rest"].push("http://0.0.0.0:1318");
    v["lcd"].push(lcd());

    const canProposeMock = jest
      .fn()
      .mockRejectedValueOnce(new Error())
      .mockResolvedValue({
        possible: true,
        reason: "",
      });

    v["lcd"][0].kyve.query.v1beta1.canPropose = canProposeMock;

    v["syncPoolState"] = jest
      .fn()
      .mockImplementationOnce(() => {
        v.pool = {
          ...genesis_pool,
        } as any;
      })
      .mockImplementation(() => {
        v.pool = {
          ...genesis_pool,
          bundle_proposal: {
            ...genesis_pool.bundle_proposal,
            next_uploader: "test_staker",
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

    await v["cacheProvider"].put("0", bundle[0]);
    await v["cacheProvider"].put("1", bundle[1]);

    // ACT
    await runNode.call(v);

    // ASSERT
    const txs = v["client"][0].kyve.bundles.v1beta1;
    const queries = v["lcd"][0].kyve.query.v1beta1;
    const queries2 = v["lcd"][1].kyve.query.v1beta1;
    const cacheProvider = v["cacheProvider"];
    const runtime = v["runtime"];

    // ========================
    // ASSERT CLIENT INTERFACES
    // ========================

    expect(txs.claimUploaderRole).toHaveBeenCalledTimes(1);
    expect(txs.claimUploaderRole).toHaveBeenLastCalledWith({
      staker: "test_staker",
      pool_id: "0",
    });

    expect(txs.voteBundleProposal).toHaveBeenCalledTimes(0);

    expect(txs.submitBundleProposal).toHaveBeenCalledTimes(1);
    expect(txs.submitBundleProposal).toHaveBeenLastCalledWith({
      staker: "test_staker",
      pool_id: "0",
      storage_id: "test_storage_id",
      data_size: Buffer.from(JSON.stringify(bundle)).byteLength.toString(),
      data_hash: sha256(Buffer.from(JSON.stringify(bundle))),
      from_index: "0",
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
      from_index: "0",
    });

    expect(queries2.canPropose).toHaveBeenCalledTimes(1);
    expect(queries2.canPropose).toHaveBeenLastCalledWith({
      staker: "test_staker",
      pool_id: "0",
      proposer: "test_valaddress",
      from_index: "0",
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
    expect(cacheProvider.get).toHaveBeenNthCalledWith(1, "0");
    expect(cacheProvider.get).toHaveBeenNthCalledWith(2, "1");
    expect(cacheProvider.get).toHaveBeenNthCalledWith(3, "2");

    // =============================
    // ASSERT COMPRESSION INTERFACES
    // =============================

    expect(compression.compress).toHaveBeenCalled();

    expect(compression.decompress).toHaveBeenCalledTimes(0);

    // =============================
    // ASSERT INTEGRATION INTERFACES
    // =============================

    expect(runtime.summarizeDataBundle).toHaveBeenCalledTimes(1);

    expect(runtime.summarizeDataBundle).toHaveBeenLastCalledWith(
      expect.any(Validator),
      bundle
    );

    expect(runtime.validateDataItem).toHaveBeenCalledTimes(0);

    // ========================
    // ASSERT NODEJS INTERFACES
    // ========================

    // assert that only one round ran
    expect(v["waitForNextBundleProposal"]).toHaveBeenCalledTimes(1);

    // TODO: assert timeouts
  });

  test("call canPropose with two rest endpoints where both fail", async () => {
    // ARRANGE
    v["rest"].push("http://0.0.0.0:1318");
    v["lcd"].push(lcd());

    const canProposeMock = jest
      .fn()
      .mockRejectedValueOnce(new Error())
      .mockResolvedValue({
        possible: true,
        reason: "",
      });

    v["lcd"][0].kyve.query.v1beta1.canPropose = canProposeMock;

    const canPropose2Mock = jest
      .fn()
      .mockRejectedValueOnce(new Error())
      .mockResolvedValue({
        possible: true,
        reason: "",
      });

    v["lcd"][1].kyve.query.v1beta1.canPropose = canPropose2Mock;

    v["syncPoolState"] = jest
      .fn()
      .mockImplementationOnce(() => {
        v.pool = {
          ...genesis_pool,
        } as any;
      })
      .mockImplementation(() => {
        v.pool = {
          ...genesis_pool,
          bundle_proposal: {
            ...genesis_pool.bundle_proposal,
            next_uploader: "test_staker",
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

    await v["cacheProvider"].put("0", bundle[0]);
    await v["cacheProvider"].put("1", bundle[1]);

    // ACT
    await runNode.call(v);

    // ASSERT
    const txs = v["client"][0].kyve.bundles.v1beta1;
    const queries = v["lcd"][0].kyve.query.v1beta1;
    const queries2 = v["lcd"][1].kyve.query.v1beta1;
    const cacheProvider = v["cacheProvider"];
    const runtime = v["runtime"];

    // ========================
    // ASSERT CLIENT INTERFACES
    // ========================

    expect(txs.claimUploaderRole).toHaveBeenCalledTimes(1);
    expect(txs.claimUploaderRole).toHaveBeenLastCalledWith({
      staker: "test_staker",
      pool_id: "0",
    });

    expect(txs.voteBundleProposal).toHaveBeenCalledTimes(0);

    expect(txs.submitBundleProposal).toHaveBeenCalledTimes(1);
    expect(txs.submitBundleProposal).toHaveBeenLastCalledWith({
      staker: "test_staker",
      pool_id: "0",
      storage_id: "test_storage_id",
      data_size: Buffer.from(JSON.stringify(bundle)).byteLength.toString(),
      data_hash: sha256(Buffer.from(JSON.stringify(bundle))),
      from_index: "0",
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

    expect(queries.canPropose).toHaveBeenCalledTimes(2);
    expect(queries.canPropose).toHaveBeenNthCalledWith(1, {
      staker: "test_staker",
      pool_id: "0",
      proposer: "test_valaddress",
      from_index: "0",
    });
    expect(queries.canPropose).toHaveBeenNthCalledWith(2, {
      staker: "test_staker",
      pool_id: "0",
      proposer: "test_valaddress",
      from_index: "0",
    });

    expect(queries2.canPropose).toHaveBeenCalledTimes(1);
    expect(queries2.canPropose).toHaveBeenLastCalledWith({
      staker: "test_staker",
      pool_id: "0",
      proposer: "test_valaddress",
      from_index: "0",
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
    expect(cacheProvider.get).toHaveBeenNthCalledWith(1, "0");
    expect(cacheProvider.get).toHaveBeenNthCalledWith(2, "1");
    expect(cacheProvider.get).toHaveBeenNthCalledWith(3, "2");

    // =============================
    // ASSERT COMPRESSION INTERFACES
    // =============================

    expect(compression.compress).toHaveBeenCalled();

    expect(compression.decompress).toHaveBeenCalledTimes(0);

    // =============================
    // ASSERT INTEGRATION INTERFACES
    // =============================

    expect(runtime.summarizeDataBundle).toHaveBeenCalledTimes(1);

    expect(runtime.summarizeDataBundle).toHaveBeenLastCalledWith(
      expect.any(Validator),
      bundle
    );

    expect(runtime.validateDataItem).toHaveBeenCalledTimes(0);

    // ========================
    // ASSERT NODEJS INTERFACES
    // ========================

    // assert that only one round ran
    expect(v["waitForNextBundleProposal"]).toHaveBeenCalledTimes(1);

    // TODO: assert timeouts
  });

  test("submit ClaimUploaderRole tx with one rpc endpoint which fails", async () => {
    // ARRANGE
    v["client"][0].kyve.bundles.v1beta1.claimUploaderRole = jest
      .fn()
      .mockRejectedValue(new Error());

    const canProposeMock = jest.fn().mockResolvedValue({
      possible: false,
      reason: "",
    });

    v["lcd"][0].kyve.query.v1beta1.canPropose = canProposeMock;

    v["syncPoolState"] = jest
      .fn()
      .mockImplementationOnce(() => {
        v.pool = {
          ...genesis_pool,
        } as any;
      })
      .mockImplementation(() => {
        v.pool = {
          ...genesis_pool,
          bundle_proposal: {
            ...genesis_pool.bundle_proposal,
            next_uploader: "test_staker",
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

    await v["cacheProvider"].put("0", bundle[0]);
    await v["cacheProvider"].put("1", bundle[1]);

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

    expect(txs.claimUploaderRole).toHaveBeenCalledTimes(1);
    expect(txs.claimUploaderRole).toHaveBeenLastCalledWith({
      staker: "test_staker",
      pool_id: "0",
    });

    expect(txs.voteBundleProposal).toHaveBeenCalledTimes(0);

    expect(txs.submitBundleProposal).toHaveBeenCalledTimes(0);

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
      from_index: "0",
    });

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

  test("submit ClaimUploaderRole tx with two rpc endpoints where first fails", async () => {
    // ARRANGE
    v["rpc"].push("http://0.0.0.0:26657");
    v["client"].push(client());

    v["client"][0].kyve.bundles.v1beta1.claimUploaderRole = jest
      .fn()
      .mockRejectedValue(new Error());

    const canProposeMock = jest.fn().mockResolvedValue({
      possible: false,
      reason: "",
    });

    v["lcd"][0].kyve.query.v1beta1.canPropose = canProposeMock;

    v["syncPoolState"] = jest
      .fn()
      .mockImplementationOnce(() => {
        v.pool = {
          ...genesis_pool,
        } as any;
      })
      .mockImplementation(() => {
        v.pool = {
          ...genesis_pool,
          bundle_proposal: {
            ...genesis_pool.bundle_proposal,
            next_uploader: "test_staker",
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

    await v["cacheProvider"].put("0", bundle[0]);
    await v["cacheProvider"].put("1", bundle[1]);

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

    expect(txs.claimUploaderRole).toHaveBeenCalledTimes(1);
    expect(txs.claimUploaderRole).toHaveBeenLastCalledWith({
      staker: "test_staker",
      pool_id: "0",
    });

    expect(txs.voteBundleProposal).toHaveBeenCalledTimes(0);

    expect(txs.submitBundleProposal).toHaveBeenCalledTimes(0);

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
      from_index: "0",
    });

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

  test("submit ClaimUploaderRole tx with two rpc endpoints where both fail", async () => {
    // ARRANGE
    v["rpc"].push("http://0.0.0.0:26657");
    v["client"].push(client());

    v["client"][0].kyve.bundles.v1beta1.claimUploaderRole = jest
      .fn()
      .mockRejectedValue(new Error());

    v["client"][1].kyve.bundles.v1beta1.claimUploaderRole = jest
      .fn()
      .mockRejectedValue(new Error());

    const canProposeMock = jest.fn().mockResolvedValue({
      possible: false,
      reason: "",
    });

    v["lcd"][0].kyve.query.v1beta1.canPropose = canProposeMock;

    v["syncPoolState"] = jest
      .fn()
      .mockImplementationOnce(() => {
        v.pool = {
          ...genesis_pool,
        } as any;
      })
      .mockImplementation(() => {
        v.pool = {
          ...genesis_pool,
          bundle_proposal: {
            ...genesis_pool.bundle_proposal,
            next_uploader: "test_staker",
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

    await v["cacheProvider"].put("0", bundle[0]);
    await v["cacheProvider"].put("1", bundle[1]);

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

    expect(txs.claimUploaderRole).toHaveBeenCalledTimes(1);
    expect(txs.claimUploaderRole).toHaveBeenLastCalledWith({
      staker: "test_staker",
      pool_id: "0",
    });

    expect(txs.voteBundleProposal).toHaveBeenCalledTimes(0);

    expect(txs.submitBundleProposal).toHaveBeenCalledTimes(0);

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
      from_index: "0",
    });

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
});
