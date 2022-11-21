const express = require('express')
const bodyParser = require('body-parser')
const fileUpload = require('express-fileupload')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// enable files upload
app.use(fileUpload({
  createParentPath: true
}))

app.get('/user', (req, res) => {
  const fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl
  res.send({
    nombre: 'Marçal',
    age: 43,
    url: fullUrl
  })
})

app.post('/upload', async (req, res) => {
  try {
    if (!req.files) {
      res.send({
        status: false,
        message: 'No file uploaded'
      })
    } else {
      // Use the name of the input field (i.e. "file") to retrieve the uploaded file
      const file = req.files.file

      switch (file.mimetype) {
        case 'image/png':
        case 'image/jpeg':
        case 'image/gif':
          // Use the mv() method to place the file in the upload directory (i.e. "uploads")
          file.mv('./uploads/' + file.name)

          // send response
          res.send({
            status: true,
            message: 'File is uploaded',
            data: {
              name: file.name,
              mimetype: file.mimetype,
              size: file.size
            }
          })
          break
        default:
          res.send({
            status: false,
            message: 'Invalid file format. Please, upload only jpg/jpeg, png or gif files'
          })
          break
      }
    }
  } catch (err) {
    res.status(500).send(err)
  }
})

app.use('*', (req, res) => {
  res.status(404).send({
    title: 'Error 404',
    error: 'Resource not found'
  })
})

app.listen(3000)
