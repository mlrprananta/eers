import express from 'express'
import path from 'path'

const router = express.Router()

const dist = path.join(__dirname, '..', '..', '..', 'client', 'build')

console.log(dist)

router.get('/', function (req, res, next) {
    res.sendFile(path.join(dist, 'index.html'))
})

export default router
