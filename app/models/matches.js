const MESSAGES = require('../helpers/helper')
const Dice = require('./Dice')

module.exports = (sequelize, type) => {
  return sequelize.define('match', {
    match_id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    player_id: {
      type: type.INTEGER,
      references: {
        model: 'players',
        key: 'player_id'
      }
    },
    value: {
      type: type.INTEGER,
      set () {
        const total = new Dice().rollDices(2)
        this.setDataValue('value', total)
        this.setDataValue('result', total === 7 ? 1 : 0)
      }
    },
    result: {
      type: type.BOOLEAN,
      get () {
        return this.getDataValue('result') ? MESSAGES.WIN : MESSAGES.LOSE
      }
    }
  })
}
