<!--suppress HtmlDeprecatedAttribute -->

<div align="center">
  <h1>KYVE + COSMOVISOR</h1>
</div>

![banner](https://github.com/kyve-org/assets/raw/main/banners/KYSOR.png)

## Why use KYSOR

KYVE has a broad ecosystem of projects archiving their data with KYVE. To standardize different data from different projects KYVE created special runtimes for standards like `@kyvejs/evm` for all EVM based chains. This has great benefits but also has downsides for protocol node runners in terms of user experience.

Without KYSOR for every pool the node runner has to get the binaries manually. If you want to run on another pool which has a different runtime you again have to manually obtain the binaries. Furthermore, if a pool ever upgrades to a newer protocol node version, you have the same procedure like before. Even worse, you might miss the update and receive a timeout slash for being offline

**Running nodes with KYSOR has the following benefits:**

- Only use **one** program to run on **every** pool
- Not installing and compiling protocol binaries **manually** for every pool
- Getting the new upgrade binaries during a pool upgrade **automatically** and therefore **don't risk timeout slashes**
- Make running protocol nodes **standardized** and **easier**

**Installation**

Get the latest release of the KYSOR binaries [here](https://github.com/KYVENetwork/kyvejs/releases?q=kysor&expanded=true)

```bash
wget https://github.com/KYVENetwork/kyvejs/releases/download/%40kyve%2Fkysor%40$VERSION/kysor-linux-x64.zip
```

```bash
unzip kysor-linux-x64.zip
```

```bash
mv kysor-linux-x64 kysor
```

```bash
chmod 700 kysor
```

Available KYSOR binaries for platforms:

linux-arm64

```bash
wget https://github.com/KYVENetwork/kyvejs/releases/download/%40kyve%2Fkysor%401.0.0-beta.1/kysor-linux-arm64.zip
```

linux-x64

```bash
wget https://github.com/KYVENetwork/kyvejs/releases/download/%40kyve%2Fkysor%401.0.0-beta.1/kysor-linux-x64.zip
```

macos-x64

```bash
wget https://github.com/KYVENetwork/kyvejs/releases/download/%40kyve%2Fkysor%401.0.0-beta.1/kysor-macos-x64.zip
```

To verify that the KYSOR runs successfully just run

```bash
./kysor version
```

**Initialize KYSOR**

Once you have successfully downloaded the KYSOR binary you have to initialize it.

When you init the KYSOR you need to specify the network you should run on and if the KYSOR should automatically download and execute the binaries for you. Since we are in korellia testnet
we would recommend initializing with the following properties:

```bash
./kysor init --chain-id korellia --rpc https://rpc.korellia.kyve.network/ --rest https://api.korellia.kyve.network/ --auto-download-binaries
```

This command creates a `config.toml` under the following directory: `$HOME/.kysor/`. You can edit this file if you wish to change the chain Id or the auto download feature.

::: warning
**IMPORTANT**: Since we are in testnet it is okay to leave auto download on, but once KYVE is in mainnet we would highly recommend turning auto download off and compiling the upgrade binaries yourself. You can find more information below for how to upgrade with KYSOR manually.
:::

**Create your first valaccount**

Now that KYSOR is initalized we move on to the next step. For every pool you run on a _valaccount_ has to be created. In our example, we want to run on the Moonbeam pool with Pool Id `0`. A new valaccount with a new mnemonic can be created in the following way:

```bash
./kysor valaccounts create \
--name moonbeam \
--pool 0 \
--storage-priv "$(cat path/to/arweave.json)" \
--verbose \
--metrics
```

This will create a `moonbeam.toml` file under the kysor home directory in `$HOME/.kysor/valaccounts/`. There you can view your valaccount config.

If you want to create a valaccount from an existing mnemonic just add the `--recover` flag like this:

```bash
./kysor valaccounts create \
--name moonbeam \
--pool 0 \
--storage-priv "$(cat path/to/arweave.json)" \
--verbose \
--metrics \
--recover
```

This will prompt you to enter the mnemonic you want to import. More help on how to manage valaccounts can be found with `./kysor valaccounts --help`

::: warning
**INFORMATION**: Of course multiple valaccounts can be created for each pool. We would recommend naming the valaccounts after the pool you want to run with this account on like in this case `moonbeam` for example. These names are just used locally for config management. Also if you have multiple valaccounts running on the same machine you are required to change the port of the metrics server (if enabled of course) so the don't overlap.
:::

**Run the KYSOR**

After you have created the required valaccounts you can simply start running the KYSOR with the following command:

```bash
./kysor start --valaccount moonbeam
```

When KYSOR is running, you can proceed with step 3.

You can also start the process in debug mode by adding the `--debug` flag like this:

```bash
./kysor start --valaccount moonbeam --debug
```

**Run KYSOR on multiple pools**

If you want to run KYSOR with multiple pools you only have to edit one configuration in the valaccounts. The Protocol Nodes starts a metrics prometheus server if the option `metrics` is enabled. On default the metrics server is available under the following endpoint: `http://localhost:8080/metrics`. If you start on multiple pools those servers would collide because of the same port. You can solve this by editing the valaccounts config toml and specifying a different port for each valaccount.

**Run the KYSOR without auto download**

If you want to run the KYSOR without auto download enabled like it would be recommended in mainnet just set the property `autoDownloadBinaries` to false in the `$HOME/.kysor/config.toml`. After that you should restart the KYSOR to make changes available.

Before an upgrade you are then required to prebuild the upgrade binaries **yourself** and place them in the correct path. Once you have the upgrade binary compiled move them to the following directory **before** the upgrade:

```bash
mv kyve-upgrade-binary $HOME/.kysor/upgrades/pool-$POOL/$VERSION/bin
```

$POOL is the pool id where the binary should run on. For example for the Moonbeam pool with pool id `0` and upgrade version `1.0.0-beta.6` you should move the upgrade binary to the following folder:

```bash
mv kyve-moonbeam-binary $HOME/.kysor/upgrades/pool-0/1.0.0-beta.6/bin/
```

The upgrade binaries of each version in korellia will be available here: [github.com/KYVENetwork/kyvejs/releases](https://github.com/KYVENetwork/kyvejs/releases)

**General KYSOR directory structure**

Knowing where KYSOR saves it's logs and binaries can be helpful. The example below shows the following setup: The KYSOR runs on two pools with pool id `0` and `2`. Pool `2` is still running on version `0.8.6` while pool `0` has already upgraded from `1.8.6` to `1.8.7`

```
.kysor
├── config.toml
├── logs
│   └── 2022-09-29T08:38:24.513Z.log
│   └── 2022-09-29T09:29:22.219Z.log
├── upgrades
│   ├── pool-0
│   |   ├── 1.8.6
│   |   |   ├── bin
│   |   |   │   └── kyve-linux-x64
│   |   |   ├── cache
|   |   |   │   ├── 234.json
|   |   |   │   └── ...
│   |   |   └── logs
│   |   |       ├── 2022-09-29T08:23:02.003Z.log
│   |   |       └── 2022-09-29T08:23:24.953Z.log
│   |   └── 1.8.7
│   |       ├── bin
│   |       │   └── kyve-linux-x64
│   |       ├── cache
|   |       │   ├── 567.json
|   |       │   └── ...
│   |       └── logs
│   |           └── 2022-09-29T08:23:24.953Z.log
│   └── pool-2
│       └── 0.8.6
│           ├── bin
│           │   └── kyve-linux-x64
│           ├── cache
|           │   ├── 3847.json
|           │   └── ...
│           └── logs
│               └── 2022-09-29T08:23:02.003Z.log
└── valaccounts
    ├── moonbeam.toml
    └── celo.toml
```

Here the following directories have the following reason:

- `.kysor` - KYSOR home directory, created with init command
- `config.toml` - general KYSOR config, created with init command
- `logs` - logs folder containing KYSOR log files. Each log file is a run from start to end where the date is the starting date
- `upgrades` - most important directory, contains all the binaries for every pool
- `upgrades/pool-$id` - holds every binary of every installed version of the specified pool
- `upgrades/pool-$id/$version` - acts as a home directory for a specific binary, contains binary cache, logs and actual protocol node binary
- `upgrades/pool-$id/$version/bin` - holds actual node binary
- `upgrades/pool-$id/$version/cache` - contains cached data relevant for the protocol node
- `upgrades/pool-$id/$version/logs` - logs folder for the protocol node of that version and pool. Each log file is a run from start to end where the date is the starting date
- `valaccounts` - contains all the valaccount config files with which the KYSOR can run on a pool

**Run KYSOR with systemd**

For the daemon service root-privileges are required during the setup. Create a service file. $USER is the Linux user which runs the process. Replace it before you copy the command.

Since the KYSOR can run on multiple pools on one machine we would recommend naming the daemon service after the valaccount name and with a `d` appending to it. With that you can create multiple service files and control each of them. This example shows the service file for our valaccount `moonbeam`

```bash
tee <<EOF > /dev/null /etc/systemd/system/moonbeamd.service
[Unit]
Description=KYVE Protocol-Node moonbeam daemon
After=network-online.target

[Service]
User=$USER
ExecStart=/home/$USER/kysor start --valaccount moonbeam
Restart=on-failure
RestartSec=3
LimitNOFILE=infinity
EOF
```

Start the daemon

```bash
sudo systemctl enable moonbeamd
sudo systemctl start moonbeamd
```

It can be stopped using

```
sudo systemctl stop moonbeamd
```

You can see its logs with

```
sudo journalctl -u moonbeamd -f
```
