const Quiz = require('../models/quizModel')

module.exports = {
  async getAll (req, res) {
    try {
      const quizes = await Quiz.find()
      res.json(quizes)
    } catch (ex) {
      res.json(ex);
    }
  },
  async save (req, res) {
    try {
      const myQuiz = req.body
      const quiz = await Quiz.create(myQuiz)
      res.json(quiz)
    } catch (ex) {
      res.json(ex);
    }
  }
}