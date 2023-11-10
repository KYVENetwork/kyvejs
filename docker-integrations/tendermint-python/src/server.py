import json
import os

import grpc
import requests

import settings
from protos import runtime_pb2, runtime_pb2_grpc


class TendermintServer(runtime_pb2_grpc.RuntimeServicer):
    def GetRuntimeName(self, request, context):
        return runtime_pb2.GetRuntimeNameResponse(name=settings.RUNTIME_NAME)

    def GetRuntimeVersion(self, request, context):
        return runtime_pb2.GetRuntimeVersionResponse(version=settings.RUNTIME_VERSION)

    def ValidateSetConfig(self, request, context):
        try:
            raw_config = request.raw_config
            config = json.loads(raw_config)

            if "network" not in config:
                context.set_code(grpc.StatusCode.INVALID_ARGUMENT)
                context.set_details("Config does not have property 'network' defined")
                return runtime_pb2.EmptyRequest()

            if "rpc" not in config:
                context.set_code(grpc.StatusCode.INVALID_ARGUMENT)
                context.set_details("Config does not have property 'rpc' defined")
                return runtime_pb2.EmptyRequest()

            if "KYVEJS_TENDERMINT_RPC" in os.environ:
                config["rpc"] = os.environ["KYVEJS_TENDERMINT_RPC"]

            serialized_config = json.dumps(config)
            return runtime_pb2.ValidateSetConfigResponse(
                serialized_config=serialized_config
            )
        except Exception as e:
            context.set_code(grpc.StatusCode.INVALID_ARGUMENT)
            context.set_details(str(e))

    def GetDataItem(self, request, context):
        try:
            config = json.loads(request.config.serialized_config)
            key = request.key

            # Fetch block from the RPC at the given block height
            block_response = requests.get(f"{config['rpc']}/block?height={key}")
            block = block_response.json()["result"]

            # Fetch block results from the RPC at the given block height
            block_results_response = requests.get(
                f"{config['rpc']}/block_results?height={key}"
            )
            block_results = block_results_response.json()["result"]

            # Construct the Value message
            value = {"block": block, "block_results": block_results}

            # Construct the DataItem message
            data_item = runtime_pb2.DataItem(key=key, value=json.dumps(value))

            return runtime_pb2.GetDataItemResponse(data_item=data_item)
        except Exception as e:
            print(e)
            context.set_code(grpc.StatusCode.INTERNAL)
            context.set_details(str(e))

    def PrevalidateDataItem(self, request, context):
        try:
            config = json.loads(request.config.serialized_config)
            data_item = {
                "key": request.data_item.key,
                "value": json.loads(request.data_item.value),
            }

            if not data_item:
                return runtime_pb2.PrevalidateDataItemResponse(valid=False)

            if not (
                data_item["value"].get("block")
                and data_item["value"].get("block_results")
            ):
                return runtime_pb2.PrevalidateDataItemResponse(valid=False)

            if (
                config["network"]
                != data_item["value"]["block"]["block"]["header"]["chain_id"]
            ):
                return runtime_pb2.PrevalidateDataItemResponse(valid=False)

            if (
                data_item["key"]
                != data_item["value"]["block"]["block"]["header"]["height"]
            ):
                return runtime_pb2.PrevalidateDataItemResponse(valid=False)

            # Perform additional validation if needed

            return runtime_pb2.PrevalidateDataItemResponse(valid=True)
        except Exception as e:
            context.set_code(grpc.StatusCode.INTERNAL)
            context.set_details(str(e))

    def TransformDataItem(self, request, context):
        try:
            item = {
                "key": request.data_item.key,
                "value": json.loads(request.data_item.value),
            }

            if (
                "begin_block_events" in item["value"]["block_results"]
                and item["value"]["block_results"]["begin_block_events"]
            ):
                item["value"]["block_results"]["begin_block_events"] = [
                    {
                        **event,
                        "attributes": sorted(
                            event["attributes"], key=lambda x: x["key"].lower()
                        ),
                    }
                    for event in item["value"]["block_results"]["begin_block_events"]
                ]

            if (
                "end_block_events" in item["value"]["block_results"]
                and item["value"]["block_results"]["end_block_events"]
            ):
                item["value"]["block_results"]["end_block_events"] = [
                    {
                        **event,
                        "attributes": sorted(
                            event["attributes"], key=lambda x: x["key"].lower()
                        ),
                    }
                    for event in item["value"]["block_results"]["end_block_events"]
                ]

            if (
                "txs_results" in item["value"]["block_results"]
                and item["value"]["block_results"]["txs_results"]
            ):
                item["value"]["block_results"]["txs_results"] = [
                    {
                        **tx_result,
                        "log": None,
                        "events": [
                            {
                                **event,
                                "attributes": sorted(
                                    event["attributes"], key=lambda x: x["key"].lower()
                                )
                                if "attributes" in event
                                else event.get("attributes"),
                            }
                            for event in tx_result.get("events", [])
                        ],
                    }
                    for tx_result in item["value"]["block_results"]["txs_results"]
                ]

                # Additional handling for event type 'fungible_token_packet'
                for event in item["value"]["block_results"]["txs_results"]["events"]:
                    if event.get("type") == "fungible_token_packet":
                        event["attributes"] = [
                            {
                                "key": attribute["key"],
                                "value": ""
                                if attribute["key"] == "YWNrbm93bGVkZ2VtZW50"
                                else attribute["value"],
                            }
                            for attribute in event.get("attributes", [])
                        ]

            # Construct the data_item to return
            transformed_data_item = runtime_pb2.DataItem(
                key=item["key"], value=json.dumps(item["value"])
            )

            return runtime_pb2.TransformDataItemResponse(
                transformed_data_item=transformed_data_item
            )
        except Exception as e:
            context.set_code(grpc.StatusCode.INTERNAL)
            context.set_details(str(e))

    def ValidateDataItem(self, request, context):
        try:
            proposed_data_item = json.loads(request.proposed_data_item.value)
            validation_data_item = json.loads(request.validation_data_item.value)

            if json.dumps(proposed_data_item) == json.dumps(validation_data_item):
                return runtime_pb2.ValidateDataItemResponse(vote=runtime_pb2.VOTE.VALID)

            if (
                validation_data_item["block"]["block"]["header"]["chain_id"]
                == "osmosis-1"
            ):
                # Remove nondeterministic begin_block_events to prevent incorrect invalid vote
                validation_data_item["block_results"]["begin_block_events"] = None
                proposed_data_item["block_results"]["begin_block_events"] = None

                if json.dumps(proposed_data_item) == json.dumps(validation_data_item):
                    # Vote abstain if begin_block_events are not equal
                    return runtime_pb2.ValidateDataItemResponse(
                        vote=runtime_pb2.VOTE.ABSTAIN
                    )

            # Vote invalid if data does not match
            return runtime_pb2.ValidateDataItemResponse(vote=runtime_pb2.VOTE.INVALID)
        except Exception as e:
            context.set_code(grpc.StatusCode.INTERNAL)
            context.set_details(str(e))

    def SummarizeDataBundle(self, request, context):
        try:
            bundle = [json.loads(item.value) for item in request.bundle]

            # Get the latest block height from the last item in the bundle
            latest_block_height = (
                bundle[-1]["block"]["block"]["header"]["height"] if bundle else ""
            )

            return runtime_pb2.SummarizeDataBundleResponse(
                summary=str(latest_block_height)
            )
        except Exception as e:
            context.set_code(grpc.StatusCode.INTERNAL)
            context.set_details(str(e))

    def NextKey(self, request, context):
        try:
            key = request.key

            # Calculate the next key (current block height + 1)
            next_key = str(int(key) + 1)

            return runtime_pb2.NextKeyResponse(next_key=next_key)
        except Exception as e:
            context.set_code(grpc.StatusCode.INTERNAL)
            context.set_details(str(e))
