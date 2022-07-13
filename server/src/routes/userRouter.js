// External Modules:
const express = require('express')
const router = express.Router()

// Internal Middlewares:
const {
  createUser,
  userLogin,
  updateProfile,
  uploadProfilePicture,
  getSingleUser,
  updateUser,
  deleteUser,
  allUsers,
} = require('../controllers/userController')
const loginChecker = require('../middlewares/authentication/loginChecker')
const roleChecker = require('../middlewares/authentication/roleChecker')
const {
  jsonValidationHandler,
} = require('../middlewares/dataValidators/validationHandlers')
const {
  userCreateDataValidation,
  userUpdateDataValidation,
} = require('../middlewares/dataValidators/validationSchemas')
const { singleUploader } = require('../middlewares/upload/imageUploader')

// @Access Public
router
  .route('/')
  .post(userCreateDataValidation, jsonValidationHandler, createUser)
router.route('/login').post(userLogin)

// @Access LoggedIn User
router.route('/update').put(loginChecker, updateProfile)
router
  .route('/upload')
  .post(loginChecker, singleUploader('image', 'users'), uploadProfilePicture)

// @Access Admin
router
  .route('/:id')
  .get(loginChecker, roleChecker(['admin']), getSingleUser)
  .put(
    loginChecker,
    roleChecker(['admin']),
    userUpdateDataValidation,
    jsonValidationHandler,
    updateUser
  )
  .delete(loginChecker, roleChecker(['admin']), deleteUser)
router.route('/').get(loginChecker, roleChecker(['admin']), allUsers)

// Module Exports
module.exports = router
