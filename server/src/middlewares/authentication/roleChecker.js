// External Modules:
const createError = require('http-errors')

/**
 * @description This Middleware Check User Role from `req.user.role` Added by `loginChecker` Middleware.
 * @param {Array} arrayOfRoles - Array of Roles.
 * @returns {Function} - Express Next() Middleware
 */

const roleChecker =
  (arrayOfRoles = []) =>
  (req, res, next) => {
    if (req.user && req.user.role && arrayOfRoles.includes(req.user.role)) {
      next()
    } else {
      next(createError(401, `Access Denied! ${arrayOfRoles.join(' || ')} Only`))
    }
  }

// Module Export
module.exports = roleChecker
