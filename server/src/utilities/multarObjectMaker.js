// Required Modules
const createError = require('http-errors')
const multer = require('multer')
const path = require('path')

/**
 * @desc Multar Upload Object Generator with Validation
 * @param {String} subFolderPath - Sub Folder Path. Default: 'images'
 * @param {Array} allowedFileFormats - Allowed File Format. Default: [...]
 * @param {Number} maxFileSize - Max File Size in bytes. Default is 1MB
 * @param {String} errorMessage - Error Message. Default: 'Unsupported Image Format!'
 * @returns {Object} - Multer Object
 */

const multerObjectMaker = (
  subFolderPath = 'images',
  allowedFileFormat = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'],
  maxFileSize = 1000000,
  errorMessage = 'Unsupported Image Format!'
) => {
  let uplaodPath = `${__dirname}/../../public/uploads/${subFolderPath}`
  const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, uplaodPath),
    filename: (req, file, cb) => {
      let ext = path.extname(file.originalname)
      let fileName =
        file.originalname.replace(ext, '').split(' ').join('_') +
        '_' +
        Date.now() +
        ext
      cb(null, fileName)
    },
  })

  const upload = multer({
    storage: storage,
    limits: { fileSize: maxFileSize },
    fileFilter: (req, file, cb) => {
      if (allowedFileFormat.includes(file.mimetype)) {
        cb(null, true)
      } else {
        cb(createError(500, errorMessage))
      }
    },
  })
  return upload
}

module.exports = multerObjectMaker
