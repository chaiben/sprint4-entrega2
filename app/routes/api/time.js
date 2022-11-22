const router = require('express').Router()
const Time = require('../../models/Time')

router.post('/', (req, res) => {
  const time = new Time(req.body)
  res.json(time)
})

module.exports = router
