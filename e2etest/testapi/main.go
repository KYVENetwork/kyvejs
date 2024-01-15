package main

import (
	"encoding/json"
	"fmt"
	"net/http"
	"os"
	"strings"
)

const dataDir = "api"

type DataType string

const (
	Object DataType = "object"
	List   DataType = "list"
)

type DataEntry struct {
	Key  string
	Data interface{}
	DataType
	HasQueryParam bool
}

type Endpoint struct {
	basePath string
	Data     *[]DataEntry
}

func (e Endpoint) hasSingleDataEntry() bool {
	return len(*e.Data) == 1
}

func (e Endpoint) Path() string {
	path := strings.TrimPrefix(e.basePath, dataDir)
	if e.hasSingleDataEntry() {
		return path
	}
	for _, dataEntry := range *e.Data {
		if dataEntry.HasQueryParam {
			return path
		}
	}
	return fmt.Sprintf("%s/", path)
}

func (e Endpoint) CheckConsistency() error {
	var hasQueryParam bool
	var hasNoQueryParam bool
	for _, dataEntry := range *e.Data {
		if dataEntry.HasQueryParam {
			hasQueryParam = true
		} else {
			hasNoQueryParam = true
		}
	}
	if hasQueryParam && hasNoQueryParam {
		return fmt.Errorf("endpoint %s has both data entries with and without query param", e.basePath)
	}
	return nil
}

func unmarshalJSON(file []byte) (interface{}, DataType, error) {
	var data map[string]interface{}
	err := json.Unmarshal(file, &data)
	if err != nil {
		var listData []interface{}
		if json.Unmarshal(file, &listData) != nil {
			return nil, Object, err
		}
		return listData, List, nil
	}
	return data, Object, nil
}

func addToEndpoints(endpoints *[]Endpoint, path string, dataEntry DataEntry) {
	for _, endpoint := range *endpoints {
		if endpoint.basePath == path {
			*endpoint.Data = append(*endpoint.Data, dataEntry)
			return
		}
	}
	*endpoints = append(*endpoints, Endpoint{basePath: path, Data: &[]DataEntry{dataEntry}})
}

func readDirRecursively(path string, endpoints *[]Endpoint) error {
	dir, err := os.ReadDir(path)
	if err != nil {
		return err
	}
	for _, d := range dir {
		fullPath := path + "/" + d.Name()
		if d.Type().IsDir() {
			err := readDirRecursively(fullPath, endpoints)
			if err != nil {
				return err
			}
		} else if d.Type().IsRegular() {
			split := strings.Split(d.Name(), ".")
			if split[len(split)-1] != "json" {
				continue
			}
			key := split[0]

			file, err := os.ReadFile(fullPath)
			if err != nil {
				return err
			}

			data, dt, err := unmarshalJSON(file)
			if err != nil {
				return err
			}

			addToEndpoints(endpoints, path, DataEntry{
				Key:           key,
				Data:          data,
				DataType:      dt,
				HasQueryParam: strings.HasPrefix(key, "?"),
			})
		}
	}
	return nil
}

func readEndpoints() ([]Endpoint, error) {
	var endpoints []Endpoint

	err := readDirRecursively(dataDir, &endpoints)
	if err != nil {
		return nil, err
	}

	for _, endpoint := range endpoints {
		err := endpoint.CheckConsistency()
		if err != nil {
			return nil, err
		}
	}

	return endpoints, nil
}

func main() {
	endpoints, err := readEndpoints()
	if err != nil {
		panic(err)
	}

	// Create rest endpoints
	for _, endpoint := range endpoints {
		func(endpoint Endpoint) {
			http.HandleFunc(endpoint.Path(), func(w http.ResponseWriter, r *http.Request) {
				query := r.URL.Query()
				var keys []string

				if endpoint.hasSingleDataEntry() {
					// If the endpoint is a single object, we can just return the data
					data := *endpoint.Data
					keys = append(keys, data[0].Key)
				} else if len(query) == 0 {
					// If no query parameters are provided, we use the last part of the path as the key
					split := strings.Split(r.URL.Path, "/")
					keys = append(keys, split[len(split)-1])
				} else {
					// If query parameters are provided, we use them as the key
					for k, v := range query {
						keys = append(keys, fmt.Sprintf("?%s=%s", k, v[0]))
					}
				}

				// Find the data entry with the matching key
				for _, key := range keys {
					for _, entry := range *endpoint.Data {
						if entry.Key == key {
							if endpoint.hasSingleDataEntry() {
								fmt.Printf("Sending data for %s\n", endpoint.Path())
							} else {
								fmt.Printf("Sending data for %s/%s\n", endpoint.Path(), strings.Join(keys, ", "))
							}
							err := json.NewEncoder(w).Encode(entry.Data)
							if err != nil {
								panic(err)
							}
							return
						}
					}
				}

				if endpoint.hasSingleDataEntry() {
					fmt.Printf("No data found for %s\n", endpoint.Path())
				} else {
					fmt.Printf("No data found for %s/%s\n", endpoint.Path(), strings.Join(keys, ", "))
				}

				// Send not found
				w.WriteHeader(http.StatusNotFound)
				_, _ = w.Write([]byte("404: Page not found"))
			})
		}(endpoint)
	}

	// Add default handler
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		fmt.Printf("No endpoint registered for %s\n", r.URL.Path)

		// Send not found
		w.WriteHeader(http.StatusNotFound)
		_, _ = w.Write([]byte("404: Page not found"))
	})

	// Print server info
	fmt.Println("Starting server on http://localhost:8080\n\nExposed endpoints:")
	for _, endpoint := range endpoints {
		fmt.Printf("http://localhost:8080%s\n", endpoint.Path())
		if !endpoint.hasSingleDataEntry() {
			var keys []string
			for _, dataEntry := range *endpoint.Data {
				keys = append(keys, dataEntry.Key)
			}
			fmt.Printf("  %s\n", strings.Join(keys, " "))
		}
		fmt.Println()
	}

	// Start server
	if err := http.ListenAndServe(":8080", nil); err != nil {
		panic(err)
	}
}
