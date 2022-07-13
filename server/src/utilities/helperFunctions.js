/**
 * @desc Express Validator Error Formatter Function
 * @param {Object} Error Object
 * @returns {Object} Formatted Object
 */

const expressValidatorErrorFormatter = (error = {}) => {
  return Object.entries(error).reduce(
    (state, [k, { msg }]) => ({ ...state, [k]: msg }),
    {}
  )
}

/**
 * @desc Mmongoose Validation Error Formatter Function
 * @param {Object} Error Object
 * @returns {Object} Formatted Object
 */
const mongooseErrorFomatter = (error) => {
  return Object.entries(error).reduce(
    (state, [k, { message }]) => ({ ...state, [k]: message }),
    {}
  )
}

/**
 * @desc Multiple Search Query Generator usign Regx
 * @param {string} Search String
 * @param {array} Array of Fields to search
 * @returns {object} Search Query Object
 */

function regxSearchQuery(searchString = '', fieldsArray = []) {
  return {
    $or: fieldsArray.map((v) => ({
      [v]: { $regex: searchString, $options: 'i' },
    })),
  }
}

/**
 * @desc Calculate Rating From Custmer Reviews
 * @param {array} Review Array
 * @returns {number} calculated Rating
 */

function getRating(reviews = []) {
  return Number(
    (reviews.reduce((x, y) => x + y, 0) / reviews.length).toFixed(1)
  )
}

/**
 * @desc Make SSL Payment Object
 * @param {String} String Customer Name
 * @param {String} String Customer Email
 * @param {String} String Customer Address
 * @param {String} String Customer City
 * @param {String} String Customer PostCode
 * @param {String} String Customer Country
 * @param {String} String Total Price
 * @param {String} String Product Name
 * @param {String} String Phone Number
 * @param {String} String Category
 * @returns {Object} SSL Payment Object
 */

function makeSSLObject(
  customerName,
  customerEmail,
  address,
  city,
  postCode,
  country,
  totalPrice,
  productName,
  phone = '01711111111',
  category = 'Home & Fusion'
) {
  return {
    total_amount: totalPrice,
    currency: 'BDT',
    tran_id: 'REF1234', // use unique tran_id for each api
    success_url: `https://mydevshop.herokuapp.com/api/payment/success`,
    fail_url: `https://mydevshop.herokuapp.com/api/payment/fail`,
    cancel_url: `https://mydevshop.herokuapp.com/api/payment/cancel`,
    ipn_url: `https://mydevshop.herokuapp.com/api/payment/ipn`,
    shipping_method: 'Courier',
    product_name: productName,
    product_category: category,
    product_profile: 'general',
    cus_name: customerName,
    cus_email: customerEmail,
    cus_add1: address,
    cus_add2: address,
    cus_city: city,
    cus_state: city,
    cus_postcode: postCode,
    cus_country: country,
    cus_phone: phone,
    cus_fax: phone,
    ship_name: customerName,
    ship_add1: address,
    ship_add2: address,
    ship_city: city,
    ship_state: city,
    ship_postcode: postCode,
    ship_country: country,
  }
}

// MOdule Exports:
module.exports = {
  expressValidatorErrorFormatter,
  mongooseErrorFomatter,
  regxSearchQuery,
  getRating,
  makeSSLObject,
}
