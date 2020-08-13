import express from 'express'
import path from 'path'
import cors from 'cors'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'

import router from './routes/index'
import authorize from './routes/authorize'
import token from './routes/token'

import user from './user/userController'

const app = express()
dotenv.config()

const dist = path.join(__dirname, '..', '..', 'client', 'build')

app.use(express.static(dist))
    .use(express.json())
    .use(cors())
    .use(cookieParser())
    .use('/api/authorize', authorize)
    .use('/api/token', token)
    .use(user)
    .use('/*', router)

export default app
