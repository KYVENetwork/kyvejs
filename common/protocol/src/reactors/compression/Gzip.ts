import { gunzipSync, gzipSync } from "zlib";
import { MAX_COMPRESSION_BYTE_SIZE } from "../..";

import { ICompression } from "../../types";

export class Gzip implements ICompression {
  public name = "Gzip";
  public mimeType = "application/gzip";

  async compress(data: Buffer) {
    return gzipSync(data);
  }

  async decompress(data: Buffer) {
    // limit maxOutputLength to protect against zip bombs
    return gunzipSync(data, {
      maxOutputLength: MAX_COMPRESSION_BYTE_SIZE,
    });
  }
}
