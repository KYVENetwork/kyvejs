# Build Stage 1
# This build created a staging docker image
#
FROM node:lts AS appbuild
WORKDIR /usr/src/app
COPY . .
RUN yarn build:docker
RUN cd ./common/docker
RUN yarn run build:binaries

# Build Stage 2
# This build takes the production build from staging build

FROM node:slim AS runtime
ENV RUNTIME_SERVER_ADDR=runtime:50051
WORKDIR /usr/src/app
COPY --from=appbuild /usr/src/app/common/docker/out/kyve* ./
CMD ["./kyve-linux-x64"]
