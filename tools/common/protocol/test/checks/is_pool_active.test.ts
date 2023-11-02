import { Logger } from "tslog";
import { Validator } from "../../src/index";
import { setupMetrics, isPoolActive } from "../../src/methods";
import { register } from "prom-client";
import { TestRuntime } from "../mocks/runtime.mock";
import { genesis_pool } from "../mocks/constants";
import { PoolStatus } from "../../../types/lcd/kyve/pool/v1beta1/pool";

/*

TEST CASES - isPoolActive

* assert if pool status is POOL_STATUS_ACTIVE
* assert if pool status is POOL_STATUS_NO_FUNDS
* assert if pool status is POOL_STATUS_DISABLED
* assert if pool status is POOL_STATUS_NOT_ENOUGH_DELEGATION
* assert if pool status is POOL_STATUS_UPGRADING
* assert if pool status is POOL_STATUS_UNSPECIFIED
* assert if pool status is unknown

*/

describe("isPoolActive", () => {
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

  test("assert if pool status is POOL_STATUS_ACTIVE", async () => {
    // ARRANGE
    v.pool.status = PoolStatus.POOL_STATUS_ACTIVE;

    // ACT
    const result = isPoolActive.call(v);

    // ASSERT
    expect(result).toBeTruthy();
  });

  test("assert if pool status is POOL_STATUS_NO_FUNDS", async () => {
    // ARRANGE
    v.pool.status = PoolStatus.POOL_STATUS_NO_FUNDS;

    // ACT
    const result = isPoolActive.call(v);

    // ASSERT
    expect(result).toBeTruthy();
  });

  test("assert if pool status is POOL_STATUS_DISABLED", async () => {
    // ARRANGE
    v.pool.status = PoolStatus.POOL_STATUS_DISABLED;

    // ACT
    const result = isPoolActive.call(v);

    // ASSERT
    expect(result).toBeFalsy();
  });

  test("assert if pool status is POOL_STATUS_NOT_ENOUGH_DELEGATION", async () => {
    // ARRANGE
    v.pool.status = PoolStatus.POOL_STATUS_NOT_ENOUGH_DELEGATION;

    // ACT
    const result = isPoolActive.call(v);

    // ASSERT
    expect(result).toBeFalsy();
  });

  test("assert if pool status is POOL_STATUS_UPGRADING", async () => {
    // ARRANGE
    v.pool.status = PoolStatus.POOL_STATUS_UPGRADING;

    // ACT
    const result = isPoolActive.call(v);

    // ASSERT
    expect(result).toBeFalsy();
  });

  test("assert if pool status is POOL_STATUS_UNSPECIFIED", async () => {
    // ARRANGE
    v.pool.status = PoolStatus.POOL_STATUS_UNSPECIFIED;

    // ACT
    const result = isPoolActive.call(v);

    // ASSERT
    expect(result).toBeFalsy();
  });

  test("assert if pool status is unkown", async () => {
    // ARRANGE
    v.pool.status = "" as PoolStatus;

    // ACT
    const result = isPoolActive.call(v);

    // ASSERT
    expect(result).toBeFalsy();
  });
});
