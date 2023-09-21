const axios = require('axios');
const moment = require('moment/moment');

const getMarketData = async ({
  ticker,
  from = moment().format('YYYY-MM-DD'),
  to = moment().format('YYYY-MM-DD'),
  sort = 'asc'
}) => {
  try {
    const { data } = await axios.get(`https://api.polygon.io/v2/aggs/ticker/${ticker}/range/1/day/${from}/${to}?adjusted=true&sort=${sort}`, {
      headers: {
        'Authorization': `Bearer ${process.env.POLYGON_API_KEY}`
      }
    });
    return data;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
}

module.exports = {
  getMarketData
}