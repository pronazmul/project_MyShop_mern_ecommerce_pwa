// External MOdules:
const colors = require('colors')
require('dotenv').config()

// Internal Modules:
const { Products, Peoples } = require('./dummyData')
const mongoConnection = require('../config/db')
const Product = require('../models/productModel')
const People = require('../models/peopleModel')

// DataBase Connection:
mongoConnection()

// Data Import Function:
const importData = async () => {
  try {
    await Product.deleteMany()
    await People.deleteMany()
    const createUser = await People.insertMany(Peoples)
    const prepareProduct = Products.map((products) => {
      return { ...products, user: createUser[0]._id }
    })
    await Product.insertMany(prepareProduct)
    console.log('Data Inserted!'.magenta.inverse)
    process.exit()
  } catch (error) {
    console.log(`Error: ${error}`.red.inverse)
    process.exit(1)
  }
}

// Destroy Data:
const destroyData = async () => {
  try {
    await People.deleteMany()
    await Product.deleteMany()
    console.log(`Data Destroyed`.magenta.bold)
    process.exit()
  } catch (error) {
    console.log(`Error: ${error}`.red.inverse)
    process.exit(1)
  }
}

// Manage Seeder Command:
if (process.argv[2] === '-d') {
  destroyData()
} else {
  importData()
}
