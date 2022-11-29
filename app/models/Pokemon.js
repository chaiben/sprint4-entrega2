const fetch = require('cross-fetch')
const MESSAGES = require('../helpers/helper')
const Response = require('./Response')

module.exports = class Pokemon extends Response {
  async fecthData (id) {
    await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then(response => {
        if (response.status >= 400) {
          throw new Error(MESSAGES.BADRESPONSE)
        }
        return response.json()
      })
      .then(res => {
        this.setPayload({
          id: res.id,
          name: res.name,
          weight: res.weight,
          height: res.height
        })
        this.addMessage(MESSAGES.SUCCESS)
      })
      .catch(err => {
        this.setStatus(false)
        this.addMessage(MESSAGES.CHECKINFO)
        this.addError(err.message)
      })
  }
}
