// Internal Utilities Functions:
const multerUploader = require('../../utilities/multerUploader')

const productsUpload = (req, res, next) => {
  // Multer Upload Pre-Requisites:
  const upload = multerUploader(
    'products',
    1048576,
    ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'],
    'Unsupported Image Format'
  )

  //   Avatar Upload Handler:
  upload.any()(req, res, (error) => {
    if (error) {
      res.status(500).json({ msg: error.msg })
    } else {
      next()
    }
  })
}

// Module Exports:
module.exports = { productsUpload }
