import {
  GetObjectCommand,
  PutObjectCommand,
  S3Client,
} from "@aws-sdk/client-s3";
import { v4 as uuidv4 } from "uuid";
import { BundleTag, IStorageProvider } from "../../types";

export class S3 implements IStorageProvider {
  public name = "S3";
  public coinDecimals = 0;

  private readonly region: string;
  private readonly bucket: string;
  private readonly s3Client: S3Client;

  constructor() {
    this.region = process.env.AWS_REGION || "";
    if (!this.region) {
      throw new Error("Env variable AWS_REGION not defined.");
    }

    this.bucket = process.env.AWS_BUCKET || "";
    if (!this.region) {
      throw new Error("Env variable AWS_BUCKET not defined.");
    }

    if (!process.env.AWS_ACCESS_KEY_ID) {
      throw new Error("Env variable AWS_ACCESS_KEY_ID not defined.");
    }

    if (!process.env.AWS_SECRET_ACCESS_KEY) {
      throw new Error("Env variable AWS_SECRET_ACCESS_KEY not defined.");
    }

    this.s3Client = new S3Client({ region: this.region });
  }

  async getAddress() {
    return this.s3Client.config.region as string;
  }

  async getBalance() {
    return "";
  }

  async getPrice(_: number) {
    return "0";
  }

  async saveBundle(bundle: Buffer, _: BundleTag[]) {
    const storageId = uuidv4();

    await this.s3Client.send(
      new PutObjectCommand({
        Bucket: this.bucket,
        Key: storageId,
        Body: bundle,
      })
    );

    return {
      storageId: storageId,
      storageData: bundle,
    };
  }

  async retrieveBundle(storageId: string, _: number) {
    const response = await this.s3Client.send(
      new GetObjectCommand({
        Bucket: this.bucket,
        Key: storageId,
      })
    );

    const data =
      (await response.Body?.transformToByteArray()) ?? new Uint8Array();

    return {
      storageId,
      storageData: Buffer.from(data),
    };
  }
}
