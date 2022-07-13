// External Modules :
const createError = require('http-errors')
const Order = require('../models/orderModel')

// Internal Modules :
const { mongooseErrorFomatter } = require('../utilities/helperFunctions')

/**
 * @description This API is used to Create New Order.
 * @Route POST /api/orders
 * @Access loggedIn
 * @returns {Object} - Created Order Object.
 */

const createOrder = async (req, res, next) => {
  try {
    let orderObject = { ...req.body, user: req.user._id }
    let newOrder = new Order(orderObject)
    let order = await newOrder.save()
    res.status(200).json({ status: 'success', data: order })
  } catch (error) {
    if (error._message) {
      res.status(500).json({
        status: 'fail',
        message: 'Input Validation Failed',
        details: mongooseErrorFomatter(error.errors),
      })
    } else {
      next(createError(500, 'Failed To Place Order'))
    }
  }
}

/**
 * @description This API Fetch All Placed Orders Create Dynamic Pagination.
 * @Route GET /api/v1/orders
 * @Access Admin
 * @returns {Array} - Array of All Orders
 */
const allOrders = async (req, res, next) => {
  try {
    // Managing Query params:
    let entities = req.query.entities ? Number(req.query.entities) : false
    let page = req.query.page ? Number(req.query.page) : false
    let payment = req.query.payment
      ? { isPaid: Boolean(Number(req.query.payment)) }
      : {}
    let delivery = req.query.delivery
      ? { isDelivered: Boolean(Number(req.query.delivery)) }
      : {}

    let query = { ...payment, ...delivery }
    let projection = {
      user: 0,
      taxPrice: 0,
      shippingPrice: 0,
      shippingAddress: 0,
      paymentMethod: 0,
      paymentResult: 0,
    }

    const dataCount = await Order.countDocuments(query)
    if (entities && page) {
      const data = await Order.find(query, projection)
        .limit(entities)
        .skip(entities * (page - 1))
      res.status(200).json({
        status: 'success',
        data: data,
        count: dataCount,
        pages: Math.ceil(dataCount / entities),
        currentPage: page,
      })
    } else {
      let data = await Order.find(query, projection)
      res.status(200).json({ status: 'success', data: data, count: dataCount })
    }
  } catch (error) {
    next(createError(500, 'Failed To Fetch Orders'))
  }
}

/**
 * @description This API Fetch All Placed Orders.
 * @Route GET /api/v1/orders/:id
 * @Access Admin
 * @returns {Array} - Array of All Orders
 */
const orderDetails = async (req, res, next) => {
  try {
    let query = { _id: req.params.id }
    let projection = {}
    let data = await Order.findOne(query, projection)
    res.status(200).json({ status: 'success', data: data })
  } catch (error) {
    next(createError(500, 'Failed To Fetch'))
  }
}

/**
 * @description This API Fetch All Placed Orders.
 * @Route DELETE /api/v1/orders/:id
 * @Access Admin
 * @returns {String} - Delete Successfull Message
 */
const deleteOrder = async (req, res, next) => {
  try {
    let query = { _id: req.params.id }
    await Order.deleteOne(query)
    res.status(200).json({ status: 'success', message: 'Delete Successfull' })
  } catch (error) {
    next(createError(500, 'Failed To Fetch'))
  }
}

/**
 * @description Confirm product Delivered checking Payment Status.
 * @Route PUT /api/v1/orders/:id
 * @Access Admin
 * @returns {Object} - Delivery Confirmed Product.
 */
const confirmDelivery = async (req, res, next) => {
  try {
    let query = { _id: req.params.id }
    let projection = { isPaid: 1, _id: 0 }
    let { isPaid } = await Order.findOne(query, projection)
    if (isPaid) {
      let update = { isDelivered: true, deliveredAt: Date.now() }
      let options = { new: true }
      let data = await Order.findOneAndUpdate(query, update, options)
      res.status(200).json({ status: 'success', data: data })
    } else {
      next(createError(500, 'Confirm Payment First'))
    }
    res.status(200).json({ status: 'success', data: data })
  } catch (error) {
    next(createError(500, 'Failed To Confirm Delivered'))
  }
}

// Module Exports
module.exports = {
  createOrder,
  allOrders,
  orderDetails,
  deleteOrder,
  confirmDelivery,
}
