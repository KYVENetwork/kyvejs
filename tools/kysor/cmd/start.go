package cmd

import (
	"bufio"
	"context"
	"errors"
	"fmt"
	"github.com/docker/docker/api/types/container"
	goTerminal "github.com/leandroveronezi/go-terminal"
	"io"
	"os"
	"os/signal"
	"path/filepath"
	"runtime"
	"strings"
	"syscall"
	"time"

	commoncmd "github.com/KYVENetwork/kyvejs/common/goutils/cmd"

	pooltypes "github.com/KYVENetwork/chain/x/pool/types"
	"github.com/KYVENetwork/kyvejs/tools/kysor/cmd/chain"
	"github.com/KYVENetwork/kyvejs/tools/kysor/cmd/config"
	"github.com/KYVENetwork/kyvejs/tools/kysor/cmd/utils"

	"github.com/KYVENetwork/kyvejs/common/goutils/docker"
	"github.com/docker/docker/client"
	"github.com/go-git/go-git/v5"
	"github.com/go-git/go-git/v5/plumbing"
	"github.com/hashicorp/go-version"
	"github.com/knadh/koanf/parsers/dotenv"
	"github.com/knadh/koanf/providers/file"
	"github.com/knadh/koanf/v2"
	"github.com/mitchellh/go-homedir"
	"github.com/spf13/cobra"
)

var globalCleanupLabel = "kysor-all"

type Runtime struct {
	RuntimeVersion  string
	ProtocolVersion string
	RepoDir         string
}

// getHigherVersion returns the higher version of the two given versions or nil if the old version is higher
// If constraints are given, the new version must match them
func getHigherVersion(old *kyveRef, ref *plumbing.Reference, path string, constraints version.Constraints) *kyveRef {
	var oldVersion *version.Version
	if old != nil {
		oldVersion = old.ver
	}
	split := strings.Split(ref.Name().Short(), path)
	if len(split) == 2 {
		newVersion, err := version.NewVersion(split[1])
		if err != nil {
			// Ignore invalid versions
			return old
		}
		if newVersion.Prerelease() != "" {
			// Ignore prerelease versions
			return old
		}
		if oldVersion != nil && newVersion.LessThan(oldVersion) {
			// Ignore lower versions
			return old
		}
		if constraints != nil && !constraints.Check(newVersion) {
			// Ignore versions which don't match the constraints
			return old
		}
		return &kyveRef{
			ver: newVersion,
			ref: ref,
		}
	}
	return old
}

type kyveRef struct {
	ver  *version.Version
	ref  *plumbing.Reference
	path string
	name string
}

// getRuntimeVersions returns the required protocol and integration versions for the given pool
// protocol version: Latest patch version that is defined on-chain (ex: v1.1.0 -> v1.1.3)
// integration version: Latest version (no constraints) -> TODO: save constraints on-chain and use them
func getRuntimeVersions(repo *git.Repository, pool *pooltypes.Pool, repoDir string) (*kyveRef, *kyveRef, error) {
	tagrefs, err := repo.Tags()
	if err != nil {
		return nil, nil, err
	}

	expectedRuntime := pool.Runtime
	split := strings.Split(expectedRuntime, "@kyvejs/")
	if len(split) != 2 {
		return nil, nil, fmt.Errorf("invalid runtime name: %s", expectedRuntime)
	}
	expectedIntegrationDir := split[1]

	pVersion, err := version.NewVersion(pool.Protocol.Version)
	if err != nil {
		return nil, nil, err
	}

	// Protocol must be at least the same major and minor version as defined in the pool
	protocolVersContraint, err := version.NewConstraint(fmt.Sprintf(">=%s, < %d.%d.0", pVersion.String(), pVersion.Segments()[0], pVersion.Segments()[1]+1))
	if err != nil {
		return nil, nil, err
	}

	var latestRuntimeVersion *kyveRef
	var latestProtocolVersion *kyveRef
	err = tagrefs.ForEach(func(ref *plumbing.Reference) error {
		if ref.Name().IsTag() && strings.HasPrefix(ref.Name().Short(), "@kyvejs/protocol@") {
			latestProtocolVersion = getHigherVersion(latestProtocolVersion, ref, "@kyvejs/protocol@", protocolVersContraint)
		} else if ref.Name().IsTag() && strings.HasPrefix(ref.Name().Short(), expectedRuntime) {
			latestRuntimeVersion = getHigherVersion(latestRuntimeVersion, ref, fmt.Sprintf("%s@", expectedRuntime), nil)
		}
		return nil
	})
	if err != nil {
		return nil, nil, err
	}

	if latestProtocolVersion == nil {
		return nil, nil, fmt.Errorf("no protocol found for %s", expectedRuntime)
	}
	if latestRuntimeVersion == nil {
		return nil, nil, fmt.Errorf("no runtime found for %s", expectedRuntime)
	}

	latestProtocolVersion.path = filepath.Join(repoDir, "common", "protocol")
	latestRuntimeVersion.path = filepath.Join(repoDir, "integrations", expectedIntegrationDir)
	latestProtocolVersion.name = "protocol"
	latestRuntimeVersion.name = fmt.Sprintf("integration-%s", expectedIntegrationDir)

	return latestProtocolVersion, latestRuntimeVersion, nil
}

