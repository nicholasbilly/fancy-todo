const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')

router.post('/sign-in', userController.signIn)

module.exports = router