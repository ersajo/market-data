const stockModel = require('../models/stockModel');

const getHighest = async ({
  date,
  limit
}) => {
  try {
    const data = await stockModel.getHighest({ date, limit });
    return data;
  } catch (error) {
    console.log('Error on getHighest service', error);
    throw new Error(error);
  }
}

module.exports = {
  getHighest,
}