// External Modules:
const express = require('express')
const router = express.Router()

// Internal Middlewares:
const {
  createProduct,
  allProduct,
  singleProduct,
  deleteSingleImage,
  updateProduct,
  deleteProduct,
  addReview,
  deleteReview,
  updateImages,
} = require('../controllers/productController')
const loginChecker = require('../middlewares/authentication/loginChecker')
const roleChecker = require('../middlewares/authentication/roleChecker')
const {
  multipleFormDataValidationHandler,
} = require('../middlewares/dataValidators/validationHandlers')
const {
  productCreateDataValidation,
} = require('../middlewares/dataValidators/validationSchemas')
const { multipleUploader } = require('../middlewares/upload/imageUploader')

// @Access Public:
router.route('/').get(allProduct)
router.route('/:id').get(singleProduct)

// @Access Admin:
router.route('/').post(
  loginChecker,
  // roleChecker(['admin']),
  multipleUploader('images', 'products'),
  productCreateDataValidation,
  multipleFormDataValidationHandler,
  createProduct
)
router.route('/:id').put(updateProduct).delete(deleteProduct)
router
  .route('/upload/:id')
  .delete(deleteSingleImage)
  .post(multipleUploader('images', 'products'), updateImages)

// @Access LoggedIn:
router
  .route('/review/:id')
  .post(loginChecker, addReview)
  .delete(loginChecker, deleteReview)

// Module Exports
module.exports = router
