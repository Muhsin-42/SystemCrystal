const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

router.post('/login', adminController.adminLogin);
router.post('/update/:userId',adminController.verifyToken, adminController.postUpdate);
router.delete('/update/:updateId',adminController.verifyToken, adminController.deleteUpdate);
router.get('/update', adminController.getUpdates);

module.exports = router;
