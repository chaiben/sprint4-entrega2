const express = require('express')
const bodyParser = require('body-parser')
const fileUpload = require('express-fileupload')
const apiRouter = require('./routes/route')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// enable files upload
app.use(fileUpload({
  createParentPath: true
}))

app.use('/', apiRouter)

app.listen(3000)
