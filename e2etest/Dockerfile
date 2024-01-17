# Build stage
FROM golang:1.21-alpine AS build

# Set work directory
WORKDIR /app

# Copy testapi
COPY testapi ./testapi

# Copy go mod/sum files and download dependencies
COPY go.mod go.sum go.work go.work.sum ./
RUN go mod download

# Copy source files
COPY tools ./tools
COPY utils ./utils
COPY e2e_test.go ./

RUN CGO_ENABLED=0 GOOS=linux go test -c -a -installsuffix cgo -o e2etest .

# Final stage to run the binary
FROM docker:dind

# Set work directory
WORKDIR /app

# Copy the binary and testapi from the build stage
COPY --from=build /app/e2etest .
COPY --from=build /app/testapi ./testapi
