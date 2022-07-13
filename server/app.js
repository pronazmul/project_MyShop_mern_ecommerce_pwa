// External Modules:
const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv')
const path = require('path')
const cookieParser = require('cookie-parser')
const cors = require('cors')

// Internal Modules:
const {
  notFoundHandler,
  errorHandler,
} = require('./src/middlewares/common/customErrorHandler')
const router = require('./src/routes/routes')
const { mongooseConnection } = require('./src/config/db')
const {
  apiRateLimiter,
} = require('./src/middlewares/authentication/api_rate_limiter')

// Initialize App
dotenv.config()
const app = express()
app.use(cors())

// Database Connection
mongooseConnection()

// Request Limit Middleware (100 Request Per 1 Minute)):
app.use(apiRateLimiter(100))

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')))

// Request Parser
app.use(express.json())
app.use(cookieParser(process.env.COOKIE_SECRET))

// Routes
app.get('/', (req, res) => res.send('Welcome From Ecommerce API'))
app.use('/api/v1', router)

// Not Found Handler:
app.use(notFoundHandler)

// Error Handler:
app.use(errorHandler)

// Start the server
app.listen(process.env.PORT, () =>
  console.log(`Example app listening on port ${process.env.PORT}`.rainbow.bold)
)
