const connection = require('./connection')

function getAllAnime(db = connection){
    return db('anime').select
}

module.exports = {
    getAllAnime
}