type kyveRepo struct {
	name string
	dir  string
	repo *git.Repository
}

// pullRepo clones or pulls the kyvejs repository
func pullRepo(repoDir string, silent bool) (*kyveRepo, error) {
	repoName := "github.com/KYVENetwork/kyvejs"
	repoUrl := fmt.Sprintf("https://%s.git", repoName)

	var repo *git.Repository
	if _, err := os.Stat(repoDir); os.IsNotExist(err) {
		// Clone the given repository to the given directory
		if !silent {
			fmt.Printf("📥  Cloning %s\n", repoUrl)
		}
		repo, err = git.PlainClone(repoDir, false, &git.CloneOptions{
			URL:      repoUrl,
			Progress: os.Stdout,
		})
		if err != nil {
			return nil, err
		}
	} else {
		// Otherwise open the existing repository
		repo, err = git.PlainOpen(repoDir)
		if err != nil {
			return nil, err
		}

		w, err := repo.Worktree()
		if err != nil {
			return nil, err
		}

		// Pull the latest changes
		if !silent {
			fmt.Println("⬇️   Pulling latest changes")
		}
		err = w.Pull(&git.PullOptions{RemoteName: "origin", Force: true})
		if err != nil && !errors.Is(err, git.NoErrAlreadyUpToDate) && !errors.Is(err, git.ErrNonFastForwardUpdate) {
			return nil, err
		}
	}

	return &kyveRepo{
		repo: repo,
		name: repoName,
		dir:  repoDir,
	}, nil
}

func buildImage(worktree *git.Worktree, ref *plumbing.Reference, cli *client.Client, image docker.Image, verbose bool) error {
	fmt.Printf("📦  Checkout %s\n", ref.Name().Short())
	err := worktree.Checkout(&git.CheckoutOptions{
		Hash:  ref.Hash(),
		Force: true,
	})
	if err != nil {
		return err
	}

	showOnlyProgress := true
	var printFn func(string)
	if verbose {
		showOnlyProgress = false
		printFn = func(text string) {
			fmt.Print(text)
		}
	}

	fmt.Printf("🏗️   Building %s ...\n", image.Tags[0])
	return docker.BuildImage(context.Background(), cli, image, docker.OutputOptions{ShowOnlyProgress: showOnlyProgress, PrintFn: printFn})
}

// buildImages builds the protocol and integration images
func buildImages(kr *kyveRepo, cli *client.Client, pool *pooltypes.Pool, label string, verbose bool) (*docker.Image, *docker.Image, error) {
	w, err := kr.repo.Worktree()
	if err != nil {
		return nil, nil, err
	}

	protocol, integration, err := getRuntimeVersions(kr.repo, pool, kr.dir)
	if err != nil {
		return nil, nil, err
	}

	// Todo: remove this for final release
	protocol.ref = plumbing.NewHashReference(plumbing.NewBranchReferenceName("rapha/dockerization-e2etest"), plumbing.NewHash("34e7d141505997910666e7327ea8d9ae4971723a"))
	integration.ref = plumbing.NewHashReference(plumbing.NewBranchReferenceName("rapha/dockerization-e2etest"), plumbing.NewHash("34e7d141505997910666e7327ea8d9ae4971723a"))

	protocolImage := docker.Image{
		Path:   protocol.path,
		Tags:   []string{fmt.Sprintf("%s/%s:%s", strings.ToLower(kr.name), protocol.name, protocol.ver.String())},
		Labels: map[string]string{globalCleanupLabel: "", label: ""},
	}
	integrationImage := docker.Image{
		Path:   integration.path,
		Tags:   []string{fmt.Sprintf("%s/%s:%s", strings.ToLower(kr.name), integration.name, integration.ver.String())},
		Labels: map[string]string{globalCleanupLabel: "", label: ""},
	}

	err = buildImage(w, protocol.ref, cli, protocolImage, verbose)
	if err != nil {
		return nil, nil, err
	}
	fmt.Println("🏗️   Finished bulding image: " + protocolImage.Tags[0])

	err = buildImage(w, integration.ref, cli, integrationImage, verbose)
	if err != nil {
		return nil, nil, err
	}
	fmt.Println("🏗️   Finished bulding image " + integrationImage.Tags[0])
	return &protocolImage, &integrationImage, nil
}

