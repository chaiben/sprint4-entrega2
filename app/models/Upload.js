const MESSAGES = require('../helpers/helper')
const Response = require('./Response')

module.exports = class Upload extends Response {
  constructor (file) {
    super()
    if (!file) this.noFileFound()
    else { this.fileReceived(file) }
  }

  noFileFound () {
    this.setStatus(false)
    this.addMessage(MESSAGES.NOFILEKEY)
    this.addError(MESSAGES.NOFILEUPLOADED)
  }

  fileReceived (file) {
    switch (file.mimetype) {
      case 'image/png':
      case 'image/jpeg':
      case 'image/gif':
        // Use the mv() method to place the file in the upload directory (i.e. "uploads")
        file.mv('./uploads/' + file.name)
        this.addMessage(MESSAGES.FILEUPLOADED)
        this.setPayload({
          name: file.name,
          mimetype: file.mimetype,
          size: file.size
        })
        break
      default:
        this.setStatus(false)
        this.addMessage(MESSAGES.INVALIDIMGFORMAT)
        this.addError(MESSAGES.NOFILEUPLOADED)
        break
    }
  }
}
