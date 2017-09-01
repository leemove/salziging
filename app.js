const koa = require('koa')
const app  = new koa()
const bodyparser = require('koa-bodyparser')
const mongoose = require('mongoose')
const router = require('./router')
const static = require('koa-static')
const path = require('path')
app.use(bodyparser())
// app.use(async ctx => {
//   // the parsed body will store in ctx.request.body
//   // if nothing was parsed, body will be an empty object {}
//   ctx.body = ctx.request.body;
// })
require('./config/init')(app, mongoose)
app.env = 'development'
app.use(static(path.resolve(__dirname, './dist')))
app.use(router.routes())
// app.use((ctx, next) => {
//   const path = ctx.path
//   ctx.body = {path}
// })
app.listen(3002, () => {
  console.log(`程序已经运行 运行在3001端口`)
})
app.on('error', (e) => {
  console.log('报错了', e)
})