type StartResult struct {
	Name string
	ID   string
}

// startContainers starts the protocol and integration containers
func startContainers(cli *client.Client, valConfig config.ValaccountConfig, pool *pooltypes.Pool, debug bool, protocol *docker.Image, integration *docker.Image, label string, integrationEnv []string) (*StartResult, *StartResult, error) {
	protocolName := fmt.Sprintf("%s-%s", label, protocol.TagsLastPartWithoutVersion()[0])
	integrationName := fmt.Sprintf("%s-%s", label, integration.TagsLastPartWithoutVersion()[0])

	ctx, cancel := context.WithTimeout(context.Background(), time.Second*30)
	defer cancel()

	env, err := docker.CreateProtocolEnv(docker.ProtocolEnv{
		Valaccount:  valConfig.Valaccount,
		RpcAddress:  config.GetConfigX().RPC,
		RestAddress: config.GetConfigX().REST,
		Host:        integrationName,
		PoolId:      pool.Id,
		Debug:       debug,
		ChainId:     config.GetConfigX().ChainID,
	})
	if err != nil {
		return nil, nil, err
	}

	err = docker.CreateNetwork(ctx, cli, docker.NetworkConfig{
		Name:   label,
		Labels: map[string]string{globalCleanupLabel: "", label: ""},
	})
	if err != nil {
		return nil, nil, err
	}

	pConfig := docker.ContainerConfig{
		Image:   protocol.Tags[0],
		Name:    protocolName,
		Network: label,
		Env:     env,
		Labels:  map[string]string{globalCleanupLabel: "", label: ""},
	}

	iConfig := docker.ContainerConfig{
		Image:   integration.Tags[0],
		Name:    integrationName,
		Network: label,
		Env:     integrationEnv,
		Labels:  map[string]string{globalCleanupLabel: "", label: ""},
	}

	protocolId, err := docker.StartContainer(ctx, cli, pConfig)
	if err != nil {
		return nil, nil, err
	}
	fmt.Print("🚀  Started container ")
	utils.PrintlnItalic(protocolName)
	protocolResult := &StartResult{
		Name: protocolName,
		ID:   protocolId,
	}

	integrationId, err := docker.StartContainer(ctx, cli, iConfig)
	if err != nil {
		return nil, nil, err
	}
	fmt.Print("🚀  Started container ")
	utils.PrintlnItalic(integrationName)
	integrationResult := &StartResult{
		Name: integrationName,
		ID:   integrationId,
	}

	return protocolResult, integrationResult, nil
}

func getIntegrationEnv(cmd *cobra.Command) ([]string, error) {
	var integrationEnv []string
	envFile, err := commoncmd.GetStringFromPromptOrFlag(cmd, flagStartEnvFile)
	if err != nil {
		return nil, err
	}
	if envFile != "" {
		path, err := homedir.Expand(envFile)
		if err != nil {
			return nil, err
		}
		k := koanf.New(".")
		if err := k.Load(file.Provider(path), dotenv.Parser()); err != nil {
			return nil, fmt.Errorf("failed to load env file: %v", err)
		}
		for key, value := range k.All() {
			integrationEnv = append(integrationEnv, fmt.Sprintf("%s=%v", key, value))
		}
	}
	return integrationEnv, nil
}

type color []int

var (
	green color = []int{0, 158, 84}
	blue  color = []int{28, 15, 209}
)

// printLogs prints the logs of the given container (stdout and stderr)
// Errors are sent to the errChan and the name of the container is sent to the endChan when the logs end
// This function is blocking
func printLogs(cli *client.Client, cont *StartResult, color color, errChan chan error, endChan chan string) {
	logs, err := cli.ContainerLogs(context.Background(), cont.ID,
		container.LogsOptions{ShowStdout: true, ShowStderr: true, Follow: true, Details: false})
	if err != nil {
		errChan <- err
		return
	}

	reader := bufio.NewReader(logs)
	for {
		// Discard the 8-byte header
		_, err := reader.Discard(8)
		if err != nil {
			if err == io.EOF {
				break
			}
			errChan <- err
			return
		}

		// Read one line
		line, err := reader.ReadString('\n')
		if err != nil {
			if err == io.EOF {
				break
			}
			errChan <- err
			return
		}

		// Print the line
		goTerminal.ColorRGBForeground(color[0], color[1], color[2])
		fmt.Printf("%s: ", cont.Name)
		goTerminal.Color256Foreground(15)
		fmt.Print(line)
	}
	endChan <- cont.Name
	return
}

