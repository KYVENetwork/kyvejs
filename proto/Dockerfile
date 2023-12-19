###################################################################################
# Buf.build image that contains buf cli
###################################################################################
FROM bufbuild/buf:latest as BUF_BUILDER

###################################################################################
# Go image that contains go plugins for protoc
###################################################################################
FROM golang:1.21.4-alpine as GO_BUILDER

# Install protoc-gen-go for plugin `go` in buf.gen.yaml
RUN go install google.golang.org/protobuf/cmd/protoc-gen-go@v1.31.0

# Install protoc-gen-go-grpc for plugin `go-grpc` in buf.gen.yaml
RUN go install google.golang.org/grpc/cmd/protoc-gen-go-grpc@v1.3.0

###################################################################################
# Python/Nodejs image that contains python/typescript plugins for protoc
###################################################################################
FROM nikolaik/python-nodejs:python3.12-nodejs21

# Install ts-proto for plugin `ts_proto` in buf.gen.yaml
RUN npm install -g ts-proto

# Install betterproto for plugin `python_betterproto` in buf.gen.yaml
# Use a beta version of betterproto because 2.0.0 is not released yet
# -> https://github.com/danielgtaylor/python-betterproto
RUN python -m pip install "betterproto[compiler]==2.0.0b6"

# Create cache directory
RUN mkdir /.cache
RUN chmod 777 /.cache

COPY --from=BUF_BUILDER /usr/local/bin /usr/local/bin
COPY --from=GO_BUILDER /go/bin/* /usr/local/bin/
