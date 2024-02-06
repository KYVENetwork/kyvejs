package cmd

import (
	"context"
	"fmt"
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

func stopCmd() *cobra.Command {
	cmd := &cobra.Command{
		Use:     "stop",
		Short:   "Stop the KYVE data validator",
		PreRunE: commoncmd.SetupInteractiveMode,
		RunE: func(cmd *cobra.Command, args []string) error {
			cli, err := client.NewClientWithOpts(client.WithAPIVersionNegotiation())
			if err != nil {
				return fmt.Errorf("failed to create docker client: %v", err)
			}
			//goland:noinspection GoUnhandledErrorResult
			defer cli.Close()

			err = tearDownContainers(cli, globalCleanupLabel)
			if err != nil {
				return err
			}

			fmt.Println("✅  KYSOR stopped successfully")
			return nil
		},
	}
	return cmd
}

func init() {
	rootCmd.AddCommand(stopCmd())
}
