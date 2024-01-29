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
	"github.com/spf13/cobra"
	"os"
	"path/filepath"
	"runtime"
	"strings"
)

var StartCmdConfig = types.CmdConfig{Name: "start", Short: "Start KYSOR"}

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

func getHigherVersion(old *kyveRef, ref *plumbing.Reference, path string, contraint version.Constraints) *kyveRef {
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
		if contraint != nil && !contraint.Check(newVersion) {
			// Ignore versions which don't match the constraint
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

func cloneRepo(pool *pooltypes.Pool) (*docker.Image, *docker.Image, error) {
	repoUrl := "https://github.com/KYVENetwork/kyvejs.git"
	repoDir := filepath.Join(config.GetConfigDir(), "kyvejs")

	var repo *git.Repository
	if _, err := os.Stat(repoDir); os.IsNotExist(err) {
		// Clone the given repository to the given directory
		fmt.Printf("📥  Cloning %s\n", repoUrl)
		repo, err = git.PlainClone(repoDir, false, &git.CloneOptions{
			URL:      repoUrl,
			Progress: os.Stdout,
			Mirror:   true,
			//NoCheckout: true,
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

	cli, err := client.NewClientWithOpts()
	if err != nil {
		return nil, nil, fmt.Errorf("failed to create docker client: %v", err)
	}
	//goland:noinspection GoUnhandledErrorResult
	defer cli.Close()

	images := map[kyveRef]docker.Image{
		*protocol: {
			Path: protocol.path,
			Tags: []string{fmt.Sprintf("%s:%s", protocol.name, protocol.ver.String())},
		},
		*integration: {
			Path: integration.path,
			Tags: []string{fmt.Sprintf("%s:%s", integration.name, integration.ver.String())},
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
			valConfig, err := utils.GetOptionFromPromptOrFlag(cmd, flagStartValaccount)
			if err != nil {
				return err
			}

			// Env file
			envFile, err := utils.GetStringFromPromptOrFlag(cmd, flagStartEnvFile)
			if err != nil {
				return err
			}

			// Debug
			debug, err := utils.GetBoolFromPromptOrFlag(cmd, flagStartDebug)
			if err != nil {
				return err
			}

			fmt.Println("Starting KYSOR...")
			fmt.Printf("Running on platform and architecture: %s - %s\n", runtime.GOOS, runtime.GOARCH)

			fmt.Println("Valaccount:", valConfig.Name())
			fmt.Println("Env file:", envFile)
			fmt.Println("Debug:", debug)

			response, err := kyveClient.QueryPool(valConfig.Value().Pool)
			if err != nil {
				return fmt.Errorf("failed to query pool: %v", err)
			}

			_, _, err = cloneRepo(response.GetPool().Data)
			if err != nil {
				return fmt.Errorf("failed to clone repository: %v", err)
			}

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
