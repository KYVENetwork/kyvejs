package docker

import "fmt"

type ProtocolEnv struct {
	Valaccount  string
	RpcAddress  string
	RestAddress string
	Host        string
	PoolId      uint64
	Debug       bool

	StoragePriv    string
	RequestBackoff uint64
	Cache          string
	Metrics        bool
	MetricsPort    uint64
	ChainId        string
}

func CreateProtocolEnv(env ProtocolEnv) ([]string, error) {
	if env.Valaccount == "" {
		return nil, fmt.Errorf("Valaccount is required")
	}
	if env.RpcAddress == "" {
		return nil, fmt.Errorf("RpcAddress is required")
	}
	if env.RestAddress == "" {
		return nil, fmt.Errorf("RestAddress is required")
	}
	if env.Host == "" {
		return nil, fmt.Errorf("Host is required")
	}

	debugFlag := "DEBUG="
	if env.Debug {
		debugFlag = "DEBUG=--debug" // set to --debug to enable debug logging
	}

	if env.RequestBackoff == 0 {
		env.RequestBackoff = 50
	}
	if env.Cache == "" {
		env.Cache = "jsonfile"
	}
	if env.MetricsPort == 0 {
		env.MetricsPort = 8080
	}
	if env.ChainId == "" {
		env.ChainId = "kyve-1"
	}

	return []string{
		fmt.Sprintf("VALACCOUNT=%s", env.Valaccount),
		fmt.Sprintf("RPC=%s", env.RpcAddress),
		fmt.Sprintf("REST=%s", env.RestAddress),
		fmt.Sprintf("HOST=%s", env.Host),
		fmt.Sprintf("POOL=%d", env.PoolId),
		fmt.Sprintf("STORAGE_PRIV=%s", env.StoragePriv),
		fmt.Sprintf("REQUEST_BACKOFF=%d", env.RequestBackoff),
		fmt.Sprintf("CACHE=%s", env.Cache),
		fmt.Sprintf("METRICS=%t", env.Metrics),
		fmt.Sprintf("METRICS_PORT=%d", env.MetricsPort),
		fmt.Sprintf("CHAIN_ID=%s", env.ChainId),
		debugFlag,
	}, nil
}
