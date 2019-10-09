const express = require('express')
const router = express.Router()
const QuizesController = require('../controllers/QuizesController')

router.get('/quizes', QuizesController.getAll)
router.get('/quizes/:id', QuizesController.getById)
router.post('/quizes', QuizesController.save)
router.delete('/quizes/:id', QuizesController.delete)

module.exports = router