const router = require('express').Router()
const Pokemon = require('../../models/Pokemon')

router.get('/:id', async (req, res) => {
  const pokemon = new Pokemon()
  await pokemon.fecthData(req.params.id)
  res.json(pokemon)
})

module.exports = router
