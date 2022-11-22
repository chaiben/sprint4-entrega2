const MESSAGES = require('../helpers/helper')
const Response = require('./Response')

module.exports = class ErrorPage extends Response {
  constructor () {
    super()
    this.setStatus(false)
    this.addMessage(MESSAGES.NOTFOUND)
    this.addError(MESSAGES.ERROR404)
  }
}
