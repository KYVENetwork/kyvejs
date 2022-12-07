import KyveSDK from "../../src";
import { JsonSchemaGenerator } from "typescript-json-schema/typescript-json-schema";
import { KyveLCDClientType } from "../../src";
import { createValidator } from "../helper";
const TEST_NETWORK = "korellia";
const PATH_TO_QUERY_TYPES =
  "./node_modules/@kyvejs/types/dist/proto/kyve/registry/v1beta1/query";
const TEST_HEIGHT = "1000000";

let lcdClient: KyveLCDClientType;
let typeQuerySchemas: JsonSchemaGenerator;
let validate: Function;
beforeAll(async () => {
  const sdk = new KyveSDK(TEST_NETWORK);
  lcdClient = await sdk.createLCDClient();
  const result = createValidator([PATH_TO_QUERY_TYPES]);
  validate = result.validate;
  typeQuerySchemas = result.typeQuerySchemas;
});

it("Query <params>", async () => {
  const result = await lcdClient.kyve.registry.v1beta1.params();
  const schema = typeQuerySchemas.getSchemaForSymbol("QueryParamsResponse");
  const validationResult = validate(schema, result);
  expect(validationResult.valid).toBeTruthy();
});

it("Query <pools> and <pool> by id", async () => {
  const poolsResponse = await lcdClient.kyve.registry.v1beta1.pools();
  const schema = typeQuerySchemas.getSchemaForSymbol("QueryPoolsResponse");
  //do not test pagination property
  delete schema.properties?.pagination;
  delete poolsResponse.pagination;
  const vResult = validate(schema, poolsResponse);
  expect(vResult.valid).toBeTruthy();
  // jest doesn't support nested generative test, needs a solution how to split into separate test cases
  // maybe another test runner?
  for (let pool of poolsResponse.pools) {
    const poolsResponse = await lcdClient.kyve.registry.v1beta1.pool({
      id: pool.id,
    });
    const schema = typeQuerySchemas.getSchemaForSymbol("QueryPoolResponse");
    const vResult = validate(schema, poolsResponse);
    expect(vResult.valid).toBeTruthy();
  }
});

it("Query <fundersList>", async () => {
  const poolsResponse = await lcdClient.kyve.registry.v1beta1.pools();
  const schema = typeQuerySchemas.getSchemaForSymbol(
    "QueryFundersListResponse"
  );
  for (let pool of poolsResponse.pools) {
    const poolsResponse = await lcdClient.kyve.registry.v1beta1.fundersList({
      pool_id: pool.id,
    });
    const vResult = validate(schema, poolsResponse);
    expect(vResult.valid).toBeTruthy();
  }
});

it("Query <funder>", async () => {
  const pool = await lcdClient.kyve.registry.v1beta1.pools({
    pagination: { limit: "1" },
  });
  const founders = await lcdClient.kyve.registry.v1beta1.fundersList({
    pool_id: pool.pools[0].id,
  });
  const founder = await lcdClient.kyve.registry.v1beta1.funder({
    pool_id: pool.pools[0].id,
    funder: founders.funders[0].account,
  });
  const schema = typeQuerySchemas.getSchemaForSymbol("QueryFunderResponse");
  const vResult = validate(schema, founder);
  expect(vResult.valid).toBeTruthy();
});

it("Query <stakersList>", async () => {
  const pool = await lcdClient.kyve.registry.v1beta1.pools({
    pagination: { limit: "1" },
  });
  const stakers = await lcdClient.kyve.registry.v1beta1.stakersList({
    pool_id: pool.pools[0].id,
    status: 1,
  });
  const schema = typeQuerySchemas.getSchemaForSymbol(
    "QueryStakersListResponse"
  );
  const vResult = validate(schema, stakers);
  expect(vResult.valid).toBeTruthy();
});

it("Query <staker>", async () => {
  const pool = await lcdClient.kyve.registry.v1beta1.pools({
    pagination: { limit: "1" },
  });
  const stakersListResponse = await lcdClient.kyve.registry.v1beta1.stakersList(
    {
      pool_id: pool.pools[0].id,
      status: 1,
    }
  );
  const stakerResponse = await lcdClient.kyve.registry.v1beta1.staker({
    pool_id: pool.pools[0].id,
    staker: stakersListResponse.stakers[0].staker,
  });
  const schema = typeQuerySchemas.getSchemaForSymbol("QueryStakerResponse");
  const vResult = validate(schema, stakerResponse);
  expect(vResult.valid).toBeTruthy();
});

