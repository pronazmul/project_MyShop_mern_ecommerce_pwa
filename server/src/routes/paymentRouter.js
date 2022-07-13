// External Modules:
const express = require('express')
const router = express.Router()

// Internal Middlewares:
const loginChecker = require('../middlewares/authentication/loginChecker')
const roleChecker = require('../middlewares/authentication/roleChecker')

// Controller
const {
  makePayment,
  paymentSuccess,
  paymentFail,
  paymentCancel,
  paymentIpn,
} = require('../controllers/paymentController')

// @Access LoggedIn User
router.route('/:id').get(makePayment)

router.route('/success').post(paymentSuccess)
router.route('/fail').post(paymentFail)
router.route('/cancel').post(paymentCancel)
router.route('/ipn').post(paymentIpn)

// Module Exports
module.exports = router
