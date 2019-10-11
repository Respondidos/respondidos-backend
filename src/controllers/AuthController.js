const User = require('../models/userModel')

module.exports = {
  async save (req, res) {
    try {
      const user = await User.create(req.body)
      return res.send({ user })
    } catch(ex) {
      return res.status(400).json({ error: 'Registration failed' });
    }
  }
}