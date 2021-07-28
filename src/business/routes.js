const todo = require('./todo')

const routes = [
  {
    pattern: '/todo',
    method: 'GET',
    exec: (params) => todo.getAll(params)
  },
  {
    pattern: '/todo',
    method: 'POST',
    exec: (params) => todo.create(params)
  },
  {
    pattern: '/todo/:id',
    method: 'GET',
    exec: (params) => todo.getById(params)
  },
  {
    pattern: '/todo/:id/checklist',
    method: 'GET',
    exec: (params) => todo.getChecklist(params)
  },
  {
    pattern: '/todo/:id/checklist/:idItem',
    method: 'GET',
    exec: (params) => todo.getChecklistItem(params)
  },
  {
    pattern: '/todo/:id',
    method: 'DELETE',
    exec: (params) => todo.deleteById(params)
  },
]

module.exports = routes
