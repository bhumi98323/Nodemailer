var express = require('express');
var router = express.Router();
var sendController = require('../controller/sendMail')

router.post('/', sendController.sendMail)

module.exports = router