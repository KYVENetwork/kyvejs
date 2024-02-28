package utils

import (
	"io"
	"net/http"
)

func GetFromUrl(url string) ([]byte, error) {
	resp, err := http.Get(url)
	if err != nil {
		return nil, err
	}
	//goland:noinspection ALL
	defer resp.Body.Close()

	return io.ReadAll(resp.Body)
}
