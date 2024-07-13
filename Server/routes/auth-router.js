const express = require('express')
const authController = require('../Controller/auth-controller') 
const router = express.Router();
const {zodRegisterSchema, zodContactSchema, zodLoginSchema} = require('./../Validator/auth-validator')
const authMiddleware = require("./../Middlewares/auth-validator-middleware")

router.route('/').get(authController.Home)
router.route('/register').post(authMiddleware(zodRegisterSchema), authController.Register)
router.route('/contact').post(authMiddleware(zodContactSchema), authController.Contact)
router.route('/login').post(authMiddleware(zodLoginSchema), authController.Login)
router.route('/services').get(authController.Services)



module.exports = router