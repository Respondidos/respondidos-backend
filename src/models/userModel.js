const mongoose = require('../config/mongoConnection')
const bcrypt = require('bcryptjs')

const userSchema = new mongoose.Schema({
  password: {
    type: String,
    required: true,
    select: false
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    unique: true
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type:String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
})

userSchema.pre('save', async function (next) {
  const hash = await bcrypt.hash(this.password, 10)
  this.password = hash
  next()
})

module.exports = mongoose.model('User', userSchema)