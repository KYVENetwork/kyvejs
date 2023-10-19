FROM bufbuild/buf:latest as BUILDER
FROM node:20-alpine

RUN npm install -g ts-proto

COPY --from=BUILDER /usr/local/bin /usr/local/bin
