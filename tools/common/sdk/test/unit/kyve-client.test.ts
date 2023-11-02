import KyveClient from "../../src/clients/rpc-client/client";
import { createValidator } from "../helper";
import * as fs from "fs";
import { resolve } from "path";
// import { kyve, cosmos as cosmosProto } from "@kyvejs/types";

/** pool **/
import {
  MsgCancelRuntimeUpgrade,
  MsgCreatePool,
  MsgScheduleRuntimeUpgrade,
  MsgUpdatePool,
} from "@kyvejs/types/client/kyve/pool/v1beta1/tx";
/** stakers **/
import {
  MsgCreateStaker,
  MsgUpdateParams as MsgUpdateParamsStakers,
} from "@kyvejs/types/client/kyve/stakers/v1beta1/tx";
import { MsgUpdateMetadata } from "@kyvejs/types/client/kyve/stakers/v1beta1/tx";
import { MsgJoinPool } from "@kyvejs/types/client/kyve/stakers/v1beta1/tx";
import { MsgUpdateCommission } from "@kyvejs/types/client/kyve/stakers/v1beta1/tx";
import { MsgLeavePool } from "@kyvejs/types/client/kyve/stakers/v1beta1/tx";
/** delegations **/
import {
  MsgDelegate,
  MsgUpdateParams as MsgUpdateParamsDelegation,
} from "@kyvejs/types/client/kyve/delegation/v1beta1/tx";
import { MsgWithdrawRewards } from "@kyvejs/types/client/kyve/delegation/v1beta1/tx";
import { MsgRedelegate } from "@kyvejs/types/client/kyve/delegation/v1beta1/tx";
import { MsgUndelegate } from "@kyvejs/types/client/kyve/delegation/v1beta1/tx";
/** bundles **/
import {
  MsgSubmitBundleProposal,
  MsgUpdateParams as MsgUpdateParamsBundles,
} from "@kyvejs/types/client/kyve/bundles/v1beta1/tx";
import { MsgVoteBundleProposal } from "@kyvejs/types/client/kyve/bundles/v1beta1/tx";
import { MsgClaimUploaderRole } from "@kyvejs/types/client/kyve/bundles/v1beta1/tx";
import { MsgSkipUploaderRole } from "@kyvejs/types/client/kyve/bundles/v1beta1/tx";
/** funder **/
import {
  MsgCreateFunder,
  MsgDefundPool,
  MsgFundPool,
  MsgUpdateFunder
} from '@kyvejs/types/client/kyve/funders/v1beta1/tx';

/** gov **/
import Mock = jest.Mock;
import { DENOM, GOV_AUTHORITY } from "../../src/constants";

import { SigningStargateClient } from "@cosmjs/stargate";
import { cosmos } from "@keplr-wallet/cosmos";
import TxRaw = cosmos.tx.v1beta1.TxRaw;
import { OfflineAminoSigner } from "@cosmjs/amino/build/signer";
import { MsgUpdateParams as MsgUpdateParamsFees } from "@kyvejs/types/client/kyve/fees/v1beta1/tx";

function extractTsFromPath(path: string) {
  return fs
    .readdirSync(path)
    .filter((files) => files.endsWith("d.ts"))
    .map((dtsFiles) => resolve(path, dtsFiles));
}

const mockAccountData = {
  address: "kyve19jc64sd773gtjljksjhls0n5mqay7xj83yeqvk",
  algo: "secp256k1" as const,
  pubkey: new Uint8Array(),
};

const TEST_MEMO = "test_memo";
const TEST_FEE = 1;
const TEST_AMOUNT = "1000000000";

