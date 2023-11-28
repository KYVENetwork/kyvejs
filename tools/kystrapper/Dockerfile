# Build stage
FROM golang:1.21-alpine AS build

# Set work directory
WORKDIR /app

# Copy source files and download dependencies
COPY . .
RUN go mod download

# Build the Go app
RUN CGO_ENABLED=0 GOOS=linux go build -a -installsuffix cgo -o kystrap .

# Final stage to run the binary
FROM alpine:latest

WORKDIR /app

COPY --from=build /app/kystrap .

CMD ["./kystrap"]