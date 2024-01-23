package utils

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/go-bip39"
)

func GetAddressFromMnemonic(mnemonic string) (sdk.AccAddress, error) {
	bytes, err := bip39.MnemonicToByteArray(mnemonic)
	if err != nil {
		return sdk.AccAddress{}, err
	}

	return sdk.AccAddressFromBech32(sdk.AccAddress(bytes).String())
}
