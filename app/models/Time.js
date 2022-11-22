const MESSAGES = require('../helpers/helper')
const Response = require('./Response')

module.exports = class Time extends Response {
  constructor (postBody) {
    super()
    postBody.name ? this.validData(postBody) : this.invalidData()
  }

  invalidData () {
    this.setStatus(false)
    this.addMessage(MESSAGES.POSTNAMEREQUIRED)
    this.addError(MESSAGES.INVALIDREQUEST)
  }

  validData (postBody) {
    const date = new Date()
    this.setPayload({
      name: postBody.name,
      date: date.toLocaleDateString(),
      time: date.toLocaleTimeString()
    })
  }
}
