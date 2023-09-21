const exchangeService = require('../services/exchange');

const getExchanges = async (req, res) => {
  try {
    const { asset } = req.query;
    const data = await exchangeService.getExchanges({ asset });
    res.status(200).json({
      ...data
    });
  } catch (error) {
    console.log('Error on getExchanges controller', error);
    return res.status(500).json({
      msg: 'Server error',
      error: error.message
    });
  }
}

module.exports = {
  getExchanges
}