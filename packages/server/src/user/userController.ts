import express from 'express'
import * as service from './userService'
import User from './user'

const router = express.Router()
const ROUTE_URI = '/api/profile'

router.get(ROUTE_URI, async (req, res, next) => {
    try {
        const user = await service.getProfile(req.headers.authorization)
        res.send(User.toDTO(user))
    } catch (error) {
        res.status(400)
        next(error)
    }
})

/**
 * GET User data by
 */
router.get(ROUTE_URI + '/:id', async (req, res, next) => {
    try {
        const id = req.params.id
        const user = await service.getUserProfile(id)
        res.send(User.toDTO(user))
    } catch (error) {
        res.status(400)
        next(error)
    }
})

/**
 * PUT User data and store
 */
router.put(ROUTE_URI, async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization || ''
        const user = await service.updateUserProfile(authHeader)
        res.status(200).send(User.toDTO(user))
    } catch (error) {
        res.status(400)
        next(error)
    }
})

export default router
