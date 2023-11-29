# Build stage
FROM golang:1.21 AS build

# Set work directory
WORKDIR /app

# Copy go.mod and go.sum files to download dependencies
COPY go.mod go.sum Makefile ./
RUN go mod download

# Copy source files
COPY protos ./protos
COPY pkg ./pkg

# Build the Go app
RUN BINARY_NAME=kyve-runtime make build

# Final stage
FROM ubuntu:latest

# Copy the compiled binary from the build stage
COPY --from=build /app/cmd/kyve-runtime /app/kyve-runtime

# Expose gRPC port
EXPOSE 50051

# Run the server
CMD ["/app/kyve-runtime"]
