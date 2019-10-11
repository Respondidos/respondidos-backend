const express = require('express')
const router = express.Router()
const QuizzesController = require('../controllers/QuizzesController')

router.get('/', QuizzesController.getAll)
router.get('/:id', QuizzesController.getById)
router.post('/', QuizzesController.save)
router.delete('/:id', QuizzesController.delete)

module.exports = router