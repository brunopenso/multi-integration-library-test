FROM 14.16.0-alpine3.10

WORKDIR /app

COPY package.json /app/.
COPY package-lock.json /app/.

COPY src /app/src/.
COPY node_modules /app/node_modules/.

EXPOSE 3000

ENTRYPOINT ["node", "src/express/"]