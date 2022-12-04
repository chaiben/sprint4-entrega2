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
    value: type.INTEGER,
    result: type.BOOLEAN
  })
}
