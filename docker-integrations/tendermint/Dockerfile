FROM node:lts

WORKDIR /usr/src/app

# install runtime
COPY ./package.json ./
COPY ./tsconfig.json ./
COPY ./src ./src

RUN yarn install
RUN yarn build

# start runtime
CMD ["yarn", "start"]
