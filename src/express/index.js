'use strict'
const express = require('express')
const bodyParser = require('body-parser')
const routes = require('../business/routes')
const { runtime, validateRoute } = require('multi-integration-library')

validateRoute(routes)

const app = express()
app.use(bodyParser.json())

app.all('/*', function (req, res) {
  runtime(routes, req, res)
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
