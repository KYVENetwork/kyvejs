package bootstrap

import (
	"errors"
	"github.com/KYVENetwork/kyvejs/tools/kystrapper/types"
	"os"
	"path/filepath"
	"strings"
	"text/template"
)

const (
	templatesDir = "templates"
)

type templateData struct {
	Name      string
	GoVersion string
}

func newData(name string) *templateData {
	return &templateData{
		Name:      strings.ToLower(name),
		GoVersion: "1.21.4",
	}
}

func CreateIntegration(outputDir string, language types.Language, name string) error {
	// Get all files in the template folder
	templateDir := filepath.Join(templatesDir, strings.ToLower(language.String()))
	templateFiles, err := os.ReadDir(templateDir)
	if err != nil {
		return err
	}

	outputPath := filepath.Join(outputDir, name)

	// Check if the output directory already exists
	if _, err := os.Stat(outputPath); !os.IsNotExist(err) {
		return errors.New("integration already exists")
	}

	// Create the output directory
	err = os.MkdirAll(outputPath, os.ModePerm)
	if err != nil {
		return err
	}

	// Data for the templates
	data := newData(name)

	for _, fileInfo := range templateFiles {
		// Build the full path to the template file
		templatePath := filepath.Join(templateDir, fileInfo.Name())

		// Read the template file
		content, err := os.ReadFile(templatePath)
		if err != nil {
			return err
		}

		// Convert the file content to a string
		templateText := string(content)

		// Parse the template
		tmpl, err := template.New("").Parse(templateText)
		if err != nil {
			return err
		}

		// Create the output file
		outputFile, err := os.Create(filepath.Join(outputPath, fileInfo.Name()))
		if err != nil {
			return err
		}

		// Execute the template
		err = tmpl.Execute(outputFile, data)
		if err != nil {
			return err
		}
	}
	return nil
}
