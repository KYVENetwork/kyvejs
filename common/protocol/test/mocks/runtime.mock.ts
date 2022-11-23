import { DataItem, ProtocolNode, sha256 } from "../../src";

export const TestRuntime = jest.fn().mockImplementation(() => {
  return {
    name: "@kyve/evm",
    version: "0.0.0",
    getDataItem: jest.fn(
      async (core: ProtocolNode, source: string, key: string) => ({
        key,
        value: `${key}-value`,
      })
    ),
    transformDataItem: jest.fn(async (core: ProtocolNode, item: DataItem) => ({
      key: item.key,
      value: `${item.value}-transform`,
    })),
    validateDataItem: jest.fn(
      async (
        core: ProtocolNode,
        proposedDataItem: DataItem,
        validationDataItem: DataItem
      ) => {
        const proposedDataItemHash = sha256(
          Buffer.from(JSON.stringify(proposedDataItem))
        );
        const validationDataItemHash = sha256(
          Buffer.from(JSON.stringify(validationDataItem))
        );

        return proposedDataItemHash === validationDataItemHash;
      }
    ),
    summarizeDataBundle: jest.fn(
      async (core: ProtocolNode, bundle: DataItem[]) => JSON.stringify(bundle)
    ),
    nextKey: jest.fn(async (key: string) => (parseInt(key) + 1).toString()),
  };
});
