package chain

import (
	"context"
	"time"

	querytypes "github.com/KYVENetwork/chain/x/query/types"
	rpchttp "github.com/cometbft/cometbft/rpc/client/http"
	libclient "github.com/cometbft/cometbft/rpc/jsonrpc/client"
	sdkclient "github.com/cosmos/cosmos-sdk/client"
	sdkquery "github.com/cosmos/cosmos-sdk/types/query"
)

const (
	defaultQueryTimeout = 10 * time.Second
	defaultTxTimeout    = 20 * time.Second
)

type KyveQuerier struct {
	PoolClient querytypes.QueryPoolClient
}

func NewKyveQuerier(clientContext sdkclient.Context) *KyveQuerier {
	return &KyveQuerier{
		PoolClient: querytypes.NewQueryPoolClient(clientContext),
	}
}

type Querier struct {
	Query *KyveQuerier
}

func NewQuerier(client sdkclient.TendermintRPC) Querier {
	clientContext := sdkclient.Context{Client: client}
	return Querier{
		Query: NewKyveQuerier(clientContext),
	}
}

type Executor struct {
	q Querier
}

func NewExecutor(rpcAddress string) (*Executor, error) {
	httpClient, err := libclient.DefaultHTTPClient(rpcAddress)
	if err != nil {
		return nil, err
	}

	httpClient.Timeout = 10 * time.Second
	rpcClient, err := rpchttp.NewWithClient(rpcAddress, "/websocket", httpClient)
	if err != nil {
		return nil, err
	}

	return &Executor{
		q: NewQuerier(rpcClient),
	}, nil
}

func (e *Executor) GetPools() (*querytypes.QueryPoolsResponse, error) {
	ctx, cancel := context.WithTimeout(context.Background(), defaultQueryTimeout)
	defer cancel()

	params := &querytypes.QueryPoolsRequest{Pagination: &sdkquery.PageRequest{Limit: 1000}}

	return e.q.Query.PoolClient.Pools(ctx, params)
}
