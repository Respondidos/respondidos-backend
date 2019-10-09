const mongoose = require('../config/mongoConnection')
const QuestionSchema = require('./questionModel').schema

let quizSchema = mongoose.Schema({
  info: {
    name: String,
    creatorName: String
  },
  questions: [QuestionSchema]
})

module.exports = mongoose.model('Quiz', quizSchema)