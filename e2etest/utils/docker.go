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
	"time"
)

const (
	// kyveStorageName is the name of the volume used for kyve storage
	kyveStorageName = "kyvestorage"
	// kyveStorageMountProtocol is the mount path for the kyve storage volume in the protocol container
	kyveStorageMountProtocol = "/tmp/kyvestorage"
	// kyveStorageMountApi is the mount path for the kyve storage volume in the testapi container
	kyveStorageMountApi = "/app/api"
	// cleanupLabel is the label used to identify containers and volumes that should be cleaned up
	cleanupLabel = "kyve-e2e-test"

	// protocolPath is the path to the protocol folder
	protocolPath = "../common/protocol"
	// testapiPath is the path to the testapi folder
	testapiPath = "testapi"
	// integrationsPath is the path to the integrations folder
	integrationsPath = "../integrations"
)

type ProtocolRunner struct {
	protocolConfig     dockerConfig
	testapiConfig      dockerConfig
	integrationConfigs []dockerConfig
	dockerVolumes      []volume.Volume
}

func NewProtocolRunner() *ProtocolRunner {
	return &ProtocolRunner{}
}

type dockerConfig struct {
	path  string
	tag   string
	binds []string
}

func (c dockerConfig) toContainerConfig(name string, networkId string, env []string) ContainerConfig {
	if name == "" {
		name = c.tag
	}
	return ContainerConfig{
		image:     c.tag,
		name:      name,
		networkId: networkId,
		env:       env,
		binds:     c.binds,
	}
}

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

func buildImageAsync(dockerClient *client.Client, image dockerConfig, errCh chan<- error) {
	go func() {
		err := buildImage(dockerClient, image.path, image.tag)
		errCh <- err
	}()
}

func getTestDataPath(path string) (string, error) {
	path, err := filepath.Abs(fmt.Sprintf("%s/testdata", path))
	if err != nil {
		return "", err
	}
	if _, err := os.Stat(path); os.IsNotExist(err) {
		return "", errors.New(fmt.Sprintf("testdata does not exist at %s", path))
	}
	return path, nil
}

// GetIntegrationDirs returns a list of all integration folder names
func (pc *ProtocolRunner) GetIntegrationDirs() []string {
	path, err := filepath.Abs(integrationsPath)
	if err != nil {
		panic(err)
	}
	integrations, err := os.ReadDir(path)
	if err != nil {
		panic(err)
	}

	var integrationDirs []string
	for _, integration := range integrations {
		if integration.IsDir() {
			// TODO: remove this check once the tendermint integration is ready
			if integration.Name() != "tendermint" {
				continue
			}
			integrationDirs = append(integrationDirs, integration.Name())
		}
	}
	return integrationDirs
}

