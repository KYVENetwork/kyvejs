package utils

import (
	"fmt"

	goTerminal "github.com/leandroveronezi/go-terminal"
)

func PrintlnItalic(text string) {
	goTerminal.SetSGR(goTerminal.Reset, goTerminal.Italic)
	fmt.Println(text)
	goTerminal.SetSGR(goTerminal.Reset)
}
