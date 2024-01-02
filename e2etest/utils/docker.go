package utils

import (
	"bufio"
	"context"
	"encoding/json"
	"errors"
	"fmt"
	"github.com/docker/docker/api/types"
	"github.com/docker/docker/api/types/container"
	"github.com/docker/docker/api/types/filters"
	"github.com/docker/docker/api/types/network"
	"github.com/docker/docker/api/types/volume"
	"github.com/docker/docker/client"
	"github.com/docker/docker/pkg/archive"

	"io"
	"os"
	"path/filepath"
	"strings"
	"time"
)

const (
	// kyveStorageName is the name of the volume used for kyve storage
	kyveStorageName = "kyvestorage"
	// kyveStoragePath is the path where kyve stores its data inside the container
	kyveStoragePath = "/tmp/kyvestorage"
	// cleanupLabel is the label used to identify containers and volumes that should be cleaned up
	cleanupLabel = "kyve-e2e-test"

	// protocolPath is the path to the protocol folder
	protocolPath = "../common/protocol"
	// testapiPath is the path to the testapi folder
	testapiPath = "testapi"
	// integrationPath is the path to the integrations folder
	integrationPath = "../integrations"
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
		Labels:     map[string]string{cleanupLabel: ""},
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

type BuildData struct {
	Path string
	Tag  string
}

func buildImageAsync(dockerClient *client.Client, image BuildData, errCh chan<- error) {
	go func() {
		err := buildImage(dockerClient, image.Path, image.Tag)
		errCh <- err
	}()
}

func DockerBuild() error {
	cli, err := client.NewClientWithOpts(client.FromEnv)
	if err != nil {
		return fmt.Errorf("failed to create docker client: %v", err)
	}
	//goland:noinspection GoUnhandledErrorResult
	defer cli.Close()

	// First, cleanup any old containers and volumes
	err = DockerCleanup(cli)
	if err != nil {
		return err
	}

	images := []BuildData{
		{protocolPath, "protocol"},
		{testapiPath, "testapi"},
	}

	// Find all subfolders in the integrations folder and build them
	integrationsPath, err := filepath.Abs(integrationPath)
	if err != nil {
		return err
	}
	integrations, err := os.ReadDir(integrationsPath)
	if err != nil {
		return err
	}
	for _, integration := range integrations {
		if integration.IsDir() {
			images = append(images, BuildData{
				Path: filepath.Join(integrationsPath, integration.Name()),
				Tag:  fmt.Sprintf("integration-%s", integration.Name()),
			})
		}
	}

	errChs := make([]chan error, len(images))

	for i, img := range images {
		errChs[i] = make(chan error)
		buildImageAsync(cli, img, errChs[i])
	}

	for _, errCh := range errChs {
		err := <-errCh
		if err != nil {
			return err
		}
	}
	return nil
}

func DockerCleanup(cli *client.Client) error {
	ctx, cancel := context.WithTimeout(context.Background(), time.Second*60*5)
	defer cancel()

	containers, err := cli.ContainerList(ctx, types.ContainerListOptions{
		All: true,
		Filters: filters.NewArgs(
			filters.Arg("label", fmt.Sprintf("%s=", cleanupLabel)),
		),
	})
	if err != nil {
		return err
	}

	for _, cont := range containers {
		err = cli.ContainerRemove(ctx, cont.ID, types.ContainerRemoveOptions{
			Force: true,
		})
		if err != nil {
			return err
		}
	}

	return cli.VolumeRemove(ctx, kyveStorageName, true)
}

type ContainerConfig struct {
	image     string
	name      string
	networkId string
	env       []string
	binds     []string
}

func runDocker(
	ctx context.Context,
	cli *client.Client,
	config ContainerConfig,
) error {
	r, err := cli.ContainerCreate(
		ctx,
		&container.Config{
			Image: config.image,
			Env:   config.env,
		},
		&container.HostConfig{
			Binds: config.binds,
		},
		&network.NetworkingConfig{
			EndpointsConfig: map[string]*network.EndpointSettings{
				config.networkId: {},
			},
		},
		nil,
		config.name,
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

func getTestDataBinds(path string) ([]string, error) {
	path, err := filepath.Abs(fmt.Sprintf("%s/testdata", path))
	if err != nil {
		return nil, err
	}
	if _, err := os.Stat(path); os.IsNotExist(err) {
		return nil, errors.New("testdata does not exist")
	}
	return []string{fmt.Sprintf("%s:/app/api:ro", path)}, nil
}

var (
	protocolEnv = []string{
		fmt.Sprintf("VALACCOUNT=%s", AliceValaccountMnemonic),
		"HOST=tendermint",
		"POOL=0",
		"STORAGE_PRIV=",
		"REQUEST_BACKOFF=5",
		"CACHE=jsonfile",
		"METRICS=false",
		"METRICS_PORT=8080",
		"CHAIN_ID=kyve-1",
		//"RPC=https://rpc-eu-1.kaon.kyve.network",
		//"REST=https://api-eu-1.kaon.kyve.network",
		"DEBUG=false",
	}
)

func DockerRun(cli *client.Client, networkId string) {
	ctx, cancel := context.WithTimeout(context.Background(), time.Second*30)
	defer cancel()

	// TODO: use client.GetNode()... something like that
	// Find the first validator container to get the RPC and REST endpoints
	valContainer := ""
	containers, err := cli.ContainerList(ctx, types.ContainerListOptions{})
	if err != nil {
		return
	}
	for _, cont := range containers {
		if strings.Contains(cont.Names[0], "val") && strings.Contains(cont.Names[0], "kyve") {
			valContainer = cont.Names[0]

			// Remove slash if it exists at the beginning
			if valContainer[0] == '/' {
				valContainer = valContainer[1:]
			}
			break
		}
	}
	if valContainer == "" {
		panic("validator container not found")
	}

	binds, err := getTestDataBinds("../integrations/tendermint")
	if err != nil {
		panic(err)
	}
	testapiConfig := ContainerConfig{
		image:     "testapi",
		name:      "testapi",
		networkId: networkId,
		binds:     binds,
	}
	err = runDocker(ctx, cli, testapiConfig)
	if err != nil {
		panic(err)
	}

	integrationConfig := ContainerConfig{
		image:     "tendermint",
		name:      "tendermint",
		networkId: networkId,
	}
	err = runDocker(ctx, cli, integrationConfig)
	if err != nil {
		panic(err)
	}

	env := append(protocolEnv, fmt.Sprintf("RPC=http://%s:26657", valContainer))
	env = append(env, fmt.Sprintf("REST=http://%s:1317", valContainer))

	vol, err := cli.VolumeCreate(ctx, volume.CreateOptions{Name: kyveStorageName})
	if err != nil {
		panic(err)
	}

	protocolConfig := ContainerConfig{
		image:     "protocol",
		name:      "protocol-alice",
		networkId: networkId,
		env:       env,
		binds:     []string{fmt.Sprintf("%s:%s", vol.Name, kyveStoragePath)},
	}
	err = runDocker(ctx, cli, protocolConfig)
	if err != nil {
		panic(err)
	}

	protocolConfig.name = "protocol-bob"
	protocolConfig.env[0] = fmt.Sprintf("VALACCOUNT=%s", BobValaccountMnemonic)
	err = runDocker(ctx, cli, protocolConfig)
	if err != nil {
		panic(err)
	}

	protocolConfig.name = "protocol-viktor"
	protocolConfig.env[0] = fmt.Sprintf("VALACCOUNT=%s", ViktorValaccountMnemonic)
	err = runDocker(ctx, cli, protocolConfig)
	if err != nil {
		panic(err)
	}
}
