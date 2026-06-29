const authcontroller = require('../controllers/auth.controller');

const express = require('express');
const router = express.Router();

router.post('/register',authcontroller.register);
router.post('/login',authcontroller.login);
router.get('/users',authcontroller.getallusers);
router.get('/users/:id',authcontroller.getuserbyid);

module.exports = router;
