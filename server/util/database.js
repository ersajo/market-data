const Sequelize = require('sequelize');

const sequelize = new Sequelize(
  process.env.SQL_DATABASE,
  process.env.SQL_USER,
  process.env.SQL_PASSWORD,
  {
    host: process.env.SQL_HOST,
    port: process.env.SQL_PORT,
    dialect: 'mssql',
    dialectOptions: {
      options: {
        encrypt: false
      }
    },
    pool: {
      max: 5,
      min: 0,
      idle: 10000,
      acquire: 30000
    }
  }
);

module.exports = sequelize;