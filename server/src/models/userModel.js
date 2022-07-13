// Required Packeges:
const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

// Schema Definition:
const userSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: { type: String, required: true },
    image: String,
    role: { type: String, enum: ['user', 'admin'], default: 'user' },
    status: { type: String, enum: ['active', 'inactive'], default: 'active' },
  },
  { timestamps: true, versionKey: false }
)

// Integrate Unique Validator Plugin:
userSchema.plugin(uniqueValidator, {
  message: '{PATH} must be unique, {VALUE} already Exists!',
})

// Make password Hashed before saving:
userSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 8)
  } else {
    return next()
  }
})

// Make password Hashed before Updating:
userSchema.pre('findOneAndUpdate', async function (next) {
  if (this.getUpdate().password) {
    this.getUpdate().password = await bcrypt.hash(this.getUpdate().password, 10)
  }
})

/**
 * @desc JWT Token Generation Function
 * @param {Object} payload Object
 * @param {String} secret Secret Key
 * @param {number} - milisecond Expriration Time
 * @returns token
 */
userSchema.methods.generateJwtToken = function (
  userObject,
  secret = process.env.JWT_SECRET,
  expirationTime = process.env.JWT_EXPIRATION_TIME
) {
  return jwt.sign(userObject, secret, {
    expiresIn: expirationTime,
  })
}

/**
 * @desc Compare Password Function
 * @param {String} user input password
 * @returns boolean
 */
userSchema.methods.checkPassword = async function (password) {
  return await bcrypt.compare(password, this.password)
}

// User Model:
const User = mongoose.model('User', userSchema)

module.exports = User
