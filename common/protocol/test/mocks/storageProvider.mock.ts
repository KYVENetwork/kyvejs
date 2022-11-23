import { BundleTag } from "../../src";

export const TestNormalStorageProvider = jest.fn().mockImplementation(() => {
  return {
    name: "TestNormalStorageProvider",
    decimals: 12,
    init: jest.fn(),
    getBalance: jest.fn().mockResolvedValue("0"),
    saveBundle: jest
      .fn()
      .mockImplementation((bundle: Buffer, tags: BundleTag[]) => ({
        storageId: "test_storage_id",
        storageData: bundle,
      })),
    retrieveBundle: jest
      .fn()
      .mockImplementation((storageId: string, timeout: number) => ({
        storageId,
        storageData: Buffer.from(
          JSON.stringify([
            { key: "test_key_1", value: "test_value_1" },
            { key: "test_key_2", value: "test_value_2" },
          ])
        ),
      })),
  };
});

export const TestNoStorageProvider = jest.fn().mockImplementation(() => {
  return {
    name: "TestNoStorageProvider",
    decimals: 0,
    init: jest.fn(),
    getBalance: jest.fn().mockResolvedValue("0"),
    saveBundle: jest.fn().mockResolvedValue({
      storageId: "test_storage_id",
      storageData: Buffer.from(""),
    }),
    retrieveBundle: jest.fn().mockResolvedValue({
      storageId: "test_storage_id",
      storageData: Buffer.from(""),
    }),
  };
});
