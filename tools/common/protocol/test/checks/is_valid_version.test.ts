import { Logger } from "tslog";
import { Validator } from "../../src/index";
import { setupMetrics, isValidVersion } from "../../src/methods";
import { register } from "prom-client";
import { TestRuntime } from "../mocks/runtime.mock";
import { genesis_pool } from "../mocks/constants";

/*

TEST CASES - isValidVersion

* assert equal remote and local version
* assert equal remote and local version with prerelease
* assert remote and local with higher patch version
* assert remote and local with lower patch version
* assert remote and local with higher minor version
* assert remote and local with lower minor version
* assert remote and local with higher major version
* assert remote and local with lower major version
* assert remote and local with higher prerelease version
* assert remote and local with lower prerelease version
* assert remote and local with different major and minor version
* assert remote and local with different major, minor and patch version
* assert remote and local with different major, minor, patch and prerelease version
* assert unexpected error

*/

describe("isValidVersion", () => {
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

  test("assert equal remote and local version", async () => {
    // ARRANGE

    // remote
    v.pool!.data!.protocol!.version = "1.0.0";

    // local
    v["runtime"].version = "1.0.0";

    // ACT
    const result = isValidVersion.call(v);

    // ASSERT
    expect(result).toBeTruthy();
  });

  test("assert equal remote and local version with prerelease", async () => {
    // ARRANGE

    // remote
    v.pool!.data!.protocol!.version = "1.0.0-alpha.3";

    // local
    v["runtime"].version = "1.0.0-alpha.3";

    // ACT
    const result = isValidVersion.call(v);

    // ASSERT
    expect(result).toBeTruthy();
  });

  test("assert remote and local with higher patch version", async () => {
    // ARRANGE

    // remote
    v.pool!.data!.protocol!.version = "1.0.0";

    // local
    v["runtime"].version = "1.0.1";

    // ACT
    const result = isValidVersion.call(v);

    // ASSERT
    expect(result).toBeTruthy();
  });

  test("assert remote and local with lower patch version", async () => {
    // ARRANGE

    // remote
    v.pool!.data!.protocol!.version = "1.0.2";

    // local
    v["runtime"].version = "1.0.1";

    // ACT
    const result = isValidVersion.call(v);

    // ASSERT
    expect(result).toBeFalsy();
  });

  test("assert remote and local with higher minor version", async () => {
    // ARRANGE

    // remote
    v.pool!.data!.protocol!.version = "1.0.0";

    // local
    v["runtime"].version = "1.1.0";

    // ACT
    const result = isValidVersion.call(v);

    // ASSERT
    expect(result).toBeFalsy();
  });

  test("assert remote and local with lower minor version", async () => {
    // ARRANGE

    // remote
    v.pool!.data!.protocol!.version = "1.2.0";

    // local
    v["runtime"].version = "1.1.0";

    // ACT
    const result = isValidVersion.call(v);

    // ASSERT
    expect(result).toBeFalsy();
  });

  test("assert remote and local with higher major version", async () => {
    // ARRANGE

    // remote
    v.pool!.data!.protocol!.version = "1.0.0";

    // local
    v["runtime"].version = "2.0.0";

    // ACT
    const result = isValidVersion.call(v);

    // ASSERT
    expect(result).toBeFalsy();
  });

  test("assert remote and local with lower major version", async () => {
    // ARRANGE

    // remote
    v.pool!.data!.protocol!.version = "3.0.0";

    // local
    v["runtime"].version = "2.0.0";

    // ACT
    const result = isValidVersion.call(v);

    // ASSERT
    expect(result).toBeFalsy();
  });

  test("assert remote and local with higher prerelease version", async () => {
    // ARRANGE

    // remote
    v.pool!.data!.protocol!.version = "1.0.0-alpha.5";

    // local
    v["runtime"].version = "1.0.0-alpha.8";

    // ACT
    const result = isValidVersion.call(v);

    // ASSERT
    expect(result).toBeFalsy();
  });

  test("assert remote and local with lower prerelease version", async () => {
    // ARRANGE

    // remote
    v.pool!.data!.protocol!.version = "1.0.0-beta.5";

    // local
    v["runtime"].version = "1.0.0-beta.0";

    // ACT
    const result = isValidVersion.call(v);

    // ASSERT
    expect(result).toBeFalsy();
  });

  test("assert remote and local with different major and minor version", async () => {
    // ARRANGE

    // remote
    v.pool!.data!.protocol!.version = "1.0.0";

    // local
    v["runtime"].version = "2.1.0";

    // ACT
    const result = isValidVersion.call(v);

    // ASSERT
    expect(result).toBeFalsy();
  });

  test("assert remote and local with different major, minor and patch version", async () => {
    // ARRANGE

    // remote
    v.pool!.data!.protocol!.version = "1.0.0";

    // local
    v["runtime"].version = "2.1.1";

    // ACT
    const result = isValidVersion.call(v);

    // ASSERT
    expect(result).toBeFalsy();
  });

  test("assert remote and local with different major, minor, patch and prerelease version", async () => {
    // ARRANGE

    // remote
    v.pool!.data!.protocol!.version = "1.0.0-alpha.3";

    // local
    v["runtime"].version = "2.1.1-alpha.5";

    // ACT
    const result = isValidVersion.call(v);

    // ASSERT
    expect(result).toBeFalsy();
  });

  test("assert unexpected error", async () => {
    // ARRANGE

    // remote
    v.pool!.data!.protocol!.version = "1.0.0";

    // local
    v["runtime"] = null as any;

    // ACT
    const result = isValidVersion.call(v);

    // ASSERT
    expect(result).toBeFalsy();
    expect(v.logger.fatal).toHaveBeenCalled();
  });
});
