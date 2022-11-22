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

  setError (errorArray) {
    if (Array.isArray(errorArray)) { this.error = errorArray }
  }

  addError (error) {
    this.error.push(error)
  }

  setPayload (payload) {
    this.payload = payload
  }
}
