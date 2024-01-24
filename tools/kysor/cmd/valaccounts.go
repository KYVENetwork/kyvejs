package cmd

import (
	"fmt"
	"github.com/KYVENetwork/kyvejs/tools/kysor/cmd/chain"
	"github.com/KYVENetwork/kyvejs/tools/kysor/cmd/config"
	"github.com/KYVENetwork/kyvejs/tools/kysor/cmd/types"
	"github.com/KYVENetwork/kyvejs/tools/kysor/cmd/utils"
	"github.com/cosmos/go-bip39"
	"github.com/manifoldco/promptui"
	"github.com/spf13/cobra"
	"os"
	"path/filepath"
)

var (
	ValaccountsCmdConfig            = types.CmdConfig{Name: "valaccounts", Short: "Manage validator accounts"}
	ValaccountsCreateCmdConfig      = types.CmdConfig{Name: "create", Short: "Create a new valaccount"}
	ValaccountsShowAddressCmdConfig = types.CmdConfig{Name: "show-address", Short: "Show the address of a valaccount"}
	ValaccountsShowBalanceCmdConfig = types.CmdConfig{Name: "show-balance", Short: "Show the balance of a valaccount"}
	VallaccountsTransferCmdConfig   = types.CmdConfig{Name: "transfer", Short: "Transfer tokens from a valaccount to another address"}
	ValaccountsDeleteCmdConfig      = types.CmdConfig{Name: "delete", Short: "Delete a valaccount"}
)

func valaccountsCmd() *cobra.Command {
	return &cobra.Command{
		Use:   ValaccountsCmdConfig.Name,
		Short: ValaccountsCmdConfig.Short,
		RunE: func(cmd *cobra.Command, args []string) error {
			// Check if the interactive flag is set
			// -> if so ask the user what to do
			if utils.IsInteractive(cmd) {
				// TODO: print a better help message (explain interactive mode)
				err := cmd.Help()
				if err != nil {
					return err
				}

				options := []types.CmdConfig{
					ValaccountsCreateCmdConfig,
					ValaccountsShowAddressCmdConfig,
					ValaccountsShowBalanceCmdConfig,
					VallaccountsTransferCmdConfig,
					ValaccountsDeleteCmdConfig,
				}
				nextCmd, err := utils.PromptCmd(options)
				if err != nil {
					return err
				}
				switch nextCmd.Name {
				case ValaccountsCreateCmdConfig.Name:
					return valaccountsCreateCmd().Execute()
				case ValaccountsShowAddressCmdConfig.Name:
					return valaccountsShowAddressCmd().Execute()
				case ValaccountsShowBalanceCmdConfig.Name:
					return valaccountsShowBalanceCmd().Execute()
				case VallaccountsTransferCmdConfig.Name:
					return valaccountsTransferCmd().Execute()
				case ValaccountsDeleteCmdConfig.Name:
					return valaccountsDeleteCmd().Execute()
				default:
					return fmt.Errorf("invalid option: %s", nextCmd.Name)
				}
			}
			return cmd.Help()
		},
	}
}

var (
	flagValaccCreateName = types.StringFlag{
		Name:     "name",
		Short:    "n",
		Usage:    "Name of the valaccount (name only used locally for KYSOR)",
		Required: true,
		ValidateFn: func(s string) error {
			if err := utils.ValidateNotEmpty(s); err != nil {
				return err
			}

			// Check if a config file with this name already exists
			configName := fmt.Sprintf("%s.toml", s)
			for _, c := range config.ValaccountConfigs {
				if c.Name == configName {
					return fmt.Errorf("valaccount with this name already exists")
				}
			}

			return nil
		},
	}
	flagValaccCreatePool = types.OptionFlag[uint64]{
		Name:       "pool",
		Short:      "p",
		Usage:      "The ID of the pool this valaccount should participate as a validator",
		Required:   true,
		ValidateFn: utils.ValidateInt,
	}
	flagValaccCreateStorageProvKey = types.StringFlag{
		Name:     "storage-priv",
		Usage:    "The private key of the storage provider",
		Required: true,
	}
	flagValaccCreateRequestBackoff = types.IntFlag{
		Name:         "request-backoff",
		DefaultValue: 50,
		Usage:        "The time in milliseconds between each getDataItem request where the node sleeps",
		ValidateFn:   utils.ValidateIntOrEmpty,
	}
	flagValaccCreateCache = types.OptionFlag[string]{
		Name:         "cache",
		DefaultValue: types.CacheOptionJsonFile,
		Options:      []types.Option[string]{types.CacheOptionJsonFile, types.CacheOptionMemory},
		Usage:        "The cache this node should use",
	}
	flagValaccCreateMetrics = types.BoolFlag{
		Name:         "metrics",
		DefaultValue: false,
		Usage:        "Start a prometheus metrics server on http://localhost:8080/metrics",
	}
	flagValaccCreateMetricsPort = types.IntFlag{
		Name:         "metrics-port",
		DefaultValue: 8080,
		ValidateFn:   utils.ValidatePort,
		Usage:        "Specify the port of the metrics server. Only considered if '--metrics' is set",
	}
	flagValaccCreateRecover = types.BoolFlag{
		Name:         "recover",
		DefaultValue: false,
		Usage:        "Recover a valaccount from a mnemonic",
	}
)