const methodsByGroup = [
  [
    {
      name: "bundles",
      pathToTypes: extractTsFromPath("../proto/client/kyve/bundles/v1beta1"),
    },
    [
      {
        methodName: "submitBundleProposal",
        parameters: {
          params: MsgSubmitBundleProposal.fromJSON({}),
          schemaType: "MsgSubmitBundleProposal",
        },
      },
      {
        methodName: "voteBundleProposal",
        parameters: {
          params: MsgVoteBundleProposal.fromJSON({}),
          schemaType: "MsgVoteBundleProposal",
        },
      },
      {
        methodName: "claimUploaderRole",
        parameters: {
          params: MsgClaimUploaderRole.fromJSON({}),
          schemaType: "MsgClaimUploaderRole",
        },
      },
      {
        methodName: "skipUploaderRole",
        parameters: {
          params: MsgSkipUploaderRole.fromJSON({}),
          schemaType: "MsgSkipUploaderRole",
        },
      },
    ],
  ],
  [
    {
      name: "delegation",
      pathToTypes: extractTsFromPath("../proto/client/kyve/delegation/v1beta1"),
    },
    [
      {
        methodName: "delegate",
        parameters: {
          params: MsgDelegate.fromJSON({}),
          schemaType: "MsgDelegate",
        },
      },
      {
        methodName: "withdrawRewards",
        parameters: {
          params: MsgWithdrawRewards.fromJSON({}),
          schemaType: "MsgWithdrawRewards",
        },
      },
      {
        methodName: "undelegate",
        parameters: {
          params: MsgUndelegate.fromJSON({}),
          schemaType: "MsgUndelegate",
        },
      },
      {
        methodName: "redelegate",
        parameters: {
          params: MsgRedelegate.fromJSON({}),
          schemaType: "MsgRedelegate",
        },
      },
    ],
  ],
  [
    {
      name: "funders",
      pathToTypes: extractTsFromPath("../proto/client/kyve/funders/v1beta1"),
    },
    [
      {
        methodName: "createFunder",
        parameters: {
          params: MsgCreateFunder.fromJSON({}),
          schemaType: "MsgFundPool",
        },
      },
      {
        methodName: "updateFunder",
        parameters: {
          params: MsgUpdateFunder.fromJSON({}),
          schemaType: "MsgDefundPool",
        },
      },
      {
        methodName: "fundPool",
        parameters: {
          params: MsgFundPool.fromJSON({}),
          schemaType: "MsgFundPool",
        },
      },
      {
        methodName: "defundPool",
        parameters: {
          params: MsgDefundPool.fromJSON({}),
          schemaType: "MsgDefundPool",
        },
      },
    ],
  ],
  [
    {
      name: "stakers",
      pathToTypes: extractTsFromPath("../proto/client/kyve/stakers/v1beta1"),
    },
    [
      {
        methodName: "createStaker",
        parameters: {
          params: MsgCreateStaker.fromJSON({}),
          schemaType: "MsgCreateStaker",
        },
      },
      {
        methodName: "updateMetadata",
        parameters: {
          params: MsgUpdateMetadata.fromJSON({}),
          schemaType: "MsgUpdateMetadata",
        },
      },
      {
        methodName: "updateCommission",
        parameters: {
          params: MsgUpdateCommission.fromJSON({}),
          schemaType: "MsgUpdateCommission",
        },
      },
      {
        methodName: "joinPool",
        parameters: {
          params: MsgJoinPool.fromJSON({}),
          schemaType: "MsgJoinPool",
        },
      },
      {
        methodName: "leavePool",
        parameters: {
          params: MsgLeavePool.fromJSON({}),
          schemaType: "MsgLeavePool",
        },
      },
    ],
  ],
] as const;

let kyveClient: KyveClient;
let mockSign: Mock;
let mockSendTokens: Mock;
let mockGetBalance: Mock;

beforeEach(() => {
  mockSign = jest.fn(() => TxRaw.create());
  mockSendTokens = jest.fn();
  mockGetBalance = jest.fn(() => ({ amount: 0 }));
  const mockNativeClient = {
    simulate: () => Promise.resolve(1),
    sign: mockSign,
    sendTokens: mockSendTokens,
    getBalance: mockGetBalance,
  } as unknown as SigningStargateClient;
  const mockAminoSigner = {
    signAmino() {},
    getAccounts() {},
  } as unknown as OfflineAminoSigner;
  kyveClient = new KyveClient(
    mockNativeClient,
    mockAccountData,
    mockAminoSigner
  );
});
for (let [bundleConfig, methods] of methodsByGroup) {
  describe(`Methods ${bundleConfig.name}`, () => {
    const validator = createValidator(bundleConfig.pathToTypes);
    methods.forEach((method) => {
      it(`method ${method.methodName}`, async () => {
        // @ts-ignore
        await kyveClient.kyve[bundleConfig.name].v1beta1[method.methodName](
          //@ts-ignore have no idea how to create it generic. btw ts-ignore is ok, because we check params from json schema
          method.parameters.params,
          { memo: TEST_MEMO, fee: TEST_FEE }
        );

        expect(mockSign).toHaveBeenCalledTimes(1);

        const [[testAddress, [tx], fee, memo]] = mockSign.mock.calls;
        expect(testAddress).toEqual(mockAccountData.address);

        expect(tx).toEqual(
          expect.objectContaining({
            typeUrl: expect.any(String),
            value: expect.any(Object),
          })
        );
        expect(memo).toEqual(TEST_MEMO);
        const validationResult = validator.validate(
          validator.typeQuerySchemas.getSchemaForSymbol(
            method.parameters.schemaType
          ),
          tx.value
        );
        expect(validationResult.valid).toBeTruthy();
        expect(Object.keys(fee).sort()).toEqual(["amount", "gas"].sort());
      });
    });
  });
}

