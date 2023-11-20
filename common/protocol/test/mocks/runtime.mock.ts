import { DataItem, Validator, sha256FromJson } from "../../src";

export const TestConfig = jest.fn().mockImplementation(() => {
  return {
    host: "localhost",
    port: 50051,
    useGrpc: false,
    grpcServices: {},
  };
});

export const TestRuntime = jest.fn().mockImplementation(() => {
  return {
    getName: jest.fn(async () => "@kyve/evm"),
    getVersion: jest.fn(async () => "0.0.0"),
    config: "config",
    validateSetConfig: jest.fn(),
    getDataItem: jest.fn(async (key: string) => ({
      key,
      value: `${key}-value`,
    })),
    prevalidateDataItem: jest.fn(async (__: DataItem) => true),
    transformDataItem: jest.fn(async (item: DataItem) => ({
      key: item.key,
      value: `${item.value}-transform`,
    })),
    validateDataItem: jest.fn(
      async (proposedDataItem: DataItem, validationDataItem: DataItem) => {
        const proposedDataItemHash = sha256FromJson(proposedDataItem);
        const validationDataItemHash = sha256FromJson(validationDataItem);

        return proposedDataItemHash === validationDataItemHash;
      }
    ),
    summarizeDataBundle: jest.fn(async (bundle: DataItem[]) =>
      JSON.stringify(bundle)
    ),
    nextKey: jest.fn(async (key: string) => (parseInt(key) + 1).toString()),
  };
});

export const newTestValidator = (): Validator => {
  const v = new Validator(new TestConfig());
  const runtime = new TestRuntime();
  const runtimeServiceImpl = {
    getRuntimeName: runtime.getRuntimeName,
    getRuntimeVersion: runtime.getRuntimeVersion,
    validateSetConfig: runtime.validateSetConfig,
    getDataItem: runtime.getDataItem,
    prevalidateDataItem: runtime.prevalidateDataItem,
    transformDataItem: runtime.transformDataItem,
    validateDataItem: runtime.validateDataItem,
    summarizeDataBundle: runtime.summarizeDataBundle,
    nextKey: runtime.nextKey,
  };
  v["runtime"] = runtime;
  return v;
};
