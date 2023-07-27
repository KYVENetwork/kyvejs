import { Logger } from "tslog";
import { IStorageProvider, Validator } from "../../src/index";
import { setupMetrics, isStorageBalanceLow } from "../../src/methods";
import { register } from "prom-client";
import { TestRuntime } from "../mocks/runtime.mock";
import { genesis_pool } from "../mocks/constants";
import { TestNormalStorageProvider } from "../mocks/storageProvider.mock";

/*

TEST CASES - isStorageBalanceLow

* assert zero balance on empty byte size
* assert 100 balance on empty byte size
* assert zero balance on byte size of 100
* assert 100 balance on byte size of 100
* assert 5000 balance on byte size of 100
* assert getAddress fails
* assert getBalance fails

*/

describe("isStorageBalanceLow", () => {
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

  test("assert zero balance on empty byte size", async () => {
    // ARRANGE
    storageProvider = new TestNormalStorageProvider();
    storageProvider.getBalance = jest.fn().mockResolvedValue("0");
    jest
      .spyOn(Validator, "storageProviderFactory")
      .mockImplementation(() => storageProvider);

    v.pool.bundle_proposal!.data_size = "0";

    // ACT
    await isStorageBalanceLow.call(v);

    // ASSERT
    expect(v.logger.warn).toHaveBeenCalled();
  });

  test("assert 100 balance on empty byte size", async () => {
    // ARRANGE
    storageProvider = new TestNormalStorageProvider();
    storageProvider.getBalance = jest.fn().mockResolvedValue("100");
    jest
      .spyOn(Validator, "storageProviderFactory")
      .mockImplementation(() => storageProvider);

    v.pool.bundle_proposal!.data_size = "0";

    // ACT
    await isStorageBalanceLow.call(v);

    // ASSERT
    expect(v.logger.warn).not.toHaveBeenCalled();
  });

  test("assert zero balance on byte size of 100", async () => {
    // ARRANGE
    storageProvider = new TestNormalStorageProvider();
    storageProvider.getBalance = jest.fn().mockResolvedValue("0");
    jest
      .spyOn(Validator, "storageProviderFactory")
      .mockImplementation(() => storageProvider);

    v.pool.bundle_proposal!.data_size = "100";

    // ACT
    await isStorageBalanceLow.call(v);

    // ASSERT
    expect(v.logger.warn).toHaveBeenCalled();
  });

  test("assert 100 balance on byte size of 100", async () => {
    // ARRANGE
    storageProvider = new TestNormalStorageProvider();
    storageProvider.getBalance = jest.fn().mockResolvedValue("100");
    jest
      .spyOn(Validator, "storageProviderFactory")
      .mockImplementation(() => storageProvider);

    v.pool.bundle_proposal!.data_size = "100";

    // ACT
    await isStorageBalanceLow.call(v);

    // ASSERT
    expect(v.logger.warn).toHaveBeenCalled();
  });

  test("assert 5000 balance on byte size of 100", async () => {
    // ARRANGE
    storageProvider = new TestNormalStorageProvider();
    storageProvider.getBalance = jest.fn().mockResolvedValue("5000");
    jest
      .spyOn(Validator, "storageProviderFactory")
      .mockImplementation(() => storageProvider);

    v.pool.bundle_proposal!.data_size = "100";

    // ACT
    await isStorageBalanceLow.call(v);

    // ASSERT
    expect(v.logger.warn).not.toHaveBeenCalled();
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
    await isStorageBalanceLow.call(v);

    // ASSERT
    expect(v.logger.error).toHaveBeenCalled();
  });

  test("assert getBalance fails", async () => {
    // ARRANGE
    storageProvider = new TestNormalStorageProvider();
    storageProvider.getBalance = jest.fn().mockRejectedValue(new Error());
    jest
      .spyOn(Validator, "storageProviderFactory")
      .mockImplementation(() => storageProvider);

    // ACT
    await isStorageBalanceLow.call(v);

    // ASSERT
    expect(v.logger.error).toHaveBeenCalled();
  });
});
