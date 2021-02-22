const todo = require('./todo')

const routes = [
  {
    pattern: '/todo',
    method: 'get',
    exec: (params) => todo.getAll(params)
  },
  {
    pattern: '/todo/:id',
    method: 'get',
    exec: (params) => todo.getById(params)
  }
]

module.exports = routes
