// External Modules:
const express = require('express')
const router = express.Router()

// Internal Middlewares:
const loginChecker = require('../middlewares/authentication/loginChecker')
const roleChecker = require('../middlewares/authentication/roleChecker')

// Controller
const {
  createOrder,
  allOrders,
  orderDetails,
  deleteOrder,
  confirmDelivery,
} = require('../controllers/orderController')

// @Access LoggedIn User
router.route('/').post(loginChecker, createOrder)

// @Access Admin
router.route('/').get(loginChecker, allOrders)
router
  .route('/:id')
  .get(loginChecker, orderDetails)
  .delete(loginChecker, deleteOrder)
  .put(loginChecker, confirmDelivery)

// Module Exports
module.exports = router
