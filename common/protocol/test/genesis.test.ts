import { Logger } from "tslog";
import {
  bundleToBytes,
  ICompression,
  IStorageProvider,
  Node,
  sha256,
  standardizeJSON,
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
import { VoteType } from "@kyvejs/types/client/kyve/bundles/v1beta1/tx";

/*

TEST CASES - genesis tests

* propose genesis bundle with valid data
* propose genesis bundle with no data bundle
* be too late to claim uploader role and instead validate

*/

describe("genesis tests", () => {
  let core: Node;

  let processExit: jest.Mock<never, never>;
  let setTimeoutMock: jest.Mock;

  let storageProvider: IStorageProvider;
  let compression: ICompression;

  beforeEach(() => {
    core = new Node(new TestRuntime());

    core["cacheProvider"] = new TestCacheProvider();

    // mock storage provider
    storageProvider = new TestNormalStorageProvider();
    core["storageProviderFactory"] = jest
      .fn()
      .mockResolvedValue(storageProvider);

    // mock compression
    compression = new TestNormalCompression();
    core["compressionFactory"] = jest.fn().mockReturnValue(compression);

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
    core.logger = new Logger();

    core.logger.info = jest.fn();
    core.logger.debug = jest.fn();
    core.logger.warn = jest.fn();
    core.logger.error = jest.fn();

    core["poolId"] = 0;
    core["staker"] = "test_staker";

    core.client = client();
    core.lcd = lcd();

    core["continueRound"] = jest
      .fn()
      .mockReturnValueOnce(true)
      .mockReturnValue(false);

    core["waitForNextBundleProposal"] = jest.fn();

    setupMetrics.call(core);
  });

  afterEach(() => {
    // reset prometheus
    register.clear();
  });

  test("propose genesis bundle with valid data bundle", async () => {
    // ARRANGE
    core["syncPoolState"] = jest
      .fn()
      .mockImplementationOnce(() => {
        core.pool = {
          ...genesis_pool,
        } as any;
      })
      .mockImplementation(() => {
        core.pool = {
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

    await core["cacheProvider"].put("0", bundle[0]);
    await core["cacheProvider"].put("1", bundle[1]);

    // ACT
    await runNode.call(core);

    // ASSERT
    const txs = core["client"].kyve.bundles.v1beta1;
    const queries = core["lcd"].kyve.query.v1beta1;
    const cacheProvider = core["cacheProvider"];
    const runtime = core["runtime"];

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

    expect(compression.compress).toHaveBeenCalledTimes(1);
    expect(compression.compress).toHaveBeenLastCalledWith(
      Buffer.from(JSON.stringify(bundle))
    );

    expect(compression.decompress).toHaveBeenCalledTimes(0);

    // =============================
    // ASSERT INTEGRATION INTERFACES
    // =============================

    expect(runtime.summarizeDataBundle).toHaveBeenCalledTimes(1);

    expect(runtime.summarizeDataBundle).toHaveBeenLastCalledWith(
      expect.any(Node),
      bundle
    );

    expect(runtime.validateDataItem).toHaveBeenCalledTimes(0);

    // ========================
    // ASSERT NODEJS INTERFACES
    // ========================

    // assert that only one round ran
    expect(core["waitForNextBundleProposal"]).toHaveBeenCalledTimes(1);

    // TODO: assert timeouts
  });

  test("propose genesis bundle with no data bundle", async () => {
    // ARRANGE
    core["syncPoolState"] = jest
      .fn()
      .mockImplementationOnce(() => {
        core.pool = {
          ...genesis_pool,
        } as any;
      })
      .mockImplementation(() => {
        core.pool = {
          ...genesis_pool,
          bundle_proposal: {
            ...genesis_pool.bundle_proposal,
            next_uploader: "test_staker",
          },
        } as any;
      });

    core["cacheProvider"].get = jest
      .fn()
      .mockRejectedValue(new Error("not found"));

    // ACT
    await runNode.call(core);

    // ASSERT
    const txs = core["client"].kyve.bundles.v1beta1;
    const queries = core["lcd"].kyve.query.v1beta1;
    const cacheProvider = core["cacheProvider"];
    const runtime = core["runtime"];

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

    expect(txs.skipUploaderRole).toHaveBeenCalledTimes(1);
    expect(txs.skipUploaderRole).toHaveBeenLastCalledWith({
      staker: "test_staker",
      pool_id: "0",
      from_index: "0",
    });

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

    expect(cacheProvider.get).toHaveBeenCalledTimes(1);
    expect(cacheProvider.get).toHaveBeenNthCalledWith(1, "0");

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
    expect(core["waitForNextBundleProposal"]).toHaveBeenCalledTimes(1);

    // TODO: assert timeouts
  });

  test("be too late to claim uploader role and instead validate", async () => {
    // ARRANGE
    core["client"].kyve.bundles.v1beta1.claimUploaderRole = jest
      .fn()
      .mockResolvedValue({
        txHash: "test_hash",
        execute: jest.fn().mockResolvedValue({
          code: 1,
        }),
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

    const bundleBytes = bundleToBytes(bundle);
    const compressedBundle = bundleBytes; // no compression
    const dataSize = compressedBundle.byteLength.toString();
    const dataHash = sha256(bundleBytes);

    core["syncPoolState"] = jest
      .fn()
      .mockImplementationOnce(() => {
        core.pool = {
          ...genesis_pool,
        } as any;
      })
      .mockImplementation(() => {
        core.pool = {
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

    core["cacheProvider"].get = jest
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
    await runNode.call(core);

    // ASSERT
    const txs = core["client"].kyve.bundles.v1beta1;
    const queries = core["lcd"].kyve.query.v1beta1;
    const cacheProvider = core["cacheProvider"];
    const runtime = core["runtime"];

    // ========================
    // ASSERT CLIENT INTERFACES
    // ========================

    expect(txs.claimUploaderRole).toHaveBeenCalledTimes(1);
    expect(txs.claimUploaderRole).toHaveBeenLastCalledWith({
      staker: "test_staker",
      pool_id: "0",
    });

    expect(txs.voteBundleProposal).toHaveBeenCalledTimes(1);
    expect(txs.voteBundleProposal).toHaveBeenLastCalledWith({
      staker: "test_staker",
      pool_id: "0",
      storage_id: "another_test_storage_id",
      vote: VoteType.VOTE_TYPE_VALID,
    });

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
      expect.any(Node),
      bundle
    );

    expect(runtime.validateDataItem).toHaveBeenCalledTimes(bundle.length);

    for (let i = 0; i < bundle.length; i++) {
      expect(runtime.validateDataItem).toHaveBeenNthCalledWith(
        i + 1,
        expect.any(Node),
        standardizeJSON(bundle[i]),
        standardizeJSON(bundle[i])
      );
    }

    // ========================
    // ASSERT NODEJS INTERFACES
    // ========================

    // assert that only one round ran
    expect(core["waitForNextBundleProposal"]).toHaveBeenCalledTimes(1);

    // TODO: assert timeouts
  });
});
