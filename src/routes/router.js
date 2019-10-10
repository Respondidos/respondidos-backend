const express = require('express')
const router = express.Router()
const quizesAPI = require('./quizesAPI')

router.use('/quizes', quizesAPI)

module.exports = router