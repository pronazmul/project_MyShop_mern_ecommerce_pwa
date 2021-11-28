// External Modules:
const SSLCommerzPayment = require('sslcommerz-lts')

/**
 * @desc   Make Payment With SSL Commerz
 * @Route  POST /api/payment
 * @access user
 */
const makePayment = (req, res, next) => {
  const STORE_ID = 'mysho6133782e72d11'
  const STORE_PASSWORD = 'mysho6133782e72d11@ssl'
  const IS_LIVE = false

  const data = {
    total_amount: 100,
    currency: 'BDT',
    tran_id: 'REF1234', // use unique tran_id for each api
    success_url: `https://mydevshop.herokuapp.com/api/payment/success`,
    fail_url: `https://mydevshop.herokuapp.com/api/payment/fail`,
    cancel_url: `https://mydevshop.herokuapp.com/api/payment/cancel`,
    ipn_url: `https://mydevshop.herokuapp.com/api/payment/ipn`,
    shipping_method: 'Courier',
    product_name: 'Computer.',
    product_category: 'Electronic',
    product_profile: 'general',
    cus_name: 'Customer Name',
    cus_email: 'customer@example.com',
    cus_add1: 'Dhaka',
    cus_add2: 'Dhaka',
    cus_city: 'Dhaka',
    cus_state: 'Dhaka',
    cus_postcode: '1000',
    cus_country: 'Bangladesh',
    cus_phone: '01711111111',
    cus_fax: '01711111111',
    ship_name: 'Customer Name',
    ship_add1: 'Dhaka',
    ship_add2: 'Dhaka',
    ship_city: 'Dhaka',
    ship_state: 'Dhaka',
    ship_postcode: 1127,
    ship_country: 'Bangladesh',
  }
  const sslcz = new SSLCommerzPayment(STORE_ID, STORE_PASSWORD, IS_LIVE)
  sslcz.init(data).then((apiResponse) => {
    let GatewayPageURL = apiResponse.GatewayPageURL
    res.redirect(GatewayPageURL)
  })
}

/**
 * @desc   Make Payment With SSL Commerz
 * @Route  POST /api/payment/success
 * @access ssl-redirect
 */
const paymentSuccess = async (req, res, next) => {
  // res.json({ status: 'Payment Success', data: req.body })
  res.redirect('https://pronazmul.netlify.app/order?payment=success')
}

/**
 * @desc   Make Payment With SSL Commerz
 * @Route  POST /api/payment/fail
 * @access ssl-redirect
 */
const paymentFail = async (req, res, next) => {
  // res.json({ status: 'Payment Fail', data: req.body })
  res.redirect('https://pronazmul.netlify.app/order?payment=fail')
}

/**
 * @desc   Make Payment With SSL Commerz
 * @Route  POST /api/payment/cancel
 * @access ssl-redirect
 */
const paymentCancel = async (req, res, next) => {
  // res.json({ status: 'Payment Canceled', data: req.body })
  res.redirect('https://pronazmul.netlify.app/order?payment=cancel')
}

/**
 * @desc   Make Payment With SSL Commerz
 * @Route  POST /api/payment/ipn
 * @access ssl-redirect
 */
const paymentIpn = async (req, res, next) => {
  res.json({ status: 'Payment Ipn Method Called', data: req.body })
}

// Export Modules
module.exports = {
  makePayment,
  paymentSuccess,
  paymentFail,
  paymentCancel,
  paymentIpn,
}