it("Query <proposals>", async () => {
  const pool = await lcdClient.kyve.registry.v1beta1.pools({
    pagination: { limit: "1" },
  });
  const proposals = await lcdClient.kyve.registry.v1beta1.proposals({
    pool_id: pool.pools[0].id,
  });
  const schema = typeQuerySchemas.getSchemaForSymbol("QueryProposalsResponse");
  //do not test pagination property
  delete schema.properties?.pagination;
  delete proposals.pagination;
  const vResult = validate(schema, proposals);
  expect(vResult.valid).toBeTruthy();
});

it("Query <proposal>", async () => {
  const pool = await lcdClient.kyve.registry.v1beta1.pools({
    pagination: { limit: "1" },
  });
  const proposals = await lcdClient.kyve.registry.v1beta1.proposals({
    pool_id: pool.pools[0].id,
  });
  const proposal = await lcdClient.kyve.registry.v1beta1.proposal({
    storage_id: proposals.proposals[0].storage_id,
  });
  const schema = typeQuerySchemas.getSchemaForSymbol("QueryProposalResponse");
  const vResult = validate(schema, proposal);
  expect(vResult.valid).toBeTruthy();
});

it("Query <proposalByHeight>", async () => {
  const pool = await lcdClient.kyve.registry.v1beta1.pools({
    pagination: { limit: "1" },
  });
  const proposalByHeightResponse =
    await lcdClient.kyve.registry.v1beta1.proposalByHeight({
      pool_id: pool.pools[0].id,
      height: TEST_HEIGHT,
    });
  const schema = typeQuerySchemas.getSchemaForSymbol(
    "QueryProposalByHeightResponse"
  );
  const vResult = validate(schema, proposalByHeightResponse);
  expect(vResult.valid).toBeTruthy();
});

it("Query <canPropose>", async () => {
  const pool = await lcdClient.kyve.registry.v1beta1.pools({
    pagination: { limit: "1" },
  });
  const stakersListResponse = await lcdClient.kyve.registry.v1beta1.stakersList(
    {
      pool_id: pool.pools[0].id,
      status: 1,
    }
  );
  const canProposeRes = await lcdClient.kyve.registry.v1beta1.canPropose({
    pool_id: pool.pools[0].id,
    proposer: stakersListResponse.stakers[0].staker,
    from_height: TEST_HEIGHT,
  });
  const schema = typeQuerySchemas.getSchemaForSymbol("QueryCanProposeResponse");
  const vResult = validate(schema, canProposeRes);
  expect(vResult.valid).toBeTruthy();
});

it("Query <canVote>", async () => {
  const pool = await lcdClient.kyve.registry.v1beta1.pools({
    pagination: { limit: "1" },
  });
  const stakersListResponse = await lcdClient.kyve.registry.v1beta1.stakersList(
    {
      pool_id: pool.pools[0].id,
      status: 1,
    }
  );
  const proposals = await lcdClient.kyve.registry.v1beta1.proposals({
    pool_id: pool.pools[0].id,
  });
  const canVoteRes = await lcdClient.kyve.registry.v1beta1.canVote({
    pool_id: pool.pools[0].id,
    voter: stakersListResponse.stakers[0].staker,
    storage_id: proposals.proposals[0].storage_id,
  });
  const schema = typeQuerySchemas.getSchemaForSymbol("QueryCanVoteResponse");
  const vResult = validate(schema, canVoteRes);
  expect(vResult.valid).toBeTruthy();
});

it("Query <stakeInfo>", async () => {
  const pool = await lcdClient.kyve.registry.v1beta1.pools({
    pagination: { limit: "1" },
  });
  const stakersListResponse = await lcdClient.kyve.registry.v1beta1.stakersList(
    {
      pool_id: pool.pools[0].id,
      status: 1,
    }
  );
  const stakeInfoRes = await lcdClient.kyve.registry.v1beta1.stakeInfo({
    pool_id: pool.pools[0].id,
    staker: stakersListResponse.stakers[0].staker,
  });
  const schema = typeQuerySchemas.getSchemaForSymbol("QueryStakeInfoResponse");
  const vResult = validate(schema, stakeInfoRes);
  expect(vResult.valid).toBeTruthy();
});

