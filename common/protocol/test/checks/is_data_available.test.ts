import { Logger } from "tslog";
import { Validator } from "../../src/index";
import { setupMetrics, isDataAvailable } from "../../src/methods";
import { register } from "prom-client";
import { TestRuntime } from "../mocks/runtime.mock";
import { genesis_pool } from "../mocks/constants";

/*

TEST CASES - isDataAvailable

* assert nextKey fails
* assert getDataItem fails
* assert prevalidateDataItem fails
* assert prevalidateDataItem returns false
* assert transformDataItem fails
* assert next data item is available

*/

describe("isDataAvailable", () => {
  let v: Validator;

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

  test("assert nextKey fails", async () => {
    // ARRANGE
    v.pool.data!.current_key = "0";
    v["runtime"].nextKey = jest.fn().mockRejectedValue(new Error());

    // ACT
    const result = await isDataAvailable.call(v);

    // ASSERT
    expect(result).toBeFalsy();
  });

  test("assert getDataItem fails", async () => {
    // ARRANGE
    v.pool.data!.current_key = "0";
    v["runtime"].getDataItem = jest.fn().mockRejectedValue(new Error());

    // ACT
    const result = await isDataAvailable.call(v);

    // ASSERT
    expect(result).toBeFalsy();
  });

  test("assert prevalidateDataItem fails", async () => {
    // ARRANGE
    v.pool.data!.current_key = "0";
    v["runtime"].prevalidateDataItem = jest.fn().mockRejectedValue(new Error());

    // ACT
    const result = await isDataAvailable.call(v);

    // ASSERT
    expect(result).toBeFalsy();
  });

  test("assert prevalidateDataItem fails", async () => {
    // ARRANGE
    v.pool.data!.current_key = "0";
    v["runtime"].prevalidateDataItem = jest.fn().mockResolvedValue(false);

    // ACT
    const result = await isDataAvailable.call(v);

    // ASSERT
    expect(result).toBeFalsy();
  });

  test("assert transformDataItem fails", async () => {
    // ARRANGE
    v.pool.data!.current_key = "0";
    v["runtime"].transformDataItem = jest.fn().mockRejectedValue(new Error());

    // ACT
    const result = await isDataAvailable.call(v);

    // ASSERT
    expect(result).toBeFalsy();
  });

  test("assert next data item is available", async () => {
    // ARRANGE
    v.pool.data!.current_key = "0";

    // ACT
    const result = await isDataAvailable.call(v);

    // ASSERT
    expect(result).toBeTruthy();
  });
});
