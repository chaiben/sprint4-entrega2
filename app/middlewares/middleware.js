const jwt = require('jwt-simple')
const moment = require('moment')

const addNoCacheHeader = (req, res, next) => {
  res.set({
    'Cache-Control': 'no-cache'
  })
  next()
}

const checkToken = (req, res, next) => {
  if (!req.headers['user-token']) {
    return res.json({ error: 'Necesitas incluir el user-token en la cabecera' })
  }

  const userToken = req.headers['user-token']
  let payload = {}

  try {
    payload = jwt.decode(userToken, 'frase secreta')
  } catch (err) {
    return res.json({ error: 'El tokes es incorrecto' })
  }

  if (payload.expiredAt < moment().unix()) {
    return res.json({ error: 'El tokes ha expirado' })
  }

  req.usuarioId = payload.usuarioId

  next()
}

module.exports = {
  addNoCacheHeader,
  checkToken
}
