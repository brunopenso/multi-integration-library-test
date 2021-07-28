const { createResponse } = require('multi-integration-library')

function getAll (params) {
  return createResponse({ message: 'here is the list of todos' }, {}, 200)
}

function create (params) {
  return createResponse(undefined, {}, 201)
}

function getById (params) {
  return createResponse({ message: `here is the todo id ${params.pathParamsAttr.id} ` }, {}, 200)
}

function getChecklist (params) {
  return createResponse({ message: `return the checklist list for todo id ${params.pathParamsAttr.id} ` }, {}, 200)
}

function getChecklistItem (params) {
  return createResponse({ message: `return the detail of checklist item ${params.pathParamsAttr.id} with custom headers ${params.headers['x-my-customheader']}` }, {}, 200)
}

function deleteById (params) {
  return createResponse({ message: `delete todo of id: ${params.pathParamsAttr.id} ` }, {}, 200)
}
module.exports = {
  getAll,
  getById,
  getChecklist,
  create,
  getChecklistItem,
  deleteById
}
