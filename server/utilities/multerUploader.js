// External Uploads:
const multer = require('multer')
const path = require('path')
const createError = require('http-errors')

const multerUploader = (folderPath, maxSize, allowedTypes, errorMsg) => {
  const uploadPath = `${__dirname}/../public/uploads/${folderPath}`

  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, uploadPath)
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
    limits: { fileSize: maxSize },
    fileFilter: (req, file, cb) => {
      if (allowedTypes.includes(file.mimetype)) {
        cb(null, true)
      } else {
        cb(createError(errorMsg))
      }
    },
  })

  return upload
}

// Module Exports:
module.exports = multerUploader
