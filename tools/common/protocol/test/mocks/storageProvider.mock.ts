import { BundleTag } from "../../src";

export const TestNormalStorageProvider = jest.fn().mockImplementation(() => {
  return {
    name: "TestNormalStorageProvider",
    coinDecimals: 12,
    getAddress: jest.fn().mockResolvedValue("testaddress"),
    getBalance: jest.fn().mockResolvedValue("1000000"),
    getPrice: jest
      .fn()
      .mockImplementation((bytes: number) => (bytes * 1).toString()),
    saveBundle: jest
      .fn()
      .mockImplementation((bundle: Buffer, _: BundleTag[]) => ({
        storageId: "test_storage_id",
        storageData: bundle,
      })),
    retrieveBundle: jest
      .fn()
      .mockImplementation((storageId: string, _: number) => ({
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
