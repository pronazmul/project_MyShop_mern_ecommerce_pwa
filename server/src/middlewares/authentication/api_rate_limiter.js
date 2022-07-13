// External Modules:
const expressRateLimit = require('express-rate-limit')

/**
 * @description Express Rate Limiter Middleware
 * @param {number} max - Maximum number of request
 * @param {number} milisecond - Time in milisecond
 * @returns {Object} - Rate Limiter Object.
 */

const apiRateLimiter = (max = 100, milisecond = 60000) => {
  return expressRateLimit({
    windowMs: milisecond, // 1 minute
    max: max, // limit each IP to 100 requests per windowMs
    message: 'Too many requests from this IP, please try again after 10 Munite',
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
  })
}

// Module Exports:
module.exports = { apiRateLimiter }
