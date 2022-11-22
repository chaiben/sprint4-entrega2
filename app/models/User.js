const Response = require('./Response')

module.exports = class User extends Response {
  constructor (name, age, url) {
    super()
    this.setPayload({
      name,
      age,
      url
    })
  }
}
