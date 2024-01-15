package types

import (
	"os"

	"golang.org/x/text/cases"
	lang "golang.org/x/text/language"
)

var toTitle = cases.Title(lang.English)

type Language string

var Languages []Language

const requestOtherLanguage Language = "Other"

func LanguagesStringSlice() []string {
	var languages []string
	for _, language := range Languages {
		languages = append(languages, language.String())
	}
	return languages
}

func NewLanguage(val string) Language {
	return Language(toTitle.String(val))
}

func (l Language) Type() string {
	return "Language"
}

func (l Language) String() string {
	return string(l)
}

func (l Language) IsRequestOtherLanguage() bool {
	return l == requestOtherLanguage
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
			Languages = append(Languages, NewLanguage(dir.Name()))
		}
	}
	Languages = append(Languages, requestOtherLanguage)
}
