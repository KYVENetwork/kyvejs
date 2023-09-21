# Build Stage 1
# This build created a staging docker image
#
FROM node:lts AS appbuild
WORKDIR /usr/src/app
COPY package.json ./
COPY tsconfig.json ./
RUN yarn install
COPY ./src ./src
RUN yarn run build:binaries

# Build Stage 2
# This build takes the production build from staging build
#
FROM node:slim AS runtime_arm64
WORKDIR /usr/src/app
COPY --from=appbuild /usr/src/app/out/kyve-linux-arm64 ./
COPY --from=appbuild /usr/src/app/src/runtime.proto ./
EXPOSE 50051
CMD ["./kyve-linux-arm64"]

FROM node:slim AS runtime_linux_x64
WORKDIR /usr/src/app
COPY --from=appbuild /usr/src/app/out/kyve-linux-x64 ./
COPY --from=appbuild /usr/src/app/src/runtime.proto ./
EXPOSE 50051
CMD ["./kyve-linux-x64"]

FROM node:slim AS runtime_macos_x64
WORKDIR /usr/src/app
COPY --from=appbuild /usr/src/app/out/kyve-macos-x64 ./
COPY --from=appbuild /usr/src/app/src/runtime.proto ./
EXPOSE 50051
CMD ["./kyve-macos-x64"]


