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
FROM node:slim
WORKDIR /usr/src/app
# COPY package.json ./
# COPY tsconfig.json ./
# RUN yarn install
COPY --from=appbuild /usr/src/app/out/kyve ./
EXPOSE 50051
CMD ["node", "./kyve"]