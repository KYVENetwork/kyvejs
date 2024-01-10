# {{ .name | ToTitle }} Runtime Server

This is the {{ .name | ToTitle }} runtime server.

## Development

### Requirements
- Docker
- Go
- Make (optional)

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

### Test the runtime

<details>
<summary>Using Docker</summary>

Start the runtime container and the kystrap container
```bash
docker compose up --build
```
Open another terminal and run
```bash
docker exec -it $(docker ps -qf "name={{ .name |ToLower }}-kystrap") ./kystrap test -a runtime:50051
```

**Examples for testing**
```bash
# test command structure
docker exec -it $(docker ps -qf "name={{ .name |ToLower }}-kystrap") ./kystrap test -a <host>:<port> -m <method> -d <data> <flags>

# call GetRuntimeName running on localhost:50051 in non-interactive mode (see -y)
docker exec -it $(docker ps -qf "name={{ .name |ToLower }}-kystrap") ./kystrap test -a runtime:50051 -m GetRuntimeName -y

# call ValidateSetConfig running in a docker container with data
docker exec -it $(docker ps -qf "name={{ .name |ToLower }}-kystrap") ./kystrap test -a runtime:50051 -m ValidateSetConfig -d '{"raw_config":"{\"network\":\"my-network\",\"rpc\":\"https://my-fancy-rpc.com\"}"}'

# call GetRuntimeName in non-interactive and simple mode and pipe the output to jq
docker exec -it $(docker ps -qf "name={{ .name |ToLower }}-kystrap") ./kystrap test -a runtime:50051 -y -s -m GetRuntimeName 2>&1 | jq '.name'
```
⚠️ **Note:** The `-d` flag expects a JSON string **without spaces**.
</details>

<details>
<summary>Using a shell</summary>

Start the runtime
```bash
go run main.go
```

Open another terminal and run
```bash
# You must be in the root directory of the project
sh tools/kystrap/start.sh test -a host.docker.internal:50051
```

**Examples for testing**

```bash
# test command structure
sh tools/kystrap/start.sh test -a <host>:<port> -m <method> -d <data> <flags>

# call GetRuntimeName running on localhost:50051 in non-interactive mode (see -y)
sh tools/kystrap/start.sh test -a host.docker.internal:50051 -m GetRuntimeName -y

# call ValidateSetConfig running in a docker container with data
sh tools/kystrap/start.sh test -a host.docker.internal:50051 -m ValidateSetConfig -d '{"raw_config":"{\"network\":\"my-network\",\"rpc\":\"https://my-fancy-rpc.com\"}"}'

# call GetRuntimeName in non-interactive and simple mode and pipe the output to jq
sh tools/kystrap/start.sh test -a host.docker.internal:50051 -y -s -m GetRuntimeName 2>&1 | jq '.name'
```
⚠️ **Note:** The `-d` flag expects a JSON string **without spaces**.
</details>