func (pc *ProtocolRunner) Build() error {
	cli, err := client.NewClientWithOpts()
	if err != nil {
		return fmt.Errorf("failed to create docker client: %v", err)
	}
	//goland:noinspection GoUnhandledErrorResult
	defer cli.Close()

	// First, cleanup any old containers and volumes
	err = pc.Cleanup(cli)
	if err != nil {
		return err
	}

	// Define protocol and testapi configs
	pc.protocolConfig = dockerConfig{path: protocolPath, tag: "protocol"}
	pc.testapiConfig = dockerConfig{path: testapiPath, tag: "testapi"}

	// Find all subfolders in the integrations folder and build them
	integrations := pc.GetIntegrationDirs()
	ctx, cancel := context.WithTimeout(context.Background(), time.Second*5*time.Duration(len(integrations)))
	defer cancel()

	for _, integration := range integrations {
		// Ensure that the testdata folder exists
		_, err := getTestDataPath(filepath.Join(integrationsPath, integration))
		if err != nil {
			return err
		}

		tag := fmt.Sprintf("integration-%s", integration)

		// Create the volumes that will be shared between the integration and testapi containers
		vol, err := cli.VolumeCreate(ctx, volume.CreateOptions{
			Name:   kyveStorageVolumeName(tag),
			Labels: map[string]string{cleanupLabel: ""},
		})
		if err != nil {
			return err
		}
		pc.dockerVolumes = append(pc.dockerVolumes, vol)
		pc.integrationConfigs = append(pc.integrationConfigs, dockerConfig{
			path: filepath.Join(integrationsPath, integration),
			tag:  tag,
		})
	}

	errChs := make([]chan error, len(pc.integrationConfigs))
	for i, img := range pc.integrationConfigs {
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

func (pc *ProtocolRunner) Cleanup(cli *client.Client) error {
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

	volumes, err := cli.VolumeList(ctx, volume.ListOptions{Filters: filters.NewArgs(
		filters.Arg("label", fmt.Sprintf("%s=", cleanupLabel)),
	)})
	if err != nil {
		return err
	}
	for _, vol := range volumes.Volumes {
		err = cli.VolumeRemove(ctx, vol.Name, true)
		if err != nil {
			return err
		}
	}
	return nil
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

func getProtocolEnv(valaccount string, rpcAddress string, restAddress string, host string) []string {
	return []string{
		fmt.Sprintf("VALACCOUNT=%s", valaccount),
		fmt.Sprintf("RPC=%s", rpcAddress),
		fmt.Sprintf("REST=%s", restAddress),
		fmt.Sprintf("HOST=%s", host),
		"POOL=0",
		"STORAGE_PRIV=",
		"REQUEST_BACKOFF=5",
		"CACHE=jsonfile",
		"METRICS=false",
		"METRICS_PORT=8080",
		"CHAIN_ID=kyve-1",
		"DEBUG=", // set to --debug to enable debug logging TODO: fix this flag
	}
}

func kyveStorageVolumeName(integrationTag string) string {
	return fmt.Sprintf("%s-%s", kyveStorageName, integrationTag)
}

func (pc *ProtocolRunner) getVolume(integrationTag string) string {
	volName := kyveStorageVolumeName(integrationTag)
	for _, vol := range pc.dockerVolumes {
		if vol.Name == volName {
			return vol.Name
		}
	}
	panic(fmt.Sprintf("volume %s not found", volName))
}

func (pc *ProtocolRunner) Run(cli *client.Client, networkId string, restAddress string, rpcAddress string) error {
	ctx, cancel := context.WithTimeout(context.Background(), time.Second*10*time.Duration(len(pc.integrationConfigs)))
	defer cancel()

	for _, integrationConfig := range pc.integrationConfigs {
		dataPath, err := getTestDataPath(integrationConfig.path)
		if err != nil {
			return err
		}

		containerName := fmt.Sprintf("%s-%s", pc.testapiConfig.tag, integrationConfig.tag)
		testapiConfig := pc.testapiConfig.toContainerConfig(containerName, networkId, nil)
		testapiConfig.binds = []string{fmt.Sprintf("%s:%s:ro", dataPath, kyveStorageMountApi)}
		err = runDocker(ctx, cli, testapiConfig)
		if err != nil {
			return err
		}

		err = runDocker(ctx, cli, integrationConfig.toContainerConfig("", networkId, nil))
		if err != nil {
			return err
		}

		for _, account := range []Account{AliceValaccount, BobValaccount, ViktorValaccount} {
			containerName = fmt.Sprintf("%s-%s-%s", pc.protocolConfig.tag, integrationConfig.tag, account.Name)
			env := getProtocolEnv(account.Mnemonic, rpcAddress, restAddress, integrationConfig.tag)
			protocolConfig := pc.protocolConfig.toContainerConfig(containerName, networkId, env)
			protocolConfig.binds = []string{fmt.Sprintf("%s:%s", pc.getVolume(integrationConfig.tag), kyveStorageMountProtocol)}
			err = runDocker(ctx, cli, protocolConfig)
			if err != nil {
				return err
			}
		}
	}
	return nil
}

func (pc *ProtocolRunner) GetIntegrationContainerNames() []string {
	names := make([]string, len(pc.integrationConfigs))
	for i, config := range pc.integrationConfigs {
		names[i] = config.tag
	}
	return names
}
