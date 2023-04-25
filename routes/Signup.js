const express = require('express');
const router = express.Router();
const { validateEmail, validatePhone, validateBirthday, validatePassword} = require("@randomfire10/utils");
const { signup } = require('../controllers/Signup');

router.post('/signup', validateEmail, validatePhone, validateBirthday, validatePassword, signup);

module.exports = router;