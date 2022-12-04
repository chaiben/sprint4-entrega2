const Sequelize = require('sequelize')

const PlayerModel = require('./models/players')
const MatchModel = require('./models/matches')
const DB_CONF = require('./config/config')

const sequelize = new Sequelize(DB_CONF.DATABASE, DB_CONF.USER, DB_CONF.PASSWORD, {
  host: DB_CONF.HOST,
  dialect: 'mysql'
})

const Player = PlayerModel(sequelize, Sequelize)
const Match = MatchModel(sequelize, Sequelize)

sequelize.sync({ force: false })
  .then(() => {
    console.log('Table sincronized')
  })

module.exports = {
  Player,
  Match
}
