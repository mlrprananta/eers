const express = require('express')
const path = require('path')
const app = express()
const router = require('./components/index')

const dist = path.join(__dirname, 'client', 'build')

app.use(express.static(dist))
app.use(express.json())
app.use('/*', router)

module.exports = app;

