# multi-integration-library-test

Repository for testing https://github.com/brunopenso/multi-integration-library

## Run as Docker

```bash
docker build -t multintegration:1 .
docker container run --name testlocal --publish 3000:3000 multintegration:1
docker container stop
docker container rm testlocal
```

## Run as Express server

```bash
npm run express
```

## Testing

```bash
curl -v http://localhost:3000/todo
curl -v http://localhost:3000/todo/123
curl -v http://localhost:3000/todo/123/checklist
curl -v -d "{todo: 'my new todo'}" http://localhost:3000/todo
```
