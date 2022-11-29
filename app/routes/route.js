const router = require('express').Router()

const middleware = require('../middlewares/middleware')
const userRouter = require('./api/user')
const uploadRouter = require('./api/upload')
const pokemonRouter = require('./api/pokemon')
const timeRouter = require('./api/time')
const notFoundRouter = require('./api/notfound')

router.use('/user', userRouter)
router.use('/upload', uploadRouter)
router.use('/pokemon', pokemonRouter)
router.use('/time', middleware.addNoCacheHeader, timeRouter)
router.use('*', notFoundRouter)

module.exports = router
