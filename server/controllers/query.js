const queryService = require('../services/query');

const getHighest = async (req, res) => {
  try {
    const {
      date,
      limit
    } = req.query;
    const data = await queryService.getHighest({ date, limit });
    res.status(200).json({
      ...data
    });
  } catch (error) {
    console.log('Error on getHighest controller', error);
    return res.status(500).json({
      msg: 'Server error',
      error: error.message
    });
  }
}

module.exports = {
  getHighest,
}