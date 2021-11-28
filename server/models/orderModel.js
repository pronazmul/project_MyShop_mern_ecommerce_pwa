// External Module:
const mongoose = require('mongoose')

// Order Schema:
const orderItemsSchema = mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  qty: { type: Number, required: true },
  price: { type: Number, required: true },
  product: {
    type: mongoose.Types.ObjectId,
    ref: 'Product',
    required: true,
  },
})

// Make Order Schema:
const orderSchema = mongoose.Schema(
  {
    user: { type: mongoose.Types.ObjectId, ref: 'People', required: true },
    orderItems: [orderItemsSchema],
    shippingAddress: {
      address: { type: String, required: true },
      city: { type: String, required: true },
      postalCode: { type: String, required: true },
      country: { type: String, required: true },
    },
    paymentMethod: { type: String, required: true },
    paymentResult: {
      id: String,
      status: String,
      update_time: String,
      email_address: String,
    },
    taxPrice: { type: Number, required: true, default: 0.0 },
    shippingPrice: { type: Number, required: true, default: 0.0 },
    totalPrice: { type: Number, required: true, default: 0.0 },
    isPaid: { type: Boolean, required: true, default: false },
    isDelivered: { type: Boolean, required: true, default: false },
    paidAt: Date,
    deliveredAt: Date,
  },
  { timestamps: true }
)

// Make Order Model:
const Order = mongoose.model('Order', orderSchema)

// Export Module:
module.exports = Order
