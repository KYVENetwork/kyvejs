package chain

import (
	"fmt"
	"github.com/KYVENetwork/chain/app"
	"github.com/KYVENetwork/kyvejs/tools/kysor/cmd/config"
	"github.com/cosmos/cosmos-sdk/crypto/hd"
	"github.com/cosmos/cosmos-sdk/crypto/keyring"
	sdk "github.com/cosmos/cosmos-sdk/types"
	authtypes "github.com/cosmos/cosmos-sdk/x/auth/types"
	"time"

	querytypes "github.com/KYVENetwork/chain/x/query/types"
	rpchttp "github.com/cometbft/cometbft/rpc/client/http"
	libclient "github.com/cometbft/cometbft/rpc/jsonrpc/client"
	sdkclient "github.com/cosmos/cosmos-sdk/client"
	txtypes "github.com/cosmos/cosmos-sdk/types/tx"
	banktypes "github.com/cosmos/cosmos-sdk/x/bank/types"
)

const (
	defaultQueryTimeout = 10 * time.Second
	defaultTxTimeout    = 20 * time.Second
)

// KyveQuerier is a wrapper around all kyve specific x/query query clients
type KyveQuerier struct {
	PoolClient querytypes.QueryPoolClient
}

func NewKyveQuerier(clientContext sdkclient.Context) *KyveQuerier {
	return &KyveQuerier{
		PoolClient: querytypes.NewQueryPoolClient(clientContext),
	}
}

// Querier performs all queries
type Querier struct {
	Query      *KyveQuerier
	BankClient banktypes.QueryClient
	AuthClient authtypes.QueryClient
}

func NewQuerier(clientContext sdkclient.Context) Querier {
	return Querier{
		Query:      NewKyveQuerier(clientContext),
		BankClient: banktypes.NewQueryClient(clientContext),
		AuthClient: authtypes.NewQueryClient(clientContext),
	}
}

// Executor executes all transactions
type Executor struct {
	txClient       txtypes.ServiceClient
	txBuilder      sdkclient.TxBuilder
	encodingConfig app.EncodingConfig
	keystore       keyring.Keyring
}

func NewExecutor(clientContext sdkclient.Context, encodingConfig app.EncodingConfig, configs []config.ValaccountConfig) Executor {
	keystore := keyring.NewInMemory(encodingConfig.Marshaler)
	for _, valaccConfig := range configs {
		_, err := keystore.NewAccount(valaccConfig.Name, valaccConfig.Valaccount, keyring.DefaultBIP39Passphrase, sdk.FullFundraiserPath, hd.Secp256k1)
		if err != nil {
			fmt.Printf("⚠️ Warning: could not add key of valaccount %s: %v", valaccConfig.Name, err)
		}
	}
	return Executor{
		txClient:       txtypes.NewServiceClient(clientContext),
		txBuilder:      encodingConfig.TxConfig.NewTxBuilder(),
		encodingConfig: encodingConfig,
		keystore:       keystore,
	}
}

type KyveClient struct {
	q      Querier
	e      Executor
	config config.KysorConfig
}

func NewKyveClient(cfg config.KysorConfig, valaccConfigs []config.ValaccountConfig) (*KyveClient, error) {
	if cfg.RPC == "" {
		return nil, fmt.Errorf("rpc address must not be empty")
	}

	httpClient, err := libclient.DefaultHTTPClient(cfg.RPC)
	if err != nil {
		return nil, err
	}

	httpClient.Timeout = 10 * time.Second
	rpcClient, err := rpchttp.NewWithClient(cfg.RPC, "/websocket", httpClient)
	if err != nil {
		return nil, err
	}

	encodingConfig := app.MakeEncodingConfig()
	txConfig := encodingConfig.TxConfig
	cdc := encodingConfig.Marshaler
	clientContext := sdkclient.Context{Client: rpcClient, Codec: cdc, TxConfig: txConfig}

	return &KyveClient{
		q:      NewQuerier(clientContext),
		e:      NewExecutor(clientContext, encodingConfig, valaccConfigs),
		config: cfg,
	}, nil
}

func init() {
	accountAddressPrefix := "kyve"
	accountPubKeyPrefix := accountAddressPrefix + "pub"
	validatorAddressPrefix := accountAddressPrefix + "valoper"
	validatorPubKeyPrefix := accountAddressPrefix + "valoperpub"
	consNodeAddressPrefix := accountAddressPrefix + "valcons"
	consNodePubKeyPrefix := accountAddressPrefix + "valconspub"

	cfg := sdk.GetConfig()
	cfg.SetBech32PrefixForAccount(accountAddressPrefix, accountPubKeyPrefix)
	cfg.SetBech32PrefixForValidator(validatorAddressPrefix, validatorPubKeyPrefix)
	cfg.SetBech32PrefixForConsensusNode(consNodeAddressPrefix, consNodePubKeyPrefix)
	cfg.Seal()
}
