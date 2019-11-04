const express = require('express')
const router = express.Router()
const quizzesAPI = require('./quizzesAPI')
const userAPI = require('./userAPI')
const authAPI = require('./authAPI')

router.use('/quizzes', quizzesAPI)
router.use('/auth', authAPI)
router.use('/userAPI', userAPI)

module.exports = router