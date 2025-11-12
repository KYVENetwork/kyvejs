import { Logger } from "tslog";
import { IStorageProvider, Validator } from "../../src/index";
import { setupMetrics, isStorageBalanceZero } from "../../src/methods";
import { register } from "prom-client";
import { TestRuntime } from "../mocks/runtime.mock";
import { genesis_pool } from "../mocks/constants";
import { TestNormalStorageProvider } from "../mocks/storageProvider.mock";

/*

TEST CASES - isStorageBalanceZero

* assert insufficient balance on storage provider
* assert sufficient balance on storage provider
* assert isBalanceSufficient fails

*/

describe("isStorageBalanceZero", () => {
  let v: Validator;

  let storageProvider: IStorageProvider;

  beforeEach(() => {
    v = new Validator(new TestRuntime());

    // mock logger
    v.logger = new Logger();

    v.logger.info = jest.fn();
    v.logger.debug = jest.fn();
    v.logger.warn = jest.fn();
    v.logger.error = jest.fn();
    v.logger.fatal = jest.fn();

    v.pool = {
      ...genesis_pool,
    } as any;

    setupMetrics.call(v);
  });

  afterEach(() => {
    // reset prometheus
    register.clear();
  });

  test("assert insufficient balance on storage provider", async () => {
    // ARRANGE
    storageProvider = new TestNormalStorageProvider();
    storageProvider.isBalanceSufficient = jest.fn().mockResolvedValue({
      sufficient: false,
      message: "",
    });
    v["storageProviderFactory"] = jest.fn().mockReturnValue(storageProvider);

    // ACT
    const result = await isStorageBalanceZero.call(v);

    // ASSERT
    expect(result).toBeTruthy();
  });

  test("assert sufficient balance on storage provider", async () => {
    // ARRANGE
    storageProvider = new TestNormalStorageProvider();
    storageProvider.isBalanceSufficient = jest.fn().mockResolvedValue({
      sufficient: true,
      message: "",
    });
    v["storageProviderFactory"] = jest.fn().mockReturnValue(storageProvider);

    // ACT
    const result = await isStorageBalanceZero.call(v);

    // ASSERT
    expect(result).toBeFalsy();
  });

  test("assert isBalanceSufficient fails", async () => {
    // ARRANGE
    storageProvider = new TestNormalStorageProvider();
    storageProvider.isBalanceSufficient = jest
      .fn()
      .mockRejectedValue(new Error());
    v["storageProviderFactory"] = jest.fn().mockReturnValue(storageProvider);

    // ACT
    const result = await isStorageBalanceZero.call(v);

    // ASSERT
    expect(result).toBeTruthy();
  });
});