describe("Base methods", () => {
  it("transfer", async () => {
    const testRecipient = "kyveTestRecipient";
    const testAmount = "10000000000";
    await kyveClient.kyve.base.v1beta1.transfer(testRecipient, testAmount, {
      memo: TEST_MEMO,
      fee: TEST_FEE,
    });
    expect(mockSign).toHaveBeenCalledTimes(1);

    const [[_, [tx], fee, memo]] = mockSign.mock.calls;
    expect(tx.value.fromAddress).toEqual(mockAccountData.address);
    expect(tx.value.toAddress).toEqual(testRecipient);
    expect(memo).toEqual(TEST_MEMO);
    expect(fee.gas.toString()).toEqual(TEST_FEE.toString());
    expect(tx.value.amount[0]).toEqual({
      denom: DENOM,
      amount: testAmount,
    });
  });

  it("getKyveBalance", async () => {
    const result = await kyveClient.kyve.base.v1beta1.getKyveBalance();
    expect(mockGetBalance).toHaveBeenCalledTimes(1);
    const [[ownerAddress, denom]] = mockGetBalance.mock.calls;
    expect(ownerAddress).toEqual(mockAccountData.address);
    expect(denom).toEqual(DENOM);
    expect(result).toEqual(0);
  });
});
const GovMethods = [
  {
    method: "createPool",
    decoder: MsgCreatePool,
  },
  {
    method: "updatePool",
    decoder: MsgUpdatePool,
  },
  {
    method: "pausePool",
    decoder: MsgPausePool,
  },
  {
    method: "unpausePool",
    decoder: MsgUnpausePool,
  },
  {
    method: "scheduleRuntimeUpgrade",
    decoder: MsgScheduleRuntimeUpgrade,
  },
  {
    method: "cancelRuntimeUpgrade",
    decoder: MsgCancelRuntimeUpgrade,
  },
  {
    method: "updateParamsStakers",
    decoder: MsgUpdateParamsStakers,
  },
  {
    method: "updateParamsDelegation",
    decoder: MsgUpdateParamsDelegation,
  },
  {
    method: "updateParamsBundles",
    decoder: MsgUpdateParamsBundles,
  },
  {
    method: "updateParamsFees",
    decoder: MsgUpdateParamsFees,
  },
] as const;

describe("Gov methods", () => {
  GovMethods.forEach((method) => {
    it(`${method.method}`, async () => {
      const govParam = method.decoder.fromJSON({ authority: GOV_AUTHORITY });
      //@ts-ignore
      await kyveClient.kyve.gov.v1[method.method](govParam, TEST_AMOUNT, {
        isExpedited: true,
      });
      expect(mockSign).toHaveBeenCalledTimes(1);
      const [[testAddress, [tx], fee]] = mockSign.mock.calls;
      expect(testAddress).toEqual(mockAccountData.address);
      expect(tx).toEqual(
        expect.objectContaining({
          typeUrl: expect.any(String),
          value: {
            messages: [
              {
                type_url: expect.any(String),
                value: expect.any(Uint8Array),
              },
            ],
            initial_deposit: [
              {
                denom: DENOM,
                amount: TEST_AMOUNT,
              },
            ],
            proposer: mockAccountData.address,
            metadata: { isExpedited: true },
          },
        })
      );

      expect(Object.keys(fee).sort()).toEqual(["amount", "gas"].sort());
      expect(method.decoder.decode(tx.value.messages[0].value)).toEqual(
        govParam
      );
    });
  });

  it("`govVote`", async () => {
    const testProposalNumber = "1";
    const testVoteOptions = "Yes";
    await kyveClient.kyve.gov.v1.vote(testProposalNumber, testVoteOptions);
    expect(mockSign).toHaveBeenCalledTimes(1);
    const [[testAddress, [tx], fee]] = mockSign.mock.calls;
    expect(testAddress).toEqual(mockAccountData.address);
    expect(Object.keys(fee).sort()).toEqual(["amount", "gas"].sort());
    expect(tx).toEqual({
      typeUrl: "/cosmos.gov.v1.MsgVote",
      value: {
        proposal_id: testProposalNumber,
        voter: mockAccountData.address,
        option: 1,
      },
    });
  });
});
