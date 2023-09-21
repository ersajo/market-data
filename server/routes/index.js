const express = require('express');
const marketController = require('../controllers/market');
const exchangeController = require('../controllers/exchange');

const router = express.Router();

router.get('/market/:ticker', marketController.getMarketData);
router.get('/exchange', exchangeController.getExchanges);

module.exports = router;