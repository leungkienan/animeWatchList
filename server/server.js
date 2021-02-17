const express = require('express')
const path = require('path')


// const fruitRoutes = require('./routes/fruits')
const animeRoutes = require('./routes/anime')

const request = require('superagent')
const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

// server.use('/api/v1/fruits', fruitRoutes)
server.use('/', animeRoutes)

server.get('api/v1/anime',(req, res) => {
    request.get('https://api.jikan.moe/v3/anime/1/')
    .then((response)=>{
        let anime = response.body
        console.log(anime)
        res.send(anime)
    })
})




module.exports = server
