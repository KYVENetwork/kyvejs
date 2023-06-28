import { Logger } from "tslog";
import { IStorageProvider, Validator } from "../../src/index";
import { setupMetrics, isStorageBalanceZero } from "../../src/methods";
import { register } from "prom-client";
import { TestRuntime } from "../mocks/runtime.mock";
import { genesis_pool } from "../mocks/constants";
import { TestNormalStorageProvider } from "../mocks/storageProvider.mock";

/*

TEST CASES - isStorageBalanceZero

* assert zero balance on storage provider
* assert non-zero balance on storage provider
* assert getAddress fails
* assert getBalance fails

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

  test("assert zero balance on storage provider", async () => {
    // ARRANGE
    storageProvider = new TestNormalStorageProvider();
    storageProvider.getBalance = jest.fn().mockResolvedValue("0");
    jest
      .spyOn(Validator, "storageProviderFactory")
      .mockImplementation(() => storageProvider);

    // ACT
    const result = await isStorageBalanceZero.call(v);

    // ASSERT
    expect(result).toBeTruthy();
  });

  test("assert non-zero balance on storage provider", async () => {
    // ARRANGE
    storageProvider = new TestNormalStorageProvider();
    storageProvider.getBalance = jest.fn().mockResolvedValue("100");
    jest
      .spyOn(Validator, "storageProviderFactory")
      .mockImplementation(() => storageProvider);

    // ACT
    const result = await isStorageBalanceZero.call(v);

    // ASSERT
    expect(result).toBeFalsy();
  });

  test("assert getAddress fails", async () => {
    // ARRANGE
    storageProvider = new TestNormalStorageProvider();
    storageProvider.getAddress = jest.fn().mockRejectedValue(new Error());
    storageProvider.getBalance = jest.fn().mockResolvedValue("100");
    jest
      .spyOn(Validator, "storageProviderFactory")
      .mockImplementation(() => storageProvider);

    // ACT
    const result = await isStorageBalanceZero.call(v);

    // ASSERT
    expect(result).toBeTruthy();
  });

  test("assert getBalance fails", async () => {
    // ARRANGE
    storageProvider = new TestNormalStorageProvider();
    storageProvider.getBalance = jest.fn().mockRejectedValue(new Error());
    jest
      .spyOn(Validator, "storageProviderFactory")
      .mockImplementation(() => storageProvider);

    // ACT
    const result = await isStorageBalanceZero.call(v);

    // ASSERT
    expect(result).toBeTruthy();
  });
});
