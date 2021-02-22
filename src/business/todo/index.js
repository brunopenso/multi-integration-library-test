
function getAll (params) {
  console.log('getting all todos')
  console.log(params)
}

function getById (params) {
  console.log('get by id')
  console.log(params)
}

module.exports = {
  getAll,
  getById
}
