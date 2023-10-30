FROM bufbuild/buf:latest as BUILDER
FROM node:20-alpine

RUN npm install -g ts-proto

COPY --from=BUILDER /usr/local/bin /usr/local/bin

# Inject user id and group id to avoid permission issues
ARG USER_ID=1000
ARG USER_GID=1000

# Create user and group if they don't exist
RUN if ! getent group $USER_GID; then \
  addgroup -g $USER_GID mygroup; \
fi

RUN if ! getent passwd $USER_ID; then \
  adduser -D -u $USER_ID -G mygroup myuser; \
fi

# Change to user
USER $USER_ID
