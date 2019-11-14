const Quiz = require('../models/quizModel')

module.exports = {
  async getOwnQuizzes (req, res) {
    try {
      const quizzes = await Quiz.find({ "info.creator": req.userId }).populate('info.creator')
      return res.json(quizzes)
    } catch (ex) {
      return res.json(ex)
    }
  },
  async getParticipatingQuizzes (req, res) {
    try {
      const quizzes = await Quiz.find({ ranking: { $elemMatch: { student: req.userId } } } ).populate('info.creator')
      return res.json(quizzes)
    } catch (ex) {
      return res.json(ex)
    }
  },
}