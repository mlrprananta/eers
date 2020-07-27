import express from 'express'

const path = require('path')
const router = express.Router()

const dist = path.join(__dirname, '..', '..', '..', 'client', 'build')

console.log(dist)

router.get('/', function (req, res, next) {
    res.sendFile(path.join(dist, 'index.html'))
})

module.exports = router
