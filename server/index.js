const express = require('express');
const cors = require('cors');
const Stock = require('./models/stockModel');
const stockSeed = require('./seeders/stocks');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET', 'POST', 'PUT', 'DELETE');
  next();
});

app.get('/api', (req, res, next) => {
  console.log('API');
  res.send('API response');
  next();
});

app.use((req, res, next) => {
  console.log('404');
  res.status(404).send('404');
  next();
});

(async () => {
  try {
    console.log('Create tables');
    await Stock.createTable();
    console.log('Tables created');
    if (process.env.NODE_ENV === 'development') {
      console.log('Inserting data');
      await stockSeed.run();
      console.log('Data inserted');
    }
    app.listen(PORT, () => console.log(`Listening on: http://localhost:${PORT}/`));
  } catch (error) {
    console.log(error);
  }
})();