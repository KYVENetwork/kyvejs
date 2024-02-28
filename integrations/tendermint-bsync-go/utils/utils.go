package utils

import (
	"encoding/json"
	"io"
	"net/http"
)

type TendermintResult struct {
	Result json.RawMessage `json:"result"`
}


func GetFromUrl(url string) ([]byte, error) {
	resp, err := http.Get(url)
	if err != nil {
		return nil, err
	}
	//goland:noinspection ALL
	defer resp.Body.Close()

	return io.ReadAll(resp.Body)
}
