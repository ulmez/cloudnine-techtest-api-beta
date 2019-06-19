const express = require('express');
const router = express.Router();
const salongController = require('../controllers/SalongController');

router.get('/', salongController.all_salongs);

module.exports = router;
