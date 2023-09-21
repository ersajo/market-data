'use strict';
const fs = require('fs/promises');

const Stock = require('../models/stockModel');

module.exports = {
  async run() {
    const stocks = await fs.readFile('./assets/stocks_data.csv', 'utf-8');
    let query = '';
    const queries = [];
    const promises = [];
    let count = 0;
    const totalStored = await Stock.countTotal();
    const start = totalStored + 1;
    if (start > totalStored) return;
    const end = totalStored + 100001 > stocks.split('\n').length -2 ? -1 : totalStored + 100001;
    stocks.split('\n').slice(start, end).forEach(row => {
      if (count === 1000) {
        queries.push(query.slice(0, -1));
        query = '';
        count = 0;
      }
      const data = row.split(',');
      query += `('${data[0]}', '${data[1]}', ${data[2]}, ${data[3]}, ${data[4]}, ${data[5]}, ${data[6]}, ${data[7]}, ${data[8]}, ${data[9]}, ${data[10]}, ${data[11]}, '${data[12]}'),`;
      count++;
    });
    queries.push(query.slice(0, -1));
    queries.forEach(query => {
      promises.push(Stock.insert(query));
    });
    console.log('Inserting data', promises.length);
    await Promise.all(promises);
  }
};