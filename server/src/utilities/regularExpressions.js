const emailRegex = /\S+@\S+\.\S+/
const passwordRegex =
  /^(?=.*[0-9])(?=(?:[^A-Z]*[A-Z]){1})(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,15}$/

module.exports = { emailRegex, passwordRegex }
