// External modules:
const express = require('express')
const router = express.Router()

// Internal Modules:
const {
  allProducts,
  singleProduct,
  createNewProduct,
} = require('../controllers/productController')
const { productsUpload } = require('../middlewares/fileUpload/multipleUploader')

// Routing:
router.route('/').get(allProducts)
router.route('/:id').get(singleProduct)
router.route('/').post(productsUpload, createNewProduct)

// Module Export:
module.exports = router
