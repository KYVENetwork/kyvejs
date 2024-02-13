package utils

import (
	"fmt"
	"github.com/fatih/color"
)

func PrintlnItalic(text string) {
	color.Set(color.Italic)
	fmt.Println(text)
	color.Unset()
}
