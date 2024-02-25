const express = require('express');
const router = express.Router();
const authcontroller = require('../controllers/authcontroller');
const verifier =require('../middleware');

router.post('/login',verifier(["username","password"]), authcontroller.login);
router.post('/register',verifier(["username","password"]), authcontroller.register);

module.exports = router;