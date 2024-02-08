# Build stage
FROM golang:1.21-alpine AS build

# Set work directory
WORKDIR /app

# Copy go mod/sum files and download dependencies
COPY go.mod go.sum ./
RUN go mod download

# Copy source files
COPY cmd ./cmd
COPY main.go ./

# Build the Go app
RUN CGO_ENABLED=0 go build -a -installsuffix cgo -o kysor .

# Final stage to run the binary
FROM alpine:latest

# Set work directory
WORKDIR /app

# Copy the binary from the build stage
COPY --from=build /app/kysor .

ENTRYPOINT ["./kysor"]
