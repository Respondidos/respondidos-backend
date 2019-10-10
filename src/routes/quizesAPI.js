const express = require('express')
const router = express.Router()
const QuizesController = require('../controllers/QuizesController')

router.get('/', QuizesController.getAll)
router.get('/:id', QuizesController.getById)
router.post('/', QuizesController.save)
router.delete('/:id', QuizesController.delete)

module.exports = router