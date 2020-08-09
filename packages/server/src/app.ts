import express from 'express'
import path from 'path'
import cors from 'cors'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'

import router from './components/index'
import authorize from './components/authorize'
import token from './components/token'

const app = express()
dotenv.config()

const dist = path.join(__dirname, '..', '..', 'client', 'build')

app.use(express.static(dist))
    .use(express.json())
    .use(cors())
    .use(cookieParser())
    .use('/api/authorize', authorize)
    .use('/api/token', token)
    .use('/*', router)

export default app
