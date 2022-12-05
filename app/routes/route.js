const router = require('express').Router()

const playersRouter = require('./api/players')
const gamesRouter = require('./api/games')
const notFoundRouter = require('./api/notfound')

router.use('/players', playersRouter)
router.use('/games', gamesRouter)
router.use('*', notFoundRouter)

module.exports = router
