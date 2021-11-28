const mongoose = require('mongoose')

const mongoConnection = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_CONNECTION_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    })
    console.log(`MongoDB Connected with ${connect.connection.name}`.green.bold)
  } catch (error) {
    console.log(`Error ${error.message}`.red.bold)
    process.exit(1)
  }
}

// Module Exports:
module.exports = mongoConnection
