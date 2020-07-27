import express from 'express'
const router = express.Router()
const querystring = require('querystring')

const AUTHORIZE_URI = 'https://accounts.spotify.com/authorize?'

//TODO Use state
router.get('/', (req, res) => {
    const scope = 'user-top-read user-read-recently-played'
    console.log('GET')
    res.send(
        AUTHORIZE_URI +
            querystring.stringify({
                client_id: process.env.CLIENT_ID,
                response_type: 'code',
                redirect_uri: process.env.REDIRECT_URI,
                scope: scope,
                show_dialog: true,
            }),
    )
})

module.exports = router
