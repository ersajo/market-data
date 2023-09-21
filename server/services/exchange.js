const axios = require('axios');

const getExchanges = async ({
  asset = 'stocks'
}) => {
  try {
    const { data } = await axios.get(`https://api.polygon.io/v3/reference/exchanges?asset_class=${asset}`,{
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
  getExchanges
}