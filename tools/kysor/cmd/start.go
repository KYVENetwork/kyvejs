package cmd

import (
	"context"
	"errors"
	"fmt"
	pooltypes "github.com/KYVENetwork/chain/x/pool/types"
	"github.com/KYVENetwork/kyvejs/tools/kysor/cmd/chain"
	"github.com/KYVENetwork/kyvejs/tools/kysor/cmd/config"
	"github.com/KYVENetwork/kyvejs/tools/kysor/cmd/types"
	"github.com/KYVENetwork/kyvejs/tools/kysor/cmd/utils"
	"github.com/KYVENetwork/kyvejs/tools/kysor/docker"
	"github.com/docker/docker/client"
	"github.com/go-git/go-git/v5"
	"github.com/go-git/go-git/v5/plumbing"
	"github.com/hashicorp/go-version"
	"github.com/knadh/koanf/parsers/dotenv"
	"github.com/knadh/koanf/providers/file"
	"github.com/knadh/koanf/v2"
	"github.com/mitchellh/go-homedir"
	"github.com/spf13/cobra"
	"os"
	"path/filepath"
	"runtime"
	"strings"
	"time"
)

var StartCmdConfig = types.CmdConfig{Name: "start", Short: "Start KYSOR"}

var globalCleanupLabel = "kysor-all"

var (
	flagStartValaccount = types.OptionFlag[config.ValaccountConfig]{
		Name:     "valaccount",
		Short:    "v",
		Usage:    "Name of the valaccount to run",
		Required: true,
	}
	flagStartEnvFile = types.StringFlag{
		Name:       "env-file",
		Short:      "e",
		Usage:      "Specify the path to an .env file which should be used when starting a binary",
		Required:   false,
		ValidateFn: utils.ValidatePathExistsOrEmpty,
	}
	flagStartDebug = types.BoolFlag{
		Name:         "debug",
		Short:        "",
		Usage:        "Run the validator node in debug mode",
		DefaultValue: false,
	}
)

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

// buildImagesFromGithub clones the kyvejs repository and builds the protocol and integration images
func buildImagesFromGithub(cli *client.Client, pool *pooltypes.Pool, label string) (*docker.Image, *docker.Image, error) {
	repoName := "github.com/KYVENetwork/kyvejs"
	repoUrl := fmt.Sprintf("https://%s.git", repoName)
	repoDir := filepath.Join(config.GetConfigDir(), "kyvejs")

	var repo *git.Repository
	if _, err := os.Stat(repoDir); os.IsNotExist(err) {
		// Clone the given repository to the given directory
		fmt.Printf("📥  Cloning %s\n", repoUrl)
		repo, err = git.PlainClone(repoDir, false, &git.CloneOptions{
			URL:      repoUrl,
			Progress: os.Stdout,
			Mirror:   true,
		})
		if err != nil {
			return nil, nil, err
		}
	} else {
		// Otherwise open the existing repository
		repo, err = git.PlainOpen(repoDir)
		if err != nil {
			return nil, nil, err
		}

		w, err := repo.Worktree()
		if err != nil {
			return nil, nil, err
		}

		// Pull the latest changes
		fmt.Println("⬇️  Pulling latest changes")
		err = w.Pull(&git.PullOptions{RemoteName: "origin", Force: true})
		if err != nil && !errors.Is(err, git.NoErrAlreadyUpToDate) && !errors.Is(err, git.ErrNonFastForwardUpdate) {
			return nil, nil, err
		}
	}

	protocol, integration, err := getRuntimeVersions(repo, pool, repoDir)
	if err != nil {
		return nil, nil, err
	}

	// Todo: remove this for final release
	protocol.ref = plumbing.NewHashReference(plumbing.NewBranchReferenceName("rapha/dockerization-e2etest"), plumbing.NewHash("34e7d141505997910666e7327ea8d9ae4971723a"))
	integration.ref = plumbing.NewHashReference(plumbing.NewBranchReferenceName("rapha/dockerization-e2etest"), plumbing.NewHash("34e7d141505997910666e7327ea8d9ae4971723a"))

	images := map[kyveRef]docker.Image{
		*protocol: {
			Path:   protocol.path,
			Tags:   []string{fmt.Sprintf("%s/%s:%s", strings.ToLower(repoName), protocol.name, protocol.ver.String())},
			Labels: map[string]string{globalCleanupLabel: "", label: ""},
		},
		*integration: {
			Path:   integration.path,
			Tags:   []string{fmt.Sprintf("%s/%s:%s", strings.ToLower(repoName), integration.name, integration.ver.String())},
			Labels: map[string]string{globalCleanupLabel: "", label: ""},
		},
	}

	w, err := repo.Worktree()
	if err != nil {
		return nil, nil, err
	}

	for kRef, img := range images {
		fmt.Printf("📦  Checkout %s\n", kRef.ref.Name().Short())

		err = w.Pull(&git.PullOptions{ReferenceName: kRef.ref.Name(), Force: true})
		if err != nil && !errors.Is(err, git.NoErrAlreadyUpToDate) {
			return nil, nil, err
		}

		err := w.Checkout(&git.CheckoutOptions{
			Hash:  kRef.ref.Hash(),
			Force: true,
		})
		if err != nil {
			return nil, nil, err
		}

		fmt.Printf("🏗️ Building %s ...\n", img.Tags[0])
		err = docker.BuildImage(context.Background(), cli, img)
		if err != nil {
			return nil, nil, err
		}
	}
	p := images[*protocol]
	i := images[*integration]
	return &p, &i, nil
}

