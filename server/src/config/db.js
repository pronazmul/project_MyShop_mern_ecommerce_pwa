// Required packeges:
const mongoose = require('mongoose')

// Connect to MongoDB
const mongooseConnection = async () => {
  try {
    const OPTIONS = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      user: '',
      pass: '',
    }
    await mongoose.connect(process.env.MONGODB_URI, OPTIONS)
    console.log(
      `MongoDB Successfully Connected with ${mongoose.connection.name}`.green
        .bold
    )
  } catch (error) {
    console.log(`Error ${error.message}`.red.bold)
    process.exit(1)
  }
}

// Module Connection:
module.exports = { mongooseConnection }
