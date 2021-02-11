const express = require('express')

const db = require('../db/ghibli')
const router = express.Router()

router.get('/'), (req, res) => {
    db.getMovies()
    .then(results => {
        // map list of ghibli movies.
        return null
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({message: 'Something went wrong'})
    })
}

module.exports = router