package bootstrap

import (
	"errors"
	"fmt"
	"github.com/KYVENetwork/kyvejs/tools/kystrap/types"
	"github.com/spf13/viper"
	"golang.org/x/text/cases"
	"golang.org/x/text/language"
	"os"
	"path/filepath"
	"strings"
	"text/template"
)

var funcMap = template.FuncMap{
	"ToUpper": strings.ToUpper,                      // THIS-here is an example -> THIS-HERE IS AN EXAMPLE
	"ToLower": strings.ToLower,                      // THIS-here is an example -> this-here is an example
	"ToTitle": cases.Title(language.English).String, // THIS-here is an example -> This-Here Is An Example
	"ToPascal": func(s string) string { // THIS-here is an example -> ThisHereIsAnExample
		// remove dashes and underscores
		s = strings.ReplaceAll(s, "-", " ")
		s = strings.ReplaceAll(s, "_", " ")

		// convert to title case
		s = cases.Title(language.English).String(s)

		// remove spaces
		return strings.ReplaceAll(s, " ", "")
	},
}

func readConfig(name string) error {
	viper.SetConfigName(types.TemplateStringFile)
	viper.AddConfigPath(".")
	if err := viper.ReadInConfig(); err != nil {
		return err
	}
	viper.Set("name", name)
	return nil
}

func createFile(path string, outputPath string, data map[string]any, fileInfo os.DirEntry) error {
	// Check if the file is a directory
	if fileInfo.IsDir() {
		// Create the directory in the output path
		return os.MkdirAll(outputPath, os.ModePerm)
	}

	// Read the template file
	content, err := os.ReadFile(path)
	if err != nil {
		return err
	}

	// Parse the template
	tmpl, err := template.New("").Funcs(funcMap).Parse(string(content))
	if err != nil {
		return errors.New(fmt.Sprintf("failed to parse template for file %s with error:\n%s", fileInfo.Name(), err.Error()))
	}

	// Create the output file
	outputFile, err := os.Create(outputPath)
	if err != nil {
		return errors.New(fmt.Sprintf("failed to create file %s with error:\n%s", fileInfo.Name(), err.Error()))
	}
	//goland:noinspection GoUnhandledErrorResult
	defer outputFile.Close()

	// Execute the template
	err = tmpl.Execute(outputFile, data)
	if err != nil {
		return errors.New(fmt.Sprintf("failed to create template for file %s with error:\n%s", fileInfo.Name(), err.Error()))
	}
	return nil
}

func CreateIntegration(outputDir string, language types.Language, name string) error {
	// Read the config file
	if err := readConfig(name); err != nil {
		return err
	}

	// Assemble paths
	templateDir := filepath.Join(types.TemplatesDir, strings.ToLower(language.String()))
	outputPath := filepath.Join(outputDir, name)

	// Check if the output directory already exists
	if _, err := os.Stat(outputPath); !os.IsNotExist(err) {
		return errors.New("integration already exists")
	}

	// Create the output directory
	err := os.MkdirAll(outputPath, os.ModePerm)
	if err != nil {
		return err
	}

	// Data for the templates
	data := viper.GetViper().AllSettings()

	// Walk through the template directory to get all files
	return filepath.WalkDir(templateDir, func(path string, fileInfo os.DirEntry, err error) error {
		if err != nil {
			return err
		}
		// Remove the template directory from the path
		filePath := strings.Replace(path, templateDir, "", 1)
		newPath := filepath.Join(outputPath, filePath)

		// Create file
		return createFile(path, newPath, data, fileInfo)
	})
}
