// External modules:
const express = require('express')
const router = express.Router()

// Internal Modules:
const {
  makePayment,
  paymentSuccess,
  paymentFail,
  paymentCancel,
  paymentIpn,
} = require('../controllers/paymentController')

// Routing:
router.route('/').get(makePayment)
router.route('/success').post(paymentSuccess)
router.route('/fail').post(paymentFail)
router.route('/cancel').post(paymentCancel)
router.route('/ipn').post(paymentIpn)

// Module Export:
module.exports = router
