const express = require('express');
const marketController = require('../controllers/market');
const exchangeController = require('../controllers/exchange');
const newsController = require('../controllers/news');
const queryController = require('../controllers/query');

const router = express.Router();

router.get('/market/:ticker', marketController.getMarketData);
router.get('/exchange', exchangeController.getExchanges);
router.get('/news', newsController.getNews);
router.get('/database/highest', queryController.getHighest);
router.get('/database/average', queryController.getAverage);

module.exports = router;