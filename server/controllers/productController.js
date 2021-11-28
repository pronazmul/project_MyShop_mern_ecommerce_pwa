// External Modules:
const createError = require('http-errors')

// Internal Modules:
const Product = require('../models/productModel')

/**
 * @desc   Fetch All Product & Advance Search Option
 * @Route  GET /api/products?keyword=abc&itemShow=2&currentPage=1
 * @access public
 */
const allProducts = async (req, res, next) => {
  try {
    const searchQuery = req.query.keyword
      ? {
          $or: [
            { name: { $regex: req.query.keyword, $options: 'i' } },
            { brand: { $regex: req.query.keyword, $options: 'i' } },
            { category: { $regex: req.query.keyword, $options: 'i' } },
          ],
        }
      : {}
    const product = await Product.find({ ...searchQuery })
    res.status(200).json(product)
  } catch (error) {
    next(createError(500, 'Server Error!'))
  }
}

/**
 * @desc   Fetch Single Product
 * @Route  GET /api/products/:id
 * @access public
 */
const singleProduct = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id)
    res.status(200).json(product)
  } catch (error) {
    next(createError(500, 'Server Error!'))
  }
}

/**
 * @desc   CREATE NEW PRODUCT
 * @Route  POST /api/products/
 * @access public
 */
const createNewProduct = async (req, res, next) => {
  try {
    const images = req.files ? req.files.map((item) => item.filename) : []
    const { name, brand, category, price, countInStock, description } = req.body
    const newProduct = new Product({
      name,
      brand,
      category,
      price,
      countInStock,
      description,
      images,
    })
    const result = await newProduct.save()
    res.status(201).json(result)
  } catch (error) {
    next(createError(500, 'Product Creation Failed!'))
  }
}

// Module Exports :
module.exports = { allProducts, singleProduct, createNewProduct }
