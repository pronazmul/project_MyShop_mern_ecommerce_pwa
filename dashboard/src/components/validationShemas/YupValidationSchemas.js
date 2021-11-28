import * as yup from 'yup'

const SUPPORTED_FORMATS = ['image/jpeg', 'image/jpg', 'image/png']
const PasswordRegEx =
  /^.*((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/
const mobileRegEx = /(\+088)?-?01[0-9]\d{8}/g
const onlyChar = /^[A-Z a-z]+$/

export const proudctAddSchema = yup.object().shape({
  name: yup
    .string()
    .matches(onlyChar, 'Character Only')
    .min(3, 'Too Short !')
    .max(50, 'Too Long !')
    .required('Should Not Be Empty'),
  brand: yup
    .string()
    .min(3, 'Too Short !')
    .max(20, 'Too Long !')
    .required('Should Not Be Empty'),
  category: yup.string().required('Should Not Be Empty'),
  description: yup
    .string()
    .min(10, 'Too Short !')
    .max(1000, 'Too Long !')
    .required('Should Not Be Empty'),
  price: yup
    .string()
    .matches(/^[0-9]+$/, 'Must be only digits')
    .max(5, 'Maximum Price Limit!')
    .required('Price is Required!'),
  countInStock: yup
    .string()
    .matches(/^[0-9]+$/, 'Must be only digits')
    .max(5, 'Maximum Stock Limit!')
    .required('Stock is Required!'),
  images: yup.array().min(1, 'Minimum 1 Product Image Required'),
})
