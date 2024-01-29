package utils

import (
	"context"
	"errors"
	"fmt"
	"os/user"
	"path/filepath"
	"slices"
	"time"

	"github.com/KYVENetwork/kyvejs/tools/kysor/docker"
	"github.com/docker/docker/api/types"
	"github.com/docker/docker/api/types/container"
	"github.com/docker/docker/api/types/filters"
	"github.com/docker/docker/api/types/network"
	"github.com/docker/docker/api/types/volume"
	"github.com/docker/docker/client"
	"go.uber.org/zap"
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
	// interchainCleanupLabel is the label used to identify containers and volumes that should be cleaned up from interchaintest
	interchainCleanupLabel = "ibc-test"
	// integrationImagePrefix is the prefix used for the integration image name
	integrationImagePrefix = "integration"
	// kystrapTemplatesDir is the path to the templates folder
	kystrapTemplatesDir = "../tools/kystrap/templates"
	// kystrapMount is the mount path for the output folder in the kystrap container
	kystrapMount = "/app/out"
)

var (
	protocolImage = docker.Image{Path: "../common/protocol", Tags: []string{"protocol"}, Labels: map[string]string{cleanupLabel: ""}}
	testapiImage  = docker.Image{Path: "testapi", Tags: []string{"testapi"}, Labels: map[string]string{cleanupLabel: ""}}
	kystrapImage  = docker.Image{Path: "../tools/kystrap", Tags: []string{"kystrap-e2etest"}, Labels: map[string]string{cleanupLabel: ""}}
)

type ProtocolBuilder struct {
	testName string
	log      *zap.Logger
}

func NewProtocolBuilder(testName string, log *zap.Logger) *ProtocolBuilder {
	return &ProtocolBuilder{
		testName: testName,
		log:      log,
	}
}

type ErrorLine struct {
	Error       string      `json:"error"`
	ErrorDetail ErrorDetail `json:"errorDetail"`
}

type ErrorDetail struct {
	Message string `json:"message"`
}

func (pc *ProtocolBuilder) BuildDependencies() error {
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

	// Build all the images concurrently
	configs := []docker.Image{protocolImage, testapiImage, kystrapImage}
	errChs := make([]chan error, len(configs))
	for i, img := range configs {
		errChs[i] = make(chan error)
		docker.BuildImageAsync(context.Background(), cli, img, errChs[i])
	}

	for _, errCh := range errChs {
		err := <-errCh
		if err != nil {
			return err
		}
	}
	return nil
}

func (pc *ProtocolBuilder) BuildIntegrations(testConfigs []*TestConfig) error {
	cli, err := client.NewClientWithOpts()
	if err != nil {
		return fmt.Errorf("failed to create docker client: %v", err)
	}
	//goland:noinspection GoUnhandledErrorResult
	defer cli.Close()

	var integrationConfigs []docker.Image

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
		integrationConfigs = append(integrationConfigs, docker.Image{
			Path:   cfg.Integration.Path,
			Tags:   []string{integrationTag(cfg.Integration)},
			Labels: map[string]string{cleanupLabel: ""},
		})
	}

	// Build all the images concurrently
	errChs := make([]chan error, len(integrationConfigs))
	for i, img := range integrationConfigs {
		errChs[i] = make(chan error)
		docker.BuildImageAsync(context.Background(), cli, img, errChs[i])
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
	ctx, cancel := context.WithTimeout(context.Background(), time.Minute*5)
	defer cancel()

	cli, err := client.NewClientWithOpts()
	if err != nil {
		return fmt.Errorf("failed to create docker client: %v", err)
	}
	//goland:noinspection GoUnhandledErrorResult
	defer cli.Close()

	labelFilters := []string{fmt.Sprintf("%s=", cleanupLabel), fmt.Sprintf("%s=%s", interchainCleanupLabel, pc.testName)}

	var containers []types.Container
	for _, label := range labelFilters {
		c, err := cli.ContainerList(ctx, types.ContainerListOptions{
			All:     true,
			Filters: filters.NewArgs(filters.Arg("label", label)),
		})
		if err != nil {
			return err
		}
		containers = append(containers, c...)
	}
	for _, cont := range containers {
		err = cli.ContainerRemove(ctx, cont.ID, types.ContainerRemoveOptions{
			Force: true,
		})
		if err != nil {
			return err
		}
	}

	var volumes []*volume.Volume
	for _, label := range labelFilters {
		v, err := cli.VolumeList(ctx, volume.ListOptions{Filters: filters.NewArgs(
			filters.Arg("label", label),
		)})
		if err != nil {
			return err
		}
		volumes = append(volumes, v.Volumes...)
	}
	for _, vol := range volumes {
		err = cli.VolumeRemove(ctx, vol.Name, true)
		if err != nil {
			return err
		}
	}
	return nil
}

type KystrapRunner struct {
	kystrapConfig ContainerConfig
}

