const express = require('express')
const db = require('../db/anime')
const router = express.Router()


router.get('/', (req,res)=>{
    db.getAllAnime()
    .then(results => {
        res.json()
    })
})