const express = require('express')
const path = require('path')

const fruitRoutes = require('./routes/fruits')
const ghibliRoutes = require('./routes/ghibli')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/fruits', fruitRoutes)

server.get('/api/v1/ghibli', (req, res) => {
    request
    .get('https://ghbliapi.herokuapp.com/films')
    .then((response) => {
        let data = response.body
        res.send(data.title)
    })
})

module.exports = server
