package utils

import (
	"bufio"
	"context"
	"encoding/json"
	"errors"
	"fmt"
	"github.com/docker/docker/api/types"
	"github.com/docker/docker/api/types/container"
	"github.com/docker/docker/api/types/network"
	"github.com/docker/docker/client"
	"github.com/docker/docker/pkg/archive"
	"io"
	"os"
	"path/filepath"
	"strings"
	"time"
)

type ErrorLine struct {
	Error       string      `json:"error"`
	ErrorDetail ErrorDetail `json:"errorDetail"`
}

type ErrorDetail struct {
	Message string `json:"message"`
}

func printBuild(rd io.Reader) error {
	var lastLine string

	scanner := bufio.NewScanner(rd)
	for scanner.Scan() {
		lastLine = scanner.Text()
		fmt.Println(scanner.Text())
	}

	errLine := &ErrorLine{}
	err := json.Unmarshal([]byte(lastLine), errLine)
	if err != nil {
		return err
	}
	if errLine.Error != "" {
		return errors.New(errLine.Error)
	}

	if err := scanner.Err(); err != nil {
		return err
	}

	return nil
}

func buildImage(dockerClient *client.Client, buildPath string, tag string) error {
	ctx, cancel := context.WithTimeout(context.Background(), time.Second*60*5)
	defer cancel()

	path, err := filepath.Abs(buildPath)
	if err != nil {
		return err
	}
	if _, err := os.Stat(path); os.IsNotExist(err) {
		return errors.New("protocol path does not exist")
	}

	tar, err := archive.TarWithOptions(path, &archive.TarOptions{})
	if err != nil {
		return err
	}

	opts := types.ImageBuildOptions{
		Dockerfile: "Dockerfile",
		Tags:       []string{tag},
		Remove:     true,
	}
	res, err := dockerClient.ImageBuild(ctx, tar, opts)
	if err != nil {
		return err
	}

	//goland:noinspection GoUnhandledErrorResult
	defer res.Body.Close()

	err = printBuild(res.Body)
	if err != nil {
		return err
	}

	return nil
}

func DockerBuild() {
	cli, err := client.NewClientWithOpts(client.FromEnv)
	if err != nil {
		panic(fmt.Errorf("failed to create docker client: %v", err))
	}
	//goland:noinspection GoUnhandledErrorResult
	defer cli.Close()

	err = buildImage(cli, "../common/protocol", "protocol")
	if err != nil {
		panic(err)
	}

	err = buildImage(cli, "../integrations/tendermint", "tendermint")
	if err != nil {
		panic(err)
	}
}

func DockerCleanup(cli *client.Client) {
	ctx, cancel := context.WithTimeout(context.Background(), time.Second*60*5)
	defer cancel()

	// TODO: filter by label or name
	containers, err := cli.ContainerList(ctx, types.ContainerListOptions{
		All: true,
		//Filters: filters.NewArgs(
		//	filters.Arg("label", CleanupLabel+"="+t.Name()),
		//),
	})
	if err != nil {
		panic(err)
	}

	for _, cont := range containers {
		err = cli.ContainerRemove(ctx, cont.ID, types.ContainerRemoveOptions{
			Force: true,
		})
		if err != nil {
			panic(err)
		}
	}
}

func runDocker(ctx context.Context, cli *client.Client, image string, env []string, networkId string) error {
	r, err := cli.ContainerCreate(
		ctx,
		&container.Config{
			Image: image,
			Env:   env,
		},
		nil,
		&network.NetworkingConfig{
			EndpointsConfig: map[string]*network.EndpointSettings{
				networkId: {},
			},
		},
		nil,
		image,
	)
	if err != nil {
		return err
	}

	err = cli.ContainerStart(ctx, r.ID, types.ContainerStartOptions{})
	if err != nil {
		return err
	}
	return nil
}

var (
	protocolEnv = []string{
		"VALACCOUNT=artist final stage coffee coach stable quantum feed catch bridge pond like ranch steel insane hold vital horse catalog battle company suspect satoshi famous",
		"HOST=tendermint",
		"POOL=0",
		"STORAGE_PRIV=",
		"REQUEST_BACKOFF=50",
		"CACHE=jsonfile",
		"METRICS=false",
		"METRICS_PORT=8080",
		"CHAIN_ID=kaon-1",
		//"RPC=https://rpc-eu-1.kaon.kyve.network",
		//"REST=https://api-eu-1.kaon.kyve.network",
		"DEBUG=false",
	}
)

func DockerRun(cli *client.Client, networkId string) {
	ctx, cancel := context.WithTimeout(context.Background(), time.Second*30)
	defer cancel()

	//env := append(protocolEnv, fmt.Sprintf("HOST=%s", networkId))

	valContainer := ""
	containers, err := cli.ContainerList(ctx, types.ContainerListOptions{})
	if err != nil {
		return
	}
	for _, cont := range containers {
		if strings.Contains(cont.Names[0], "val") && strings.Contains(cont.Names[0], "kyve") {
			valContainer = cont.Names[0]
			break
		}
	}
	if valContainer == "" {
		panic("validator container not found")
	}

	env := append(protocolEnv, fmt.Sprintf("RPC=http:/%s:26657", valContainer))
	env = append(env, fmt.Sprintf("REST=http:/%s:1317", valContainer))

	err = runDocker(ctx, cli, "protocol", env, networkId)
	if err != nil {
		panic(err)
	}

	err = runDocker(ctx, cli, "tendermint", []string{}, networkId)
	if err != nil {
		panic(err)
	}

	//runBusyBox(ctx, cli, networkId)
}

// TODO: remove
func runBusyBox(ctx context.Context, cli *client.Client, networkId string) {
	r, err := cli.ContainerCreate(
		ctx,
		&container.Config{
			Image:        "busybox",
			AttachStderr: true,
			AttachStdout: true,
			AttachStdin:  true,
			Tty:          true,
		},
		nil,
		&network.NetworkingConfig{
			EndpointsConfig: map[string]*network.EndpointSettings{
				networkId: {},
			},
		},
		nil,
		"busybox",
	)
	if err != nil {
		panic(err)
	}

	err = cli.ContainerStart(ctx, r.ID, types.ContainerStartOptions{})
	if err != nil {
		panic(err)
	}
}
