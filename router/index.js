const router = require('koa-router')()
const homepageHandel = require('../controls/home')
const userHandel = require('../controls/user')
const articleHandel = require('../controls/article')
// router.get('/user/login', require('../controls/user'))
// router.get('/', homepageHandel.index)
router.post('/api/user/sign', userHandel.sign)
router.post('/api/article/new', articleHandel.newArticle)
module.exports = router