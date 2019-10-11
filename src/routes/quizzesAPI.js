const express = require('express')
const router = express.Router()
const authMiddleware = require('../middlewares/auth')
const QuizzesController = require('../controllers/QuizzesController')

router.use(authMiddleware)
router.get('/', QuizzesController.getAll)
router.get('/:id', QuizzesController.getById)
router.post('/', QuizzesController.save)
router.delete('/:id', QuizzesController.delete)

module.exports = router