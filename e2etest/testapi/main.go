package main

import (
	"encoding/json"
	"fmt"
	"net/http"
	"os"
	"strings"
)

type DataEntry struct {
	Key      string
	KeyValue string
	Data     interface{}
}

type Endpoint struct {
	Name string
	Data []DataEntry
}

func readEndpoints() ([]Endpoint, error) {
	var endpoints []Endpoint

	dir, err := os.ReadDir("api")
	if err != nil {
		return nil, err
	}
	for _, d := range dir {
		if d.Type().IsDir() {
			endpoint := Endpoint{Name: d.Name(), Data: []DataEntry{}}
			subdir, err := os.ReadDir("api/" + d.Name())
			if err != nil {
				return nil, err
			}
			for _, f := range subdir {
				if f.Type().IsRegular() {
					split := strings.Split(f.Name(), "_")
					if len(split) != 2 {
						return nil, fmt.Errorf("invalid file name %s -> must have the schema keyname_keyvalue.json", f.Name())
					}
					keyname := split[0]
					keyvalue := strings.Split(split[1], ".")[0]
					file, err := os.ReadFile("api/" + d.Name() + "/" + f.Name())
					if err != nil {
						return nil, err
					}

					var data map[string]interface{}
					err = json.Unmarshal(file, &data)
					if err != nil {
						return nil, err
					}

					endpoint.Data = append(endpoint.Data, DataEntry{Key: keyname, KeyValue: keyvalue, Data: data})
				}
			}
			endpoints = append(endpoints, endpoint)
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
			http.HandleFunc("/"+endpoint.Name, func(w http.ResponseWriter, r *http.Request) {
				// Get all query parameters
				query := r.URL.Query()
				if len(query) == 0 {
					// Send bad request
					w.WriteHeader(http.StatusBadRequest)
					return
				}
				for k, v := range query {
					for _, entry := range endpoint.Data {
						if entry.Key == k && entry.KeyValue == v[0] {
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
