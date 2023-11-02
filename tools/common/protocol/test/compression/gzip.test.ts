import { randomBytes } from "crypto";
import { gzipSync } from "zlib";
import { ICompression } from "../../src/index";
import { Gzip } from "../../src/reactors/compression/Gzip";

/*

TEST CASES - Gzip

* assert name
* assert mime-type
* assert compression
* assert decompression
* assert decompression with invalid input

*/

describe("gzip", () => {
  type NewType = ICompression;

  let compression: NewType;

  beforeEach(() => {
    compression = new Gzip();
  });

  test("assert name", () => {
    // ACT
    const name = compression.name;

    // ASSERT
    expect(name).toEqual("Gzip");
  });

  test("assert mime-type", () => {
    // ACT
    const mimeType = compression.mimeType;

    // ASSERT
    expect(mimeType).toEqual("application/gzip");
  });

  test("assert compression", async () => {
    // ARRANGE
    const data = randomBytes(32);

    // ACT
    const compressed = await compression.compress(data);

    // ASSERT
    const compressedCheck = gzipSync(data);
    expect(compressed).toEqual(compressedCheck);
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

  test("assert decompression with invalid input", async () => {
    // ARRANGE
    const invalidCompressed = randomBytes(32);

    const decompress = async () =>
      await compression.decompress(invalidCompressed);

    // ACT & ASSERT
    expect(decompress()).rejects.toThrowError();
  });
});
