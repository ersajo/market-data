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

const getAverage = async (req, res) => {
  try {
    const {
      date,
      serie
    } = req.query;
    const data = await queryService.getAverage({ date, serie });
    res.status(200).json({
      ...data
    });
  } catch (error) {
    console.log('Error on getAverage controller', error);
    return res.status(500).json({
      msg: 'Server error',
      error: error.message
    });
  }
}

const getHighestTrading = async (req, res) => {
  try {
    const {
      date
    } = req.query;
    const data = await queryService.getHighestTrading({ date });
    res.status(200).json({
      ...data
    });
  } catch (error) {
    console.log('Error on getHighestTrading controller', error);
    return res.status(500).json({
      msg: 'Server error',
      error: error.message
    });
  }
}

const getTotalTrading = async (req, res) => {
  try {
    const {
      date,
      serie
    } = req.query;
    const data = await queryService.getTotalTrading({ date, serie });
    res.status(200).json({
      ...data
    });
  } catch (error) {
    console.log('Error on getTotalTrading controller', error);
    return res.status(500).json({
      msg: 'Server error',
      error: error.message
    });
  }
}

module.exports = {
  getHighest,
  getAverage,
  getHighestTrading,
  getTotalTrading,
}