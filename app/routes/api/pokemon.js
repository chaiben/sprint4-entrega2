const router = require('express').Router()
const MESSAGES = require('../../helpers/helper')
const Pokemon = require('../../models/Pokemon')
const Response = require('../../models/Response')

router.get('/:id', async (req, res) => {
  const pokemon = new Pokemon()
  await pokemon.fecthData(req.params.id)
  res.json(pokemon)
})

router.get('/', async (req, res) => {
  const response = new Response()
  response.setStatus(false)
  response.addMessage(MESSAGES.MISSINGPOKEID)
  response.addError(MESSAGES.INVALIDREQUEST)
  res.status(404).json(response)
})

module.exports = router
