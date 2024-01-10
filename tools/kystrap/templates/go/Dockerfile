# Build stage
FROM golang:{{ .lang.go.version.patch }} AS build

# Set work directory
WORKDIR /app

# Copy go.mod and go.sum files to download dependencies
COPY go.mod go.sum ./
RUN go mod download

# Copy source files
COPY Makefile *.go ./
COPY utils ./utils
COPY proto ./proto
COPY server ./server

# Build the Go app
RUN BINARY_NAME=kyve-runtime make build

# Final stage to run the binary
FROM ubuntu:latest

# Set the working directory
WORKDIR /app

# Copy the compiled binary from the build stage
COPY --from=build /app/build/kyve-runtime ./kyve-runtime

# Expose gRPC port
EXPOSE 50051

# Set the command to run when the container starts
CMD ["./kyve-runtime"]
