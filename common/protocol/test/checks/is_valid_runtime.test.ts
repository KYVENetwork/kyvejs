import { Logger } from "tslog";
import { Validator } from "../../src/index";
import { setupMetrics, isValidRuntime } from "../../src/methods";
import { register } from "prom-client";
import { TestRuntime } from "../mocks/runtime.mock";
import { genesis_pool } from "../mocks/constants";

/*

TEST CASES - isValidRuntime

* assert equal remote and local runtime
* assert different remote and local runtime
* assert unexpected error

*/

describe("isValidRuntime", () => {
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

  test("assert equal remote and local runtime", async () => {
    // ARRANGE

    // remote
    v.pool!.data!.runtime = "@kyvejs/test";

    // local
    v["runtime"].name = "@kyvejs/test";

    // ACT
    const result = isValidRuntime.call(v);

    // ASSERT
    expect(result).toBeTruthy();
  });

  test("assert different remote and local runtime", async () => {
    // ARRANGE

    // remote
    v.pool!.data!.runtime = "@kyvejs/test";

    // local
    v["runtime"].name = "@kyvejs/test-2";

    // ACT
    const result = isValidRuntime.call(v);

    // ASSERT
    expect(result).toBeFalsy();
  });

  test("assert unexpected error", async () => {
    // ARRANGE

    // remote
    v.pool!.data!.runtime = "@kyvejs/test";

    // local
    v["runtime"] = null as any;

    // ACT
    const result = isValidRuntime.call(v);

    // ASSERT
    expect(result).toBeFalsy();
    expect(v.logger.fatal).toHaveBeenCalled();
  });
});
