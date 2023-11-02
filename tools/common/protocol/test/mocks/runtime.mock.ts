import { DataItem, Validator, sha256FromJson } from "../../src";

export const TestRuntime = jest.fn().mockImplementation(() => {
  return {
    name: "@kyve/evm",
    version: "0.0.0",
    config: "config",
    validateSetConfig: jest.fn(),
    getDataItem: jest.fn(async (_: Validator, key: string) => ({
      key,
      value: `${key}-value`,
    })),
    prevalidateDataItem: jest.fn(async (_: Validator, __: DataItem) => true),
    transformDataItem: jest.fn(async (_: Validator, item: DataItem) => ({
      key: item.key,
      value: `${item.value}-transform`,
    })),
    validateDataItem: jest.fn(
      async (
        _: Validator,
        proposedDataItem: DataItem,
        validationDataItem: DataItem
      ) => {
        const proposedDataItemHash = sha256FromJson(proposedDataItem);
        const validationDataItemHash = sha256FromJson(validationDataItem);

        return proposedDataItemHash === validationDataItemHash;
      }
    ),
    summarizeDataBundle: jest.fn(async (_: Validator, bundle: DataItem[]) =>
      JSON.stringify(bundle)
    ),
    nextKey: jest.fn(async (_: Validator, key: string) =>
      (parseInt(key) + 1).toString()
    ),
  };
});
