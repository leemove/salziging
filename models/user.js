const mongoose = require('mongoose')

let userSchema = mongoose.Schema({
  username: String,
  password: String,
  avator: Buffer
})
let User = mongoose.model('User', userSchema)

module.exports = User