export const client = () =>
  ({
    kyve: {
      bundles: {
        v1beta1: {
          claimUploaderRole: jest.fn().mockResolvedValue({
            code: 0,
          }),
          skipUploaderRole: jest.fn().mockResolvedValue({
            code: 0,
          }),
          voteBundleProposal: jest.fn().mockResolvedValue({
            code: 0,
          }),
          submitBundleProposal: jest.fn().mockResolvedValue({
            code: 0,
          }),
        },
      },
    },
    account: {
      address: "test_valaddress",
      algo: "ed25519",
      pubkey: new Uint8Array(),
    },
    nativeClient: {
      getChainId: jest.fn().mockResolvedValue("kyve-local-test"),
    },
  } as any);
