const mongoose = require('../config/mongoConnection')
const QuestionSchema = require('./questionModel').schema

let quizSchema = new mongoose.Schema({
  info: {
    name: {
      type: String,
      required: true
    },
    creator: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User'
    }
  },
  ranking: [{
    student: {   
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    points: {
      type: Number,
      default: 0
    }    
  }],
  
  questions: [QuestionSchema]
})

module.exports = mongoose.model('Quiz', quizSchema)