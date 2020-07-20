const express = require('express')
const path = require('path')

const app = express()

const port = process.env.PORT || 9001
const buildDir = path.join(__dirname, 'client', 'build')

app.use(express.static(buildDir))

app.get('/*', (req, res) => {
    res.send(path.join(buildDir, 'index.html'))
})

app.listen(port)