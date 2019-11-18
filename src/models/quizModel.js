const mongoose = require('../config/mongoConnection')
const shortid = require('shortid');

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
  questions: [{   
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Question'
  }]
})

module.exports = mongoose.model('Quiz', quizSchema)
