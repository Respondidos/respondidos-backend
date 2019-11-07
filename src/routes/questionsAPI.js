const express = require('express')
const router = express.Router()
const authMiddleware = require('../middlewares/auth')
const QuestionsController = require('../controllers/QuestionsController')

router.use(authMiddleware)
router.get('/', QuestionsController.getAll)
router.post('/', QuestionsController.save)
router.delete('/:id', QuestionsController.delete)

module.exports = router