// the time a node should halt if the node decides to idle
export const IDLE_TIME = 60 * 1000;

// the time a node should halt if the node decides wait for a refresh
export const REFRESH_TIME = 10 * 1000;

// the time the node should halt if an error occurs
export const ERROR_IDLE_TIME = 10 * 1000;

// the max bundle size allowed to upload - currently 100MB
export const MAX_BUNDLE_BYTE_SIZE = 200 * 1024 * 1024;

// a vote map to allow human readable votes
export const VOTE = {
  UNSPECIFIED: 0,
  VALID: 1,
  INVALID: 2,
  ABSTAIN: 3,
};
