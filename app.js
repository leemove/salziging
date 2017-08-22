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
app.listen(3000, () => {
  console.log(`running at 3000`)
})
app.on('error', (e) => {
  console.log(e)
})