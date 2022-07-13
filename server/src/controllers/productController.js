// External Modules :
const createError = require('http-errors')

// Internal Modules :
const Product = require('../models/productModel')
const {
  mongooseErrorFomatter,
  regxSearchQuery,
  getRating,
} = require('../utilities/helperFunctions')
const { unlinkImage } = require('../utilities/unlinkFile')

/**
 * @description This API is used to Create New Product.
 * @Route POST /api/products
 * @Access Admin
 * @returns {Object} - Created Product.
 */

const createProduct = async (req, res, next) => {
  try {
    let newProduct = new Product({
      user: req.user._id,
      ...req.body,
      images: req.files.links || [],
    })
    let product = await newProduct.save()
    res.status(200).json({ status: 'success', data: product })
  } catch (error) {
    if (error._message) {
      res.status(500).json({
        status: 'fail',
        message: 'Input Validation Failed',
        details: mongooseErrorFomatter(error.errors),
      })
    } else {
      next(createError(500, 'Data Failed to Create'))
    }
  }
}

/**
 * @description This API is used to Fetch All products.
 * @Route GET /api/products
 * @Access public
 * @returns {Object} - Created Product.
 */
const allProduct = async (req, res, next) => {
  try {
    let query = req.query.search
      ? regxSearchQuery(req.query.search, [
          'name',
          'brand',
          'category',
          'description',
        ])
      : {}
    let projection = {}
    let entities = req.query.entities ? Number(req.query.entities) : false
    let page = req.query.page ? Number(req.query.page) : false
    const count = await Product.countDocuments(query)
    if (entities && page) {
      const data = await Product.find(query, projection)
        .limit(entities)
        .skip(entities * (page - 1))
      res.status(200).json({
        status: 'success',
        data,
        count,
        pages: Math.ceil(count / entities),
        currentPage: page,
      })
    } else {
      let data = await Product.find(query, projection)
      res.status(200).json({ status: 'success', data: data, count })
    }
  } catch (error) {
    next(createError(500, 'Failed To Fetch Products'))
  }
}

/**
 * @description This API is used to Fetch Single product.
 * @Route GET /api/products/:id
 * @Access public
 * @returns {Object} - Created Product.
 */
const singleProduct = async (req, res, next) => {
  try {
    let query = { _id: req.params.id }
    let projection = {}
    let data = await Product.findOne(query, projection)
    res.status(200).json({ status: 'success', data: data })
  } catch (error) {
    next(createError(500, 'Failed To Fetch'))
  }
}

/**
 * @description This API is used delete single image.
 * @Route DELETE /api/products/upload/:id
 * @Access public
 * @returns {String} - Delete Message Message.
 */
const deleteSingleImage = async (req, res, next) => {
  try {
    let link = req.query.link
    let query = { _id: req.params.id }
    let projection = { images: 1, _id: 0 }
    let { images } = await Product.findOne(query, projection)
    if (images.indexOf(link) > -1) {
      await unlinkImage(link)
      images.splice(images.indexOf(link), 1)
      await Product.findOneAndUpdate(query, { images })
      res.status(200).json({ status: 'success', message: 'Image Deleted' })
    } else {
      res.status(200).json({ status: 'success', message: 'Image Not Found' })
    }
  } catch (error) {
    res
      .status(500)
      .json({ status: 'success', message: 'Image Failed To Delete' })
  }
}

/**
 * @description This API is used to update single product.
 * @Route PUT /api/products/:id
 * @Access ADMIN
 * @returns {Object} - Updated Data.
 */
const updateProduct = async (req, res, next) => {
  try {
    let query = { _id: req.params.id }
    let updatedProduct = req.body
    let options = { runValidators: true, new: true }
    let data = await Product.findOneAndUpdate(query, updatedProduct, options)
    res.status(200).json({ status: 'success', data })
  } catch (error) {
    if (error._message) {
      res.status(500).json({
        status: 'fail',
        message: 'Input Validation Failed',
        details: mongooseErrorFomatter(error.errors),
      })
    } else {
      next(createError(500, 'Failed To Update'))
    }
  }
}

/**
 * @description This API is used Delete Product With Unlinking Images.
 * @Route DELETE /api/products/:id
 * @Access ADMIN
 * @returns {String} - Message.
 */
