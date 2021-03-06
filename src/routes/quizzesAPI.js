const express = require('express')
const router = express.Router()
const authMiddleware = require('../middlewares/auth')
const QuizzesController = require('../controllers/QuizzesController')

router.use(authMiddleware)
router.get('/:id', QuizzesController.getById)
router.get('/code/:accessCode', QuizzesController.getByCode)
router.post('/', QuizzesController.save)
router.delete('/:id', QuizzesController.delete)
router.post('/addscore', QuizzesController.addUserScore)

module.exports = router