const MESSAGES = require('../../helpers/helper')
const router = require('express').Router()
const { check, validationResult } = require('express-validator')
const Time = require('../../models/Time')
const Response = require('../../models/Response')

router.post('/', [
  check('username', MESSAGES.USERNAMEREQUIRED).not().isEmpty(),
  check('password', MESSAGES.PASSWORDREQUIRED).not().isEmpty()
], (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    const response = new Response()
    response.setStatus(false)
    response.setError(errors.array())
    return res.status(401).json(response)
  }
  const time = new Time()
  res.json(time)
})

module.exports = router
