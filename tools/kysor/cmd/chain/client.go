package chain

import (
	"context"
	"fmt"
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

func NewQuerier(clientContext sdkclient.Context) Querier {
	return Querier{
		Query:      NewKyveQuerier(clientContext),
		BankClient: banktypes.NewQueryClient(clientContext),
	}
}

type KyveClient struct {
	q          Querier
	bankClient banktypes.MsgClient
}

func NewKyveClient(rpcAddress string) (*KyveClient, error) {
	if rpcAddress == "" {
		return nil, fmt.Errorf("rpc address must not be empty")
	}

	httpClient, err := libclient.DefaultHTTPClient(rpcAddress)
	if err != nil {
		return nil, err
	}

	httpClient.Timeout = 10 * time.Second
	rpcClient, err := rpchttp.NewWithClient(rpcAddress, "/websocket", httpClient)
	if err != nil {
		return nil, err
	}

	clientContext := sdkclient.Context{Client: rpcClient}

	return &KyveClient{
		q:          NewQuerier(clientContext),
		bankClient: banktypes.NewMsgClient(clientContext),
	}, nil
}

func (e *KyveClient) QueryPools() (*querytypes.QueryPoolsResponse, error) {
	ctx, cancel := context.WithTimeout(context.Background(), defaultQueryTimeout)
	defer cancel()

	params := &querytypes.QueryPoolsRequest{Pagination: &sdkquery.PageRequest{Limit: 1000}}

	return e.q.Query.PoolClient.Pools(ctx, params)
}

func (e *KyveClient) QueryPool(poolId uint64) (*querytypes.QueryPoolResponse, error) {
	ctx, cancel := context.WithTimeout(context.Background(), defaultQueryTimeout)
	defer cancel()

	params := &querytypes.QueryPoolRequest{Id: poolId}

	return e.q.Query.PoolClient.Pool(ctx, params)
}

func (e *KyveClient) QueryBalance(address string) (*banktypes.QueryBalanceResponse, error) {
	ctx, cancel := context.WithTimeout(context.Background(), defaultQueryTimeout)
	defer cancel()

	params := &banktypes.QueryBalanceRequest{Address: address, Denom: denom}

	return e.q.BankClient.Balance(ctx, params)
}

func (e *KyveClient) ExecuteSend(from string, to string, amount string) (*banktypes.MsgSendResponse, error) {
	ctx, cancel := context.WithTimeout(context.Background(), defaultQueryTimeout)
	defer cancel()

	intAmount, ok := sdk.NewIntFromString(amount)
	if !ok {
		return nil, fmt.Errorf("invalid amount: %s", amount)
	}

	params := &banktypes.MsgSend{
		FromAddress: from,
		ToAddress:   to,
		Amount:      sdk.NewCoins(sdk.NewCoin(denom, intAmount)),
	}

	// TODO: implement this proper (sign tx, broadcast tx, wait for tx)

	return e.bankClient.Send(ctx, params)
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
