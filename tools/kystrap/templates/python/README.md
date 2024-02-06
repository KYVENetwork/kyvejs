# {{ .name | ToTitle }} Runtime Server

This is the {{ .name | ToTitle }} runtime server.

## Development

### Requirements
- Docker
- Python 3
- Make (optional)

Setup
```bash
# Install virtualenv
python -m venv venv
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt
```

Start the runtime
```bash
python main.py
```

You must implement the methods defined in `proto/kyverdk/runtime/v1/__init__.py`.<br>
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
<summary>Using a shell</summary>

Start the runtime
```bash
python main.py
```

Open another terminal and run
```bash
# You must be in the root directory of the project
sh tools/kystrap/kystrap.sh test -a host.docker.internal:50051
```

**Examples for testing**

```bash
# test command structure
sh tools/kystrap/kystrap.sh test -a <host>:<port> -m <method> -d <data> <flags>

# call GetRuntimeName running on localhost:50051 in non-interactive mode (see -y)
sh tools/kystrap/kystrap.sh test -a host.docker.internal:50051 -m GetRuntimeName -y

# call ValidateSetConfig running in a docker container with data
sh tools/kystrap/kystrap.sh test -a host.docker.internal:50051 -m ValidateSetConfig -d '{"raw_config":"{\"network\":\"my-network\",\"rpc\":\"https://my-fancy-rpc.com\"}"}'

# call GetRuntimeName in non-interactive and simple mode and pipe the output to jq
sh tools/kystrap/kystrap.sh test -a host.docker.internal:50051 -y -s -m GetRuntimeName 2>&1 | jq '.name'
```
⚠️ **Note:** The `-d` flag expects a JSON string **without spaces**.
</details>