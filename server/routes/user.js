const express = require('express');
const router = express.Router();
const controller = require('../controllers/user');

router.post('/api/auth/signup', controller.userSignup);
router.post('/api/auth/login', controller.userLogin);
router.get('/sauces', controller.verify, controller.authenticated)

module.exports = router;