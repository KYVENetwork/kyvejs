# Build Stage 1
# This build created a staging docker image
#
FROM node:lts AS appbuild
WORKDIR /usr/src/app
COPY ./tendermint-grpc/package.json ./
COPY ./tendermint-grpc/tsconfig.json ./
RUN yarn install
COPY ./tendermint-grpc/src ./src
COPY ./docker/src/proto/runtime.proto ./src/proto/runtime.proto
RUN yarn run build:binaries

# Build Stage 2
# This build takes the production build from staging build
#
FROM node:slim AS runtime
WORKDIR /usr/src/app
COPY --from=appbuild /usr/src/app/out/kyve* ./
COPY --from=appbuild /usr/src/app/src/proto/runtime.proto ./proto/runtime.proto
EXPOSE 50051
CMD ["./kyve-linux-x64"]
