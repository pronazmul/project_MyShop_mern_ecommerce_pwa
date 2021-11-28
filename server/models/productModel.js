// External Modules
const mongoose = require('mongoose')

// Review Schema:
const reviewSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    comment: { type: String, required: true },
    rating: { type: Number, required: true },
  },
  { timestamps: true }
)

// Product Schema:
const productSchema = mongoose.Schema(
  {
    user: { type: mongoose.Types.ObjectId, ref: 'People' },
    name: { type: String, required: true },
    size: { type: String, enum: ['S', 'M', 'L', 'XL', 'XXL'] },
    images: [{ type: String, required: true }],
    brand: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
    reviews: [reviewSchema],
    rating: { type: Number, required: true, default: 0.0 },
    numReviews: { type: Number, required: true, default: 0.0 },
    price: { type: Number, required: true, default: 0.0 },
    countInStock: { type: Number, required: true, default: 0 },
  },
  { timestamps: true }
)

// Make Model
const Product = mongoose.model('Product', productSchema)

//Module Export:
module.exports = Product
