// External modules:
const express = require('express')
const multer = require('multer')
const router = express.Router()
const path = require('path')

// Routing:
const UPLOAD_FOLER = './public/upload'
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, UPLOAD_FOLER)
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname)
    const name =
      file.originalname.replace(ext, '').toLowerCase().split(' ').join('_') +
      '_' +
      Date.now()
    cb(null, name + ext)
  },
})
const upload = multer({
  storage: storage,
  limits: { fileSize: 1000000 },
  fileFilter: (req, file, cb) => {
    const imgFormat = ['image/png', 'image/jpg', 'image/jpeg', 'image/webp']
    if (file.fieldname === 'products') {
      if (imgFormat.indexOf(file.mimetype) > -1) {
        cb(null, true)
      } else {
        cb(new Error('Only png format is supported!'))
      }
    } else {
      cb(new Error('Invalid Input Field Name'))
    }
  },
})

router.post('/', upload.array('products', 5), (req, res) => {
  res.json(req.files)
})

// Module Export:
module.exports = router
