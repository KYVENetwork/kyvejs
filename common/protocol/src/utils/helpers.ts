import { BigNumber } from "bignumber.js";
import crypto from "crypto";
import { DataItem } from "..";

/**
 * Waits for a specific amount of time
 *
 * @method sleep
 * @param {number} timeoutMs
 * @return {Promise<void>}
 */
export const sleep = (timeoutMs: number): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, timeoutMs));

/**
 * Standardizes any JSON object
 *
 * @method standardizeJSON
 * @param {any} object
 * @return {any}
 */
export const standardizeJSON = (object: any): any =>
  JSON.parse(JSON.stringify(object));

/**
 * Transforms a data bundle to raw bytes
 *
 * @method bundleToBytes
 * @param {DataItem[]} bundle
 * @return {Buffer}
 */
export const bundleToBytes = (bundle: DataItem[]): Buffer =>
  Buffer.from(JSON.stringify(bundle));

/**
 * Transforms raw bytes to a data bundle
 *
 * @method bytesToBundle
 * @param {DataItem[]} bundle
 * @return {Buffer}
 */
export const bytesToBundle = (bytes: Buffer): DataItem[] =>
  JSON.parse(bytes.toString());

/**
 * Creates a sha256 hash of raw byte data
 *
 * @method sha256
 * @param {Buffer} data
 * @return {string}
 */
export const sha256 = (data: Buffer): string => {
  if (data.byteLength) {
    return crypto.createHash("sha256").update(data).digest("hex");
  }

  return "";
};

/**
 * Formats any bignumber into a human readable format
 *
 * @method toHumanReadable
 * @param {string} amount
 * @param {number} precision defines how many decimals after the comma should be returned
 * @return {string}
 */
export const toHumanReadable = (amount: string, precision = 4): string => {
  const fmt = new BigNumber(amount || "0").div(10 ** 9).toFixed(precision, 1);

  if (precision > 1) {
    return `${fmt.split(".")[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",")}.${
      fmt.split(".")[1]
    }`;
  }

  return fmt.split(".")[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

/**
 * Generates every index pair of an array length n. Note that this
 * method is O(n^2)
 *
 * @method generateIndexPairs
 * @param {number} n length of array
 * @return {[number, number][]}
 */
export const generateIndexPairs = (n: number): [number, number][] => {
  let pairs: [number, number][] = [];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i !== j && !pairs.some((pair) => pair[0] === j && pair[1] === i)) {
        pairs.push([i, j]);
      }
    }
  }

  return pairs;
};

type OptionsRetryerType = {
  limitTimeoutMs: number;
  increaseByMs: number;
  maxRequests?: number;
};

type onErrorRetryerType = (
  value: Error,
  ctx: {
    nextTimeoutInMs: number;
    numberOfRetries: number;
    options: OptionsRetryerType;
  }
) => void;

/**
 * Calls any async function with a backoff strategy which behaviour
 * can be defined with options
 *
 * @method callWithBackoffStrategy
 * @param {() => Promise<T>} execution the method to execute with a backoff strategy
 * @param {OptionsRetryerType} options defines the backoff strategy. e.g the number of retries or the timeout limit
 * @param {onErrorRetryerType} onError a method which gets called if specified and if an error occurs calling the execution method
 * @return {Promise<T>} returns what the execution method returns
 */
export async function callWithBackoffStrategy<T>(
  execution: () => Promise<T>,
  options: OptionsRetryerType,
  onError?: onErrorRetryerType
): Promise<T> {
  let time = options.increaseByMs;
  let requests = 1;

  return new Promise(async (resolve) => {
    while (true) {
      try {
        return resolve(await execution());
      } catch (e) {
        if (onError) {
          await onError(e as Error, {
            nextTimeoutInMs: time,
            numberOfRetries: requests,
            options,
          });
        }

        await sleep(time);

        if (time < options.limitTimeoutMs) {
          time += options.increaseByMs;

          if (time > options.limitTimeoutMs) {
            time = options.limitTimeoutMs;
          }
        }

        if (options.maxRequests && requests >= options.maxRequests) {
          throw e;
        }

        requests++;
      }
    }
  });
}
