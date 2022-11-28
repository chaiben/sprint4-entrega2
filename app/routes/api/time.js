const router = require('express').Router()
const Response = require('../../models/Response')
const Time = require('../../models/Time')
const { check, validationResult } = require('express-validator')
const MESSAGES = require('../../helpers/helper')

router.post('/', [
  check('username', MESSAGES.POSTNAMEREQUIRED).not().isEmpty(),
  check('password', MESSAGES.POSTPASSWORDREQUIRED).not().isEmpty()
], (req, res) => {
  const errors = validationResult(req)

  if (!errors.isEmpty()) {
    const response = new Response()
    response.setStatus(false)
    response.addMessage(MESSAGES.VALIDATIONERROR)
    response.setError(errors.array())
    return res.status(401).json(response)
  }
  const time = new Time(req.body)
  res.json(time)
})

module.exports = router
