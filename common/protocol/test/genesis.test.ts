import { Logger } from "tslog";
import {
  bundleToBytes,
  ICompression,
  IStorageProvider,
  Validator,
  sha256,
  standardizeJSON,
  ICacheProvider,
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
  let v: Validator;

  let processExit: jest.Mock<never, never>;
  let setTimeoutMock: jest.Mock;

  let cacheProvider: ICacheProvider;
  let storageProvider: IStorageProvider;
  let compression: ICompression;

  beforeEach(() => {
    v = new Validator(new TestRuntime());

    // mock cache provider
    cacheProvider = new TestCacheProvider();
    jest
      .spyOn(Validator, "cacheProviderFactory")
      .mockImplementation(() => cacheProvider);

    v["cacheProvider"] = cacheProvider;

    // mock storage provider
    storageProvider = new TestNormalStorageProvider();
    jest
      .spyOn(Validator, "storageProviderFactory")
      .mockImplementation(() => storageProvider);

    // mock compression
    compression = new TestNormalCompression();
    jest
      .spyOn(Validator, "compressionFactory")
      .mockImplementation(() => compression);

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

  test("propose genesis bundle with valid data bundle", async () => {
    // ARRANGE
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

  test("propose genesis bundle with no data bundle", async () => {
    // ARRANGE
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

    v["cacheProvider"].get = jest
      .fn()
      .mockRejectedValue(new Error("not found"));

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
    expect(v["waitForNextBundleProposal"]).toHaveBeenCalledTimes(1);

    // TODO: assert timeouts
  });

  test("be too late to claim uploader role and instead validate", async () => {
    // ARRANGE
    v["client"][0].kyve.bundles.v1beta1.claimUploaderRole = jest
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
      expect.any(Validator),
      bundle
    );

    expect(runtime.validateDataItem).toHaveBeenCalledTimes(bundle.length);

    for (let i = 0; i < bundle.length; i++) {
      expect(runtime.validateDataItem).toHaveBeenNthCalledWith(
        i + 1,
        expect.any(Validator),
        standardizeJSON(bundle[i]),
        standardizeJSON(bundle[i])
      );
    }

    // ========================
    // ASSERT NODEJS INTERFACES
    // ========================

    // assert that only one round ran
    expect(v["waitForNextBundleProposal"]).toHaveBeenCalledTimes(1);

    // TODO: assert timeouts
  });
});
