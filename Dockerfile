################## Build Stage 1 ##################
# Create a staging Docker image with build dependencies and compile the app
#################  Build Stage 1 #################
FROM node:lts AS build

# Set the architecture argument
ARG TARGETARCH

# Determine the binary architecture based on the target architecture and write it to a temporary file
RUN if [ "$TARGETARCH" = "arm64" ]; then \
      echo BINARYARCH="arm64" >> /etc/environment; \
    elif [ "$TARGETARCH" = "amd64" ]; then \
      echo BINARYARCH="x86" >> /etc/environment; \
    fi

# Set the working directory
WORKDIR /usr/src/app

# Copy necessary files for installing dependencies
COPY package.json yarn.lock lerna.json ./

# Install dependencies
RUN yarn install --frozen-lockfile

# Copy common files
COPY common ./common

# Build the docker core
RUN TARGET=latest-${TARGETOS}-${BINARYARCH} yarn run build:binaries:docker-core

################## Build Stage 2 ##################
#Create a slim runtime image with only the necessary files for execution
#################  Build Stage 2 #################
FROM node:slim AS runtime

# Export environment variable which is used in the code
ENV RUNTIME_CLIENT_ADDR=runtime:50051

# Set the working directory
WORKDIR /usr/src/app

# Copy the compiled output from the build stage
COPY --from=build /usr/src/app/common/docker/out/kyve* ./

# Set the command to run when the container starts
CMD ["./kyve"]