// startContainers starts the protocol and integration containers
func startContainers(cli *client.Client, valConfig config.ValaccountConfig, pool *pooltypes.Pool, debug bool, protocol *docker.Image, integration *docker.Image, label string, integrationEnv []string) error {
	protocolName := fmt.Sprintf("kysor-%s", protocol.TagsLastPartWithoutVersion()[0])
	integrationName := fmt.Sprintf("kysor-%s", integration.TagsLastPartWithoutVersion()[0])

	ctx, cancel := context.WithTimeout(context.Background(), time.Second*30)
	defer cancel()

	env, err := docker.CreateProtocolEnv(docker.ProtocolEnv{
		Valaccount:  valConfig.Valaccount,
		RpcAddress:  config.Config.RPC,
		RestAddress: config.Config.REST,
		Host:        integrationName,
		PoolId:      pool.Id,
		Debug:       debug,
		ChainId:     "kaon-1",
	})
	if err != nil {
		return err
	}

	err = docker.CreateNetwork(ctx, cli, docker.NetworkConfig{
		Name:   label,
		Labels: map[string]string{globalCleanupLabel: "", label: ""},
	})
	if err != nil {
		return err
	}

	pConfig := docker.ContainerConfig{
		Image:   protocol.Tags[0],
		Name:    protocolName,
		Network: label,
		Env:     env,
	}

	iConfig := docker.ContainerConfig{
		Image:   integration.Tags[0],
		Name:    integrationName,
		Network: label,
		Env:     integrationEnv,
	}

	_, err = docker.StartContainer(ctx, cli, pConfig)
	if err != nil {
		return err
	}

	_, err = docker.StartContainer(ctx, cli, iConfig)
	if err != nil {
		return err
	}
	return nil
}

func startCmd() *cobra.Command {
	cmd := &cobra.Command{
		Use:     StartCmdConfig.Name,
		Short:   StartCmdConfig.Short,
		PreRunE: utils.CombineFuncs(utils.SetupInteractiveMode, utils.CheckIfInitialized),
		RunE: func(cmd *cobra.Command, args []string) error {
			kyveClient, err := chain.NewKyveClient(config.Config.RPC)
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
			valaccOption, err := utils.GetOptionFromPromptOrFlag(cmd, flagStartValaccount)
			if err != nil {
				return err
			}
			valConfig := valaccOption.Value()

			// Env file
			var integrationEnv []string
			envFile, err := utils.GetStringFromPromptOrFlag(cmd, flagStartEnvFile)
			if err != nil {
				return err
			}
			if envFile != "" {
				path, err := homedir.Expand(envFile)
				if err != nil {
					return err
				}
				var k = koanf.New(".")
				if err := k.Load(file.Provider(path), dotenv.Parser()); err != nil {
					return fmt.Errorf("failed to load env file: %v", err)
				}
				for key, value := range k.All() {
					integrationEnv = append(integrationEnv, fmt.Sprintf("%s=%v", key, value))
				}
			}

			// Debug
			debug, err := utils.GetBoolFromPromptOrFlag(cmd, flagStartDebug)
			if err != nil {
				return err
			}

			response, err := kyveClient.QueryPool(valConfig.Pool)
			if err != nil {
				return fmt.Errorf("failed to query pool: %v", err)
			}
			pool := response.GetPool().Data

			cli, err := client.NewClientWithOpts()
			if err != nil {
				return fmt.Errorf("failed to create docker client: %v", err)
			}
			//goland:noinspection GoUnhandledErrorResult
			defer cli.Close()

			fmt.Println("Starting KYSOR...")
			fmt.Printf("Running on platform and architecture: %s - %s\n\n", runtime.GOOS, runtime.GOARCH)

			label := fmt.Sprintf("kysor-pool-%d", pool.Id)

			protocol, integration, err := buildImagesFromGithub(cli, pool, label)
			if err != nil {
				return fmt.Errorf("failed to clone repository: %v", err)
			}

			err = tearDownContainers(cli, label)
			if err != nil {
				return err
			}

			err = startContainers(cli, valConfig, pool, debug, protocol, integration, label, integrationEnv)
			if err != nil {
				return err
			}
			fmt.Println("✅   KYSOR started successfully")
			return nil
		},
	}
	utils.AddOptionFlags(cmd, []types.OptionFlag[config.ValaccountConfig]{flagStartValaccount})
	utils.AddStringFlags(cmd, []types.StringFlag{flagStartEnvFile})
	utils.AddBoolFlags(cmd, []types.BoolFlag{flagStartDebug})
	return cmd
}

func init() {
	rootCmd.AddCommand(startCmd())
}
