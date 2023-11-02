FROM bufbuild/buf:latest as BUILDER

RUN apk add --no-cache \
  nodejs \
  npm \
  git \
  make

RUN npm install -g ts-proto

COPY --from=BUILDER /usr/local/bin /usr/local/bin
