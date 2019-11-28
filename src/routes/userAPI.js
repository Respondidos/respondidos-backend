const express = require('express')
const router = express.Router()
const authMiddleware = require('../middlewares/auth')
const UserController = require('../controllers/UserController')

router.use(authMiddleware)

router.get('/quizzes/own', UserController.getOwnQuizzes)

router.get('/quizzes/participating', UserController.getParticipatingQuizzes)
router.get('/', UserController.getUserInfo)

module.exports = router