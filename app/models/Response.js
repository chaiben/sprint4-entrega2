module.exports = class Response {
  status = true
  message = []
  payload = null
  error = []

  setStatus (status) {
    if (typeof (status) === 'boolean') { this.status = status }
  }

  addMessage (message) {
    this.message.push(message)
  }

  addError (error) {
    this.error.push(error)
  }

  setPayload (payload) {
    this.payload = payload
  }
}
