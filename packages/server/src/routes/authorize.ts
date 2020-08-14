import express from 'express'
import querystring from 'querystring'

const router = express.Router()

const AUTHORIZE_URI = 'https://accounts.spotify.com/authorize?'

//TODO Use state
router.get('/', (req, res) => {
    const scope = 'user-top-read user-read-recently-played'
    res.send(
        AUTHORIZE_URI +
            querystring.stringify({
                client_id: process.env.CLIENT_ID,
                response_type: 'code',
                redirect_uri: process.env.REDIRECT_URI,
                scope: scope,
                // show_dialog: true,
            }),
    )
})

export default router
