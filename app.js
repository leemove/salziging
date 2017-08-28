const koa = require('koa')
const app  = new koa()
const bodyparser = require('koa-bodyparser')
const mongoose = require('mongoose')
const router = require('./router')
const static = require('koa-static')
const path = require('path')
require('./config/init')(app, mongoose)
app.env = 'development'
app.use(bodyparser())

app.use(static(path.resolve(__dirname, './dist')))
app.use(router.routes())
// app.use((ctx, next) => {
//   const path = ctx.path
//   ctx.body = {path}
// })
app.listen(3000, () => {
  console.log(`程序已经运行 运行在300端口`)
})
app.on('error', (e) => {
  console.log('报错了', e)
})