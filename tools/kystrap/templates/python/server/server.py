import grpclib.server

import settings
from proto.kyverdk.runtime.v1 import *


class TendermintServer(RuntimeServiceBase):

    async def get_runtime_name(
            self, get_runtime_name_request: "GetRuntimeNameRequest"
    ) -> "GetRuntimeNameResponse":
        """Returns the name of the runtime. Example \"@kyvejs/{{ .name }}\""""
        return GetRuntimeNameResponse(name=settings.RUNTIME_NAME)

    async def get_runtime_version(
            self, get_runtime_version_request: "GetRuntimeVersionRequest"
    ) -> "GetRuntimeVersionResponse":
        """Returns the version of the runtime. Example \"{{ .version }}\""""
        return GetRuntimeVersionResponse(version=settings.RUNTIME_VERSION)

    async def validate_set_config(
            self, validate_set_config_request: "ValidateSetConfigRequest"
    ) -> "ValidateSetConfigResponse":
        """
        Parses the raw runtime config found on pool, validates it and finally sets
        the property \"config\" in the runtime. A raw config could be an ipfs link to the
        actual config or a stringified yaml or json string. This method should error if
        the specific runtime config is not parsable or invalid.

        Deterministic behavior is required
        """
        raise grpclib.GRPCError(grpclib.const.Status.UNIMPLEMENTED)

    async def get_data_item(
            self, get_data_item_request: "GetDataItemRequest"
    ) -> "GetDataItemResponse":
        """
        Gets the data item from a specific key and returns both key and the value.

        Deterministic behavior is required
        """
        raise grpclib.GRPCError(grpclib.const.Status.UNIMPLEMENTED)

    async def prevalidate_data_item(
            self, prevalidate_data_item_request: "PrevalidateDataItemRequest"
    ) -> "PrevalidateDataItemResponse":
        """
        Prevalidates a data item right after is was retrieved from source.
        If the prevalidation fails the item gets rejected and never makes
        it to the local cache. If the prevalidation succeeds the item gets
        transformed and written to cache were it is used from submission
        of proposals or bundle validation.

        Deterministic behavior is required
        """
        raise grpclib.GRPCError(grpclib.const.Status.UNIMPLEMENTED)

    async def transform_data_item(
            self, transform_data_item_request: "TransformDataItemRequest"
    ) -> "TransformDataItemResponse":
        """
        Transforms a single data item and return it. Used for example
        to remove unecessary data or format the data in a better way.

        Deterministic behavior is required
        """
        raise grpclib.GRPCError(grpclib.const.Status.UNIMPLEMENTED)

    async def validate_data_item(
            self, validate_data_item_request: "ValidateDataItemRequest"
    ) -> "ValidateDataItemResponse":
        """
        Validates a single data item of a bundle proposal

        Deterministic behavior is required
        """
        raise grpclib.GRPCError(grpclib.const.Status.UNIMPLEMENTED)

    async def summarize_data_bundle(
            self, summarize_data_bundle_request: "SummarizeDataBundleRequest"
    ) -> "SummarizeDataBundleResponse":
        """
        Gets a formatted value string from a bundle. This produces a "summary" of
        a bundle which gets stored on-chain and therefore needs to be short.

        String should not be longer than 100 characters, else gas costs might be too expensive.

        Deterministic behavior is required
        """
        raise grpclib.GRPCError(grpclib.const.Status.UNIMPLEMENTED)

    async def next_key(self, next_key_request: "NextKeyRequest") -> "NextKeyResponse":
        """
        Gets the next key from the current key so that the data archived has an order.

        Deterministic behavior is required
        """
        raise grpclib.GRPCError(grpclib.const.Status.UNIMPLEMENTED)

    #
    # async def GetRuntimeVersion(self,
    #                             stream: 'grpclib.server.Stream['
    #                                     'pb.GetRuntimeVersionRequest, '
    #                                     'pb.GetRuntimeVersionResponse]'
    #                             ) -> None:
    #     await stream.recv_message()
    #     await stream.send_message(pb.GetRuntimeVersionResponse(version=settings.RUNTIME_VERSION))

    # def ValidateSetConfig(self, request, context):
    #     try:
    #         raw_config = request.raw_config
    #         config = json.loads(raw_config)
    #
    #         if "network" not in config:
    #             context.set_code(grpc.StatusCode.INVALID_ARGUMENT)
    #             context.set_details("Config does not have property 'network' defined")
    #             return pb.EmptyRequest()
    #
    #         if "rpc" not in config:
    #             context.set_code(grpc.StatusCode.INVALID_ARGUMENT)
    #             context.set_details("Config does not have property 'rpc' defined")
    #             return pb.EmptyRequest()
    #
    #         if "KYVEJS_TENDERMINT_RPC" in os.environ:
    #             config["rpc"] = os.environ["KYVEJS_TENDERMINT_RPC"]
    #
    #         serialized_config = json.dumps(config)
    #         return pb.ValidateSetConfigResponse(
    #             serialized_config=serialized_config
    #         )
    #     except Exception as e:
    #         context.set_code(grpc.StatusCode.INVALID_ARGUMENT)
    #         context.set_details(str(e))
    #
    # def GetDataItem(self, request, context):
    #     try:
    #         config = json.loads(request.config.serialized_config)
    #         key = request.key
    #
    #         # Fetch block from the RPC at the given block height
    #         block_response = requests.get(f"{config['rpc']}/block?height={key}")
    #         block = block_response.json()["result"]
    #
    #         # Fetch block results from the RPC at the given block height
    #         block_results_response = requests.get(
    #             f"{config['rpc']}/block_results?height={key}"
    #         )
    #         block_results = block_results_response.json()["result"]
    #
    #         # Construct the Value message
    #         value = {"block": block, "block_results": block_results}
    #
    #         # Construct the DataItem message
    #         data_item = pb.DataItem(key=key, value=json.dumps(value))
    #
    #         return pb.GetDataItemResponse(data_item=data_item)
    #     except Exception as e:
    #         print(e)
    #         context.set_code(grpc.StatusCode.INTERNAL)
    #         context.set_details(str(e))
    #
    # def PrevalidateDataItem(self, request, context):
    #     try:
    #         config = json.loads(request.config.serialized_config)
    #         data_item = {
    #             "key": request.data_item.key,
    #             "value": json.loads(request.data_item.value),
    #         }
    #
    #         if not data_item:
    #             return pb.PrevalidateDataItemResponse(valid=False)
    #
    #         if not (
    #                 data_item["value"].get("block")
    #                 and data_item["value"].get("block_results")
    #         ):
    #             return pb.PrevalidateDataItemResponse(valid=False)
    #
    #         if (
    #                 config["network"]
    #                 != data_item["value"]["block"]["block"]["header"]["chain_id"]
    #         ):
    #             return pb.PrevalidateDataItemResponse(valid=False)
    #
    #         if (
    #                 data_item["key"]
    #                 != data_item["value"]["block"]["block"]["header"]["height"]
    #         ):
    #             return pb.PrevalidateDataItemResponse(valid=False)
    #
    #         # Perform additional validation if needed
    #
    #         return pb.PrevalidateDataItemResponse(valid=True)
    #     except Exception as e:
    #         context.set_code(grpc.StatusCode.INTERNAL)
    #         context.set_details(str(e))
    #
    # def TransformDataItem(self, request, context):
    #     try:
    #         item = {
    #             "key": request.data_item.key,
    #             "value": json.loads(request.data_item.value),
    #         }
    #
    #         if (
    #                 "begin_block_events" in item["value"]["block_results"]
    #                 and item["value"]["block_results"]["begin_block_events"]
    #         ):
    #             item["value"]["block_results"]["begin_block_events"] = [
    #                 {
    #                     **event,
    #                     "attributes": sorted(
    #                         event["attributes"], key=lambda x: x["key"].lower()
    #                     ),
    #                 }
    #                 for event in item["value"]["block_results"]["begin_block_events"]
    #             ]
    #
    #         if (
    #                 "end_block_events" in item["value"]["block_results"]
    #                 and item["value"]["block_results"]["end_block_events"]
    #         ):
    #             item["value"]["block_results"]["end_block_events"] = [
    #                 {
    #                     **event,
    #                     "attributes": sorted(
    #                         event["attributes"], key=lambda x: x["key"].lower()
    #                     ),
    #                 }
    #                 for event in item["value"]["block_results"]["end_block_events"]
    #             ]
    #
    #         if (
    #                 "txs_results" in item["value"]["block_results"]
    #                 and item["value"]["block_results"]["txs_results"]
    #         ):
    #             item["value"]["block_results"]["txs_results"] = [
    #                 {
    #                     **tx_result,
    #                     "log": None,
    #                     "events": [
    #                         {
    #                             **event,
    #                             "attributes": sorted(
    #                                 event["attributes"], key=lambda x: x["key"].lower()
    #                             )
    #                             if "attributes" in event
    #                             else event.get("attributes"),
    #                         }
    #                         for event in tx_result.get("events", [])
    #                     ],
    #                 }
    #                 for tx_result in item["value"]["block_results"]["txs_results"]
    #             ]
    #
    #             # Additional handling for event type 'fungible_token_packet'
    #             for event in item["value"]["block_results"]["txs_results"]["events"]:
    #                 if event.get("type") == "fungible_token_packet":
    #                     event["attributes"] = [
    #                         {
    #                             "key": attribute["key"],
    #                             "value": ""
    #                             if attribute["key"] == "YWNrbm93bGVkZ2VtZW50"
    #                             else attribute["value"],
    #                         }
    #                         for attribute in event.get("attributes", [])
    #                     ]
    #
    #         # Construct the data_item to return
    #         transformed_data_item = pb.DataItem(
    #             key=item["key"], value=json.dumps(item["value"])
    #         )
    #
    #         return pb.TransformDataItemResponse(
    #             transformed_data_item=transformed_data_item
    #         )
    #     except Exception as e:
    #         context.set_code(grpc.StatusCode.INTERNAL)
    #         context.set_details(str(e))
    #
    # def ValidateDataItem(self, request, context):
    #     try:
    #         proposed_data_item = json.loads(request.proposed_data_item.value)
    #         validation_data_item = json.loads(request.validation_data_item.value)
    #
    #         if json.dumps(proposed_data_item) == json.dumps(validation_data_item):
    #             return pb.ValidateDataItemResponse(vote=pb.VOTE.VALID)
    #
    #         if (
    #                 validation_data_item["block"]["block"]["header"]["chain_id"]
    #                 == "osmosis-1"
    #         ):
    #             # Remove nondeterministic begin_block_events to prevent incorrect invalid vote
    #             validation_data_item["block_results"]["begin_block_events"] = None
    #             proposed_data_item["block_results"]["begin_block_events"] = None
    #
    #             if json.dumps(proposed_data_item) == json.dumps(validation_data_item):
    #                 # Vote abstain if begin_block_events are not equal
    #                 return pb.ValidateDataItemResponse(
    #                     vote=pb.VOTE.ABSTAIN
    #                 )
    #
    #         # Vote invalid if data does not match
    #         return pb.ValidateDataItemResponse(vote=pb.VOTE.INVALID)
    #     except Exception as e:
    #         context.set_code(grpc.StatusCode.INTERNAL)
    #         context.set_details(str(e))
    #
    # def SummarizeDataBundle(self, request, context):
    #     try:
    #         bundle = [json.loads(item.value) for item in request.bundle]
    #
    #         # Get the latest block height from the last item in the bundle
    #         latest_block_height = (
    #             bundle[-1]["block"]["block"]["header"]["height"] if bundle else ""
    #         )
    #
    #         return pb.SummarizeDataBundleResponse(
    #             summary=str(latest_block_height)
    #         )
    #     except Exception as e:
    #         context.set_code(grpc.StatusCode.INTERNAL)
    #         context.set_details(str(e))
    #
    # def NextKey(self, request, context):
    #     try:
    #         key = request.key
    #
    #         # Calculate the next key (current block height + 1)
    #         next_key = str(int(key) + 1)
    #
    #         return pb.NextKeyResponse(next_key=next_key)
    #     except Exception as e:
    #         context.set_code(grpc.StatusCode.INTERNAL)
    #         context.set_details(str(e))
