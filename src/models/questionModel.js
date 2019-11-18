const mongoose = require('../config/mongoConnection')
const QuestionOptionSchema = require('./questionOptionModel').schema

const validator = [
  { validator: optionsLength, msg: 'The number of options must be 4'},
  { validator: hasOneCorrectAnswer, msg: 'The options must contain one correct answer'}
]

const questionSchema = new mongoose.Schema({
  header: String,
  options: {
    type: [QuestionOptionSchema],
    validate: validator
  }
})

function optionsLength(val) {
  return val.length === 4
}

function hasOneCorrectAnswer(val) {
  return val.filter(option => option.isCorrect).length === 1
}

module.exports = mongoose.model('Question', questionSchema)