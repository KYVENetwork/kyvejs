import { ICompression } from "../../types/index.js";

export class NoCompression implements ICompression {
  public name = "NoCompression";
  public mimeType = "application/json";

  async compress(data: Buffer) {
    return data;
  }

  async decompress(data: Buffer) {
    return data;
  }
}