var (
	flagStartValaccount = commoncmd.OptionFlag[config.ValaccountConfig]{
		Name:     "valaccount",
		Short:    "v",
		Usage:    "Name of the valaccount to run",
		Required: true,
	}
	flagStartEnvFile = commoncmd.StringFlag{
		Name:       "env-file",
		Short:      "e",
		Usage:      "Specify the path to an .env file which should be used when starting a binary",
		Required:   false,
		ValidateFn: commoncmd.ValidatePathExistsOrEmpty,
	}
	flagStartDebug = commoncmd.BoolFlag{
		Name:         "debug",
		Short:        "",
		Usage:        "Run the validator node in debug mode",
		DefaultValue: false,
	}
	flagStartVerbose = commoncmd.BoolFlag{
		Name:         "verbose",
		Usage:        "Show detailed build output",
		DefaultValue: false,
	}
	flagStartDetached = commoncmd.BoolFlag{
		Name:         "detached",
		Usage:        "Run the validator node in detached mode (no auto update)",
		DefaultValue: false,
	}
)

func start(cmd *cobra.Command, kyveClient *chain.KyveClient, cli *client.Client, valConfig config.ValaccountConfig, integrationEnv []string, debug bool, verbose bool, detached bool, errChan chan error, logEndChan chan string, exitChan chan interface{}, newVersionChan chan interface{}) (string, error) {
	response, err := kyveClient.QueryPool(valConfig.Pool)
	if err != nil {
		return "", fmt.Errorf("failed to query pool: %v", err)
	}
	pool := response.GetPool().Data

	if detached {
		fmt.Println("    Starting KYSOR (detached)...")
		fmt.Println("    Auto update during runtime is disabled in detached mode!")
	} else {
		fmt.Println("    Starting KYSOR...")
	}
	fmt.Printf("    Running on platform and architecture: %s - %s\n\n", runtime.GOOS, runtime.GOARCH)

	homeDir, err := config.GetHomeDir(cmd)
	if err != nil {
		return "", err
	}

	// Clone or pull the kyvejs repository
	repoDir := filepath.Join(homeDir, "kyvejs")
	repo, err := pullRepo(repoDir, false)
	if err != nil {
		return "", err
	}

	// Build images
	label := fmt.Sprintf("kysor-%s-pool-%d", config.GetConfigX().GetChainPrettyName(), pool.Id)
	protocol, integration, err := buildImages(repo, cli, pool, label, verbose)
	if err != nil {
		return "", fmt.Errorf("failed to build images: %v", err)
	}

	// Stop and remove existing containers
	err = tearDownContainers(cli, label)
	if err != nil {
		return "", err
	}

	// Start containers
	protocolContainer, integrationContainer, err := startContainers(cli, valConfig, pool, debug, protocol, integration, label, integrationEnv)
	if err != nil {
		return "", err
	}

	fmt.Println()
	if detached {
		fmt.Println("🔍  Use following commands to view the logs:")
		fmt.Print("    ")
		utils.PrintlnItalic(fmt.Sprintf("docker logs -f %s", integrationContainer.Name))
		fmt.Print("    ")
		utils.PrintlnItalic(fmt.Sprintf("docker logs -f %s", protocolContainer.Name))
	} else {
		// Print protocol logs
		go printLogs(cli, protocolContainer, green, errChan, logEndChan)

		// Print integration logs
		go printLogs(cli, integrationContainer, blue, errChan, logEndChan)

		// Check for new version
		go isNewVersionAvailable(kyveClient, valConfig.Pool, repoDir, newVersionChan, exitChan)
	}
	return label, nil
}

// isNewVersionAvailable checks if a new version is available and sends a signal to the newVersionChan if it is
// It also updates the local repository and pulls the latest changes
// This function is blocking
func isNewVersionAvailable(kyveClient *chain.KyveClient, poolId uint64, repoDir string, newVersionChan chan interface{}, exitChan chan interface{}) {
	var currentVersion string
	ticker := time.NewTicker(1 * time.Minute)
	defer ticker.Stop()

	for {
		_, err := pullRepo(repoDir, true)
		if err != nil {
			return
		}

		response, err := kyveClient.QueryPool(poolId)
		if err != nil {
			fmt.Printf("failed to query pool: %v\n", err)
		}
		newVersion := response.GetPool().Data.GetProtocol().GetVersion()
		if currentVersion == "" {
			currentVersion = newVersion
		}
		if newVersion != currentVersion {
			newVersionChan <- nil
			return
		}

		select {
		case <-exitChan:
			return
		case <-ticker.C:
			// Continue the loop
		}
	}
}

