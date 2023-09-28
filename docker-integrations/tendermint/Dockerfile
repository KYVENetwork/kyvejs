FROM node:lts

WORKDIR /usr/src/app

# install core



# install runtime

COPY ./package.json ./
COPY ./tsconfig.json ./
COPY ./src ./src

RUN yarn install
RUN yarn build

# start core

# start runtime

EXPOSE 50051
CMD ["yarn", "start"]
