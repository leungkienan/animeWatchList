const express = require('express')
const path = require('path')


// const fruitRoutes = require('./routes/fruits')
const ghibliRoutes = require('./routes/ghibli')

const request = require('superagent')
const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

// server.use('/api/v1/fruits', fruitRoutes)

server.use('/api/v1/ghibli', ghibliRoutes)

server.get('/api/v1/ghibli', (req, res) => {
    request
    .get('https://ghibliapi.herokuapp.com/films')
    .then((response) => {
        // console.log('break here')
        // console.log(response.body)
        // this sends an array of ghibli films
        res.send(response.body)
    })
})

module.exports = server
