# Build stage
FROM golang:1.21-alpine AS build

# Set work directory
WORKDIR /app

# Copy go mod/sum files and download dependencies
COPY go.mod go.sum ./
RUN go mod download

# Copy source files
COPY . .

# Build the Go app
RUN CGO_ENABLED=0 GOOS=linux go build -a -installsuffix cgo -o kystrap .

# Final stage to run the binary
FROM alpine:latest

# Set work directory
WORKDIR /app

# Copy the binary and template files from the build stage
COPY --from=build /app/kystrap .
COPY ./templates /app/templates
COPY ./template-strings.yml /app/template-strings.yml

ENTRYPOINT ["./kystrap"]
