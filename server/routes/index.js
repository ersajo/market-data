const express = require('express');
const marketController = require('../controllers/market');

const router = express.Router();

router.get('/market/:ticker', marketController.getMarketData);

module.exports = router;