package utils

import (
	"fmt"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"strconv"
)

func ValidateNotEmpty(input string) error {
	if input == "" {
		return fmt.Errorf("input cannot be empty")
	}
	return nil
}

func ValidateInt(input string) error {
	_, err := strconv.ParseInt(input, 10, 64)
	if err != nil {
		return fmt.Errorf("input must be a number")
	}
	return nil
}

func ValidateIntOrEmpty(input string) error {
	if input == "" {
		return nil
	}
	return ValidateInt(input)
}

func ValidateIntGreaterZero(input string) error {
	if err := ValidateInt(input); err != nil {
		return err
	}
	value, _ := strconv.ParseInt(input, 10, 64)
	if value <= 0 {
		return fmt.Errorf("input must be greater than zero")
	}
	return nil
}

func ValidatePort(input string) error {
	if err := ValidateInt(input); err != nil {
		return err
	}
	port, _ := strconv.ParseInt(input, 10, 64)
	if port < 0 || port > 65535 {
		return fmt.Errorf("port must be between 0 and 65535")
	}
	return nil
}

func ValidateKyveAddress(input string) error {
	_, err := sdk.AccAddressFromBech32(input)
	if err != nil {
		return fmt.Errorf("invalid kyve address. Must be a bech32 encoded address (ex: kyve1kumjqpufgh8myla26jtc9r2e674zeppu8fears)")
	}
	return nil
}
