const router = require('express').Router()

const playersRouter = require('./api/players')
const rankingRouter = require('./api/ranking')
const gamesRouter = require('./api/games')
const notFoundRouter = require('./api/notfound')

router.use('/players', playersRouter)
router.use('/ranking', rankingRouter)
router.use('/games', gamesRouter)
router.use('*', notFoundRouter)

module.exports = router
