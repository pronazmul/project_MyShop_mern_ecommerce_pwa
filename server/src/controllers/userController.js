// External Modules :
const createError = require('http-errors')

// Internal Modules :
const User = require('../models/userModel')
const {
  mongooseErrorFomatter,
  regxSearchQuery,
} = require('../utilities/helperFunctions')
const { unlinkImage } = require('../utilities/unlinkFile')

/**
 * @description This API is used to Create New User.
 * @Route POST /api/v1/users
 * @Access Public
 * @returns {Object} - Created User.
 */
const createUser = async (req, res, next) => {
  try {
    let { role, status, image, ...rest } = req.body
    let newUser = new User(rest)
    let user = await newUser.save()
    let userData = {
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      status: user.status,
      image: user.image,
    }
    let token = newUser.generateJwtToken(userData)
    res.status(200).json({ status: 'success', data: { ...userData, token } })
  } catch (error) {
    if (error._message) {
      res.status(500).json({
        status: 'fail',
        message: 'Input Validation Failed',
        details: mongooseErrorFomatter(error.errors),
      })
    } else {
      next(createError(500, 'Data Failed to Create'))
    }
  }
}

/**
 * @description This API is used to Login User.
 * @Route POST /api/v1/users/login
 * @Access Public
 * @returns {Object} - LoggedIn User With Auth Token.
 */
const userLogin = async (req, res, next) => {
  try {
    let { email, password } = req.body
    console.log({ normal: req.cookies })
    console.log({ secredCookies: req.signedCookies[process.env.COOKIE_NAME] })
    console.log({ secret: req.secret })
    let user = await User.findOne({ email })
    let checkPassword = await user.checkPassword(password)
    if (user && checkPassword) {
      let userData = {
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        status: user.status,
        image: user.image,
      }
      let token = user.generateJwtToken(userData)
      // Set Cookie:
      res.cookie(process.env.COOKIE_NAME, userData, {
        maxAge: process.env.JWT_EXPIRATION_TIME,
        httpOnly: true,
        signed: true,
      })
      res.status(200).json({ status: 'success', data: { ...userData, token } })
    } else {
      next(createError(401, 'Authentication Failed!'))
    }
  } catch (error) {
    next(createError(401, 'Authentication Failed!'))
  }
}

/**
 * @description This API is Update Logged IN User.
 * @Route PUT /api/v1/users/update
 * @Access LoggedInUser
 * @returns {Object} - LoggedIn User With Auth Token.
 */
const updateProfile = async (req, res, next) => {
  try {
    let query = { _id: req.user._id }
    let { role, status, image, password, ...updatedData } = req.body
    let options = { runValidators: true, new: true }
    let user = await User.findByIdAndUpdate(query, updatedData, options)
    let userData = {
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      status: user.status,
      image: user.image,
    }
    let token = user.generateJwtToken(userData)
    res.status(200).json({ status: 'success', data: { ...userData, token } })
  } catch (error) {
    if (error._message) {
      res.status(500).json({
        status: 'fail',
        message: 'Input Validation Failed',
        details: mongooseErrorFomatter(error.errors),
      })
    } else {
      next(createError(500, 'Failed To Update'))
    }
  }
}

/**
 * @description This API is Upload Logged In user Profile Picture.
 * @Route POST /api/v1/users/upload
 * @Access LoggedInUser
 * @returns {Object} - LoggedIn User With Auth Token.
 */
const uploadProfilePicture = async (req, res, next) => {
  try {
    let query = { _id: req.user._id }
    let options = { runValidators: true, new: true }
    const result = await User.findOne(query)
    if (result.image && req.file) {
      let removeOldOne = await unlinkImage(result.image)
      if (removeOldOne) result.image = req.file.link
    }
    if (req.file) result.image = req.file.link
    let updateData = { image: result.image }
    const updatedUser = await User.findByIdAndUpdate(query, updateData, options)
    let userData = {
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      role: updatedUser.role,
      image: updatedUser.image,
    }
    let token = updatedUser.generateJwtToken(userData)
    console.log(token)
    res.status(200).json({ status: 'success', data: { ...userData, token } })
    let
  } catch (error) {
    if (error._message) {
      res.status(500).json({
        status: 'fail',
        message: 'Input Validation Failed',
        details: mongooseErrorFomatter(error.errors),
      })
    } else {
      next(createError(500, 'Failed To Upload'))
    }
  }
}

/**
 * @description This API Fetch Single User INformatin BY ID..
 * @Route GET /api/v1/users/:id
 * @Access Admin
 * @returns {Object} - Single User Object
 */
const getSingleUser = async (req, res, next) => {
  try {
    let query = { _id: req.params.id }
    let projection = { password: 0 }
    let user = await User.findOne(query, projection)
    res.status(200).json({ status: 'success', data: user })
  } catch (error) {
    next(createError(500, 'Failed To Fetch'))
  }
}

/**
 * @description This API Update Single User Info BY ID.
 * @Route PUT /api/v1/users/:id
 * @Access Admin
 * @returns {Object} - Updated User Object
 */
const updateUser = async (req, res, next) => {
  try {
    let query = { _id: req.params.id }
    let { image, ...updatedData } = req.body
    let options = {
      runValidators: true,
      new: true,
      projection: { password: 0 },
    }
    let user = await User.findByIdAndUpdate(query, updatedData, options)
    res.status(200).json({ status: 'success', data: user })
  } catch (error) {
    if (error._message) {
      res.status(500).json({
        status: 'fail',
        message: 'Input Validation Failed',
        details: mongooseErrorFomatter(error.errors),
      })
    } else {
      next(createError(500, 'Failed To Update'))
    }
  }
}

/**
 * @description This API Delete Single User BY ID.
 * @Route DELETE /api/v1/users/:id
 * @Access Admin
 * @returns {Object} - Deleted User Count
 */
const deleteUser = async (req, res, next) => {
  try {
    let query = { _id: req.params.id }
    let user = await User.findOne(query)
    if (user.image) {
      await unlinkImage(user.image)
      user = await User.deleteOne(query)
    } else {
      user = await User.deleteOne(query)
    }
    res.status(200).json({ status: 'success', data: user })
  } catch (error) {
    next(createError(500, 'Failed to Delete User'))
  }
}

/**
 * @description This API Fetch All Existed Users.
 * @Route GET /api/v1/users/
 * @Access Admin
 * @returns {Array} - Array of All Users
 */
const allUsers = async (req, res, next) => {
  try {
    let query = req.query.search
      ? regxSearchQuery(req.query.search, ['name', 'email'])
      : {}
    let projection = { password: 0, createdAt: 0, updatedAt: 0 }
    let entities = req.query.entities ? Number(req.query.entities) : false
    let page = req.query.page ? Number(req.query.page) : false
    const userCount = await User.countDocuments(query)
    if (entities && page) {
      const users = await User.find(query, projection)
        .limit(entities)
        .skip(entities * (page - 1))
      res.status(200).json({
        status: 'success',
        count: userCount,
        pages: Math.ceil(userCount / entities),
        currentPage: page,
        data: users,
      })
    } else {
      let user = await User.find(query, projection)
      res.status(200).json({ status: 'success', count: userCount, data: user })
    }
  } catch (error) {
    next(createError(500, 'Failed To Fetch Users'))
  }
}

// Module Exports
module.exports = {
  createUser,
  userLogin,
  updateProfile,
  uploadProfilePicture,
  getSingleUser,
  updateUser,
  deleteUser,
  allUsers,
}
