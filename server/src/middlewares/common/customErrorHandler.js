// External Modules:
const createError = require('http-errors')

/**
 * Description: Not Found Handler
 * @param {object} req - Request object
 * @param {object} res - Response object
 * @param {function} next - Next function
 */

const notFoundHandler = (req, res, next) => {
  next(createError(404, `Not Found - ${req.originalUrl}`))
}

/**
 * Description: Error Handler
 * @param {object} error - Application errors
 * @param {object} req - Request object
 * @param {object} res - Response object
 * @param {function} next - Next function
 */

const errorHandler = (error, req, res, next) => {
  const errorMessage =
    process.env.NODE_ENV === 'production'
      ? { status: 'fail', message: error.message }
      : { status: 'fail', message: error.message, stack: error.stack }
  res.status(error.status || 500).json(errorMessage)
}

// Module Exports
module.exports = { notFoundHandler, errorHandler }
