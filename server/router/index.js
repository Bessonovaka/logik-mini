const Router = require('express').Router;
const userController = require('../controlers/user-controllers');
const kvizController = require('../controlers/kviz-controllers');
const router = new Router();
const {body} = require('express-validator');
const authMiddleware = require('../middlewares/auth-middleware');

router.post('/registration', 
body('email').isEmail(),
body('password').isLength({min: 3, max: 32}),
userController.registration);
router.post('/login', userController.login);
router.post('/logout', userController.logout);
router.get('/activate/:link', userController.activate);
router.get('/refresh', userController.refresh);
router.get('/users', authMiddleware, userController.getUsers);

router.post('/postkviz', kvizController.postKviz);
router.get('/kvizs', authMiddleware, userController.getKvizs);

module.exports = router