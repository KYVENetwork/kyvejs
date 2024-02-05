package chain

import (
	"context"
	querytypes "github.com/KYVENetwork/chain/x/query/types"
	sdkquery "github.com/cosmos/cosmos-sdk/types/query"
	authtypes "github.com/cosmos/cosmos-sdk/x/auth/types"
	banktypes "github.com/cosmos/cosmos-sdk/x/bank/types"
)

func (c *KyveClient) QueryPools() (*querytypes.QueryPoolsResponse, error) {
	ctx, cancel := context.WithTimeout(context.Background(), defaultQueryTimeout)
	defer cancel()

	params := &querytypes.QueryPoolsRequest{Pagination: &sdkquery.PageRequest{Limit: 1000}}

	return c.q.Query.PoolClient.Pools(ctx, params)
}

func (c *KyveClient) QueryPool(poolId uint64) (*querytypes.QueryPoolResponse, error) {
	ctx, cancel := context.WithTimeout(context.Background(), defaultQueryTimeout)
	defer cancel()

	params := &querytypes.QueryPoolRequest{Id: poolId}

	return c.q.Query.PoolClient.Pool(ctx, params)
}

func (c *KyveClient) QueryBalance(address string) (*banktypes.QueryBalanceResponse, error) {
	ctx, cancel := context.WithTimeout(context.Background(), defaultQueryTimeout)
	defer cancel()

	params := &banktypes.QueryBalanceRequest{Address: address, Denom: c.config.GetDenom()}

	return c.q.BankClient.Balance(ctx, params)
}

func (c *KyveClient) QueryAccount(address string) (authtypes.BaseAccount, error) {
	ctx, cancel := context.WithTimeout(context.Background(), defaultQueryTimeout)
	defer cancel()

	var baseAccount authtypes.BaseAccount

	params := &authtypes.QueryAccountRequest{Address: address}

	accountRes, err := c.q.AuthClient.Account(ctx, params)
	if err != nil {
		return baseAccount, err
	}
	accountData := accountRes.GetAccount().Value
	if err := baseAccount.XXX_Unmarshal(accountData); err != nil {
		return baseAccount, err
	}
	return baseAccount, nil
}
