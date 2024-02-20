################## Build Stage 1 ##################
# Create a staging Docker image with build dependencies and compile the app
#################  Build Stage 1 #################
FROM node:lts AS build

# Set the working directory
WORKDIR /usr/src/app

# Copy necessary files for installing dependencies
COPY package.json tsconfig.json ./

# Install dependencies
RUN yarn install

# Copy source files
COPY ./src ./src
COPY Makefile ./

# Build binary
RUN BINARY_NAME=kyve-runtime make build

################## Build Stage 2 ##################
# Create a slim runtime image with only the necessary files for execution
#################  Build Stage 2 #################
FROM node:slim AS runtime

# Set the port the container should expose
EXPOSE 50051

# Set the working directory
WORKDIR /usr/src/app

# Copy the compiled output from the build stage
COPY --from=build /usr/src/app/kyve-runtime ./kyve-runtime

# Set the command to run when the container starts
CMD ["./kyve-runtime"]
