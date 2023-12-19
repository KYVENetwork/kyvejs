FROM bufbuild/buf:latest as BUILDER
FROM node:20-alpine

RUN npm install -g ts-proto

# Create cache directory
RUN mkdir /.cache
RUN chmod 777 /.cache

COPY --from=BUILDER /usr/local/bin /usr/local/bin