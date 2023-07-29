FROM node:14
COPY src/* ./
RUN npm init -y && npm i @grpc/grpc-js && npm i @grpc/proto-loader

CMD ["node", "server.js"]