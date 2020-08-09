import express, { Response } from 'express'
import path from 'path'

const router = express.Router()

const dist = path.join(__dirname, '..', '..', '..', 'client', 'build')

router.get('/', (_, res: Response) => {
    res.sendFile(path.join(dist, 'index.html'))
})

export default router
