package cmd

import (
	"context"
	"fmt"
	"github.com/KYVENetwork/kyvejs/tools/kysor/cmd/types"
	"github.com/KYVENetwork/kyvejs/tools/kysor/docker"
	"github.com/docker/docker/client"
	"github.com/spf13/cobra"
	"time"
)

var StopCmdConfig = types.CmdConfig{Name: "stop", Short: "Stop KYSOR"}

// tearDownContainers stops and removes all containers and networks with the given label
func tearDownContainers(cli *client.Client, label string) error {
	ctx, cancel := context.WithTimeout(context.Background(), time.Second*30)
	defer cancel()

	err := docker.StopContainers(ctx, cli, label)
	if err != nil {
		return err
	}

	err = docker.RemoveContainers(ctx, cli, label)
	if err != nil {
		return err
	}
	return docker.RemoveNetworks(ctx, cli, label)
}

func stopCmd() *cobra.Command {
	cmd := &cobra.Command{
		Use:   StopCmdConfig.Name,
		Short: StopCmdConfig.Short,
		RunE: func(cmd *cobra.Command, args []string) error {
			cli, err := client.NewClientWithOpts()
			if err != nil {
				return fmt.Errorf("failed to create docker client: %v", err)
			}
			//goland:noinspection GoUnhandledErrorResult
			defer cli.Close()

			err = tearDownContainers(cli, globalCleanupLabel)
			if err != nil {
				return err
			}

			fmt.Println("✅   KYSOR stopped successfully")
			return nil
		},
	}
	return cmd
}

func init() {
	rootCmd.AddCommand(stopCmd())
}
