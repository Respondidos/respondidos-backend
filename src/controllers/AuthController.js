const User = require('../models/userModel')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const authConfig = require('../config/auth.json')

function generateToken(params = {}) {
  const token = jwt.sign(params, authConfig.secret, {
    expiresIn: 86400
  })
  return token
}

module.exports = {
  async register (req, res) {
    try {
      const user = await User.create(req.body)

      user.password = undefined

      return res.send({ user })
    } catch(ex) {
      return res.status(400).json({ error: 'Falha no registro' });
    }
  },
  async authenticate (req, res) {
    const { email, password } = req.body
    try {
      const user = await User.findOne({ email }).select('+password')
      if (!user) {
        return res.status(400).json({ error: 'Usuário não encontrado' })
      }
      if (!await bcrypt.compare(password, user.password)) {
        return res.status(400).json({ error: 'Senha inválida' })
      }

      user.password = undefined

      return res.json({
        user,
        token: generateToken({id: user.id})
      });
    } catch (ex) {
      return res.status(400).json({ error: 'Houve um erro ao retornar usuário' })
    }
  }
}