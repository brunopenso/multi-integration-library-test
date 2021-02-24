const todo = require('./todo')

const routes = [
  {
    pattern: '/todo',
    method: 'GET',
    exec: (params) => todo.getAll(params)
  },
  {
    pattern: '/todo/:id',
    method: 'GET',
    exec: (params) => todo.getById(params)
  }
]

module.exports = routes
