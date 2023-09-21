const setRateLimit = require('express-rate-limit');

const rateLimit = setRateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 3, // 3 requests,
  message: 'Too many requests from this IP, please try again in an hour!',
  headers: true
});

module.exports = rateLimit;