const deleteProduct = async (req, res, next) => {
  try {
    let query = { _id: req.params.id }
    let projection = { images: 1, _id: 0 }
    let { images } = await Product.findOne(query, projection)
    if (images) {
      images.forEach((link) => unlinkImage(link))
      await Product.findOneAndDelete(query)
    } else {
      await Product.findOneAndDelete(query)
    }
    res
      .status(200)
      .json({ status: 'success', message: 'Product Deleted Successfully' })
  } catch (error) {
    next(createError(500, 'Failed to Delete Product'))
  }
}

/**
 * @description This API is used Add review of Proudct.
 * @Route POST /api/products/review/:id
 * @Access Customer
 * @returns {Object} - Product With Review.
 */
const addReview = async (req, res, next) => {
  try {
    let query = { _id: req.params.id }
    let projection = { reviews: 1, numReviews: 1, rating: 1, _id: 0 }
    let options = { runValidators: true, new: true }
    let { reviews, numReviews, rating } = await Product.findOne(
      query,
      projection
    )
    if (
      reviews.length &&
      reviews.map((review) => `${review.user}`).indexOf(req.user._id) > -1
    ) {
      next(createError(500, 'You Already Added Review'))
    } else {
      let newReview = {
        user: req.user._id,
        name: req.user.name,
        ...req.body,
      }
      reviews.unshift(newReview)
      numReviews = reviews.length
      rating = getRating(reviews.map((review) => review.rating))
      let product = await Product.findOneAndUpdate(
        query,
        { reviews, numReviews, rating },
        options
      )
      res.status(200).json({ status: 'success', data: product.reviews })
    }
  } catch (error) {
    if (error._message) {
      res.status(500).json({
        status: 'fail',
        message: 'Input Validation Failed',
        details: mongooseErrorFomatter(error.errors),
      })
    } else {
      next(createError(500, 'Failed to add review'))
    }
  }
}

/**
 * @description This API is used Delete review of Proudct.
 * @Route DELETE /api/products/review/:id
 * @Access Customer
 * @returns {Array} - Rest Reviews After Delete.
 */
const deleteReview = async (req, res, next) => {
  try {
    let query = { _id: req.params.id }
    let reviewId = req.query.reviewId
    let projection = { reviews: 1, numReviews: 1, rating: 1, _id: 0 }
    let options = { runValidators: true, new: true }
    let { reviews, numReviews, rating } = await Product.findOne(
      query,
      projection
    )

    if (
      reviews.length &&
      reviews.map((review) => `${review._id}`).indexOf(reviewId) > -1
    ) {
      let updatedReview = reviews.filter(
        (review) => `${review._id}` !== reviewId
      )
      numReviews = updatedReview.length
      rating = getRating(updatedReview.map((review) => review.rating))
      let product = await Product.findOneAndUpdate(
        query,
        { reviews: updatedReview, numReviews, rating },
        options
      )
      res.status(200).json({
        status: 'success',
        data: product.reviews,
      })
    } else {
      next(createError(500, 'No review found'))
    }
  } catch (error) {
    next(createError(500, 'Failed to delete review'))
  }
}

/**
 * @description This API is Used to add new Product Images as form-data.
 * @Route POST /api/products/upload/:id
 * @Access Admin
 * @returns {Object} - Updated Product With Images.
 */
const updateImages = async (req, res, next) => {
  try {
    let query = { _id: req.params.id }
    let projection = { images: 1, _id: 0 }
    let options = { runValidators: true, new: true }
    let { images } = await Product.findOne(query, projection)
    if (req.files.links) {
      images.splice(0, 0, ...req.files.links)
      if (images.length > 5) {
        let removedImages = images.splice(5, images.length)
        removedImages.forEach((link) => unlinkImage(link))
        let product = await Product.findOneAndUpdate(query, { images }, options)
        res.status(200).json({
          status: 'success',
          data: product,
        })
      } else {
        let product = await Product.findOneAndUpdate(query, { images }, options)
        res.status(200).json({
          status: 'success',
          data: product,
        })
      }
    } else {
      next(createError(500, 'No Image Found'))
    }
  } catch (error) {
    if (req.files.links) {
      req.files.links.forEach((link) => unlinkImage(link))
    }
    next(createError(500, 'Data Failed to Create'))
  }
}

// Module Exports
module.exports = {
  createProduct,
  allProduct,
  singleProduct,
  deleteSingleImage,
  updateProduct,
  deleteProduct,
  addReview,
  deleteReview,
  updateImages,
}
