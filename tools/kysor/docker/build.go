package docker

import (
	"bufio"
	"context"
	"encoding/json"
	"errors"
	"fmt"
	"github.com/docker/docker/api/types"
	"github.com/docker/docker/client"
	"github.com/docker/docker/pkg/archive"
	"github.com/schollz/progressbar/v3"
	"io"
	"os"
	"path/filepath"
	"regexp"
	"strconv"
	"strings"
)

type Image struct {
	Path   string
	Tags   []string
	Labels map[string]string
}

func (i Image) TagsWithoutVersion() []string {
	var result []string
	for _, tag := range i.Tags {
		result = append(result, tag[:strings.LastIndex(tag, ":")])
	}
	return result
}

func (i Image) TagsLastPartWithoutVersion() []string {
	var result []string
	for _, tag := range i.TagsWithoutVersion() {
		result = append(result, tag[strings.LastIndex(tag, "/")+1:])
	}
	return result
}

type buildLine struct {
	Stream      string      `json:"stream"`
	Aux         aux         `json:"aux"`
	Error       string      `json:"error"`
	ErrorDetail errorDetail `json:"errorDetail"`
}

type aux struct {
	ID string `json:"id"`
}

type errorDetail struct {
	Message string `json:"message"`
}

func (b *buildLine) String() string {
	if b.Error != "" {
		return b.Error
	}
	if b.Aux.ID != "" {
		return fmt.Sprintf("ID: %s\n", b.Aux.ID)
	}
	return b.Stream
}

var re = regexp.MustCompile(`Step (\d+)/(\d+)`)

// Progress returns true if the line contains a step output (ex: Step 1/10), the current step and the total steps
func (b *buildLine) Progress() (bool, int, int) {
	if b.Stream != "" {
		matches := re.FindStringSubmatch(b.Stream)

		if len(matches) < 3 {
			return false, 0, 0
		}

		step, err := strconv.Atoi(matches[1])
		if err != nil {
			return false, 0, 0
		}

		total, err := strconv.Atoi(matches[2])
		if err != nil {
			return false, 0, 0
		}
		return true, step, total
	}
	return false, 0, 0
}

type OutputOptions struct {
	ShowOnlyProgress bool         // If true, only the progress bar will be printed
	PrintFn          func(string) // If not nil, this function will be used to print the output
}

func printProgress(bar *progressbar.ProgressBar, line *buildLine) *progressbar.ProgressBar {
	hasProgress, step, total := line.Progress()
	if hasProgress {
		//fmt.Printf("hasProgress: %v, step: %d, total: %d\n", hasProgress, step, total)
		if bar == nil {
			bar = progressbar.Default(int64(total))
		}
		//fmt.Printf("Setting bar to %d\n", step)
		err := bar.Set(step)
		if err != nil {
			fmt.Println(err)
		}
	}
	return bar
}

func printBuild(rd io.Reader, options OutputOptions) error {
	scanner := bufio.NewScanner(rd)
	var progressBar *progressbar.ProgressBar
	for scanner.Scan() {
		lastLine := scanner.Text()

		line := &buildLine{}
		err := json.Unmarshal([]byte(lastLine), line)
		if err != nil {
			return err
		}
		if line.Error != "" {
			return errors.New(line.Error)
		}

		if options.ShowOnlyProgress {
			progressBar = printProgress(progressBar, line)
		} else if options.PrintFn != nil {
			options.PrintFn(line.String())
		}
	}

	if err := scanner.Err(); err != nil {
		return err
	}

	return nil
}

func BuildImage(ctx context.Context, dockerClient *client.Client, image Image, outputOptions OutputOptions) error {
	path, err := filepath.Abs(image.Path)
	if err != nil {
		return err
	}
	if _, err := os.Stat(path); os.IsNotExist(err) {
		return fmt.Errorf("path %s does not exist", path)
	}

	tar, err := archive.TarWithOptions(path, &archive.TarOptions{})
	if err != nil {
		return err
	}

	opts := types.ImageBuildOptions{
		Dockerfile: "Dockerfile",
		Tags:       image.Tags,
		Remove:     true,
		Labels:     image.Labels,
	}
	res, err := dockerClient.ImageBuild(ctx, tar, opts)
	if err != nil {
		return err
	}

	//goland:noinspection GoUnhandledErrorResult
	defer res.Body.Close()

	err = printBuild(res.Body, outputOptions)
	if err != nil {
		return err
	}

	return nil
}

func BuildImageAsync(ctx context.Context, dockerClient *client.Client, image Image, errCh chan<- error, outputOptions OutputOptions) {
	go func() {
		err := BuildImage(ctx, dockerClient, image, outputOptions)
		errCh <- err
	}()
}
