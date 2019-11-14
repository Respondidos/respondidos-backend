const Question = require('../models/questionModel')

module.exports = {
  async getAll(req, res) {
    try {
      const questions = await Question.find()
      return res.json(questions)
    } catch (ex) {
      return res.status(400).json({ error: 'An error has occurred getting all questions' })
    }
  },
  async save(req, res) {
    try {
      const question = await Question.create(req.body)
      return res.json(question)
    } catch (ex) {
      return res.status(400).json({ error: 'It was not possible to save the question'})
    }
  },
  async delete(req, res) {
    try {
      const question = await Question.deleteOne({ _id: req.params.id })
      return res.json(question)
    } catch (ex) {
      return res.status(400).json({ error: 'An error has occurred deleting the current question' })
    }
  }
}