package main

import (
	"encoding/json"
	"fmt"
	"gopkg.in/yaml.v3"
	"net/http"
	"os"
)

func main() {
	yamlFile, err := os.ReadFile("testdata.yml")
	if err != nil {
		panic(err)
	}

	var testData map[string]interface{}
	err = yaml.Unmarshal(yamlFile, &testData)
	if err != nil {
		panic(err)
	}

	for key := range testData {
		// Create a new scope for key to avoid capturing loop variable
		func(key string) {
			http.HandleFunc("/"+key, func(w http.ResponseWriter, r *http.Request) {
				err := json.NewEncoder(w).Encode(testData[key])
				if err != nil {
					panic(err)
				}
			})
		}(key)
	}

	fmt.Println("Starting server at port 8080")
	if err := http.ListenAndServe(":8080", nil); err != nil {
		panic(err)
	}
}
