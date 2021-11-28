// External Modules:
const createError = require('http-errors')

// Internal Modules:
const People = require('../models/peopleModel')

/**
 * @desc   Check Existed User By Mobile Number
 * @Route  GET /api/user/:id
 * @access public
 */
const checkExistedUser = async (req, res, next) => {
  try {
    const user = await People.findOne({ mobile: req.params.id })
    if (user) {
      res.status(200).send(true)
    } else {
      res.status(200).send(false)
    }
  } catch (error) {
    next(createError(500, 'Server Error!'))
  }
}

// Module Exports :
module.exports = { checkExistedUser }
