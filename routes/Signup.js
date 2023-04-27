const express = require('express');
const router = express.Router();
const { email, phone, birthday, password} = require("@randomfire10/utils");
const { signup } = require('../controllers/Signup');

router.post('/signup', email, phone, birthday, password, signup);

module.exports = router;