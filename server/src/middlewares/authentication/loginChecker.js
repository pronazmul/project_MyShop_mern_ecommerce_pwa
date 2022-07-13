// External Modules:
const jwt = require('jsonwebtoken')
const createError = require('http-errors')

/**
 * @description This Middleware Check Auth token from header and verify it. If token is valid return next Middleware and add user data to req object else close request cycle.
 */

const loginChecker = (req, res, next) => {
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    let token = req.headers.authorization.split(' ')[1]
    if (token) {
      jwt.verify(token, process.env.JWT_SECRET, (error, decoded) => {
        if (error) {
          next(createError(401, 'Unauthorized Request'))
        } else {
          req.user = decoded
          next()
        }
      })
    } else {
      next(createError(401, 'Unauthorized Request'))
    }
  } else {
    next(createError(401, 'Unauthorized Request'))
  }
}

// Module Export
module.exports = loginChecker
