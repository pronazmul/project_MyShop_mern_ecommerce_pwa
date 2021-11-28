// External Modules:
const express = require('express')
const dotenv = require('dotenv')
const colors = require('colors')
const cors = require('cors')
const path = require('path')

// Live Application URL
// https://mydevshop.herokuapp.com/

// Internal Modules:
const {
  notFoundHandler,
  errorHandler,
} = require('./middlewares/common/errorHandler')
const mongoConnection = require('./config/db')
const productRouter = require('./routers/productRouter')
const paymentRouter = require('./routers/paymentRouter')
const userRouter = require('./routers/userRouter')
const uploadRouter = require('./routers/uploadRouter')

// Configuration:
const app = express()
dotenv.config()

// Database Connection:
mongoConnection()

// Static Public Accessable Folder:
app.use(express.static(path.join(__dirname, 'public')))

// Request Parser:
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Applicaton Routing:
app.use('/api/products', productRouter)
app.use('/api/user', userRouter)
app.use('/api/payment', paymentRouter)

// Test Routing
app.use('/api/upload', uploadRouter)

// Not Found Handler:
app.use(notFoundHandler)

// Error Handler:
app.use(errorHandler)

// Server Listener
app.listen(process.env.PORT, () =>
  console.log(
    `SERVER Running as ${process.env.NODE_ENV} in Port: ${process.env.PORT}`
      .rainbow.bold
  )
)
