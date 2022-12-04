const NotFound = require('../../models/NotFound')
const router = require('express').Router()

router.use('*', (req, res) => {
  const notFound = new NotFound()
  console.log(notFound)
  res.status(404).json(notFound)
})

module.exports = router
