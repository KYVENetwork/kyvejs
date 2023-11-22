################## Build Stage 1 ##################
# Create a staging Docker image with build dependencies and compile the app
#################  Build Stage 1 #################
FROM node:lts AS build

# Set the architecture argument
ARG TARGETARCH

# Set the working directory
WORKDIR /usr/src/app

# Copy necessary files for installing dependencies
COPY package.json tsconfig.json ./

# Install dependencies
RUN yarn install

# Copy common files
COPY ./src ./src

# Build the docker core
RUN yarn run build:binaries

################## Build Stage 2 ##################
# Create a slim runtime image with only the necessary files for execution
#################  Build Stage 2 #################
FROM node:slim AS runtime

# Set the working directory
WORKDIR /usr/src/app

# Copy the compiled output from the build stage
COPY --from=build /usr/src/app/out/protocol ./

# Set the command to run when the container starts
CMD ["./protocol"]
