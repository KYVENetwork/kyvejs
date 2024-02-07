# Bitcoin Runtime Server

This is the Bitcoin runtime server.

## Development

**Prerequisites:**
- [Docker](https://docs.docker.com/engine/install/)
- [Go](https://golang.org/doc/install)
- [make](https://www.gnu.org/software/make/) (optional)
- [jq](https://jqlang.github.io/jq/download/)(optional)

Setup
```bash
cd ../../
go work use integrations/bitcoin
cd integrations/bitcoin

go mod tidy
```

Start the runtime
```bash
go run main.go
```

You must implement the methods defined in `proto/kyverdk/runtime/v1/runtime_grpc.pb.go`.<br>
The implementation is in `server/server.go` and contains already a running example.

**Runtime Workflow:**

*Protocol* (client) and *integration* (server) run inside 2 docker containers and communicate via gRPC.
1. *protocol* calls *GetRuntimeName* and *GetRuntimeVersion* to get the runtime name and version.
2. *protocol* calls *ValidateSetConfig* to validate the configuration. Implementation specific config options can be set here.
3. *protocol* calls *GetDataItem* to get the data item.
4. *protocol* calls *PrevalidateDataItem* to make some simple checks on the data item. If the checks fail, the data item is rejected.
5. *protocol* calls *TransformDataItem* to remove unnecessary data from the data item.
6. *protocol* calls *ValidateDataItem* to validate the data item. If the data item is invalid, it is rejected.
7. *protocol* calls *SummarizeDataBundle* to summarize the data bundle (ex: block height of a blockchain item).
8. *protocol* calls *NextKey* to get the next key for the data item.

**Note**<br>
The behaviour of the integration has to be **deterministic**. 

### Test the runtime
<details>
<summary>Using a shell</summary>

Start the runtime
```bash
go run main.go
```

Open another terminal and run
```bash
# This will test the whole workflow
test/test.sh
```

To test individual methods, you can use the kystrap tool. Or you customize the test/test.sh script to your needs.
```bash
# You must be in the root directory of the project
sh tools/kystrap/kystrap.sh test -a host.docker.internal:50051
```

**Examples for testing**

```bash
# test command structure
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