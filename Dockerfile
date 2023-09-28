FROM node:lts

WORKDIR /usr/src/app

# install core
RUN mkdir -p common/types
RUN mkdir -p common/sdk
RUN mkdir -p common/protocol

COPY ./package.json ./
COPY ./tsconfig.json ./
COPY ./lerna.json ./
COPY ./nx.json ./

COPY ./common/types/package.json ./common/types/
COPY ./common/types/tsconfig.json ./common/types/
COPY ./common/types/scripts ./common/types/scripts
COPY ./common/types/src ./common/types/src

COPY ./common/sdk/package.json ./common/sdk/
COPY ./common/sdk/tsconfig.json ./common/sdk/
COPY ./common/sdk/src ./common/sdk/src

COPY ./common/protocol/package.json ./common/protocol/
COPY ./common/protocol/tsconfig.json ./common/protocol/
COPY ./common/protocol/src ./common/protocol/src

RUN mkdir -p integrations/tendermint

COPY ./integrations/tendermint/package.json ./integrations/tendermint/
COPY ./integrations/tendermint/tsconfig.json ./integrations/tendermint/
COPY ./integrations/tendermint/src ./integrations/tendermint/src

RUN yarn install
RUN yarn setup

# start core
WORKDIR /usr/src/app/integrations/tendermint
ENTRYPOINT ["yarn", "start"]
