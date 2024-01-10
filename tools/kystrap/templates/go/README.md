# {{ .name | ToTitle }} Runtime Server

This is the {{ .name | ToTitle }} runtime server.

## Development

### Requirements
- Docker
- Go
- Make (optional)

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

### Test the runtime

Start the runtime container and the kystrap container
```bash
docker compose up --build   # --build is only needed if you changed the runtime
```
Open another terminal and run
```bash
docker exec -it $(docker ps -qf "name={{ .name |ToLower }}-kystrap") ./kystrap test -a runtime:50051
```
