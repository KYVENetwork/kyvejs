# {{ .name | ToTitle }} Runtime Server

This is the {{ .name | ToTitle }} runtime server.

## Development

**Prerequisites:**
- [Docker](https://docs.docker.com/engine/install/)
- [Go](https://golang.org/doc/install)
- [make](https://www.gnu.org/software/make/)
- [jq](https://jqlang.github.io/jq/download/)

Setup
```bash
go mod tidy
```

Start the runtime
```bash
go run main.go
```

You must implement the methods defined in `proto/kyverdk/runtime/v1/runtime_grpc.pb.go`.<br>
The implementation is in `server/server.go` and contains already a running example.

⚠️ **Note**
The behaviour of the integration has to be **deterministic**.

<details>
<summary>Runtime Workflow</summary>

*Protocol* (client) and *integration* (server) run inside 2 docker containers and communicate via gRPC.
1. *protocol* calls *GetRuntimeName* and *GetRuntimeVersion* to get the runtime name and version.
2. *protocol* calls *ValidateSetConfig* to validate the configuration. Implementation specific config options can be set here.
3. *protocol* calls *GetDataItem* to get the data item.
4. *protocol* calls *PrevalidateDataItem* to make some simple checks on the data item. If the checks fail, the data item is rejected.
5. *protocol* calls *TransformDataItem* to remove unnecessary data from the data item.
6. *protocol* calls *ValidateDataItem* to validate the data item. If the data item is invalid, it is rejected.
7. *protocol* calls *SummarizeDataBundle* to summarize the data bundle (ex: block height of a blockchain item).
8. *protocol* calls *NextKey* to get the next key for the data item.
</details>

### Test the runtime
Start the runtime
```bash
go run main.go
```
Change the environment variables in `scripts/test.sh` to match your environment.

Open another terminal and run
```bash
make test
```
This will run the whole workflow like the protocol would do.<br>
Make sure that your integration passes all tests. The tests are defined in `scripts/test.sh`. 

You might want to run your integration in debug mode if you encounter any issues. 
It's out of scope of this README to explain how to do that (please refer to your IDE).

<details>
<summary>Advanced manual testing</summary>

To test individual methods, you can use the kystrap tool. Or you customize the `scripts/test.sh` to your needs. 
```bash
# You must be in the root directory of the project
sh tools/kystrap/kystrap.sh test -a host.docker.internal:50051
```

**Examples for testing**

```bash
# test-command structure
sh tools/kystrap/kystrap.sh test -a <host>:<port> -m <method> -d <data> <flags>

# call GetRuntimeName in non-interactive mode (see -y)
sh tools/kystrap/kystrap.sh test -a host.docker.internal:50051 -m GetRuntimeName -y

# call ValidateSetConfig with data
sh tools/kystrap/kystrap.sh test -a host.docker.internal:50051 -m ValidateSetConfig -d '{"raw_config":"{\"network\":\"my-network\",\"rpc\":\"https://my-fancy-rpc.com\"}"}'

# call GetRuntimeName in non-interactive and simple mode, pipe the output to jq
sh tools/kystrap/kystrap.sh test -a host.docker.internal:50051 -y -s -m GetRuntimeName 2>&1 | jq '.name'
```
⚠️ **Note:** The `-d` flag expects a JSON string **without spaces**.
</details>

### Prepare end-to-end tests (e2e)
The e2e tests are already defined in the `e2etest` directory in the root of the project.
The only thing that you have to do is to provide test-data and a valid config for the e2e tests.

The e2e test creates a REST server to simulate the specific endpoint for this integration.
This server is reachable with `http://kyve-e2e-test-testapi-integration-{{ .name | ToLower }}:8080`

#### Testdata
The testdata is located in `testdata/api`. You can add your testdata here.
It already contains a simple example.
The structure is as follows:
```text
testdata/api/<path>/<sub-path>/<sub-sub-path>/.../<file>
```

**Example**<br>
I have a `block` endpoint and want to test it.
This is the structure of the testdata:
```text
testdata/api/block/1.json
testdata/api/block/2.json
testdata/api/block/3.json
```
http://localhost:8080/get_block/1 will return the content of `testdata/api/get_block/1.json`

If my query has a parameter, I can add it to the path like this:
```text
testdata/api/block/?height=1.json
testdata/api/block/?height=2.json
testdata/api/block/?height=3.json
```
http://localhost:8080/block/?height=1 will return the content of `testdata/api/block/?height=1.json`

If my REST endpoint returns a single object, I can add it to the path like this:
```text
testdata/api/block/any-name-that-I-want.json
```
http://localhost:8080/block will return the content of `testdata/api/block/1.json`

#### Config
Change the config in `testdata/config.yaml` to match your environment.
