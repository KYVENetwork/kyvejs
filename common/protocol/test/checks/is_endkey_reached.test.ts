import { register } from "prom-client";
import { Logger } from "tslog";

import { Validator } from "../../src";
import { isEndkeyReached, setupMetrics } from "../../src/methods";
import { genesis_pool } from "../mocks/constants";
import { TestRuntime } from "../mocks/runtime.mock";

/*

TEST CASES - isEndkeyReached

* assert isEndkeyReached with empty current_key
* assert isEndkeyReached with end_key == current_key
* assert isEndkeyReached with toKey == end_key
* assert isEndkeyReached is not reached
*/

describe("isEndkeyReached", () => {
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

  test("assert isEndkeyReached with empty current_key", async () => {
    // ARRANGE
    v.pool.data!.current_key = "";
    v.pool.data!.end_key = "0";

    // ACT
    const result = await isEndkeyReached.call(v, "");

    // ASSERT
    expect(result).toBeFalsy();
  });

  test("assert isEndkeyReached with end_key == current_key", async () => {
    // ARRANGE
    v.pool.data!.current_key = "0";
    v.pool.data!.end_key = "0";

    // ACT
    const result = await isEndkeyReached.call(v, "");

    // ASSERT
    expect(result).toBeTruthy();
  });

  test("assert isEndkeyReached with toKey == end_key", async () => {
    // ARRANGE
    v.pool.data!.current_key = "0";
    v.pool.data!.end_key = "1";

    // ACT
    const result = await isEndkeyReached.call(v, "1");

    // ASSERT
    expect(result).toBeTruthy();
  });

  test("assert isEndkeyReached is not reached", async () => {
    // ARRANGE
    v.pool.data!.current_key = "0";
    v.pool.data!.end_key = "1";

    // ACT
    const result = await isEndkeyReached.call(v, "0");

    // ASSERT
    expect(result).toBeFalsy();
  });
});
