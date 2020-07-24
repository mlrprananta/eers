const express = require('express')
const request = require('request')
const axios = require('axios')
const querystring = require('querystring')
const router = express.Router()

const TOKEN_URI = 'https://accounts.spotify.com/api/token'

//TODO Use state
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
            res.json({
                access_token: response.data.access_token,
                refresh_token: response.data.refresh_token,
            })
        })
        .catch((error) => {
            console.error(error.message)
        })
})

module.exports = router
