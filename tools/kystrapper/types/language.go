package types

import (
	"errors"
	"strings"
)

type Language string

const (
	Go         Language = "go"
	Python     Language = "python"
	Typescript Language = "typescript"
)

func (l *Language) Type() string {
	return "Language"
}

func (l *Language) String() string {
	return string(*l)
}

func (l *Language) Set(val string) error {
	var lowerVal = strings.ToLower(val)
	switch lowerVal {
	case "go", "python", "typescript":
		*l = Language(lowerVal)
	default:
		return errors.New("invalid Language")
	}
	return nil
}
