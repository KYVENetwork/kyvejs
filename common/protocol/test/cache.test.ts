import { Logger } from "tslog";
import { DataItem, ICompression, IStorageProvider, Node } from "../src/index";
import { runCache } from "../src/methods/main/runCache";
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

TEST CASES - cache tests

* start caching from a pool which is in genesis state
* start caching from a pool which has a bundle proposal ongoing
* continue caching from a pool which has a bundle proposal ongoing
* start caching from a pool where last bundle proposal was dropped
* start caching from a pool where getNextDataItem fails once
* start caching from a pool where getNextDataItem fails multiple times
* start caching from a pool where transformDataItem fails
* start caching from a pool where nextKey fails
* start caching from a pool where cache methods fail
* TODO: test with pool config that has no source object
* TODO: test with pool config that has zero sources
* TODO: start caching from a pool where node has not cached anything yet

*/

describe("cache tests", () => {
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
    core["poolConfig"] = {
      sources: ["https://rpc.api.moonbeam.network"],
    };

    core.client = client();
    core.lcd = lcd();

    core["continueRound"] = jest
      .fn()
      .mockReturnValueOnce(true)
      .mockReturnValue(false);

    core["waitForCacheContinuation"] = jest.fn();

    setupMetrics.call(core);
  });

  afterEach(() => {
    // reset prometheus
    register.clear();
  });

  test("start caching from a pool which is in genesis state", async () => {
    // ARRANGE
    core.pool = {
      ...genesis_pool,
    } as any;

    // ACT
    await runCache.call(core);

    // ASSERT
    const txs = core["client"].kyve.bundles.v1beta1;
    const queries = core["lcd"].kyve.query.v1beta1;
    const cacheProvider = core["cacheProvider"];
    const runtime = core["runtime"];

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

    expect(queries.canVote).toHaveBeenCalledTimes(0);

    expect(queries.canPropose).toHaveBeenCalledTimes(0);

    // =========================
    // ASSERT STORAGE INTERFACES
    // =========================

    expect(storageProvider.saveBundle).toHaveBeenCalledTimes(0);

    expect(storageProvider.retrieveBundle).toHaveBeenCalledTimes(0);

    // =======================
    // ASSERT CACHE INTERFACES
    // =======================

    expect(cacheProvider.put).toHaveBeenCalledTimes(
      parseInt(genesis_pool.data.max_bundle_size)
    );

    for (let n = 0; n < parseInt(genesis_pool.data.max_bundle_size); n++) {
      const item = {
        key: n.toString(),
        value: `${n}-value-transform`,
      };
      expect(cacheProvider.put).toHaveBeenNthCalledWith(
        n + 1,
        n.toString(),
        item
      );
    }

    expect(cacheProvider.get).toHaveBeenCalledTimes(0);

    expect(cacheProvider.exists).toHaveBeenCalledTimes(
      parseInt(genesis_pool.data.max_bundle_size)
    );

    for (let n = 0; n < parseInt(genesis_pool.data.max_bundle_size); n++) {
      expect(cacheProvider.exists).toHaveBeenNthCalledWith(n + 1, n.toString());
    }

    expect(cacheProvider.del).toHaveBeenCalledTimes(0);

    expect(cacheProvider.drop).toHaveBeenCalledTimes(1);

    // =============================
    // ASSERT COMPRESSION INTERFACES
    // =============================

    expect(compression.compress).toHaveBeenCalledTimes(0);

    expect(compression.decompress).toHaveBeenCalledTimes(0);

    // =========================
    // ASSERT RUNTIME INTERFACES
    // =========================

    expect(runtime.getDataItem).toHaveBeenCalledTimes(
      parseInt(genesis_pool.data.max_bundle_size)
    );

    for (let n = 0; n < parseInt(genesis_pool.data.max_bundle_size); n++) {
      expect(runtime.getDataItem).toHaveBeenNthCalledWith(
        n + 1,
        core,
        core.poolConfig.sources[0],
        n.toString()
      );
    }

    expect(runtime.transformDataItem).toHaveBeenCalledTimes(
      parseInt(genesis_pool.data.max_bundle_size)
    );

    for (let n = 0; n < parseInt(genesis_pool.data.max_bundle_size); n++) {
      const item = {
        key: n.toString(),
        value: `${n}-value`,
      };
      expect(runtime.transformDataItem).toHaveBeenNthCalledWith(
        n + 1,
        expect.any(Node),
        item
      );
    }

    expect(runtime.validateDataItem).toHaveBeenCalledTimes(0);

    // we only call getNextKey max_bundle_size - 1 because
    // the pool is in genesis state and therefore start_key
    // is used for the first time
    expect(runtime.nextKey).toHaveBeenCalledTimes(
      parseInt(genesis_pool.data.max_bundle_size) - 1
    );

    for (let n = 0; n < parseInt(genesis_pool.data.max_bundle_size) - 1; n++) {
      expect(runtime.nextKey).toHaveBeenNthCalledWith(
        n + 1,
        expect.any(Node),
        n.toString()
      );
    }

    expect(runtime.summarizeDataBundle).toHaveBeenCalledTimes(0);

    // ========================
    // ASSERT NODEJS INTERFACES
    // ========================

    // assert that only one round ran
    expect(core["waitForCacheContinuation"]).toHaveBeenCalledTimes(1);

    // TODO: assert timeouts
  });

  test("start caching from a pool which has a bundle proposal ongoing", async () => {
    // ARRANGE
    core.pool = {
      ...genesis_pool,
      data: {
        ...genesis_pool.data,
        current_key: "99",
        current_index: "100",
      },
      bundle_proposal: {
        ...genesis_pool.bundle_proposal,
        storage_id: "test_storage_id",
        uploader: "test_staker",
        next_uploader: "test_staker",
        data_size: "123456789",
        data_hash: "test_bundle_hash",
        bundle_size: "50",
        from_key: "100",
        to_key: "149",
        bundle_summary: "test_summary",
        updated_at: "0",
        voters_valid: ["test_staker"],
      },
    } as any;

    // ACT
    await runCache.call(core);

    // ASSERT
    const txs = core["client"].kyve.bundles.v1beta1;
    const queries = core["lcd"].kyve.query.v1beta1;
    const cacheProvider = core["cacheProvider"];
    const runtime = core["runtime"];

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

    expect(queries.canVote).toHaveBeenCalledTimes(0);

    expect(queries.canPropose).toHaveBeenCalledTimes(0);

    // =========================
    // ASSERT STORAGE INTERFACES
    // =========================

    expect(storageProvider.saveBundle).toHaveBeenCalledTimes(0);

    expect(storageProvider.retrieveBundle).toHaveBeenCalledTimes(0);

    // =======================
    // ASSERT CACHE INTERFACES
    // =======================

    expect(cacheProvider.put).toHaveBeenCalledTimes(
      parseInt(genesis_pool.data.max_bundle_size) + 50
    );

    for (let n = 0; n < parseInt(genesis_pool.data.max_bundle_size) + 50; n++) {
      const item = {
        key: (n + parseInt(genesis_pool.data.max_bundle_size)).toString(),
        value: `${
          n + parseInt(genesis_pool.data.max_bundle_size)
        }-value-transform`,
      };
      expect(cacheProvider.put).toHaveBeenNthCalledWith(
        n + 1,
        (n + parseInt(genesis_pool.data.max_bundle_size)).toString(),
        item
      );
    }

    expect(cacheProvider.get).toHaveBeenCalledTimes(0);

    expect(cacheProvider.exists).toHaveBeenCalledTimes(
      parseInt(genesis_pool.data.max_bundle_size) * 2 + 50
    );

    for (let n = 0; n < parseInt(genesis_pool.data.max_bundle_size); n++) {
      expect(cacheProvider.exists).toHaveBeenNthCalledWith(n + 1, n.toString());
    }

    for (
      let n = parseInt(genesis_pool.data.max_bundle_size);
      n < parseInt(genesis_pool.data.max_bundle_size) * 2 + 50;
      n++
    ) {
      expect(cacheProvider.exists).toHaveBeenNthCalledWith(n + 1, n.toString());
    }

    expect(cacheProvider.del).toHaveBeenCalledTimes(0);

    expect(cacheProvider.drop).toHaveBeenCalledTimes(0);

    // =============================
    // ASSERT COMPRESSION INTERFACES
    // =============================

    expect(compression.compress).toHaveBeenCalledTimes(0);

    expect(compression.decompress).toHaveBeenCalledTimes(0);

    // =========================
    // ASSERT RUNTIME INTERFACES
    // =========================

    expect(runtime.getDataItem).toHaveBeenCalledTimes(
      parseInt(genesis_pool.data.max_bundle_size) + 50
    );

    for (let n = 0; n < parseInt(genesis_pool.data.max_bundle_size) + 50; n++) {
      expect(runtime.getDataItem).toHaveBeenNthCalledWith(
        n + 1,
        core,
        core.poolConfig.sources[0],
        (n + parseInt(genesis_pool.data.max_bundle_size)).toString()
      );
    }

    expect(runtime.transformDataItem).toHaveBeenCalledTimes(
      parseInt(genesis_pool.data.max_bundle_size) + 50
    );

    for (let n = 0; n < parseInt(genesis_pool.data.max_bundle_size) + 50; n++) {
      const item = {
        key: (n + parseInt(genesis_pool.data.max_bundle_size)).toString(),
        value: `${n + parseInt(genesis_pool.data.max_bundle_size)}-value`,
      };
      expect(runtime.transformDataItem).toHaveBeenNthCalledWith(
        n + 1,
        expect.any(Node),
        item
      );
    }

    expect(runtime.validateDataItem).toHaveBeenCalledTimes(0);

    expect(runtime.nextKey).toHaveBeenCalledTimes(
      parseInt(genesis_pool.data.max_bundle_size) + 50
    );

    // here we subtract the key - 1 because we start using the
    // current key
    for (let n = 0; n < parseInt(genesis_pool.data.max_bundle_size) + 50; n++) {
      expect(runtime.nextKey).toHaveBeenNthCalledWith(
        n + 1,
        expect.any(Node),
        (n + parseInt(genesis_pool.data.max_bundle_size) - 1).toString()
      );
    }

    expect(runtime.summarizeDataBundle).toHaveBeenCalledTimes(0);

    // ========================
    // ASSERT NODEJS INTERFACES
    // ========================

    // assert that only one round ran
    expect(core["waitForCacheContinuation"]).toHaveBeenCalledTimes(1);

    // TODO: assert timeouts
  });

  test("continue caching from a pool which has a bundle proposal ongoing", async () => {
    // ARRANGE
    core["cacheProvider"].exists = jest
      .fn()
      .mockImplementation((key: string) => {
        const height = parseInt(key);
        return height >= 100 && height <= 102;
      });

    core.pool = {
      ...genesis_pool,
      data: {
        ...genesis_pool.data,
        current_key: "99",
        current_index: "100",
      },
      bundle_proposal: {
        ...genesis_pool.bundle_proposal,
        storage_id: "test_storage_id",
        uploader: "test_staker",
        next_uploader: "test_staker",
        data_size: "123456789",
        data_hash: "test_bundle_hash",
        bundle_size: "3",
        from_key: "100",
        to_key: "102",
        bundle_summary: "test_summary",
        updated_at: "0",
        voters_valid: ["test_staker"],
      },
    } as any;

    // ACT
    await runCache.call(core);

    // ASSERT
    const txs = core["client"].kyve.bundles.v1beta1;
    const queries = core["lcd"].kyve.query.v1beta1;
    const cacheProvider = core["cacheProvider"];
    const runtime = core["runtime"];

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

    expect(queries.canVote).toHaveBeenCalledTimes(0);

    expect(queries.canPropose).toHaveBeenCalledTimes(0);

    // =========================
    // ASSERT STORAGE INTERFACES
    // =========================

    expect(storageProvider.saveBundle).toHaveBeenCalledTimes(0);

    expect(storageProvider.retrieveBundle).toHaveBeenCalledTimes(0);

    // =======================
    // ASSERT CACHE INTERFACES
    // =======================

    expect(cacheProvider.put).toHaveBeenCalledTimes(
      parseInt(genesis_pool.data.max_bundle_size)
    );

    for (let n = 0; n < parseInt(genesis_pool.data.max_bundle_size); n++) {
      const item = {
        key: (n + parseInt(genesis_pool.data.max_bundle_size) + 3).toString(),
        value: `${
          n + parseInt(genesis_pool.data.max_bundle_size) + 3
        }-value-transform`,
      };
      expect(cacheProvider.put).toHaveBeenNthCalledWith(
        n + 1,
        (n + parseInt(genesis_pool.data.max_bundle_size) + 3).toString(),
        item
      );
    }

    expect(cacheProvider.get).toHaveBeenCalledTimes(0);

    expect(cacheProvider.exists).toHaveBeenCalledTimes(
      parseInt(genesis_pool.data.max_bundle_size) * 2 + 3
    );

    for (let n = 0; n < parseInt(genesis_pool.data.max_bundle_size); n++) {
      expect(cacheProvider.exists).toHaveBeenNthCalledWith(n + 1, n.toString());
    }

    for (
      let n = parseInt(genesis_pool.data.max_bundle_size);
      n < parseInt(genesis_pool.data.max_bundle_size) * 2 + 3;
      n++
    ) {
      expect(cacheProvider.exists).toHaveBeenNthCalledWith(n + 1, n.toString());
    }

    expect(cacheProvider.del).toHaveBeenCalledTimes(0);

    expect(cacheProvider.drop).toHaveBeenCalledTimes(0);

    // =============================
    // ASSERT COMPRESSION INTERFACES
    // =============================

    expect(compression.compress).toHaveBeenCalledTimes(0);

    expect(compression.decompress).toHaveBeenCalledTimes(0);

    // =========================
    // ASSERT RUNTIME INTERFACES
    // =========================

    expect(runtime.getDataItem).toHaveBeenCalledTimes(
      parseInt(genesis_pool.data.max_bundle_size)
    );

    for (let n = 0; n < parseInt(genesis_pool.data.max_bundle_size); n++) {
      expect(runtime.getDataItem).toHaveBeenNthCalledWith(
        n + 1,
        core,
        core.poolConfig.sources[0],
        (n + parseInt(genesis_pool.data.max_bundle_size) + 3).toString()
      );
    }

    expect(runtime.transformDataItem).toHaveBeenCalledTimes(
      parseInt(genesis_pool.data.max_bundle_size)
    );

    for (let n = 0; n < parseInt(genesis_pool.data.max_bundle_size); n++) {
      const item = {
        key: (n + parseInt(genesis_pool.data.max_bundle_size) + 3).toString(),
        value: `${n + parseInt(genesis_pool.data.max_bundle_size) + 3}-value`,
      };
      expect(runtime.transformDataItem).toHaveBeenNthCalledWith(
        n + 1,
        expect.any(Node),
        item
      );
    }

    expect(runtime.validateDataItem).toHaveBeenCalledTimes(0);

    expect(runtime.nextKey).toHaveBeenCalledTimes(
      parseInt(genesis_pool.data.max_bundle_size) + 3
    );

    // here we subtract the key - 1 because we start using the
    // current key
    for (let n = 0; n < parseInt(genesis_pool.data.max_bundle_size) + 3; n++) {
      expect(runtime.nextKey).toHaveBeenNthCalledWith(
        n + 1,
        expect.any(Node),
        (n + 100 - 1).toString()
      );
    }

    expect(runtime.summarizeDataBundle).toHaveBeenCalledTimes(0);

    // ========================
    // ASSERT NODEJS INTERFACES
    // ========================

    // assert that only one round ran
    expect(core["waitForCacheContinuation"]).toHaveBeenCalledTimes(1);

    // TODO: assert timeouts
  });

  test("start caching from a pool where last bundle proposal was dropped", async () => {
    // ARRANGE
    core.pool = {
      ...genesis_pool,
      data: {
        ...genesis_pool.data,
        current_key: "99",
        current_index: "100",
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

    // ACT
    await runCache.call(core);

    // ASSERT
    const txs = core["client"].kyve.bundles.v1beta1;
    const queries = core["lcd"].kyve.query.v1beta1;
    const cacheProvider = core["cacheProvider"];
    const runtime = core["runtime"];

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

    expect(queries.canVote).toHaveBeenCalledTimes(0);

    expect(queries.canPropose).toHaveBeenCalledTimes(0);

    // =========================
    // ASSERT STORAGE INTERFACES
    // =========================

    expect(storageProvider.saveBundle).toHaveBeenCalledTimes(0);

    expect(storageProvider.retrieveBundle).toHaveBeenCalledTimes(0);

    // =======================
    // ASSERT CACHE INTERFACES
    // =======================

    expect(cacheProvider.put).toHaveBeenCalledTimes(
      parseInt(genesis_pool.data.max_bundle_size)
    );

    for (let n = 0; n < parseInt(genesis_pool.data.max_bundle_size); n++) {
      const item = {
        key: (n + parseInt(genesis_pool.data.max_bundle_size)).toString(),
        value: `${
          n + parseInt(genesis_pool.data.max_bundle_size)
        }-value-transform`,
      };
      expect(cacheProvider.put).toHaveBeenNthCalledWith(
        n + 1,
        (n + parseInt(genesis_pool.data.max_bundle_size)).toString(),
        item
      );
    }

    expect(cacheProvider.get).toHaveBeenCalledTimes(0);

    expect(cacheProvider.exists).toHaveBeenCalledTimes(
      parseInt(genesis_pool.data.max_bundle_size) * 2
    );

    for (let n = 0; n < parseInt(genesis_pool.data.max_bundle_size) * 2; n++) {
      expect(cacheProvider.exists).toHaveBeenNthCalledWith(n + 1, n.toString());
    }

    expect(cacheProvider.del).toHaveBeenCalledTimes(0);

    expect(cacheProvider.drop).toHaveBeenCalledTimes(1);

    // =============================
    // ASSERT COMPRESSION INTERFACES
    // =============================

    expect(compression.compress).toHaveBeenCalledTimes(0);

    expect(compression.decompress).toHaveBeenCalledTimes(0);

    // =========================
    // ASSERT RUNTIME INTERFACES
    // =========================

    expect(runtime.getDataItem).toHaveBeenCalledTimes(
      parseInt(genesis_pool.data.max_bundle_size)
    );

    for (let n = 0; n < parseInt(genesis_pool.data.max_bundle_size); n++) {
      expect(runtime.getDataItem).toHaveBeenNthCalledWith(
        n + 1,
        core,
        core.poolConfig.sources[0],
        (n + parseInt(genesis_pool.data.max_bundle_size)).toString()
      );
    }

    expect(runtime.transformDataItem).toHaveBeenCalledTimes(
      parseInt(genesis_pool.data.max_bundle_size)
    );

    for (let n = 0; n < parseInt(genesis_pool.data.max_bundle_size); n++) {
      const item = {
        key: (n + parseInt(genesis_pool.data.max_bundle_size)).toString(),
        value: `${n + parseInt(genesis_pool.data.max_bundle_size)}-value`,
      };
      expect(runtime.transformDataItem).toHaveBeenNthCalledWith(
        n + 1,
        expect.any(Node),
        item
      );
    }

    expect(runtime.validateDataItem).toHaveBeenCalledTimes(0);

    expect(runtime.nextKey).toHaveBeenCalledTimes(
      parseInt(genesis_pool.data.max_bundle_size)
    );

    // here we subtract the key - 1 because we start using the
    // current key
    for (let n = 0; n < parseInt(genesis_pool.data.max_bundle_size); n++) {
      expect(runtime.nextKey).toHaveBeenNthCalledWith(
        n + 1,
        expect.any(Node),
        (n + parseInt(genesis_pool.data.max_bundle_size) - 1).toString()
      );
    }

    expect(runtime.summarizeDataBundle).toHaveBeenCalledTimes(0);

    // ========================
    // ASSERT NODEJS INTERFACES
    // ========================

    // assert that only one round ran
    expect(core["waitForCacheContinuation"]).toHaveBeenCalledTimes(1);

    // TODO: assert timeouts
  });

  test("start caching from a pool where getNextDataItem fails once", async () => {
    // ARRANGE
    core["runtime"].getDataItem = jest
      .fn()
      .mockImplementationOnce((_: Node, __: string, key: string) =>
        Promise.resolve({
          key,
          value: `${key}-value`,
        })
      )
      .mockRejectedValueOnce(new Error("network error"))
      .mockImplementation((_: Node, __: string, key: string) =>
        Promise.resolve({
          key,
          value: `${key}-value`,
        })
      );

    core.pool = {
      ...genesis_pool,
      data: {
        ...genesis_pool.data,
        max_bundle_size: "2",
      },
    } as any;

    // ACT
    await runCache.call(core);

    // ASSERT
    const txs = core["client"].kyve.bundles.v1beta1;
    const queries = core["lcd"].kyve.query.v1beta1;
    const cacheProvider = core["cacheProvider"];
    const runtime = core["runtime"];

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

    expect(queries.canVote).toHaveBeenCalledTimes(0);

    expect(queries.canPropose).toHaveBeenCalledTimes(0);

    // =========================
    // ASSERT STORAGE INTERFACES
    // =========================

    expect(storageProvider.saveBundle).toHaveBeenCalledTimes(0);

    expect(storageProvider.retrieveBundle).toHaveBeenCalledTimes(0);

    // =======================
    // ASSERT CACHE INTERFACES
    // =======================

    expect(cacheProvider.put).toHaveBeenCalledTimes(2);

    for (let n = 0; n < 2; n++) {
      const item = {
        key: n.toString(),
        value: `${n}-value-transform`,
      };
      expect(cacheProvider.put).toHaveBeenNthCalledWith(
        n + 1,
        n.toString(),
        item
      );
    }

    expect(cacheProvider.get).toHaveBeenCalledTimes(0);

    expect(cacheProvider.exists).toHaveBeenCalledTimes(2);

    for (let n = 0; n < 2; n++) {
      expect(cacheProvider.exists).toHaveBeenNthCalledWith(n + 1, n.toString());
    }

    expect(cacheProvider.del).toHaveBeenCalledTimes(0);

    expect(cacheProvider.drop).toHaveBeenCalledTimes(1);

    // =============================
    // ASSERT COMPRESSION INTERFACES
    // =============================

    expect(compression.compress).toHaveBeenCalledTimes(0);

    expect(compression.decompress).toHaveBeenCalledTimes(0);

    // =========================
    // ASSERT RUNTIME INTERFACES
    // =========================

    expect(runtime.getDataItem).toHaveBeenCalledTimes(2 + 1);

    expect(runtime.getDataItem).toHaveBeenNthCalledWith(
      1,
      expect.any(Node),
      core.poolConfig.sources[0],
      "0"
    );
    expect(runtime.getDataItem).toHaveBeenNthCalledWith(
      2,
      expect.any(Node),
      core.poolConfig.sources[0],
      "1"
    );
    expect(runtime.getDataItem).toHaveBeenNthCalledWith(
      3,
      expect.any(Node),
      core.poolConfig.sources[0],
      "1"
    );

    expect(runtime.transformDataItem).toHaveBeenCalledTimes(2);

    for (let n = 0; n < 2; n++) {
      const item = {
        key: n.toString(),
        value: `${n}-value`,
      };
      expect(runtime.transformDataItem).toHaveBeenNthCalledWith(
        n + 1,
        expect.any(Node),
        item
      );
    }

    expect(runtime.validateDataItem).toHaveBeenCalledTimes(0);

    // we only call getNextKey max_bundle_size - 1 because
    // the pool is in genesis state and therefore start_key
    // is used for the first time
    expect(runtime.nextKey).toHaveBeenCalledTimes(2 - 1);

    for (let n = 0; n < 2 - 1; n++) {
      expect(runtime.nextKey).toHaveBeenNthCalledWith(
        n + 1,
        expect.any(Node),
        n.toString()
      );
    }

    expect(runtime.summarizeDataBundle).toHaveBeenCalledTimes(0);

    // ========================
    // ASSERT NODEJS INTERFACES
    // ========================

    // assert that only one round ran
    expect(core["waitForCacheContinuation"]).toHaveBeenCalledTimes(1);

    // TODO: assert timeouts
  });

  test("start caching from a pool where getNextDataItem fails multiple times", async () => {
    // ARRANGE
    core["runtime"].getDataItem = jest
      .fn()
      .mockImplementationOnce((_: Node, __: string, key: string) =>
        Promise.resolve({
          key,
          value: `${key}-value`,
        })
      )
      .mockRejectedValueOnce(new Error("network error"))
      .mockImplementationOnce((_: Node, __: string, key: string) =>
        Promise.resolve({
          key,
          value: `${key}-value`,
        })
      )
      .mockRejectedValueOnce(new Error("network error"))
      .mockImplementation((_: Node, __: string, key: string) =>
        Promise.resolve({
          key,
          value: `${key}-value`,
        })
      );

    core["cacheProvider"].exists = jest
      .fn()
      .mockImplementation((key: string) => {
        const height = parseInt(key);
        return height >= 100 && height <= 102;
      });

    core.pool = {
      ...genesis_pool,
      data: {
        ...genesis_pool.data,
        current_key: "99",
        current_index: "100",
      },
      bundle_proposal: {
        ...genesis_pool.bundle_proposal,
        storage_id: "test_storage_id",
        uploader: "test_staker",
        next_uploader: "test_staker",
        data_size: "123456789",
        data_hash: "test_bundle_hash",
        bundle_size: "3",
        from_key: "100",
        to_key: "102",
        bundle_summary: "test_summary",
        updated_at: "0",
        voters_valid: ["test_staker"],
      },
    } as any;

    // ACT
    await runCache.call(core);

    // ASSERT
    const txs = core["client"].kyve.bundles.v1beta1;
    const queries = core["lcd"].kyve.query.v1beta1;
    const cacheProvider = core["cacheProvider"];
    const runtime = core["runtime"];

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

    expect(queries.canVote).toHaveBeenCalledTimes(0);

    expect(queries.canPropose).toHaveBeenCalledTimes(0);

    // =========================
    // ASSERT STORAGE INTERFACES
    // =========================

    expect(storageProvider.saveBundle).toHaveBeenCalledTimes(0);

    expect(storageProvider.retrieveBundle).toHaveBeenCalledTimes(0);

    // =======================
    // ASSERT CACHE INTERFACES
    // =======================

    expect(cacheProvider.put).toHaveBeenCalledTimes(
      parseInt(genesis_pool.data.max_bundle_size)
    );

    for (let n = 0; n < parseInt(genesis_pool.data.max_bundle_size); n++) {
      const item = {
        key: (n + parseInt(genesis_pool.data.max_bundle_size) + 3).toString(),
        value: `${
          n + parseInt(genesis_pool.data.max_bundle_size) + 3
        }-value-transform`,
      };
      expect(cacheProvider.put).toHaveBeenNthCalledWith(
        n + 1,
        (n + parseInt(genesis_pool.data.max_bundle_size) + 3).toString(),
        item
      );
    }

    expect(cacheProvider.get).toHaveBeenCalledTimes(0);

    expect(cacheProvider.exists).toHaveBeenCalledTimes(
      parseInt(genesis_pool.data.max_bundle_size) * 2 + 3
    );

    for (let n = 0; n < parseInt(genesis_pool.data.max_bundle_size); n++) {
      expect(cacheProvider.exists).toHaveBeenNthCalledWith(n + 1, n.toString());
    }

    for (
      let n = parseInt(genesis_pool.data.max_bundle_size);
      n < parseInt(genesis_pool.data.max_bundle_size) * 2 + 3;
      n++
    ) {
      expect(cacheProvider.exists).toHaveBeenNthCalledWith(n + 1, n.toString());
    }

    expect(cacheProvider.del).toHaveBeenCalledTimes(0);

    expect(cacheProvider.drop).toHaveBeenCalledTimes(0);

    // =============================
    // ASSERT COMPRESSION INTERFACES
    // =============================

    expect(compression.compress).toHaveBeenCalledTimes(0);

    expect(compression.decompress).toHaveBeenCalledTimes(0);

    // =========================
    // ASSERT RUNTIME INTERFACES
    // =========================

    expect(runtime.getDataItem).toHaveBeenCalledTimes(
      parseInt(genesis_pool.data.max_bundle_size) + 2
    );

    expect(runtime.getDataItem).toHaveBeenNthCalledWith(
      1,
      core,
      core.poolConfig.sources[0],
      (0 + parseInt(genesis_pool.data.max_bundle_size) + 3).toString()
    );

    expect(runtime.getDataItem).toHaveBeenNthCalledWith(
      2,
      core,
      core.poolConfig.sources[0],
      (1 + parseInt(genesis_pool.data.max_bundle_size) + 3).toString()
    );

    expect(runtime.getDataItem).toHaveBeenNthCalledWith(
      3,
      core,
      core.poolConfig.sources[0],
      (1 + parseInt(genesis_pool.data.max_bundle_size) + 3).toString()
    );

    expect(runtime.getDataItem).toHaveBeenNthCalledWith(
      4,
      core,
      core.poolConfig.sources[0],
      (2 + parseInt(genesis_pool.data.max_bundle_size) + 3).toString()
    );

    expect(runtime.getDataItem).toHaveBeenNthCalledWith(
      5,
      core,
      core.poolConfig.sources[0],
      (2 + parseInt(genesis_pool.data.max_bundle_size) + 3).toString()
    );

    expect(runtime.getDataItem).toHaveBeenNthCalledWith(
      6,
      core,
      core.poolConfig.sources[0],
      (3 + parseInt(genesis_pool.data.max_bundle_size) + 3).toString()
    );

    expect(runtime.getDataItem).toHaveBeenNthCalledWith(
      7,
      core,
      core.poolConfig.sources[0],
      (4 + parseInt(genesis_pool.data.max_bundle_size) + 3).toString()
    );

    expect(runtime.getDataItem).toHaveBeenNthCalledWith(
      8,
      core,
      core.poolConfig.sources[0],
      (5 + parseInt(genesis_pool.data.max_bundle_size) + 3).toString()
    );

    // ...

    expect(runtime.transformDataItem).toHaveBeenCalledTimes(
      parseInt(genesis_pool.data.max_bundle_size)
    );

    for (let n = 0; n < parseInt(genesis_pool.data.max_bundle_size); n++) {
      const item = {
        key: (n + parseInt(genesis_pool.data.max_bundle_size) + 3).toString(),
        value: `${n + parseInt(genesis_pool.data.max_bundle_size) + 3}-value`,
      };
      expect(runtime.transformDataItem).toHaveBeenNthCalledWith(
        n + 1,
        expect.any(Node),
        item
      );
    }

    expect(runtime.validateDataItem).toHaveBeenCalledTimes(0);

    expect(runtime.nextKey).toHaveBeenCalledTimes(
      parseInt(genesis_pool.data.max_bundle_size) + 3
    );

    // here we subtract the key - 1 because we start using the
    // current key
    for (let n = 0; n < parseInt(genesis_pool.data.max_bundle_size) + 3; n++) {
      expect(runtime.nextKey).toHaveBeenNthCalledWith(
        n + 1,
        expect.any(Node),
        (n + 100 - 1).toString()
      );
    }

    expect(runtime.summarizeDataBundle).toHaveBeenCalledTimes(0);

    // ========================
    // ASSERT NODEJS INTERFACES
    // ========================

    // assert that only one round ran
    expect(core["waitForCacheContinuation"]).toHaveBeenCalledTimes(1);

    // TODO: assert timeouts
  });

  test("start caching from a pool where transformDataItem fails", async () => {
    // ARRANGE
    core["runtime"].transformDataItem = jest
      .fn()
      .mockImplementationOnce((_: Node, item: DataItem) =>
        Promise.resolve({
          key: item.key,
          value: `${item.value}-transform`,
        })
      )
      .mockImplementationOnce((_: Node, item: DataItem) =>
        Promise.resolve({
          key: item.key,
          value: `${item.value}-transform`,
        })
      )
      .mockRejectedValueOnce(new Error())
      .mockImplementation((_: Node, item: DataItem) =>
        Promise.resolve({
          key: item.key,
          value: `${item.value}-transform`,
        })
      );

    core.pool = {
      ...genesis_pool,
      data: {
        ...genesis_pool.data,
        max_bundle_size: "5",
      },
    } as any;

    // ACT
    await runCache.call(core);

    // ASSERT
    const txs = core["client"].kyve.bundles.v1beta1;
    const queries = core["lcd"].kyve.query.v1beta1;
    const cacheProvider = core["cacheProvider"];
    const runtime = core["runtime"];

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

    expect(queries.canVote).toHaveBeenCalledTimes(0);

    expect(queries.canPropose).toHaveBeenCalledTimes(0);

    // =========================
    // ASSERT STORAGE INTERFACES
    // =========================

    expect(storageProvider.saveBundle).toHaveBeenCalledTimes(0);

    expect(storageProvider.retrieveBundle).toHaveBeenCalledTimes(0);

    // =======================
    // ASSERT CACHE INTERFACES
    // =======================

    expect(cacheProvider.put).toHaveBeenCalledTimes(5);

    for (let n = 0; n < 5; n++) {
      if (n === 2) {
        const item = {
          key: n.toString(),
          value: `${n}-value`,
        };
        expect(cacheProvider.put).toHaveBeenNthCalledWith(
          n + 1,
          n.toString(),
          item
        );
      } else {
        const item = {
          key: n.toString(),
          value: `${n}-value-transform`,
        };
        expect(cacheProvider.put).toHaveBeenNthCalledWith(
          n + 1,
          n.toString(),
          item
        );
      }
    }

    expect(cacheProvider.get).toHaveBeenCalledTimes(0);

    expect(cacheProvider.exists).toHaveBeenCalledTimes(5);

    for (let n = 0; n < 5; n++) {
      expect(cacheProvider.exists).toHaveBeenNthCalledWith(n + 1, n.toString());
    }

    expect(cacheProvider.del).toHaveBeenCalledTimes(0);

    expect(cacheProvider.drop).toHaveBeenCalledTimes(1);

    // =============================
    // ASSERT COMPRESSION INTERFACES
    // =============================

    expect(compression.compress).toHaveBeenCalledTimes(0);

    expect(compression.decompress).toHaveBeenCalledTimes(0);

    // =========================
    // ASSERT RUNTIME INTERFACES
    // =========================

    expect(runtime.getDataItem).toHaveBeenCalledTimes(5);

    for (let n = 0; n < 5; n++) {
      expect(runtime.getDataItem).toHaveBeenNthCalledWith(
        n + 1,
        expect.any(Node),
        core.poolConfig.sources[0],
        n.toString()
      );
    }

    expect(runtime.transformDataItem).toHaveBeenCalledTimes(5);

    for (let n = 0; n < 5; n++) {
      const item = {
        key: n.toString(),
        value: `${n}-value`,
      };
      expect(runtime.transformDataItem).toHaveBeenNthCalledWith(
        n + 1,
        expect.any(Node),
        item
      );
    }

    expect(runtime.validateDataItem).toHaveBeenCalledTimes(0);

    // we only call getNextKey max_bundle_size - 1 because
    // the pool is in genesis state and therefore start_key
    // is used for the first time
    expect(runtime.nextKey).toHaveBeenCalledTimes(5 - 1);

    for (let n = 0; n < 5 - 1; n++) {
      expect(runtime.nextKey).toHaveBeenNthCalledWith(
        n + 1,
        expect.any(Node),
        n.toString()
      );
    }

    expect(runtime.summarizeDataBundle).toHaveBeenCalledTimes(0);

    // ========================
    // ASSERT NODEJS INTERFACES
    // ========================

    // assert that only one round ran
    expect(core["waitForCacheContinuation"]).toHaveBeenCalledTimes(1);

    // TODO: assert timeouts
  });

  test("start caching from a pool where nextKey fails", async () => {
    // ARRANGE
    core["runtime"].nextKey = jest.fn().mockRejectedValue(new Error());

    core.pool = {
      ...genesis_pool,
      data: {
        ...genesis_pool.data,
        current_key: "99",
        current_index: "100",
      },
      bundle_proposal: {
        ...genesis_pool.bundle_proposal,
        storage_id: "test_storage_id",
        uploader: "test_staker",
        next_uploader: "test_staker",
        data_size: "123456789",
        data_hash: "test_bundle_hash",
        bundle_size: "50",
        from_key: "100",
        to_key: "149",
        bundle_summary: "test_summary",
        updated_at: "0",
        voters_valid: ["test_staker"],
      },
    } as any;

    // ACT
    await runCache.call(core);

    // ASSERT
    const txs = core["client"].kyve.bundles.v1beta1;
    const queries = core["lcd"].kyve.query.v1beta1;
    const cacheProvider = core["cacheProvider"];
    const runtime = core["runtime"];

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

    expect(queries.canVote).toHaveBeenCalledTimes(0);

    expect(queries.canPropose).toHaveBeenCalledTimes(0);

    // =========================
    // ASSERT STORAGE INTERFACES
    // =========================

    expect(storageProvider.saveBundle).toHaveBeenCalledTimes(0);

    expect(storageProvider.retrieveBundle).toHaveBeenCalledTimes(0);

    // =======================
    // ASSERT CACHE INTERFACES
    // =======================

    expect(cacheProvider.put).toHaveBeenCalledTimes(0);

    expect(cacheProvider.get).toHaveBeenCalledTimes(0);

    expect(cacheProvider.exists).toHaveBeenCalledTimes(
      parseInt(genesis_pool.data.max_bundle_size) + 1
    );

    for (let n = 0; n < parseInt(genesis_pool.data.max_bundle_size); n++) {
      expect(cacheProvider.exists).toHaveBeenNthCalledWith(n + 1, n.toString());
    }

    expect(cacheProvider.exists).toHaveBeenNthCalledWith(
      parseInt(genesis_pool.data.max_bundle_size) + 1,
      "100"
    );

    expect(cacheProvider.del).toHaveBeenCalledTimes(0);

    expect(cacheProvider.drop).toHaveBeenCalledTimes(1);

    // =============================
    // ASSERT COMPRESSION INTERFACES
    // =============================

    expect(compression.compress).toHaveBeenCalledTimes(0);

    expect(compression.decompress).toHaveBeenCalledTimes(0);

    // =========================
    // ASSERT RUNTIME INTERFACES
    // =========================

    expect(runtime.getDataItem).toHaveBeenCalledTimes(0);

    expect(runtime.transformDataItem).toHaveBeenCalledTimes(0);

    expect(runtime.validateDataItem).toHaveBeenCalledTimes(0);

    expect(runtime.nextKey).toHaveBeenCalledTimes(1);

    expect(runtime.nextKey).toHaveBeenNthCalledWith(1, expect.any(Node), "99");

    expect(runtime.summarizeDataBundle).toHaveBeenCalledTimes(0);

    // ========================
    // ASSERT NODEJS INTERFACES
    // ========================

    // assert that only one round ran
    expect(core["waitForCacheContinuation"]).toHaveBeenCalledTimes(0);

    // TODO: assert timeouts
  });

  test("start caching from a pool where cache methods fail", async () => {
    // ARRANGE
    core["cacheProvider"].put = jest
      .fn()
      .mockRejectedValue(new Error("io error"));

    core.pool = {
      ...genesis_pool,
      data: {
        ...genesis_pool.data,
        current_key: "99",
        current_index: "100",
      },
      bundle_proposal: {
        ...genesis_pool.bundle_proposal,
        storage_id: "test_storage_id",
        uploader: "test_staker",
        next_uploader: "test_staker",
        data_size: "123456789",
        data_hash: "test_bundle_hash",
        bundle_size: "50",
        from_key: "100",
        to_key: "149",
        bundle_summary: "test_summary",
        updated_at: "0",
        voters_valid: ["test_staker"],
      },
    } as any;

    // ACT
    await runCache.call(core);

    // ASSERT
    const txs = core["client"].kyve.bundles.v1beta1;
    const queries = core["lcd"].kyve.query.v1beta1;
    const cacheProvider = core["cacheProvider"];
    const runtime = core["runtime"];

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

    expect(queries.canVote).toHaveBeenCalledTimes(0);

    expect(queries.canPropose).toHaveBeenCalledTimes(0);

    // =========================
    // ASSERT STORAGE INTERFACES
    // =========================

    expect(storageProvider.saveBundle).toHaveBeenCalledTimes(0);

    expect(storageProvider.retrieveBundle).toHaveBeenCalledTimes(0);

    // =======================
    // ASSERT CACHE INTERFACES
    // =======================

    expect(cacheProvider.put).toHaveBeenCalledTimes(1);

    expect(cacheProvider.get).toHaveBeenCalledTimes(0);

    expect(cacheProvider.exists).toHaveBeenCalledTimes(
      parseInt(genesis_pool.data.max_bundle_size) + 1
    );

    for (let n = 0; n < parseInt(genesis_pool.data.max_bundle_size); n++) {
      expect(cacheProvider.exists).toHaveBeenNthCalledWith(n + 1, n.toString());
    }

    expect(cacheProvider.exists).toHaveBeenNthCalledWith(
      parseInt(genesis_pool.data.max_bundle_size) + 1,
      "100"
    );

    expect(cacheProvider.del).toHaveBeenCalledTimes(0);

    expect(cacheProvider.drop).toHaveBeenCalledTimes(1);

    // =============================
    // ASSERT COMPRESSION INTERFACES
    // =============================

    expect(compression.compress).toHaveBeenCalledTimes(0);

    expect(compression.decompress).toHaveBeenCalledTimes(0);

    // =========================
    // ASSERT RUNTIME INTERFACES
    // =========================

    expect(runtime.getDataItem).toHaveBeenCalledTimes(1);

    expect(runtime.getDataItem).toHaveBeenNthCalledWith(
      1,
      core,
      core.poolConfig.sources[0],
      "100"
    );

    expect(runtime.transformDataItem).toHaveBeenCalledTimes(1);

    expect(runtime.transformDataItem).toHaveBeenNthCalledWith(
      1,
      expect.any(Node),
      {
        key: "100",
        value: `100-value`,
      }
    );

    expect(runtime.validateDataItem).toHaveBeenCalledTimes(0);

    expect(runtime.nextKey).toHaveBeenCalledTimes(1);

    expect(runtime.nextKey).toHaveBeenNthCalledWith(1, expect.any(Node), "99");

    expect(runtime.summarizeDataBundle).toHaveBeenCalledTimes(0);

    // ========================
    // ASSERT NODEJS INTERFACES
    // ========================

    // assert that only one round ran
    expect(core["waitForCacheContinuation"]).toHaveBeenCalledTimes(0);

    // TODO: assert timeouts
  });
});
