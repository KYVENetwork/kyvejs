package main

import (
	"encoding/json"
	"fmt"
	"net/http"
	"os"
	"strings"
)

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

func (de DataEntry) isList() bool {
	return de.DataType == List
}

func (de DataEntry) isObject() bool {
	return de.DataType == Object
}

func (e Endpoint) hasSingleDataEntry() bool {
	return len(*e.Data) == 1
}

func (e Endpoint) Path() string {
	if e.hasSingleDataEntry() {
		return fmt.Sprintf("/%s", e.basePath)
	}
	for _, dataEntry := range *e.Data {
		if dataEntry.HasQueryParam {
			return fmt.Sprintf("/%s", e.basePath)
		}
	}
	return fmt.Sprintf("/%s/", e.basePath)
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

func readEndpoints() ([]Endpoint, error) {
	var endpoints []Endpoint

	dir, err := os.ReadDir("api")
	if err != nil {
		return nil, err
	}
	for _, d := range dir {
		if d.Type().IsDir() {
			subdir, err := os.ReadDir("api/" + d.Name())
			if err != nil {
				return nil, err
			}
			for _, f := range subdir {
				if f.Type().IsRegular() {
					split := strings.Split(f.Name(), ".")
					if split[len(split)-1] != "json" {
						continue
					}
					key := split[0]

					file, err := os.ReadFile("api/" + d.Name() + "/" + f.Name())
					if err != nil {
						return nil, err
					}

					data, dt, err := unmarshalJSON(file)
					if err != nil {
						return nil, err
					}

					addToEndpoints(&endpoints, d.Name(), DataEntry{
						Key:           key,
						Data:          data,
						DataType:      dt,
						HasQueryParam: strings.HasPrefix(key, "?"),
					})
				}
			}
		}
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
							fmt.Println(fmt.Sprintf("Sending data for %s%s", endpoint.Path(), key))
							err := json.NewEncoder(w).Encode(entry.Data)
							if err != nil {
								panic(err)
							}
							return
						}
					}
				}

				// Send not found
				w.WriteHeader(http.StatusNotFound)
			})
		}(endpoint)
	}

	fmt.Println("Starting server at port 8080")
	if err := http.ListenAndServe(":8080", nil); err != nil {
		panic(err)
	}
}