func getMnemonic(cmd *cobra.Command) (string, error) {
	isRecover, err := utils.GetBoolFromPromptOrFlag(cmd, flagValaccCreateRecover)
	if err != nil {
		return "", nil
	}

	if isRecover {
		prompt := promptui.Prompt{
			Label: "Enter your mnemonic",
			Validate: func(s string) error {
				if !bip39.IsMnemonicValid(s) {
					return fmt.Errorf("invalid mnemonic")
				}

				for _, c := range config.ValaccountConfigs {
					if c.Valaccount == s {
						return fmt.Errorf("valaccount with this mnemonic already exists")
					}
				}

				return nil
			},
		}
		mnemonic, err := prompt.Run()
		if err != nil {
			return "", nil
		}

		return mnemonic, nil
	} else {
		entropySeed, err := bip39.NewEntropy(256)
		if err != nil {
			return "", nil
		}

		return bip39.NewMnemonic(entropySeed)
	}
}

func valaccountsCreateCmd() *cobra.Command {
	cmd := &cobra.Command{
		Use:    ValaccountsCreateCmdConfig.Name,
		Short:  ValaccountsCreateCmdConfig.Short,
		PreRun: utils.SetupInteractiveMode,
		RunE: func(cmd *cobra.Command, args []string) error {
			kyveClient, err := chain.NewKyveClient(config.Config.RPC)
			if err != nil {
				return err
			}

			// Get the values from the flags or prompt the user for them
			name, err := utils.GetStringFromPromptOrFlag(cmd, flagValaccCreateName)
			if err != nil {
				return err
			}

			// Query pools
			response, err := kyveClient.QueryPools()
			if err != nil {
				return err
			}
			for _, pool := range response.GetPools() {
				flagValaccCreatePool.Options = append(flagValaccCreatePool.Options, types.NewPoolOption(pool))
			}
			// Pool
			pool, err := utils.GetOptionFromPromptOrFlag(cmd, flagValaccCreatePool)
			if err != nil {
				return err
			}

			// Storage provider key
			storageProvKey, err := utils.GetStringFromPromptOrFlag(cmd, flagValaccCreateStorageProvKey)
			if err != nil {
				return err
			}

			// Request backoff
			backoffTime, err := utils.GetIntFromPromptOrFlag(cmd, flagValaccCreateRequestBackoff)
			if err != nil {
				return err
			}

			// Cache
			cache, err := utils.GetOptionFromPromptOrFlag(cmd, flagValaccCreateCache)
			if err != nil {
				return err
			}

			// Metrics
			metrics, err := utils.GetBoolFromPromptOrFlag(cmd, flagValaccCreateMetrics)
			if err != nil {
				return err
			}

			// Metrics port
			metricsPort, err := cmd.Flags().GetInt64(flagValaccCreateMetricsPort.Name)
			if err != nil {
				return err
			}
			if metrics {
				// Only ask for the port if metrics are enabled
				metricsPort, err = utils.GetIntFromPromptOrFlag(cmd, flagValaccCreateMetricsPort)
				if err != nil {
					return err
				}
			}

			// Mnemonic
			mnemonic, err := getMnemonic(cmd)
			if err != nil {
				return err
			}

			home, err := os.UserHomeDir()
			if err != nil {
				return err
			}

			valaccountConfig := config.ValaccountConfig{
				Name:           fmt.Sprintf("%s.toml", name),
				Path:           filepath.Join(home, config.ValaccountsDir, fmt.Sprintf("%s.toml", name)),
				Pool:           pool.Value(),
				Valaccount:     mnemonic,
				StoragePriv:    storageProvKey,
				RequestBackoff: fmt.Sprintf("%d", backoffTime),
				Cache:          cache.Value(),
				Metrics:        metrics,
				MetricsPort:    fmt.Sprintf("%d", metricsPort),
			}

			err = valaccountConfig.Save()
			if err != nil {
				return err
			}
			fmt.Printf("Created valaccount '%s' in '%s'\n", name, valaccountConfig.Path)
			return nil
		},
	}
	utils.AddStringFlags(cmd, []types.StringFlag{flagValaccCreateName, flagValaccCreateStorageProvKey})
	utils.AddIntFlags(cmd, []types.IntFlag{flagValaccCreateRequestBackoff, flagValaccCreateMetricsPort})
	utils.AddBoolFlags(cmd, []types.BoolFlag{flagValaccCreateMetrics, flagValaccCreateRecover})
	utils.AddOptionFlags(cmd, []types.OptionFlag[string]{flagValaccCreateCache})
	utils.AddOptionFlags(cmd, []types.OptionFlag[uint64]{flagValaccCreatePool})
	return cmd
}

