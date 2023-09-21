const marketService = require('../services/market');

const getMarketData = async (req, res) => {
  try {
    const { ticker } = req.params;
    const { from, to, sort } = req.query;
    const data = await marketService.getMarketData({ ticker, from, to, sort });
    res.status(200).json({
      ...data
    });
  } catch (error) {
    console.log('Error on getMarketData controller', error);
    return res.status(500).json({
      msg: 'Server error',
      error: error.message
    });
  }
}

module.exports = {
  getMarketData
}