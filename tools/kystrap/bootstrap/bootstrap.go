package bootstrap

import (
	"errors"
	"fmt"
	"github.com/KYVENetwork/kyvejs/tools/kystrap/types"
	"github.com/spf13/viper"
	"os"
	"path/filepath"
	"strings"
	"text/template"
)

func readConfig(name string) error {
	viper.SetConfigName(types.TemplateStringFile)
	viper.AddConfigPath(".")
	if err := viper.ReadInConfig(); err != nil {
		return err
	}
	viper.Set("name", name)
	return nil
}

func CreateIntegration(outputDir string, language types.Language, name string) error {
	// Read the config file
	if err := readConfig(name); err != nil {
		return err
	}

	// Get all files in the template folder
	templateDir := filepath.Join(types.TemplatesDir, strings.ToLower(language.String()))
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
	data := viper.GetViper().AllSettings()

	for _, fileInfo := range templateFiles {
		// Build the full path to the template file
		templatePath := filepath.Join(templateDir, fileInfo.Name())

		// Check if the file is a directory
		if fileInfo.IsDir() {
			// Create the directory in the output folder
			err = os.MkdirAll(filepath.Join(outputPath, fileInfo.Name()), os.ModePerm)
			if err != nil {
				return err
			}
			continue
		}

		// Read the template file
		content, err := os.ReadFile(templatePath)
		if err != nil {
			return err
		}

		// Parse the template
		tmpl, err := template.New("").Parse(string(content))
		if err != nil {
			return errors.New(fmt.Sprintf("failed to parse template for file %s with error:\n%s", fileInfo.Name(), err.Error()))
		}

		// Create the output file
		outputFile, err := os.Create(filepath.Join(outputPath, fileInfo.Name()))
		if err != nil {
			return err
		}

		// Execute the template
		err = tmpl.Execute(outputFile, data)
		if err != nil {
			return errors.New(fmt.Sprintf("failed to create template for file %s with error:\n%s", fileInfo.Name(), err.Error()))
		}
	}
	return nil
}
