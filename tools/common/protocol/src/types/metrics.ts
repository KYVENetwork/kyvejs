import { Counter, Gauge } from "prom-client";

type PromCounter = typeof Counter.prototype;
type PromGauge = typeof Gauge.prototype;

export interface IMetrics {
  // TX METRICS

  // MsgClaimUploaderRole metrics
  tx_claim_uploader_role_successful: PromCounter;
  tx_claim_uploader_role_unsuccessful: PromCounter;
  tx_claim_uploader_role_failed: PromCounter;

  // MsgVoteBundleProposal metrics
  tx_vote_bundle_proposal_successful: PromCounter;
  tx_vote_bundle_proposal_unsuccessful: PromCounter;
  tx_vote_bundle_proposal_failed: PromCounter;

  // MsgSubmitBundleProposal metrics
  tx_submit_bundle_proposal_successful: PromCounter;
  tx_submit_bundle_proposal_unsuccessful: PromCounter;
  tx_submit_bundle_proposal_failed: PromCounter;

  // MsgSkipUploaderRole metrics
  tx_skip_uploader_role_successful: PromCounter;
  tx_skip_uploader_role_unsuccessful: PromCounter;
  tx_skip_uploader_role_failed: PromCounter;

  // QUERY METRICS

  // QueryPool metrics
  query_pool_successful: PromCounter;
  query_pool_failed: PromCounter;

  // QueryCanValidate metrics
  query_can_validate_successful: PromCounter;
  query_can_validate_failed: PromCounter;

  // QueryCanPropose metrics
  query_can_propose_successful: PromCounter;
  query_can_propose_failed: PromCounter;

  // QueryCanVote metrics
  query_can_vote_successful: PromCounter;
  query_can_vote_failed: PromCounter;

  // STORAGE PROVIDER METRICS

  // retrieve bundle
  storage_provider_retrieve_successful: PromCounter;
  storage_provider_retrieve_failed: PromCounter;

  // save bundle
  storage_provider_save_successful: PromCounter;
  storage_provider_save_failed: PromCounter;

  // BUNDLE METRICS

  // bundle votes
  bundles_voted_valid: PromCounter;
  bundles_voted_invalid: PromCounter;
  bundles_voted_abstain: PromCounter;

  // bundle proposals
  bundles_proposed: PromCounter;

  // bundle round time
  bundles_round_time: PromGauge;
  bundles_remaining_upload_interval_time: PromGauge;
  bundles_wait_for_next_round_time: PromGauge;

  bundles_amount: PromCounter;
  bundles_data_items: PromGauge;
  bundles_byte_size: PromGauge;

  // BALANCE METRICS

  balance_staker: PromGauge;
  balance_valaccount: PromGauge;
  balance_storage_provider: PromGauge;

  // RUNTIME METRICS

  // get data item
  runtime_get_data_item_successful: PromCounter;
  runtime_get_data_item_failed: PromCounter;

  // CACHE METRICS

  cache_current_items: PromGauge;
  cache_index_tail: PromGauge;
  cache_index_head: PromGauge;

  // FEE METRICS

  fees_claim_uploader_role: PromCounter;
  fees_vote_bundle_proposal: PromCounter;
  fees_submit_bundle_proposal: PromCounter;
  fees_skip_uploader_role: PromCounter;
}
