export const client = () =>
  ({
    nativeClient: {
      getBalance: jest.fn().mockResolvedValue("0"),
      getChainId: jest.fn().mockResolvedValue("kyve-local-test"),
    },
    kyve: {
      bundles: {
        v1beta1: {
          claimUploaderRole: jest.fn().mockResolvedValue({
            txHash: "claim_uploader_role_test_hash",
            execute: jest.fn().mockResolvedValue({
              code: 0,
            }),
          }),
          skipUploaderRole: jest.fn().mockResolvedValue({
            txHash: "skip_uploader_role_test_hash",
            execute: jest.fn().mockResolvedValue({
              code: 0,
            }),
          }),
          voteBundleProposal: jest.fn().mockResolvedValue({
            txHash: "vote_bundle_proposal_test_hash",
            execute: jest.fn().mockResolvedValue({
              code: 0,
            }),
          }),
          submitBundleProposal: jest.fn().mockResolvedValue({
            txHash: "submit_bundle_proposal_test_hash",
            execute: jest.fn().mockResolvedValue({
              code: 0,
            }),
          }),
        },
      },
    },
    account: {
      address: "test_valaddress",
      algo: "ed25519",
      pubkey: new Uint8Array(),
    },
  } as any);
