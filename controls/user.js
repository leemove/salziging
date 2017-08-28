const User = require('../models/user')
const Usermodel = require('../models/user')
module.exports = {
  async sign (ctx, next) {
    const my = new Usermodel({
      username: 'test',
      password: 'test'
    })
    await my.save()
    await next()
    ctx.body = {ok: 'ok'}
  }
}