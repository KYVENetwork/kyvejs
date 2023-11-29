FROM bufbuild/buf:latest as BUF_BUILDER

FROM golang:1.21.4-alpine as GO_BUILDER

RUN go install google.golang.org/protobuf/cmd/protoc-gen-go@v1.31.0
RUN go install google.golang.org/grpc/cmd/protoc-gen-go-grpc@v1.3.0

FROM node:20-alpine

RUN npm install -g ts-proto

COPY --from=BUF_BUILDER /usr/local/bin /usr/local/bin
COPY --from=GO_BUILDER /go/bin/* /usr/local/bin/