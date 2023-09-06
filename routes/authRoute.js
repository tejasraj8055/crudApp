const express = require('express')
const {loginController, profileController} = require('../controller/authController')
const { protect } = require('../middleware/protectMiddleware')
const router = express.Router()

router.post('/login', loginController)
router.get('/profile',protect, profileController)

module.exports = router