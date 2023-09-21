const newsService = require('../services/news');

const getNews = async (req, res) => {
  try {
    const { ticker, order, limit, sort } = req.query;
    const data = await newsService.getNews({ ticker, order, limit, sort });
    res.status(200).json({
      ...data
    });
  } catch (error) {
    console.log('Error on getNews controller', error);
    return res.status(500).json({
      msg: 'Server error',
      error: error.message
    });
  }
}

module.exports = {
  getNews
}