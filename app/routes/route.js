const router = require('express').Router()

const userRouter = require('./api/user')
const uploadRouter = require('./api/upload')
const errorRouter = require('./api/error')

router.use('/user', userRouter)
router.use('/upload', uploadRouter)
router.use('*', errorRouter)

module.exports = router
