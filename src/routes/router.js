const express = require('express')
const router = express.Router()
const quizzesAPI = require('./quizzesAPI')
const authAPI = require('./authAPI')

router.use('/quizzes', quizzesAPI)
router.use('/auth', authAPI)

module.exports = router