import { VoteType } from "@kyvejs/types/client/kyve/bundles/v1beta1/tx";

// the time a node should halt if the node decides to idle
export const IDLE_TIME = 60 * 1000;

// the time a node should halt if the node decides wait for a refresh
export const REFRESH_TIME = 10 * 1000;

// the time the node should halt if an error occurs
export const ERROR_IDLE_TIME = 10 * 1000;

// the max bundle size allowed to upload - currently 200MB
export const MAX_BUNDLE_BYTE_SIZE = 200 * 1024 * 1024;

// the max compression size - currently 2GB
export const MAX_COMPRESSION_BYTE_SIZE = 2 * 10 ** 9;

// re-export vote type
export const VOTE = VoteType;
