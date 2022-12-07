import { Validator } from "../..";

/**
 * continueRound is only used for test purposes to allow easier unit testing.
 * It will always return true and is mocked in unit tests to control the number
 * of proposal rounds.
 *
 * @method continueRound
 * @param {Validator} this
 * @return {boolean}
 */
export function continueRound(this: Validator): boolean {
  return true;
}
