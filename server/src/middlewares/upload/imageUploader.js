// Required Modules:
const createError = require('http-errors')
const multerObjectMaker = require('../../utilities/multarObjectMaker')

/**
 * @desc Multipart FormData MiddleWare For uploading Single Image, Validate & Upload, Return Direct Image Link in req.file Object.
 * @param {String} fieldName - Field Name. Default: 'image'
 * @param {String} subFolder - Sub Folder. Default: 'images'
 * @param {Array} supportedFormats - Supported Formats. Default: ['image/jpeg', 'image/jpg', 'image/png', 'image/webp']
 * @param {Number} maxFileSize - Max File Size. Default: 1000000
 * @param {String} errorMessage - Error Message. Default: 'Unsupported Image Format!'
 * @returns {Function} - Express Next Middleware
 */

const singleUploader =
  (
    fieldName = 'image',
    subFolder = 'images',
    supportedFormats = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'],
    maxFileSize = 1000000,
    errorMessage = 'Unsupported Image Format!'
  ) =>
  async (req, res, next) => {
    try {
      let uploadObject = multerObjectMaker(
        subFolder,
        supportedFormats,
        maxFileSize,
        errorMessage
      )
      await uploadObject.single(fieldName)(req, res, (error) => {
        if (error) {
          next(createError(500, error.message))
        } else {
          if (req.file) {
            let data = {
              ...req.file,
              link:
                process.env.APP_URL +
                '/uploads/' +
                subFolder +
                '/' +
                req.file.filename,
            }
            req.file = data
          }
          next()
        }
      })
    } catch (error) {
      next(createError(500, error.message))
    }
  }

/**
 * @desc Multipart FormData MiddleWare For uploading Multiple Images, Validate & Upload, Return Direct Image Links Array in req.files Object.
 * @param {String} fieldName - Field Name. Default: 'images'
 * @param {String} subFolder - Sub Folder. Default: 'images'
 * @param {Number} maxCount - Max Count. Default: 5
 * @param {Array} supportedFormats - Supported Formats. Default: ['image/jpeg', 'image/jpg', 'image/png', 'image/webp']
 * @param {Number} maxFileSize - Max File Size. Default: 1000000
 * @param {String} errorMessage - Error Message. Default: 'Unsupported Image Format!'
 * @returns {Function} - Express Next Middleware
 */

const multipleUploader =
  (
    fieldName = 'images',
    subFolder = 'images',
    maxCount = 5,
    supportedFormats = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'],
    maxFileSize = 1000000,
    errorMessage = 'Unsupported Image Format!'
  ) =>
  async (req, res, next) => {
    try {
      let uploadObject = multerObjectMaker(
        subFolder,
        supportedFormats,
        maxFileSize,
        errorMessage
      )

      await uploadObject.array(fieldName, maxCount)(req, res, (error) => {
        if (error) {
          next(createError(500, error.message))
        } else {
          if (req.files) {
            let data = req.files.map(
              (file) =>
                process.env.APP_URL +
                '/uploads/' +
                subFolder +
                '/' +
                file.filename
            )
            req.files = { ...req.files, links: data }
          }
          next()
        }
      })
    } catch (error) {
      next(createError(500, error.message))
    }
  }

// Module Exprots:
module.exports = { singleUploader, multipleUploader }
