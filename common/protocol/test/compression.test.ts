import { Logger } from "tslog";
import { ICompression, IStorageProvider, Validator } from "../src/index";
import { client } from "./mocks/client.mock";
import { lcd } from "./mocks/lcd.mock";
import { TestCacheProvider } from "./mocks/cache.mock";
import { setupMetrics } from "../src/methods";
import { register } from "prom-client";
import { TestRuntime } from "./mocks/runtime.mock";
import { TestNormalStorageProvider } from "./mocks/storageProvider.mock";
import { TestNormalCompression } from "./mocks/compression.mock";
import { Gzip } from "../src/reactors/compression/Gzip";

/*

TEST CASES - compression tests

* Valid parsing
* Invalid parsing
* Valid gzip compression and decompression

*/

describe("compression tests", () => {
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
    v.logger = new Logger({ minLevel: "warn" });

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

    v["waitForCacheContinuation"] = jest.fn();

    setupMetrics.call(v);
  });

  afterEach(() => {
    // reset prometheus
    register.clear();
  });

  test("Valid parsing", async () => {
    const fill =
      '[{"key": "key1","value": "value1"}, {"key": "key2","value": "value2"}]';
    // using array call for function as it is protected
    const parsed = await v["saveBundleDecompress"](
      Buffer.alloc(fill.length, fill)
    );

    expect(parsed).toEqual(JSON.parse(fill));
    expect(parsed.length).toEqual(2);
  });

  test("Invalid parsing", async () => {
    const fill = "Invalid JSON";

    // using array call for function as it is protected
    await expect(
      v["saveBundleDecompress"](Buffer.alloc(fill.length, fill))
    ).rejects.toThrow();
  });

  // GZIP

  test("Valid gzip compression and decompression", async () => {
    const fill =
      '[{"key": "key1","value": "value1"}, {"key": "key2","value": "value2"}]';

    const gzipper = new Gzip();
    const zipped = await gzipper.compress(Buffer.alloc(fill.length, fill));
    const unzipped = await gzipper.decompress(zipped);

    expect(fill).toEqual(unzipped.toString());
  });
});
