const fs = require('fs')
const path = require('path')
module.exports = {
  async index (ctx, next) {
    await next()
    ctx.redirect('/index.html')
  }
}