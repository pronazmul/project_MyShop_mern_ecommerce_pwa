// External MOdules:
const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

// Schema Defination:
const productSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    name: { type: String, required: true },
    brand: String,
    category: {
      type: String,
      required: true,
      enum: ['electronics', 'fashion', 'home', 'sports', 'others'],
    },
    description: String,
    rating: {
      type: Number,
      default: 0,
    },
    price: { type: Number, required: true },
    countInStock: { type: Number, required: true },
    numReviews: { type: Number, default: 0 },
    reviews: [
      {
        user: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          ref: 'User',
        },
        name: String,
        comment: String,
        rating: {
          type: Number,
          default: 0,
        },
      },
    ],
    images: [String],
  },
  { timestamps: true, versionKey: false }
)

// Integrate Unique Validator Plugin:
productSchema.plugin(uniqueValidator, {
  message: '{PATH} must be unique, {VALUE} already Exists!',
})

// Product Model:
const Product = mongoose.model('Product', productSchema)

// Export Module
module.exports = Product