func startCmd() *cobra.Command {
	cmd := &cobra.Command{
		Use:     "start",
		Short:   "Start data validator",
		PreRunE: commoncmd.CombineFuncs(config.LoadConfigs, commoncmd.SetupInteractiveMode),
		RunE: func(cmd *cobra.Command, args []string) error {
			kyveClient, err := chain.NewKyveClient(config.GetConfigX(), config.ValaccountConfigs)
			if err != nil {
				return err
			}

			// Return if no valaccount exists
			flagStartValaccount.Options = config.ValaccountConfigOptions
			if len(flagStartValaccount.Options) == 0 {
				fmt.Println("No valaccount found. Create one with 'kysor valaccounts create'")
				return nil
			}

			// Valaccount config
			valaccOption, err := commoncmd.GetOptionFromPromptOrFlag(cmd, flagStartValaccount)
			if err != nil {
				return err
			}
			valConfig := valaccOption.Value()

			// Env vars
			integrationEnv, err := getIntegrationEnv(cmd)
			if err != nil {
				return err
			}

			// Debug
			debug, err := commoncmd.GetBoolFromPromptOrFlag(cmd, flagStartDebug)
			if err != nil {
				return err
			}

			// Verbose
			verbose, err := commoncmd.GetBoolFromPromptOrFlag(cmd, flagStartVerbose)
			if err != nil {
				return err
			}

			// Detached
			detached, err := commoncmd.GetBoolFromPromptOrFlag(cmd, flagStartDetached)
			if err != nil {
				return err
			}

			cli, err := client.NewClientWithOpts(client.WithAPIVersionNegotiation())
			if err != nil {
				return fmt.Errorf("failed to create docker client: %v", err)
			}
			//goland:noinspection GoUnhandledErrorResult
			defer cli.Close()

			errChan := make(chan error)              // async error channel
			logEndChan := make(chan string)          // docker logs ended
			exitChan := make(chan interface{})       // program exit's
			newVersionChan := make(chan interface{}) // new version is available

			// Detached 	-> start containers and forget about them
			// Not detached -> listen to signals and stop containers on signal
			//              -> listen to new version and restart containers on new version
			//   			-> listen to log end and throw error if log ends unexpectedly (which means the container died)
			label, err := start(cmd, kyveClient, cli, valConfig, integrationEnv, debug, verbose, detached, errChan, logEndChan, exitChan, newVersionChan)
			if err != nil {
				return err
			}
			if !detached {
				sigc := make(chan os.Signal, 1)
				signal.Notify(sigc,
					syscall.SIGHUP,
					syscall.SIGINT,
					syscall.SIGTERM,
					syscall.SIGQUIT,
				)
				isStopping := false

				// Cleanup containers on exit
				defer func() {
					// Send exit signal
					exitChan <- nil

					// Cleanup containers
					if err := tearDownContainers(cli, label); err != nil {
						fmt.Printf("failed to stop containers: %v\n", err)
					}
				}()

				// Enter loop
				for {
					select {
					case <-sigc:
						// Stop signal received, stop containers
						isStopping = true
						fmt.Println("\n🛑  Stopping KYSOR...")
						return nil
					case containerName := <-logEndChan:
						// Log ended, throw error if container is not supposed to stop
						if !isStopping {
							return fmt.Errorf("container %s stopped unexpected", containerName)
						}
					case <-newVersionChan:
						// New version available, restart containers
						isStopping = true
						fmt.Println("🔄  New version available, restarting KYSOR...")
						label, err = start(cmd, kyveClient, cli, valConfig, integrationEnv, debug, verbose, detached, errChan, logEndChan, exitChan, newVersionChan)
						isStopping = false
						if err != nil {
							return err
						}
					case err := <-errChan:
						// Error received, throw error
						if err != nil {
							return err
						}
					}
				}
			}
			return nil
		},
	}
	commoncmd.AddOptionFlags(cmd, []commoncmd.OptionFlag[config.ValaccountConfig]{flagStartValaccount})
	commoncmd.AddStringFlags(cmd, []commoncmd.StringFlag{flagStartEnvFile})
	commoncmd.AddBoolFlags(cmd, []commoncmd.BoolFlag{flagStartDebug, flagStartVerbose, flagStartDetached})
	return cmd
}

func init() {
	rootCmd.AddCommand(startCmd())
}
