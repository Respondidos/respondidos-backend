const jwt = require('jsonwebtoken')
const authConfig = require('../config/auth.json')

module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization

  if (!authHeader)
    return res.status(401).json({ error: 'Token não informado' })

  const splittedToken = authHeader.split(' ')

  if (!splittedToken.length === 2)
    return res.status(401).json({ error: 'Token mal formado' })

  const [prefix, token] = splittedToken

  if (!/^Bearer$/.test(prefix))
    return res.status(401).json({ error: 'Token mal formado' })

  jwt.verify(token, authConfig.secret, (err, decoded) => {
    if (err) 
      return res.status(401).json({ error: 'Token inválido' })

    req.userId = decoded.id
    return next()
  })
}