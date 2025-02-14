import http from "http";
import prom_client, { register } from "prom-client";
import url from "url";

import { IMetrics, Validator, standardizeError } from "../..";

/**
 * setupMetrics initiates all metrics and starts if enabled a local prometheus
 * metrics server
 *
 * @method setupMetrics
 * @param {Validator} this
 * @return {Promise<void>}
 */
export function setupMetrics(this: Validator): void {
  try {
    // init metric parameters
    this.m = {} as IMetrics;

    this.logger.debug(`Initializing metrics: prometheus default metrics`);
    prom_client.collectDefaultMetrics({
      labels: { app: "kyve-validator" },
    });

    // TX METRICS

    // MsgClaimUploaderRole metrics
    this.logger.debug(
      `Initializing metrics: tx_claim_uploader_role_successful`
    );

    this.m.tx_claim_uploader_role_successful = new prom_client.Counter({
      name: "tx_claim_uploader_role_successful",
      help: "The amount of MsgClaimUploaderRole txs with receipt code = 0.",
    });

    this.logger.debug(
      `Initializing metrics: tx_claim_uploader_role_unsuccessful`
    );

    this.m.tx_claim_uploader_role_unsuccessful = new prom_client.Counter({
      name: "tx_claim_uploader_role_unsuccessful",
      help: "The amount of MsgClaimUploaderRole txs with receipt code != 0.",
    });

    this.logger.debug(`Initializing metrics: tx_claim_uploader_role_failed`);

    this.m.tx_claim_uploader_role_failed = new prom_client.Counter({
      name: "tx_claim_uploader_role_failed",
      help: "The amount of MsgClaimUploaderRole txs that failed with an error",
    });

    // MsgVoteBundleProposal metrics
    this.logger.debug(
      `Initializing metrics: tx_vote_bundle_proposal_successful`
    );

    this.m.tx_vote_bundle_proposal_successful = new prom_client.Counter({
      name: "tx_vote_bundle_proposal_successful",
      help: "The amount of MsgVoteBundleProposal txs with receipt code = 0.",
    });

    this.logger.debug(
      `Initializing metrics: tx_vote_bundle_proposal_unsuccessful`
    );

    this.m.tx_vote_bundle_proposal_unsuccessful = new prom_client.Counter({
      name: "tx_vote_bundle_proposal_unsuccessful",
      help: "The amount of MsgVoteBundleProposal txs with receipt code != 0.",
    });

    this.logger.debug(`Initializing metrics: tx_vote_bundle_proposal_failed`);

    this.m.tx_vote_bundle_proposal_failed = new prom_client.Counter({
      name: "tx_vote_bundle_proposal_failed",
      help: "The amount of MsgVoteBundleProposal txs that failed with an error",
    });

    // MsgSubmitBundleProposal metrics
    this.logger.debug(
      `Initializing metrics: tx_submit_bundle_proposal_successful`
    );

    this.m.tx_submit_bundle_proposal_successful = new prom_client.Counter({
      name: "tx_submit_bundle_proposal_successful",
      help: "The amount of MsgSubmitBundleProposal txs with receipt code = 0.",
    });

    this.logger.debug(
      `Initializing metrics: tx_submit_bundle_proposal_unsuccessful`
    );

    this.m.tx_submit_bundle_proposal_unsuccessful = new prom_client.Counter({
      name: "tx_submit_bundle_proposal_unsuccessful",
      help: "The amount of MsgSubmitBundleProposal txs with receipt code != 0.",
    });

    this.logger.debug(`Initializing metrics: tx_submit_bundle_proposal_failed`);

    this.m.tx_submit_bundle_proposal_failed = new prom_client.Counter({
      name: "tx_submit_bundle_proposal_failed",
      help: "The amount of MsgSubmitBundleProposal txs that failed with an error",
    });

    // MsgSkipUploaderRole metrics
    this.logger.debug(`Initializing metrics: tx_skip_uploader_role_successful`);

    this.m.tx_skip_uploader_role_successful = new prom_client.Counter({
      name: "tx_skip_uploader_role_successful",
      help: "The amount of MsgSkipUploaderRole txs with receipt code = 0.",
    });

    this.logger.debug(
      `Initializing metrics: tx_skip_uploader_role_unsuccessful`
    );

    this.m.tx_skip_uploader_role_unsuccessful = new prom_client.Counter({
      name: "tx_skip_uploader_role_unsuccessful",
      help: "The amount of MsgSkipUploaderRole txs with receipt code != 0.",
    });

    this.logger.debug(`Initializing metrics: tx_skip_uploader_role_failed`);

    this.m.tx_skip_uploader_role_failed = new prom_client.Counter({
      name: "tx_skip_uploader_role_failed",
      help: "The amount of MsgSkipUploaderRole txs that failed with an error",
    });

    // QUERY METRICS

    // QueryPool metrics
    this.logger.debug(`Initializing metrics: query_pool_successful`);

    this.m.query_pool_successful = new prom_client.Counter({
      name: "query_pool_successful",
      help: "The amount of QueryPool /kyve/query/v1beta1/pool/{id} calls that succeeded.",
    });

    this.logger.debug(`Initializing metrics: query_pool_failed`);

    this.m.query_pool_failed = new prom_client.Counter({
      name: "query_pool_failed",
      help: "The amount of QueryPool /kyve/query/v1beta1/pool/{id} calls that failed.",
    });

    // QueryParams metrics
    this.logger.debug(`Initializing metrics: query_params_successful`);

    this.m.query_params_successful = new prom_client.Counter({
      name: "query_params_successful",
      help: "The amount of QueryParams /kyve/query/v1beta1/params/{id} calls that succeeded.",
    });

    this.logger.debug(`Initializing metrics: query_params_failed`);

    this.m.query_params_failed = new prom_client.Counter({
      name: "query_params_failed",
      help: "The amount of QueryParams /kyve/query/v1beta1/params/{id} calls that failed.",
    });

    // QueryCanValidate metrics
    this.logger.debug(`Initializing metrics: query_can_validate_successful`);

    this.m.query_can_validate_successful = new prom_client.Counter({
      name: "query_can_validate_successful",
      help: "The amount of QueryCanValidate /kyve/query/v1beta1/can_validate/{pool_id}/{valaddress} calls that succeeded.",
    });

    this.logger.debug(`Initializing metrics: query_can_validate_failed`);

    this.m.query_can_validate_failed = new prom_client.Counter({
      name: "query_can_validate_failed",
      help: "The amount of QueryCanValidate /kyve/query/v1beta1/can_validate/{pool_id}/{valaddress} calls that failed.",
    });

    this.logger.debug(`Initializing metrics: query_can_propose_successful`);

    // QueryCanPropose metrics
    this.m.query_can_propose_successful = new prom_client.Counter({
      name: "query_can_propose_successful",
      help: "The amount of QueryCanPropose /kyve/query/v1beta1/can_propose/{pool_id}/{staker}/{proposer}/{from_index} calls that succeeded.",
    });

    this.logger.debug(`Initializing metrics: query_can_propose_failed`);

    this.m.query_can_propose_failed = new prom_client.Counter({
      name: "query_can_propose_failed",
      help: "The amount of QueryCanPropose /kyve/query/v1beta1/can_propose/{pool_id}/{staker}/{proposer}/{from_index} calls that failed.",
    });

    // QueryCanVote metrics
    this.logger.debug(`Initializing metrics: query_can_vote_successful`);

    this.m.query_can_vote_successful = new prom_client.Counter({
      name: "query_can_vote_successful",
      help: "The amount of QueryCanVote /kyve/query/v1beta1/can_vote/{pool_id}/{staker}/{voter}/{storage_id} calls that succeeded.",
    });

    this.logger.debug(`Initializing metrics: query_can_vote_failed`);

    this.m.query_can_vote_failed = new prom_client.Counter({
      name: "query_can_vote_failed",
      help: "The amount of QueryCanVote /kyve/query/v1beta1/can_vote/{pool_id}/{staker}/{voter}/{storage_id} calls that failed.",
    });

    // STORAGE PROVIDER METRICS

    // retrieve bundle
    this.logger.debug(
      `Initializing metrics: storage_provider_retrieve_successful`
    );

    this.m.storage_provider_retrieve_successful = new prom_client.Counter({
      name: "storage_provider_retrieve_successful",
      help: "The amount of calls to the storage provider to retrieve a bundle that succeeded.",
    });

    this.logger.debug(`Initializing metrics: storage_provider_retrieve_failed`);

    this.m.storage_provider_retrieve_failed = new prom_client.Counter({
      name: "storage_provider_retrieve_failed",
      help: "The amount of calls to the storage provider to retrieve a bundle that failed.",
    });

    // save bundle
    this.logger.debug(`Initializing metrics: storage_provider_save_successful`);

    this.m.storage_provider_save_successful = new prom_client.Counter({
      name: "storage_provider_save_successful",
      help: "The amount of calls to the storage provider to save a bundle that succeeded.",
    });

    this.logger.debug(`Initializing metrics: storage_provider_save_failed`);

    this.m.storage_provider_save_failed = new prom_client.Counter({
      name: "storage_provider_save_failed",
      help: "The amount of calls to the storage provider to save a bundle that failed.",
    });

    // BUNDLE METRICS

    // bundle votes
    this.logger.debug(`Initializing metrics: bundles_voted_valid`);

    this.m.bundles_voted_valid = new prom_client.Counter({
      name: "bundles_voted_valid",
      help: "The amount the validator voted valid.",
    });

    this.logger.debug(`Initializing metrics: bundles_voted_invalid`);

    this.m.bundles_voted_invalid = new prom_client.Counter({
      name: "bundles_voted_invalid",
      help: "The amount the validator voted invalid.",
    });

    this.logger.debug(`Initializing metrics: bundles_voted_abstain`);

    this.m.bundles_voted_abstain = new prom_client.Counter({
      name: "bundles_voted_abstain",
      help: "The amount the validator voted abstain.",
    });

    // bundle proposals
    this.logger.debug(`Initializing metrics: bundles_proposed`);

    this.m.bundles_proposed = new prom_client.Counter({
      name: "bundles_proposed",
      help: "The amount of bundles the validator proposed.",
    });

    this.logger.debug(`Initializing metrics: bundles_round_time`);

    this.m.bundles_round_time = new prom_client.Gauge({
      name: "bundles_round_time",
      help: "The time for a bundle proposal round.",
    });

    this.logger.debug(
      `Initializing metrics: bundles_remaining_upload_interval_time`
    );

    this.m.bundles_remaining_upload_interval_time = new prom_client.Gauge({
      name: "bundles_remaining_upload_interval_time",
      help: "The time for the remaining upload interval.",
    });

    this.logger.debug(`Initializing metrics: bundles_wait_for_next_round_time`);

    this.m.bundles_wait_for_next_round_time = new prom_client.Gauge({
      name: "bundles_wait_for_next_round_time",
      help: "The time to wait for the next proposal round.",
    });

    this.logger.debug(`Initializing metrics: bundles_amount`);

    this.m.bundles_amount = new prom_client.Counter({
      name: "bundles_amount",
      help: "The amount of bundles the validator participated in.",
    });

    this.logger.debug(`Initializing metrics: bundles_data_items`);

    this.m.bundles_data_items = new prom_client.Gauge({
      name: "bundles_data_items",
      help: "The amount of data items the validator participated in.",
    });

    this.logger.debug(`Initializing metrics: bundles_byte_size`);

    this.m.bundles_byte_size = new prom_client.Gauge({
      name: "bundles_byte_size",
      help: "The amount of data in bytes the validator participated in.",
    });

    // RUNTIME METRICS

    this.logger.debug(`Initializing metrics: runtime_get_data_item_successful`);

    this.m.runtime_get_data_item_successful = new prom_client.Counter({
      name: "runtime_get_data_item_successful",
      help: "The amount of successful returned data items from the runtime.",
    });

    this.logger.debug(`Initializing metrics: runtime_get_data_item_failed`);

    this.m.runtime_get_data_item_failed = new prom_client.Counter({
      name: "runtime_get_data_item_failed",
      help: "The amount of failed returned data items from the runtime.",
    });

    // BALANCE METRICS

    this.logger.debug(`Initializing metrics: balance_staker`);

    this.m.balance_staker = new prom_client.Gauge({
      name: "balance_staker",
      help: "The current $KYVE balance of the staker.",
    });

    this.logger.debug(`Initializing metrics: balance_valaccount`);

    this.m.balance_valaccount = new prom_client.Gauge({
      name: "balance_valaccount",
      help: "The current $KYVE balance of the valaccount (soon deprecated, use balance_pool_account instead).",
    });

    this.logger.debug(`Initializing metrics: balance_pool_account`);

    this.m.balance_pool_account = new prom_client.Gauge({
      name: "balance_pool_account",
      help: "The current $KYVE balance of the pool account.",
    });

    this.logger.debug(`Initializing metrics: balance_storage_provider`);

    this.m.balance_storage_provider = new prom_client.Gauge({
      name: "balance_storage_provider",
      help: "The current balance of the storage provider.",
    });

    // CACHE METRICS

    this.logger.debug(`Initializing metrics: cache_current_items`);

    this.m.cache_current_items = new prom_client.Gauge({
      name: "cache_current_items",
      help: "The amount of data items currently in the cache.",
    });

    this.logger.debug(`Initializing metrics: cache_index_tail`);

    this.m.cache_index_tail = new prom_client.Gauge({
      name: "cache_index_tail",
      help: "The current index of the last data item in the cache.",
    });

    this.logger.debug(`Initializing metrics: cache_index_head`);

    this.m.cache_index_head = new prom_client.Gauge({
      name: "cache_index_head",
      help: "The current index of the first data item in the cache.",
    });

    // FEE METRICS

    this.logger.debug(`Initializing metrics: fees_claim_uploader_role`);

    this.m.fees_claim_uploader_role = new prom_client.Counter({
      name: "fees_claim_uploader_role",
      help: "The current gas costs of tx claim uploader role metrics",
    });

    this.logger.debug(`Initializing metrics: fees_vote_bundle_proposal`);

    this.m.fees_vote_bundle_proposal = new prom_client.Counter({
      name: "fees_vote_bundle_proposal",
      help: "The current gas costs of tx vote bundle proposal metrics",
    });

    this.logger.debug(`Initializing metrics: fees_submit_bundle_proposal`);

    this.m.fees_submit_bundle_proposal = new prom_client.Counter({
      name: "fees_submit_bundle_proposal",
      help: "The current gas costs of tx submit bundle proposal metrics",
    });

    this.logger.debug(`Initializing metrics: fees_skip_uploader_role`);

    this.m.fees_skip_uploader_role = new prom_client.Counter({
      name: "fees_skip_uploader_role",
      help: "The current gas costs of tx skip uploader role metrics",
    });

    // start local metrics server
    if (this.metrics) {
      this.logger.info(
        `Starting metric server on: http://localhost:${this.metricsPort}/metrics`
      );

      // HTTP server which exposes the metrics on http://localhost:8080/metrics
      http
        .createServer(async (req: any, res: any) => {
          // Retrieve route from request object
          const route = url.parse(req.url).pathname;

          if (route === "/metrics") {
            // Return all metrics the Prometheus exposition format
            res.setHeader("Content-Type", register.contentType);
            const metrics = await prom_client.register.metrics();
            res.end(metrics);
          }
        })
        .listen(this.metricsPort, "0.0.0.0");
    }
  } catch (err) {
    this.logger.fatal(`Failed to setup metrics. Exiting ...`);
    this.logger.fatal(standardizeError(err));

    process.exit(1);
  }
}
