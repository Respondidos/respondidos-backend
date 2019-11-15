const Quiz = require('../models/quizModel')

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
      const myQuiz = req.body
      const quiz = await Quiz.create(myQuiz).populate('info.creator')
      return res.json(quiz)
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

      await Quiz.findOneAndUpdate({ accessCode }, quiz)

      const updatedQuiz = await Quiz.findOne({ accessCode }).populate('ranking.student')
      res.json(updatedQuiz)
    } catch (ex) {
      return res.json(ex)
    }
  }
}