var flagValaccShowAddressName = types.OptionFlag[config.ValaccountConfig]{
	Name:     "name",
	Short:    "n",
	Usage:    "Name of the valaccount",
	Required: true,
}

func valaccountsShowAddressCmd() *cobra.Command {
	cmd := &cobra.Command{
		Use:    "show-address",
		Short:  "Show the address of a valaccount",
		PreRun: utils.SetupInteractiveMode,
		RunE: func(cmd *cobra.Command, args []string) error {
			// Return if no valaccount exists
			flagValaccShowAddressName.Options = config.ValaccountConfigOptions
			if len(flagValaccShowAddressName.Options) == 0 {
				fmt.Println("No valaccount found. Create one with 'kysor valaccounts create'")
				return nil
			}

			// Valaccount config
			valConfig, err := utils.GetOptionFromPromptOrFlag(cmd, flagValaccShowAddressName)
			if err != nil {
				return err
			}

			// Address from mnemonic
			address, err := utils.GetAddressFromMnemonic(valConfig.Value().Valaccount)
			if err != nil {
				return err
			}

			fmt.Println(address.String())
			return nil
		},
	}
	utils.AddOptionFlags(cmd, []types.OptionFlag[config.ValaccountConfig]{flagValaccShowAddressName})
	return cmd
}

var flagValaccShowBalanceName = flagValaccShowAddressName

func valaccountsShowBalanceCmd() *cobra.Command {
	cmd := &cobra.Command{
		Use:    "show-balance",
		Short:  "Show the balance of a valaccount",
		PreRun: utils.SetupInteractiveMode,
		RunE: func(cmd *cobra.Command, args []string) error {
			kyveClient, err := chain.NewKyveClient(config.Config.RPC)
			if err != nil {
				return err
			}

			// Return if no valaccount exists
			flagValaccShowAddressName.Options = config.ValaccountConfigOptions
			if len(flagValaccShowAddressName.Options) == 0 {
				fmt.Println("No valaccount found. Create one with 'kysor valaccounts create'")
				return nil
			}

			// Valaccount config
			valConfig, err := utils.GetOptionFromPromptOrFlag(cmd, flagValaccShowAddressName)
			if err != nil {
				return err
			}

			// Address from mnemonic
			address, err := utils.GetAddressFromMnemonic(valConfig.Value().Valaccount)
			if err != nil {
				return err
			}

			// Query the balance
			result, err := kyveClient.QueryBalance(address.String())
			if err != nil {
				return err
			}

			fmt.Printf("%v %s\n", result.GetBalance().Amount, result.GetBalance().GetDenom())
			return nil
		},
	}
	utils.AddOptionFlags(cmd, []types.OptionFlag[config.ValaccountConfig]{flagValaccShowBalanceName})
	return cmd
}

