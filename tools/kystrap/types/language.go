package types

import (
	"errors"
	"os"
	"strings"
)

type Language string

var Languages []Language

func (l *Language) Type() string {
	return "Language"
}

func (l *Language) String() string {
	return string(*l)
}

func (l *Language) Set(val string) error {
	var lowerVal = strings.ToLower(val)
	for _, language := range Languages {
		if language.String() == lowerVal {
			*l = language
			return nil
		}
	}
	return errors.New("invalid language")
}

func init() {
	// read Languages from directories in templates folder
	// every directory is a language
	dirs, err := os.ReadDir(TemplatesDir)
	if err != nil {
		panic(err)
	}
	for _, dir := range dirs {
		if dir.IsDir() {
			Languages = append(Languages, Language(dir.Name()))
		}
	}
}
