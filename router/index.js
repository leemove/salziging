const router = require('koa-router')()
const homepageHandel = require('../controls/home')
const userHandel = require('../controls/user')
// router.get('/user/login', require('../controls/user'))
// router.get('/', homepageHandel.index)
router.post('/api/user/sign', userHandel.sign)

module.exports = router