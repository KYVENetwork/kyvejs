package utils

import (
	"github.com/KYVENetwork/chain/app"
	"github.com/cosmos/cosmos-sdk/crypto/hd"
	"github.com/cosmos/cosmos-sdk/crypto/keyring"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func GetAccAddressFromMnemonic(mnemonic string) (sdk.AccAddress, error) {
	encodingConfig := app.NewEncodingConfig()

	keystore := keyring.NewInMemory(encodingConfig.Marshaler)
	k, err := keystore.NewAccount("", mnemonic, keyring.DefaultBIP39Passphrase, sdk.FullFundraiserPath, hd.Secp256k1)
	if err != nil {
		return nil, err
	}
	return k.GetAddress()
}
