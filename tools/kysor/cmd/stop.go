package cmd

import (
	"context"
	"fmt"
	"github.com/KYVENetwork/kyvejs/tools/kysor/cmd/config"
	"golang.org/x/exp/maps"
	"strings"
	"time"

	commoncmd "github.com/KYVENetwork/kyvejs/common/goutils/cmd"

	"github.com/KYVENetwork/kyvejs/common/goutils/docker"
	"github.com/KYVENetwork/kyvejs/tools/kysor/cmd/utils"
	"github.com/docker/docker/client"
	"github.com/spf13/cobra"
)

// tearDownContainers stops and removes all containers and networks with the given label
func tearDownContainers(cli *client.Client, label string) error {
	ctx, cancel := context.WithTimeout(context.Background(), time.Second*30)
	defer cancel()

	containers, err := docker.StopContainers(ctx, cli, label)
	if err != nil {
		return err
	}
	for _, container := range containers {
		fmt.Print("🔌  Stopped container ")
		utils.PrintlnItalic(strings.TrimPrefix(container.Names[0], "/"))
	}

	err = docker.RemoveContainers(ctx, cli, label)
	if err != nil {
		return err
	}
	return docker.RemoveNetworks(ctx, cli, label)
}

type StopOption struct {
	commoncmd.Option[string]
	name  string
	label string
}

func newStopOption(name, label string) StopOption {
	return StopOption{
		name:  name,
		label: label,
	}
}

func (o StopOption) Name() string {
	return o.name
}

func (o StopOption) Value() StopOption {
	return o
}

func (o StopOption) StringValue() string {
	return o.label
}

func setStopOptions(cli *client.Client) error {
	options := make(map[string]commoncmd.Option[StopOption])
	containers, err := docker.ListContainers(context.Background(), cli, globalCleanupLabel)
	if err != nil {
		return fmt.Errorf("failed to list containers: %v", err)
	}
	for _, cont := range containers {
		for _, valaccount := range config.ValaccountConfigOptions {
			label := valaccount.Value().GetContainerLabel()
			if _, ok := cont.Labels[label]; ok {
				options[label] = newStopOption(valaccount.Name(), label)
				break
			}
		}
	}
	optionsList := maps.Values(options)
	if len(optionsList) >= 1 {
		// Add all option to beginning of the list
		optionsList = append([]commoncmd.Option[StopOption]{newStopOption("all", globalCleanupLabel)}, optionsList...)
	}
	flagStopValaccount.Options = optionsList
	return nil
}

var (
	flagStopValaccount = commoncmd.OptionFlag[StopOption]{
		Name:     "valaccount",
		Short:    "v",
		Usage:    "Name of the valaccount to stop",
		Required: true,
	}
)

func stopCmd() *cobra.Command {
	cmd := &cobra.Command{
		Use:     "stop",
		Short:   "Stop the KYVE data validator",
		PreRunE: commoncmd.CombineFuncs(utils.CheckDockerInstalled, config.LoadConfigs, commoncmd.SetupInteractiveMode),
		RunE: func(cmd *cobra.Command, args []string) error {
			cli, err := client.NewClientWithOpts(client.WithAPIVersionNegotiation())
			if err != nil {
				return fmt.Errorf("failed to create docker client: %v", err)
			}
			//goland:noinspection GoUnhandledErrorResult
			defer cli.Close()

			if err := setStopOptions(cli); err != nil {
				return fmt.Errorf("failed to stop containers: %v", err)
			}

			if len(flagStopValaccount.Options) == 0 {
				fmt.Println("There is nothing to stop")
				return nil
			}

			// Stop
			stopOption, err := commoncmd.GetOptionFromPromptOrFlag(cmd, flagStopValaccount)
			if err != nil {
				return err
			}

			err = tearDownContainers(cli, stopOption.Value().label)
			if err != nil {
				return err
			}

			fmt.Println("✅  KYSOR stopped successfully")
			return nil
		},
	}
	commoncmd.AddOptionFlags(cmd, []commoncmd.OptionFlag[StopOption]{flagStopValaccount})
	return cmd
}

func init() {
	rootCmd.AddCommand(stopCmd())
}
