const authcontroller = require('../controllers/catagory.controller');

const express = require('express');
const router = express.Router();

router.post('/register',authcontroller.createCategory);
router.get('/categories',authcontroller.getAllCategories);

module.exports = router;