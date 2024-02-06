package cmd

type StringFlag struct {
	Name         string
	Short        string
	DefaultValue string
	Usage        string
	Prompt       string
	Required     bool
	ValidateFn   func(input string) error
}

type BoolFlag struct {
	Name         string
	Short        string
	DefaultValue bool
	Usage        string
	Prompt       string
	Required     bool
}

type IntFlag struct {
	Name         string
	Short        string
	DefaultValue int64
	Usage        string
	Prompt       string
	Required     bool
	ValidateFn   func(input string) error
}

type Option[T any] interface {
	Name() string
	Value() T
	StringValue() string
}

type OptionFlag[T any] struct {
	Name         string
	Short        string
	DefaultValue Option[T]
	Options      []Option[T]
	Usage        string
	Prompt       string
	Required     bool
	ValidateFn   func(input string) error
}
