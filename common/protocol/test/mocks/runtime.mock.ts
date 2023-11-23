import { ProtocolConfig, sha256FromJson, Validator } from '../../src';
import {
  DataItem,
  PrevalidateDataItemResponse,
  RuntimeServiceServer
} from '../../src/proto/kyverdk/runtime/v1/runtime';

export const TestRuntime = jest.fn().mockImplementation(() => {
  return {
    getName: jest.fn(async () => '@kyve/evm'),
    getVersion: jest.fn(async () => '0.0.0'),
    config: 'config',
    validateSetConfig: jest.fn(),
    getDataItem: jest.fn(async (key: string) => ({
      key,
      value: `${key}-value`
    })),
    prevalidateDataItem: jest.fn(async (__: DataItem) =>
      PrevalidateDataItemResponse.create({ valid: true })),
    transformDataItem: jest.fn(async (item: DataItem) => ({
      key: item.key,
      value: `${item.value}-transform`
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
    nextKey: jest.fn(async (key: string) => (parseInt(key) + 1).toString())
  };
});

export const newTestValidator = (): Validator => {
  const runtime = new TestRuntime();
  const runtimeServices: RuntimeServiceServer = {
    getRuntimeName: runtime.getRuntimeName,
    getRuntimeVersion: runtime.getRuntimeVersion,
    validateSetConfig: runtime.validateSetConfig,
    getDataItem: runtime.getDataItem,
    prevalidateDataItem: runtime.prevalidateDataItem,
    transformDataItem: runtime.transformDataItem,
    validateDataItem: runtime.validateDataItem,
    summarizeDataBundle: runtime.summarizeDataBundle,
    nextKey: runtime.nextKey
  };
  const config: Partial<ProtocolConfig> = ({
    useGrpc: false,
    services: runtimeServices
  });
  const v = new Validator(config);
  v['runtime'] = runtime;
  return v;
};
