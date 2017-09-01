const moogoose = require('mongoose')

const acticleSche = moogoose.Schema({
  author: String,
  content: String,
  updateTime: Date,
  title: String
})
const Article = moogoose.model('Article', acticleSche)
module.exports = Article