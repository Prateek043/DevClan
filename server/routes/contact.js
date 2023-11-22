const express = require('express');
const router = express.Router();

const contactCtrl = require('../controllers/contactController');


router.route('/').post(contactCtrl.handleContact);


module.exports = router;
