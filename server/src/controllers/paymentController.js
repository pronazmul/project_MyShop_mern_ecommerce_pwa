// External Modules :
const { response } = require('express')
const createError = require('http-errors')
const SSLCommerzPayment = require('sslcommerz-lts')
const Order = require('../models/orderModel')

// Internal Modules :
const {
  mongooseErrorFomatter,
  makeSSLObject,
} = require('../utilities/helperFunctions')

/**
 * @description API Used to make Payment.
 * @Route POST /api/payment
 * @Access loggedIn
 * @returns {} - .
 */

const makePayment = async (req, res, next) => {
  try {
    const query = { _id: req.params.id }
    const orderDetails = await Order.findOne(query)
    // Make SSL Payment Object:
    const {
      shippingAddress: { phone, address, city, postCode, country },
      totalPrice,
      orderItems,
    } = orderDetails
    const { name: productName } = orderItems[0]
    // const { name: customerName, email: customerEmail } = req.user
    const paymentObject = makeSSLObject(
      'Nazmul',
      'nazmul@gmail.com',
      address,
      city,
      postCode,
      country,
      totalPrice,
      productName,
      phone
    )

    // SSL Credientials:
    const STORE_ID = 'mysho6133782e72d11'
    const STORE_PASSWORD = 'mysho6133782e72d11@ssl'
    const IS_LIVE = false

    const sslcz = new SSLCommerzPayment(STORE_ID, STORE_PASSWORD, IS_LIVE)
    sslcz.init(paymentObject).then((apiResponse) => {
      let GatewayPageURL = apiResponse.GatewayPageURL
      res.redirect(GatewayPageURL)
    })
  } catch (error) {
    console.log(error)
  }
}

/**
 * @description Redirects to Success Payment.
 * @Route POST /api/payment/success
 * @Access SSL Redirect
 * @returns {} - .
 */
const paymentSuccess = async (req, res, next) => {
  try {
    // console.log(req.body)
    res.json({ message: 'Request Successfull' })
  } catch (error) {}
}

/**
 * @description Redirects to Failed Payment.
 * @Route POST /api/payment/fail
 * @Access SSL Redirect
 * @returns {} - .
 */
const paymentFail = async (req, res, next) => {
  try {
    // console.log(req.body)
    res.json({ message: 'Success' })
  } catch (error) {}
}

/**
 * @description Redirects to Canceled Payment.
 * @Route POST /api/payment/cancel
 * @Access SSL Redirect
 * @returns {} - .
 */
const paymentCancel = async (req, res, next) => {
  try {
    // console.log(req.body)
    res.json({ message: 'Success' })
  } catch (error) {}
}

/**
 * @description Redirects to IPN Payment.
 * @Route POST /api/payment/ipn
 * @Access SSL Redirect
 * @returns {} - .
 */
const paymentIpn = async (req, res, next) => {
  try {
    // console.log(req.body)
    res.json({ message: 'Success' })
  } catch (error) {}
}

// Module Exports
module.exports = {
  makePayment,
  paymentSuccess,
  paymentFail,
  paymentCancel,
  paymentIpn,
}
