const express = require('express')
const router = express.Router()
const AuthController = require('../controllers/AuthController')

router.post('/register', AuthController.register)
router.post('/authenticate', AuthController.authenticate)

module.exports = router