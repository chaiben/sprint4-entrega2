const router = require('express').Router()

const playerRouter = require('./api/player')
const notFoundRouter = require('./api/notfound')

router.use('/player', playerRouter)
router.use('*', notFoundRouter)

module.exports = router
