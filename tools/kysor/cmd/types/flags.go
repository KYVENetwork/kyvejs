package types

var (
	FlagConfig         = StringFlag{Name: "config", Short: "c", DefaultValue: "", Usage: "Config file", Required: false}
	FlagNonInteractive = BoolFlag{Name: "yes", Short: "y", DefaultValue: false, Usage: "Non-interactive mode: Skips all prompts (default false)", Required: false}
)
