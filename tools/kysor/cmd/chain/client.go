package chain

import (
	"context"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"time"

	querytypes "github.com/KYVENetwork/chain/x/query/types"
	rpchttp "github.com/cometbft/cometbft/rpc/client/http"
	libclient "github.com/cometbft/cometbft/rpc/jsonrpc/client"
	sdkclient "github.com/cosmos/cosmos-sdk/client"
	sdkquery "github.com/cosmos/cosmos-sdk/types/query"
	banktypes "github.com/cosmos/cosmos-sdk/x/bank/types"
)

const (
	defaultQueryTimeout = 10 * time.Second
	defaultTxTimeout    = 20 * time.Second

	denom = "ukyve"
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
	Query      *KyveQuerier
	BankClient banktypes.QueryClient
}

func NewQuerier(client sdkclient.TendermintRPC) Querier {
	clientContext := sdkclient.Context{Client: client}
	return Querier{
		Query:      NewKyveQuerier(clientContext),
		BankClient: banktypes.NewQueryClient(clientContext),
	}
}

type KyveClient struct {
	q Querier
}

func NewKyveClient(rpcAddress string) (*KyveClient, error) {
	httpClient, err := libclient.DefaultHTTPClient(rpcAddress)
	if err != nil {
		return nil, err
	}

	httpClient.Timeout = 10 * time.Second
	rpcClient, err := rpchttp.NewWithClient(rpcAddress, "/websocket", httpClient)
	if err != nil {
		return nil, err
	}

	return &KyveClient{
		q: NewQuerier(rpcClient),
	}, nil
}

func (e *KyveClient) GetPools() (*querytypes.QueryPoolsResponse, error) {
	ctx, cancel := context.WithTimeout(context.Background(), defaultQueryTimeout)
	defer cancel()

	params := &querytypes.QueryPoolsRequest{Pagination: &sdkquery.PageRequest{Limit: 1000}}

	return e.q.Query.PoolClient.Pools(ctx, params)
}

func (e *KyveClient) GetBalance(address string) (*banktypes.QueryBalanceResponse, error) {
	ctx, cancel := context.WithTimeout(context.Background(), defaultQueryTimeout)
	defer cancel()

	params := &banktypes.QueryBalanceRequest{Address: address, Denom: denom}

	return e.q.BankClient.Balance(ctx, params)
}

func init() {
	accountAddressPrefix := "kyve"
	accountPubKeyPrefix := accountAddressPrefix + "pub"
	validatorAddressPrefix := accountAddressPrefix + "valoper"
	validatorPubKeyPrefix := accountAddressPrefix + "valoperpub"
	consNodeAddressPrefix := accountAddressPrefix + "valcons"
	consNodePubKeyPrefix := accountAddressPrefix + "valconspub"

	config := sdk.GetConfig()
	config.SetBech32PrefixForAccount(accountAddressPrefix, accountPubKeyPrefix)
	config.SetBech32PrefixForValidator(validatorAddressPrefix, validatorPubKeyPrefix)
	config.SetBech32PrefixForConsensusNode(consNodeAddressPrefix, consNodePubKeyPrefix)
	config.Seal()
}
