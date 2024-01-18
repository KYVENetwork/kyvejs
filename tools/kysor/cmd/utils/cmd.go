package utils

import (
	"github.com/KYVENetwork/kyvejs/tools/kysor/cmd/config"
	"github.com/KYVENetwork/kyvejs/tools/kysor/cmd/types"
	"github.com/spf13/cobra"
	"github.com/spf13/pflag"
)

func AddStringFlags(cmd *cobra.Command, flags []types.StringFlag) {
	for _, f := range flags {
		cmd.Flags().StringP(f.Name, f.Short, f.DefaultValue, f.Usage)
		if f.Required {
			err := cmd.MarkFlagRequired(f.Name)
			if err != nil {
				panic(err)
			}
		}
	}
}

func AddBoolFlags(cmd *cobra.Command, flags []types.BoolFlag) {
	for _, f := range flags {
		cmd.Flags().BoolP(f.Name, f.Short, f.DefaultValue, f.Usage)
		if f.Required {
			err := cmd.MarkFlagRequired(f.Name)
			if err != nil {
				panic(err)
			}
		}
	}
}

func IsInteractive(cmd *cobra.Command) bool {
	return !cmd.Flags().Changed(config.FlagNonInteractive.Name)
}

// SetupInteractiveMode sets up the interactive mode for the given command.
// This means that all flags are not required anymore.
func SetupInteractiveMode(cmd *cobra.Command, _ []string) {
	if IsInteractive(cmd) {
		cmd.Flags().VisitAll(func(f *pflag.Flag) {
			for val, annotation := range f.Annotations {
				if val == cobra.BashCompOneRequiredFlag {
					annotation[0] = "false"
				}
			}
		})
	}
}
