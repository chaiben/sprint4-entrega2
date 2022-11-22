const Upload = require('../../models/Upload')
const router = require('express').Router()

router.post('/', (req, res) => {
  try {
    const file = (req.files) ? req.files.file : false
    const upload = new Upload(file)
    res.json(upload)
  } catch (err) {
    res.status(500).send(err)
  }
})

module.exports = router
