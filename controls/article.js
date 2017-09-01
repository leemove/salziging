const Article = require('../models/article')
const moment = require('moment')
module.exports = {
  async newArticle (ctx, next) {
    let articleDate = {
      author: ctx.request.body.author || '无名氏',
      content: ctx.request.body.content || '',
      updateTime: moment(),
      title: ctx.request.body.title || '没有标题并不妨碍我是一篇好文章'
    }
    let isEmpty = function (str, defult) {
      if (str === '') {
        str = defult
      }
    }
    // isEmpty(articleDate.title, '没有标题并不妨碍我是一篇好文章')
    let flag = true
    next()
    try {
      if(!articleDate.content.length || articleDate.content.length < 50) {
        flag = false
        ctx.body = {
          status: '你也太短了吧,小于50字(cm)不要和我对话'
        }
        return
      }
      const article = new Article(articleDate)
      await article.save()
      ctx.body = {status: 'ok'}
    }catch (e) {
      flag = false
      ctx.body= {status: '网络不太给力,重新试下.'}
      console.log(e)
      return
    }
  }
}