var (
	flagValaccTransferFrom = types.OptionFlag[config.ValaccountConfig]{
		Name:     "from",
		Usage:    "Name of the valaccount to transfer from",
		Required: true,
	}
	flagValaccTransferTo = types.StringFlag{
		Name:       "to",
		Usage:      "Address to transfer to",
		Required:   true,
		ValidateFn: utils.ValidateKyveAddress,
	}
	flagValaccTransferAmount = types.StringFlag{
		Name:       "amount",
		Usage:      "Amount to transfer",
		Required:   true,
		ValidateFn: utils.ValidateIntGreaterZero,
	}
)

func valaccountsTransferCmd() *cobra.Command {
	cmd := &cobra.Command{
		Use:     "transfer",
		Short:   "Transfer tokens from a valaccount to another address",
		Example: "kysor valaccounts transfer --from <valaccount> --to <address> --amount <amount>",
		PreRun:  utils.SetupInteractiveMode,
		RunE: func(cmd *cobra.Command, args []string) error {
			kyveClient, err := chain.NewKyveClient(config.Config.RPC)
			if err != nil {
				return err
			}

			// Return if no valaccount exists
			flagValaccTransferFrom.Options = config.ValaccountConfigOptions
			if len(flagValaccTransferFrom.Options) == 0 {
				fmt.Println("No valaccount found. Create one with 'kysor valaccounts create'")
				return nil
			}

			// Valaccount config
			valConfig, err := utils.GetOptionFromPromptOrFlag(cmd, flagValaccTransferFrom)
			if err != nil {
				return err
			}

			// Address from mnemonic
			address, err := utils.GetAddressFromMnemonic(valConfig.Value().Valaccount)
			if err != nil {
				return err
			}

			// Transfer to
			to, err := utils.GetStringFromPromptOrFlag(cmd, flagValaccTransferTo)
			if err != nil {
				return err
			}

			// Amount
			amount, err := utils.GetStringFromPromptOrFlag(cmd, flagValaccTransferAmount)
			if err != nil {
				return err
			}

			// Execute the send transaction
			result, err := kyveClient.ExecuteSend(address.String(), to, amount)
			if err != nil {
				return err
			}

			fmt.Printf("Transaction sent: %s\n", result.String())
			return nil
		},
	}
	utils.AddOptionFlags(cmd, []types.OptionFlag[config.ValaccountConfig]{flagValaccTransferFrom})
	utils.AddStringFlags(cmd, []types.StringFlag{flagValaccTransferTo, flagValaccTransferAmount})
	return cmd
}

var flagValaccDeleteName = flagValaccShowAddressName

func valaccountsDeleteCmd() *cobra.Command {
	cmd := &cobra.Command{
		Use:    "delete",
		Short:  "Delete a valaccount",
		PreRun: utils.SetupInteractiveMode,
		RunE: func(cmd *cobra.Command, args []string) error {
			// Return if no valaccount exists
			flagValaccShowAddressName.Options = config.ValaccountConfigOptions
			if len(flagValaccShowAddressName.Options) == 0 {
				fmt.Println("No valaccount found. Create one with 'kysor valaccounts create'")
				return nil
			}

			// Valaccount config
			valConfig, err := utils.GetOptionFromPromptOrFlag(cmd, flagValaccShowAddressName)
			if err != nil {
				return err
			}

			// Delete the config file
			err = os.Remove(valConfig.Value().Path)
			if err != nil {
				return err
			}
			fmt.Printf("Deleted valaccount '%s' in '%s'\n", valConfig.Value().Name, valConfig.Value().Path)
			return nil
		},
	}
	utils.AddOptionFlags(cmd, []types.OptionFlag[config.ValaccountConfig]{flagValaccDeleteName})
	return cmd
}

func init() {
	cmd := valaccountsCmd()
	cmd.AddCommand(valaccountsCreateCmd())
	cmd.AddCommand(valaccountsShowAddressCmd())
	cmd.AddCommand(valaccountsShowBalanceCmd())
	cmd.AddCommand(valaccountsTransferCmd())
	cmd.AddCommand(valaccountsDeleteCmd())
	rootCmd.AddCommand(cmd)
}