it("Query <accountAssets>", async () => {
  const pool = await lcdClient.kyve.registry.v1beta1.pools({
    pagination: { limit: "1" },
  });
  const stakersListResponse = await lcdClient.kyve.registry.v1beta1.stakersList(
    {
      pool_id: pool.pools[0].id,
      status: 1,
    }
  );
  const accountAssetsRes = await lcdClient.kyve.registry.v1beta1.accountAssets({
    address: stakersListResponse.stakers[0].account,
  });
  const schema = typeQuerySchemas.getSchemaForSymbol(
    "QueryAccountAssetsResponse"
  );
  const vResult = validate(schema, accountAssetsRes);
  expect(vResult.valid).toBeTruthy();
});

it("Query <accountFundedList>", async () => {
  const pool = await lcdClient.kyve.registry.v1beta1.pools({
    pagination: { limit: "1" },
  });
  const foundersRes = await lcdClient.kyve.registry.v1beta1.fundersList({
    pool_id: pool.pools[0].id,
  });
  const accountFundedListRes =
    await lcdClient.kyve.registry.v1beta1.accountFundedList({
      address: foundersRes.funders[0].account,
    });
  const schema = typeQuerySchemas.getSchemaForSymbol(
    "QueryAccountFundedListResponse"
  );
  // do not test pagination property
  delete schema.properties?.pagination;
  delete accountFundedListRes.pagination;
  const vResult = validate(schema, accountFundedListRes);
  expect(vResult.valid).toBeTruthy();
});

it("Query <accountStakedList>", async () => {
  const pool = await lcdClient.kyve.registry.v1beta1.pools({
    pagination: { limit: "1" },
  });
  const stakersListResponse = await lcdClient.kyve.registry.v1beta1.stakersList(
    {
      pool_id: pool.pools[0].id,
      status: 1,
    }
  );
  const accountStakedListRes =
    await lcdClient.kyve.registry.v1beta1.accountStakedList({
      address: stakersListResponse.stakers[0].account,
    });
  const schema = typeQuerySchemas.getSchemaForSymbol(
    "QueryAccountStakedListResponse"
  );
  // do not test pagination property
  delete schema.properties?.pagination;
  delete accountStakedListRes.pagination;
  const vResult = validate(schema, accountStakedListRes);
  expect(vResult.valid).toBeTruthy();
});

it("Query <accountDelegationList>", async () => {
  const pool = await lcdClient.kyve.registry.v1beta1.pools({
    pagination: { limit: "1" },
  });
  const stakersListResponse = await lcdClient.kyve.registry.v1beta1.stakersList(
    {
      pool_id: pool.pools[0].id,
      status: 1,
    }
  );
  const accountDelegationListRes =
    await lcdClient.kyve.registry.v1beta1.accountDelegationList({
      address: stakersListResponse.stakers[0].account,
    });
  const schema = typeQuerySchemas.getSchemaForSymbol(
    "QueryAccountDelegationListResponse"
  );
  // do not test pagination property
  delete schema.properties?.pagination;
  delete accountDelegationListRes.pagination;

  const vResult = validate(schema, accountDelegationListRes);
  expect(vResult.valid).toBeTruthy();
});
it("Query <delegatorsByPoolAndStaker>", async () => {
  const pool = await lcdClient.kyve.registry.v1beta1.pools({
    pagination: { limit: "1" },
  });
  const stakersListResponse = await lcdClient.kyve.registry.v1beta1.stakersList(
    {
      pool_id: pool.pools[0].id,
      status: 1,
    }
  );
  const delegatorsRes =
    await lcdClient.kyve.registry.v1beta1.delegatorsByPoolAndStaker({
      pool_id: pool.pools[0].id,
      staker: stakersListResponse.stakers[0].staker,
    });
  const schema = typeQuerySchemas.getSchemaForSymbol(
    "QueryDelegatorsByPoolAndStakerResponse"
  );
  //do not test pagination property
  delete schema.properties?.pagination;
  delete delegatorsRes.pagination;
  const vResult = validate(schema, delegatorsRes);
  expect(vResult.valid).toBeTruthy();
});

