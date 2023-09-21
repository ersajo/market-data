const sequelize = require('../util/database');

const createTable = async () => {
  try {
    await sequelize.query(`IF NOT EXISTS 
      (SELECT * FROM sysobjects WHERE name='stocks' and xtype='U')
      CREATE TABLE stocks (
        stock_id INTEGER IDENTITY(1,1) NOT NULL,
        stock_symbol VARCHAR(255) NOT NULL,
        stock_series VARCHAR(255) NOT NULL,
        stock_open FLOAT NOT NULL,
        stock_high FLOAT NOT NULL,
        stock_low FLOAT NOT NULL,
        stock_close FLOAT NOT NULL,
        stock_last FLOAT NOT NULL,
        stock_prevClose FLOAT NOT NULL,
        stock_totTrdQty FLOAT NOT NULL,
        stock_totTrdVal FLOAT NOT NULL,
        stock_timestamp DATETIME NOT NULL,
        stock_totalTrades INTEGER NOT NULL,
        stock_isin VARCHAR(255) NOT NULL,
        PRIMARY KEY (stock_id)
      )`);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const insert = async (query) => {
  try {
    await sequelize.query(`INSERT INTO stocks (
      stock_symbol,
      stock_series,
      stock_open,
      stock_high,
      stock_low,
      stock_close,
      stock_last,
      stock_prevClose,
      stock_totTrdQty,
      stock_totTrdVal,
      stock_timestamp,
      stock_totalTrades,
      stock_isin
    ) VALUES ${query}`);
  } catch (error) {
    console.log(error);
    throw error;
  }
}

const countTotal = async () => {
  try {
    const [results] = await sequelize.query(`SELECT COUNT(*) as total FROM stocks`);
    return results[0].total;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

module.exports = {
  createTable,
  insert,
  countTotal,
};