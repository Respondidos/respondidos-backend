const express = require('express')
const router = express.Router()
const quizesAPI = require('./quizzesAPI')
const authAPI = require('./authAPI')

router.use('/quizes', quizesAPI)
router.use('/auth', authAPI)

module.exports = router