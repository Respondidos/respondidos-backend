const Quiz = require('../models/quizModel')
const User = require('../models/userModel')

module.exports = {
  async getAll (req, res) {
    try {
      const quizes = await Quiz.find().populate('info.creator')
      return res.json(quizes)
    } catch (ex) {
      return res.json(ex)
    }
  },
  async getById (req, res) {
    try {
      const quiz = await Quiz.find({ _id: req.params.id }).populate('info.creator')
      return res.json(quiz)
    } catch (ex) {
      return res.json(ex)
    }
  },
  async save (req, res) {
    try {
      var myQuiz = req.body
      myQuiz.info.creator = req.userId
      console.log("save")
      const quiz = await Quiz.create(myQuiz, (err, quiz) => {
        if (err) {
          return res.status(500).json({
            message: "ocorreu um erro na criação do quiz"
          })
        } else {
          return res.json(quiz.populate('info.creator'))
        }
      })
      console.log(quiz)
      
    } catch (ex) {
      return res.json(ex)
    }
  },
  async delete (req, res) {
    try {
      const quiz = await Quiz.deleteOne({ _id: req.params.id })
      return res.json(quiz)
    } catch (ex) {
      return res.json(ex)
    }
  },
  async getByCode (req, res) {
    try {
      var quiz = await Quiz.findOne({ accessCode: req.params.accessCode }).populate(['info.creator', 'questions', 'ranking.student'])
      var isInTheQuiz = quiz.ranking.filter(rank => rank.student._id === req.userId)
      console.log(quiz)
      if (isInTheQuiz) {
        return res.status(412).json({
          isInTheQuiz: true,
          message: 'O usuario já participou desse quiz'
        })
      } else {
        return res.json(quiz)
      }
    } catch (ex) {
      return res.json(ex)
    }
  },
  async addUserScore (req, res) {
    try {
      const { accessCode, score } = req.body
      const { userId } = req

      const quiz = await Quiz.findOne({ accessCode })

      const existsUserScore = quiz.ranking.map(element => element['student']).includes(userId)

      if (existsUserScore) {
        quiz.ranking = quiz.ranking.map(element => {
          if (element['student'] == userId) {
            element['points'] = score
          }
          return element
        })
      } else {
        quiz.ranking.push({
          student: userId,
          points: score
        })
      }

      const student = await User.findById(userId)

      student['experience'] = student['experience'] + score

      await Quiz.findOneAndUpdate({ _id: userId }, student)
      await Quiz.findOneAndUpdate({ accessCode }, quiz)

      const updatedQuiz = await Quiz.findOne({ accessCode }).populate('ranking.student')
      res.json(updatedQuiz)
    } catch (ex) {
      return res.json(ex)
    }
  }
} 