func NewKystrapRunner() *KystrapRunner {
	path, err := filepath.Abs(integrationsPath)
	if err != nil {
		panic(fmt.Errorf("failed to get absolute path for integrations folder: %v", err))
	}
	binds := []string{fmt.Sprintf("%s:%s", path, kystrapMount)}
	return &KystrapRunner{
		kystrapConfig: ContainerConfig{
			image: kystrapImage.Tags[0],
			name:  kystrapImage.Tags[0],
			binds: binds,
		},
	}
}

func runDockerAndRemove(ctx context.Context, cli *client.Client, config ContainerConfig, timeout time.Duration) error {
	id, err := runDocker(ctx, cli, config)
	if err != nil {
		return err
	}

	// Try to remove the container until it succeeds or the timeout is reached
	for {
		ctx, cancel := context.WithTimeout(ctx, timeout)

		err = cli.ContainerRemove(ctx, id, types.ContainerRemoveOptions{})
		if err != nil {
			// check if err is a timeout error
			if errors.Is(ctx.Err(), context.DeadlineExceeded) {
				cancel()
				return fmt.Errorf("failed to remove container: %v", err)
			}
		} else {
			cancel()
			return nil
		}
	}
}

// BootstrapTmpIntegrations creates an integrations for the provided TmpIntegrations
// The integrations will be created in the integrations folder
func (kr *KystrapRunner) BootstrapTmpIntegrations(tmpIntegrations []TmpIntegration) error {
	ctx, cancel := context.WithTimeout(context.Background(), time.Minute)
	defer cancel()

	cli, err := client.NewClientWithOpts()
	if err != nil {
		return fmt.Errorf("failed to create docker client: %v", err)
	}
	//goland:noinspection GoUnhandledErrorResult
	defer cli.Close()

	currentUser, err := user.Current()
	if err != nil {
		return err
	}

	for _, tmp := range tmpIntegrations {
		config := kr.kystrapConfig
		config.cmd = []string{"create", "-n", tmp.Name, "-l", tmp.Language, "-y"}
		config.user = fmt.Sprintf("%s:%s", currentUser.Uid, currentUser.Gid)

		err := runDockerAndRemove(ctx, cli, config, time.Second*10)
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
		name := fmt.Sprintf("%s-%s-%s", protocolImage.Tags[0], integrationImage, cfg.ProtocolNode.KeyName())
		env := getProtocolEnv(cfg.Valaccount.Mnemonic(), rpcAddress, restAddress, integrationImage, testConfig.PoolId, true)
		binds := []string{fmt.Sprintf("%s:%s", kyveStorageVolumeName(testConfig.Integration), kyveStorageMountProtocol)}
		protocolConfigs = append(protocolConfigs, ContainerConfig{
			image:     protocolImage.Tags[0],
			name:      name,
			networkId: networkId,
			env:       env,
			binds:     binds,
		})
	}
	return &ProtocolRunner{
		testapiConfig: ContainerConfig{
			image:     testapiImage.Tags[0],
			name:      fmt.Sprintf("%s-%s", testapiImage.Tags[0], integrationImage),
			networkId: networkId,
			binds:     []string{fmt.Sprintf("%s:%s:ro", testConfig.Integration.TestDataApiPath, kyveStorageMountApi)},
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
	user      string
	env       []string
	binds     []string
	cmd       []string
}

func runDocker(ctx context.Context, cli *client.Client, config ContainerConfig) (string, error) {
	var endpointsConfig map[string]*network.EndpointSettings
	if config.networkId != "" {
		endpointsConfig = map[string]*network.EndpointSettings{
			config.networkId: {},
		}
	}
	r, err := cli.ContainerCreate(
		ctx,
		&container.Config{
			Image: config.image,
			Env:   config.env,
			Cmd:   config.cmd,
			User:  config.user,
		},
		&container.HostConfig{
			Binds: config.binds,
		},
		&network.NetworkingConfig{
			EndpointsConfig: endpointsConfig,
		},
		nil,
		config.name,
	)
	if err != nil {
		return "", err
	}

	err = cli.ContainerStart(ctx, r.ID, types.ContainerStartOptions{})
	if err != nil {
		return "", err
	}
	return r.ID, nil
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
	ctx, cancel := context.WithTimeout(context.Background(), time.Minute)
	defer cancel()

	cli, err := client.NewClientWithOpts()
	if err != nil {
		return fmt.Errorf("failed to create docker client: %v", err)
	}
	//goland:noinspection GoUnhandledErrorResult
	defer cli.Close()

	// Run testapi
	_, err = runDocker(ctx, cli, pc.testapiConfig)
	if err != nil {
		return err
	}

	// Run integration
	_, err = runDocker(ctx, cli, pc.integrationConfig)
	if err != nil {
		return err
	}

	// Run protocol with multiple nodes
	for _, protocol := range pc.protocolConfigs {
		_, err = runDocker(ctx, cli, protocol)
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
