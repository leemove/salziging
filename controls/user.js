const User = require('../models/user')
module.exports = {
  async sign (ctx, next) {
    console.log(ctx)
    await next()
    ctx.body = "<h1>sign</h1>"
  }
}