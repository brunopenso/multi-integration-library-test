const fastify = require('fastify')
const routes = require('../business/routes')
const { runtime, validateRoute } = require('multi-integration-library')

validateRoute(routes)

const app = fastify({})

app.head('/', (request, response) => response.code(200).send(''))

app.get('/*', (request, response) => runtime(routes, request, response, 'fastify'))

app.setErrorHandler(function (error, request, reply) {
    logger.error(error)
    reply.send(error)
  })


app.listen(3000, '0.0.0.0', (err, address) => {
    if (err) {
        throw err
    }
    console.log('App listening on port 3000!')
})