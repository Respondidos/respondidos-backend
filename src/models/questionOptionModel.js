const mongoose = require('../config/mongoConnection')

let questionOptionSchema = mongoose.Schema({
  text: String,
  isCorrect: Boolean
}, {
  _id: false
})

module.exports = mongoose.model('QuestionOption', questionOptionSchema)