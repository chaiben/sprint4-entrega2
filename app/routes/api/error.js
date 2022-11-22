const ErrorPage = require('../../models/ErrorPage')
const router = require('express').Router()

router.use('*', (req, res) => {
  const errorPage = new ErrorPage()
  res.status(404).json(errorPage)
})

module.exports = router
