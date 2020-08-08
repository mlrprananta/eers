import express, { response } from 'express'
import axios, { AxiosError } from 'axios'

const router = express.Router()

const TOKEN_URI = 'https://accounts.spotify.com/api/token'

//TODO Use state
/**
 * Authorization route
 */
router.get('/', (req, res) => {
    axios({
        method: 'post',
        url: TOKEN_URI,
        params: {
            grant_type: 'authorization_code',
            code: req.query.code,
            redirect_uri: process.env.REDIRECT_URI,
        },
        headers: {
            Authorization:
                'Basic ' +
                Buffer.from(
                    `${process.env.CLIENT_ID}:${process.env.CLIENT_SECRET}`,
                ).toString('base64'),
        },
    })
        .then((response) => {
            res.cookie('vt', response.data.refresh_token, {
                httpOnly: true,
                path: '/api/token',
            })
            res.json({
                access_token: response.data.access_token,
            })
        })
        .catch((error: AxiosError) => {
            res.status(error.response.status).send(error.response.data)
        })
})

/**
 * Refresh route
 */
router.post('/', (req, res) => {
    const token = req.cookies.vt

    if (!token) {
        res.status(400).send('Invalid refresh token')
    }

    axios({
        method: 'post',
        url: TOKEN_URI,
        params: {
            grant_type: 'refresh_token',
            refresh_token: token,
        },
        headers: {
            Authorization:
                'Basic ' +
                Buffer.from(
                    `${process.env.CLIENT_ID}:${process.env.CLIENT_SECRET}`,
                ).toString('base64'),
        },
    })
        .then((response) => {
            res.json({
                access_token: response.data.access_token,
            })
        })
        .catch((error: AxiosError) => {
            res.status(error.response.status).send(error.response.data)
        })
})

export default router
