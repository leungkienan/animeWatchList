const connection = require('./connection')

function getFilms (db = connection) {
  return db('ghibli').select()
}

module.exports = {
  getFilms
}
