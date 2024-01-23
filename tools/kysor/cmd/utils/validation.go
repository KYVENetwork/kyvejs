package utils

import (
	"fmt"
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
