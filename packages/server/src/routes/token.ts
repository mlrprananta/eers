import express from 'express'
import axios, { AxiosError } from 'axios'
import { createUserProfile } from '../user/userService'

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
            createUserProfile('Bearer ' + response.data.access_token)
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
 * Clear cookie on logout
 */
router.delete('/', (req, res) => {
    res.clearCookie('vt', {
        httpOnly: true,
        path: '/api/token',
    })
    res.status(200).end()
})

/**
 * Refresh route
 */
router.post('/', (req, res) => {
    const token = req.cookies.vt

    if (!token) {
        console.error('Invalid refresh token.')
        res.status(400).end()
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
