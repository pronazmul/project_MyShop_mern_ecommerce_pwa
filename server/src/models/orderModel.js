// External MOdules:
const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

// Schema Defination:
const orderSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    orderItems: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Product',
          required: true,
        },
        name: { type: String, required: true },
        qty: { type: Number, default: 1 },
        price: { type: Number, required: true },
        images: [String],
      },
    ],
    taxPrice: { type: Number, default: 0 },
    shippingPrice: { type: Number, default: 0 },
    totalPrice: { type: Number, default: 0 },
    shippingAddress: {
      phone: { type: String, required: true },
      address: { type: String, required: true },
      city: { type: String, required: true },
      postCode: { type: String, required: true },
      country: { type: String, required: true },
    },
    paymentMethod: String,
    paymentResult: {},
    isPaid: { type: Boolean, default: false },
    paidAt: Date,
    isDelivered: { type: Boolean, default: false },
    deliveredAt: Date,
  },
  { timestamps: true, versionKey: false }
)

// Integrate Unique Validator Plugin:
orderSchema.plugin(uniqueValidator, {
  message: '{PATH} must be unique, {VALUE} already Exists!',
})

// Order Model:
const Order = mongoose.model('Order', orderSchema)

// Export Module
module.exports = Order
