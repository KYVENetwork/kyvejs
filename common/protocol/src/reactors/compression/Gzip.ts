import { gunzipSync, gzipSync } from "zlib";

import { ICompression } from "../../types";

export class Gzip implements ICompression {
  public name = "Gzip";
  public mimeType = "application/gzip";

  async compress(data: Buffer) {
    return gzipSync(data);
  }

  async decompress(data: Buffer) {
    return gunzipSync(data);
  }
}
