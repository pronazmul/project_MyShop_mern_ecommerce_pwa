// External modules:
const express = require('express')
const router = express.Router()

// Internal Modules:
const { checkExistedUser } = require('../controllers/userController')

// Routing:
router.route('/:id').get(checkExistedUser)

// Module Export:
module.exports = router
