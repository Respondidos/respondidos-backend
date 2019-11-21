const Quiz = require('../models/quizModel')
const User = require('../models/userModel')

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
  async addExperience (req, res) {
    try {
      const user = await User.findOne({ _id: req.userId })
      const totalExperience = user.experience + req.body.experience
      await User.update({ _id: req.userId}, { $set: { experience: totalExperience }})
      const updatedUser = await User.findOne({ _id: req.userId })
      return  res.json(updatedUser);
    } catch (ex) {
      return res.json(ex)
    }
  }
}