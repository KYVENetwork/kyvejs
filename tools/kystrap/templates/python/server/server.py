import json

import grpclib.server
from grpclib import Status, GRPCError
from grpclib.const import Status as StatusCode

import settings
from proto.kyve.bundles.v1beta1 import VoteType
from proto.kyverdk.runtime.v1 import *


class {{ .name | ToPascal }}Server(RuntimeServiceBase):

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
        try:
            config = json.loads(validate_set_config_request.raw_config)

            # TODO: validate config
            # Example:
            # if not config.get("rpc"):
            #     raise grpclib.GRPCError(
            #         grpclib.Status(grpclib.StatusCode.INVALID_ARGUMENT),
            #         "Config does not have property 'rpc' defined"
            #     )

            # TODO: make changes to config if necessary
            # Example:
            # if os.environ.get(f"KYVEJS_{{ .name }}_API"):
            #     config["rpc"] = os.environ[f"KYVEJS_{{ .name }}_API"]

            serialized_config = json.dumps(config)
            return ValidateSetConfigResponse(serialized_config)
        except json.JSONDecodeError as error:
            raise grpclib.GRPCError(
                Status(StatusCode.INVALID_ARGUMENT),
                f"Error parsing JSON: {error.msg}"
            )
        except Exception as error:
            raise GRPCError(
                Status(StatusCode.INVALID_ARGUMENT),
                str(error)
            )

    async def get_data_item(
            self, get_data_item_request: "GetDataItemRequest"
    ) -> "GetDataItemResponse":
        """
        Gets the data item from a specific key and returns both key and the value.

        Deterministic behavior is required
        """
        try:
            config = json.loads(get_data_item_request.config.serialized_config)
            key = get_data_item_request.key

            # TODO: get the data item for your_name with the given key
            # Example:
            # response = await axios.get(f"{config['rpc']}/block?height={key}")
            # value = response.data
            value = {}

            # Construct the DataItem message
            data_item = DataItem(
                key=key,
                value=json.dumps(value),
            )

            return GetDataItemResponse(data_item=data_item)
        except json.JSONDecodeError as error:
            raise GRPCError(
                Status(StatusCode.INTERNAL),
                f"Error parsing JSON: {error.msg}"
            )
        except Exception as error:
            raise GRPCError(
                Status(StatusCode.INTERNAL),
                str(error)
            )

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
        try:
            config = json.loads(prevalidate_data_item_request.config.serialized_config)
            request_item = prevalidate_data_item_request.data_item
            data_item = DataItem(
                key=request_item.key,
                value=json.loads(request_item.value),
            )

            # Check if data item is defined
            if data_item.value is None:
                response = PrevalidateDataItemResponse(valid=False, error='Value in data item is not defined')
                return response

            # TODO: check if data item is valid

            # If all checks pass, the data item is prevalidated
            return PrevalidateDataItemResponse(valid=True)
        except json.JSONDecodeError as error:
            raise GRPCError(
                Status(StatusCode.INTERNAL),
                f"Error parsing JSON: {error.msg}"
            )
        except Exception as error:
            raise GRPCError(
                Status(StatusCode.INTERNAL),
                str(error)
            )

    async def transform_data_item(
            self, transform_data_item_request: "TransformDataItemRequest"
    ) -> "TransformDataItemResponse":
        """
        Transforms a single data item and return it. Used for example
        to remove unecessary data or format the data in a better way.

        Deterministic behavior is required
        """
        try:
            request_item = transform_data_item_request.data_item
            data_item = DataItem(
                key=request_item.key,
                value=json.dumps(request_item.value),
            )

            # TODO: transform the data item so that it can be saved

            # Construct the data_item to return
            transformed_data_item = DataItem(
                key=data_item.key,
                value=json.dumps(data_item.value),
            )

            return TransformDataItemResponse(transformed_data_item=transformed_data_item)
        except json.JSONDecodeError as error:
            raise GRPCError(
                Status(StatusCode.INTERNAL),
                f"Error parsing JSON: {error.msg}"
            )
        except Exception as error:
            raise GRPCError(
                Status(StatusCode.INTERNAL),
                str(error)
            )

    async def validate_data_item(
            self, validate_data_item_request: "ValidateDataItemRequest"
    ) -> "ValidateDataItemResponse":
        """
        Validates a single data item of a bundle proposal

        Deterministic behavior is required
        """
        try:
            request_proposed_data_item = validate_data_item_request.proposed_data_item
            request_validation_data_item = validate_data_item_request.validation_data_item
            proposed_data_item = DataItem(
                key=request_proposed_data_item.key,
                value=json.loads(request_proposed_data_item.value),
            )
            validation_data_item = DataItem(
                key=request_validation_data_item.key,
                value=json.loads(request_validation_data_item.value),
            )

            if proposed_data_item == validation_data_item:
                return ValidateDataItemResponse(vote=VoteType.VOTE_TYPE_VALID)

            # TODO: add custom validation logic here

            # Default response if the validation fails
            return ValidateDataItemResponse(vote=VoteType.VOTE_TYPE_INVALID)
        except json.JSONDecodeError as error:
            raise GRPCError(
                Status(StatusCode.INTERNAL),
                f"Error parsing JSON: {error.msg}"
            )
        except Exception as error:
            raise GRPCError(
                Status(StatusCode.INTERNAL),
                str(error)
            )

    async def summarize_data_bundle(
            self, summarize_data_bundle_request: "SummarizeDataBundleRequest"
    ) -> "SummarizeDataBundleResponse":
        """
        Gets a formatted value string from a bundle. This produces a "summary" of
        a bundle which gets stored on-chain and therefore needs to be short.

        String should not be longer than 100 characters, else gas costs might be too expensive.

        Deterministic behavior is required
        """
        try:
            grpc_bundle = summarize_data_bundle_request.bundle

            if not grpc_bundle:
                return SummarizeDataBundleResponse(summary='')

            bundle_value = json.loads(grpc_bundle[-1].value)
            if bundle_value is None:
                return SummarizeDataBundleResponse(summary='')

            # TODO: summarize the data bundle
            # Example:
            # if (bundle_value.get('block')
            #         and bundle_value['block'].get('header')
            #         and bundle_value['block']['header'].get('height')):
            #     summary = bundle_value['block']['header']['height']
            summary = ''

            return SummarizeDataBundleResponse(summary=summary)
        except json.JSONDecodeError as error:
            raise GRPCError(
                Status(StatusCode.INTERNAL),
                f"Error parsing JSON: {error.msg}"
            )
        except Exception as error:
            raise GRPCError(
                Status(StatusCode.INTERNAL),
                str(error)
            )

    async def next_key(self, next_key_request: "NextKeyRequest") -> "NextKeyResponse":
        """
        Gets the next key from the current key so that the data archived has an order.

        Deterministic behavior is required
        """
        try:
            key = next_key_request.key

            # TODO: calculate the next key
            next_key = str(int(key) + 1)

            return NextKeyResponse(next_key=next_key)
        except Exception as error:
            raise GRPCError(
                Status(StatusCode.INTERNAL),
                str(error)
            )

