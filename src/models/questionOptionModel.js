const mongoose = require('../config/mongoConnection')

const questionOptionSchema = new mongoose.Schema({
  text: String,
  isCorrect: Boolean
}, {
  _id: false
})

module.exports = mongoose.model('QuestionOption', questionOptionSchema)