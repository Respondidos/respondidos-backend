const express = require('express')
const router = express.Router()
const quizzesAPI = require('./quizzesAPI')
const questionsAPI = require('./questionsAPI')
const authAPI = require('./authAPI')

router.use('/quizzes', quizzesAPI)
router.use('/questions', questionsAPI)
router.use('/auth', authAPI)

module.exports = router