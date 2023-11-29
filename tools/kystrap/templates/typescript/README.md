# {{ .name | ToTitle }} Runtime Server

This is the {{ .name | ToTitle }} runtime server.

## Usage

* Running the runtime
  ```bash
  yarn start
  ```

* Building the runtime binary
  ```bash
  yarn build
  ```

* Building the Docker image
  ```bash
  yarn build:docker
  ```

* Running the runtime container
  ```bash
  docker run -p 50051:50051 kyve/{{ .name }}
  ```


