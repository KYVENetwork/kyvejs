package utils

import (
	"encoding/json"
	"io"
	"net/http"
)

type TendermintResult struct {
	Result json.RawMessage `json:"result"`
}


func GetResultFromUrl(url string) ([]byte, error) {
	resp, err := http.Get(url)
	if err != nil {
		return nil, err
	}
	//goland:noinspection ALL
	defer resp.Body.Close()

	data, err := io.ReadAll(resp.Body)
	if err != nil {
		return nil, err
	}

	var result TendermintResult
	if err := json.Unmarshal(data, &result); err != nil {
		return nil, err
	}

	return result.Result, nil
}

func GetJsonFromUrl(url string) (map[string]interface{}, error) {
	resp, err := http.Get(url)
	if err != nil {
		return nil, err
	}
	//goland:noinspection ALL
	defer resp.Body.Close()

	var data map[string]interface{}
	err = json.NewDecoder(resp.Body).Decode(&data)
	if err != nil {
		return nil, err
	}

	return data, nil
}
