const router = require('express').Router()

const playerRouter = require('./api/player')
const gamesRouter = require('./api/games')
const notFoundRouter = require('./api/notfound')

router.use('/player', playerRouter)
router.use('/games', gamesRouter)
router.use('*', notFoundRouter)

module.exports = router
