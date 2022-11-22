const router = require('express').Router()

const userRouter = require('./api/user')
const uploadRouter = require('./api/upload')
const timeRouter = require('./api/time')
const notFoundRouter = require('./api/notfound')

router.use('/user', userRouter)
router.use('/upload', uploadRouter)
router.use('/time', timeRouter)
router.use('*', notFoundRouter)

module.exports = router
