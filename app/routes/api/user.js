const router = require('express').Router()
const User = require('../../models/User')

router.get('/', (req, res) => {
  const fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl
  const user = new User('Marçal', 43, fullUrl)
  res.json(user)
})

module.exports = router
