## Develop a new KYVE integration

**Prerequisites:**
- Docker
- yarn (optional)

### Bootstrap a new integration

Run the following command to start the integration wizard:

```bash
# with yarn
yarn bootstrap:integration
```
```bash
# or without yarn
sh ./tools/kystrap/start.sh
```

Follow the instructions to create a new integration. 
The wizard will create a new folder in `integrations` with the integration name you provided. 

### Test the integration

To test the integration, start your integration (with or without docker), 
run the wizard again and select `test integration`. 
You can then test all gRPC methods that your integration needs to implement.

⚠️ **Note:** If you run your integration with docker, you need to provide the address of the docker container with `-a <host>:<port>`.
<br>
<br>
**Examples for testing:**

You can use the wizard in interactive or non-interactive mode to test your integration.
```bash
# test command structure
yarn bootstrap:integration test -a <host>:<port> -m <method> -d <data>

# call GetRuntimeName running on localhost:50051 in non-interactive mode (see -y)
yarn bootstrap:integration test -a localhost:50051 -m GetRuntimeName -y

# call ValidateSetConfig running in a docker container with data
yarn bootstrap:integration test -a 172.17.0.1:50051 -m ValidateSetConfig -d '{"raw_config":"{\"network\":\"my-network\",\"rpc\":\"https://my-fancy-rpc.com\"}"}'

# call GetRuntimeName in non-interactive and simple mode and pipe the output to jq
yarn --silent bootstrap:integration test -a 172.17.0.1:50051 -y -s -m GetRuntimeName 2>&1 | jq '.name'
```
⚠️ **Note:** The `-d` flag expects a JSON string **without spaces**.
