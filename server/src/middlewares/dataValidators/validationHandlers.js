// external imports
const { validationResult } = require('express-validator')

// Enternal Modules
const {
  expressValidatorErrorFormatter,
} = require('../../utilities/helperFunctions')
const { unlinkImage } = require('../../utilities/unlinkFile')

/**
 * @desc Check Any Error Occured During Validation from Express Validator on Json Body. If Error Occured, Send Error Response. Or Next Middleware.
 * @param {Object} req - Express Request Object
 * @param {Object} res - Express Response Object
 * @param {Object} next - Express Next Middleware Function
 * @returns {Function} - Express Next Middleware
 */
const jsonValidationHandler = function (req, res, next) {
  const errors = validationResult(req)
  if (errors.isEmpty()) {
    next()
  } else {
    const formattedError = expressValidatorErrorFormatter(errors.mapped())
    res.status(500).json({
      status: 'fail',
      message: 'Input Validation Failed',
      details: formattedError,
    })
  }
}

/**
 * @desc Check Any Error Occured During Validation from Express Validator on Multiple Multipart form Data. If Error Occured, Unlink Uploded Images and Send Error Response. Or Next Middleware.
 * @param {Object} req - Express Request Object
 * @param {Object} res - Express Response Object
 * @param {Object} next - Express Next Middleware Function
 * @returns {Function} - Express Next Middleware
 */
const multipleFormDataValidationHandler = function (req, res, next) {
  const errors = validationResult(req)
  if (errors.isEmpty()) {
    next()
  } else {
    if (req.files.links) {
      req.files.links.forEach((link) => unlinkImage(link))
    }
    const formattedError = expressValidatorErrorFormatter(errors.mapped())
    res.status(500).json({
      status: 'fail',
      message: 'Input Validation Failed',
      details: formattedError,
    })
  }
}

// Export Modules:
module.exports = { jsonValidationHandler, multipleFormDataValidationHandler }
