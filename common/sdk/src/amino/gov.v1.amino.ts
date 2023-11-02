import { AminoConverters } from "@cosmjs/stargate";
import { MsgVote } from "@kyvejs/types/client/cosmos/gov/v1/tx";

import { isNotEmpty } from "../utils";

export const createGovV1AminoConverters = (): AminoConverters => {
  return {
    "/cosmos.gov.v1.MsgVote": {
      aminoType: "cosmos-sdk/v1/MsgVote",
      toAmino: (msg: MsgVote) => ({
        proposal_id: msg.proposal_id,
        voter: msg.voter,
        option: msg.option,
        ...(isNotEmpty(msg.metadata) && { metadata: msg.metadata }),
      }),
      fromAmino: (msg): MsgVote => ({
        proposal_id: msg.proposal_id,
        voter: msg.voter,
        option: msg.option,
        metadata: msg.metadata,
      }),
    },
  };
};
