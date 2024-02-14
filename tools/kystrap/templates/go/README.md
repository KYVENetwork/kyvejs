# {{ .name | ToTitle }} Runtime Server

This is the {{ .name | ToTitle }} runtime server.

## Development

**Prerequisites:**
- [Docker](https://docs.docker.com/engine/install/)
- [Go](https://golang.org/doc/install)
- [make](https://www.gnu.org/software/make/)
- [jq](https://jqlang.github.io/jq/download/)

Setup
```shell
go mod tidy
```

Start the runtime
```shell
go run main.go
```

📌 **Task**
- You must implement the methods defined in `proto/kyverdk/runtime/v1/runtime_grpc.pb.go`.<br>
  The implementation is in `server/server.go` and contains already a running example.
  <br>
  ⚠️ **Note:**
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

## Test the runtime
Start the runtime
```shell
go run main.go
```
Change the environment variables in `scripts/test.sh` to match your environment.

Open another terminal and run
```shell
make test
```
This will run the whole workflow like the protocol would do.<br>

📌 **Task**
- Make sure that your integration passes all tests. The tests are defined in `scripts/test.sh`. 
<br><br>
  **Note:**
    You might want to run your integration in debug mode if you encounter any issues. 
    It's out of scope of this README to explain how to do that (please refer to your IDE).

<details>
<summary>Advanced manual testing</summary>

To test individual methods, you can use the kystrap tool. Or you customize the `scripts/test.sh` to your needs. 
```shell
# You must be in the root directory of the project
sh tools/kystrap/kystrap.sh test -a host.docker.internal:50051
```

**Examples for testing**

```shell
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

<details>
<summary>Testdata</summary>

The `testdata` directory is used to store mock data for testing purposes.
This data is used to simulate responses from the API endpoints of your application during testing.  

The structure of the `testdata` directory is as follows:
```shell
testdata/api/<path>/<sub-path>/<sub-sub-path>/.../<file>
```
Each file in this directory corresponds to a specific API endpoint and the response it should return during testing.
The file path mimics the API endpoint's path.

**List's**<br>
If you have an API endpoint `/block/1`, you would create a file at `testdata/api/block/1.json` containing the response
you want this endpoint to return during testing. You need at least 2 files in `testdata/api/block/` (otherwiese it's a `Single object`).

**List's with query parameters**<br>
If your API endpoint includes query parameters, you can include these in the file path as well.
For example, for the endpoint `/block?height=1.json`, you would create a file at `testdata/api/block/?height=1.json`.

**Single objects**<br>
If your API endpoint returns a single object, you can represent this with a single file.
For example, for the endpoint `/block`, you could create a file at `testdata/api/block/any-name-that-I-want.json`.
The name of the file doesn't matter in this case.

**Note:** Instead of '.json' you can also leave the file extension empty (this will treat the data as a blob).

</details>

<details>
<summary>Config</summary>
Change the config in `testdata/config.yaml` to match your environment.
The REST server with your testdata is reachable under `http://kyve-e2e-test-testapi-integration-{{ .name | ToLower }}:8080`
</details>

📌 **Tasks**
- Add test-data for **10 bundles** to the `testdata/api` directory (replace the existing example files)
- Update the config for the e2e tests in `testdata/config.yaml`
- Run the e2e tests with `make test-e2e`

**Note:** You can use `scripts/fetch-testdata.sh` to fetch testdata from a real API. 
Just change it to fit your needs and run it with `./scripts/fetch-testdata.sh`.

