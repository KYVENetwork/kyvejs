import { Logger } from "tslog";
import {
  DataItem,
  generateIndexPairs,
  ICompression,
  IStorageProvider,
  Validator,
  sha256,
} from "../src/index";
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

TEST CASES - multiple sources tests

* start caching from a pool with multiple sources which is in genesis state
* start caching from a pool with multiple sources which has a bundle proposal ongoing
* continue caching from a pool with multiple sources which has a bundle proposal ongoing
* start caching from a pool with multiple sources where last bundle proposal was dropped
* start caching from a pool with multiple sources where getDataItem fails once
* start caching from a pool with multiple sources where getDataItem fails multiple times
* start caching from multiple sources but sources return different result
* start caching from multiple sources but sources but validateDataItem fails

*/

describe.skip("multiple sources tests", () => {
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
    v["poolConfig"] = {
      sources: [
        "https://rpc.api.moonbeam.network",
        "https://moonbeam.api.onfinality.io/public",
        "https://moonbeam.public.blastapi.io",
      ],
    };

    v.client = client();
    v.lcd = lcd();

    v["continueRound"] = jest
      .fn()
      .mockReturnValueOnce(true)
      .mockReturnValue(false);

    v["waitForCacheContinuation"] = jest.fn();

    setupMetrics.call(v);
  });

  afterEach(() => {
    // reset prometheus
    register.clear();
  });

  test("start caching from a pool with multiple sources which is in genesis state", async () => {
    // ARRANGE
    v.pool = {
      ...genesis_pool,
    } as any;

    // ACT
    await runCache.call(v);

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
      parseInt(genesis_pool.data.max_bundle_size) * v.poolConfig.sources.length
    );

    let n = 1;

    for (let b = 0; b < parseInt(genesis_pool.data.max_bundle_size); b++) {
      for (let s = 0; s < v.poolConfig.sources.length; s++) {
        expect(runtime.getDataItem).toHaveBeenNthCalledWith(
          n,
          expect.any(Validator),
          v.poolConfig.sources[s],
          b.toString()
        );

        n++;
      }
    }

    expect(runtime.transformDataItem).toHaveBeenCalledTimes(
      parseInt(genesis_pool.data.max_bundle_size) * v.poolConfig.sources.length
    );

    n = 1;

    for (let b = 0; b < parseInt(genesis_pool.data.max_bundle_size); b++) {
      for (let s = 0; s < v.poolConfig.sources.length; s++) {
        const item = {
          key: b.toString(),
          value: `${b}-value`,
        };
        expect(runtime.transformDataItem).toHaveBeenNthCalledWith(n, item);

        n++;
      }
    }

    expect(runtime.validateDataItem).toHaveBeenCalledTimes(
      parseInt(genesis_pool.data.max_bundle_size) * v.poolConfig.sources.length
    );

    const pairs = generateIndexPairs(v.poolConfig.sources.length);
    n = 1;

    for (let b = 0; b < parseInt(genesis_pool.data.max_bundle_size); b++) {
      for (let p = 0; p < pairs.length; p++) {
        const item = {
          key: b.toString(),
          value: `${b}-value-transform`,
        };
        expect(runtime.validateDataItem).toHaveBeenNthCalledWith(
          n,
          expect.any(Validator),
          item,
          item
        );
        n++;
      }
    }

    // we only call getNextKey max_bundle_size - 1 because
    // the pool is in genesis state and therefore start_key
    // is used for the first time
    expect(runtime.nextKey).toHaveBeenCalledTimes(
      parseInt(genesis_pool.data.max_bundle_size) - 1
    );

    for (let n = 0; n < parseInt(genesis_pool.data.max_bundle_size) - 1; n++) {
      expect(runtime.nextKey).toHaveBeenNthCalledWith(n + 1, n.toString());
    }

    expect(runtime.summarizeDataBundle).toHaveBeenCalledTimes(0);

    // ========================
    // ASSERT NODEJS INTERFACES
    // ========================

    // assert that only one round ran
    expect(v["waitForCacheContinuation"]).toHaveBeenCalledTimes(1);

    // TODO: assert timeouts
  });

  test("start caching from a pool with multiple sources which has a bundle proposal ongoing", async () => {
    // ARRANGE
    v.pool = {
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
    await runCache.call(v);

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
      parseInt(genesis_pool.data.max_bundle_size) + 50
    );

    for (let n = 0; n < parseInt(genesis_pool.data.max_bundle_size) + 50; n++) {
      expect(cacheProvider.exists).toHaveBeenNthCalledWith(
        n + 1,
        (n + parseInt(genesis_pool.data.max_bundle_size)).toString()
      );
    }

    expect(cacheProvider.del).toHaveBeenCalledTimes(100);

    for (let n = 0; n < parseInt(genesis_pool.data.max_bundle_size); n++) {
      expect(cacheProvider.del).toHaveBeenNthCalledWith(n + 1, n.toString());
    }

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
      (parseInt(genesis_pool.data.max_bundle_size) + 50) *
        v.poolConfig.sources.length
    );

    let n = 1;

    for (let b = 0; b < parseInt(genesis_pool.data.max_bundle_size) + 50; b++) {
      for (let s = 0; s < v.poolConfig.sources.length; s++) {
        expect(runtime.getDataItem).toHaveBeenNthCalledWith(
          n,
          expect.any(Validator),
          v.poolConfig.sources[s],
          (b + parseInt(genesis_pool.data.max_bundle_size)).toString()
        );

        n++;
      }
    }

    expect(runtime.transformDataItem).toHaveBeenCalledTimes(
      (parseInt(genesis_pool.data.max_bundle_size) + 50) *
        v.poolConfig.sources.length
    );

    n = 1;

    for (let b = 0; b < parseInt(genesis_pool.data.max_bundle_size) + 50; b++) {
      for (let s = 0; s < v.poolConfig.sources.length; s++) {
        const item = {
          key: (b + parseInt(genesis_pool.data.max_bundle_size)).toString(),
          value: `${b + parseInt(genesis_pool.data.max_bundle_size)}-value`,
        };
        expect(runtime.transformDataItem).toHaveBeenNthCalledWith(n, item);

        n++;
      }
    }

    expect(runtime.validateDataItem).toHaveBeenCalledTimes(
      (parseInt(genesis_pool.data.max_bundle_size) + 50) *
        v.poolConfig.sources.length
    );

    const pairs = generateIndexPairs(v.poolConfig.sources.length);
    n = 1;

    for (let b = 0; b < parseInt(genesis_pool.data.max_bundle_size) + 50; b++) {
      for (let p = 0; p < pairs.length; p++) {
        const item = {
          key: (b + parseInt(genesis_pool.data.max_bundle_size)).toString(),
          value: `${
            b + parseInt(genesis_pool.data.max_bundle_size)
          }-value-transform`,
        };
        expect(runtime.validateDataItem).toHaveBeenNthCalledWith(
          n,
          expect.any(Validator),
          item,
          item
        );
        n++;
      }
    }

    expect(runtime.nextKey).toHaveBeenCalledTimes(
      parseInt(genesis_pool.data.max_bundle_size) + 50
    );

    // here we subtract the key - 1 because we start using the
    // current key
    for (let n = 0; n < parseInt(genesis_pool.data.max_bundle_size) + 50; n++) {
      expect(runtime.nextKey).toHaveBeenNthCalledWith(
        n + 1,
        (n + parseInt(genesis_pool.data.max_bundle_size) - 1).toString()
      );
    }

    expect(runtime.summarizeDataBundle).toHaveBeenCalledTimes(0);

    // ========================
    // ASSERT NODEJS INTERFACES
    // ========================

    // assert that only one round ran
    expect(v["waitForCacheContinuation"]).toHaveBeenCalledTimes(1);

    // TODO: assert timeouts
  });

  test("continue caching from a pool with multiple sources which has a bundle proposal ongoing", async () => {
    // ARRANGE
    v["cacheProvider"].exists = jest
      .fn()
      .mockResolvedValueOnce(true)
      .mockResolvedValueOnce(true)
      .mockResolvedValueOnce(true)
      .mockResolvedValue(false);

    v.pool = {
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
    await runCache.call(v);

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
      parseInt(genesis_pool.data.max_bundle_size) + 3
    );

    for (let n = 0; n < parseInt(genesis_pool.data.max_bundle_size) + 3; n++) {
      expect(cacheProvider.exists).toHaveBeenNthCalledWith(
        n + 1,
        (n + parseInt(genesis_pool.data.max_bundle_size)).toString()
      );
    }

    expect(cacheProvider.del).toHaveBeenCalledTimes(100);

    for (let n = 0; n < parseInt(genesis_pool.data.max_bundle_size); n++) {
      expect(cacheProvider.del).toHaveBeenNthCalledWith(n + 1, n.toString());
    }

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
      parseInt(genesis_pool.data.max_bundle_size) * v.poolConfig.sources.length
    );

    let n = 1;

    for (let b = 0; b < parseInt(genesis_pool.data.max_bundle_size); b++) {
      for (let s = 0; s < v.poolConfig.sources.length; s++) {
        expect(runtime.getDataItem).toHaveBeenNthCalledWith(
          n,
          expect.any(Validator),
          v.poolConfig.sources[s],
          (b + parseInt(genesis_pool.data.max_bundle_size) + 3).toString()
        );

        n++;
      }
    }

    expect(runtime.transformDataItem).toHaveBeenCalledTimes(
      parseInt(genesis_pool.data.max_bundle_size) * v.poolConfig.sources.length
    );

    n = 1;

    for (let b = 0; b < parseInt(genesis_pool.data.max_bundle_size); b++) {
      for (let s = 0; s < v.poolConfig.sources.length; s++) {
        const item = {
          key: (b + parseInt(genesis_pool.data.max_bundle_size) + 3).toString(),
          value: `${b + parseInt(genesis_pool.data.max_bundle_size) + 3}-value`,
        };
        expect(runtime.transformDataItem).toHaveBeenNthCalledWith(n, item);

        n++;
      }
    }

    expect(runtime.validateDataItem).toHaveBeenCalledTimes(
      parseInt(genesis_pool.data.max_bundle_size) * v.poolConfig.sources.length
    );

    const pairs = generateIndexPairs(v.poolConfig.sources.length);
    n = 1;

    for (let b = 0; b < parseInt(genesis_pool.data.max_bundle_size); b++) {
      for (let p = 0; p < pairs.length; p++) {
        const item = {
          key: (b + parseInt(genesis_pool.data.max_bundle_size) + 3).toString(),
          value: `${
            b + parseInt(genesis_pool.data.max_bundle_size) + 3
          }-value-transform`,
        };
        expect(runtime.validateDataItem).toHaveBeenNthCalledWith(
          n,
          expect.any(Validator),
          item,
          item
        );
        n++;
      }
    }

    expect(runtime.nextKey).toHaveBeenCalledTimes(
      parseInt(genesis_pool.data.max_bundle_size) + 3
    );

    // here we subtract the key - 1 because we start using the
    // current key
    for (let n = 0; n < parseInt(genesis_pool.data.max_bundle_size) + 3; n++) {
      expect(runtime.nextKey).toHaveBeenNthCalledWith(
        n + 1,
        (n + 100 - 1).toString()
      );
    }

    expect(runtime.summarizeDataBundle).toHaveBeenCalledTimes(0);

    // ========================
    // ASSERT NODEJS INTERFACES
    // ========================

    // assert that only one round ran
    expect(v["waitForCacheContinuation"]).toHaveBeenCalledTimes(1);

    // TODO: assert timeouts
  });

  test("start caching from a pool with multiple sources where last bundle proposal was dropped", async () => {
    // ARRANGE
    v.pool = {
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
    await runCache.call(v);

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
      parseInt(genesis_pool.data.max_bundle_size)
    );

    for (let n = 0; n < parseInt(genesis_pool.data.max_bundle_size); n++) {
      expect(cacheProvider.exists).toHaveBeenNthCalledWith(
        n + 1,
        (n + parseInt(genesis_pool.data.max_bundle_size)).toString()
      );
    }

    expect(cacheProvider.del).toHaveBeenCalledTimes(100);

    for (let n = 0; n < parseInt(genesis_pool.data.max_bundle_size); n++) {
      expect(cacheProvider.del).toHaveBeenNthCalledWith(n + 1, n.toString());
    }

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
      parseInt(genesis_pool.data.max_bundle_size) * v.poolConfig.sources.length
    );

    let n = 1;

    for (let b = 0; b < parseInt(genesis_pool.data.max_bundle_size); b++) {
      for (let s = 0; s < v.poolConfig.sources.length; s++) {
        expect(runtime.getDataItem).toHaveBeenNthCalledWith(
          n,
          expect.any(Validator),
          v.poolConfig.sources[s],
          (b + parseInt(genesis_pool.data.max_bundle_size)).toString()
        );

        n++;
      }
    }

    expect(runtime.transformDataItem).toHaveBeenCalledTimes(
      parseInt(genesis_pool.data.max_bundle_size) * v.poolConfig.sources.length
    );

    n = 1;

    for (let b = 0; b < parseInt(genesis_pool.data.max_bundle_size); b++) {
      for (let s = 0; s < v.poolConfig.sources.length; s++) {
        const item = {
          key: (b + parseInt(genesis_pool.data.max_bundle_size)).toString(),
          value: `${b + parseInt(genesis_pool.data.max_bundle_size)}-value`,
        };
        expect(runtime.transformDataItem).toHaveBeenNthCalledWith(n, item);

        n++;
      }
    }

    expect(runtime.validateDataItem).toHaveBeenCalledTimes(
      parseInt(genesis_pool.data.max_bundle_size) * v.poolConfig.sources.length
    );

    const pairs = generateIndexPairs(v.poolConfig.sources.length);
    n = 1;

    for (let b = 0; b < parseInt(genesis_pool.data.max_bundle_size); b++) {
      for (let p = 0; p < pairs.length; p++) {
        const item = {
          key: (b + parseInt(genesis_pool.data.max_bundle_size)).toString(),
          value: `${
            b + parseInt(genesis_pool.data.max_bundle_size)
          }-value-transform`,
        };
        expect(runtime.validateDataItem).toHaveBeenNthCalledWith(
          n,
          expect.any(Validator),
          item,
          item
        );
        n++;
      }
    }

    expect(runtime.nextKey).toHaveBeenCalledTimes(
      parseInt(genesis_pool.data.max_bundle_size)
    );

    // here we subtract the key - 1 because we start using the
    // current key
    for (let n = 0; n < parseInt(genesis_pool.data.max_bundle_size); n++) {
      expect(runtime.nextKey).toHaveBeenNthCalledWith(
        n + 1,
        (n + parseInt(genesis_pool.data.max_bundle_size) - 1).toString()
      );
    }

    expect(runtime.summarizeDataBundle).toHaveBeenCalledTimes(0);

    // ========================
    // ASSERT NODEJS INTERFACES
    // ========================

    // assert that only one round ran
    expect(v["waitForCacheContinuation"]).toHaveBeenCalledTimes(1);

    // TODO: assert timeouts
  });

  test("start caching from a pool with multiple sources where getDataItem fails once", async () => {
    // ARRANGE
    v["runtime"].getDataItem = jest
      .fn()
      .mockImplementationOnce((v: Validator, source: string, key: string) =>
        Promise.resolve({
          key,
          value: `${key}-value`,
        })
      )
      .mockImplementationOnce((v: Validator, source: string, key: string) =>
        Promise.resolve({
          key,
          value: `${key}-value`,
        })
      )
      .mockImplementationOnce((v: Validator, source: string, key: string) =>
        Promise.resolve({
          key,
          value: `${key}-value`,
        })
      )
      .mockImplementationOnce((v: Validator, source: string, key: string) =>
        Promise.resolve({
          key,
          value: `${key}-value`,
        })
      )
      .mockRejectedValueOnce(new Error("network error"))
      .mockImplementation((v: Validator, source: string, key: string) =>
        Promise.resolve({
          key,
          value: `${key}-value`,
        })
      );

    v.pool = {
      ...genesis_pool,
      data: {
        ...genesis_pool.data,
        max_bundle_size: "2",
      },
    } as any;

    // ACT
    await runCache.call(v);

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

    expect(runtime.getDataItem).toHaveBeenCalledTimes(
      2 * v.poolConfig.sources.length + 1
    );

    expect(runtime.getDataItem).toHaveBeenNthCalledWith(
      1,
      expect.any(Validator),
      v.poolConfig.sources[0],
      "0"
    );
    expect(runtime.getDataItem).toHaveBeenNthCalledWith(
      2,
      expect.any(Validator),
      v.poolConfig.sources[1],
      "0"
    );
    expect(runtime.getDataItem).toHaveBeenNthCalledWith(
      3,
      expect.any(Validator),
      v.poolConfig.sources[2],
      "0"
    );
    expect(runtime.getDataItem).toHaveBeenNthCalledWith(
      4,
      expect.any(Validator),
      v.poolConfig.sources[0],
      "1"
    );
    expect(runtime.getDataItem).toHaveBeenNthCalledWith(
      5,
      expect.any(Validator),
      v.poolConfig.sources[1],
      "1"
    );
    expect(runtime.getDataItem).toHaveBeenNthCalledWith(
      5,
      expect.any(Validator),
      v.poolConfig.sources[1],
      "1"
    );
    expect(runtime.getDataItem).toHaveBeenNthCalledWith(
      6,
      expect.any(Validator),
      v.poolConfig.sources[2],
      "1"
    );

    expect(runtime.transformDataItem).toHaveBeenCalledTimes(6);

    let n = 1;

    for (let b = 0; b < 2; b++) {
      for (let s = 0; s < v.poolConfig.sources.length; s++) {
        const item = {
          key: b.toString(),
          value: `${b}-value`,
        };
        expect(runtime.transformDataItem).toHaveBeenNthCalledWith(n, item);

        n++;
      }
    }

    expect(runtime.validateDataItem).toHaveBeenCalledTimes(
      2 * v.poolConfig.sources.length
    );

    const pairs = generateIndexPairs(v.poolConfig.sources.length);
    n = 1;

    for (let b = 0; b < 2; b++) {
      for (let p = 0; p < pairs.length; p++) {
        const item = {
          key: b.toString(),
          value: `${b}-value-transform`,
        };
        expect(runtime.validateDataItem).toHaveBeenNthCalledWith(
          n,
          expect.any(Validator),
          item,
          item
        );
        n++;
      }
    }

    // we only call getNextKey max_bundle_size - 1 because
    // the pool is in genesis state and therefore start_key
    // is used for the first time
    expect(runtime.nextKey).toHaveBeenCalledTimes(2 - 1);

    for (let n = 0; n < 2 - 1; n++) {
      expect(runtime.nextKey).toHaveBeenNthCalledWith(n + 1, n.toString());
    }

    expect(runtime.summarizeDataBundle).toHaveBeenCalledTimes(0);

    // ========================
    // ASSERT NODEJS INTERFACES
    // ========================

    // assert that only one round ran
    expect(v["waitForCacheContinuation"]).toHaveBeenCalledTimes(1);

    // TODO: assert timeouts
  });

  test("start caching from a pool with multiple sources where getDataItem fails multiple times", async () => {
    // ARRANGE
    v["runtime"].getDataItem = jest
      .fn()
      .mockImplementationOnce((v: Validator, source: string, key: string) =>
        Promise.resolve({
          key,
          value: `${key}-value`,
        })
      )
      .mockImplementationOnce((v: Validator, source: string, key: string) =>
        Promise.resolve({
          key,
          value: `${key}-value`,
        })
      )
      .mockImplementationOnce((v: Validator, source: string, key: string) =>
        Promise.resolve({
          key,
          value: `${key}-value`,
        })
      )
      .mockRejectedValueOnce(new Error("network error"))
      .mockImplementationOnce((v: Validator, source: string, key: string) =>
        Promise.resolve({
          key,
          value: `${key}-value`,
        })
      )
      .mockRejectedValueOnce(new Error("network error"))
      .mockImplementation((v: Validator, source: string, key: string) =>
        Promise.resolve({
          key,
          value: `${key}-value`,
        })
      );

    v["cacheProvider"].exists = jest
      .fn()
      .mockResolvedValueOnce(true)
      .mockResolvedValueOnce(true)
      .mockResolvedValueOnce(true)
      .mockResolvedValue(false);

    v.pool = {
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
    await runCache.call(v);

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
      parseInt(genesis_pool.data.max_bundle_size) + 3
    );

    for (let n = 0; n < parseInt(genesis_pool.data.max_bundle_size) + 3; n++) {
      expect(cacheProvider.exists).toHaveBeenNthCalledWith(
        n + 1,
        (n + parseInt(genesis_pool.data.max_bundle_size)).toString()
      );
    }

    expect(cacheProvider.del).toHaveBeenCalledTimes(100);

    for (let n = 0; n < parseInt(genesis_pool.data.max_bundle_size); n++) {
      expect(cacheProvider.del).toHaveBeenNthCalledWith(n + 1, n.toString());
    }

    expect(cacheProvider.drop).toHaveBeenCalledTimes(0);

    // =============================
    // ASSERT COMPRESSION INTERFACES
    // =============================

    expect(compression.compress).toHaveBeenCalledTimes(0);

    expect(compression.decompress).toHaveBeenCalledTimes(0);

    // =========================
    // ASSERT RUNTIME INTERFACES
    // =========================

    expect(runtime.getDataItem).toHaveBeenNthCalledWith(
      1,
      expect.any(Validator),
      v.poolConfig.sources[0],
      "103"
    );
    expect(runtime.getDataItem).toHaveBeenNthCalledWith(
      2,
      expect.any(Validator),
      v.poolConfig.sources[1],
      "103"
    );
    expect(runtime.getDataItem).toHaveBeenNthCalledWith(
      3,
      expect.any(Validator),
      v.poolConfig.sources[2],
      "103"
    );

    expect(runtime.getDataItem).toHaveBeenNthCalledWith(
      4,
      expect.any(Validator),
      v.poolConfig.sources[0],
      "104"
    );
    expect(runtime.getDataItem).toHaveBeenNthCalledWith(
      5,
      expect.any(Validator),
      v.poolConfig.sources[1],
      "104"
    );
    expect(runtime.getDataItem).toHaveBeenNthCalledWith(
      6,
      expect.any(Validator),
      v.poolConfig.sources[2],
      "104"
    );
    expect(runtime.getDataItem).toHaveBeenNthCalledWith(
      7,
      expect.any(Validator),
      v.poolConfig.sources[0],
      "104"
    );
    expect(runtime.getDataItem).toHaveBeenNthCalledWith(
      8,
      expect.any(Validator),
      v.poolConfig.sources[2],
      "104"
    );

    // ...

    expect(runtime.transformDataItem).toHaveBeenCalledTimes(
      parseInt(genesis_pool.data.max_bundle_size) * v.poolConfig.sources.length
    );

    let n = 1;

    for (let b = 0; b < 2; b++) {
      for (let s = 0; s < v.poolConfig.sources.length; s++) {
        const item = {
          key: (b + parseInt(genesis_pool.data.max_bundle_size) + 3).toString(),
          value: `${b + parseInt(genesis_pool.data.max_bundle_size) + 3}-value`,
        };
        expect(runtime.transformDataItem).toHaveBeenNthCalledWith(n, item);

        n++;
      }
    }

    expect(runtime.validateDataItem).toHaveBeenCalledTimes(
      parseInt(genesis_pool.data.max_bundle_size) * v.poolConfig.sources.length
    );

    const pairs = generateIndexPairs(v.poolConfig.sources.length);
    n = 1;

    for (let b = 0; b < 2; b++) {
      for (let p = 0; p < pairs.length; p++) {
        const item = {
          key: (b + parseInt(genesis_pool.data.max_bundle_size) + 3).toString(),
          value: `${
            b + parseInt(genesis_pool.data.max_bundle_size) + 3
          }-value-transform`,
        };
        expect(runtime.validateDataItem).toHaveBeenNthCalledWith(
          n,
          expect.any(Validator),
          item,
          item
        );
        n++;
      }
    }

    expect(runtime.nextKey).toHaveBeenCalledTimes(
      parseInt(genesis_pool.data.max_bundle_size) + 3
    );

    // here we subtract the key - 1 because we start using the
    // current key
    for (let n = 0; n < parseInt(genesis_pool.data.max_bundle_size) + 3; n++) {
      expect(runtime.nextKey).toHaveBeenNthCalledWith(
        n + 1,
        (n + 100 - 1).toString()
      );
    }

    expect(runtime.summarizeDataBundle).toHaveBeenCalledTimes(0);

    // ========================
    // ASSERT NODEJS INTERFACES
    // ========================

    // assert that only one round ran
    expect(v["waitForCacheContinuation"]).toHaveBeenCalledTimes(1);

    // TODO: assert timeouts
  });

  test("start caching from multiple sources but sources return different result", async () => {
    // ARRANGE
    v["runtime"].getDataItem = jest
      .fn()
      .mockImplementationOnce((v: Validator, source: string, key: string) =>
        Promise.resolve({
          key,
          value: `${key}-value`,
        })
      )
      .mockImplementationOnce((v: Validator, source: string, key: string) =>
        Promise.resolve({
          key,
          value: `${key}-value`,
        })
      )
      .mockImplementationOnce((v: Validator, source: string, key: string) =>
        Promise.resolve({
          key,
          value: `${key}-value`,
        })
      )
      .mockImplementationOnce((v: Validator, source: string, key: string) =>
        Promise.resolve({
          key,
          value: `${key}-value`,
        })
      )
      .mockImplementationOnce((v: Validator, source: string, key: string) =>
        Promise.resolve({
          key,
          value: `${key}-value-invalid`,
        })
      )
      .mockImplementation((v: Validator, source: string, key: string) =>
        Promise.resolve({
          key,
          value: `${key}-value`,
        })
      );

    v.pool = {
      ...genesis_pool,
      data: {
        ...genesis_pool.data,
        max_bundle_size: "3",
      },
    } as any;

    // ACT
    await runCache.call(v);

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

    for (let n = 0; n < 1; n++) {
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

    expect(runtime.getDataItem).toHaveBeenCalledTimes(
      2 * v.poolConfig.sources.length
    );

    let n = 1;

    for (let b = 0; b < 2; b++) {
      for (let s = 0; s < v.poolConfig.sources.length; s++) {
        expect(runtime.getDataItem).toHaveBeenNthCalledWith(
          n,
          expect.any(Validator),
          v.poolConfig.sources[s],
          b.toString()
        );

        n++;
      }
    }

    expect(runtime.transformDataItem).toHaveBeenCalledTimes(
      2 * v.poolConfig.sources.length
    );

    n = 1;

    for (let b = 0; b < 2; b++) {
      for (let s = 0; s < v.poolConfig.sources.length; s++) {
        let item;

        if (n === 5) {
          item = {
            key: b.toString(),
            value: `${b}-value-invalid`,
          };
        } else {
          item = {
            key: b.toString(),
            value: `${b}-value`,
          };
        }

        expect(runtime.transformDataItem).toHaveBeenNthCalledWith(n, item);
        n++;
      }
    }

    const pairs = generateIndexPairs(v.poolConfig.sources.length);
    n = 1;

    expect(runtime.validateDataItem).toHaveBeenCalledTimes(4);

    expect(runtime.validateDataItem).toHaveBeenNthCalledWith(
      1,
      expect.any(Validator),
      {
        key: `0`,
        value: `0-value-transform`,
      },
      {
        key: `0`,
        value: `0-value-transform`,
      }
    );
    expect(runtime.validateDataItem).toHaveBeenNthCalledWith(
      2,
      expect.any(Validator),
      {
        key: `0`,
        value: `0-value-transform`,
      },
      {
        key: `0`,
        value: `0-value-transform`,
      }
    );
    expect(runtime.validateDataItem).toHaveBeenNthCalledWith(
      3,
      expect.any(Validator),
      {
        key: `0`,
        value: `0-value-transform`,
      },
      {
        key: `0`,
        value: `0-value-transform`,
      }
    );
    expect(runtime.validateDataItem).toHaveBeenNthCalledWith(
      4,
      expect.any(Validator),
      {
        key: `1`,
        value: `1-value-transform`,
      },
      {
        key: `1`,
        value: `1-value-invalid-transform`,
      }
    );

    // we only call getNextKey max_bundle_size - 1 because
    // the pool is in genesis state and therefore start_key
    // is used for the first time
    expect(runtime.nextKey).toHaveBeenCalledTimes(2 - 1);

    for (let n = 0; n < 2 - 1; n++) {
      expect(runtime.nextKey).toHaveBeenNthCalledWith(n + 1, n.toString());
    }

    expect(runtime.summarizeDataBundle).toHaveBeenCalledTimes(0);

    // ========================
    // ASSERT NODEJS INTERFACES
    // ========================

    // assert that only one round ran
    expect(v["waitForCacheContinuation"]).toHaveBeenCalledTimes(1);

    // TODO: assert timeouts
  });

  test("start caching from multiple sources but sources but validateDataItem fails", async () => {
    // ARRANGE
    v["runtime"].validateDataItem = jest
      .fn()
      .mockImplementationOnce(
        async (
          v: Validator,
          proposedDataItem: DataItem,
          validationDataItem: DataItem
        ) => {
          const proposedDataItemHash = sha256(
            Buffer.from(JSON.stringify(proposedDataItem))
          );
          const validationDataItemHash = sha256(
            Buffer.from(JSON.stringify(validationDataItem))
          );

          return proposedDataItemHash === validationDataItemHash;
        }
      )
      .mockRejectedValueOnce(new Error())
      .mockImplementation(
        async (
          v: Validator,
          proposedDataItem: DataItem,
          validationDataItem: DataItem
        ) => {
          const proposedDataItemHash = sha256(
            Buffer.from(JSON.stringify(proposedDataItem))
          );
          const validationDataItemHash = sha256(
            Buffer.from(JSON.stringify(validationDataItem))
          );

          return proposedDataItemHash === validationDataItemHash;
        }
      );

    v.pool = {
      ...genesis_pool,
      data: {
        ...genesis_pool.data,
        max_bundle_size: "3",
      },
    } as any;

    // ACT
    await runCache.call(v);

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

    expect(cacheProvider.exists).toHaveBeenCalledTimes(1);

    expect(cacheProvider.exists).toHaveBeenLastCalledWith("0");

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
      v.poolConfig.sources.length
    );

    let n = 1;

    for (let s = 0; s < v.poolConfig.sources.length; s++) {
      expect(runtime.getDataItem).toHaveBeenNthCalledWith(
        n,
        expect.any(Validator),
        v.poolConfig.sources[s],
        "0"
      );

      n++;
    }

    expect(runtime.transformDataItem).toHaveBeenCalledTimes(
      v.poolConfig.sources.length
    );

    n = 1;

    for (let s = 0; s < v.poolConfig.sources.length; s++) {
      expect(runtime.transformDataItem).toHaveBeenNthCalledWith(n, {
        key: "0",
        value: "0-value",
      });
      n++;
    }

    n = 1;

    expect(runtime.validateDataItem).toHaveBeenCalledTimes(2);

    expect(runtime.validateDataItem).toHaveBeenNthCalledWith(
      1,
      expect.any(Validator),
      {
        key: `0`,
        value: `0-value-transform`,
      },
      {
        key: `0`,
        value: `0-value-transform`,
      }
    );
    expect(runtime.validateDataItem).toHaveBeenNthCalledWith(
      2,
      expect.any(Validator),
      {
        key: `0`,
        value: `0-value-transform`,
      },
      {
        key: `0`,
        value: `0-value-transform`,
      }
    );

    // we only call getNextKey max_bundle_size - 1 because
    // the pool is in genesis state and therefore start_key
    // is used for the first time
    expect(runtime.nextKey).toHaveBeenCalledTimes(0);

    expect(runtime.summarizeDataBundle).toHaveBeenCalledTimes(0);

    // ========================
    // ASSERT NODEJS INTERFACES
    // ========================

    // assert that only one round ran
    expect(v["waitForCacheContinuation"]).toHaveBeenCalledTimes(1);

    // TODO: assert timeouts
  });
});
