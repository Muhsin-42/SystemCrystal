const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

router.post('/login', adminController.adminLogin);
router.post('/update', adminController.postUpdate);

module.exports = router;
