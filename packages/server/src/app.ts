import express from 'express'
import path from 'path'
import cors from 'cors'
import dotenv from 'dotenv'

import router from './components/index'
import authorize from './components/authorize'
import token from './components/token'

const app = express()
dotenv.config()

const dist = path.join(__dirname, '..', '..', 'client', 'build')

app.use(express.static(dist))
app.use(express.json())
app.use(cors())
app.use('/api/authorize', authorize)
app.use('/api/token', token)
app.use('/*', router)

export default app
