package chain

import (
	"context"
	"fmt"

	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/cosmos/cosmos-sdk/crypto"
	"github.com/cosmos/cosmos-sdk/crypto/keyring"
	cryptotypes "github.com/cosmos/cosmos-sdk/crypto/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdktypes "github.com/cosmos/cosmos-sdk/types"
	txtypes "github.com/cosmos/cosmos-sdk/types/tx"
	"github.com/cosmos/cosmos-sdk/types/tx/signing"
	authsigning "github.com/cosmos/cosmos-sdk/x/auth/signing"
	banktypes "github.com/cosmos/cosmos-sdk/x/bank/types"
)

func (c *KyveClient) getPrivateKeyByAddress(address sdktypes.Address) (cryptotypes.PrivKey, error) {
	keyInfo, err := c.e.keystore.KeyByAddress(address)
	if err != nil {
		return nil, err
	}

	exportedPrivateKey, err := c.e.keystore.ExportPrivKeyArmor(keyInfo.Name, keyring.DefaultBIP39Passphrase)
	if err != nil {
		return nil, err
	}
	privateKey, _, err := crypto.UnarmorDecryptPrivKey(exportedPrivateKey, keyring.DefaultBIP39Passphrase)
	if err != nil {
		return nil, err
	}
	return privateKey, nil
}

func (c *KyveClient) createSignedTxn(sender sdktypes.Address, msgs ...sdktypes.Msg) ([]byte, error) {
	txBuilder := c.e.txBuilder
	txConfig := c.e.encodingConfig.TxConfig

	if err := txBuilder.SetMsgs(msgs...); err != nil {
		return nil, err
	}
	feeAmt := sdktypes.Coin{Denom: c.config.GetDenom(), Amount: sdktypes.NewInt(2000)}
	feeAmount := sdktypes.NewCoins(feeAmt)
	txBuilder.SetFeeAmount(feeAmount)
	txBuilder.SetGasLimit(100000)

	privateKey, err := c.getPrivateKeyByAddress(sender)
	if err != nil {
		return nil, err
	}

	account, err := c.QueryAccount(sender.String())
	if err != nil {
		return nil, err
	}

	accNumber := account.AccountNumber
	accSequence := account.Sequence
	privKeyList := []cryptotypes.PrivKey{privateKey}
	accNumberList := []uint64{accNumber}
	accSeqList := []uint64{accSequence}

	// First round: Gather all signer infos.
	var signatureList []signing.SignatureV2
	for idx, privKey := range privKeyList {
		sig := signing.SignatureV2{
			PubKey: privKey.PubKey(),
			Data: &signing.SingleSignatureData{
				SignMode:  txConfig.SignModeHandler().DefaultMode(),
				Signature: nil,
			},
			Sequence: accSeqList[idx],
		}
		signatureList = append(signatureList, sig)
	}
	if err := txBuilder.SetSignatures(signatureList...); err != nil {
		return nil, err
	}

	// Second round: Signed by each signer.
	var signingList []signing.SignatureV2
	for idx, privKey := range privKeyList {
		signerData := authsigning.SignerData{
			ChainID:       c.config.ChainID,
			AccountNumber: accNumberList[idx],
			Sequence:      accSeqList[idx],
		}
		signMode := txConfig.SignModeHandler().DefaultMode()
		sig, err := tx.SignWithPrivKey(signMode, signerData, txBuilder, privKey,
			txConfig, accSeqList[idx])
		if err != nil {
			return nil, err
		}
		signingList = append(signingList, sig)
	}
	if err := txBuilder.SetSignatures(signingList...); err != nil {
		return nil, err
	}
	return txConfig.TxEncoder()(txBuilder.GetTx())
}

func (c *KyveClient) broadcastSignedTxn(ctx context.Context, txBytes []byte) (*sdktypes.TxResponse, error) {
	broadcastTxRes, err := c.e.txClient.BroadcastTx(
		ctx,
		&txtypes.BroadcastTxRequest{
			Mode:    txtypes.BroadcastMode_BROADCAST_MODE_SYNC,
			TxBytes: txBytes,
		},
	)
	if err != nil {
		return nil, err
	}
	txResponse := broadcastTxRes.GetTxResponse()
	if txResponse.Code != 0 {
		return nil, fmt.Errorf("tranasction failed: %s (code: %d)", txResponse.RawLog, txResponse.Code)
	}
	return txResponse, nil
}

func (c *KyveClient) ExecuteSend(from sdktypes.AccAddress, to sdktypes.AccAddress, amount string) (*sdktypes.TxResponse, error) {
	ctx, cancel := context.WithTimeout(context.Background(), defaultTxTimeout)
	defer cancel()

	intAmount, ok := sdk.NewIntFromString(amount)
	if !ok {
		return nil, fmt.Errorf("invalid amount: %s", amount)
	}

	msg := banktypes.NewMsgSend(from, to, sdk.NewCoins(sdk.NewCoin(c.config.GetDenom(), intAmount)))

	txn, err := c.createSignedTxn(from, msg)
	if err != nil {
		return nil, err
	}

	return c.broadcastSignedTxn(ctx, txn)
}
