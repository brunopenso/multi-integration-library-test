FROM node:14.16.0-alpine3.10

WORKDIR /app

COPY package.json /app/.
COPY package-lock.json /app/.

COPY src/business /app/src/business/.
COPY src/express /app/src/express/.
COPY node_modules /app/node_modules/.

EXPOSE 3000

ENTRYPOINT ["node", "src/express/"]