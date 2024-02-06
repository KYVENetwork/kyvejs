# {{ .name | ToTitle }} Runtime Server

This is the {{ .name | ToTitle }} runtime server.

## Development

### Requirements
- [Docker](https://docs.docker.com/engine/install/)
- [yarn](https://yarnpkg.com/getting-started/install)
- [Node.js](https://nodejs.org/en/download/)
- [make](https://www.gnu.org/software/make/) (optional)

Setup
```bash
yarn install
```

Start the runtime
```bash
yarn start
```

You must implement the methods defined in `src/proto/kyverdk/runtime/v1/runtime.ts`.<br>
The implementation is in `src/server.ts` and contains already a running example. 

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
<summary>Using yarn</summary>

Start the runtime
```bash
yarn start
```

Open another terminal and run
```bash
# You must be in the root directory of kyvejs
yarn test:integration -a host.docker.internal:50051
```

**Examples for testing**

```bash
# test command structure
yarn test:integration -a <host>:<port> -m <method> -d <data> <flags>

# call GetRuntimeName running on localhost:50051 in non-interactive mode (see -y)
yarn test:integration -a host.docker.internal:50051 -m GetRuntimeName -y

# call ValidateSetConfig running in a docker container with data
yarn test:integration -a host.docker.internal:50051 -m ValidateSetConfig -d '{"raw_config":"{\"network\":\"my-network\",\"rpc\":\"https://my-fancy-rpc.com\"}"}'

# call GetRuntimeName in non-interactive and simple mode and pipe the output to jq
yarn --silent test:integration -a host.docker.internal:50051 -y -s -m GetRuntimeName 2>&1 | jq '.name'
```
⚠️ **Note:** The `-d` flag expects a JSON string **without spaces**.
</details>