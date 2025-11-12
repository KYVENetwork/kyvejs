import type { JestConfigWithTsJest } from 'ts-jest';

const config: JestConfigWithTsJest = {
    preset: 'ts-jest/presets/default-esm',
    testEnvironment: 'node',
    extensionsToTreatAsEsm: ['.ts'],
    transform: {
        '^.+\\.ts$': ['ts-jest', { useESM: true }],
        '^.+\\.js$': ['ts-jest', { useESM: true }],
    },
    transformIgnorePatterns: [
        'node_modules/(?!(@filoz/(synapse-sdk|synapse-core)|@web3-storage|multiformats|sync-multihash-sha2|iso-web|delay|p-retry|is-network-error|dnum))',
    ],
    moduleNameMapper: {
      '@filoz/synapse-sdk': '<rootDir>/../../node_modules/@filoz/synapse-sdk/dist/src/index.js',
      '^@web3-storage/data-segment(.*)$': '<rootDir>/../../node_modules/@web3-storage/data-segment/src$1.js',
      'multiformats': '<rootDir>/../../node_modules/multiformats/dist/src/index.js',
      'multiformats/(.*)$': '<rootDir>/../../node_modules/multiformats/dist/src/$1.js',
      '@ipld/dag-cbor': '<rootDir>/../../node_modules/@ipld/dag-cbor/dist/index.min.js',
        '^(\\.{1,2}/.*)\\.js$': '$1',
    },
    testPathIgnorePatterns: ['/dist/'],
};

export default config;
