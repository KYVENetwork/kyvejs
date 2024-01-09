# {{ .name | ToTitle }} Runtime Server

This is the {{ .name | ToTitle }} runtime server.

## Requirements
- Make
- Docker
- Go (only for development)

## Usage

Setup
```bash
go mod tidy
```

Running the runtime
```bash
go run main.go
```

Building the runtime binary
```bash
make build
```
  
## Usage with Docker

Building the Docker image
```bash
make docker-image
```

Running the runtime container
```bash
make docker-run
```
