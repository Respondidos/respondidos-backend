const mongoose = require('../config/mongoConnection')
const shortid = require('shortid');

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
  accessCode: {
    type: String,
    unique: true,
    default: shortid.generate,
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