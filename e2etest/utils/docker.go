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
	"go.uber.org/zap"
	"io"
	"os"
	"path/filepath"
	"slices"
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

	protocolImage          = "protocol"
	testapiImage           = "testapi"
	integrationImagePrefix = "integration"
)

type DockerImage struct {
	path  string
	tag   string
	binds []string
}

func (di DockerImage) toContainerConfig(name string, networkId string, env []string) ContainerConfig {
	if name == "" {
		name = di.tag
	}
	return ContainerConfig{
		image:     di.tag,
		name:      name,
		networkId: networkId,
		env:       env,
		binds:     di.binds,
	}
}

type ProtocolBuilder struct {
	log *zap.Logger
}

func NewProtocolBuilder(log *zap.Logger) *ProtocolBuilder {
	return &ProtocolBuilder{
		log: log,
	}
}

type ErrorLine struct {
	Error       string      `json:"error"`
	ErrorDetail ErrorDetail `json:"errorDetail"`
}

type ErrorDetail struct {
	Message string `json:"message"`
}

func (pc *ProtocolBuilder) printBuild(rd io.Reader) error {
	var lastLine string

	scanner := bufio.NewScanner(rd)
	for scanner.Scan() {
		lastLine = scanner.Text()
		pc.log.Debug(scanner.Text())
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

func (pc *ProtocolBuilder) buildImage(dockerClient *client.Client, buildPath string, tag string) error {
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

	err = pc.printBuild(res.Body)
	if err != nil {
		return err
	}

	return nil
}

func (pc *ProtocolBuilder) buildImageAsync(dockerClient *client.Client, image DockerImage, errCh chan<- error) {
	go func() {
		err := pc.buildImage(dockerClient, image.path, image.tag)
		errCh <- err
	}()
}

func (pc *ProtocolBuilder) Build(testConfigs []*TestConfig) error {
	// First, cleanup any old containers and volumes
	err := pc.Cleanup()
	if err != nil {
		return err
	}

	cli, err := client.NewClientWithOpts()
	if err != nil {
		return fmt.Errorf("failed to create docker client: %v", err)
	}
	//goland:noinspection GoUnhandledErrorResult
	defer cli.Close()

	// Define protocol and testapi configs
	protocolConfig := DockerImage{path: protocolPath, tag: protocolImage}
	testapiConfig := DockerImage{path: testapiPath, tag: testapiImage}
	var integrationConfigs []DockerImage

	// Find all subfolders in the integrations folder and build them
	ctx, cancel := context.WithTimeout(context.Background(), time.Second*5*time.Duration(len(testConfigs)))
	defer cancel()

	for _, cfg := range testConfigs {
		// Create the volumes that will be shared between the integration and testapi containers
		_, err = cli.VolumeCreate(ctx, volume.CreateOptions{
			Name:   kyveStorageVolumeName(cfg.Integration),
			Labels: map[string]string{cleanupLabel: ""},
		})
		if err != nil {
			return err
		}
		integrationConfigs = append(integrationConfigs, DockerImage{
			path: cfg.Integration.Path,
			tag:  integrationTag(cfg.Integration),
		})
	}

	// Build all the images concurrently
	configs := append([]DockerImage{protocolConfig, testapiConfig}, integrationConfigs...)
	errChs := make([]chan error, len(configs))
	for i, img := range configs {
		errChs[i] = make(chan error)
		pc.buildImageAsync(cli, img, errChs[i])
	}

	for _, errCh := range errChs {
		err := <-errCh
		if err != nil {
			return err
		}
	}
	return nil
}

func (pc *ProtocolBuilder) Cleanup() error {
	ctx, cancel := context.WithTimeout(context.Background(), time.Second*60*5)
	defer cancel()

	cli, err := client.NewClientWithOpts()
	if err != nil {
		return fmt.Errorf("failed to create docker client: %v", err)
	}
	//goland:noinspection GoUnhandledErrorResult
	defer cli.Close()

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

type ProtocolRunner struct {
	testapiConfig     ContainerConfig
	integrationConfig ContainerConfig
	protocolConfigs   []ContainerConfig
	testConfig        TestConfig
	sharedVolume      string
	networkId         string
	restAddress       string
	rpcAddress        string
}

func NewProtocolRunner(testConfig TestConfig, networkId string, restAddress string, rpcAddress string) *ProtocolRunner {
	integrationImage := integrationTag(testConfig.Integration)
	var protocolConfigs []ContainerConfig
	for _, cfg := range testConfig.GetProtocolConfigs() {
		name := fmt.Sprintf("%s-%s-%s", protocolImage, integrationImage, cfg.ProtocolNode.KeyName())
		env := getProtocolEnv(cfg.Valaccount.Mnemonic(), rpcAddress, restAddress, integrationImage, testConfig.PoolId, true)
		binds := []string{fmt.Sprintf("%s:%s", kyveStorageVolumeName(testConfig.Integration), kyveStorageMountProtocol)}
		protocolConfigs = append(protocolConfigs, ContainerConfig{
			image:     protocolImage,
			name:      name,
			networkId: networkId,
			env:       env,
			binds:     binds,
		})
	}
	return &ProtocolRunner{
		testapiConfig: ContainerConfig{
			image:     testapiImage,
			name:      fmt.Sprintf("%s-%s", testapiImage, integrationImage),
			networkId: networkId,
			binds:     []string{fmt.Sprintf("%s:%s:ro", testConfig.Integration.TestDataPath, kyveStorageMountApi)},
		},
		integrationConfig: ContainerConfig{
			image:     integrationImage,
			name:      integrationImage,
			networkId: networkId,
		},
		protocolConfigs: protocolConfigs,
		testConfig:      testConfig,
		sharedVolume:    kyveStorageVolumeName(testConfig.Integration),
		networkId:       networkId,
		restAddress:     restAddress,
		rpcAddress:      rpcAddress,
	}
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

func getProtocolEnv(
	valaccount string,
	rpcAddress string,
	restAddress string,
	host string,
	poolId uint64,
	debug bool,
) []string {
	debugFlag := "DEBUG="
	if debug {
		debugFlag = "DEBUG=--debug" // set to --debug to enable debug logging
	}
	return []string{
		fmt.Sprintf("VALACCOUNT=%s", valaccount),
		fmt.Sprintf("RPC=%s", rpcAddress),
		fmt.Sprintf("REST=%s", restAddress),
		fmt.Sprintf("HOST=%s", host),
		fmt.Sprintf("POOL=%d", poolId),
		debugFlag,
		"STORAGE_PRIV=",
		"REQUEST_BACKOFF=1",
		"CACHE=jsonfile",
		"METRICS=false",
		"METRICS_PORT=8080",
		"CHAIN_ID=kyve-1",
	}
}

func integrationTag(integration Integration) string {
	return fmt.Sprintf("%s-%s", integrationImagePrefix, integration.Name)
}

func kyveStorageVolumeName(integration Integration) string {
	return fmt.Sprintf("%s-%s", kyveStorageName, integrationTag(integration))
}

func (pc *ProtocolRunner) RunProtocolNodes() error {
	ctx, cancel := context.WithTimeout(context.Background(), time.Second*1030)
	defer cancel()

	cli, err := client.NewClientWithOpts()
	if err != nil {
		return fmt.Errorf("failed to create docker client: %v", err)
	}
	//goland:noinspection GoUnhandledErrorResult
	defer cli.Close()

	// Run testapi
	err = runDocker(ctx, cli, pc.testapiConfig)
	if err != nil {
		return err
	}

	// Run integration
	err = runDocker(ctx, cli, pc.integrationConfig)
	if err != nil {
		return err
	}

	// Run protocol with multiple nodes
	for _, protocol := range pc.protocolConfigs {
		err = runDocker(ctx, cli, protocol)
		if err != nil {
			return err
		}
	}
	return nil
}

func (pc *ProtocolRunner) StopProtocolNodes() error {
	ctx, cancel := context.WithTimeout(context.Background(), time.Second*60)
	defer cancel()

	cli, err := client.NewClientWithOpts()
	if err != nil {
		return fmt.Errorf("failed to create docker client: %v", err)
	}
	//goland:noinspection GoUnhandledErrorResult
	defer cli.Close()

	// Get all containers with the cleanup label
	containers, err := cli.ContainerList(ctx, types.ContainerListOptions{
		All: true,
		Filters: filters.NewArgs(
			filters.Arg("label", fmt.Sprintf("%s=", cleanupLabel)),
		),
	})
	if err != nil {
		return err
	}

	// Collect all containers that should be removed
	toBeRemoved := []string{"/" + pc.testapiConfig.name, "/" + pc.integrationConfig.name}
	for _, protocol := range pc.protocolConfigs {
		toBeRemoved = append(toBeRemoved, "/"+protocol.name)
	}

	// Remove the containers
	for _, cont := range containers {
		if slices.Contains(toBeRemoved, cont.Names[0]) {
			err = cli.ContainerRemove(ctx, cont.ID, types.ContainerRemoveOptions{
				Force: true,
			})
			if err != nil {
				return err
			}
		}
	}
	return nil
}
