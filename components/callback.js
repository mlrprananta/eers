const express = require('express')
const request = require('request')
const querystring = require('querystring')
const router = express.Router()

const TOKEN_URI = 'https://accounts.spotify.com/api/token'

router.get('/callback', (req, res) => {
    print('Login successful')
    request.post(
        {
            url: TOKEN_URI,
            form: {
                grant_type: 'authorization_code',
                code: req.query.code,
                redirect_uri: process.env.REDIRECT_URI,
                client_id: process.env.CLIENT_ID,
                client_secret: process.env.CLIENT_SECRET,
            },
        },
        (error, response, body) => {
            if (!error && response.statusCode === 200) {
                print('Token received')
                res.json({
                    access_token: body.access_token,
                    refresh_token: body.refresh_token,
                })
            }
        },
    )
})

module.exports = router
