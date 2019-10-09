const Quiz = require('../models/quizModel')

module.exports = {
  async save (req, res) {
    try {
      const myQuiz = req.body
      const quiz = await Quiz.create(myQuiz)
      res.json(quiz)
    } catch (ex) {
      res.send(ex);
    }
  }
}