const express = require('express')
const router = express.Router()
const userRoutes = require('./userRouter')
const productRoutes = require('./productRouter')
const orderRoutes = require('./orderRouter')
const paymentRoutes = require('./paymentRouter')

router.use('/users', userRoutes)
router.use('/products', productRoutes)
router.use('/orders', orderRoutes)
router.use('/payment', paymentRoutes)

// Module Exports
module.exports = router
