const express = require('express')
const router = express.Router()
const QuizesController = require('../controllers/QuizesController')

router.post('/quizes', QuizesController.save)
router.get('/quizes', QuizesController.getAll)

module.exports = router