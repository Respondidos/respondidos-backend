let express = require('express')
let router = express.Router()
let HelloController = require('../controllers/helloController')

router.get('/hello', HelloController.hello)

module.exports = router