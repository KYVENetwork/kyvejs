import { Logger } from "tslog";
import { Validator } from "../../src/index";
import { setupMetrics, isNodeValidator } from "../../src/methods";
import { register } from "prom-client";
import { TestRuntime } from "../mocks/runtime.mock";
import { genesis_pool } from "../mocks/constants";

/*

TEST CASES - isNodeValidator

* assert if node is in the active validator set
* assert if node is not in the active validator set
* assert unexpected error

*/

describe("isNodeValidator", () => {
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

  test("assert if node is in the active validator set", async () => {
    // ARRANGE
    v.pool.stakers = [
      "kyve1jq304cthpx0lwhpqzrdjrcza559ukyy3zsl2vd",
      "kyve1hvg7zsnrj6h29q9ss577mhrxa04rn94h7zjugq",
      "kyve1ay22rr3kz659fupu0tcswlagq4ql6rwm4nuv0s",
    ];
    v["staker"] = "kyve1jq304cthpx0lwhpqzrdjrcza559ukyy3zsl2vd";

    // ACT
    const result = isNodeValidator.call(v);

    // ASSERT
    expect(result).toBeTruthy();
  });

  test("assert if node is not in the active validator set", async () => {
    // ARRANGE
    v.pool.stakers = [
      "kyve1jq304cthpx0lwhpqzrdjrcza559ukyy3zsl2vd",
      "kyve1hvg7zsnrj6h29q9ss577mhrxa04rn94h7zjugq",
      "kyve1ay22rr3kz659fupu0tcswlagq4ql6rwm4nuv0s",
    ];
    v["staker"] = "kyve1u7ukf2nv6v5j5y2yqprm8yqruue2rlmrkx4xgq";

    // ACT
    const result = isNodeValidator.call(v);

    // ASSERT
    expect(result).toBeFalsy();
  });

  test("assert unexpected error", async () => {
    // ARRANGE
    v.pool.stakers = "invalid" as any;
    v["staker"] = "kyve1u7ukf2nv6v5j5y2yqprm8yqruue2rlmrkx4xgq";

    // ACT
    const result = isNodeValidator.call(v);

    // ASSERT
    expect(result).toBeFalsy();
    expect(v.logger.fatal).toHaveBeenCalled();
  });
});
