import { DataItem } from "../../src";

export const TestCacheProvider = jest.fn().mockImplementation(() => {
  let cache: any = {};

  return {
    name: "TestCacheProvider",
    put: jest.fn().mockImplementation(async (key: string, value: DataItem) => {
      cache[key] = value;
    }),
    get: jest.fn().mockImplementation(async (key: string) => {
      if (cache[key]) {
        return cache[key];
      }

      throw new Error("not found");
    }),
    exists: jest.fn().mockImplementation(async (key: string) => {
      return !!cache[key];
    }),
    del: jest.fn().mockImplementation(async (key: string) => {
      delete cache[key];
    }),
    drop: jest.fn().mockImplementation(async () => {
      cache = {};
    }),
  };
});
