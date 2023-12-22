# {{ .name | ToTitle }} Runtime Server

This is the {{ .name | ToTitle }} runtime server.

## Usage

* Running the runtime::
    ```bash
      go run main.go
    ```

* Building the runtime binary::
    ```bash
      make build
    ```
  
* Building the Docker image::
    ```bash
      make docker-image
    ```

* Running the runtime container::

    ```bash
      make docker-run
    ```


