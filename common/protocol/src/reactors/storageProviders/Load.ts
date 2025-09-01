import { EthereumSigner } from "@ardrive/turbo-sdk";
import { createData } from "@dha-team/arbundles";
import { computeAddress } from "ethers/lib/utils";
import axios from "axios";
import FormData from "form-data";
import { BundleTag, IStorageProvider, StorageReceipt } from "../../types";

require("dotenv").config();

export class Load implements IStorageProvider {
  public name = "Load";
  public coinDecimals = 0;

  private signer: EthereumSigner;
  private apiKey: string;
  private baseUrl: string;

  constructor(storagePriv: string) {
    if (!storagePriv) {
      throw new Error("Load storage provider requires a private key");
    }
    if (!process.env.LOAD_STORAGE_PROVIDER_API_KEY) {
      throw new Error(
        "Load storage provider requires LOAD_STORAGE_PROVIDER_API_KEY environment variable"
      );
    }

    this.signer = new EthereumSigner(storagePriv);
    this.apiKey = process.env.LOAD_STORAGE_PROVIDER_API_KEY;
    this.baseUrl =
      process.env.LOAD_BASE_URL || "https://load-s3-agent.load.network";
  }

  async getAddress(): Promise<string> {
    try {
      const publicKey = await this.signer.publicKey;
      return computeAddress(publicKey);
    } catch (error) {
      throw new Error(`Failed to get address: ${error}`);
    }
  }
  // Load S3 has no Balance functionality
  async getBalance() {
    return "";
  }
  // No price metric for Load S3
  async getPrice(_: number) {
    return "0";
  }

  async saveBundle(bundle: Buffer, tags: BundleTag[]): Promise<StorageReceipt> {
    try {

      // Convert BundleTag[] to the format expected by @dha-team/arbundles
      const arbundleTags = tags.map((tag) => ({
        name: tag.name,
        value: tag.value,
      }));
      // Create and sign DataItem 
      const dataItem = createData(bundle, this.signer, {
        tags: arbundleTags,
        target: undefined,
        anchor: undefined,
      });

      await dataItem.sign(this.signer);
      const signedDataItemBuffer = dataItem.getRaw();

      // Prepare DataItem for the format compatible with 
      // Load S3 Agent API
      const formData = new FormData();
      formData.append("file", signedDataItemBuffer, {
        filename: `${dataItem.id}.bin`,
        contentType: "application/octet-stream",
      });

      // Upload signed DataItem to Load S3
      const response = await axios.post(`${this.baseUrl}/upload`, formData, {
        headers: {
          Authorization: `Bearer ${this.apiKey}`,
          signed: "true",
          ...formData.getHeaders(),
        },
        timeout: 60000,
        maxContentLength: Infinity,
        maxBodyLength: Infinity,
      });

      if (response.status !== 200) {
        throw new Error(`Upload failed with status: ${response.status}`);
      }

      return {
        storageId: dataItem.id,
        storageData: signedDataItemBuffer,
      };
    } catch (error) {
      throw new Error(`Failed to upload bundle to Load: ${error}`);
    }
  }

  async retrieveBundle(
    storageId: string,
    timeout: number
  ): Promise<StorageReceipt> {
    try {

      // Load S3 Agent return a redirect to the presigned get_object URL
      // when an object (offchain DataItem) is requested, for performance purposes.
      // So first we get the presigned get_object URL.
      const redirectResponse = await axios.get(`${this.baseUrl}/${storageId}`, {
        headers: {
          Authorization: `Bearer ${this.apiKey}`,
        },
        maxRedirects: 0,
        validateStatus: (status) => status === 302 || status === 200,
        timeout: timeout || 30000,
      });

      if (redirectResponse.status === 302) {
        const presignedUrl = redirectResponse.headers.location;

        // Download offchain DataItem body's data from the presigned Load S3 URL
        const dataResponse = await axios.get(presignedUrl, {
          responseType: "arraybuffer",
          timeout: timeout || 30000,
        });

        return {
          storageId,
          storageData: Buffer.from(dataResponse.data),
        };
      } else if (redirectResponse.status === 200) {
        return {
          storageId,
          storageData: Buffer.from(redirectResponse.data),
        };
      }

      throw new Error(`Unexpected response status: ${redirectResponse.status}`);
    } catch (error) {

      if (axios.isAxiosError(error)) {
        if (error.response?.status === 404) {
          throw new Error(`Bundle not found: ${storageId}`);
        }
        if (error.code === "ECONNABORTED") {
          throw new Error(`Retrieval timeout for bundle: ${storageId}`);
        }
      }
      throw new Error(`Failed to retrieve bundle from Load: ${error}`);
    }
  }
}
