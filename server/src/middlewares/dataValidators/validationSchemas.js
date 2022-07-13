// External Modules:
const { check } = require('express-validator')
const createError = require('http-errors')
const { passwordRegex } = require('../../utilities/regularExpressions')

const userCreateDataValidation = [
  check('name')
    .exists()
    .withMessage('Name is required')
    .isAlpha('en-US', { ignore: ' -' })
    .withMessage('Name must not contain anything other than alphabet')
    .trim(),
  check('email')
    .exists()
    .withMessage('Email is Required')
    .isEmail()
    .withMessage('Email is not valid'),
  check('password')
    .exists()
    .withMessage('Password is Required')
    .matches(passwordRegex)
    .withMessage(
      'Password should contain Uppercase, Lowercase and Special Character must be 6 to 15 character long!'
    ),
]

const userUpdateDataValidation = [
  check('name').optional(),
  check('email').optional().isEmail().withMessage('Email is not valid'),
  check('password')
    .optional()
    .matches(passwordRegex)
    .withMessage(
      'Password should contain Uppercase, Lowercase and Special Character must be 6 to 15 character long!'
    ),
  check('role')
    .optional()
    .isIn(['admin', 'user'])
    .withMessage('Role is not valid'),
  check('status')
    .optional()
    .isIn(['active', 'inactive'])
    .withMessage('Status is not valid'),
]

const productCreateDataValidation = [
  check('name')
    .exists()
    .withMessage('Product name is required')
    .isAlpha('en-US', { ignore: ' -' })
    .withMessage('Product name must not contain anything other than alphabet')
    .trim(),
  check('brand')
    .optional()
    .isAlpha('en-US', { ignore: ' -' })
    .withMessage('Product brand must not contain anything other than alphabet'),
  check('category')
    .exists()
    .withMessage('Product Category is required')
    .isIn(['electronics', 'fashion', 'home', 'sports', 'others'])
    .withMessage('Category is not valid'),
  check('description').optional(),
  check('price').isNumeric().withMessage('Price must be a number'),
  check('countInStock')
    .isNumeric()
    .withMessage('Count in stock must be a number'),
]

// Module Exports:
module.exports = {
  userCreateDataValidation,
  userUpdateDataValidation,
  productCreateDataValidation,
}
