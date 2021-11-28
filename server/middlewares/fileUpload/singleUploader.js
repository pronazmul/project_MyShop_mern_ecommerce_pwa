// Internal Utilities Functions:
const multerUploader = require('../../utilities/multerUploader')

const avatarUpload = (req, res, next) => {
  // Multer Upload Pre-Requisites:
  const upload = multerUploader(
    'avatars',
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

// module Exprort
module.exports = { avatarUpload }
