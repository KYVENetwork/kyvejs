package types

import "fmt"

type StringFlag struct {
	Name         string
	Short        string
	DefaultValue string
	Usage        string
	Prompt       string
	Required     bool
}

type BoolFlag struct {
	Name         string
	Short        string
	DefaultValue bool
	Usage        string
	Question     string
	Required     bool
}

type CmdConfig struct {
	Name  string
	Short string
}

func (c CmdConfig) ActionString() string {
	return fmt.Sprintf("%s (%s)", c.Short, c.Name)
}
