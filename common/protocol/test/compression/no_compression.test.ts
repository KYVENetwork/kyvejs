import { randomBytes } from "crypto";
import { ICompression } from "../../src/index";
import { NoCompression } from "../../src/reactors/compression/NoCompression";

/*

TEST CASES - NoCompression

* assert name
* assert mime-type
* assert compression
* assert decompression

*/

describe("noCompression", () => {
  type NewType = ICompression;

  let compression: NewType;

  beforeEach(() => {
    compression = new NoCompression();
  });

  test("assert name", () => {
    // ACT
    const name = compression.name;

    // ASSERT
    expect(name).toEqual("NoCompression");
  });

  test("assert mime-type", () => {
    // ACT
    const mimeType = compression.mimeType;

    // ASSERT
    expect(mimeType).toEqual("application/json");
  });

  test("assert compression", async () => {
    // ARRANGE
    const data = randomBytes(32);

    // ACT
    const compressed = await compression.compress(data);

    // ASSERT
    // since NoCompression does not compress we can make
    // an equal check here
    expect(data).toEqual(compressed);
  });

  test("assert decompression", async () => {
    // ARRANGE
    const data = randomBytes(32);
    const compressed = await compression.compress(data);

    // ACT
    const decompressed = await compression.decompress(compressed);

    // ASSERT
    expect(data).toEqual(decompressed);
  });
});
