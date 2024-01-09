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

Building the runtime binary
```bash
yarn build
```

## Usage with Docker

Building the Docker image
```bash
docker build -t kyve/{{ .name }} .
```

Running the runtime container
```bash
docker run --rm -p 50051:50051 kyve/{{ .name }}
```