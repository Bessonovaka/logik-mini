const Router = require('express')
const router = new Router()
const controller = require('./authController')
const {check} = require("express-validator")
const authMiddleware = require('./middleware/authMiddleware')

router.post('/registration',[
    check('username', "Имя пользователя не может быть пустым").notEmpty(),
    check('password', "Пароль должен быть больше 4 символов и меньше 10").isLength({min: 4, max: 10})
], controller.registration)
router.post('/registration', controller.registration)
router.post('/login', controller.login)
router.get('/users', authMiddleware, controller.getUsers)
//router.get('/users', roleMiddleware(['ADMIN', 'USER']), controller.getUsers)

module.exports = router