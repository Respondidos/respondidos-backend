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
      console.log('dale')
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
  async getByCode (req, res) {
    try {
      const quiz = await Quiz.find({ accessCode: req.params.accessCode }).populate('info.creator')
      return res.json(quiz)
    } catch (ex) {
      return res.json(ex)
    }
  }
}