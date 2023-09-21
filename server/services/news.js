const axios = require('axios');

const getNews = async ({
  ticker,
  order = 'desc',
  limit = 20,
  sort
}) => {
  try {
    let query = `?order=${order}&limit=${limit}`;
    if (ticker) query += `&tickers=${ticker}`;
    if (sort) query += `&sort=${sort}`;
    const { data } = await axios.get(`https://api.polygon.io/v2/reference/news${query}`, {
      headers: {
        'Authorization': `Bearer ${process.env.POLYGON_API_KEY}`
      }
    });
    delete data.next_url;
    return data;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
}

module.exports = {
  getNews
}