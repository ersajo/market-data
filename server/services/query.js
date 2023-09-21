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

const getAverage = async ({
  date,
  serie
}) => {
  try {
    const data = await stockModel.getAverage({ date, serie });
    return data;
  } catch (error) {
    console.log('Error on getAverage service', error);
    throw new Error(error);
  }
}

module.exports = {
  getHighest,
  getAverage,
}