const Response = require('./Response')

module.exports = class Time extends Response {
  constructor () {
    super()

    const date = new Date()

    this.setPayload({
      date: date.toLocaleDateString(),
      time: date.toLocaleTimeString()
    })
  }
}