it("Query <delegator>", async () => {
  const pool = await lcdClient.kyve.registry.v1beta1.pools({
    pagination: { limit: "1" },
  });
  const stakersListResponse = await lcdClient.kyve.registry.v1beta1.stakersList(
    {
      pool_id: pool.pools[0].id,
      status: 1,
    }
  );
  const delegatorsRes =
    await lcdClient.kyve.registry.v1beta1.delegatorsByPoolAndStaker({
      pool_id: pool.pools[0].id,
      staker: stakersListResponse.stakers[0].staker,
    });
  const delegatorResponse = await lcdClient.kyve.registry.v1beta1.delegator({
    pool_id: pool.pools[0].id,
    staker: stakersListResponse.stakers[0].staker,
    delegator: delegatorsRes.delegators[0].delegator,
  });
  const schema = typeQuerySchemas.getSchemaForSymbol("QueryDelegatorResponse");
  const vResult = validate(schema, delegatorResponse);
  expect(vResult.valid).toBeTruthy();
});

it("Query <stakersByPoolAndDelegator>", async () => {
  const pool = await lcdClient.kyve.registry.v1beta1.pools({
    pagination: { limit: "1" },
  });
  const stakersListResponse = await lcdClient.kyve.registry.v1beta1.stakersList(
    {
      pool_id: pool.pools[0].id,
      status: 1,
    }
  );
  const delegatorsRes =
    await lcdClient.kyve.registry.v1beta1.delegatorsByPoolAndStaker({
      pool_id: pool.pools[0].id,
      staker: stakersListResponse.stakers[0].staker,
    });
  const stakersByPoolAndDelegatorRes =
    await lcdClient.kyve.registry.v1beta1.stakersByPoolAndDelegator({
      pool_id: pool.pools[0].id,
      delegator: delegatorsRes.delegators[0].delegator,
    });
  const schema = typeQuerySchemas.getSchemaForSymbol(
    "QueryStakersByPoolAndDelegatorResponse"
  );
  //do not test pagination property
  delete schema.properties?.pagination;
  delete stakersByPoolAndDelegatorRes.pagination;
  const vResult = validate(schema, stakersByPoolAndDelegatorRes);
  expect(vResult.valid).toBeTruthy();
});

it("Query <accountStakingUnbondingsRequest>", async () => {
  const pool = await lcdClient.kyve.registry.v1beta1.pools({
    paused: false,
    pagination: { limit: "1" },
  });
  const stakersListResponse = await lcdClient.kyve.registry.v1beta1.stakersList(
    {
      pool_id: pool.pools[0].id,
      status: 1,
    }
  );
  //todo: suppose that in a pool at least one unbonding staker, need mock data
  const staker = stakersListResponse.stakers.filter(
    (it) => it.unbonding_amount.length > 1
  );
  const accountStakingUnbondingResponse =
    await lcdClient.kyve.registry.v1beta1.accountStakingUnbonding({
      address: staker[0].account,
    });
  const schema = typeQuerySchemas.getSchemaForSymbol(
    "QueryAccountStakingUnbondingsResponse"
  );
  delete schema.properties?.pagination;
  delete accountStakingUnbondingResponse.pagination;
  const vResult = validate(schema, accountStakingUnbondingResponse);
  expect(vResult.valid).toBeTruthy();
});

it("Query <accountDelegationUnbondings>", async () => {
  const pool = await lcdClient.kyve.registry.v1beta1.pools({
    paused: false,
    pagination: { limit: "1" },
  });
  const stakersListResponse = await lcdClient.kyve.registry.v1beta1.stakersList(
    {
      pool_id: pool.pools[0].id,
      status: 1,
    }
  );
  //todo: suppose that in a pool at least one unbonding staker, need mock data
  const unboandingStakers = stakersListResponse.stakers.filter(
    (it) => it.unbonding_amount.length > 1
  );
  const delegatorsRes =
    await lcdClient.kyve.registry.v1beta1.delegatorsByPoolAndStaker({
      pool_id: pool.pools[0].id,
      staker: unboandingStakers[0].staker,
    });

  const accountDelegationUnbondingRes = (
    await Promise.all(
      delegatorsRes.delegators.map(async (delegator) => {
        const accountStakingUnbondingResponse =
          await lcdClient.kyve.registry.v1beta1.accountDelegationUnbondings({
            address: delegator.delegator,
          });

        if (accountStakingUnbondingResponse.unbondings.length) {
          return accountStakingUnbondingResponse;
        }
      })
    )
  ).find(Boolean);

  const schema = typeQuerySchemas.getSchemaForSymbol(
    "QueryAccountDelegationUnbondingsResponse"
  );
  delete schema.properties?.pagination;
  delete accountDelegationUnbondingRes?.pagination;
  const vResult = validate(schema, accountDelegationUnbondingRes);
  expect(vResult.valid).toBeTruthy();
});
