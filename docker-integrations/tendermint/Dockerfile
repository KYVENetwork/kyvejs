# Build Stage 1
# This build created a staging docker image
#
FROM node:lts AS appbuild
WORKDIR /usr/src/app
COPY ./tendermint/package.json ./
COPY ./tendermint/tsconfig.json ./
RUN yarn install
COPY ./tendermint/src ./src
RUN yarn run build:binaries

# Build Stage 2
# This build takes the production build from staging build

FROM node:slim AS runtime
WORKDIR /usr/src/app
COPY --from=appbuild /usr/src/app/out/kyve* ./
EXPOSE 50051
CMD ["./kyve-linux-x64"]
