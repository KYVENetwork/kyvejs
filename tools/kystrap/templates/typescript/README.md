# {{ .name | ToTitle }} Runtime Server

This is the {{ .name | ToTitle }} runtime server.

## Usage

Setup
```bash
yarn install
```

Running the runtime
```bash
yarn start
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
